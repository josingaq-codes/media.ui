import type { Metadata } from "next";

import { SignUp } from "@/features/auth/sign-up/components/sign-up";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return <SignUp />;
}
