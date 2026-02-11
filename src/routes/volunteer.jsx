import { Suspense, ErrorBoundary } from "solid-js";
import { Title } from "@solidjs/meta";

// Import Components
import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";

// Import Sections
import NotFinished from "~/sections/not-finished.jsx";

export default function Volunteer() {
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>Volunteer - Frostlight Studios</Title>
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