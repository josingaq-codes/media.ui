import { Header } from "@/features/home/components/header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
