import { useEffect } from "react"
import { Link } from "react-router-dom"

import HeadingUvod from "../components/HeadingUvod"

// import UbytovaniImage from "../assets/ubytovani.webp"
// import CenikImage from "../assets/cenik.webp"
// import TipyNaVyletyImage from "../assets/tipy-na-vylety.webp"

import UvodniVideo720w from "../assets/uvod_720.webm"
import UvodniVideo1080w from "../assets/uvod_1080.webm"
import UvodniVideo720mp from "../assets/uvod_720.mp4"
import UvodniVideo1080mp from "../assets/uvod_1080.mp4"

const UvodMenuItem = ({ index, option }) => {

    const title = option.title.toUpperCase()
    return (
        <div className="uvod-menu-item" key={index}>
            <Link to={option.link} className="uvod-menu-link">
                <picture className="uvod-menu-img">
                    <source srcSet={option.img} />
                    <img src={option.img} alt={title} />
                </picture>
                <div>
                    <h3 className="uvod-menu-title">{title}</h3>
                </div>
                <div className="uvod-menu-desc">
                    <div>
                        <span>{option.description}</span>
                    </div>
                </div>
            </Link>

        </div>
    )
}

function Uvod() {
    useEffect(() => {
        document.title = 'Úvod | Eden Jinolice';
    }, []);

    const UbytovaniImage = 'https://cdn.edenjinolice.cz/web_assets/ubytovani.webp';
    const CenikImage = 'https://cdn.edenjinolice.cz/web_assets/cenik.webp';
    const TipyNaVyletyImage = 'https://cdn.edenjinolice.cz/web_assets/tipy-na-vylety.webp';

    const options = [
        {
            title: "Ubytování",
            link: "/ubytovani",
            description: "Podívejte se, jaké ubytovací možnosti náš kemp nabízí...",
            img: UbytovaniImage
        },
        {
            title: "Ceník",
            link: "/cenik",
            description: "Zhlédněte lákavé ceny našich služeb...",
            img: CenikImage
        },
        {
            title: "Tipy na výlety",
            link: "/tipy-na-vylet",
            description: "Kam se vydat na protáhnutí nohou od lenošení v kempu...",
            img: TipyNaVyletyImage
        }
    ]

    const videos720 = [UvodniVideo720w, UvodniVideo720mp];
    const videos1080 = [UvodniVideo1080w, UvodniVideo1080mp];

    return (
        <div className="main">
            <HeadingUvod text="Rekreační zařízení Eden Jinolice" videos720={videos720} videos1080={videos1080} />
            <div className="main-content">
                <div>
                    <p>Rekreační zařízení EDEN se nachází na břehu Jinolických rybníků, přímo v srdci Prachovských skal v chráněné krajinné oblasti Český ráj. Příjezdová silnice vede z hlavní trasy Jičín - Turnov, přes obec Jinolice. </p>
                </div>
                <div>
                    <br /><br />
                    <p className="important" style={{ fontSize: "clamp(1rem,1.75rem,2rem)" }}>Provozní období kempu je od 1.4. do 30.9.</p>
                </div>
                <section className="main-section">
                    <h2>Co nabízíme?</h2>
                    <div className="section-content">
                        <p>
                            Klidný a upravený areál Rekreačního zařízení EDEN nabízí strávení příjemné dovolené v krásné přírodě v okolí Prachovských skal. Návštěvníci mohou využít možnosti ubytování ve velkých nově opravených chatách, okálech, dřevěných chatkách, mobilních domech či hlavní budově, k dispozici je také autokemp pro ubytování v karavanech či stanech. Kemp je oplocen a vybaven elektrickými přípojkami pro karavany.
                        </p>
                        <p>
                            Kemp se rozkládá u Jinolických rybníků, které lze využít ke koupání i rybaření. Součástí kempu je písčitá pláž, bazén (za poplatek), tenisový kurt, kryté ohniště, ping-pong, dětská a sportovní hřiště (nohejbal, fotbal, streetball). Pro ubytované je zdarma k dispozici <span className="important">Wi-Fi internet</span>. Návštěvníci mohou využít nabídky stravování. Přímo v areálu se nabízí obchod s potravinami a smíšeným zbožím.
                        </p>
                        <p>
                            Náš kemp nabízí ideální možnost ubytování v rodinné atmosféře pro rodiny s dětmi, skupiny přátel a nadšenců, sportovní oddíly, školní zájezdy a školy v přírodě, houbaře, rybáře, cyklisty a další. Prostory kempu lze ale využít také pro pořádání teambuildingových a školících akcí, mimo hlavní sezónu pro svatební a jiné oslavy.
                        </p>
                    </div>
                </section>

            </div>
            <section className="main-section">
                <h2>Kam dále?</h2>
                <div className="uvod-menu">
                    {
                        options.map((option, index) => {
                            return (
                                <UvodMenuItem option={option} key={index} />
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Uvod