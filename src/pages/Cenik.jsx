import { useEffect } from "react"
import Heading from "../components/Heading"
import "../css/cenik.css"

function CenikPage() {
    useEffect(() => {
        document.title = 'Ceník | Eden Jinolice';
    }, []);

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/cenik.webp';
    const priceDict = [
        {
            kategorie: "Hlavní ubytování",
            items: {
                'okál - WC + sprcha na pokoji / 4 lůžka': '1700 Kč',
                'okál / 1 lůžko (v červenci a srpnu se platí celý pokoj)': '300 Kč',
                'hlavní budova / 1 lůžko (v červenci a srpnu se platí celý pokoj)': '350 Kč',
                'chatka čtyřlůžková': '950 Kč',
                'chatka třílůžková': '800 Kč',
                'chata velká': '3 000 Kč',
                'maringotka - WC + sprcha / 4 lůžka': '1 900 Kč',
                'mobilní dům - WC + sprcha / 4 lůžka': '2 100 Kč',
                'mobilní dům - WC + sprcha / 6 lůžek': '2 400 Kč',
                'příplatek za ubytování na 1 noc': '50 Kč',
            }
        },
        {
            kategorie: "Stanování a karavany",
            items: {
                'stan 2 osoby': '120 Kč',
                'stan 3 osoby a více': '160 Kč',
                'obytný automobil': '200 Kč',
                'karavan': '180 Kč',
                'osobní automobil': '130 Kč',
                'elektřina': '130 Kč',
                'dítě od 3 do 12 let': '90 Kč',
                'osoba nad 12 let': '130 Kč',
                'poplatek obci - ubytovaní od 18 let': '20 Kč',
                'motorka': '70 Kč',
                'kolo': '20 Kč',
                'pes': '90 Kč',
            }
        },
        {
            kategorie: "Pro školy",
            items: {
                'polopenze pro školy': '240 Kč',
                'plná penze pro školy': '310 Kč',
                'snídaně': '100 Kč',
                'svačinka': '40 Kč',
                'oběd': '170 Kč'
            }
        }
    ]

    return (
        <div className="main">
            <Heading text="Ceník" img={HeadingImage} />
            <div className="main-content">
                <section className="main-section">
                    <h2>Ceník je platný od 1. ledna r. 2022</h2>
                    <div className="cenik-udaje" style={{ textAlign: "center" }}>
                        <div>
                            <p>
                                <span className="cenik-col">Položka</span>
                                <span className="cenik-col">Cena Kč/den</span>
                            </p>
                            <br />
                            {priceDict.map((category) => (
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