import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
// import Reduxprovider from "@/store/redux-provider";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fundara - A blockchain-based disaster refund sourcing platform deployed on the Arbitrum network.",
  description:
    "Fundara is a blockchain-based disaster refund sourcing platform deployed on the Arbitrum network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning={true}>
        {/* <Reduxprovider> */}
          {children}
        {/* </Reduxprovider> */}
      </body>
    </html>
  );
}
