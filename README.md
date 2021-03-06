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

```
bootstrapValidator: {
    options: {
        // ... insert global settings for alls forms ...
    },
    targets: [
        '@ui.form' // uses only defaults settings,
        {
            selector: '@ui.form',
            options: {
                // ... extra local options ...
            }
        },
        '@' // special case to target the whole view if it's a form
    ]
}
```

The BootstrapValidator behavior integrate the `$(form).bootstrapValidator()` call into your views as a behavior. You can pass [options](http://bootstrapvalidator.com/settings/) into the _global_ `options` object to apply to all the _BootstrapValidator-ed_ forms in your view. The `targets` list can handle [ui hashes](http://marionettejs.com/docs/marionette.view.html#viewbinduielements) or regular jQuery selectors. You may also pass an object with the attribute `selector` to define your target and add specific settings to that form into the `options` attributes. An `@` will target all the forms in the view and apply BootstrapValidator on them.
