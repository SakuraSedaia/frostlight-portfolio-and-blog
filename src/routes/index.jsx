import { Suspense, ErrorBoundary } from "solid-js";
import { Title } from "@solidjs/meta";

// import Components
import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";

// Import Sections
import IndexAboutUs from "~/sections/index/about.jsx";
import TheTeam from "~/sections/index/the-team.jsx";
import Discord from "~/sections/index/discord.jsx";
import OurProjects from "~/sections/index/our-projects.jsx";

export default function Home() {
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>Home - Frostlight Studios</Title>
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"home"} credit={"Tundrabolt"} />
				<main class="body-container">
					<IndexAboutUs />
					<TheTeam />
					<Discord />
				</main>
				<Footer />
			</Suspense>
		</ErrorBoundary>
	)
}