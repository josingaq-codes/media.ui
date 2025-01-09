"use client";

import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  Checkbox,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";

import { Icon } from "@iconify/react";

export const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <Card className="w-full max-w-sm p-4">
      <CardHeader className="flex justify-center">
        <Link href="/" className="text-foreground font-bold uppercase">
          Media UI
        </Link>
      </CardHeader>

      <CardBody>
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            isRequired={true}
          />

          <Input
            type={isVisible ? "text" : "password"}
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            isRequired={true}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    icon="solar:eye-closed-broken"
                    className="pointer-events-none text-2xl text-default-400"
                  />
                ) : (
                  <Icon
                    icon="solar:eye-broken"
                    className="pointer-events-none text-2xl text-default-400"
                  />
                )}
              </button>
            }
          />

          <Input
            type={isVisible ? "text" : "password"}
            label="Confirm Password"
            variant="bordered"
            placeholder="Enter your password"
            isRequired={true}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    icon="solar:eye-closed-broken"
                    className="pointer-events-none text-2xl text-default-400"
                  />
                ) : (
                  <Icon
                    icon="solar:eye-broken"
                    className="pointer-events-none text-2xl text-default-400"
                  />
                )}
              </button>
            }
          />

          <div className="w-full flex justify-between items-center py-2">
            <Checkbox name="remember" size="sm">
              Remember me
            </Checkbox>
            <Link className="text-default-500" href="/" size="sm">
              Forgot password?
            </Link>
          </div>

          <Button className="w-full" color="primary" type="submit">
            Sign Up
          </Button>
        </Form>

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>

        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
          <Button
            startContent={
              <Icon className="text-default-500" icon="fe:github" width={24} />
            }
            variant="bordered"
          >
            Continue with Github
          </Button>
        </div>
      </CardBody>

      <CardFooter className="flex justify-center items-center gap-2">
        <p className="text-small">Already have an account?</p>
        <Link href="/sign-in" size="sm">
          Sign In
        </Link>
      </CardFooter>
    </Card>
  );
};
