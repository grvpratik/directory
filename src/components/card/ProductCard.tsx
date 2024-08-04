import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightSVG } from "../Icons";

const ProductCard = ({ name = "placeholder name" }) => {
	return (
		<Link
			href="#"
			className="flex flex-col gap-1 p-2 rounded-lg overflow-hidden"
		>
			<div className="relative aspect-video rounded-lg overflow-hidden ">
				<Image src={"/images/test.jpg"} fill className="" alt="" />
			</div>
			<div className="flex justify-between items-center">
				{" "}
				<div className="  text-base font-inter ms-2">{name}</div>
				<div>
					<ArrowRightSVG className=" h-5 w-5" />
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
