import { useEffect } from "react"
import Heading from "../components/Heading"
import "../css/kontakt.css"

// import HeadingImage from "../assets/kontakt2.webp"
// import EmailImage from "../assets/email.webp"
// import PhoneImage from "../assets/phone.webp"
// import AdresaImage from "../assets/address.webp"

function KontaktPage() {

    useEffect(() => {
        document.title = 'Kontakt | Eden Jinolice';
    }, []);

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/kontakt2.webp';
    const EmailImage = 'https://cdn.edenjinolice.cz/web_assets/email.webp';
    const PhoneImage = 'https://cdn.edenjinolice.cz/web_assets/phone.webp';
    // const AdresaImage = 'https://cdn.edenjinolice.cz/web_assets/address.webp';

    const p1 = { display: "flex", flexDirection: "row", alignItems: "center"}
    const a1 = {textAlign:"center", display:"inline-block"}

    return (
        <div className="main">
            <Heading text="Kontakt" img={HeadingImage} />
            <div className="main-content">
                <section className="main-section kontakt-section  zakladni-udaje">
                    <h2>Kontaktní údaje</h2>
                    <div className="udaje" style={{textAlign:"center"}}>
                        <div>
                            <h3>Adresa kempu</h3>
                            <br />
                            <p>EDEN BŘEZKA s.r.o.</p>
                            <p>Libuň - Březka 152</p>
                            <p>Jičín 506 01</p>
                        </div>
                        <div>
                            <h3>Spojení</h3>
                            <br />
                            
                            <p style={p1}><img width="30px" src={PhoneImage} style={{marginRight: "10px"}}/><a style={a1} href="tel:+420493591930">+420 493 591 930</a></p><br />
                            
                            <p style={p1}><img width="30px" src={EmailImage} style={{marginRight: "10px"}} /><a style={a1} href="mailto:info@eden-jinolice.cz">info@eden-jinolice.cz</a></p>
                        </div>
                    </div>
                </section>
                <section className="main-section kontakt-section oteviraci-doba">
                    <h2>Otevírací doba</h2>
                    <div className="udaje" style={{textAlign:"center"}}>
                        <div>
                            <h3>Rekreační zařízení</h3>
                            <br />
                            <p><span className="time-col">Pondělí</span><span className="time-col">8:00 - 20:00</span></p>
                            <p><span className="time-col">Úterý</span><span className="time-col">8:00 - 20:00</span></p>
                            <p><span className="time-col">Středa</span><span className="time-col">8:00 - 20:00</span></p>
                            <p><span className="time-col">Čtvrtek</span><span className="time-col">8:00 - 20:00</span></p>
                            <p><span className="time-col">Pátek</span><span className="time-col">8:00 - 20:00</span></p>
                            <p><span className="time-col">Sobota</span><span className="time-col">8:00 - 20:00</span></p>
                            <p><span className="time-col">Neděle</span><span className="time-col">8:00 - 20:00</span></p>
                        </div>
                        <div>
                            <h3>Kuchyně</h3>
                            <br />
                            <p><span className="time-col">Pondělí</span><span className="time-col">8:00 - 22:00</span></p>
                            <p><span className="time-col">Úterý</span><span className="time-col">8:00 - 22:00</span></p>
                            <p><span className="time-col">Středa</span><span className="time-col">8:00 - 22:00</span></p>
                            <p><span className="time-col">Čtvrtek</span><span className="time-col">8:00 - 22:00</span></p>
                            <p><span className="time-col">Pátek</span><span className="time-col">8:00 - 22:00</span></p>
                            <p><span className="time-col">Sobota</span><span className="time-col">8:00 - 22:00</span></p>
                            <p><span className="time-col">Neděle</span><span className="time-col">8:00 - 22:00</span></p>
                        </div>
                    </div>
                </section>
                <section className="main-section">
                    <h2>Kde nás najdete na mapě?</h2>
                </section>
            </div>
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20313.66802630795!2d15.304693!3d50.47446200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea51a6a256a6b%3A0x11c77c9fa8e36f1!2zUmVrcmVhxI1uw60gemHFmcOtemVuw60gRURFTg!5e0!3m2!1scs!2sus!4v1686069856586!5m2!1scs!2sus" style={{ border: "0", }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default KontaktPage