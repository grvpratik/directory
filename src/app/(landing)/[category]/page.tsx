import React from "react";
import Sidebar from "src/components/sidebar/Sidebar";
import { sidebarItems } from "src/components/sidebar/SidebarList";
const CategoryPage = ({ params }: { params: { category: string } }) => {
	console.log(params.category);
	return (
		<Sidebar items={sidebarItems} currentPath={params.category}>
			<div>CategoryPage</div>
		</Sidebar>
	);
};

export default CategoryPage;
