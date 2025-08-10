# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Quick Start

### Build the project
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npx gh-pages -d dist
```

## Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Portfolio Sections**: Projects, Publications, Blog, CV, and more
- **GitHub Pages Ready**: Optimized for static hosting deployment

## Project Structure

- `src/pages/` - Main page components
- `src/components/` - Reusable UI components
- `src/data/` - Static data for projects and publications
- `public/` - Static assets and 404.html for SPA routing

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run dev
```

## Deployment

This project is configured for GitHub Pages deployment. The build process creates a `dist` folder that can be directly deployed using the gh-pages package.

Visit your deployed site at: `https://[username].github.io/`