# SAPUI5 Test File Map And Checklist

## Recommended File Map

Common paths in a SAPUI5 project:

- webapp/test/unit/unitTests.qunit.js
- webapp/test/unit/<area>/*.qunit.js
- webapp/test/integration/opaTests.qunit.js
- webapp/test/integration/arrangements/Startup.js
- webapp/test/integration/pages/<PageName>.js
- webapp/test/integration/journeys/<FlowName>.js
- test/e2e/*.spec.js
- webapp/localService/metadata.xml
- webapp/localService/mockdata/*.json

Supporting config often needs updates here:

- package.json
- ui5.yaml
- wdio.conf.js
- webapp/manifest.json

Reusable starter templates are available under:

- `../assets/qunit`
- `../assets/opa5`
- `../assets/wdi5`
- `../assets/mock`
- `../assets/config`

## Completion Checklist

- Namespace in test modules matches the app namespace.
- All placeholder tokens from templates are replaced before final save.
- viewName strings match the actual XML view module path.
- OPA selectors prefer stable IDs over fragile text selectors.
- wdi5 selectors use browser.asControl with concrete IDs and viewName where possible.
- Mock entity set names match metadata.xml and mockdata filenames.
- manifest.json model points to the same service root used by the mock setup.
- package.json contains runnable scripts for the intended suites.
- Happy path is covered.
- Formatting or transformation rule is covered.
- Error or failure branch is covered when applicable.
- Final response states whether tests were actually executed.

## Common Failure Patterns

- Namespace changed in app code but not in tests.
- ui5.yaml mock middleware path does not match manifest.json service URI.
- Mock data exists but entity set path in the controller reads a different collection.
- wdi5 tests break after manual navigation resets the injected bridge.
- OPA assertions check too early before list binding update completes.
- Tests pass structurally but do not verify user-visible business output.
- Template placeholders remain in generated files and break runtime loading.