# GWS Admin Study Guide

A React study guide for Google Workspace administration topics, with concept notes, Q&A review, and quiz mode.

## Run Locally

```bash
npm install
npm run dev
```

## Deploy On GitHub Pages

1. Push this repository to GitHub.
2. In the GitHub repository, open `Settings > Pages`.
3. Set `Build and deployment > Source` to `GitHub Actions`.
4. Push to `main` or `master`. The workflow in `.github/workflows/deploy.yml` builds the app and publishes `dist`.
