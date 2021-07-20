import Service from '@ember/service';
import RemoveLinkCommand from "../commands/remove-link-command";
import InsertLinkCommand from "../commands/insert-link-command";

/**
 * Entry point for EventBased
 *
 * @module editor-event-based-plugin
 * @class RdfaEditorEventBasedPlugin
 * @constructor
 * @extends Service
 */
export default class RdfaEditorEventBasedPlugin extends Service {
  register(editor) {
    this.editor = editor;
    this.editor.addToolbarButton("editor-plugins/insert-link-button");
    this.editor.addToolbarButton("editor-plugins/remove-link-button");

    this.editor.registerCommand(new InsertLinkCommand(this.editor.model));
    this.editor.registerCommand(new RemoveLinkCommand(this.editor.model));
  }
}
