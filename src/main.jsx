import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/quicksand"; // Cài font

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
