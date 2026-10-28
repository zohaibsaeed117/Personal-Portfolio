import { Inter, Roboto, Lato } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
})
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
})
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
export const metadata = {
  title: "Zohaib Saeed – Mobile App Developer",
  description: "Portfolio of Zohaib Saeed, Associate Mobile App Developer at Codev building React Native apps and the APIs behind them.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
