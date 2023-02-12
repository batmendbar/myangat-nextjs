import clientPromise from "../../../../../lib/mongodb";
import ResultTable from "./resulttable";

async function getDivision(params) {
	let competitionName = decodeURI(params.competition);
	let year = decodeURI(params.year);
	let division = decodeURI(params.division);

	console.log(competitionName + " " + year + " " + division);
	const client = await clientPromise;
	const db = client.db("competition_results");
	const all = await db
		.collection("divisionresults")
		.find({
			competitionName: competitionName,
			year: year,
			division: division,
		})
		.toArray();
	return JSON.parse(JSON.stringify(all));
}

export default async function CompetitionResult({ params }) {
	let divsions = await getDivision(params);
	let division = divsions[0];
	return <div>{ResultTable(division)}</div>;
}
