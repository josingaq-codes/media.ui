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

export const ThemeDropdown = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [keys, setKeys] = useState<Selection>(new Set([theme!]));
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setKeys(new Set([theme!]));
  }, [theme]);

  return (
    <Dropdown>
      <DropdownTrigger>
        {!mounted ? (
          <Button color="primary" variant="flat" isIconOnly={true}>
            <Icon
              className="text-2xl animate-spinner-ease-spin"
              icon="solar:refresh-bold-duotone"
            />
          </Button>
        ) : (
          <Button color="primary" variant="flat" isIconOnly={true}>
            {resolvedTheme === "light" ? (
              <Icon className="text-2xl" icon="solar:moon-stars-bold-duotone" />
            ) : (
              <Icon className="text-2xl" icon="solar:sun-bold-duotone" />
            )}
          </Button>
        )}
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
