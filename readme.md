# Ember jquery autocomplete component

An autocomplete component for ember.js using [devbridge-autocomplete](https://github.com/devbridge/jQuery-Autocomplete)

## Usage

run ```bower install```

run ```grunt default``` - component will be build to ```dist```

Include ```devbridge-autocomplete``` and ```ember-jquery-autocomplete.js``` to your Ember project

Add the ```-autocomplete``` tag in your handlebars template

```
{{-autocomplete vocabulary=content value=content.selectedColor auto-focus=true}}
```

## Properties

- ```vocabulary``` An array of ember objects used for the lookup.

## Note

variable which is bound to component's value should be initialised in application (with empty string for example)