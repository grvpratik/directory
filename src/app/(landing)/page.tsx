import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";
import { BookDashed, Box, Inbox, PlusIcon } from "lucide-react";
import Sidebar from "src/components/sidebar/Sidebar";
import ProductCard from "src/components/card/ProductCard";
import { sidebarItems } from "src/components/sidebar/SidebarList";


const ROOT_PATH = "/";



const LandingPage = () => {
	return (
		<>
			<Sidebar items={sidebarItems} currentPath={ROOT_PATH}>
				<nav className=" justify-between p-2 hidden md:flex">
					<Image
						src="images/icon.svg"
						height={40}
						width={40}
						className=""
						alt="Directory"
					/>
					<Button className=" rounded-full  flex gap-1  leading-relaxed  text-base">
						<PlusIcon className=" h-5 w-5" />
						<span>Submit</span>{" "}
					</Button>
				</nav>
				<div className="p-4  grid grid-cols-1  md:grid-cols-2 gap-4 md:mx-6 lg:mx-8 mx-4  my-4 ">
					<div className="md:p-12 items-center flex justify-center flex-col gap-4 lg:gap-6">
						<h1 className="font-heading text-4xl font-extrabold tracking-tight lg:text-5xl ">
							Discover new saas for your business
						</h1>{" "}
						<span className=" text-base text-muted-foreground ">
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
