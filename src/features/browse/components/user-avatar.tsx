"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";

export const UserAvatar = () => {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            radius: "md",
            color: "primary",
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
          }}
          className="transition-transform"
          description="@josingaq"
          name="José Inga Quintana"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" color="primary" variant="flat">
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" variant="flat">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
