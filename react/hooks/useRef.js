import { getCurrentRenderingStore } from "./hookUtils.js";
import { hooksInternalStore } from "./hooksInternalStore.js";

export const useRef = (initialValue) => {
  const id = hooksInternalStore.hooksId++;

  const { cache } = getCurrentRenderingStore();

  const value = cache[id];

  if (value === undefined) {
    cache[id] = { current: initialValue };
  }

  return cache[id];
};
