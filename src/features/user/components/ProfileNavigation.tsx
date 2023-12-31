"use client";
import Icons from "@/components/Icons";
import ListItem from "./ProfileNavigationListItem";

export default function ProfileNavigation() {
	return (
		<div className="hidden md:block md:basis-1/3 lg:basis-1/4 xl:basis-1/5 py-10 px-10 border-e">
			<h1 className="text-2xl font-semibold">Your Profile</h1>
			<ul className="mt-6 text-gray-500">
				<ListItem href="/profile/personal-info" title="Personal Info">
					<Icons.User size={24} />
				</ListItem>
				<ListItem href="/profile/orders" title="Orders">
					<Icons.ShoppingCart size={24} />
				</ListItem>
				<ListItem href="#" title="Wishlist">
					<Icons.Heart size={24} />
				</ListItem>
				<ListItem href="#" title="Reviews">
					<Icons.Star size={24} />
				</ListItem>
				<ListItem href="#" title="Address">
					<Icons.LandPlot size={24} />
				</ListItem>
				<ListItem href="#" title="Payment Method">
					<Icons.CreditCard size={24} />
				</ListItem>
			</ul>
		</div>
	);
}
