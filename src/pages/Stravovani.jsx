import { useEffect } from "react"
import Heading from "../components/Heading"
import Gallery from "../components/LightboxGallery"

function StravovaniPage() {
	useEffect(() => {
		document.title = 'Stravování | Eden Jinolice';
	}, []);

	const HeadingImage = "http://cdn.edenjinolice.cz/web_assets/stravovani.webp";
	const stravovani = [
		{
			name: "Galerie restaurace",
			description: "",
			gallery: [
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-0.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-1.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-2.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-3.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-4.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-5.webp",
				// "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-6.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-7.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-8.webp"
			],
			thumbnails: [
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-0-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-1-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-2-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-3-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-4-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-5-s.webp",
				// "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-6-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-7-s.webp",
				"http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-8-s.webp"
			]
		}
	];

	return (
		<div className="main">
			<Heading text="Stravování" img={HeadingImage} />
			<div className="main-content" style={{ position: "relative" }}>
				<section className="main-section">
					<p>Návštěvníci mohou využít možnosti plné penze nebo polopenze (není podmínkou při ubytování) v restauraci přímo v objektu rekreačního zařízení. Restaurace s terasou disponuje kapacitou 100 míst. Je zde umístěna televize a satelitní přijímač, k dispozici Wifi zdarma. Součástí objektu restaurace jsou také prostory určené pro grilování. Mimo sezónu je možno pořádat školení, teambuildingové akce, výroční schůze, večírky, svatební a jiné oslavy.</p>
					<p>
						Webové stránky restaurace <a href="https://edenrestaurace.cz/" target="blank">naleznete zde</a>.
					</p>
				</section>
				<section className="main-section">
					<Gallery data={stravovani}></Gallery>
				</section>
			</div>
		</div>
	)
}

export default StravovaniPage