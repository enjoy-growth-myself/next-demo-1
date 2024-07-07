// theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // プライマリカラーを青に設定
    },
    secondary: {
      main: "#dc004e", // セカンダリカラーを赤に設定
    },
  },
  typography: {},
});

export default theme;
