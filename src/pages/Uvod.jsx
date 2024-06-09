import { useEffect } from "react"
import { Link } from "react-router-dom"
import HeadingUvod from "../components/HeadingUvod"

import translations from '../translations/uvod.json';
const lang = localStorage.getItem('lang') || 'cz';

const UvodMenuItem = ({ index, option }) => {
	const title = option.title.toUpperCase()
	return (
		<div className="uvod-menu-item" key={index}>
			<Link to={option.link} className="uvod-menu-link">
				<picture className="uvod-menu-img">
					<source srcSet={option.img} />
					<img src={option.img} alt={title} />
				</picture>
				<div>
					<h3 className="uvod-menu-title">{title}</h3>
				</div>
				<div className="uvod-menu-desc">
					<div>
						<span>{option.description}...</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

function Uvod() {
	useEffect(() => {
		document.title = translations[lang].heading + ' | Eden Jinolice';
	}, []);

	const options = [
		{
			title: translations[lang].whereToGoNextSections.accomodation.title,
			link: "/ubytovani",
			description: translations[lang].whereToGoNextSections.accomodation.text,
			img: 'https://cdn.edenjinolice.cz/web_assets/ubytovani.webp'
		},
		{
			title: translations[lang].whereToGoNextSections.pricing.title,
			link: "/cenik",
			description: translations[lang].whereToGoNextSections.pricing.text,
			img: 'https://cdn.edenjinolice.cz/web_assets/cenik.webp'
		},
		{
			title: translations[lang].whereToGoNextSections.tipsForTrips.title,
			link: "/tipy-na-vylet",
			description: translations[lang].whereToGoNextSections.tipsForTrips.text,
			img: 'https://cdn.edenjinolice.cz/web_assets/tipy-na-vylety.webp'
		}
	]

	return (
		<div className="main">
			<HeadingUvod
				text={translations[lang].heading}
				videos={['https://cdn.edenjinolice.cz/web_assets/uvod_1080.mp4', 'https://cdn.edenjinolice.cz/web_assets/uvod_1080.webm']}
			/>
			<div className="main-content">
				<div>
					<p>{translations[lang].introParagraph}</p>
				</div>
				<div>
					<br /><br />
					<p className="important" style={{ fontSize: "clamp(1rem,1.75rem,2rem)" }}>{translations[lang].complexTimespan}</p>
				</div>
				<section className="main-section">
					<h2>{translations[lang].paragraphsHeading}</h2>
					<div className="section-content">
						{
                            translations[lang].paragraphs.map((paragraph, index) => {
                                return (
                                    <p key={index}>{paragraph}</p>
                                );
                            })
                        }
					</div>
				</section>
			</div>
			<section className="main-section">
				<h2>{translations[lang].whereToGoNextHeading}</h2>
				<div className="uvod-menu">
					{
						options.map((option, index) => {
							return (
								<UvodMenuItem option={option} key={index} />
							);
						})
					}
				</div>
			</section>
		</div>
	)
}

export default Uvod