"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";

export const Home = () => {
  return (
    <div className="relative">
      <section className="top-0 fixed w-full h-dvh bg-[url('/bg-hero.jpg')] bg-cover bg-center">
        <div className="z-10 w-full h-dvh flex justify-center items-center bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-50">
          <Card className="backdrop-blur backdrop-filter bg-opacity-0 p-2 m-2">
            <CardHeader className="font-mono text-4xl uppercase text-white">
              Unlimited movies, TV shows, and more
            </CardHeader>
            <CardBody className="sm:text-center font-mono text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </CardBody>
            <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Input label="Email address" variant="flat" size="sm" />
              <Button color="primary" size="lg">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};
