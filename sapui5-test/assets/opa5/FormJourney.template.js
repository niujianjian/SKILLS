sap.ui.define([
  "sap/ui/test/opaQunit",
  "__APP_NAMESPACE__/test/integration/arrangements/Startup",
  "__APP_NAMESPACE__/test/integration/pages/__PAGE_MODULE_NAME__"
], function (opaTest, Startup) {
  "use strict";

  QUnit.module("Form Submission");

  opaTest("Should submit form and show confirmation", function (Given, When, Then) {
    Given.iStartMyApp();

    When.__PAGE_OBJECT_NAME__.iEnterValueIntoPrimaryField("__FORM_INPUT_VALUE__");
    Then.__PAGE_OBJECT_NAME__.iShouldSeeFieldValue("__FORM_INPUT_VALUE__");

    When.__PAGE_OBJECT_NAME__.iPressSubmitAction();

    Then.__PAGE_OBJECT_NAME__.iShouldSeeSuccessMessage("__EXPECTED_SUCCESS_MESSAGE__");
    Then.iTeardownMyApp();
  });
});
