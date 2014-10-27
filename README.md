# Marionette Behaviors
Marionette Behaviors is a collection of useful behaviors for Marionette. It doesn't force you to have all dependencies, but it's your responsibility to have them in your project.

Remember that you need to register the [behaviors before using them](http://marionettejs.com/docs/marionette.behaviors.html).

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
This behavior makes it easier to use [Stickit](https://github.com/NYTimes/backbone.stickit) by handling bindings definition and applying Stickit to the view.

TODO: Complete documentation