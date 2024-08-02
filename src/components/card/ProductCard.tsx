import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
	return (
		<Link href="#" className="flex flex-col gap-1 p-2 rounded-lg overflow-hidden">
			<div className="relative aspect-video rounded-lg overflow-hidden ">
				<Image src={"images/icon.svg"} fill className="" alt="" />
			</div>
			<div>name</div>
		</Link>
	);
};

export default ProductCard;
