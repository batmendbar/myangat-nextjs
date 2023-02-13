import Link from "next/link";

export default function Home() {
	return (
		<main className="homepage">
			<div>Мянгат - Монголын олимпиадын нэгдсэн сан. </div>
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
