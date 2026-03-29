---
name: sapui5-test
description: 'Generate and extend SAPUI5/OpenUI5 automated tests. Use when creating or updating QUnit, OPA5, or wdi5 test scripts for a SAPUI5 project, wiring mock OData, validating ui5.yaml or manifest.json test setup, or building a regression suite from an existing UI5 app or template. Keywords: sapui5_test, SAPUI5 testing, QUnit, OPA5, wdi5, WebdriverIO, mockserver, ui5.yaml.'
argument-hint: 'Describe the SAPUI5 project, target test layers, business flow, IDs or views involved, and whether mock OData plus executable validation are required'
user-invocable: true
---

# SAPUI5 Test Generation

User-facing usage overview: [README.md](./README.md)

## What This Skill Produces

This skill generates or extends SAPUI5 automated test code for one or more of these layers:

- QUnit unit tests for formatter, utility, and controller logic that can be isolated
- OPA5 integration tests for view behavior, control interaction, model-driven UI updates, and application branches
- wdi5 end-to-end tests for real browser regression flows

It also covers the supporting wiring that makes those tests executable:

- ui5.yaml middleware-based mock OData setup when direct HTTP access is required
- manifest.json model and dataSource validation
- test bootstrap files, page objects, journeys, and npm scripts
- reusable starter templates from the assets directory

## When To Use

Use this skill when the user asks to:

- generate SAPUI5 test scripts from an existing project
- add QUnit, OPA5, or wdi5 coverage to a UI5 app
- turn a demo app into an executable regression suite
- fix broken SAPUI5 mockserver or mock OData test setup
- create test page objects, journeys, and browser assertions for a UI5 flow
- scaffold reusable test skeletons first, then refine them to business behavior
- create templates for collection pages, form pages, and router navigation flows

Do not use this skill for generic non-UI5 frontend testing.

## Workflow

1. Inspect the project before writing tests.
   Read package.json, ui5.yaml, manifest.json, Component.js, target view/controller files, and any existing test folders.

2. Identify the testable behavior and branch structure.
   Extract the happy path, formatted display rules, empty states, and explicit error branches. Prefer assertions that verify user-visible behavior, not only implementation details.

3. Choose the right test layer.
   Use the decision guide in [workflow reference](./references/workflow.md).

4. Choose the right template family.
   Use [template selection](./references/template-selection.md) to decide whether the flow is collection, form, navigation, or hybrid.

5. Build a placeholder map from the real project.
   Resolve namespace, views, control IDs, formatter rules, and mock entity names using [placeholder mapping](./references/placeholder-mapping.md).

6. Validate the data source strategy.
   If the app reads OData and the tests must work through a real local URL, prefer server middleware in ui5.yaml over a browser-only MockServer. Do not hide a broken backend mock by hardcoding a JSONModel in Component.js unless the user explicitly asks for that shortcut.

7. Generate or update tests in the project's existing structure.
   Keep namespace, module paths, viewName, IDs, and control selectors aligned with the app code. Reuse the file map in [checklist](./references/checklist.md).

8. Start from templates when creating new coverage quickly.
   Use the starter files in [assets](./assets/README.md) to scaffold QUnit, OPA5, wdi5, mock metadata/data, and config snippets. Choose the template family that matches the UI pattern: collection flow, form submission flow, or navigation flow.

9. Follow a deterministic generation order.
   Materialize files in the order described by [generation sequence](./references/generation-sequence.md) so test bootstrap, page objects, and specs stay aligned.

10. Add executable assertions.
   At minimum, cover:
   - initial page state
   - main success flow
   - formatting or transformation behavior visible in the UI
   - one negative or error branch when the feature has one

11. Run validation when possible.
   Prefer actually starting the UI5 server and running unit, OPA, and e2e checks instead of only generating files. If execution is blocked, state exactly what remains unverified.

## Decision Rules

- If logic is pure and synchronous, start with QUnit.
- If behavior depends on controls, model binding, or UI state transitions inside the app shell, use OPA5.
- If behavior depends on browser runtime, wdi5 control bridges, navigation timing, or real endpoint reachability, use wdi5.
- If a binding assertion behaves unexpectedly, inspect runtime data and rendering state first, then decide whether to adjust tests, binding expression, or controller logic.
- If the user asks for a full regression suite, combine all three layers instead of choosing only one.

## Quality Bar

The task is complete only when all applicable checks pass:

- test files match the app namespace and view/controller structure
- mock service strategy is consistent with how the app is loaded in tests
- assertions verify business-visible outcomes, not only that a button was pressed
- at least one error or failure branch is covered when the feature supports it
- generated tests are runnable from package.json scripts or an equivalent documented command
- the response reports what was executed and what passed or remains unverified

## Template Library

- [Template index and placeholders](./assets/README.md)
- [QUnit formatter template](./assets/qunit/formatter.qunit.template.js)
- [OPA startup template](./assets/opa5/Startup.template.js)
- [OPA collection page template](./assets/opa5/Page.template.js)
- [OPA collection journey template](./assets/opa5/Journey.template.js)
- [OPA form page template](./assets/opa5/FormPage.template.js)
- [OPA form journey template](./assets/opa5/FormJourney.template.js)
- [OPA navigation page template](./assets/opa5/NavigationPage.template.js)
- [OPA navigation journey template](./assets/opa5/NavigationJourney.template.js)
- [OPA bootstrap template](./assets/opa5/opaTests.qunit.template.js)
- [wdi5 collection regression template](./assets/wdi5/flow.e2e.spec.template.js)
- [wdi5 form regression template](./assets/wdi5/form.e2e.spec.template.js)
- [wdi5 navigation regression template](./assets/wdi5/navigation.e2e.spec.template.js)
- [Mock metadata template](./assets/mock/metadata.template.xml)
- [Mock entity set template](./assets/mock/EntitySet.template.json)
- [ui5.yaml middleware snippet](./assets/config/ui5.mock-middleware.snippet.yaml)
- [manifest OData snippet](./assets/config/manifest.odata.snippet.json)

## References

- [Workflow and branching guide](./references/workflow.md)
- [Template selection matrix](./references/template-selection.md)
- [Placeholder mapping guide](./references/placeholder-mapping.md)
- [Generation sequence](./references/generation-sequence.md)
- [File map and completion checklist](./references/checklist.md)
- [Template index](./assets/README.md)