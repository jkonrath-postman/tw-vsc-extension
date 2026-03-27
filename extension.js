'use strict';

const vscode = require('vscode');

const FERN_DOCS_PREFIX = 'fern/docs/pages/';
const MDX_SUFFIX = '.mdx';
const LC_URL_PREFIX = 'https://learning.postman.com';
const LOCAL_URL_PREFIX = 'localhost:3000';

function getLcPathFromUri(uri) {
  if (!uri || uri.scheme !== 'file') {
    throw new Error('TW commands require a file from the workspace.');
  }

  const relativePath = vscode.workspace.asRelativePath(uri, false).replace(/\\/g, '/');

  if (
    !relativePath.startsWith(FERN_DOCS_PREFIX) ||
    !relativePath.endsWith(MDX_SUFFIX)
  ) {
    throw new Error(
      'TW commands only support files under fern/docs/pages/ with a .mdx extension.'
    );
  }

  const docPath = relativePath.slice(
    FERN_DOCS_PREFIX.length,
    relativePath.length - MDX_SUFFIX.length
  );

  if (!docPath) {
    throw new Error('Unable to derive a path from the selected file.');
  }

  return `/docs/${docPath}/`;
}

async function copyDerivedValue(uri, label, transform) {
  const targetUri = uri ?? vscode.window.activeTextEditor?.document?.uri;

  try {
    const lcPath = getLcPathFromUri(targetUri);
    const valueToCopy = transform(lcPath);

    await vscode.env.clipboard.writeText(valueToCopy);
    vscode.window.showInformationMessage(`Copied ${label}: ${valueToCopy}`);
  } catch (error) {
    vscode.window.showErrorMessage(error.message);
  }
}

function activate(context) {
  const copyLcPathCommand = vscode.commands.registerCommand('tw.copyLcPath', async (uri) => {
    await copyDerivedValue(uri, 'relative path', (lcPath) => lcPath);
  });

  const copyLcUrlCommand = vscode.commands.registerCommand('tw.copyLcUrl', async (uri) => {
    await copyDerivedValue(uri, 'LC URL', (lcPath) => `${LC_URL_PREFIX}${lcPath}`);
  });

  const copyLocalUrlCommand = vscode.commands.registerCommand('tw.copyLocalUrl', async (uri) => {
    await copyDerivedValue(uri, 'local URL', (lcPath) => `${LOCAL_URL_PREFIX}${lcPath}`);
  });

  context.subscriptions.push(copyLcPathCommand, copyLcUrlCommand, copyLocalUrlCommand);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
