import { internalStore } from "../internalStore.js";
import { mount } from "../render/mount.js";
import { hooksInternalStore } from "./hooksInternalStore.js";

export const prepareHooks = (component) => {
  hooksInternalStore.hooksId = 0;
  hooksInternalStore.renderingComponent = component;
};

export const resolveRenderingComponent = () => {
  if (hooksInternalStore.renderingComponent == null) {
    throw new Error(
      "Invalid hook call. Hooks can only be called inside of the body of a function component"
    );
  }

  return hooksInternalStore.renderingComponent;
};

export const getCurrentRenderingStore = () =>
  internalStore.get(resolveRenderingComponent());

export const rerender = () => {
  const { component, props } = getCurrentRenderingStore();
  mount({ component, props });
};
