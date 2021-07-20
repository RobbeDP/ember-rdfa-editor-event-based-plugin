import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";

export default class RemoveLinkButton extends Component {
  editor = null;
  @tracked showButton = false;

  constructor() {
    super(...arguments);
    this.editor = this.args.editor;

    this.editor.on("selectionChanged", this.updateProperties);
    this.editor.on("contentChanged", this.updateProperties);
  }

  updateProperties = () => {
    this.showButton = this.editor.canExecuteCommand("remove-link");
  }

  onClick = () => {
    this.editor.executeCommand("remove-link");
  }
}
