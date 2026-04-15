/**
 * Fig. 1B (MPS): edit public/fig1b-extracted.svg, then run
 *   node scripts/inline-fig1b.cjs
 * to inline the SVG into public/poster.html and public/posterBari.html.
 * Re-diff the poster-area-intro block in both HTML files if §1 markup must stay aligned.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "fig1b-extracted.svg");

let svgRaw = fs.readFileSync(svgPath, "utf8").trim();
svgRaw = svgRaw.replace(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 488"',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 488" width="100%" preserveAspectRatio="xMidYMid meet"'
);

function patch(htmlRel) {
  const htmlPath = path.join(root, htmlRel);
  let html = fs.readFileSync(htmlPath, "utf8");
  const re = /<div class="fig1-panel-mps-svg-wrap">\s*<img[^>]*\/>\s*<\/div>/;
  if (!re.test(html)) {
    console.error("Pattern not found:", htmlRel);
    process.exit(1);
  }
  html = html.replace(
    re,
    `<div class="fig1-panel-mps-svg-wrap">\n                            ${svgRaw}\n                            </div>`
  );
  fs.writeFileSync(htmlPath, html);
  console.log("patched", htmlRel);
}

patch("public/posterBari.html");
patch("public/poster.html");
