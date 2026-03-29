# Placeholder Mapping Guide

Use this guide to replace template placeholders with values extracted from a real SAPUI5 project.

## Extraction Order

Resolve placeholders in this order:

1. `manifest.json`
2. XML views
3. controllers
4. existing tests
5. mock service files
6. browser/runtime inspection if still ambiguous

## Namespace And Module Placeholders

### `__APP_NAMESPACE__`

Primary source:

- `sap.app/id` in `webapp/manifest.json`

Fallback:

- infer from `Component.js` namespace or folder/module path

### `__VIEW_NAME__`

Primary source:

- XML view module path derived from file location, for example `webapp/view/Worklist.view.xml` -> `namespace.view.Worklist`

### `__TARGET_VIEW_NAME__`

Primary source:

- router target view from `manifest.json`
- actual target XML view file if known

### `__PAGE_MODULE_NAME__`

Use the page object file stem that matches the tested page, such as `Worklist`, `ObjectPage`, or `CreateForm`.

### `__PAGE_OBJECT_NAME__`

Generate a readable object key from the page role:

- `onWorklistPage`
- `onCreateFormPage`
- `onObjectPage`

## Control ID Placeholders

### `__READY_CONTROL_ID__`

Pick a stable container or page root ID that exists as soon as the view is ready.

Good candidates:

- `sap.m.Page`
- `sap.f.DynamicPage`
- layout wrapper with explicit ID

Avoid:

- IDs created only after async binding
- transient dialog controls

### `__TITLE_CONTROL_ID__`

Find a control that exposes visible text via `getText()`.

Good candidates:

- `Title`
- `Text`
- `ObjectHeader` title-related control if wrapped through a simpler stable text control

### `__PRIMARY_ACTION_ID__`

Pick the user action that triggers the main tested behavior.

Examples:

- search button
- load button
- apply filter button
- save button

### `__COLLECTION_CONTROL_ID__`

Use the list or table ID bound to the relevant collection.

Good candidates:

- `sap.m.List`
- `sap.m.Table`
- `sap.ui.table.Table`

### `__FORM_FIELD_ID__`

Choose the primary editable field involved in submission.

Good candidates:

- `Input`
- `DatePicker`
- `Select`

### `__SUBMIT_ACTION_ID__`

Use the action that commits form data.

### `__SUCCESS_MESSAGE_CONTROL_ID__`

Pick a stable visible control that changes after submit.

Examples:

- success text
- form status label
- message strip text control

### `__ROUTE_TRIGGER_ID__`

Use the action that causes routing to another page.

### `__TARGET_READY_CONTROL_ID__`

Pick a target-page control that exists only when the route target is fully active.

### `__TARGET_TEXT_CONTROL_ID__`

Pick the target-page text control used for business assertion.

## Text And Behavior Placeholders

### `__EXPECTED_INITIAL_TEXT__`

Extract from default visible UI state in the XML view or from runtime after initial load.

### `__EXPECTED_ERROR_TEXT__`

Extract from controller error handling or error-state UI updates.

### `__EXPECTED_SUCCESS_MESSAGE__`

Extract from controller submit success logic, model update side effects, or visible success controls.

### `__EXPECTED_TARGET_TEXT__`

Extract from target view content or route-specific header text.

### `__RUNTIME_FLAG_NAME__`

Use only if the app already exposes a controllable runtime branch for testing.

If the app does not provide one:

- do not invent a global flag unless the user agrees to add testability hooks
- prefer mock response switching or deterministic local data setup

## Formatter Placeholders

### `__FORMATTER_MODULE__`

Primary source:

- import path in controller or XML formatter usage

### `__FORMATTER_FUNCTION__`

Primary source:

- formatter function name used by the view or controller

### `__INPUT_A__`, `__INPUT_B__`, `__OUTPUT_A__`, `__OUTPUT_B__`, `__UNKNOWN_INPUT__`

Primary source:

- formatter business rules in source code
- unit test expectations if tests already exist

Do not keep example values if the real formatter maps different codes or texts.

## Mock Data Placeholders

### `__ENTITY_SET__`

Primary source:

- `manifest.json` OData binding path
- controller `read` path
- XML aggregation binding path

### `__SAMPLE_KEY_PROPERTY__`

Use the real key field from metadata.

### `__SAMPLE_TEXT_PROPERTY__`

Use the main display field shown in the list, table, or object header.

### `__SAMPLE_AUX_PROPERTY__`

Use a secondary field that drives formatting, state, subtype, or description.

## Validation Rules

After replacement, verify that:

- no placeholder token remains in generated files
- every control ID exists in the target view
- every viewName points to a real XML view
- mock entity/property names exist in metadata.xml and mockdata files
- expected texts align with actual controller or binding behavior
