# Deployment

This project can be built and deployed to GitHub Pages using the following steps.

## Building the Project

To build the project for production, run the following command:
```
bash
npm run build
```
This will generate the production-ready files in the `dist` directory.

## Deploying to GitHub Pages

This project is a single-page application (SPA). When deploying SPAs to static hosting services like GitHub Pages, you may encounter a 404 error when users navigate directly to routes other than the root. This is because the server looks for a physical file corresponding to the route, which doesn't exist in an SPA where routing is handled client-side.

A common workaround for GitHub Pages is to include a `404.html` file that contains the same content as your `index.html`. This tells GitHub Pages to serve your `index.html` file for any route that doesn't have a corresponding file, allowing your SPA's client-side router to take over.

To build the project, create the necessary `404.html` file, and deploy to the `gh-pages` branch, use the following combined command:
```
bash
npm run build && cp dist/index.html dist/404.html && npx gh-pages -d dist
```
This command will:
1. Build the project (`npm run build`).
2. Copy the generated `dist/index.html` to `dist/404.html` (`cp dist/index.html dist/404.html`).
3. Deploy the contents of the `dist` folder (including the `404.html`) to the `gh-pages` branch using `npx gh-pages -d dist`.

After deployment, your application should be accessible at your GitHub Pages URL.