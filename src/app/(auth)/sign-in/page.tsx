import type { Metadata } from "next";

import { SignIn } from "@/features/auth/sign-in/components/sign-in";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return <SignIn />;
}
