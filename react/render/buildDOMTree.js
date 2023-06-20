import { createDOMNode } from "./createDOMNode.js";
import { renderElement } from "./renderElement.js";

export const buildDOMTree = (element) => {
  if (typeof element !== "object") return element;

  const node =
    typeof element.component === "function" ? renderElement(element) : element;
  return createDOMNode({
    component: node.component,
    props: {
      ...node.props,
      children: node.props?.children?.map((child) => buildDOMTree(child)) ?? [],
    },
  });
};
