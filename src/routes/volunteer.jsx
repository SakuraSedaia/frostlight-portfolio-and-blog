import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { getRouteMetadata } from "~/utils/route-metadata";

// Import Components
import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";

// Import Sections
import NotFinished from "~/sections/not-finished.jsx";

export default function Volunteer() {
	const route = getRouteMetadata("volunteer");
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>{route.page} - Frostlight Studios</Title>
			<Meta name="description" content={route.description} />
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"volunteer"} desc={"Volunteer to work with us!"} />
				<main class={"body-container"}>
					<NotFinished />
				</main>
				<Footer />
			</Suspense>
		</ErrorBoundary>
	)
}