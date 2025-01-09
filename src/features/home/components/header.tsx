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
          <Button
            as={Link}
            href="/"
            color="primary"
            variant="light"
            className="font-black text-base tracking-wide"
          >
            MEDIA.UI
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/sign-in" color="primary" variant="flat">
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
