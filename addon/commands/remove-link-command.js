import {MisbehavedSelectionError} from "../utils/errors";


export default class RemoveLinkCommand {
  name = "remove-link";
  model = null;

  constructor(model) {
    this.model = model;
  }

  isLinkTag = (el) => {
    return el.type === "a";
  }

  canExecute(range = this.model.selection.lastRange) {
    if (!range) {
      return;
    }

    return range.collapsed && range.hasCommonAncestorWhere(this.isLinkTag);
  }

  execute(range = this.model.selection.lastRange) {
    if (!range) {
      throw new MisbehavedSelectionError();
    }

    const linkElements = range.findCommonAncestorsWhere(this.isLinkTag);
    const linkElement = linkElements.next().value;

    if (!linkElement) throw new Error("No ancestor with <a> tag found");

    linkElement.unwrap();
  }
}
