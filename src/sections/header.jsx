import Nav from "~/components/nav.jsx";
import {Show} from "solid-js";

export default function Header(props) {
	const bgImg = "background-image: url(/images/headers/" + props.img + ".jpg";

	let page_title = props.title;
	if (page_title === undefined) {
		page_title = "Frostlight Studios";
	}
	
	return (
		<header style={bgImg}>
			{/* Navigation Content */}
			<Nav title={page_title} />
			
			{/* Header Content */}
			<div class="header-box">
				<Show when={props.credit !== undefined}>
					<p class="img-credit">Image by <i>{props.credit}</i></p>
				</Show>
				<div class="header-content">
					<div class="header-text">
						<h1>{page_title}</h1>
						<Show when={props.desc !== undefined}>
							<p>{props.desc}</p>
						</Show>
					</div>
				</div>
			</div>
		</header>
	);
}
