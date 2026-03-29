# Generation Sequence

Use this sequence to turn a SAPUI5 feature into a runnable automated test suite.

## 1. Inspect

Read the project files that define:

- namespace
- routing
- models and dataSources
- target XML views
- controller methods
- existing tests and config

## 2. Classify The UI Pattern

Decide whether the dominant flow is:

- collection
- form
- navigation
- hybrid

If hybrid, choose a primary template family and extend with a secondary one.

## 3. Build A Placeholder Map

Create a mapping table from project facts to placeholders using `placeholder-mapping.md`.

Do this before writing files.

## 4. Materialize Templates

Copy the selected templates into the project test folders and replace placeholders.

Recommended order:

1. QUnit template if formatter logic exists
2. OPA startup/bootstrap
3. OPA page object
4. OPA journey
5. wdi5 spec
6. mock/config snippets if needed

## 5. Align The App Under Test

Update app/config only if required for the tests to be valid:

- `manifest.json`
- `ui5.yaml`
- mock metadata/data
- test bootstrap files

Avoid unrelated refactors.

## 6. Validate

Run as many of these as the project supports:

- unit tests
- OPA tests
- e2e tests
- direct mock endpoint checks if OData is involved

## 7. Report

Summarize:

- chosen template family
- generated or updated files
- how placeholders were resolved
- which tests were executed and passed
- what remains unverified or intentionally deferred
