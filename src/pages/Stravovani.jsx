import { useEffect } from "react"
import Heading from "../components/Heading"

import HeadingImage from "../assets/stravovani.webp"
import Gallery from "../components/LightboxGallery"

// import Stravovani0 from "../assets/stravovani/stravovani/stravovani-0.webp";
// import Stravovani0s from "../assets/stravovani/stravovani/stravovani-0-s.webp";
// import Stravovani1 from "../assets/stravovani/stravovani/stravovani-1.webp";
// import Stravovani1s from "../assets/stravovani/stravovani/stravovani-1-s.webp";
// import Stravovani2 from "../assets/stravovani/stravovani/stravovani-2.webp";
// import Stravovani2s from "../assets/stravovani/stravovani/stravovani-2-s.webp";
// import Stravovani3 from "../assets/stravovani/stravovani/stravovani-3.webp";
// import Stravovani3s from "../assets/stravovani/stravovani/stravovani-3-s.webp";
// import Stravovani4 from "../assets/stravovani/stravovani/stravovani-4.webp";
// import Stravovani4s from "../assets/stravovani/stravovani/stravovani-4-s.webp";
// import Stravovani5 from "../assets/stravovani/stravovani/stravovani-5.webp";
// import Stravovani5s from "../assets/stravovani/stravovani/stravovani-5-s.webp";
// import Stravovani6 from "../assets/stravovani/stravovani/stravovani-6.webp";
// import Stravovani6s from "../assets/stravovani/stravovani/stravovani-6-s.webp";
// import Stravovani7 from "../assets/stravovani/stravovani/stravovani-7.webp";
// import Stravovani7s from "../assets/stravovani/stravovani/stravovani-7-s.webp";
// import Stravovani8 from "../assets/stravovani/stravovani/stravovani-8.webp";
// import Stravovani8s from "../assets/stravovani/stravovani/stravovani-8-s.webp";



function StravovaniPage() {
    useEffect(() => {
        document.title = 'Stravování | Eden Jinolice';
    }, []);

    const Stravovani0 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-0.webp";
    const Stravovani0s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-0-s.webp";
    const Stravovani1 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-1.webp";
    const Stravovani1s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-1-s.webp";
    const Stravovani2 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-2.webp";
    const Stravovani2s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-2-s.webp";
    const Stravovani3 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-3.webp";
    const Stravovani3s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-3-s.webp";
    const Stravovani4 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-4.webp";
    const Stravovani4s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-4-s.webp";
    const Stravovani5 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-5.webp";
    const Stravovani5s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-5-s.webp";
    const Stravovani6 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-6.webp";
    const Stravovani6s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-6-s.webp";
    const Stravovani7 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-7.webp";
    const Stravovani7s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-7-s.webp";
    const Stravovani8 = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-8.webp";
    const Stravovani8s = "http://cdn.edenjinolice.cz/web_assets/stravovani/stravovani/stravovani-8-s.webp";

    const stravovani = [
        {
            name: "Galerie stravování",
            description: "",
            gallery: [
                Stravovani0,
                Stravovani1,
                Stravovani2,
                Stravovani3,
                Stravovani4,
                Stravovani5,
                Stravovani6,
                Stravovani7,
                Stravovani8
            ],
            thumbnails: [
                Stravovani0s,
                Stravovani1s,
                Stravovani2s,
                Stravovani3s,
                Stravovani4s,
                Stravovani5s,
                Stravovani6s,
                Stravovani7s,
                Stravovani8s
            ],
        },
    ];

    return (
        <div className="main">
            <Heading text="Stravování" img={HeadingImage} />
            <div className="main-content" style={{position:"relative"}}>
                <section className="main-section">
                    <p>Návštěvníci mohou využít možnosti plné penze nebo polopenze (není podmínkou při ubytování) v restauraci přímo v objektu rekreačního zařízení. Restaurace s terasou disponuje kapacitou 100 míst. Je zde umístěna televize a satelitní přijímač, k dispozici Wifi zdarma. Součástí objektu restaurace jsou také prostory určené pro grilování. Mimo sezónu je možno pořádat školení, teambuildingové akce, výroční schůze, večírky, svatební a jiné oslavy.</p>
                    <p>
                        Webové stránky restaurace <a href="https://edenrestaurace.cz/" target="blank">naleznete zde</a>.
                    </p>
                </section>
                <section className="main-section">
                    <Gallery data={stravovani}></Gallery>
                </section>
            </div>
            
        </div>
    )
}

export default StravovaniPage