"use client";

import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeDropdown } from "./theme-dropdown";

export const Header = () => {
  return (
    <Navbar isBordered={true}>
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">MEDIA.UI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/sign-in" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
