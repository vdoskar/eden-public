
import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function StanovaniPage() {
    useEffect(() => {
        document.title = 'Stanování | Ubytování | Eden Jinolice';
    }, []);

    const stanovani = [
		{
			name: "Stanování",
			description:
				"K rekreačnímu zařízení náleží i místo k rekreaci pod stanem nebo v karavanu. Prostor kempu je vybaven elektrickými přípojkami, osvětlením a rozvodem pitné vody. Sociální zařízení disponuje sprchami, umývárnou a toaletami. Ubytovaným je k dispozici i pračka.",
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-2.webp'
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-2-s.webp'
			]
		}
	];

    return (
        <div className="ubytko-content">
            <Gallery data={stanovani} />
        </div>
    )
}

export default StanovaniPage