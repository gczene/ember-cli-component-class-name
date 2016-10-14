import Ember from 'ember';
import ComponentClassNameInitializer from 'dummy/initializers/component-class-name';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | component class name', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ComponentClassNameInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
