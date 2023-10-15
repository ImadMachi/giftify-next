"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileNavigationListItem({
	href,
	title,
	children,
}: {
	href: string;
	title: string;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<li className="mb-10 hover:text-gray-950">
			<Link href={href} className={`flex ${pathname == href && "text-black"}`}>
				{children} <span className="ml-2">{title}</span>
			</Link>
		</li>
	);
}
