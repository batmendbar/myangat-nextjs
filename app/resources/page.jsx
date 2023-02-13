import Link from "next/link";

export default function Resources() {
	return (
		<main>
			<h2>Баялаг</h2>
			<div>
				Математикийн олимпиадын бодлогын сан{" "}
				<Link href="https://www.integral.mn/olympiads">
					integral.mn
				</Link>
			</div>
			<div>
				Мэдээлэл зүйн олимпиадын бодлогын сан{" "}
				<Link href="https://www.spoj.com/RGB7/problems/main/">
					spoj.com/RGB7
				</Link>
			</div>
			<div>
				Мэдээлэл зүйн олимпиадын гарын авлага (Англи){" "}
				<Link href="https://cses.fi/book/book.pdf">
					Competitive Programmer's Handbook
				</Link>
			</div>
		</main>
	);
}
