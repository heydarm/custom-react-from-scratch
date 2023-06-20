import { buildDOMTree } from "./buildDOMTree.js";

export let coreParent = null;

export const mount = (element, parent) => {
  if (parent) {
    coreParent = parent;
  }

  (parent ?? coreParent).replaceChildren(buildDOMTree(element));
};
