let hall_of_famers = [
	{
		competition_type: "Математик",
		description: "Олон Улсын Математикийн Олимпиадын Алтан Медалтнууд",
		names: [
			"Мөнхбатын Өнөболд",
			"Отгонбаярын Мишээл",
			"Амарын Нямдаваа",
			"Энхбаярын Төрбат",
			"Өлзийбатын Баттулга",
		],
	},
	{
		competition_type: "Мэдээлэл Зүй",
		description: "Олон Улсын Мэдээлэл Зүйн Олимпиадын Медалтнууд",
		names: [
			"Амарын Нямдаваа",
			"Энхбаатарын Жангар",
			"Батсүхийн Бат-Эрдэнэ",
			"Олонбаатарын Тэнүүн",
			"Бүрэнтогтохын Батбаатар",
			"Чандманий Доржнамжил",
		],
	},
	{
		competition_type: "Физик",
		description: "Олон Улсын Физикийн Олимпиадын Мөнгөн Медалтнууд",
		names: [
			"Отгончулууны Анирчулуу",
			"Сарангэрэлын Сумъяажав",
			"Лхагвадоржийн Дөлгөөн",
			"Хасгэрэлын Цэрэнчимэг",
			"Бат-Эрдэнийн Бат-Амгалан",
			"Дашдоржийн Оргилболд",
			"Мягмарын Отгонбаатар",
		],
	},
	{
		competition_type: "Биологи",
		description: "Олон Улсын Биологийн Олимпиадын Медалтнууд",
		names: [
			"Энхтүвшингийн Тэргэл",
			"Батжаргалын Хулан",
			"Чинбатын Жаргалан",
			"Эрдэнэбаатарын Бодьхүү",
			"Болорын Пүрэвбадрал",
			"Бямбаагийн Билгүүн",
			"Амарсанаагийн Ашид",
			"Эрдэнэболдын Баттулга",
		],
	},
	{
		competition_type: "Хими",
		description: "Олон Улсын Химийн Олимпиадын Медалтнууд",
		names: [
			"Орхоны Тэмүжин",
			"Алтанхуягийн Ирмүүн",
			"Баярмагнайн Гэрэл",
			"Долгормаагийн Бумчин",
			"Амарсанаагийн Ашид",
			"Билэгсайханы Арвин",
			"Сүндэръяагийн Сувданчимэг",
			"Сандагдоржийн Хас-Ананд",
			"Хасбаатар Батхишиг",
			"Наранхүүгийн Тэмүүжин",
			"Батжаргалын Бат-Оргил",
			"Батнасангийн Ганбадрах",
			"Мягмарын Энхбат",
			"Даваасүрэнгийн Амарсанаа",
			"Гансүхийн Ганхөлөг",
			"Дагвадоржийн Уянга",
			"Түвшиндоржийн Урандэлгэр",
		],
	},
];

export default function HallofFame() {
	return (
		<main>
			<h2>Мэргэд</h2>
			{hall_of_famers.map((group) => (
				<div>
					<h3>{group.competition_type}</h3>
					<h5>{group.description}</h5>
					<ul>
						{group.names.map((halloffamer) => (
							<li>{halloffamer}</li>
						))}
					</ul>
				</div>
			))}
		</main>
	);
}
