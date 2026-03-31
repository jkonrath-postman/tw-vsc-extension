# TW VS Code Extension

This is a VS Code extension that adds a `TW` submenu to the file explorer context menu.

## Included commands

- `Copy Relative Path`
- `Copy LC URL`
- `Copy Local URL`

When you right-click a file in the explorer and choose `TW > Copy Relative Path`, the extension:

- expects the file path to be under `fern/docs/pages/`
- strips the `.mdx` suffix
- converts the path to `/docs/.../`

Example:

`fern/docs/pages/administration/domain-verification-and-capture/add-and-verify-a-domain.mdx`

becomes:

`/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/`

`Copy LC URL` copies:

`https://learning.postman.com/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/`

`Copy Local URL` copies:

`localhost:3000/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/`

## Install with Command Palette

1. Open the **Command Palette** (Cmd+Shift+P on Mac).
1. Enter "Extensions: Install from VSIX...".
1. Select the `.vsix` file.

## In the Extensions sidebar

1. Open the **Extensions** panel (Cmd+Shift+X).
1. Click `...` menu in the top-right of the panel.
1. Select **Install from VSIX...**.
1. Find to your `.vsix` file.

## In the terminal

Run the following command in your terminal:

`code --install-extension /path/to/your-extension.vsix`


## Running locally

1. Open this folder in VS Code.
2. Press `F5` to launch an Extension Development Host.
3. In the development host, right-click a matching file in the explorer and choose `TW > Copy Relative Path`.

## Build locally

```
npm install -D @vscode/vsce
npx @vscode/vsce package
```

## Automated releases

When the `version` in `package.json` changes on `main`, GitHub Actions will:

1. Build a new `.vsix`
2. Create a Git tag like `v0.0.2`
3. Create a GitHub Release for that tag
4. Upload the `.vsix` as the release asset

The built file is published to the GitHub Release, not committed into the repo.

## Run

Then install it in normal VS Code either by:

* Command Palette Cmd-Shift-P, then "Extensions: Install from VSIX..."

Or CLI:

```
code --install-extension tw-vsc-extension-0.0.1.vsix
```

If you don't have `code`, Cmd-Shift-P then "Shell Command: Install 'code' command in PATH"
