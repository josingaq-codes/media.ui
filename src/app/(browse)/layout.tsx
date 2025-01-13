import { Nav } from "@/components/nav";

interface BrowseLayoutProps {
  children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
