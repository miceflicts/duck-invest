"use client";

import { ThemeProvider } from "./components/theme-provider";

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="duck-invest-theme">
      {children}
    </ThemeProvider>
  );
}
