import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery";

function VelkeChatyPage() {
	useEffect(() => {
		document.title = 'Velké chaty | Ubytování | Eden Jinolice';
	}, []);

	const velkeChaty = [
		{
			name: "Velké chaty",
			description:
				"Ideálním ubytováním pro rodinu je velká chata. Dvě chaty nabízí 4 dvoulůžkové pokoje, tři chaty mají 2 čtyřlůžkové pokoje (celková kapacita 40 míst). Chaty disponují vybavenou kuchyňskou linku, vařičem a ledničkou. Samozřejmostí je i sprcha s teplou vodou a sociální zařízení.",
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