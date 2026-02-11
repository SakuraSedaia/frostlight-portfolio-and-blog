import TeamMemberCard from "~/components/team-member-card.jsx";
import teamMembers from "~/jsondata/teamMembers.json";
import {For} from "solid-js";
export default function TheTeam() {
	return (
		<section class={"our-team"}>
			<h2>The Team</h2>
			<div class={"h-divide"}></div>

			<div class={"hierarchy"}>
				<h3>Leadership</h3>
				<div class={"leaders"}>
					<For each={teamMembers.leadership}>
						{(member) => <TeamMemberCard data={JSON.stringify(member)} />}
					</For>
				</div>

				<div class={"h-divide"}></div>

				<h3>Members</h3>
				<div class={"leaders"}>
					<For each={teamMembers.members}>
						{(member) => <TeamMemberCard data={JSON.stringify(member)} />}
					</For>
				</div>
			</div>
		</section>
	)
}