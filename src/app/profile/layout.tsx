import { ProfileNavigation } from "@/features/user";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile Page",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="max-w-screen-xl mx-auto mt-6 px-4">
			<div className="flex border border-gray-200 rounded-md items-stretch">
				<ProfileNavigation />
				{children}
			</div>
		</div>
	);
}
