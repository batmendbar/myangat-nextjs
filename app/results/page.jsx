import clientPromise from "../../lib/mongodb";

async function getData() {
	const client = await clientPromise;
	const db = client.db("competition_results");
	const all = await db.collection("competitions").find({}).toArray();
	return JSON.parse(JSON.stringify(all));
}

export default async function ResultsPage() {
	let competitions = await getData();
	return (
		<main>
			<ul>
				{competitions.map((result) => (
					<li key={result._id}>{result.competitionName}</li>
				))}
			</ul>
		</main>
	);
}
