import Nav from "~/components/Nav.jsx";
import {Show } from "solid-js";

export default function Header(props) {
	const bgImg = "background-image: url(/images/headers/" + props.img + ".jpg";
	
	let page_title = props.page_title;
	if (page_title === undefined) {
		page_title = "Frostlight Studios";
	}
	
	return (
		<header style={bgImg}>
			{/* Navigation Content */}
			<Nav title={page_title} />
			
			{/* Header Content */}
			<header-box>
				<img-credit>Image by <i>Tundrabolt</i></img-credit>
				<header-content>
					<header-text>
						<h1>{page_title}</h1>
						<Show when={props.desc !== undefined}>
							<p>{props.desc}</p>
						</Show>
					</header-text>
				</header-content>
			</header-box>
		</header>
	);
}
