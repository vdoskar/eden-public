import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function OkalyPage() {
    useEffect(() => {
        document.title = 'Okály | Ubytování | Eden Jinolice';
    }, []);

	const okaly = [
		{
			name: "Okály",
			description:
				"Další možností ubytovávání jsou čtyři okály. Na každém okálu jsou 3 čtyřlůžkové, 1 šestilůžkový a 1 dvoulůžkový pokoj. Ve dvou z okálů jsou i přístavby, které mají dva pokoje, 1 třílůžkový a 1 čtyřlůžkový. Kapacita míst v okálech je 94 lůžek. Příslušenstvím každého okálu jsou sprchy s teplou vodou a sociální zařízení.",
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-2.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-3.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-4.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-5.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-6.webp'
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-2-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-3-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-4-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-5-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-6-s.webp'
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