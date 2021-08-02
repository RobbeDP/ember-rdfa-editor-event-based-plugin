ember-rdfa-editor-event-based-plugin
==============================================================================

This is a demo plugin for the [@lblod/ember-rdfa-editor](https://github.com/lblod/ember-rdfa-editor).
It first allows user to add links (<a href="say-editor.com">sample text</a> by pressing an insert button.
These links can also be deleted by pressing a delete button. This button will only be visible if the cursor
is inside a link tag.

The goal of this small project is mainly to experience with the possibilities of
plugins in this editor. This plugin is currently not yet compatible with the npm releases
of the editor. To test this plugin, follow the tutorial in the section **Usage** below.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-rdfa-editor-event-based-plugin
```


Usage
------------------------------------------------------------------------------

Install the editor:
```shell
git clone https://github.com/lblod/ember-rdfa-editor.git
cd ember-rdfa-editor
git checkout feature/event-based-plugins
npm install
npm link
```

Install the plugin:
```shell
git clone https://github.com/RobbeDP/ember-rdfa-editor-event-based-plugin
cd ember-rdfa-editor-event-based-plugin
npm install
npm link
npm link @lblod/ember-rdfa-editor
```

Install and set up the ember host app.
`npm install` will probably report `@lblod/ember-rdfa-editor-event-based-plugin` could not be found.
In order to fix this, temporarily remove the corresponding line from the `package.json` file and add it again after
the installation succeeds.
```shell
https://github.com/RobbeDP/test-ember-host-app
cd ember-rdfa-editor-event-based-plugin
npm install
npm link @lblod/ember-rdfa-editor
npm link @lblod/ember-rdfa-editor-event-based-plugin
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
