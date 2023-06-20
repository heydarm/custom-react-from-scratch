export const createDOMNode = (element) => {
  const { component, props } = element;
  const { children, ...restProps } = props;

  const node = document.createElement(component);
  Object.assign(node, restProps);
  node.append(...children);

  return node;
};
