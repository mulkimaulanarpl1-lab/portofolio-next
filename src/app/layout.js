import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mulki Maulana Tegar | Portofolio",
  description: "Portofolio Mulki Maulana Tegar, Siswa SMK Junior Web Developer di kelas industri UBIG",
};

//di dalam return, pada tag <html>
export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">{children}</body>
    </html>
  );
}
