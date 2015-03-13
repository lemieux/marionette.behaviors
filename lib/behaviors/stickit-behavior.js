'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'marionette',
            'underscore',
            'backbone.stickit'
        ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('backbone.marionette'),
            require('underscore'),
            require('backbone.stickit')
        );
    }
})(this, function (Marionette, _, Stickit) {


    var StickitBehavior = Marionette.Behavior.extend({
        _patchGetters: function () {
            _.each(this.options, _.bind(function (options, key) {
                if (!_.isString(options) && !options.observe) return;

                if (_.isString(options)) {
                    options = {
                        observe: options
                    };
                }

                options.onGet = _.wrap(options.onGet, function(onGet, value, options) {
                  var getValue = this.model.get.bind(this.model);
                  var correctValue = _.isArray(options.observe) 
                    ? _.map(options.observe, getValue)
                    : getValue(options.observe);

                  return onGet ? onGet.call(this, value, options) : correctValue;
                });

                this.options[key] = options;
            }, this));
        },

        onRender: function () {
            this.options = Marionette.normalizeUIKeys(this.options, Object.getPrototypeOf(this.view).ui);
            if (StickitBehavior.patchGetters) {
                this._patchGetters();
            }
            this.view.bindings = this.options;
            this.view.stickit();
        },

        onDestroy: function () {
            this.view.unstickit();
        }
    }, {
            patchGetters: false
        });

    return StickitBehavior;

});
