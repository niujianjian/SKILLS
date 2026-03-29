sap.ui.define([
  "sap/ui/test/Opa5",
  "sap/ui/test/actions/Press"
], function (Opa5, Press) {
  "use strict";

  Opa5.createPageObjects({
    __PAGE_OBJECT_NAME__: {
      actions: {
        iPressPrimaryAction: function () {
          return this.waitFor({
            id: "__PRIMARY_ACTION_ID__",
            viewName: "__VIEW_NAME__",
            actions: new Press(),
            errorMessage: "Could not find primary action control"
          });
        },

        iSetRuntimeFlag: function (bValue) {
          return this.waitFor({
            id: "__READY_CONTROL_ID__",
            viewName: "__VIEW_NAME__",
            success: function () {
              window["__RUNTIME_FLAG_NAME__"] = bValue;
              Opa5.assert.ok(true, "Runtime flag updated");
            }
          });
        }
      },

      assertions: {
        iShouldSeeText: function (sExpectedText) {
          return this.waitFor({
            id: "__TITLE_CONTROL_ID__",
            viewName: "__VIEW_NAME__",
            success: function (oControl) {
              Opa5.assert.strictEqual(oControl.getText(), sExpectedText, "Text is correct");
            },
            errorMessage: "Could not validate text control"
          });
        },

        iShouldSeeCollectionWithItems: function (iMinItems) {
          return this.waitFor({
            id: "__COLLECTION_CONTROL_ID__",
            viewName: "__VIEW_NAME__",
            check: function (oCollection) {
              return oCollection.getVisible() && oCollection.getItems().length >= iMinItems;
            },
            success: function (oCollection) {
              Opa5.assert.ok(oCollection.getVisible(), "Collection is visible");
              Opa5.assert.ok(oCollection.getItems().length >= iMinItems, "Expected items are rendered");
            },
            errorMessage: "Could not validate collection control"
          });
        },

        iShouldSeeItemDescriptions: function (aExpectedDescriptions) {
          return this.waitFor({
            id: "__COLLECTION_CONTROL_ID__",
            viewName: "__VIEW_NAME__",
            check: function (oCollection) {
              return oCollection.getItems().length >= aExpectedDescriptions.length;
            },
            success: function (oCollection) {
              var aItems = oCollection.getItems();
              aExpectedDescriptions.forEach(function (sExpectedText, iIndex) {
                Opa5.assert.strictEqual(aItems[iIndex].getDescription(), sExpectedText, "Item description matches expected text");
              });
            },
            errorMessage: "Could not validate item descriptions"
          });
        }
      }
    }
  });
});
