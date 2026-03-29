# Template Selection Matrix

Use this matrix to choose the right template family before generating files.

## Collection Flow

Choose collection templates when the main behavior is:

- loading a list or table
- filtering or refreshing a collection
- verifying visible items after an action
- checking description, state, or formatted secondary text per item

Use:

- `assets/opa5/Page.template.js`
- `assets/opa5/Journey.template.js`
- `assets/wdi5/flow.e2e.spec.template.js`

Typical assertions:

- collection becomes visible
- item count is at least N
- item title or description matches business output
- negative path updates page text or error state

## Form Flow

Choose form templates when the main behavior is:

- entering input values
- submitting a create or update form
- verifying confirmation or post-submit state

Use:

- `assets/opa5/FormPage.template.js`
- `assets/opa5/FormJourney.template.js`
- `assets/wdi5/form.e2e.spec.template.js`

Typical assertions:

- input value is set correctly
- submit action executes
- success text or confirmation state appears

## Navigation Flow

Choose navigation templates when the main behavior is:

- clicking an item or button to change route
- verifying another view becomes active
- asserting content on the target page

Use:

- `assets/opa5/NavigationPage.template.js`
- `assets/opa5/NavigationJourney.template.js`
- `assets/wdi5/navigation.e2e.spec.template.js`

Typical assertions:

- route trigger action executes
- target page readiness is detected
- target page text matches expected business output

## Combine Templates When Needed

Use multiple template families when the user asks for a fuller regression suite.

Examples:

- collection page with drill-down navigation: collection + navigation
- create form followed by result list refresh: form + collection
- worklist search then route to detail: collection + navigation

## Layer Selection Shortcuts

- only pure formatter or utility logic: QUnit only
- UI state inside app without real browser concerns: OPA5
- browser runtime timing, routing, or endpoint reachability concerns: wdi5
- full regression suite: QUnit + OPA5 + wdi5
