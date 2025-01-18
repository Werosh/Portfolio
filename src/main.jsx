import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx"; // Import ThemeProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the app in ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
