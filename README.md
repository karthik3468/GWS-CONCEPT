# GWS Admin Study Guide

A React study guide for Google Workspace administration topics, with concept notes, Q&A review, and quiz mode.

## Run Locally

```bash
npm install
npm run dev
```

## Deploy On GitHub Pages

The live site is published from the repository root for compatibility with the current GitHub Pages setting.

To update the live files after changing the app:

```bash
npm run build
Copy-Item -Recurse -Force dist\* .
```

The GitHub Actions workflow also builds and uploads `dist` if Pages is later switched to `GitHub Actions`.
