"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "./Icons";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { getAccessToken } from "@auth0/nextjs-auth0";

export default function Navbar() {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const { user, error, isLoading } = useUser();

	return (
		<nav className="bg-white border-gray-100 border-b-2">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/" className="flex items-center">
					<span className="self-center text-5xl tracking-wider font-semibold whitespace-nowrap w-4 text-cyan-600">
						Giftify
					</span>
				</Link>
				<MenuButton isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
				<div className={`${isCollapsed && "hidden"} w-full md:block md:w-auto`} id="navbar-dropdown">
					<ul className="flex justify-around font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
						<UserDropdown user={user} />
						<MenuItem href="#">
							<div className="flex md:flex-col items-center">
								<Icons.Heart className="text-red-600 rotate-0 scale-100 transition-all" />
								<span className="text-xs underline">wish list</span>
							</div>
						</MenuItem>
						<MenuItem href="#">
							<div className="flex md:flex-col items-center">
								<Icons.Gift className="text-orange-600 rotate-0 scale-100 transition-all" />
								<span className="text-xs underline">gift finder</span>
							</div>
						</MenuItem>
						<MenuItem href="#">
							<div className="flex md:flex-col items-center">
								<Icons.ShoppingCart className="text-blue-600 rotate-0 scale-100 transition-all" />
								<span className="text-xs underline">cart</span>
							</div>
						</MenuItem>
					</ul>
				</div>
			</div>
		</nav>
	);
}

function UserDropdown({ user }: { user?: UserProfile }) {
	const [isCollapsed, setIsCollapsed] = useState(true);

	if (!user) {
		return (
			<Link href="/api/auth/login">
				<div className="flex md:flex-col items-center">
					<Icons.User className="text-cyan-600 rotate-0 scale-100 transition-all" />
					<span className="text-xs underline">sign in</span>
				</div>
			</Link>
		);
	}
	return (
		<li>
			<button
				onClick={() => setIsCollapsed(!isCollapsed)}
				id="dropdownNavbarLink"
				data-dropdown-toggle="dropdownNavbar"
				className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
			>
				<div className="flex md:flex-col items-center">
					<Icons.User className="text-cyan-600 rotate-0 scale-100 transition-all" />
					<span className="text-xs underline">{"Hi, " + user.name?.split(" ")[0]}</span>
				</div>
				<svg
					className="w-2.5 h-2.5 ml-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
				</svg>
			</button>
			<div
				id="dropdownNavbar"
				className={`z-10 ${
					isCollapsed && "hidden"
				} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
			>
				<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
					<li>
						<Link href="/profile/personal-info" className="block px-4 py-2 hover:bg-gray-100">
							Profile
						</Link>
					</li>
				</ul>
				<div className="py-1">
					<Link href="/api/auth/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
						Sign out
					</Link>
				</div>
			</div>
		</li>
	);
}

function MenuButton({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: Function }) {
	return (
		<button
			onClick={() => setIsCollapsed(!isCollapsed)}
			data-collapse-toggle="navbar-dropdown"
			type="button"
			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-2000"
			aria-controls="navbar-dropdown"
			aria-expanded="false"
		>
			<span className="sr-only">Open main menu</span>
			<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
	);
}

function MenuItem({ href, children }: { href: string; children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<li>
			<Link
				href={href}
				className={cn(
					"block rounded py-2 pl-3 pr-4 transition-colors md:border-0 md:p-0 md:hover:bg-transparent"
					// pathname == href && " text-cyan-600"
				)}
				aria-current="page"
			>
				{children}
			</Link>
		</li>
	);
}
