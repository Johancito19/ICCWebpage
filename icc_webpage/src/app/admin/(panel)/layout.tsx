import "@/styles/admin-base.css";
export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return <div className="adm-shell">{children}</div>;
}
