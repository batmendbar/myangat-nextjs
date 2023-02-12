export default function CompetitionResult({ params }) {
	return <main>{decodeURI(params.competition)}</main>;
}
