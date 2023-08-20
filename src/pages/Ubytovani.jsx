import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Heading from "../components/Heading"
import UbytovaniMenu from "../components/UbytovaniMenu"
import "../css/Ubytovani.css"

// import HeadingImage from "../assets/ubytovani.webp"
// import MapaFull from "../assets/ubytovani/main/mapa_camp.webp"
// import MapaSmall from "../assets/ubytovani/main/mapa_camp_small.webp"

// ubytování ->
import DrChatkyPage from '../pages/DreveneChatky'
import HlBudovaPage from '../pages/HlavniBudova'
import KaravanyPage from '../pages/Karavany'
import MobDomyPage from '../pages/MobilniDomy'
import OkalyPage from '../pages/Okaly'
import StanovaniPage from '../pages/Stanovani'
import VelkeChatyPage from '../pages/VelkeChaty'

function UbytovaniPage() {

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/ubytovani.webp';
    const MapaFull = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/main/mapa_camp.webp';
    const MapaSmall = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/main/mapa_camp_small.webp';

    
    const [activeUbytko, setActiveUbytko] = useState("");
    const location = useLocation();

    useEffect(() => {
        const splitLocation = location.pathname.split("/")[2];
        if (splitLocation) {
            getCurrentUbytko(splitLocation); 
        }
    },[location])

    useEffect(() => {
        document.title = 'Ubytování | Eden Jinolice';
    }, []);

    const getCurrentUbytko = (loc) => {
        //console.log("loaded", loc)

        document.getElementById("scrolled_to").scrollIntoView({
            behavior: 'smooth',
        });

        switch(loc) {
            case "hlavni-budova": return setActiveUbytko(<HlBudovaPage />)
            case "drevene-chatky": return setActiveUbytko(<DrChatkyPage />)
            case "karavany": return setActiveUbytko(<KaravanyPage />)
            case "mobilni-domy": return setActiveUbytko(<MobDomyPage />)
            case "okaly": return setActiveUbytko(<OkalyPage />)
            case "stanovani": return setActiveUbytko(<StanovaniPage />)
            case "velke-chaty": return setActiveUbytko(<VelkeChatyPage />)
        }
    }


    return (
        <div className="main">
            <Heading text="Ubytování" img={HeadingImage} />
            <div className="main-content" style={{position:"relative"}}>
                <section className="main-section">
                    <h2>Naše zařízení nabízí ubytování hned v několika variantách</h2>
                </section>
                <UbytovaniMenu/>
                <div id="scrolled_to"></div>
                { activeUbytko }
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