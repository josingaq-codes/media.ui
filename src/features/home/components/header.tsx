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
    <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Button
            color="primary"
            variant="light"
            className="font-black text-base tracking-wide"
          >
            <Link href="/">MEDIA.UI</Link>
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="flat">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
