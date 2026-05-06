# Model Vault Desktop Prototype

This directory contains a high‑fidelity prototype of the **Model Vault** desktop interface. It is built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS** to match the cyberpunk aesthetic described in the product brief. The UI adopts the core loop of discovering, inspecting and downloading AI models.

## Structure

```
apps/desktop/
  package.json      # project metadata and dependencies
  vite.config.ts    # Vite build configuration
  tsconfig.json     # TypeScript compiler configuration
  tailwind.config.js# Tailwind CSS theming and colours
  postcss.config.js # postcss configuration used by Tailwind
  index.html        # entrypoint HTML file
  src/
    index.css       # global styles and Tailwind imports
    main.tsx        # mounts the React app
    app/
      App.tsx       # root component
      router.tsx    # route definitions
    components/     # reusable UI components
    pages/          # top‑level pages (Discover, Library, Downloads, etc.)
    stores/         # Zustand stores for global state
    lib/            # utilities, types and mock data
```

## Running locally

To run this prototype locally you will need Node.js installed. From the `apps/desktop` directory install dependencies and start the development server:

```bash
cd apps/desktop
npm install
npm run dev
```

The application will be served on [http://localhost:3000](http://localhost:3000). Note that the back‑end (Tauri commands, P2P downloads, etc.) is not implemented in this prototype; instead static mock data is used to render the UI.

## Notes

* **Dark theme**: The UI uses a dark graphite palette with neon accents. Colours are defined in `tailwind.config.js` and can be customised easily.
* **Responsiveness**: The layout collapses the right activity panel and sidebar on smaller screens. On mobile, selected model details move below the grid.
* **Zustand state**: A simple store keeps track of the currently selected model so that clicking a card updates the detail panel without leaving the page.
* **Mock data**: Models are defined in `src/lib/mockData.ts` and used for the discover page. In a full implementation these would be loaded via Tauri commands and TanStack Query.

This scaffold sets the stage for further development phases: adding interactivity, hooking up Tauri back‑end commands, and integrating with a real model index.