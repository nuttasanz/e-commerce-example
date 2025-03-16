import Head from "next/head";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../AppSidebar";

const DefaultLayout = ({
  children,
  title = "My App",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <>
      <Head>
        <title>{"test"}</title>
        <meta name="description" content="My custom layout" />
      </Head>
      <div className="min-h-screen flex">
        <SidebarProvider>
          <AppSidebar />
          <main>
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        </SidebarProvider>
      </div>
    </>
  );
};

export default DefaultLayout;
