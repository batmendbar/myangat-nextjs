import Link from "next/link";

export default function Home() {
	return (
		<main className="homepage">
			<h2>Мянгат - Монголын олимпиадын нэгдсэн сан. </h2>
			<div>
				Мэдээллийн залруулга болон өөрчлөлтийн талаар
				<Link href="mailto:batmend@gmail.com">
					batmend&#64;gmail.com
				</Link>
				руу мэйл илгээнэ үү.
			</div>
		</main>
	);
}
