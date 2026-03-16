import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import { getRouteMetadata } from "~/utils/route-metadata";
import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import NotFinished from "~/sections/not-finished.jsx";

export default function Beginnings() {
	const route = getRouteMetadata("project/beginnings");
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>{route.page} - Frostlight Studios</Title>
			<Meta name="description" content={route.description} />
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"beginnings"} desc={"A Dark Fantasy story"}/>
				<main class="body-container">
					<NotFinished />
				</main>
				<Footer />
			</Suspense>
		</ErrorBoundary>
	)
}