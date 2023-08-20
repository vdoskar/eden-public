import { Link  } from "react-router-dom"

function Footer() {

    const Logo = 'https://cdn.edenjinolice.cz/web_assets/logo.webp';
    const EmailImage = 'https://cdn.edenjinolice.cz/web_assets/email.webp';
    const PhoneImage = 'https://cdn.edenjinolice.cz/web_assets/phone.webp';


    const p1 = { display: "flex", flexDirection: "row", alignItems: "center", fontSize: "16px"}
    const a1 = {textAlign:"center", display:"inline-block"}
    
    return (
        <div className="footer-container">
            <div className="logo">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Logo Eden" />
                    </Link>
                </div>
            </div>
            <div className="footer-contact">
                <div>
                    <p style={p1}>
                        <img width="20px" src={PhoneImage} style={{marginRight: "10px"}} alt="Ikonka Telefonu"/>
                        <a style={a1} href="tel:+420493591930">+420 493 591 930</a>
                    </p>
                </div>       
                <div>
                    <p style={p1}>
                        <img width="20px" src={EmailImage} style={{marginRight: "10px"}} alt="Ikonka E-mailu"/>
                        <a style={a1} href="mailto:info@eden-jinolice.cz">info@eden-jinolice.cz</a>
                    </p>
                </div>  
            </div>
            <div className="copyright">
                <div style={{marginBottom: "5px"}}>
                    <span>Vytvořil Vladimír Doškář</span>
                </div>
                <div>
                    <span>
                        <a href="mailto:vladadoskar@gmail.com" target='blank'>vladadoskar@gmail.com</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer