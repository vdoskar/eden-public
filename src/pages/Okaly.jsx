import { useEffect } from "react"
import Gallery from "../components/LightboxGallery"

// import Okaly0 from "../assets/ubytovani/okaly/okaly-0.webp";
// import Okaly0s from "../assets/ubytovani/okaly/okaly-0-s.webp";
// import Okaly1 from "../assets/ubytovani/okaly/okaly-1.webp";
// import Okaly1s from "../assets/ubytovani/okaly/okaly-1-s.webp";
// import Okaly2 from "../assets/ubytovani/okaly/okaly-2.webp";
// import Okaly2s from "../assets/ubytovani/okaly/okaly-2-s.webp";
// import Okaly3 from "../assets/ubytovani/okaly/okaly-3.webp";
// import Okaly3s from "../assets/ubytovani/okaly/okaly-3-s.webp";
// import Okaly4 from "../assets/ubytovani/okaly/okaly-4.webp";
// import Okaly4s from "../assets/ubytovani/okaly/okaly-4-s.webp";
// import Okaly5 from "../assets/ubytovani/okaly/okaly-5.webp";
// import Okaly5s from "../assets/ubytovani/okaly/okaly-5-s.webp";
// import Okaly6 from "../assets/ubytovani/okaly/okaly-6.webp";
// import Okaly6s from "../assets/ubytovani/okaly/okaly-6-s.webp";

function OkalyPage() {
    useEffect(() => {
        document.title = 'Okály | Ubytování | Eden Jinolice';
    }, []);

    const Okaly0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-0.webp';
    const Okaly0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-0-s.webp';
    const Okaly1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-1.webp';
    const Okaly1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-1-s.webp';
    const Okaly2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-2.webp';
    const Okaly2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-2-s.webp';
    const Okaly3 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-3.webp';
    const Okaly3s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-3-s.webp';
    const Okaly4 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-4.webp';
    const Okaly4s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-4-s.webp';
    const Okaly5 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-5.webp';
    const Okaly5s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-5-s.webp';
    const Okaly6 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-6.webp';
    const Okaly6s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/okaly/okaly-6-s.webp';


    const okaly = [
        {
            name: "Okály",
            description:
                "Další možností ubytovávání jsou čtyři okály. Na každém okálu jsou 3 čtyřlůžkové, 1 šestilůžkový a 1 dvoulůžkový pokoj. Ve dvou z okálů jsou i přístavby, které mají dva pokoje, 1 třílůžkový a 1 čtyřlůžkový. Kapacita míst v okálech je 94 lůžek. Příslušenstvím každého okálu jsou sprchy s teplou vodou a sociální zařízení.",
            gallery: [
                Okaly0,
                Okaly1,
                Okaly2,
                Okaly3,
                Okaly4,
                Okaly5,
                Okaly6,
            ],
            thumbnails: [
                Okaly0s,
                Okaly1s,
                Okaly2s,
                Okaly3s,
                Okaly4s,
                Okaly5s,
                Okaly6s,
            ],
        },
    ];

    return (
        <div className="ubytko-content">
            <Gallery data={okaly} />
        </div>
    )
}

export default OkalyPage