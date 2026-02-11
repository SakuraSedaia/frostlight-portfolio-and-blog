import SocialIcon from "~/components/social-icon.jsx";
import {createSignal, onMount} from "solid-js";

function Footer() {
	const [year, setYear] = createSignal(new Date().getFullYear());
	
	onMount(() => {
		setYear(new Date().getFullYear());
	});
	
	return (
		<footer>
			<h2>Socials</h2>
			<nav class={"socials"}>
				<ul>
					<li>
						<a href={"https://discord.gg/jZwXTpqZmF"} class={"link"} target={"_blank"}
						   rel={"noopener noreferrer"}>
							<SocialIcon name={"discord"}/> Discord
						</a>
					</li>
					<li>
						<a href={"https://youtube.com/@frostlightstudios1081"} class={"link"} target={"_blank"} rel={"noopener noreferrer"}>
							<SocialIcon name={"youtube"}/> Youtube
						</a>
					</li>
				</ul>
			</nav>
			<p class={"copyright"}>&copy; {year()} <a href={"https://frostlight-studios.org"} target={"_blank"}
			                               rel={"noopener noreferrer"} class={"link"}>Frostlight Studios</a>. All Rights Reserved.</p>
		</footer>
	);
}

export default Footer;
