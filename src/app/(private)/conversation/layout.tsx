import SidebarConversation from "@/components/conversation/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarConversation />
      {children}
    </>
  );
}
