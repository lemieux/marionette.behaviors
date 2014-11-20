# Marionette Behaviors
Marionette Behaviors is a collection of useful behaviors for Marionette. It doesn't force you to have all dependencies, but it's your responsibility to have them in your project.

Remember that you need to register the [behaviors before using them](http://marionettejs.com/docs/marionette.behaviors.html). Also, it is highly suggested to require the behavior directly instead of the whole lib since it will need all the dependencies that you might not need.

## Behaviors

All behaviors can reuse the same syntax as events and triggers to target element defined in the `ui` object of the view (`@ui.someField`). They are converted on rendering.

### jQuery
This behavior allows the use of any jQuery plugins on defined elements.

```
behaviors: {
    jQuery: {
        '@ui.dateField': 'datepicker',
        '@ui.timeField': {
            timepicker: {
                format: 'HH:mm'
            }
        }
    }
}
```

A plugin can be defined using two different ways: a single string or an object. If you don't need to pass anything to the plugin and have only one plugin to apply to that element, a single string should be your best option. However, if you want to pass options and/or want to apply multiple plugins to an element, use an object. The format is the following: `functionName: options`. This will result in this: `$(element).functionName(options)`.


### Stick it
**Works on v0.8.0**

This behavior makes it easier to use [Stickit](https://github.com/NYTimes/backbone.stickit) by handling bindings definition and applying Stickit to the view.

TODO: Complete usage documentation

### BootstrapValidator
**Works with v0.5.3**
This behavior allows you to integrate the goodness of [BootstrapValidator](http://bootstrapvalidator.com/) in your views and having client-side validation on your forms.

TODO: Complete usage documentation

##Changelog:

###0.0.5
- Added bootstrapValidator behavior (thanks @dannytranlx)

###0.0.4
- Renamed BootstrapBehavior to jQueryBehavior since it was generic enough to be used with any jQuery plugin
