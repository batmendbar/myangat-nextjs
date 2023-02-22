import clientPromise from "../../../../../lib/mongodb";
import ResultTable from "./resulttable";

async function getDivision(params) {
	let competitionName = decodeURI(params.competition);
	let year = decodeURI(params.year);
	let division = decodeURI(params.division);

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
	let divisions = await getDivision(params);
	if (divisions.length != 0) {
		let division = divisions[0];
		return (
			<main className="result-table">
				<h3 className="centered-item">
					<span>
						{`${division.competitionName} 
					${division.year}: ${division.division}`}
					</span>
				</h3>
				{ResultTable(division)}
			</main>
		);
	} else {
		return <main>Not found</main>;
	}
}
