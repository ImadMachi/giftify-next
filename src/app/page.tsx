"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import SearchInput from "@/components/SearchInput";
import ItemCard from "@/components/ProductsCard";
import Navbar2 from "@/components/NavBar2";
import { Product } from "./types/apps/Product";
import ProductsService from "./api/products";


export default function Home() {

	const { user, error, isLoading } = useUser();
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {

		async function getAllProducts() {
			try {
				const data: Product[] = await ProductsService.getAllProducts();
				setProducts(data);
			} catch (error) {
				console.error('Error:', error);
			}
		}
		getAllProducts();
		console.log(products);
	}, []);



	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return <><div className=" flex justify-center	 mt-10">
			<div className="w-2/3">
				<SearchInput />
			</div>
		</div>
			<div className="flex justify-center mt-10">
				<div className="">
					<Navbar2 />
				</div>
			</div>
			<div className="flex mt-20 justify-center flex-row-reverse space-x-4 space-x-reverse ... ">
				<div className="">
					<ItemCard products={products} />
				</div>

			</div>
		</>;
	}

	return (
		<><div className=" flex justify-center	 mt-10">
			<div className="w-2/3">
				<SearchInput />
			</div>
		</div>
			<div className="flex justify-center mt-10">
				<div className="">
					<Navbar2 />
				</div>
			</div>
			<div className="flex mt-20 justify-center flex-row-reverse space-x-4 space-x-reverse ... ">
				<div className="">
					<ItemCard products={products} />
				</div>

			</div>
		</>
	);
}