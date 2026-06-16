"use client";

import { useTheme } from "next-themes";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useEffect } from "react";

export function ThemeItem({
  themeSelector,
}: Readonly<{
  themeSelector: "light" | "dark" | "system";
}>) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if (theme === undefined) setTheme("system");
  });

  return (
    <DropdownMenuItem
      onClick={() => setTheme(themeSelector)}
      className={`${theme === themeSelector ? "text-foreground bg-muted" : "bg-transparent"}`}
    >
      {themeSelector.charAt(0).toUpperCase() + themeSelector.slice(1)}
    </DropdownMenuItem>
  );
}
