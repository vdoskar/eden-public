
function ContactSection() {

    const EmailImage = 'https://cdn.edenjinolice.cz/web_assets/email.webp';
    const PhoneImage = 'https://cdn.edenjinolice.cz/web_assets/phone.webp';
    const ChatImage = 'https://cdn.edenjinolice.cz/web_assets/chat.webp';

    const imgStyle = {
        width: "30px",
        height: "30px",
        margin: "15px",
    }

    return (
        <div className="contact-section">
            <div>
                <img style={{width: "100px", height: "100px", transform: "rotate(8deg) translateX(-15px)"}} src={ChatImage} id="chat-icon" alt="Ikonka chatování" />
            </div>
            <h2>Potřebujete poradit nebo se na něco zeptat?</h2>
            <div>
                <a href="mailto:info@eden-jinolice.cz">
                    <img src={EmailImage} alt="Ikonka emailu" style={imgStyle} />
                    <span>NAPIŠTE NÁM NA <br/>info@eden-jinolice.cz</span>
                </a>
                <a href="tel:+420493591930">
                    <img src={PhoneImage} alt="Ikonka telefonu" style={imgStyle}/>
                    <span>ZAVOLEJTE NÁM NA <br/>+420 493 591 930</span>
                </a>
            </div>
        </div>
    )
}

export default ContactSection