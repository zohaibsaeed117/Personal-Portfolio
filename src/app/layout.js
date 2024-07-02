import { Inter, Roboto, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'


const roboto = Roboto({
  subsets: ['latin']
  , weight: ['100', "300", "400", "500", "700", "900"],
  display: 'swap',
  variable: '--font-roboto',

})
const lato = Lato({
  subsets: ['latin']
  , weight: ['100', "300", "400", "700"],
  display: 'swap',
  variable: '--font-lato',

})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
export const metadata = {
  title: "Zohaib Saeed",
  description: "Portfolio website for Zohaib Saeed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
