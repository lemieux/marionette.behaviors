#Changelog
##0.0.9
- Bug fix for `patchGetters` where it was not late bound.

##0.0.8
- Added a swtich to patch deep accessor (like in Backbone-Associations `.get('attr.0.name')`) in the Stickit behavior. It is off by default but you can enable it by requiring the behavior and do `StickitBehavior.patchGetters = true`;

##0.0.6
- Renamed bootstraValidator to bootstrapValidatorBehavior (thanks @dannytranlx)

##0.0.5
- Added bootstrapValidator behavior (thanks @dannytranlx)

##0.0.4
- Renamed BootstrapBehavior to jQueryBehavior since it was generic enough to be used with any jQuery plugin
