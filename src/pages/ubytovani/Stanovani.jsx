import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function StanovaniPage({translation}) {
	useEffect(() => {
		document.title = translation.types.tent.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

    const stanovani = [
		{
			name: translation.types.tent.title,
			description: translation.types.tent.text,
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