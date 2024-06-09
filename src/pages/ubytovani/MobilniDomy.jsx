import { useEffect } from "react"
import Gallery from "../../components/LightboxGallery"

function MobDomyPage({translation}) {
	useEffect(() => {
		document.title = translation.types.mobileHome.title + ' | ' + translation.heading + ' | Eden Jinolice';
	}, []);

	const mobilniDomy = [
		{
			name: translation.types.mobileHome.title,
			description: translation.types.mobileHome.text,
			gallery: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-0.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-1.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-2.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-3.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-4.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-5.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-6.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-7.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-8.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-9.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-10.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-11.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-12.webp'
			],
			thumbnails: [
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-0-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-1-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-2-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-3-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-4-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-5-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-6-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-7-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-8-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-9-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-10-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-11-s.webp',
				'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-12-s.webp'
			]
		}
	];

	return (
		<div>
			<div className="ubytko-content">
				<p style={{ textAlign: "center" }}>
					<a href="https://www.marvel-mobilnidomy.cz/?utm_source=Eden%2BJinolice&utm_medium=banner&utm_term=st%C3%A1le&utm_content=v%C3%BDm%C4%9Bnn%C3%BD%2Bbanner&utm_campaign=v%C3%BDm%C4%9Bnn%C3%BD%2Bbanner" target="_blank" rel="noopener noreferrer">
						<picture>
							<source srcSet='https://cdn.edenjinolice.cz/web_assets/logo-marvel.webp' />
							<img src='https://cdn.edenjinolice.cz/web_assets/logo-marvel.webp' alt="marvel logo" />
						</picture>
					</a>
				</p>
				<Gallery data={mobilniDomy} />
			</div>

		</div>
	);
}

export default MobDomyPage