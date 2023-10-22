import { EditProfileImage, PersonalInfoForm as Form } from "@/features/user";
import { getAccessToken } from "@auth0/nextjs-auth0";

async function getUser() {
	const res = await fetch("http://127.0.0.1:8000/api/users/1", {
		next: {
			tags: ["user"],
			revalidate: 10,
		},
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function PersonalInfo() {
	let accessToken: string | undefined;
	try {
		accessToken = (await getAccessToken()).accessToken;
	} catch (error) {
		console.log("No access token");
	}
	// const [isReadOnly, setIsReadOnly] = useState(true);
	const user = await getUser();
	return (
		<div className="p-10 h-full w-full">
			<div className="text-right"></div>
			<div className="flex flex-col-reverse lg:flex-row">
				<Form user={user} accessToken={accessToken} />
				<div className="basis-1/3">
					<EditProfileImage />
				</div>
			</div>
		</div>
	);
}
