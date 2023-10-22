"use client";

import { Edit } from "lucide-react";
import Image from "next/image";
import AvatarImage from "@/assets/images/avatar.jpg";

export default function EditProfileImage() {
	return (
		<div className="p-10 relative">
			<Image src={AvatarImage || "default-profile-image-url"} alt="Profile" className="w-full rounded-full" />
			<label htmlFor="profile-image">
				<Edit className="w-6 h-6 absolute bottom-10 right-10 cursor-pointer" />
			</label>
			<input type="file" id="profile-image" accept="image/*" onChange={() => {}} className="hidden" />
		</div>
	);
}
