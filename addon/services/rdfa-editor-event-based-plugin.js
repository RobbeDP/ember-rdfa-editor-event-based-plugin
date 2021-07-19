import Service from '@ember/service';

/**
 * Entry point for EventBased
 *
 * @module editor-event-based-plugin
 * @class RdfaEditorEventBasedPlugin
 * @constructor
 * @extends Service
 */
export default class RdfaEditorEventBasedPlugin extends Service {
  register(editor, hintsRegistry) {
    this.editor = editor;
    this.hintsRegistry = hintsRegistry;
    this.editor.on("contentChanged", this.handleContentChanged);
    this.editor.on("rdfaChanged", this.handleRdfaChanged);
    this.editor.on("selectionChanged", this.handleSelectionChanged)
  }

  handleContentChanged = (event) => {
    const {name, payload} = event;
    console.log(`${name} event triggered!`);
  }

  handleRdfaChanged = (event) => {
    const {name, payload} = event;
    console.log(`${name} event triggered!`);
  }

  handleSelectionChanged = (event) => {
    const {name, payload} = event;
    console.log(`${name} event triggered!`);
  }
}
