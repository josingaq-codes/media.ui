interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex justify-center items-center w-dvw h-dvh bg-[url('/bg-hero.jpg')] bg-cover bg-center">
      {children}
    </main>
  );
}
