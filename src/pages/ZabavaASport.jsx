import React, { useEffect } from "react"
import Heading from "../components/Heading"
import Gallery from "../components/LightboxGallery"
import "../css/ZabavaSport.css"

function ZabavaSportPage() {
	useEffect(() => {
		document.title = "Zábava a sport | Eden Jinolice";
	}, []);

	const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/zabava_a_sport.webp';
	const attractions = [
		{
			name: "Pláž",
			description: "Součástí kempu jsou dvě písčité pláže s hřištěm pro plážový volejbal. U pláží jsou umístěny sprchy a dětské prolézačky.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-2.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-3.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-4.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-2-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-3-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-4-s.webp"
			]
		},
		{
			name: "Bazén",
			description: "Bazén pro dospělé s hloubkou 1,6m a dětský bazén s hloubkou 0,6m. Vstup do bazénu je zdarma pro ubytované hosty.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-2.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-2-s.webp"
			]
		},
		{
			name: "Stolní tenis",
			description: "Dva ping-pongové stoly, vybavení lze zapůjčit na recepci.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-2.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-2-s.webp"
			]
		},
		{
			name: "Volejbal",
			description: "Hřiště na pláži pro beach volejbal, míč lze zapůjčit v recepci.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-1.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-1-s.webp"
			]
		},
		{
			name: "Hrací hřiště",
			description: "Součástí kempu je univerzální hřiště s umělým povrchem. Míč k zapůjčení v recepci.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-2.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-2-s.webp"
			]
		},
		{
			name: "Kryté ohniště",
			description: "K dispozici kryté ohniště, které lze využít ke grilování. Dále kryté posezení a lednice.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-2.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-3.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-4.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-2-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-3-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-4-s.webp"
			]
		},
		{
			name: "Rybaření",
			description: "Jinolické rybníky jsou rájem rybářů. Povolenky k lovu jsou k dispozici ke koupi v sousedním kempu.",
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-2.webp"
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-2-s.webp"
			]
		}
	];

	return (
		<div className="main">
			<Heading text="Zábava a sport" img={HeadingImage} />
			<div className="main-content">
				<p>Rekreační zařízení EDEN nabízí celou řadu sportovišť a rekreačních prostor pro aktivní trávení volného času. Návštěvníkům je k dispozici jeden bazén pro dospělé (hloubka 1,6m) a jeden dětský bazén (hloubka 0,6m), pláž s hřištěm pro beach volejbal, tenisový kurt, hřiště na fotbal, streetball či nohejbal, ping-pongové stoly i kryté ohniště.</p>
				<section className="main-section">
					<h2>Dostupné atrakce</h2>
					<Gallery data={attractions} />
				</section>
			</div>

		</div>
	);
}

export default ZabavaSportPage