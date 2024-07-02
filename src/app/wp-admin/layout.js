import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Zohaib Saeed",
    description: "Portfolio website for Zohaib Saeed",
};

export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
