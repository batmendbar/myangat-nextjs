import clientPromise from "../../../lib/mongodb";

async function getYears(competitionName) {
	const client = await clientPromise;
	const db = client.db("competition_results");
	const all = await db
		.collection("competitions")
		.find({
			competitionName: competitionName,
		})
		.toArray();
	return JSON.parse(JSON.stringify(all));
}

function CompetitionYear(instance) {
	let divisions = instance.divisions;

	divisions = divisions.sort(function (a, b) {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	return (
		<div>
			<div>{instance.year}</div>

			<div>
				{divisions.map((division) => (
					<span>{division}</span>
				))}
			</div>
		</div>
	);
}

export default async function CompetitionResult({ params }) {
	let competition = await getYears(decodeURI(params.competition));
	let instances = competition[0].instances;

	instances = instances.sort(function (a, b) {
		if (a.year < b.year) return -1;
		if (a.year > b.year) return 1;
		return 0;
	});

	return (
		<main>
			{instances.map((instance) => (
				<div>{CompetitionYear(instance)}</div>
			))}
		</main>
	);
}
