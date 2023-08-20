import { useEffect } from "react"

import Gallery from "../components/LightboxGallery";

// import VCh0 from "../assets/ubytovani/velke-chaty/velke-chaty-0.webp"
// import VCh0s from "../assets/ubytovani/velke-chaty/velke-chaty-0-s.webp"
// import VCh1 from "../assets/ubytovani/velke-chaty/velke-chaty-1.webp"
// import VCh1s from "../assets/ubytovani/velke-chaty/velke-chaty-1-s.webp"
// import VCh2 from "../assets/ubytovani/velke-chaty/velke-chaty-2.webp"
// import VCh2s from "../assets/ubytovani/velke-chaty/velke-chaty-2-s.webp"
// import VCh3 from "../assets/ubytovani/velke-chaty/velke-chaty-3.webp"
// import VCh3s from "../assets/ubytovani/velke-chaty/velke-chaty-3-s.webp"
// import VCh4 from "../assets/ubytovani/velke-chaty/velke-chaty-4.webp"
// import VCh4s from "../assets/ubytovani/velke-chaty/velke-chaty-4-s.webp"

function VelkeChatyPage() {
    useEffect(() => {
        document.title = 'Velké chaty | Ubytování | Eden Jinolice';
    }, []);

    const VCh0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-0.webp';
    const VCh0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-0-s.webp';
    const VCh1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-1.webp';
    const VCh1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-1-s.webp';
    const VCh2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-2.webp';
    const VCh2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-2-s.webp';
    const VCh3 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-3.webp';
    const VCh3s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-3-s.webp';
    const VCh4 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-4.webp';
    const VCh4s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/velke-chaty/velke-chaty-4-s.webp';


    const velkeChaty = [
        {
            name: "Velké chaty",
            description:
                "Ideálním ubytováním pro rodinu je velká chata. Dvě chaty nabízí 4 dvoulůžkové pokoje, tři chaty mají 2 čtyřlůžkové pokoje (celková kapacita 32 míst). Chaty disponují vybavenou kuchyňskou linku, vařičem a ledničkou. Samozřejmostí je i sprcha s teplou vodou a sociální zařízení.",
            gallery: [VCh0, VCh1, VCh2, VCh3, VCh4],
            thumbnails: [VCh0s, VCh1s, VCh2s, VCh3s, VCh4s]
        }
    ];

    return (
       
        <div className="ubytko-content">
            <Gallery data={velkeChaty}/>
        </div>
        
    )
}

export default VelkeChatyPage