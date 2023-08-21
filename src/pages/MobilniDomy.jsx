import { useEffect } from "react"

import Gallery from "../components/LightboxGallery"

function MobDomyPage() {
    useEffect(() => {
        document.title = 'Mobilní domy | Ubytování | Eden Jinolice';
    }, []);
    
    const LogoMarvel = 'https://cdn.edenjinolice.cz/web_assets/logo-marvel.webp';
    const MobilniDomy0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-0.webp';
    const MobilniDomy0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-0-s.webp';
    const MobilniDomy1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-1.webp';
    const MobilniDomy1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-1-s.webp';
    const MobilniDomy2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-2.webp';
    const MobilniDomy2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-2-s.webp';
    const MobilniDomy3 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-3.webp';
    const MobilniDomy3s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-3-s.webp';
    const MobilniDomy4 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-4.webp';
    const MobilniDomy4s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-4-s.webp';
    const MobilniDomy5 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-5.webp';
    const MobilniDomy5s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-5-s.webp';
    const MobilniDomy6 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-6.webp';
    const MobilniDomy6s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-6-s.webp';
    const MobilniDomy7 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-7.webp';
    const MobilniDomy7s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-7-s.webp';
    const MobilniDomy8 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-8.webp';
    const MobilniDomy8s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-8-s.webp';
    const MobilniDomy9 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-9.webp';
    const MobilniDomy9s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-9-s.webp';
    const MobilniDomy10 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-10.webp';
    const MobilniDomy10s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-10-s.webp';
    const MobilniDomy11 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-11.webp';
    const MobilniDomy11s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-11-s.webp';
    const MobilniDomy12 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-12.webp';
    const MobilniDomy12s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/mobilni-domy/mobilni-domy-12-s.webp';


    const mobilniDomy = [
        {
            name: "Mobilní domy",
            description:
                "Reakreační zařízení nabízí možnost ubytování ve 3 mobilních domech s kapacitou 14 míst (2 domy čtyřlůžkové a 1 šestilůžkový). Součástí každého mobilního domu je vybavená kuchyňská linka, vařič a lednička. Samozřejmostí je i samostatná sprcha s teplou vodou a sociální zařízení. Na realizaci mobilních domů se podílela firma marvel.",
            gallery: [
                MobilniDomy0,
                MobilniDomy1,
                MobilniDomy2,
                MobilniDomy3,
                MobilniDomy4,
                MobilniDomy5,
                MobilniDomy6,
                MobilniDomy7,
                MobilniDomy8,
                MobilniDomy9,
                MobilniDomy10,
                MobilniDomy11,
                MobilniDomy12,
            ],
            thumbnails: [
                MobilniDomy0s,
                MobilniDomy1s,
                MobilniDomy2s,
                MobilniDomy3s,
                MobilniDomy4s,
                MobilniDomy5s,
                MobilniDomy6s,
                MobilniDomy7s,
                MobilniDomy8s,
                MobilniDomy9s,
                MobilniDomy10s,
                MobilniDomy11s,
                MobilniDomy12s,
            ],
        },
    ];

    return (
        <div>
            <div className="ubytko-content">
                <p style={{textAlign:"center"}}>
                    <a href="https://www.marvel-mobilnidomy.cz/?utm_source=Eden%2BJinolice&utm_medium=banner&utm_term=st%C3%A1le&utm_content=v%C3%BDm%C4%9Bnn%C3%BD%2Bbanner&utm_campaign=v%C3%BDm%C4%9Bnn%C3%BD%2Bbanner"target="_blank"rel="noopener noreferrer">
                        <picture>
                            <source srcSet={LogoMarvel} />
                            <img src={LogoMarvel} alt="Logo firmy marvel" />
                        </picture>
                    </a>
                </p>
                <Gallery data={mobilniDomy} />
            </div>

        </div>
    );
}

export default MobDomyPage