import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function DrChatkyPage() {
	useEffect(() => {
		document.title = 'Dřevěné chatky | Ubytování | Eden Jinolice';
	}, []);

	const dreveneChatky = [
		{
			name: "Dřevěné chatky",
			description: "Rekreační zařízení nabízí ubytování ve 3 a 4 lůžkových chatkách s kapacitou celkem 75 míst. Sprchy s teplou vodou a toalety jsou společné, lednička na chatkách je samozřejmostí.",
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