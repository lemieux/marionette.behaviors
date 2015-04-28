'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            './behaviors/jquery-behavior',
            './behaviors/stickit-behavior',
            './behaviors/bootstrapvalidator-behavior'
            './behaviors/formvalidation-behavior'
        ], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(
            require('./behaviors/jquery-behavior.js'),
            require('./behaviors/stickit-behavior.js'),
            require('./behaviors/bootstrapvalidator-behavior.js')
            require('./behaviors/formvalidation-behavior.js')
        );
    }

})(this, function(
    jQueryBehavior,
    StickitBehavior,
    bootstrapValidatorBehavior,
    formValidationBehavior
) {
    return {
        jQueryBehavior: jQueryBehavior,
        StickitBehavior: StickitBehavior,
        bootstrapValidatorBehavior: bootstrapValidatorBehavior,
        formValidationBehavior: formValidationBehavior
    };
});
