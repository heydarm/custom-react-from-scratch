import { useRef } from "./useRef.js";

export const useEffect = (callback, deps) => {
  const cleanupFn = useRef();
  const prevDeps = useRef();

  const hasChanged =
    prevDeps.current == null ||
    prevDeps.current.some((item, i) => item !== deps[i]);

  if (hasChanged) {
    prevDeps.current = deps;
    cleanupFn.current?.();
    cleanupFn.current = callback();
  }
};
