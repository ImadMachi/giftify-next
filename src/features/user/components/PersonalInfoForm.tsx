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

const schema = yup
	.object()
	.shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
		phoneNumber: yup.string(),
		country: yup.string(),
		city: yup.string(),
		address: yup.string(),
		zipCode: yup.string(),
	})
	.required();

export default function PersonalInfoForm({ isReadOnly }: { isReadOnly: boolean }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col basis-2/3">
			<div className="flex mb-10 gap-2">
				<div className="basis-1/2">
					<div>
						<Label htmlFor="firstName">First Name</Label>
						<TextInput
							{...register("firstName")}
							id="firstName"
							placeholder="John"
							className="mt-2 w-full"
							readOnly={isReadOnly}
						/>
					</div>
					{errors.firstName && <ErrorMessage>First name is required.</ErrorMessage>}
				</div>
				<div className="basis-1/2">
					<div>
						<Label htmlFor="lastName">Last Name</Label>
						<TextInput
							{...register("lastName")}
							id="lastName"
							placeholder="Doe"
							className="mt-2 w-full"
							readOnly={isReadOnly}
						/>
					</div>
					{errors.firstName && <ErrorMessage>Last name is required.</ErrorMessage>}
				</div>
			</div>
			<div className="flex mb-10 gap-2">
				<div className="basis-1/2">
					<Label htmlFor="email">Email</Label>
					<TextInput
						{...register("email")}
						id="email"
						placeholder="john.doe@gmail.com"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
					{errors.firstName && <ErrorMessage>Email is required.</ErrorMessage>}
				</div>
				<div className="basis-1/2">
					<Label htmlFor="phoneNumber">Phone Number</Label>
					<TextInput
						{...register("phoneNumber")}
						id="phoneNumber"
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
					<Label htmlFor="phoneNumber">Phone Number</Label>
					<TextInput
						{...register("phoneNumber")}
						id="phoneNumber"
						placeholder="+2126********"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
				</div>
			</div>

			<div className="flex flex-col mb-10 gap-2">
				<Label htmlFor="address">Address</Label>
				<TextInput
					{...register("address")}
					id="address"
					placeholder="Enter your address"
					className="mt-2 w-full"
					readOnly={isReadOnly}
				/>
			</div>

			<div className="flex mb-10 gap-2">
				<div className="basis-1/2">
					<Label htmlFor="city">City</Label>
					<TextInput
						{...register("city")}
						id="city"
						placeholder="Enter city"
						className="mt-2 w-full"
						readOnly={isReadOnly}
					/>
				</div>
				<div className="basis-1/2">
					<Label htmlFor="zipCode">Zip Code</Label>
					<TextInput
						{...register("zipCode")}
						id="zipCode"
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
