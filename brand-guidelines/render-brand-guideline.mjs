import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const htmlPath = path.join(__dirname, "naman-pandey-brand-guideline.html");
const pdfPath = path.join(__dirname, "naman-pandey-brand-identity-guideline.pdf");
const pngPath = path.join(__dirname, "naman-pandey-brand-identity-guideline-preview.png");
const chromePath =
  process.env.CHROME_EXECUTABLE_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

if (!fs.existsSync(htmlPath)) {
  throw new Error(`Missing source HTML: ${htmlPath}`);
}

const browser = await chromium.launch({
  headless: true,
  executablePath: fs.existsSync(chromePath) ? chromePath : undefined,
});
const page = await browser.newPage({
  viewport: { width: 1056, height: 816 },
  deviceScaleFactor: 2,
});

await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: pdfPath,
  width: "11in",
  height: "8.5in",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  preferCSSPageSize: false,
});
await page.locator(".page").screenshot({ path: pngPath });
await browser.close();

console.log(JSON.stringify({ pdfPath, pngPath }, null, 2));
