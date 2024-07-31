
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "src/styles/globals.css";

import { ThemeProvider } from "src/providers/ThemeProvider";
import Sidebar from "src/components/sidebar/Sidebar";
import { boldSans } from "src/fonts/font";
import { cn } from "src/lib/utils";



const inter = Inter({ subsets: ["latin"] });
  
export const metadata: Metadata = {
	title: "Directory",
	description: "all in one place for your apps",
};



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					" font-mono",
					boldSans.variable,
				)}
			>
				{" "}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
