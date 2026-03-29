sap.ui.define([
  "__FORMATTER_MODULE__"
], function (formatter) {
  "use strict";

  QUnit.module("Formatter");

  QUnit.test("formatter maps known values", function (assert) {
    assert.strictEqual(
      formatter.__FORMATTER_FUNCTION__("__INPUT_A__"),
      "__OUTPUT_A__",
      "Input A maps correctly"
    );

    assert.strictEqual(
      formatter.__FORMATTER_FUNCTION__("__INPUT_B__"),
      "__OUTPUT_B__",
      "Input B maps correctly"
    );
  });

  QUnit.test("formatter handles unknown values", function (assert) {
    assert.ok(
      typeof formatter.__FORMATTER_FUNCTION__("__UNKNOWN_INPUT__") === "string",
      "Unknown input returns fallback string"
    );
  });
});
