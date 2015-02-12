'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'marionette',
            'backbone.stickit'
        ], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('backbone.marionette'),
            require('backbone.stickit')
        );
    }
})(this, function(Marionette, Stickit) {

  return Marionette.Behavior.extend({
      onRender: function() {
          this.options = Marionette.normalizeUIKeys(this.options, Object.getPrototypeOf(this.view).ui);
          this.view.bindings = this.options;
          this.view.stickit();
      },

      onDestroy: function() {
          this.view.unstickit();
      }
  });

});
