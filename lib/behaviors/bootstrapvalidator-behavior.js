'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'marionette',
            'underscore',
            'bootstrapValidator'
        ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('backbone.marionette'),
            require('underscore'),
            require('bootstrapValidator')
        );
    }
})(this, function (Marionette, _, BootstrapValidator) {

    return Marionette.Behavior.extend({
        onRender: function () {
            _(this.options.targets).forEach(function (target) {
                var globalOptions = this.options.options;

                if (_.isFunction(globalOptions)) {
                    globalOptions = globalOptions.call(this);
                }

                if (_.isString(target)) {
                    if (target === '@') {
                        this.$el.bootstrapValidator(globalOptions);
                    } else {
                        var selector = Marionette.normalizeUIString(target, Object.getPrototypeOf(this.view).ui);

                        this.$(selector).bootstrapValidator(globalOptions);
                    }
                } else {
                    var localOptions = target.options;

                    if (_.isFunction(localOptions)) {
                        localOptions = localOptions.call(this);
                    }

                    var options = _.extend({}, globalOptions, localOptions);
                    var selector = Marionette.normalizeUIString(target.selector, Object.getPrototypeOf(this.view).ui);

                    this.$(selector).bootstrapValidator(options);
                }
            }, this);
        }
    });

});
