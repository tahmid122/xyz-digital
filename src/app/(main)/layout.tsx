import { ReactNode } from "react";
import { Footer } from "@/components/layouts/footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
