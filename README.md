# Model Vault Desktop Prototype (Tauri + React)

This project now includes a **Tauri desktop wrapper** around the React/Vite UI.

## Run as a desktop app (recommended)

```bash
npm install
npm run tauri:dev
```

This launches the UI inside a native Tauri window (not a browser tab).

## Run as web preview only

```bash
npm run dev
```

Use this only for quick frontend iteration when you don't need native window packaging.

## Build desktop binaries

```bash
npm run tauri:build
```

## Project structure

- `src/`: React UI code.
- `src-tauri/`: Rust/Tauri desktop host (`Cargo.toml`, `tauri.conf.json`, `src/main.rs`).

## Notes

- Router is configured with `HashRouter` so packaged desktop routing works reliably.
- Tauri config points to Vite dev server in development and `dist/` for production builds.
