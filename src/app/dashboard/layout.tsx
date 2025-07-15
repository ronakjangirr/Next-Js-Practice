import DashboardNavbar from "@/components/dynamicNavbars/DashBoardNavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardNavbar />
      <main>{children}</main>
    </>
  );
}
