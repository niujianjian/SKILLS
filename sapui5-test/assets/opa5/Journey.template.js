sap.ui.define([
  "sap/ui/test/opaQunit",
  "__APP_NAMESPACE__/test/integration/arrangements/Startup",
  "__APP_NAMESPACE__/test/integration/pages/__PAGE_MODULE_NAME__"
], function (opaTest, Startup) {
  "use strict";

  QUnit.module("Regression");

  opaTest("Should validate success and error branches", function (Given, When, Then) {
    Given.iStartMyApp();

    Then.__PAGE_OBJECT_NAME__.iShouldSeeText("__EXPECTED_INITIAL_TEXT__");

    When.__PAGE_OBJECT_NAME__.iPressPrimaryAction();

    Then.__PAGE_OBJECT_NAME__.iShouldSeeCollectionWithItems(__MIN_ITEM_COUNT__);
    Then.__PAGE_OBJECT_NAME__.iShouldSeeItemDescriptions(["__OUTPUT_A__", "__OUTPUT_B__"]);

    When.__PAGE_OBJECT_NAME__.iSetRuntimeFlag(true);
    When.__PAGE_OBJECT_NAME__.iPressPrimaryAction();

    Then.__PAGE_OBJECT_NAME__.iShouldSeeText("__EXPECTED_ERROR_TEXT__");

    Then.iTeardownMyApp();
  });
});
