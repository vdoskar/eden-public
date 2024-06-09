import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery";

function VelkeChatyPage({translation}) {
	useEffect(() => {
		document.title = translation.types.bigCottage.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

	const velkeChaty = [
		{
			name: translation.types.bigCottage.title,
			description: translation.types.bigCottage.text,
			gallery: [
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-4.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-3.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-0.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-1.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-2.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-5.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-6.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-7.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-8.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-9.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-10.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-11.webp",
			],
			thumbnails: [
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-4-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-3-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-0-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-1-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-2-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-5-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-6-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-7-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-8-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-9-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-10-s.webp",
				"https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-11-s.webp",
			]
		}
	];

	return (
		<div className="ubytko-content">
			<Gallery data={velkeChaty} />
		</div>
	)
}

export default VelkeChatyPage