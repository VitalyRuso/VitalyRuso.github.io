# Vitaly Solovyev — Developer Portfolio

A responsive portfolio and online CV for Vitaly Solovyev. It presents selected full-stack and AI-enabled projects, technical skills, practical experience, education, languages, and professional links.

## Stack

- React 19 and TypeScript
- Vite
- Plain CSS
- Lucide React icons
- GitHub Actions and GitHub Pages

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Run the production checks:

```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes `dist` after every push to `main`. In the GitHub repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

This project is configured for the user site repository `VitalyRuso.github.io`, so Vite uses the root base `/`. If the repository name changes, update `base` in `vite.config.ts` to `/<repository-name>/`.

## Project structure

```text
src/
  components/       Reusable navigation, heading and project card components
  data/             Project links, descriptions and skill groups
  App.tsx           Page sections and content
  main.tsx          React entry point
  styles.css        Design system and responsive styles
public/             Favicon and social preview image
.github/workflows/  GitHub Pages deployment
```

## Adding a Live Demo

Open `src/data/portfolio.ts` and add a `demo` URL to the relevant project:

```ts
{
  name: 'Project name',
  description: 'What it does.',
  github: 'https://github.com/VitalyRuso/project',
  demo: 'https://example.com',
  technologies: ['TypeScript', 'React'],
  accent: 'mint',
  code: 'short visual summary',
}
```

The Live Demo link appears automatically only when `demo` is present.
