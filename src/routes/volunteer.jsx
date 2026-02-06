import Header from "~/components/Header.jsx";
import Footer from "~/components/Footer.jsx";
import NotFinished from "~/components/NotFinished.jsx";

export default function Volunteer() {
	return (
		<>
			<Header img={"volunteer"} desc={"Volunteer to work with us!"} />
			<main class="body-container">
				<NotFinished />
			</main>
			<Footer />
		</>
	)
}