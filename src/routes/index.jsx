import Header from "~/components/Header.jsx";
import Footer from "~/components/Footer.jsx";
import IndexAboutUs from "~/components/index-sections/About.jsx";
import TheTeam from "~/components/index-sections/TheTeam.jsx";
import Discord from "~/components/index-sections/Discord.jsx";

export default function Home() {
	return (
		<>
			<Header img={"home"} />
			<main class="body-container">
				<IndexAboutUs />
				<TheTeam />
				<Discord />
			</main>
			<Footer />
		</>
	)
}