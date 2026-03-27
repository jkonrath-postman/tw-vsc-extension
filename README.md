# TW VS Code Extension

This is a minimal VS Code extension scaffold that adds a `TW` submenu to the file explorer context menu.

## Included command

- `Copy LC Path`

When you right-click a file in the explorer and choose `TW > Copy LC Path`, the extension:

- expects the file path to be under `fern/docs/pages/`
- strips the `.mdx` suffix
- converts the path to `/docs/.../`

Example:

`fern/docs/pages/administration/domain-verification-and-capture/add-and-verify-a-domain.mdx`

becomes:

`/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/`

## Running locally

1. Open this folder in VS Code.
2. Press `F5` to launch an Extension Development Host.
3. In the development host, right-click a matching file in the explorer and choose `TW > Copy LC Path`.
