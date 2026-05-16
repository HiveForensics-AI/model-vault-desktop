# Model Vault Desktop

An early-stage desktop app for discovering, downloading, and seeding local AI models through verified peer-to-peer transfer.

> Status: this is a prototype, not a finished product. The UI shell exists, but the core P2P transfer, manifest, download, and import systems still need real implementation.

## Why this exists

Model creators do the expensive work: training, fine-tuning, packaging, and publishing. Today, large platforms usually control discovery and distribution while creators eat the bandwidth and storage costs.

This project is trying to build a better path:

- Search and browse models locally
- Download from peers instead of a single expensive host
- Verify every transfer with hashes
- Import models into local runtimes like Ollama, LM Studio, and llama.cpp
- Seed models back to the network after download

The long-term goal is a community-owned distribution layer for local AI models. The short-term goal is much smaller: make the core desktop transfer loop reliable.

## What this project is

- A Tauri desktop app
- A React + TypeScript frontend
- A Rust backend scaffold for local system work and eventual P2P transfer
- A prototype with mock data and UI screens for discovery, downloads, library, publishing, peers, and settings

## What is still down

This is important: the product is not done, and the important systems are still offline.

Not built yet:

- Real peer-to-peer transfer
- Real manifest generation and signing
- Real chunked download/resume logic
- Real hash verification pipeline
- Real Ollama or LM Studio import integration
- Real search index or cloud backend
- Real authentication or user accounts
- Real moderation/reporting workflow
- Paid models or creator payouts

If you are looking at this repo, you are looking at the build-out phase, not a shipping marketplace.

## Current state

The repository currently has:

- A desktop app shell
- Navigation between multiple pages
- Mock model data for the discovery experience
- UI sections for downloads, library, publishing, peers, and settings
- Rust/Tauri project scaffolding in `src-tauri/`

The code is intentionally still shallow. The next step is to replace mock state with real systems one layer at a time.

## What we are building first

The first milestone is simple on purpose:

1. Publish a local `.gguf` file from one machine
2. Discover it from another machine
3. Download it peer-to-peer
4. Pause and resume the transfer
5. Verify the file hashes
6. Import it into Ollama
7. Seed it back to the network

If that loop works well, everything else can be layered on top.

## MVP scope

### In scope for the first real version

- Desktop shell with strong local UX
- Rust backend for filesystem, hashing, and transfer orchestration
- Local SQLite database for models, transfers, and settings
- Model discovery with useful filters
- Signed manifests for model metadata
- Chunked transfers with pause/resume
- Seeder mode and bandwidth controls
- Basic import flow for local runtimes
- Lightweight cloud index for discovery only

### Out of scope for the first version

- Tokens
- NFTs
- DAO mechanics
- Fully decentralized search
- GPU rental marketplace
- Complex monetization

The priority is trust, reliability, and a great download experience. Everything else comes later.

## Where help is needed

I am looking for people who want to build this in public and own real parts of the stack.

The highest-value areas right now are:

- Rust and Tauri backend work
- Peer-to-peer networking
- Manifest design and integrity verification
- Download manager state and resume logic
- SQLite data modeling
- React UI polish and interaction design
- Search/index API design
- Import integrations for Ollama, LM Studio, and llama.cpp
- Moderation and trust tooling

If you want to help, pick a small but real slice and ship it with us. This project needs builders, not drive-by opinions.

## Suggested roadmap

### Phase 0: Prove transfer

Goal: move one large model file from one machine to another reliably.

- Tauri app shell
- P2P connection setup
- Chunked file transfer
- Pause/resume
- Hash verification

Success looks like a 4 to 8 GB GGUF file transferring without falling apart.

### Phase 1: Local library

Goal: make downloaded models useful after transfer.

- Local model database
- Download manager UI
- File verification
- Seeder toggle
- Disk and bandwidth limits
- Basic Ollama import path

Success looks like a user being able to download a model, verify it, and run it locally.

### Phase 2: Discovery

Goal: make models easy to find.

- Search API
- Model pages
- Filters for family, size, format, quantization, runtime, RAM, and license
- Publish flow
- Peer availability hints

Success looks like users being able to discover and share models without manual link swapping.

### Phase 3: Trust layer

Goal: make the ecosystem safer and easier to trust.

- Signed manifests
- Creator profiles
- Ratings and reputation signals
- Report and takedown tools
- Blocklists for known-bad hashes

Success looks like users being able to tell trustworthy models from random uploads.

### Phase 4: Creator economy

Goal: let creators earn without breaking the free network.

- Optional tips
- Paid access for premium models
- Creator analytics
- Private or team indexes

This only makes sense after the core network is solid.

## Architecture

The intended architecture is:

```text
              Cloud Index API
       search, metadata, moderation
                    |
                    | HTTPS
                    v
     +--------------------------------+
     |          Tauri Desktop         |
     |                                |
     |  React UI                      |
     |  - Discover                    |
     |  - Downloads                   |
     |  - Library                     |
     |  - Publish                     |
     |  - Settings                    |
     |                                |
     |  Rust backend                  |
     |  - Hashing                     |
     |  - P2P node                    |
     |  - DB                          |
     |  - Importers                   |
     +--------------------------------+
                    |
                    | P2P transfer
                    v
          Other peers / seeders
```

The cloud layer should stay small. It should handle discovery and metadata, not become the place where every model file lives.

## Tech stack

Current stack:

- Tauri
- React
- TypeScript
- Rust
- SQLite for local state
- Tailwind CSS
- Zustand
- TanStack Query
- Vite

## Local development

Run the desktop app:

```bash
npm install
npm run tauri:dev
```

Run the web preview only:

```bash
npm run dev
```

Build desktop binaries:

```bash
npm run tauri:build
```

## Project structure

- `src/` - React app, pages, components, and local state
- `src-tauri/` - Rust/Tauri desktop host and native integration

## How to contribute

This project is intentionally early, so the best contributions are focused and narrow.

Good first contributions:

- Replace mock data with real local state
- Add a manifest schema
- Build the download state machine
- Prototype P2P transfer plumbing
- Add persistent transfer history
- Wire up real settings storage
- Improve the discover/search UX
- Add import helpers for local runtimes

If you want to work on this seriously, reach out:

- Email: theeseus@protonmail.com
- LinkedIn: https://www.linkedin.com/in/theeseus/

Please open an issue or PR with a clear scope, proposed approach, and the specific part of the app you want to own.

## The tone of the project

This is meant to be open, practical, and builder-friendly. The goal is not hype. The goal is to ship a real desktop tool that people actually want to use.

If you are interested in P2P systems, Rust, Tauri, model tooling, or local AI infrastructure, you are probably the kind of person we want here.
