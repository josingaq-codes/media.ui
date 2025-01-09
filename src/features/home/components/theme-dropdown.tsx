"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import type { Selection } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { Icon } from "@iconify/react";
import { LoaderIcon } from "lucide-react";

export const ThemeDropdown = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [keys, setKeys] = useState<Selection>(new Set([theme!]));
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="flat" isIconOnly={true}>
          {!mounted ? (
            <LoaderIcon size={24} className="animate-spinner-ease-spin" />
          ) : resolvedTheme === "light" ? (
            <Icon icon="solar:moon-bold" className="text-2xl" />
          ) : (
            <Icon icon="solar:sun-bold" className="text-2xl" />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        color="primary"
        variant="flat"
        disallowEmptySelection
        selectedKeys={keys}
        selectionMode="single"
        onSelectionChange={setKeys}
      >
        <DropdownItem key="light" onPress={() => setTheme("light")}>
          Light
        </DropdownItem>
        <DropdownItem key="dark" onPress={() => setTheme("dark")}>
          Dark
        </DropdownItem>
        <DropdownItem key="system" onPress={() => setTheme("system")}>
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
