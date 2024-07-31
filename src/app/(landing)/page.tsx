import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";
import { BookDashed, Box, Inbox } from "lucide-react";
import Sidebar from "src/components/sidebar/Sidebar";


const ROOT_PATH = "/";

export const sidebarItems = [
	{
		href: "dashboard",
		label: "Dashboard",
		icon: <BookDashed />,
	},
	{
		href: "#",
		label: "Kanban",
		icon: <Box />,
		// badgeText: "Pro",
		// badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
	},
	{
		href: "#",
		label: "Inbox",
		icon: <Inbox />,
	},
	// Add more items as needed
];
const LandingPage = () => {
	return (
		<>
			<Sidebar items={sidebarItems} currentPath={ROOT_PATH}>
				<nav className="flex justify-between p-2">
					<Image
						src="images/icon.svg"
						height={40}
						width={40}
						className=""
						alt="Directory"
					/>
					<Button>submit request</Button>
				</nav>
				<div className="p-4  grid grid-cols-1  md:grid-cols-2 gap-4">
					<h1 className="md:p-12 font-heading text-5xl items-center flex justify-center ">
						Discover new saas for your business
					</h1>
					<div>
						<Image
							src="images/icon.svg"
							height={320}
							width={400}
							className=""
							alt="Directory"
						/>
					</div>
				</div>
			</Sidebar>
		</>
	);
};

export default LandingPage;
