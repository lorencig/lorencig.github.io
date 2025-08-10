import fs from 'fs';
import path from 'path';

// Read the built index.html to get the current asset names
const indexPath = path.join(process.cwd(), 'dist', 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract asset names using regex
const jsMatch = indexContent.match(/src="\.\/assets\/([^"]+)"/);
const cssMatch = indexContent.match(/href="\.\/assets\/([^"]+)"/);

if (!jsMatch || !cssMatch) {
  console.error('Could not find asset names in index.html');
  process.exit(1);
}

const jsFile = jsMatch[1];
const cssFile = cssMatch[1];

console.log(`Found assets: JS=${jsFile}, CSS=${cssFile}`);

// Read the 404.html template
const templatePath = path.join(process.cwd(), 'public', '404.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Replace the placeholder asset names with the actual ones
const updatedContent = templateContent
  .replace(/\.\/assets\/index-[^"]+\.js/g, `./assets/${jsFile}`)
  .replace(/\.\/assets\/index-[^"]+\.css/g, `./assets/${cssFile}`);

// Write the updated 404.html to dist
const outputPath = path.join(process.cwd(), 'dist', '404.html');
fs.writeFileSync(outputPath, updatedContent);

console.log('404.html updated successfully with correct asset names');
