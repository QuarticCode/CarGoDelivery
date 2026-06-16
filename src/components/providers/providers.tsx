"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeProvider from "../theme/theme-provider";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
