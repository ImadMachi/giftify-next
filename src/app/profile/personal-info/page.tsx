"use client";

import Image from "next/image";
import AvatarImage from "@/assets/images/avatar.jpg";
import { Edit } from "lucide-react";
import { useState } from "react";
import { PersonalInfoForm as Form } from "@/features/user";

export default function PersonalInfo() {
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<div className="p-10 h-full w-full">
			<div className="text-right">
				<label className="relative inline-flex items-center cursor-pointer">
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
			</div>
			<div className="flex flex-col-reverse lg:flex-row">
				<Form isReadOnly={isReadOnly} />
				<div className="basis-1/3">
					<div className="p-10 relative">
						<Image src={AvatarImage || "default-profile-image-url"} alt="Profile" className="w-full rounded-full" />
						<label htmlFor="profile-image">
							<Edit className="w-6 h-6 absolute bottom-10 right-10 cursor-pointer" />
						</label>
						<input type="file" id="profile-image" accept="image/*" onChange={() => {}} className="hidden" />
					</div>
				</div>
			</div>
		</div>
	);
}
