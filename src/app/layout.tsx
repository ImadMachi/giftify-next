import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home Page",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<UserProvider>
			<html lang="en">
				<body className={inter.className}>
					<Navbar />
					{children}
				</body>
			</html>
		</UserProvider>
	);
}
