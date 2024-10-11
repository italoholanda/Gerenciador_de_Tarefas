import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import React from "react";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
