describe("Form submission flow", () => {
  async function getControl(id) {
    return browser.asControl({
      selector: {
        id,
        viewName: "__VIEW_NAME__"
      }
    });
  }

  it("submits form and shows confirmation", async () => {
    const input = await getControl("__FORM_FIELD_ID__");
    await input.enterText("__FORM_INPUT_VALUE__");

    if ((await input.getValue()) !== "__FORM_INPUT_VALUE__") {
      throw new Error("Unexpected form field value");
    }

    const submitAction = await getControl("__SUBMIT_ACTION_ID__");
    await submitAction.press();

    const messageControl = await getControl("__SUCCESS_MESSAGE_CONTROL_ID__");
    await browser.waitUntil(async () => {
      return (await messageControl.getText()) === "__EXPECTED_SUCCESS_MESSAGE__";
    }, {
      timeout: 15000,
      interval: 300,
      timeoutMsg: "Success message was not rendered in time"
    });
  });
});
