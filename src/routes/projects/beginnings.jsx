import Header from "~/components/Header.jsx";
import Footer from "~/components/Footer.jsx";
import NotFinished from "~/components/NotFinished.jsx";

export default function Beginnings() {
	return (
		<>
			<Header img={"beginnings"} desc={"A Dark Fantasy story"}/>
			<main class="body-container">
				<NotFinished />
			</main>
			<Footer />
		</>
	)
}