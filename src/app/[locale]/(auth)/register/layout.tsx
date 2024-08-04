import SiteHeader from "@/shared/Header/SiteHeader";

interface LoginLayoutProps {
  children: React.ReactNode;
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="grid">
      <SiteHeader type="moderated" />

      {children}
    </div>
  );
}
