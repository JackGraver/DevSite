import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center mt-10 space-y-8">
			{/* Container for Image and Text Side by Side */}
			<div className="flex flex-row items-start space-x-4">
				<Image
					src="/skrt.jpg" // Replace with your image path
					alt="Your image description"
					width={100} // Adjust the width as needed
					height={100} // Adjust the height as needed
				/>
				{/* Text Content */}
				<div>
					<h1 className="text-xl font-bold">Jack Graver</h1>
					<p className="text-base">Software Developer</p>
				</div>
			</div>

			{/* Flex container for Education and Experience/Technologies */}
			<div className="flex flex-row justify-center w-full space-x-8">
				{/* Education Section */}
				<div className="flex flex-col items-center">
					<h1 className="text-xl font-bold">Education</h1>
					<ul className="text-center">
						<li>
							<h2>SAIT (Graduated 2021)</h2>
							<p>Graduated with honours from Software Development Program</p>
						</li>
						<li>
							<h2>University of Calgary (2021-2025)</h2>
							<p>Currently studying towards BSc in Computer Science</p>
						</li>
						<li>
							<h2>High School (Graduated 2019)</h2>
							<p>French Immersion with B2 DELF Certification</p>
						</li>
					</ul>
				</div>

				{/* Experience/Technologies Section */}
				<div className="flex flex-col items-center">
					<h1 className="text-xl font-bold">Experience/Technologies</h1>
					<ul className="text-center">
						{/* Add progress/comfortability bars for this (can add for languages somewhere too)*/}
						<li>Java/C#, Python, Javascript/Typescript, SQL</li>
						<li>React, NextJS, Express, Tailwind</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="text-xl font-bold">Projects</h1>
				<ul className="text-center">
					<li>Database Class</li>
					<li>SENG Class</li>
				</ul>
			</div>
		</div>
	);
}
