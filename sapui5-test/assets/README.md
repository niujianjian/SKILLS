# SAPUI5 Test Templates

Use these templates as starter files when generating test suites.

Use these supporting guides together with the templates:

- `../references/template-selection.md`
- `../references/placeholder-mapping.md`
- `../references/generation-sequence.md`

## Placeholder Tokens

Replace these placeholders before writing into target project files:

- `__APP_NAMESPACE__`: UI5 namespace, e.g. `com.acme.app`
- `__VIEW_NAME__`: View module name, e.g. `com.acme.app.view.Worklist`
- `__PAGE_MODULE_NAME__`: OPA page module file name, e.g. `Worklist`
- `__PAGE_OBJECT_NAME__`: OPA page object key, e.g. `onWorklistPage`
- `__READY_CONTROL_ID__`: A stable control ID used to detect that the page is ready, e.g. `worklistPage`
- `__TITLE_CONTROL_ID__`: Title or text control ID, e.g. `headerTitle`
- `__PRIMARY_ACTION_ID__`: Main trigger control ID, e.g. `triggerActionButton` or `saveButton`
- `__COLLECTION_CONTROL_ID__`: List or table control ID, e.g. `itemsTable`
- `__EXPECTED_INITIAL_TEXT__`: Initial visible text, e.g. `Overview`
- `__EXPECTED_ERROR_TEXT__`: Error-state visible text, e.g. `Load Failed`
- `__RUNTIME_FLAG_NAME__`: Global runtime flag for negative path simulation, e.g. `__simulateFailure`
- `__ENTITY_SET__`: OData collection, e.g. `Products`
- `__SAMPLE_KEY_PROPERTY__`: Key property in mock data, e.g. `Id`
- `__SAMPLE_TEXT_PROPERTY__`: Main text property in mock data, e.g. `Title`
- `__SAMPLE_AUX_PROPERTY__`: Secondary property in mock data, e.g. `State`
- `__FORMATTER_MODULE__`: Formatter module path, e.g. `com.acme.app/model/formatter`
- `__FORMATTER_FUNCTION__`: Formatter function name, e.g. `formatLabel`
- `__INPUT_A__`: Example formatter input A, e.g. `A`
- `__OUTPUT_A__`: Expected formatter output A, e.g. `Approved`
- `__INPUT_B__`: Example formatter input B, e.g. `R`
- `__OUTPUT_B__`: Expected formatter output B, e.g. `Rejected`
- `__UNKNOWN_INPUT__`: Unknown test input, e.g. `X`
- `__MIN_ITEM_COUNT__`: Expected minimum items in collection, e.g. `2`
- `__EXPECTED_ITEM_TEXTS__`: Expected visible item texts to assert after rendering
- `__FORM_FIELD_ID__`: Main editable form field ID, e.g. `customerNameInput`
- `__FORM_INPUT_VALUE__`: Sample input text or value for form submission
- `__SUBMIT_ACTION_ID__`: Submit action control ID, e.g. `submitButton`
- `__SUCCESS_MESSAGE_CONTROL_ID__`: Success message or status text control ID
- `__EXPECTED_SUCCESS_MESSAGE__`: Expected post-submit success text
- `__ROUTE_TRIGGER_ID__`: Control ID that triggers routing, e.g. `navToDetailButton`
- `__TARGET_VIEW_NAME__`: Target view module name after routing
- `__TARGET_READY_CONTROL_ID__`: Stable control ID that indicates the target page is ready
- `__TARGET_TEXT_CONTROL_ID__`: Text control ID on the target page
- `__EXPECTED_TARGET_TEXT__`: Expected visible text after navigation

## Suggested Mapping

- QUnit formatter test: `assets/qunit/formatter.qunit.template.js`
- OPA collection flow: `assets/opa5/Page.template.js` + `assets/opa5/Journey.template.js`
- OPA form flow: `assets/opa5/FormPage.template.js` + `assets/opa5/FormJourney.template.js`
- OPA navigation flow: `assets/opa5/NavigationPage.template.js` + `assets/opa5/NavigationJourney.template.js`
- OPA shared bootstrap: `assets/opa5/Startup.template.js` + `assets/opa5/opaTests.qunit.template.js`
- wdi5 collection flow: `assets/wdi5/flow.e2e.spec.template.js`
- wdi5 form flow: `assets/wdi5/form.e2e.spec.template.js`
- wdi5 navigation flow: `assets/wdi5/navigation.e2e.spec.template.js`
- Mock OData examples: `assets/mock/*`
- Config snippets: `assets/config/*`

Prefer replacing template placeholders with project facts extracted from manifest.json, XML views, controller methods, and existing control IDs instead of leaving example values in place.
