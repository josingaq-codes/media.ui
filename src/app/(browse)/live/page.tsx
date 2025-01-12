import { Metadata } from "next";

import { Live } from "@/features/browse/components/live";

export const metadata: Metadata = {
  title: "Live",
};

export default function BrowsePage() {
  return <Live />;
}
