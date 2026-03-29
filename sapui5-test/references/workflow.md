# SAPUI5 Test Workflow

## Step 1: Inspect The Project

Read these files first when they exist:

- package.json
- ui5.yaml
- wdio.conf.js
- webapp/manifest.json
- webapp/Component.js
- target view and controller files
- webapp/test/unit
- webapp/test/integration
- test/e2e

Capture these facts before editing:

- namespace used by the app
- whether the app uses JSONModel or ODataModel
- control IDs and view names needed by OPA5 and wdi5 selectors
- whether there is already a mock service or localService folder
- whether the user wants only code generation or code plus execution and verification

## Step 2: Decompose The Requirement

Break the feature into concrete behaviors:

- initial state
- user action
- model or request effect
- rendered result
- negative path or forced error

Then map each behavior to testable assertions and selectors.

Use placeholder-first drafting when requirements are still abstract, then replace placeholders with concrete IDs and texts once view/controller analysis is finished.

Before materializing files, use:

- `placeholder-mapping.md` to resolve placeholders
- `template-selection.md` to choose the right template family
- `generation-sequence.md` to apply files in a stable order

## Step 3: Choose Test Layers

### QUnit

Use for:

- formatter functions
- utility functions
- controller helpers that can be isolated without a full UI runtime

Typical target:

- input value A maps to expected display text A
- input value B maps to expected display text B
- unknown or empty input maps to fallback behavior

### OPA5

Use for:

- button interaction in a running UI5 app
- page object actions and assertions
- list visibility and rendered text checks
- integration branches driven by local mock data
- form submission and confirmation flows
- router-driven navigation and target page verification

Required structure:

- arrangements startup module
- page object module
- journey module
- opaTests bootstrap page

Starter templates:

- `../assets/opa5/Startup.template.js`
- `../assets/opa5/Page.template.js`
- `../assets/opa5/Journey.template.js`
- `../assets/opa5/opaTests.qunit.template.js`
- `../assets/opa5/FormPage.template.js`
- `../assets/opa5/FormJourney.template.js`
- `../assets/opa5/NavigationPage.template.js`
- `../assets/opa5/NavigationJourney.template.js`

### wdi5

Use for:

- real browser regression
- control bridge interaction with browser.asControl
- timing-sensitive state transitions
- validation that middleware-backed mock endpoints truly support the app
- form submission with browser runtime behavior
- route changes that must be verified across views

Use explicit waits for:

- control visibility
- item counts
- rendered text after model refresh
- error title transitions

Starter template:

- `../assets/wdi5/flow.e2e.spec.template.js`
- `../assets/wdi5/form.e2e.spec.template.js`
- `../assets/wdi5/navigation.e2e.spec.template.js`

## Step 4: Pick The Mock Strategy

### Choose browser-side MockServer only when:

- the requirement is limited to UI-internal request interception
- direct endpoint access in the browser is not required
- OPA-level simulation is enough

### Choose ui5.yaml middleware mockserver when:

- the user expects localhost OData URLs to be directly accessible
- wdi5 or external browser checks must hit the mock endpoint reliably
- the app should behave like a served backend route during local execution

Rules:

- keep metadata.xml and mockdata aligned with entity set names
- validate manifest.json dataSources and model names
- avoid masking broken mock setup with hardcoded JSONModel data

Starter templates:

- `../assets/mock/metadata.template.xml`
- `../assets/mock/EntitySet.template.json`
- `../assets/config/ui5.mock-middleware.snippet.yaml`
- `../assets/config/manifest.odata.snippet.json`

## Step 5: Write Assertions That Matter

Weak assertion:

- button exists

Strong assertion:

- button press changes visible state and renders expected business text

Always prefer visible business assertions such as:

- title text
- list visibility
- item title text
- formatted description text
- error message or error title

## Step 6: Execute And Report

When the user expects a working suite:

1. install dependencies if needed
2. start the UI5 server
3. run the relevant test commands
4. inspect failures instead of guessing
5. fix root causes before adding more waits or workarounds

Report back with:

- what files were created or updated
- what commands were run
- which suites passed
- what remains as cleanup or technical debt