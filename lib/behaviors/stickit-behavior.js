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

            var getValue = _.bind(function (key) {
                return this.view.model.get(key);
            }, this);

            _.each(this.options, _.bind(function (options, key) {
                if (!_.isString(options) && !options.observe) return;

                var value;

                if (_.isString(options)) {
                    value = getValue(options);
                    options = {
                        observe: options
                    };
                } else if (_.isArray(options.observe)) {
                    value = _.map(options.observe, getValue);
                } else if (_.isString(options.observe)) {
                    value = getValue(options.observe);
                }

                var onGet = _.isFunction(options.onGet) ? options.onGet : _.constant(value);

                options.onGet = _.wrap(onGet, _.bind(function (func, val, opts) {
                    return func.call(this, value, opts);
                }, this));

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
