import Component from '@glimmer/component';

export default class InsertLinkButton extends Component {
  editor = null;

  constructor() {
    super(...arguments);
    this.editor = this.args.editor;
  }

  onClick = () => {
    this.editor.executeCommand("insert-link");
  }
}
