import Command from "@lblod/ember-rdfa-editor/commands/command";
import {MisbehavedSelectionError} from "@lblod/ember-rdfa-editor/utils/errors";
import isLinkTag from "../utils/helpers";


export default class RemoveLinkCommand extends Command {
  name = "remove-link";

  constructor(model) {
    super(model)
  }

  canExecute(range = this.model.selection.lastRange) {
    if (!range) {
      return;
    }

    return range.collapsed && range.hasCommonAncestorWhere(isLinkTag);
  }

  execute(range = this.model.selection.lastRange) {
    if (!range) {
      throw new MisbehavedSelectionError();
    }

    const linkElements = range.findCommonAncestorsWhere(isLinkTag);
    const linkElement = linkElements.next().value;

    if (!linkElement) throw new Error("No ancestor with <a> tag found");

    this.model.change((mutator) => {
      mutator.unwrap(linkElement);
    });
  }
}
