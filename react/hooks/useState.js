import { rerender } from "./hookUtils.js";
import { useRef } from "./useRef.js";

export const useState = (initialValue) => {
  const state = useRef(initialValue);

  const setState = (value) => {
    const currentState = state.current;
    const newState = typeof value === "function" ? value(state.current) : value;
    state.current = newState;

    if (currentState !== newState) {
      setTimeout(() => rerender(), 0);
    }
  };

  return [state.current, setState];
};
