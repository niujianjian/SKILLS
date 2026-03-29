sap.ui.define([
  "sap/ui/test/Opa5",
  "sap/ui/test/actions/Press",
  "sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
  "use strict";

  Opa5.createPageObjects({
    __PAGE_OBJECT_NAME__: {
      actions: {
        iEnterValueIntoPrimaryField: function (sValue) {
          return this.waitFor({
            id: "__FORM_FIELD_ID__",
            viewName: "__VIEW_NAME__",
            actions: [
              new EnterText({ text: sValue })
            ],
            errorMessage: "Could not enter text into form field"
          });
        },

        iPressSubmitAction: function () {
          return this.waitFor({
            id: "__SUBMIT_ACTION_ID__",
            viewName: "__VIEW_NAME__",
            actions: new Press(),
            errorMessage: "Could not find submit action control"
          });
        }
      },

      assertions: {
        iShouldSeeSuccessMessage: function (sExpectedText) {
          return this.waitFor({
            id: "__SUCCESS_MESSAGE_CONTROL_ID__",
            viewName: "__VIEW_NAME__",
            success: function (oControl) {
              Opa5.assert.strictEqual(oControl.getText(), sExpectedText, "Success message is correct");
            },
            errorMessage: "Could not validate success message"
          });
        },

        iShouldSeeFieldValue: function (sExpectedValue) {
          return this.waitFor({
            id: "__FORM_FIELD_ID__",
            viewName: "__VIEW_NAME__",
            success: function (oControl) {
              Opa5.assert.strictEqual(oControl.getValue(), sExpectedValue, "Field value is correct");
            },
            errorMessage: "Could not validate form field value"
          });
        }
      }
    }
  });
});
