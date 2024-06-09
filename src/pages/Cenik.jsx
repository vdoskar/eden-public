import { useEffect } from "react"
import Heading from "../components/Heading"
import "../css/cenik.css"

import translations from '../translations/cenik.json';
const lang = localStorage.getItem('lang') || 'cz';

function CenikPage() {
	useEffect(() => {
		document.title = translations[lang].heading + " | Eden Jinolice";
	}, []);

    const prices = translations[lang].prices;
	const cenik = [
        {
            kategorie: translations[lang].mainAccommodation,
            items: Object.keys(prices)
                .filter(key => [
                    'okalRoomWCShower', 'okalSingleBed', 'mainBuildingSingleBed', 'fourBedCottage',
                    'threeBedCottage', 'largeCottage', 'caravanWCShower', 'mobileHomeFourBeds',
                    'mobileHomeSixBeds', 'oneNightSurcharge'
                ].includes(key))
                .reduce((acc, key) => {
                    acc[prices[key].label] = prices[key].amount;
                    return acc;
                }, {})
        },
        {
            kategorie: translations[lang].campingAndCaravans,
            items: Object.keys(prices)
                .filter(key => [
                    'tentTwoPersons', 'tentThreePersons', 'motorhome', 'caravan', 'personalCar',
                    'electricity', 'childThreeToTwelve', 'personOverTwelve', 'municipalityFeeOverEighteen',
                    'motorcycle', 'bicycle', 'dog'
                ].includes(key))
                .reduce((acc, key) => {
                    acc[prices[key].label] = prices[key].amount;
                    return acc;
                }, {})
        },
        {
            kategorie: translations[lang].forSchools,
            items: Object.keys(prices)
                .filter(key => [
                    'halfBoardForSchools', 'fullBoardForSchools', 'breakfast', 'snack', 'lunch'
                ].includes(key))
                .reduce((acc, key) => {
                    acc[prices[key].label] = prices[key].amount;
                    return acc;
                }, {})
        }
    ];

	return (
		<div className="main">
			<Heading text={translations[lang].heading} img='https://cdn.edenjinolice.cz/web_assets/cenik.webp' />
			<div className="main-content">
				<section className="main-section">
					<div className="cenik-udaje" style={{ textAlign: "center" }}>
						<div>
							<p>
								<span className="cenik-col">{translations[lang].item}</span>
								<span className="cenik-col">{translations[lang].pricePerDay}</span>
							</p>
							<br />
							{cenik.map((category) => (
								<div key={category.kategorie}>
									<h3 className="cenik-nadpis">{category.kategorie}</h3>
									{Object.entries(category.items).map(([item, price]) => (
										<p key={item}>
											<span className="cenik-col">{item}</span>
											<span className="cenik-col">{price}</span>
										</p>
									))}
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default CenikPage