'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'marionette',
            'underscore'
        ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('backbone.marionette'),
            require('underscore')
        );
    }
})(this, function(Marionette, _) {

    return Marionette.Behavior.extend({
        onRender: function() {
            this.options = Marionette.normalizeUIKeys(this.options, Object.getPrototypeOf(this.view).ui);

            _(this.options).forEach(function(value, selector) {
                var element = this.view.$(selector);
                if (_(value).isObject()) {
                    _(value).forEach(function(options, functionName) {
                        options = options || {};
                        element[functionName](options);
                    }, this);
                } else if (_(value).isString()) {
                    element[value]();
                }
            }, this);
        }
    });

});
