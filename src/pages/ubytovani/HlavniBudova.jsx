import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function HlavniBudovaPage({translation}) {
	useEffect(() => {
		document.title = translation.types.mainBuilding.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

	const hlavniBudova = [
		{
			name: translation.types.mainBuilding.title,
			description: translation.types.mainBuilding.text,
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-2.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-3.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-4.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-5.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-6.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-7.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-8.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-9.webp'
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-2-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-3-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-4-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-5-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-6-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-7-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-8-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-9-s.webp'
			],
		},
	];

	return (
		<div className="ubytko-content">
			<Gallery data={hlavniBudova} />
		</div>
	)
}

export default HlavniBudovaPage