import Link from "next/link";

import clientPromise from "../../../lib/mongodb";

async function getYears(competitionName, params) {
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

function CompetitionYear(instance, params) {
	let divisions = instance.divisions;

	divisions = divisions.sort(function (a, b) {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	return (
		<div className="competition-year">
			<div>{`${instance.year} оны ангиллууд:`}</div>

			<div className="division-list">
				{divisions.map((division) => (
					<span>
						<Link
							className="division"
							href={`/results/${params.competition}/${instance.year}/${division}`}
						>
							{division
								.replace("-р анги", "")
								.replace("шилжилт", "ш")
								.replace("Шилжилт", "ш")}
						</Link>
					</span>
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
			<h2>{decodeURI(params.competition)}</h2>
			{instances.map((instance) => (
				<div>{CompetitionYear(instance, params)}</div>
			))}
		</main>
	);
}
