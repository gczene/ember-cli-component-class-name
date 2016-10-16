# Ember-CLI-component-class-name

This simple component adds a css class name automatically to the components based on their name. The reason to build it was to help acceptance tests when you test the existance of a component or you want to `find` it.

E.g.
```hbs
{{it-is-a-box}}
```

will be rendered as:
```html
<div class="ember-view it-is-a-box-component"></div>

```
## Nested components

```hbs
{{#it-is-a-box}}
  {{it-is-a-child}}
{{/it-is-a-box}}
```

will be rendered as:
```html
<div class="ember-view it-is-a-box-component">
  <div class="ember-view it-is-a-child-component"></div>
</div>

```



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
