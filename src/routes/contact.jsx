import Header from "~/components/Header.jsx";
import Footer from "~/components/Footer.jsx";
import NotFinished from "~/components/NotFinished.jsx";

export default function Contact() {
	return (
		<>
			<Header img={"contact"} />
			<main class="body-container">
				<NotFinished />
			</main>
			<Footer />
		</>
	)
}