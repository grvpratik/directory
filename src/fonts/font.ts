import localFont from "next/font/local";
import { Inter } from "next/font/google";
export const boldSans = localFont({
	src: "./CabinetGrotesk-Bold.woff",
	variable: "--font-bold",
	
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
