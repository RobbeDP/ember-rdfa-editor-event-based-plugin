import {MisbehavedSelectionError} from "../utils/errors";

export default class InsertLinkCommand {
  name = "insert-link";
  model = null;

  constructor(model) {
    this.model = model;
  }

  canExecute(range = this.model.selection.lastRange) {
    if (!range) {
      return;
    }

    return range.collapsed;
  }

  execute(label, link, range = this.model.selection.lastRange) {
    if (!range) {
      throw new MisbehavedSelectionError();
    }

    // TODO: create ModelElement with type "a", add attribute href with value __link__ and add ModelText with content
    // TODO: label as a link to it.
    console.log("Link inserted!");
  }
}
