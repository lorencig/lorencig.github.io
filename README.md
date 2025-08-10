# Lorenci Gjurgjaj - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. This project is specifically optimized for GitHub Pages deployment with proper SPA routing support.

## 🌟 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Portfolio Sections**: Projects, Publications, Blog, CV, and more
- **GitHub Pages Ready**: Fully optimized for static hosting with proper routing
- **SPA Routing**: Client-side routing that works correctly on GitHub Pages
- **Automatic Asset Management**: Smart 404.html generation for seamless deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/lorencig/lorencig.github.io.git
cd lorencig.github.io

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)
```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Automatically update 404.html with correct asset names
3. Deploy to the `gh-pages` branch using gh-pages

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy manually
npx gh-pages -d dist
```

## 🔧 Project Structure

```
lorencig.github.io/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main page components
│   ├── data/          # Static data (projects, publications)
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── public/            # Static assets and 404.html template
├── scripts/           # Build automation scripts
├── dist/              # Production build output
└── .github/           # GitHub Actions workflows
```

## 🎯 GitHub Pages Optimization

This project is specifically configured for GitHub Pages with several optimizations:

### 1. SPA Routing Support
- **404.html**: Automatically generated with correct asset references
- **Client-side routing**: React Router works correctly on all routes
- **Direct navigation**: Users can navigate directly to `/projects`, `/publications`, etc.

### 2. Asset Management
- **Relative paths**: Uses `./` base path for GitHub Pages compatibility
- **Automatic updates**: 404.html asset names are automatically synchronized
- **Cache busting**: Vite's built-in hash-based asset naming

### 3. Build Automation
- **Smart 404.html**: The `update-404.js` script automatically updates asset references
- **Integrated workflow**: Build process includes all necessary optimizations
- **GitHub Actions**: Automated deployment workflow available

## 📁 Key Files

- **`vite.config.ts`**: Configured for GitHub Pages with relative base paths
- **`public/404.html`**: Template for SPA routing fallback
- **`scripts/update-404.js`**: Automatically syncs asset names
- **`.github/workflows/deploy.yml`**: Automated deployment workflow

## 🔄 Build Process

The build process automatically:

1. **Compiles** React/TypeScript code
2. **Optimizes** assets with Vite
3. **Updates** 404.html with correct asset names
4. **Prepares** everything for GitHub Pages deployment

## 🌐 Deployment URL

Your site will be available at: `https://lorencig.github.io`

## 🛠️ Troubleshooting

### Common Issues

**Q: Routes redirect to homepage?**
A: Ensure 404.html is properly generated with correct asset names. Run `npm run build` to regenerate.

**Q: Assets not loading?**
A: Check that the base path in `vite.config.ts` is set to `'./'` for production.

**Q: Infinite redirect loops?**
A: This was fixed by removing problematic SPA redirect scripts. Ensure you're using the latest version.

### Manual Fixes

If you encounter issues:

```bash
# Clean and rebuild
rm -rf dist
npm run build

# Check 404.html has correct asset names
cat dist/404.html | grep "assets/"
```

## 📚 Technologies Used

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: Radix UI, shadcn/ui
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages, gh-pages
- **Icons**: Lucide React

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [https://lorencig.github.io](https://lorencig.github.io)
- **GitHub Repository**: [https://github.com/lorencig/lorencig.github.io](https://github.com/lorencig/lorencig.github.io)

---

Built with ❤️ using modern web technologies and optimized for GitHub Pages deployment.