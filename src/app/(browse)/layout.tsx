interface BrowseLayoutProps {
  children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
  return <main>{children}</main>;
}
