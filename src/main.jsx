import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/quicksand"; // Font
import { BrowserRouter } from "react-router-dom";
import { TechStackProvider } from "./context/TechStackContext.jsx";
import { ProjectProvider } from "./context/ProjectContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TechStackProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </TechStackProvider>
    </BrowserRouter>
  </StrictMode>
);
