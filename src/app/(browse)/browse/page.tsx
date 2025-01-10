import { Browse } from "@/features/browse/components/browse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse",
};

export default function BrowsePage() {
  return <Browse />;
}
