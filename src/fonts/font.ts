import localFont from "next/font/local";
import { Inter } from "next/font/google";
export const boldSans = localFont({
	src: "./MonaSans-Bold.woff2",
	variable: "--font-bold",
	weight: "800",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
