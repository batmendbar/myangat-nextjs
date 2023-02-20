function ScoreHeader(prefix, score) {
	return (
		<th className="score_cell">
			{prefix}
			{score}
		</th>
	);
}

function ScoreCell(score) {
	return <td>{score}</td>;
}

function Performance(performance) {
	return (
		<tr>
			<td>{performance.rank}</td>
			<td>{performance.name}</td>
			<td className="school-name">{performance.school}</td>
			<td>{performance.division}</td>
			<td>{performance.region}</td>
			{performance.dayOneScores.map((score) => ScoreCell(score))}
			{performance.dayTwoScores.map((score) => ScoreCell(score))}

			{"challengeScores" in performance &&
				performance.challengeScores.map((score) => ScoreCell(score))}
			{"experimentScores" in performance &&
				performance.experimentScores.map((score) => ScoreCell(score))}
			<td>{performance.totalScore}</td>
			<td>{performance.award}</td>
		</tr>
	);
}

export default function ResultTable(results) {
	return (
		<div>
			<div className="content flex-container-vertical big-content">
				<table className="centered-item">
					<thead>
						<tr>
							<th>Байр</th>
							<th>Нэр</th>
							<th className="school-name">Сургууль</th>
							<th>Анги</th>
							<th>Бүс</th>
							{[...Array(results.dayOneProblemCount).keys()].map(
								(i) => ScoreHeader("A", i + 1)
							)}
							{[...Array(results.dayTwoProblemCount).keys()].map(
								(i) => ScoreHeader("B", i + 1)
							)}
							{"challengeProblemCount" in results &&
								[
									...Array(
										results.challengeProblemCount
									).keys(),
								].map((i) => ScoreHeader("С", i + 1))}
							{"experimentProblemCount" in results &&
								[
									...Array(
										results.experimentProblemCount
									).keys(),
								].map((i) => ScoreHeader("Т", i + 1))}
							<th>Нийт</th>
							<th>Шагнал</th>
						</tr>
					</thead>
					<tbody>
						{results.performances.map((performance) =>
							Performance(performance)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
