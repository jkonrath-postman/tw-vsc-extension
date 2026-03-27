'use strict';

const vscode = require('vscode');

const FERN_DOCS_PREFIX = 'fern/docs/pages/';
const MDX_SUFFIX = '.mdx';

function activate(context) {
  const copyLcPathCommand = vscode.commands.registerCommand('tw.copyLcPath', async (uri) => {
    const targetUri = uri ?? vscode.window.activeTextEditor?.document?.uri;

    if (!targetUri || targetUri.scheme !== 'file') {
      vscode.window.showErrorMessage('Copy LC Path requires a file from the workspace.');
      return;
    }

    const relativePath = vscode.workspace.asRelativePath(targetUri, false).replace(/\\/g, '/');

    if (
      !relativePath.startsWith(FERN_DOCS_PREFIX) ||
      !relativePath.endsWith(MDX_SUFFIX)
    ) {
      vscode.window.showErrorMessage(
        'Copy LC Path only supports files under fern/docs/pages/ with a .mdx extension.'
      );
      return;
    }

    const docPath = relativePath.slice(
      FERN_DOCS_PREFIX.length,
      relativePath.length - MDX_SUFFIX.length
    );

    if (!docPath) {
      vscode.window.showErrorMessage('Unable to derive an LC path from the selected file.');
      return;
    }

    const lcPath = `/docs/${docPath}/`;

    await vscode.env.clipboard.writeText(lcPath);
    vscode.window.showInformationMessage(`Copied LC path: ${lcPath}`);
  });

  context.subscriptions.push(copyLcPathCommand);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
