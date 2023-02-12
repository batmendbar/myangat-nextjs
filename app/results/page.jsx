import clientPromise from "../../lib/mongodb";
import Link from "next/link";

async function getData() {
	const client = await clientPromise;
	const db = client.db("competition_results");
	const all = await db.collection("competitions").find({}).toArray();
	return JSON.parse(JSON.stringify(all));
}

function Competition(competition) {
	return (
		<div className="competition">
			<Link
				key={competition._id}
				href={`/results/${competition.competitionName}`}
			>
				{competition.competitionName}
			</Link>
		</div>
	);
}

export default async function ResultsPage() {
	let competitions = await getData();
	return (
		<main>
			<h2>Тэмцээнүүд</h2>
			{competitions.map((competition) => (
				<div>{Competition(competition)}</div>
			))}
		</main>
	);
}
