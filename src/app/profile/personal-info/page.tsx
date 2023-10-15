"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/features/user";
import ErrorMessage from "@/components/ErrorMessage";
import TextInput from "@/components/ui/TextInput";
import Select from "@/components/ui/Select";
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
	})
	.required();

export default function PersonalInfo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<div className="p-10 h-full w-full strech">
			<div className="h-full">
				<form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col max-w-screen-sm">
					<div className="flex mb-10 gap-2">
						<div className="basis-1/2">
							<div>
								<Label htmlFor="firstName">First Name</Label>
								<TextInput {...register("firstName")} id="firstName" placeholder="John" className="mt-2 w-full" />
							</div>
							{errors.firstName && <ErrorMessage>First name is required.</ErrorMessage>}
						</div>
						<div className="basis-1/2">
							<div>
								<Label htmlFor="lastName">Last Name</Label>
								<TextInput {...register("lastName")} id="lastName" placeholder="Doe" className="mt-2 w-full" />
							</div>
							{errors.firstName && <ErrorMessage>Last name is required.</ErrorMessage>}
						</div>
					</div>
					<div className="flex mb-10 gap-2">
						<div className="basis-1/2">
							<Label htmlFor="email">Email</Label>
							<TextInput {...register("email")} id="email" placeholder="john.doe@gmail.com" className="mt-2 w-full" />
							{errors.firstName && <ErrorMessage>Email is required.</ErrorMessage>}
						</div>
						<div className="basis-1/2">
							<Label htmlFor="phoneNumber">Phone Number</Label>
							<TextInput
								{...register("phoneNumber")}
								id="phoneNumber"
								placeholder="+2126********"
								className="mt-2 w-full"
							/>
						</div>
					</div>

					<div className="flex mb-10 gap-2">
						<div className="basis-1/2 flex flex-col">
							<Label htmlFor="country">Country</Label>
							<Select className="mt-2">
								<SelectOption>Choose a country</SelectOption>
								<SelectOption value="US">United States</SelectOption>
								<SelectOption value="CA">Canada</SelectOption>
								<SelectOption value="FR">France</SelectOption>
							</Select>
							{errors.firstName && <ErrorMessage>Email is required.</ErrorMessage>}
						</div>
						<div className="basis-1/2">
							<Label htmlFor="phoneNumber">Phone Number</Label>
							<TextInput
								{...register("phoneNumber")}
								id="phoneNumber"
								placeholder="+2126********"
								className="mt-2 w-full"
							/>
						</div>
					</div>

					<input type="submit" />
				</form>
			</div>
		</div>
	);
}
