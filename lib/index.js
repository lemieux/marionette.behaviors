'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            './behaviors/jquery-behavior',
            './behaviors/stickit-behavior',
            './behaviors/bootstrapvalidator-behavior'
        ], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(
            require('./behaviors/jquery-behavior.js'),
            require('./behaviors/stickit-behavior.js'),
            require('./behaviors/bootstrapvalidator-behavior.js')
        );
    }

})(this, function(
    jQueryBehavior,
    StickitBehavior,
    bootstrapValidatorBehavior
) {
    return {
        jQueryBehavior: jQueryBehavior,
        StickitBehavior: StickitBehavior,
        bootstrapValidatorBehavior: bootstrapValidatorBehavior
    };
});
