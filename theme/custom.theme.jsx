"use client";

import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import palette from "./palette";
import typography from "./typography";

export const theme = createTheme({
  typography,
  palette: palette(),
});

function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
