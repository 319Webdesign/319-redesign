import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "public");

const sites = [
  {
    url: "https://www.baudienstleistungen-hofmann.de/",
    file: "case-hofmann.png",
  },
  { url: "https://1klang-massage.de", file: "case-1klang.png" },
  { url: "https://tierhotel-rhein-main.de", file: "case-tierhotel.png" },
];

const cookieSelectors = [
  'button:has-text("Alle akzeptieren")',
  'button:has-text("Akzeptieren")',
  'button:has-text("Zustimmen")',
  'button:has-text("Einverstanden")',
  "#cookie-accept",
  ".cookie-accept",
];

async function dismissCookies(page) {
  for (const sel of cookieSelectors) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 800 })) {
        await btn.click({ timeout: 1000 });
      }
    } catch {
      // ignore
    }
  }
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const site of sites) {
  console.log("Capturing", site.url);
  await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  await dismissCookies(page);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(out, site.file), type: "png" });
  console.log("Saved", site.file);
}

await browser.close();
console.log("done");
