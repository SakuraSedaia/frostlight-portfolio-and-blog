import { Suspense, ErrorBoundary } from "solid-js";
import { Title } from "@solidjs/meta";
import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

export default function Beginnings() {
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>Beginnings - Frostlight Studios</Title>
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