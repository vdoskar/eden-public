import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Heading from "../components/Heading"
import UbytovaniMenu from "../components/UbytovaniMenu"
import "../css/Ubytovani.css"

// ubytování ->
import DrChatkyPage from './ubytovani/DreveneChatky'
import HlavniBudovaPage from './ubytovani/HlavniBudova'
import KaravanyPage from './ubytovani/Karavany'
import MobDomyPage from './ubytovani/MobilniDomy'
import OkalyPage from './ubytovani/Okaly'
import StanovaniPage from './ubytovani/Stanovani'
import VelkeChatyPage from './ubytovani/VelkeChaty'

import translations from '../translations/ubytovani.json';
const lang = localStorage.getItem('lang') || 'cz';

function UbytovaniPage() {
	const [activeUbytovani, setActiveUbytovani] = useState("");
	const location = useLocation();

	useEffect(() => {
		document.title = translations[lang].heading + ' | Eden Jinolice';
	}, []);

	useEffect(() => {
		const splitLocation = location.pathname.split("/")[2];
		if (splitLocation) {
			getCurrentUbytovani(splitLocation);
		}
	}, [location])

	const getCurrentUbytovani = (loc) => {
		document.getElementById("scrolled_to").scrollIntoView({ 
            behavior: 'smooth', 
        });

		switch (loc) {
			case "hlavni-budova": return setActiveUbytovani(<HlavniBudovaPage translation={translations[lang]} />)
			case "drevene-chatky": return setActiveUbytovani(<DrChatkyPage translation={translations[lang]} />)
			case "karavany": return setActiveUbytovani(<KaravanyPage translation={translations[lang]} />)
			case "mobilni-domy": return setActiveUbytovani(<MobDomyPage translation={translations[lang]} />)
			case "okaly": return setActiveUbytovani(<OkalyPage translation={translations[lang]} />)
			case "stanovani": return setActiveUbytovani(<StanovaniPage translation={translations[lang]} />)
			case "velke-chaty": return setActiveUbytovani(<VelkeChatyPage translation={translations[lang]} />)
		}
	}

	return (
		<div className="main">
			<Heading text={translations[lang].heading} img={'https://cdn.edenjinolice.cz/web_assets/ubytovani.webp'} />
			<div className="main-content" style={{ position: "relative" }}>
            <div id="scrolled_to"></div>
            <section className="main-section">
					<h2>{translations[lang].secondaryTitle}</h2>
				</section>
				<UbytovaniMenu />

				{activeUbytovani}

				<section className="main-section">
					<div className="uvodni-ubytovani-gallery">
						<div className="uvodni-ubytovani-child">
							<a href={'https://cdn.edenjinolice.cz/web_assets/ubytovani/main/mapa_camp.webp'} data-lightbox="ubytovani-uvod">
								<img src={'https://cdn.edenjinolice.cz/web_assets/ubytovani/main/mapa_camp_small.webp'} alt={translations[lang].mapText} loading="lazy" />
							</a>
						</div>
					</div>
				</section>
			</div>

		</div>
	)
}

export default UbytovaniPage