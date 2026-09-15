import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Preserve old HashRouter bookmarks (/#/phd-project → /phd-project)
if (typeof window !== "undefined" && window.location.hash.startsWith("#/")) {
  const path = window.location.hash.slice(1);
  window.history.replaceState(null, "", path + window.location.search);
}

createRoot(document.getElementById("root")!).render(<App />);
