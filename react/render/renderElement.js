import { prepareHooks } from "../hooks/hookUtils.js";

export const renderElement = (element) => {
  const { component, props } = element;

  const state = internalStore.get(component) || { cache: [] };
  internalStore.set(component, { ...state, component, props });

  return component(props);
};
