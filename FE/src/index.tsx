import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import { theme } from "@/styles/colorModeTheme";
import GlobalStyles from "@/styles/GlobalStyles";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
);
