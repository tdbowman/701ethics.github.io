# LIS 701: Core Values, Ethics & Issues — Online Textbook

Open online textbook for **LIS 701 Core Values, Ethics, and Issues in the Library and Information Profession** at Dominican University's School of Information Studies (Fall 2026), by Timothy D. Bowman, Ph.D.

**Live site:** https://tdbowman.github.io/701ethics.github.io/

Companion to the [INF 420 Information Society book](https://tdbowman.github.io/420infosociety.github.io/) and the [INF 110 Foundations of Informatics book](https://tdbowman.github.io/110informatics.github.io/), built with the same stack.

## Stack

- [MyST Markdown](https://mystmd.org/) content
- [Jupyter Book 2](https://jupyterbook.org/) (`jupyter-book` npm CLI) for building
- GitHub Actions → GitHub Pages for deployment (`.github/workflows/deploy.yml`)

## Local development

```bash
npm install -g jupyter-book
jupyter-book start        # live-reload dev server
jupyter-book build --html # production build to _build/html
```

## Deployment

Push to `main`; the GitHub Actions workflow builds and deploys to GitHub Pages automatically. In the repo settings, set **Pages → Source → GitHub Actions** the first time.

## Structure

- `myst.yml` — site config and table of contents
- `intro.md`, `about-this-book.md`, `how-to-use.md`, `assessment-and-timeline.md` — front matter
- `week-NN-*/` — one folder per course week: an overview page, `the-readings.md`, and `concepts-and-questions.md`
- `capstone/` — the final essay chapter, *Arguing with the Algorithm*
- `glossary.md`, `references.md`, `editorial-notes.md`, `course-wrapup.md` — resources and wrap-up

## Status

Fall 2026 edition: 16 weeks plus the capstone, 63 readings, 161 glossary terms.

Five reading-list items are still unresolved and are flagged in the book itself — see [`editorial-notes.md`](editorial-notes.md). Update those citations, then rebuild.
