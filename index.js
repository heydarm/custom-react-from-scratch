import { Counter } from "./Counter.js";
import { createElement, mount } from "./react/index.js";

const root = document.getElementById("root");

mount(createElement(Counter), root);
