# Scholarfox

Job and scholarship listing web app built with Next.js (pages router) and Firebase Firestore, styled with Tailwind CSS and daisyUI, with light and dark mode through next-themes.

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home with welcome hero |
| `/jobs` | Jobs listing |
| `/scholarships` | Scholarships listing |
| `/about` | About the project |

Job entries are read live from the Firestore `jobs` collection by `components/JobLayout.js`. Each document carries `company`, `position`, `location`, `date`, `email`, and `link`. Scholarship entries render through `components/Layout.js` and `components/Card.js` with `title`, `description`, `deadline`, `eligibility`, and `link`.

Firestore access goes through `utils/firebase.js`, which reads all config values from environment variables.

## Getting started

Prerequisites: Node.js and a Firebase project with Firestore enabled.

1. Install dependencies:

```bash
npm install    # or yarn
```

2. Add your Firebase web app config to `.env.local` in the repo root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

These values come from the Firebase console under Project settings, General, Your apps.

3. Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build and deploy

The app deploys to Firebase Hosting (project `job-list-acb8e` in `.firebaserc`). `firebase.json` serves the static export from `out/` with clean URLs and SPA rewrites.

```bash
npm run build
npm run export      # Static export into out/
firebase deploy     # firebase-tools ships as a dependency
```

## Scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint through next lint |
| `npm run export` | Static export to `out/` after a build |

## Security

This repository uses [gitleaks](https://github.com/gitleaks/gitleaks) for automatic secret scanning on every commit.

### Pre-commit hook

A pre-commit hook is configured to scan for secrets before each commit. This helps prevent accidentally committing sensitive information like:

- API keys
- Passwords
- Tokens
- Private keys

### Setup

To enable the pre-commit hook locally:

```bash
pip install pre-commit
pre-commit install
```

### Bypass (emergency only)

In case of emergency, you can bypass the hook:

```bash
git commit --no-verify -m "emergency commit"
```

> Only use `--no-verify` in emergency situations. Regular commits should always be scanned.
