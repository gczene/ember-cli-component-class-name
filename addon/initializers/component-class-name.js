import Ember from 'ember';

export function initialize(/* application */) {
  Ember.Component.reopen({
    init() {
      this._super(...arguments);
      try {
        var arr = this.toString().match(/@component:.+?:/),
        className = arr[0].split(':')[1];
        this.get('classNames').pushObject(className + '-component');
      } catch (err) {
        return;
      }
    }
  });
}

export default {
  name: 'component-class-name',
  initialize
};
