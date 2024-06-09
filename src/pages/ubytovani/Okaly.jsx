import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function OkalyPage({translation}) {
	useEffect(() => {
		document.title = translation.types.okal.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

	const okaly = [
		{
			name: translation.types.okal.title,
			description: translation.types.okal.text,
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-2.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-3.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-4.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-5.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-6.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-7.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-8.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-9.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-10.webp',
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-2-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-3-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-4-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-5-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-6-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-7-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-8-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-9-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-10-s.webp',
			]
		}
	];

	return (
		<div className="ubytko-content">
			<Gallery data={okaly} />
		</div>
	)
}

export default OkalyPage