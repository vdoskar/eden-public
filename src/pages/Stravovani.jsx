import { useEffect } from "react"
import Heading from "../components/Heading"
import Gallery from "../components/LightboxGallery"

import translations from '../translations/stravovani.json';
const lang = localStorage.getItem('lang') || 'cz';

function StravovaniPage() {
	useEffect(() => {
		document.title = translations[lang].heading + ' | Eden Jinolice';
	}, []);

	const stravovani = [
		{
			name: translations[lang].restaurandGallery,
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
			<Heading text={translations[lang].heading} img="http://cdn.edenjinolice.cz/web_assets/stravovani.webp" />
			<div className="main-content" style={{ position: "relative" }}>
				<section className="main-section">
					{
                        translations[lang].paragraphs.map((text, i) => {
                            return <p key={i}>{text}</p>
                        })
                    }
					<p>
						<a href="https://edenrestaurace.cz/" target="blank">
                            {translations[lang].restaurantWebsite}
                        </a>
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