import PublicNavbar from "@/components/dynamicNavbars/PublicNavBar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNavbar />
      <main>{children}</main>
    </>
  );
}