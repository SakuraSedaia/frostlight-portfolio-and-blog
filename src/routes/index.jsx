import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { getRouteMetadata } from "~/utils/route-metadata";

// import Components
import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";

// Import Sections
import IndexAboutUs from "~/sections/index/about.jsx";
import TheTeam from "~/sections/index/the-team.jsx";
import Discord from "~/sections/index/discord.jsx";
import OurProjects from "~/sections/index/our-projects.jsx";

export default function Home() {
	const route = getRouteMetadata("");
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>{route.page} - Frostlight Studios</Title>
			<Meta name="description" content={route.description} />
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"home"} credit={"Tundrabolt"} />
				<main class={"body-container content-container"}>
					<IndexAboutUs />
					<TheTeam />
					<Discord />
d				</main>
				<Footer />
			</Suspense>
		</ErrorBoundary>
	)
}