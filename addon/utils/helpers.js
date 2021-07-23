import ModelNode from "@lblod/ember-rdfa-editor/model/model-node";

export default function isLinkTag(node) {
  return ModelNode.isModelElement(node) && node.type === "a";
}
