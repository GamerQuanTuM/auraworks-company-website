import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full bg-[#F9F9F9]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
