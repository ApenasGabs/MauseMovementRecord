const puppeteer = require("puppeteer");
const fs = require("fs");
const url = "https://example.com";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  await page.exposeFunction("saveInteractionData", (interactionData) => {
    fs.writeFileSync(
      "interactionData.json",
      JSON.stringify(interactionData, null, 2)
    );
  });

  await page.evaluate(() => {
    const interactionData = {
      scroll: [],
      mouse: [],
    };

    window.addEventListener("scroll", () => {
      interactionData.scroll.push({
        top: window.scrollY,
        timestamp: Date.now(),
      });
    });

    document.addEventListener("mousemove", (event) => {
      interactionData.mouse.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      });
    });

    setTimeout(() => {
      window.saveInteractionData(interactionData);
    }, 30000);
  });

  await page.waitForTimeout(30000);
  await browser.close();
})();

module.exports = { url };
