import fs from "fs";
import path from "path";

// GitHub Pages serves 404.html for unknown paths.
// Copying index.html makes BrowserRouter SPA routes crawlable/loadable.
const indexPath = path.join(process.cwd(), "dist", "index.html");
const outputPath = path.join(process.cwd(), "dist", "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, outputPath);
console.log("404.html created as SPA fallback (copy of index.html)");
