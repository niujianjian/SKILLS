sap.ui.define([
  "sap/ui/test/Opa5"
], function (Opa5) {
  "use strict";

  return Opa5.extend("__APP_NAMESPACE__.test.integration.arrangements.Startup", {
    iStartMyApp: function (oOptions) {
      return this.iStartMyUIComponent({
        componentConfig: {
          name: "__APP_NAMESPACE__",
          async: true,
          componentData: (oOptions && oOptions.componentData) || {}
        }
      });
    },

    iTeardownMyApp: function () {
      return this.iTeardownMyUIComponent();
    }
  });
});
