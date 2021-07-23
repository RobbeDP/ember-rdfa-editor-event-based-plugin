import ModelElement from "@lblod/ember-rdfa-editor/model/model-element";
import ModelText from "@lblod/ember-rdfa-editor/model/model-text";
import Command from "@lblod/ember-rdfa-editor/commands/command";
import {MisbehavedSelectionError} from "@lblod/ember-rdfa-editor/utils/errors";
import isLinkTag from "../utils/helpers";

export default class InsertLinkCommand extends Command {
  name = "insert-link";

  constructor(model) {
    super(model);
  }

  canExecute(href, content, range = this.model.selection.lastRange) {
    if (!range) {
      return;
    }

    return range.collapsed && !range.hasCommonAncestorWhere(isLinkTag);
  }

  execute(href, content, range = this.model.selection.lastRange) {
    if (!range) {
      throw new MisbehavedSelectionError();
    }

    const linkTag = new ModelElement("a");
    linkTag.setAttribute("href", href);
    linkTag.addChild(new ModelText(content));

    this.model.change((mutator) => {
      mutator.insertNodes(range, linkTag);
    });
  }
}
