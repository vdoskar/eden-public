import { useEffect } from "react"
import Heading from "../components/Heading"

function RezervacePage() {
	useEffect(() => {
		document.title = 'Rezervace | Eden Jinolice';
	}, []);

	const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/rezervacni-formular.webp';
	return (
		<div className="main">
			<Heading text="Rezervace" img={HeadingImage} />
			<div className="main-content">
				<p>Veškeré rezervace zařizujeme telefonicky nebo skrze e-mail.</p>
			</div>
		</div>
	)
}

export default RezervacePage