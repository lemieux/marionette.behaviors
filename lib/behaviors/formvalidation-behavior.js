'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'marionette',
            'underscore',
            'formvalidation'
        ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('backbone.marionette'),
            require('underscore'),
            require('formvalidation')
        );
    }
})(this, function (Marionette, _, FormValidation) {

    return Marionette.Behavior.extend({
        onRender: function () {
            _(this.options.targets).forEach(function (target) {
                var globalOptions = this.options.options;

                if (_.isFunction(globalOptions)) {
                    globalOptions = globalOptions.call(this);
                }

                if (_.isString(target)) {
                    if (target === '@') {
                        this.$el.formValidation(globalOptions);
                    } else {
                        var selector = Marionette.normalizeUIString(target, Object.getPrototypeOf(this.view).ui);

                        this.$(selector).formValidation(globalOptions);
                    }
                } else {
                    var localOptions = target.options;

                    if (_.isFunction(localOptions)) {
                        localOptions = localOptions.call(this);
                    }

                    var options = _.extend({}, globalOptions, localOptions);
                    var selector = Marionette.normalizeUIString(target.selector, Object.getPrototypeOf(this.view).ui);

                    this.$(selector).formValidation(options);
                }
            }, this);
        }
    });

});
