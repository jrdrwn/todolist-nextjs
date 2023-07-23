import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TodoList Next",
  description: "Created by Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-16 max-w-screen-xl mx-auto p-4 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
