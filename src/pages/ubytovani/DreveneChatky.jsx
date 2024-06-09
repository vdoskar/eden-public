import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function DrChatkyPage({translation}) {
	useEffect(() => {
		document.title = translation.types.woodenCottage.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

	const dreveneChatky = [
		{
			name: translation.types.woodenCottage.title,
			description: translation.types.woodenCottage.text,
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-2.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-3.webp',
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-2-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-3-s.webp',
			],
		},
	];

	return (
		<div className="ubytko-content">
			<Gallery data={dreveneChatky} />
		</div>
	)
}

export default DrChatkyPage