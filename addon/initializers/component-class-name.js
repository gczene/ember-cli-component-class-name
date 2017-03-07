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
        let classNames = this.classNames.concat(className + '-component');
        Ember.set(this, 'classNames', classNames);
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
