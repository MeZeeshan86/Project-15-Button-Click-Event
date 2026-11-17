const { Builder, By } = require("selenium-webdriver");
const assert = require("node:assert/strict");

(async () => {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:5502");

    // Find and click the button
    await driver.findElement(By.id("alert-button")).click();

    // Switch to the JavaScript alert
    const alert = await driver.switchTo().alert();

    // Verify the alert message
    assert.equal(await alert.getText(), "Button clicked successfully!");

    // Accept the alert
    await alert.accept();

    console.log("PASS: Button displays the expected alert.");
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
