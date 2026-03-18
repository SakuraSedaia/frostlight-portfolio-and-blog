export default function IndexAboutUs() {
	return (
		<section id={"about"}>
			<div class={"column-container"}>
				<div class={"about-text column"}>
					{/*
				TODO: Need to add CSS to automatically adjust the layout to smaller screens.
				*/}
					<h2>About Us</h2>
					<p>We are a small team of passionate artists from around the world, united by our love for Minecraft and our
						commitment to creating high-quality content.</p>
					
					<p>We have multiple projects, and while we may not be the fastest at delivering we make sure to put our heart
						and soul into every single project we undertake.</p>
				</div>
				<div class={"column"}>
					<img src={"/images/FrostlightMountainSnow-TeamPhoto.jpg"} alt={"Team Photo"}/>
				</div>
			</div>
		</section>
	)
}