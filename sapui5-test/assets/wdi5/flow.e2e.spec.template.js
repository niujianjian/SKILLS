describe("UI flow regression", () => {
  async function getControl(id) {
    return browser.asControl({
      selector: {
        id,
        viewName: "__VIEW_NAME__"
      }
    });
  }

  async function waitUntilCollectionReady(minItems) {
    await browser.waitUntil(async () => {
      const collection = await getControl("__COLLECTION_CONTROL_ID__");
      const items = await collection.getItems();
      const isVisible = await collection.getVisible();
      return isVisible && Array.isArray(items) && items.length >= minItems;
    }, {
      timeout: 15000,
      interval: 300,
      timeoutMsg: "Collection did not become ready in time"
    });
  }

  it("covers happy path visible text and rendered descriptions", async () => {
    await browser.execute(() => {
      window["__RUNTIME_FLAG_NAME__"] = false;
    });

    const textControl = await getControl("__TITLE_CONTROL_ID__");
    if ((await textControl.getText()) !== "__EXPECTED_INITIAL_TEXT__") {
      throw new Error("Unexpected initial text");
    }

    const primaryAction = await getControl("__PRIMARY_ACTION_ID__");
    await primaryAction.press();

    await waitUntilCollectionReady(__MIN_ITEM_COUNT__);

    const collection = await getControl("__COLLECTION_CONTROL_ID__");
    const items = await collection.getItems();

    if ((await items[0].getDescription()) !== "__OUTPUT_A__") {
      throw new Error("Unexpected first item description");
    }

    if ((await items[1].getDescription()) !== "__OUTPUT_B__") {
      throw new Error("Unexpected second item description");
    }
  });

  it("covers forced error branch", async () => {
    await browser.execute(() => {
      window["__RUNTIME_FLAG_NAME__"] = true;
    });

    const primaryAction = await getControl("__PRIMARY_ACTION_ID__");
    await primaryAction.press();

    const textControl = await getControl("__TITLE_CONTROL_ID__");
    await browser.waitUntil(async () => {
      return (await textControl.getText()) === "__EXPECTED_ERROR_TEXT__";
    }, {
      timeout: 15000,
      interval: 300,
      timeoutMsg: "Error text was not rendered in time"
    });

    await browser.execute(() => {
      window["__RUNTIME_FLAG_NAME__"] = false;
    });
  });
});