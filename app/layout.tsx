import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const sfPro = localFont({
  src: [
    {
    path: './fonts/SFPRODISPLAYREGULAR.woff2',
    weight: '400',
    style: 'normal',
    },

  {
    path: './fonts/SFPRODISPLAYMEDIUM.woff2',
    weight: '500',
    style: 'normal',
  },

  {
    path: './fonts/SFPRODISPLAYBOLD.woff2',
    weight: '700',
    style: 'normal',
  }
  ],
  variable: '--font-sf-pro',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins'
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${sfPro.variable} ${poppins.variable}`}>
      <body className="sfPro">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
