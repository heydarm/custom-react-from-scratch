import { useEffect, useState, createElement } from "./react/index.js";

const fetchInitialCounter = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(10), 2000);
  });

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchInitialCounter().then((res) => {
      setCount(res);
      setIsLoading(false);
    });
  }, []);

  return createElement("div", {
    children: [
      createElement("p", {
        children: [isLoading ? "Loading..." : `Count: ${count}`],
      }),

      createElement("button", {
        onclick: () => setCount((prev) => prev + 1),
        disabled: isLoading,
        children: ["Increment"],
      }),

      createElement("button", {
        onclick: () => setCount((prev) => prev - 1),
        disabled: isLoading,
        children: ["Decrement"],
      }),
    ],
  });
};
