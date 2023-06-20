import { prepareHooks } from "../hooks/hookUtils.js";
import { internalStore } from "../internalStore.js";

export const renderElement = (element) => {
  const { component, props } = element;

  prepareHooks(component);

  const state = internalStore.get(component) || { cache: [] };
  internalStore.set(component, { ...state, component, props });

  return component(props);
};
