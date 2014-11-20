'use strict';

var Marionette = require('backbone.marionette'),
  _ = require('underscore');

require('bootstrapValidator');

module.exports = Marionette.Behavior.extend({
    onShow: function() {
        _(this.options.targets).forEach(function(target) {
            var globalOptions = this.options.options;

            if(_.isString(target)) {
                if(target === '@') {
                    this.$el.bootstrapValidator(globalOptions);
                } else {
                    var selector = Marionette.normalizeUIString(target, Object.getPrototypeOf(this.view).ui);

                    this.$(selector).bootstrapValidator(globalOptions);
                }
            } else {
                var localOptions = target.options;
                var options = _.extend({}, globalOptions, localOptions);
                var selector = Marionette.normalizeUIString(target.selector, Object.getPrototypeOf(this.view).ui);

                this.$(selector).bootstrapValidator(options);
            }
        }, this);
    }
});
