import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function KaravanyPage({translation}) {
	useEffect(() => {
		document.title = translation.types.caravan.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

	const karavany = [
		{
			name: translation.types.caravan.title,
			description: translation.types.caravan.text,
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-2.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-3.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-4.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-5.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-6.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-7.webp'
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-2-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-3-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-4-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-5-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-6-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-7-s.webp'
			]
		}
	];

    return (
        <div className="ubytko-content">
            <Gallery data={karavany} />
        </div>
    )
}

export default KaravanyPage