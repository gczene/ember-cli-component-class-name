import Ember from 'ember';

export function initialize(/* application */) {
  Ember.Component.reopen({
    init() {
      var config = Ember.getOwner(this).resolveRegistration('config:environment'),
        slashReplacement = '-';

      if (typeof config.componentClassSlashReplacement === 'string') {
        slashReplacement = config.componentClassSlashReplacement;
      } else if (config.componentClassSlashReplacement === false) {
        slashReplacement = false;
      }

      this._super(...arguments);
      try {
        let arr = this.toString().match(/@component:.+?:/),
        className = arr[0].split(':')[1];

        if (slashReplacement !== false) {
          className = className.replace(/\//g, slashReplacement);
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
