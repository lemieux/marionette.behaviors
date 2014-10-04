'use strict';

var Marionette = require('backbone.marionette');

require('backbone.stickit');

module.exports = Marionette.Behavior.extend({
    onRender: function() {
        Marionette.normalizeUIKeys(this.options, Object.getPrototypeOf(this.view).ui);
        this.view.bindings = this.options;
        this.view.stickit();
    },

    onDestroy: function() {
        this.view.unstickit();
    }

});