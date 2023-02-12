import Link from "next/link";
import Image from "next/image";

let navbarElements = [
	{
		name: "Results",
		href: "/results",
	},
	{
		name: "Hall of Fame",
		href: "/halloffame",
	},
];

function NavbarElement(element) {
	return (
		<Link className="navbar-element" href={element.href}>
			{" "}
			{element.name}{" "}
		</Link>
	);
}

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link href="/">
				<Image
					className="logo"
					src="/logoWithName.png"
					alt="Mянгат"
					width={100}
					height={100}
				/>
			</Link>
			<div>{navbarElements.map((element) => NavbarElement(element))}</div>
		</nav>
	);
}
