"use client";

import TextInput from "@/components/ui/TextInput";
import Label from "./Label";
import Select from "@/components/ui/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "@/components/ErrorMessage";
import { countries } from "@/data/countries";
import SelectOption from "@/components/ui/SelectOption";
import type User from "../types/User";
import { useState } from "react";

const schema = yup.object().shape({
	first_name: yup.string(),
	last_name: yup.string(),
	email: yup.string(),
	phone_number: yup.string(),
	country: yup.string(),
	city: yup.string(),
	address: yup.string(),
	zip_code: yup.string(),
});

export default function PersonalInfoForm({ user, accessToken }: { user: User; accessToken?: string }) {
	const [isReadOnly, setIsReadOnly] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			phone_number: user.phone_number,
			country: user.country,
			city: user.city,
			address: user.address,
			zip_code: user.zip_code,
		},
	});

	const handleForm = async (data: yup.InferType<typeof schema>) => {
		try {
			const response = await fetch("http://127.0.0.1:8000/api/users/1", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleForm)} className="flex flex-col basis-2/3">
			<label className="relative inline-flex items-center cursor-pointer mb-4">
				<input
					type="checkbox"
					value=""
					className="sr-only peer"
					checked={!isReadOnly}
					onChange={(e) => {
						setIsReadOnly(!e.target.checked);
					}}
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
				<span className="ml-3 text-sm font-medium text-gray-900">Switch Edit</span>
			</label>
			<div className="flex mb-10 gap-2">
				<div className="basis-1/2">
					<div>
						<Label htmlFor="first_name">First Name</Label>
						<TextInput
							register={register("first_name")}
							id="first_name"
							placeholder="John"
							className="mt-2 w-full"
							readOnly={isReadOnly}
						/>
					</div>
					{errors.first_name && <ErrorMessage>First name is required.</ErrorMessage>}
				</div>
				<div className="basis-1/2">
					<div>
						<Label htmlFor="last_name">Last Name</Label>
						<TextInput
							register={register("last_name")}
							id="last_name"
							placeholder="Doe"
							className="mt-2 w-full"
							readOnly={isReadOnly}
						/>
					</div>
					{errors.last_name && <ErrorMessage>Last name is required.</ErrorMessage>}
				</div>
			</div>
			<div className="flex mb-10 gap-2">
				<div className="basis-1/2">
					<Label htmlFor="email">Email</Label>
					<TextInput
						register={register("email")}
						id="email"
						placeholder="john.doe@gmail.com"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
					{errors.email && <ErrorMessage>Email is required.</ErrorMessage>}
				</div>
				<div className="basis-1/2">
					<Label htmlFor="phone_number">Phone Number</Label>
					<TextInput
						register={register("phone_number")}
						id="phone_number"
						placeholder="+2126********"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
				</div>
			</div>

			<div className="flex mb-10 gap-2">
				<div className="basis-1/2 flex flex-col">
					<Label htmlFor="country">Country</Label>
					<Select className="mt-2" disabled={isReadOnly}>
						{countries.map((country) => (
							<SelectOption key={country.iso_code} value={country.iso_code}>
								{country.name}
							</SelectOption>
						))}
					</Select>
				</div>
				<div className="basis-1/2">
					<Label htmlFor="city">City</Label>
					<TextInput
						register={register("city")}
						id="city"
						placeholder="Enter city"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
				</div>
			</div>

			<div className="flex flex-col mb-10 gap-2">
				<Label htmlFor="address">Address</Label>
				<TextInput
					register={register("address")}
					id="address"
					placeholder="Enter your address"
					className="mt-2 w-full"
					readOnly={isReadOnly}
				/>
			</div>

			<div className="flex mb-10 gap-2">
				<div className="basis-1/2">
					<Label htmlFor="zip_code">Zip Code</Label>
					<TextInput
						register={register("zip_code")}
						id="zip_code"
						placeholder="Enter zip code"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
				</div>
			</div>
			<div>
				<input
					type="submit"
					value="Update Profile"
					className="bg-black text-white py-3 px-4 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={isReadOnly}
				/>
			</div>
		</form>
	);
}
