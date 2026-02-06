import {For} from "solid-js";

export default function TeamMemberCard(props) {
	const json = JSON.parse(props.data);
	return (
		<div class="team-card">
			<img src={json.image} class="portrait" alt={json.name} />
			<div class="about-member">
				<h3>{json.name}</h3>
				<p>{json.role}</p>
			</div>
			<div class="social">
				<For each={json.socials}>
					{(social) => (
						<a href={social.url} target="_blank">
							<img src={`/images/vectors/iconmonstr-${social.name.toLowerCase()}.svg`} class="social-icon" alt={social.name} />
						</a>
					)}
				</For>
			</div>
		</div>
	)
}
// {JSON.parse(props.data)}