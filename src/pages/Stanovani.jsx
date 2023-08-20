
import { useEffect } from "react"
import Gallery from "../components/LightboxGallery"

// import Stan0 from "../assets/ubytovani/stanovani/stanovani-0.webp";
// import Stan0s from "../assets/ubytovani/stanovani/stanovani-0-s.webp";
// import Stan1 from "../assets/ubytovani/stanovani/stanovani-1.webp";
// import Stan1s from "../assets/ubytovani/stanovani/stanovani-1-s.webp";
// import Stan2 from "../assets/ubytovani/stanovani/stanovani-2.webp";
// import Stan2s from "../assets/ubytovani/stanovani/stanovani-2-s.webp";

function StanovaniPage() {
    useEffect(() => {
        document.title = 'Stanování | Ubytování | Eden Jinolice';
    }, []);

    const Stan0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-0.webp';
    const Stan0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-0-s.webp';
    const Stan1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-1.webp';
    const Stan1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-1-s.webp';
    const Stan2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-2.webp';
    const Stan2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/stanovani/stanovani-2-s.webp';


    const stanovani = [
        {
            name: "Stanování",
            description:
                "K rekreačnímu zařízení náleží i místo k rekreaci pod stanem nebo v karavanu. Prostor kempu je vybaven elektrickými přípojkami, osvětlením a rozvodem pitné vody. Sociální zařízení disponuje sprchami, umývárnou a toaletami. Ubytovaným je k dispozici i pračka.",
            gallery: [Stan0, Stan1, Stan2],
            thumbnails: [Stan0s, Stan1s, Stan2s],
        },
    ];

    return (
        <div className="ubytko-content">
            <Gallery data={stanovani} />
        </div>
    )
}

export default StanovaniPage