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

function UbytovaniPage() {
	const [activeUbytovani, setActiveUbytovani] = useState("");
	const location = useLocation();

	useEffect(() => {
		document.title = 'Ubytování | Eden Jinolice';
	}, []);

	useEffect(() => {
		const splitLocation = location.pathname.split("/")[2];
		if (splitLocation) {
			getCurrentUbytovani(splitLocation);
		}
	}, [location])

	const getCurrentUbytovani = (loc) => {
		document.getElementById("scrolled_to").scrollIntoView({ behavior: 'smooth', block: 'start' });

		switch (loc) {
			case "hlavni-budova": return setActiveUbytovani(<HlavniBudovaPage />)
			case "drevene-chatky": return setActiveUbytovani(<DrChatkyPage />)
			case "karavany": return setActiveUbytovani(<KaravanyPage />)
			case "mobilni-domy": return setActiveUbytovani(<MobDomyPage />)
			case "okaly": return setActiveUbytovani(<OkalyPage />)
			case "stanovani": return setActiveUbytovani(<StanovaniPage />)
			case "velke-chaty": return setActiveUbytovani(<VelkeChatyPage />)
		}
	}

	const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/ubytovani.webp';
	const MapaFull = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/main/mapa_camp.webp';
	const MapaSmall = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/main/mapa_camp_small.webp';

	return (
		<div className="main">
			<Heading text="Ubytování" img={HeadingImage} />
			<div className="main-content" style={{ position: "relative" }}>
				<section className="main-section">
					<h2>Naše zařízení nabízí ubytování hned v několika variantách</h2>
				</section>
				<UbytovaniMenu />
				<div id="scrolled_to"></div>

				{activeUbytovani}

				<section className="main-section">
					<div className="uvodni-ubytovani-gallery">
						<div className="uvodni-ubytovani-child">
							<a href={MapaFull} data-lightbox="ubytovani-uvod">
								<img src={MapaSmall} alt="Orientační mapa rekreačního zařízení Eden Jinolice" loading="lazy" />
							</a>
						</div>
					</div>
				</section>
			</div>

		</div>
	)
}

export default UbytovaniPage