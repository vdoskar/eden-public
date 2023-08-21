import { useEffect } from "react"
import Gallery from "../components/LightboxGallery"

function HlBudovaPage() {
    useEffect(() => {
        document.title = 'Hlavní budova | Ubytování | Eden Jinolice';
    }, []);

    const HlBudova0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-0.webp';
    const HlBudova0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-0-s.webp';
    const HlBudova1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-1.webp';
    const HlBudova1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-1-s.webp';
    const HlBudova2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-2.webp';
    const HlBudova2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-2-s.webp';
    const HlBudova3 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-3.webp';
    const HlBudova3s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-3-s.webp';
    const HlBudova4 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-4.webp';
    const HlBudova4s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-4-s.webp';
    const HlBudova5 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-5.webp';
    const HlBudova5s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-5-s.webp';
    const HlBudova6 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-6.webp';
    const HlBudova6s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-6-s.webp';
    const HlBudova7 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-7.webp';
    const HlBudova7s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-7-s.webp';
    const HlBudova8 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-8.webp';
    const HlBudova8s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-8-s.webp';
    const HlBudova9 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-9.webp';
    const HlBudova9s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/hlavni-budova/hlavni-budova-9-s.webp';


    const hlavniBudova = [
        {
            name: "Hlavní budova",
            description:
                "Ubytovat se lze i na hlavní budově, kde jsou pokoje ve složení jedno, dvou, tří a čtyřlůžkové. Kapacita 55 míst. Sprchy a toalety jsou na budově.",
            gallery: 
            [
                HlBudova0, HlBudova1, HlBudova2, HlBudova3, HlBudova4, HlBudova5, HlBudova6, HlBudova7, HlBudova8, HlBudova9
            ],
            thumbnails: 
            [
                HlBudova0s, HlBudova1s, HlBudova2s, HlBudova3s, HlBudova4s, HlBudova5s, HlBudova6s, HlBudova7s, HlBudova8s, HlBudova9s
            ],
        },
    ];

    return (
        <div className="ubytko-content">
            <Gallery data={hlavniBudova} />
        </div>
    )
}

export default HlBudovaPage