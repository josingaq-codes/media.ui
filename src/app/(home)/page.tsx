import { Home } from "@/features/home/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return <Home />;
}
