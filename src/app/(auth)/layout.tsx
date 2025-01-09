interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex justify-center items-center w-dvw h-dvh">
      {children}
    </main>
  );
}
