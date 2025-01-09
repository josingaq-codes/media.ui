"use client";

import { Card, CardBody } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="relative flex justify-center">
      <Card className="bottom-0 z-10 fixed w-full py-2 rounded-none backdrop-blur backdrop-filter bg-opacity-0">
        <CardBody className="flex flex-col sm:flex-row justify-between items-center max-w-screen-lg mx-auto sm:px-12">
          <h1 className="font-mono text-white flex items-center gap-2">
            <Icon icon="solar:copyright-line-duotone" className="text-2xl" />
            <span>Almost all rights reserved</span>
          </h1>
          <h1 className="font-mono text-white">
            MEDIA.UI - {new Date().getFullYear()}
          </h1>
        </CardBody>
      </Card>
    </footer>
  );
};
