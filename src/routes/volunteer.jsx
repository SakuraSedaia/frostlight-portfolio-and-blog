import { Suspense, ErrorBoundary } from "solid-js";
import { Title } from "@solidjs/meta";
import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

export default function Volunteer() {
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>Volunteer - Frostlight Studios</Title>
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"volunteer"} desc={"Volunteer to work with us!"} />
				<main class="body-container">
					<NotFinished />
				</main>
				<Footer />
			</Suspense>
		</ErrorBoundary>
	)
}