import React, { useEffect } from "react"
import Heading from "../components/Heading"
import Gallery from "../components/LightboxGallery"
import "../css/ZabavaSport.css"

import translations from '../translations/zabavaSport.json';
const lang = localStorage.getItem('lang') || 'cz';

function ZabavaSportPage() {
	useEffect(() => {
		document.title = translations[lang].heading + " | Eden Jinolice";
	}, []);

	const attractions = [
		{
			name: translations[lang].attractions.beach.title,
			description: translations[lang].attractions.beach.text,
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
			name: translations[lang].attractions.pool.title,
			description: translations[lang].attractions.pool.text,
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
			name: translations[lang].attractions.tableTennis.title,
			description: translations[lang].attractions.tableTennis.text,
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
			name: translations[lang].attractions.volleyball.title,
			description: translations[lang].attractions.volleyball.text,
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
			name: translations[lang].attractions.playground.title,
			description: translations[lang].attractions.playground.text,
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
			name: translations[lang].attractions.firePit.title,
			description: translations[lang].attractions.firePit.text,
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
			name: translations[lang].attractions.fishing.title,
			description: translations[lang].attractions.fishing.text,
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
			<Heading text={translations[lang].heading} img='https://cdn.edenjinolice.cz/web_assets/zabava_a_sport.webp' />
			<div className="main-content">
				<p>{translations[lang].introParagraph}</p>
				<section className="main-section">
					<h2>{translations[lang].attractionsHeading}</h2>
					<Gallery data={attractions} />
				</section>
			</div>

		</div>
	);
}

export default ZabavaSportPage