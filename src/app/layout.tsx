import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "src/styles/globals.css";

import { ThemeProvider } from "src/providers/ThemeProvider";
import Sidebar from "src/components/sidebar/Sidebar";
import { boldSans } from "src/fonts/font";
import { cn } from "src/lib/utils";
import { BookDashed, Box, Inbox } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Directory",
	description: "all in one place for your apps",
};

const sidebarItems = [
	{
		href: "#",
		label: "Dashboard",
		icon: (
			<BookDashed/>
		),
	},
	{
		href: "#",
		label: "Kanban",
		icon: (
			<Box/>
		),
		badgeText: "Pro",
		badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
	},
	{
		href: "#",
		label: "Inbox",
		icon: (
			<Inbox/>
		),
	
	},
	// Add more items as needed
];

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
					<Sidebar items={sidebarItems}>{children}</Sidebar>
				</ThemeProvider>
			</body>
		</html>
	);
}
