import React, { useEffect } from "react"
import Heading from "../components/Heading"
import Gallery from "../components/LightboxGallery"
import "../css/ZabavaSport.css"

function ZabavaSportPage() {
    
    useEffect(() => {
        document.title = "Zábava a sport | Eden Jinolice";
    }, []);

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/zabava_a_sport.webp';

    const Bazen0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-0.webp";
    const Bazen0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-0-s.webp";
    const Bazen1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-1.webp";
    const Bazen1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-1-s.webp";
    const Bazen2 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-2.webp";
    const Bazen2s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/bazen/bazen-2-s.webp";

    const Hriste0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-0.webp";
    const Hriste0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-0-s.webp";
    const Hriste1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-1.webp";
    const Hriste1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-1-s.webp";
    const Hriste2 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-2.webp";
    const Hriste2s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/hriste/hriste-2-s.webp";

    const Ohniste0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-0.webp";
    const Ohniste0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-0-s.webp";
    const Ohniste1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-1.webp";
    const Ohniste1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-1-s.webp";
    const Ohniste2 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-2.webp";
    const Ohniste2s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-2-s.webp";
    const Ohniste3 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-3.webp";
    const Ohniste3s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-3-s.webp";
    const Ohniste4 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-4.webp";
    const Ohniste4s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/ohniste/ohniste-4-s.webp";

    const Plaz0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-0.webp";
    const Plaz0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-0-s.webp";
    const Plaz1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-1.webp";
    const Plaz1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-1-s.webp";
    const Plaz2 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-2.webp";
    const Plaz2s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-2-s.webp";
    const Plaz3 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-3.webp";
    const Plaz3s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-3-s.webp";
    const Plaz4 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-4.webp";
    const Plaz4s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/plaz/plaz-4-s.webp";

    const Rybareni0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-0.webp";
    const Rybareni0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-0-s.webp";
    const Rybareni1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-1.webp";
    const Rybareni1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-1-s.webp";
    const Rybareni2 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-2.webp";
    const Rybareni2s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/rybareni/rybareni-2-s.webp";

    const StolniTenis0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-0.webp";
    const StolniTenis0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-0-s.webp";
    const StolniTenis1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-1.webp";
    const StolniTenis1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-1-s.webp";
    const StolniTenis2 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-2.webp";
    const StolniTenis2s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/stolni-tenis/stolni-tenis-2-s.webp";

    const Volejbal0 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-0.webp";
    const Volejbal0s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-0-s.webp";
    const Volejbal1 = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-1.webp";
    const Volejbal1s = "https://cdn.edenjinolice.cz/web_assets/zabava_a_sport/volejbal/volejbal-1-s.webp";

    const attractions = [
        {
            name: "Pláž",
            description:
                "Součástí kempu jsou dvě písčité pláže s hřištěm pro plážový volejbal. U pláží jsou umístěny sprchy a dětské prolézačky.",
            gallery: [Plaz0, Plaz1, Plaz2, Plaz3, Plaz4],
            thumbnails: [Plaz0s, Plaz1s, Plaz2s, Plaz3s, Plaz4s],
        },
        {
            name: "Bazén",
            description: "Bazén s brouzdalištěm, zajištěn dozor plavčíka.",
            gallery: [Bazen0, Bazen1, Bazen2],
            thumbnails: [Bazen0s, Bazen1s, Bazen2s]
        },
        {
            name: "Stolní tenis",
            description: "Dva ping-pongové stoly, vybavení lze zapůjčit na recepci.",
            gallery: [StolniTenis0, StolniTenis1, StolniTenis2],
            thumbnails: [StolniTenis0s, StolniTenis1s, StolniTenis2s],
        },
        {
            name: "Volejbal",
            description:
                "Hřiště na pláži pro beach volejbal, míč lze zapůjčit v recepci.",
            gallery: [Volejbal0, Volejbal1],
            thumbnails: [Volejbal0s, Volejbal1s],
        },
        {
            name: "Hřiště",
            description:
                "Součástí kempu jsou dvě hřiště: nohejbalové s přírodním povrchem a fotbalové s povrchem antukovým. Míč k zapůjčení v recepci.",
            gallery: [Hriste0, Hriste1, Hriste2],
            thumbnails: [Hriste0s, Hriste1s, Hriste2s]
        },
        {
            name: "Kryté ohniště",
            description:
                "K dispozici kryté ohniště, které lze využít ke grilování. Dále kryté posezení a lednice.",
            gallery: [Ohniste0, Ohniste1, Ohniste2, Ohniste3, Ohniste4],
            thumbnails: [Ohniste0s, Ohniste1s, Ohniste2s, Ohniste3s, Ohniste4s],
        },
        {
            name: "Rybaření",
            description:
                "Jinolické rybníky jsou rájem rybářů. Nabízíme možnost zakoupení denní či týdenní povolenky.",
            gallery: [Rybareni0, Rybareni1, Rybareni2],
            thumbnails: [Rybareni0s, Rybareni1s, Rybareni2s],
        },
    ];

    return (
        <div className="main">
            <Heading text="Zábava a sport" img={HeadingImage} />
            <div className="main-content">
                <p>Rekreační zařízení EDEN nabízí celou řadu sportovišť a rekreačních prostor pro aktivní trávení volného času. Návštěvníkům je k dipozici bazén, pláž s hřištěm pro beach volejbal, minigolf, tenisový kurt, hřiště na fotbal, streetball či nohejbal, ping-pongové stoly i kryté ohniště.</p>
                <section className="main-section">
                    <h2>Dostupné atrakce</h2>
                    <Gallery data={attractions} />
                </section>
            </div>

        </div>
    );
}

export default ZabavaSportPage