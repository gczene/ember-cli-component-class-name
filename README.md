# Ember-CLI-component-class-name

This simple component adds a css class name automatically to the components based on their name. The reason to build it was to help acceptance tests when you test the existance of a component or you want to `find` it.

E.g.
```hbs
{{it-is-a-box}}
```

will be rendered as:
```html
<div class="ember-view it-is-a-box-component">
</div>

```
## Nested components

Nested components name contains `/` therefore jQuery selectors can't find them. To avoid this problem `/` replaced as `-`.
For example:
```hbs
{{#component-a}}
  {{my-nested}}
{{/component-a}}
```
rendered as:
```html
<div class="ember-view component-a-component">
  <div class="ember-view component-a-my-nested-component"></div>
</div>
```

To override this behaviour or override the replacement string use `componentClassSlashReplacement` property in your environment.js. 

```javascript
// config/environment.js

module.exports = function(environment) {
  var ENV = {
    componentClassSlashReplacement: 'mySeparator' // or false to turn it off
```

Optional values of `componentClassSlashReplacement`:


| value             | example           | Result  |
| -------------     | -------------     | -----   |
| true (or not exist at all)  | using default "-" | parent-stg-my-child-component |
| string            | "YO"                |   parent-stgYOmy-child-component |
| false             | false             |    parent-stg/my-child-component |


## Installation
* `ember install ember-cli-component-class-name`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
