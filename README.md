# TW VS Code Extension

This is a minimal VS Code extension scaffold that adds a `TW` submenu to the file explorer context menu.

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

## Running locally

1. Open this folder in VS Code.
2. Press `F5` to launch an Extension Development Host.
3. In the development host, right-click a matching file in the explorer and choose `TW > Copy Relative Path`.

## Build/deploy

```
npm install -D @vscode/vsce
npx @vscode/vsce package
```

## Run

Then install it in normal VS Code either by:

Command Palette: Extensions: Install from VSIX...
Or CLI:
code --install-extension tw-vsc-extension-0.0.1.vsix