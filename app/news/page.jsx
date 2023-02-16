import Link from "next/link";

let news = [
	{
		date: "2023-02-16",
		title: '"Орчлон" Олон Улсын сургуулийн нэрэмжит математикийн олимпиад',
		body: '"Орчлон" Олон Улсын сургуулийн нэрэмжит математикийн олимпиад 2023 оны 2 сарын 25-ны өдөр зохион байгуулагдана. ',
		link: "https://sites.google.com/orchlon.edu.mn/burtgel/home",
	},
];

export default function News() {
	return (
		<main>
			<h2>Зарлал</h2>
			{news.map((post) => (
				<div className="post">
					<div className="date">{post.date}</div>
					<h3>{post.title}</h3>
					<div>{post.body}</div>
					<Link href={post.link}>{post.link}</Link>
				</div>
			))}
		</main>
	);
}
