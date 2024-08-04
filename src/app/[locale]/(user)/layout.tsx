import SiteHeader from "@/shared/Header/SiteHeader";

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader hasBorder type="dashboard" />
      {children}
    </>
  );
}
