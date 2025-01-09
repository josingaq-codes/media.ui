"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <Button color="primary" onPress={() => setTheme("light")}>
        Light Mode
      </Button>
      <Button onPress={() => setTheme("dark")}>Dark Mode</Button>
      <Button onPress={() => setTheme("system")}>System Mode</Button>
    </div>
  );
};
