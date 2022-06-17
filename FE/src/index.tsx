import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
