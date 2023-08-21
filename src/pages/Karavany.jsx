
import { useEffect } from "react"
import Gallery from "../components/LightboxGallery"

function KaravanyPage() {
    useEffect(() => {
        document.title = 'Karavany | Ubytování | Eden Jinolice';
    }, []);

    const Karavany0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-0.webp';
    const Karavany0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-0-s.webp';
    const Karavany1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-1.webp';
    const Karavany1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-1-s.webp';
    const Karavany2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-2.webp';
    const Karavany2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-2-s.webp';
    const Karavany3 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-3.webp';
    const Karavany3s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-3-s.webp';
    const Karavany4 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-4.webp';
    const Karavany4s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-4-s.webp';
    const Karavany5 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-5.webp';
    const Karavany5s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-5-s.webp';
    const Karavany6 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-6.webp';
    const Karavany6s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-6-s.webp';
    const Karavany7 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-7.webp';
    const Karavany7s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/karavany/karavany-7-s.webp';

    const karavany = [
        {
            name: "Karavany",
            description:
                "K rekreačnímu zařízení náleží i místo k rekreaci pod stanem nebo v karavanu. Prostor kempu je vybaven elektrickými přípojkami, osvětlením a rozvodem pitné vody. Sociální zařízení disponuje sprchami, umývárnou a toaletami. Ubytovaným je k dispozici i pračka.",
            gallery: [Karavany0, Karavany1, Karavany2, Karavany3, Karavany4, Karavany5, Karavany6, Karavany7],
            thumbnails: [Karavany0s, Karavany1s, Karavany2s, Karavany3s, Karavany4s, Karavany5s, Karavany6s, Karavany7s],
        },
    ];

    return (
        <div className="ubytko-content">
            <Gallery data={karavany} />
        </div>
    )
}

export default KaravanyPage