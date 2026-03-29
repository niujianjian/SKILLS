describe("Navigation flow", () => {
  async function getControl(id, viewName) {
    return browser.asControl({
      selector: {
        id,
        viewName
      }
    });
  }

  it("navigates to target page", async () => {
    const trigger = await getControl("__ROUTE_TRIGGER_ID__", "__VIEW_NAME__");
    await trigger.press();

    const targetReady = await getControl("__TARGET_READY_CONTROL_ID__", "__TARGET_VIEW_NAME__");
    await browser.waitUntil(async () => {
      return !!targetReady;
    }, {
      timeout: 15000,
      interval: 300,
      timeoutMsg: "Target page was not ready in time"
    });

    const targetText = await getControl("__TARGET_TEXT_CONTROL_ID__", "__TARGET_VIEW_NAME__");
    if ((await targetText.getText()) !== "__EXPECTED_TARGET_TEXT__") {
      throw new Error("Unexpected target text");
    }
  });
});
