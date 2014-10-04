'use strict';

var Marionette = require('backbone.marionette'),
    _ = require('underscore');


module.exports = Marionette.Behavior.extend({
    onRender: function() {
        Marionette.normalizeUIKeys(this.options, Object.getPrototypeOf(this.view).ui);

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