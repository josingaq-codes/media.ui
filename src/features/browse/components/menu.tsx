"use client";

import { UserAvatar } from "@/features/browse/components/user-avatar";
import { ThemeDropdown } from "@/features/home/components/theme-dropdown";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export const Menu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" isIconOnly={true} onPress={onOpen}>
        <Icon icon="solar:hamburger-menu-broken" className="text-4xl" />
      </Button>
      <Drawer
        placement="left"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                <Button
                  color="primary"
                  variant="flat"
                  className="font-black text-base tracking-wide"
                >
                  MEDIA.UI
                </Button>
              </DrawerHeader>
              <DrawerBody>
                <Button
                  color="primary"
                  variant="flat"
                  startContent={
                    <Icon icon="solar:home-angle-broken" className="text-xl" />
                  }
                  className="flex justify-start items-center gap-2 tracking-wide font-bold"
                  onPress={onClose}
                >
                  Home
                </Button>
                <Button
                  color="primary"
                  variant="light"
                  startContent={
                    <Icon
                      icon="solar:clapperboard-play-broken"
                      className="text-xl"
                    />
                  }
                  className="flex justify-start items-center gap-2 tracking-wide font-bold"
                  onPress={onClose}
                >
                  Movies
                </Button>
                <Button
                  color="primary"
                  variant="light"
                  startContent={
                    <Icon icon="solar:display-broken" className="text-xl" />
                  }
                  className="flex justify-start items-center gap-2 tracking-wide font-bold"
                  onPress={onClose}
                >
                  TV Shows
                </Button>
                <Button
                  color="primary"
                  variant="light"
                  startContent={
                    <Icon icon="solar:tv-broken" className="text-xl" />
                  }
                  className="flex justify-start items-center gap-2 tracking-wide font-bold"
                  onPress={onClose}
                >
                  Live TV
                </Button>
                <Button
                  color="primary"
                  variant="light"
                  startContent={
                    <Icon icon="solar:heart-broken" className="text-xl" />
                  }
                  className="flex justify-start items-center gap-2 tracking-wide font-bold"
                  onPress={onClose}
                >
                  Watch List
                </Button>
              </DrawerBody>
              <DrawerFooter className="flex justify-between items-center">
                <UserAvatar />
                <ThemeDropdown />
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
