sap.ui.define([
  "sap/ui/test/Opa5",
  "sap/ui/test/actions/Press"
], function (Opa5, Press) {
  "use strict";

  Opa5.createPageObjects({
    __PAGE_OBJECT_NAME__: {
      actions: {
        iTriggerNavigation: function () {
          return this.waitFor({
            id: "__ROUTE_TRIGGER_ID__",
            viewName: "__VIEW_NAME__",
            actions: new Press(),
            errorMessage: "Could not trigger navigation"
          });
        }
      },

      assertions: {
        iShouldSeeTargetText: function (sExpectedText) {
          return this.waitFor({
            id: "__TARGET_TEXT_CONTROL_ID__",
            viewName: "__TARGET_VIEW_NAME__",
            success: function (oControl) {
              Opa5.assert.strictEqual(oControl.getText(), sExpectedText, "Target text is correct");
            },
            errorMessage: "Could not validate target text"
          });
        },

        iShouldSeeTargetPageReady: function () {
          return this.waitFor({
            id: "__TARGET_READY_CONTROL_ID__",
            viewName: "__TARGET_VIEW_NAME__",
            success: function () {
              Opa5.assert.ok(true, "Target page is ready");
            },
            errorMessage: "Could not detect target page readiness"
          });
        }
      }
    }
  });
});
