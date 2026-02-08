import { Suspense, ErrorBoundary } from "solid-js";
import { Title } from "@solidjs/meta";
import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import IndexAboutUs from "~/sections/index/about.jsx";
import TheTeam from "~/sections/index/the-team.jsx";
import Discord from "~/sections/index/discord.jsx";

export default function Home() {
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>Home - Frostlight Studios</Title>
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"home"} />
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