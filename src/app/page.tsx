import { getAccessToken } from "@auth0/nextjs-auth0";

export default async function Home() {
	try {
		const accessToken = await getAccessToken();
		console.log(accessToken);
	} catch (error) {
		console.log("No access token");
	}
	return <div>Welcome</div>;
}
