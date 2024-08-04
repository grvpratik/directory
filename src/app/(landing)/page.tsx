import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";
import { BookDashed, Box, Inbox } from "lucide-react";
import Sidebar from "src/components/sidebar/Sidebar";
import ProductCard from "src/components/card/ProductCard";


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
			<Sidebar items={sidebarItems} currentPath={ROOT_PATH} >
				<nav className="flex justify-between p-2">
					<Image
						src="images/icon.svg"
						height={40}
						width={40}
						className=""
						alt="Directory"
					/>
					<Button className=" rounded-full leading-relaxed ">Submit </Button>
				</nav>
				<div className="p-4  grid grid-cols-1  md:grid-cols-2 gap-4 md:mx-6 lg:mx-8 mx-4 ">
					<div className="md:p-12 items-center flex justify-center flex-col gap-4 lg:gap-6">
						<h1 className="font-heading text-4xl font-extrabold tracking-tight lg:text-5xl ">
							Discover new saas for your business
						</h1>{" "}
						<span className=" text-base text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
							eligendi quam numquam voluptatibus libero. Perferendis, soluta ex
						</span>
					</div>
					<div>
						<ProductCard />
					</div>
				</div>
				<main className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-6 md:mx-6 lg:mx-8 mx-4">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</main>
			</Sidebar>
		</>
	);
};

export default LandingPage;
