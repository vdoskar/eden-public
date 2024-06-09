import { useEffect } from "react"
import Heading from "../components/Heading"

import translations from '../translations/rezervace.json';
const lang = localStorage.getItem('lang') || 'cz';


function RezervacePage() {
	useEffect(() => {
		document.title = translations[lang].heading + ' | Eden Jinolice';
	}, []);

	return (
		<div className="main">
			<Heading text={translations[lang].heading} img='https://cdn.edenjinolice.cz/web_assets/rezervacni-formular.webp' />
			<div className="main-content">
				<p>{translations[lang].text}</p>
			</div>
		</div>
	)
}

export default RezervacePage