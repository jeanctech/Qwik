import "@builder.io/qwik/qwikloader.js";

import { render } from "@builder.io/qwik";
import { App } from "./app.jsx";
import "./styles/index.css";

render(document.getElementById("app"), <App />);
