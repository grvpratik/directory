import React from 'react'
import Sidebar from 'src/components/sidebar/Sidebar'
import { sidebarItems } from '../(landing)/page'
const CategoryPage = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
	return (
		<Sidebar items={sidebarItems} currentPath={params.id}>
			<div>CategoryPage</div>
		</Sidebar>
	);
};

export default CategoryPage