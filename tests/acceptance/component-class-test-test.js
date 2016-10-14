import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | component class test');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find('.my-component-component').length > 0, 'should have 2 my-component component');
    assert.equal(find('.component-two-component').length, 1, 'should render 1 component-two component');
    /**
     * custom-class-added-in-component-js added from component.js as classNames: ['custom-class-added-in-component-js']
     */
    assert.ok(find('.component-two-component').hasClass('custom-class-added-in-component-js'));
    /**
     * custom-class added in the template (see: application.hbs)
     */
    assert.ok(find('.my-component-component:eq(0)').hasClass('custom-class'));
  });
});
