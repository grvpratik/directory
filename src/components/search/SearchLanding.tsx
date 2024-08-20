"use client";
import React from "react";
import { Button } from "../ui/button";
import { WandSparkles } from "lucide-react";

const SearchLanding = () => {
	const [loading, setLoading] = React.useState<boolean>(false);
	return (
		<>
			<form className="flex-1 w-full  relative overflow-hidden  min-w-sm p-2  flex  md:flex-row items-center justify-center border  rounded-full gap-2  focus-within:border-gray-300">
				<input
					className="ml-3 w-full h-full bg-transparent outline-none "
					placeholder="here something"
				/>

				<Button className="relative rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  transition-colors  flex  items-center justify-center gap-1 hover:animate-shimmer">
					{loading && (
						<div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
							<svg
								className="opacity animate-spin w-full h-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx={12}
									cy={12}
									r={10}
									stroke="currentColor"
									strokeWidth={4}
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
					)}
					<span className=" text-balance  font-heading">Search</span>{" "}
					<WandSparkles strokeWidth={3} className="h-4 w-4 p-0.5 " />
					
				</Button>
			</form>
		</>
	);
};

export default SearchLanding;
//inline-flex h-12 hover:animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
