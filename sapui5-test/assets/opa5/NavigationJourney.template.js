sap.ui.define([
  "sap/ui/test/opaQunit",
  "__APP_NAMESPACE__/test/integration/arrangements/Startup",
  "__APP_NAMESPACE__/test/integration/pages/__PAGE_MODULE_NAME__"
], function (opaTest, Startup) {
  "use strict";

  QUnit.module("Navigation");

  opaTest("Should navigate to target page", function (Given, When, Then) {
    Given.iStartMyApp();

    When.__PAGE_OBJECT_NAME__.iTriggerNavigation();

    Then.__PAGE_OBJECT_NAME__.iShouldSeeTargetPageReady();
    Then.__PAGE_OBJECT_NAME__.iShouldSeeTargetText("__EXPECTED_TARGET_TEXT__");
    Then.iTeardownMyApp();
  });
});
