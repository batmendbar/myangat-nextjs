let hall_of_famers = [
	{
		name: "Unubold Munkhbat",
	},
	{
		name: "Misheel Otgonbayar",
	},
	{
		name: "Nyamdavaa Amar",
	},
];

export default function HallofFame() {
	return (
		<main>
			<ul>
				{hall_of_famers.map((halloffamer) => (
					<li>{halloffamer.name}</li>
				))}
			</ul>
		</main>
	);
}
