import { Suspense, ErrorBoundary } from "solid-js";
import { Title } from "@solidjs/meta";

// import Components
import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";

// Import Sections
import NotFinished from "~/sections/not-finished.jsx";

export default function Contact() {
	return (
		<ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
			<Title>Contact - Frostlight Studios</Title>
			<Suspense fallback={<div>Loading...</div>}>
				<Header img={"contact"} />
				<main class="body-container">
					<NotFinished />
				</main>
				<Footer />
			</Suspense>
		</ErrorBoundary>
	)
}