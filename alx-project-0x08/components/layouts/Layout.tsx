import { ReactComponentProps } from "@/interfaces";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: ReactComponentProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
