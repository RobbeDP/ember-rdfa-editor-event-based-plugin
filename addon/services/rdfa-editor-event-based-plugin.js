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
    this.editor.on("contentChanged", this.handleContentChange);
    this.editor.on("rdfaChanged", this.handleRdfaChange);
  }

  handleContentChange = (event) => {
    const {name, payload} = event;
    this.editor.executeCommand("make-highlight");
    console.log(`${name} event triggered!`);
  }

  handleRdfaChange = (event) => {
    const {name, payload} = event;
    console.log(`${name} event triggered!`);
  }
}
