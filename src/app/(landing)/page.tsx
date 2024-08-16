import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";
import { BookDashed, Box, ImageIcon, Inbox, PlusIcon, SearchIcon, ShareIcon } from "lucide-react";
import Sidebar from "src/components/sidebar/Sidebar";
import ProductCard from "src/components/card/ProductCard";
import { sidebarItems } from "src/components/sidebar/SidebarList";
import { Input } from "src/components/ui/input";
import SearchLanding from "src/components/search/SearchLanding";


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
						<PlusIcon className=" h-4 w-4" />
						<span className=" text-base font-normal ">Submit</span>{" "}
					</Button>
				</nav>
				<div className="p-4  grid grid-cols-1  gap-2 md:mx-6 lg:mx-8 mx-4  my-3 ">
					<div className="md:p-12 items-center flex justify-center flex-col gap-2 ">
						<h1 className="font-heading text-4xl font-extrabold tracking-tight lg:text-5xl ">
							Find the perfect tool for your need
						</h1>{" "}
						{/* <span className=" text-base text-muted-foreground text-balance  ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
							eligendi quam numquam voluptatibus libero. Perferendis, soluta ex
						</span> */}
						
					
								<SearchLanding/>
					
					</div>
					{/* <div>
						<ProductCard />
					</div> */}
				</div>
				<div>
					<div>latest release </div>
					<div>top categoryes</div>
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
