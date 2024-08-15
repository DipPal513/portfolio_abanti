import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Cormorant_Garamond, Monoton, Syne } from 'next/font/google'
import "./globals.css";

export const monoton = Monoton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: "--font-monoton"
});
export const syne = Syne({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: "--font-syne"
});
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: "--font-cormorant"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
