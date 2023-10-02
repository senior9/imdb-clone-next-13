import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import DarkModeProvider from "./DarkModeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb-clone",
  description: "rhis was just learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <Header />

          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
