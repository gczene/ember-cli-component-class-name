import Ember from 'ember';

export function initialize(/* application */) {
  Ember.Component.reopen({
    init() {

      this._super(...arguments);
      try {
        let arr = this.toString().match(/@component:.+?:/),
          className = arr[0].split(':')[1];

        // if it is nested it contains a '/'
        if (~className.lastIndexOf('/')) {
          className = className.substring(className.lastIndexOf('/') + 1, className.length);
        }
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
