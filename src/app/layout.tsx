import { ThemeProvider } from "@/components/theme/theme-context";
import "./globals.scss";
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['400', '300', '700', '900'],
  variable: "--font-lato",
  subsets: ['latin'],
})


interface Metadata {
  title: string;
  description: string;
  author: string;
  image: string;
}

export const metadata: Metadata = {
  title:
    "ZIMOJI® | Coming Soon. Real Estate | Yachts | Jets | Cars | Private Islands | Watches | Diamonds.",
  description: "Cars | Private Islands | Watches | Diamonds. ZIMO GROUP® is a British multinational technology conglomerate based in London, England, United Kingdom.",
  author: "ZIMOGROUP | ZIMJI",
  image: "/assets/ZIMOJI B.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${lato.className} `}
      >

        {children}
    
      </body>
    </html>
  );
}
