"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { MenuIcon } from "lucide-react";
import { cn } from "src/lib/utils";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "src/components/ui/sheet";

import useClickOutside from "src/hooks/useClickOutside";
interface SidebarItem {
	href: string;
	label: string;
	icon: React.ReactNode;
	badgeText?: string;
	badgeColor?: string;
}

interface SidebarProps {
	children: React.ReactNode;
	items: SidebarItem[];
	currentPath: string; // Add currentPath as a prop
}

const Sidebar: React.FC<SidebarProps> = ({ children, items, currentPath }) => {
	return (
		<main>
			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
				aria-label="Sidebar"
			>
				<ScrollArea className="h-full px-3 py-4 ">
					<a href="#" className="flex items-center gap-2">
						<Image
							src="/images/icon.svg" // Updated path to start with '/'
							height={40}
							width={40}
							alt="Directory"
						/>
						<span className="self-center text-xl font-semibold font-heading whitespace-nowrap">
							Directory
						</span>
					</a>
					<div className="space-y-2 text-sm px-1 my-3">All categories</div>
					<ul className="space-y-1 font-medium">
						{items.map((item, index) => {
							const isActive = currentPath === item.href; // Determine if the item is active
							return (
								<li key={index}>
									<Link
										href={item.href}
										className={`flex items-center p-1.5  rounded-lg hover:bg-muted  duration-150 transition ${
											isActive ? "bg-muted " : ""
										}`}
									>
										{item.icon}
										<span className="ms-3  text-sm">{item.label}</span>
										{/* {item.badgeText && (
											<span
												className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium ${
													item.badgeColor ? item.badgeColor : "bg-gray-100"
												} rounded-full`}
											>
												{item.badgeText}
											</span>
										)} */}
									</Link>
								</li>
							);
						})}
					</ul>
				</ScrollArea>
			</aside>
			<div className="md:ml-64 flex flex-col gap-4">
				<nav className="flex md:hidden px-4 py-3">
					<Sheet >
						<SheetTrigger >
							<MenuIcon className=" cursor-pointer" />
						</SheetTrigger>
						<SheetContent side="left" >
							<SheetHeader>
								<SheetTitle>
									<a href="#" className="flex items-center gap-2">
										<Image
											src="/images/icon.svg" // Updated path to start with '/'
											height={40}
											width={40}
											alt="Directory"
										/>
										<span className="self-center text-xl font-semibold font-heading whitespace-nowrap">
											Directory
										</span>
									</a>
								</SheetTitle>
								<SheetDescription>
									<ScrollArea className="h-full px-3 py-4 ">
										<div className="space-y-2 text-sm px-1 my-3">
											All categories
										</div>
										<ul className="space-y-1 font-medium">
											{items.map((item, index) => {
												const isActive = currentPath === item.href; // Determine if the item is active
												return (
													<li key={index}>
														<Link
															href={item.href}
															className={`flex items-center p-1.5  rounded-lg hover:bg-muted  duration-150 transition ${
																isActive ? "bg-muted " : ""
															}`}
														>
															{item.icon}
															<span className="ms-3  text-sm">
																{item.label}
															</span>
															{/* {item.badgeText && (
											<span
												className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium ${
													item.badgeColor ? item.badgeColor : "bg-gray-100"
												} rounded-full`}
											>
												{item.badgeText}
											</span>
										)} */}
														</Link>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</SheetDescription>
							</SheetHeader>
							<ScrollArea className="h-full px-3 py-4 ">
								<div className="space-y-2 text-sm px-1 my-3">
									All categories
								</div>
								<ul className="space-y-1 font-medium">
									{items.map((item, index) => {
										const isActive = currentPath === item.href; // Determine if the item is active
										return (
											<li key={index}>
												<Link
													href={item.href}
													className={`flex items-center p-1.5  rounded-lg hover:bg-muted  duration-150 transition ${
														isActive ? "bg-muted " : ""
													}`}
												>
													{item.icon}
													<span className="ms-3  text-sm">{item.label}</span>
													{/* {item.badgeText && (
											<span
												className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium ${
													item.badgeColor ? item.badgeColor : "bg-gray-100"
												} rounded-full`}
											>
												{item.badgeText}
											</span>
										)} */}
												</Link>
											</li>
										);
									})}
								</ul>
							</ScrollArea>
						</SheetContent>
					</Sheet>
				</nav>
				{children}
			</div>
		</main>
	);
};

export default Sidebar;
