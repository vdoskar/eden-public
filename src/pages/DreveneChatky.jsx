import { useEffect } from "react"
import Gallery from "../components/LightboxGallery"

// import DrChatky0 from "../assets/ubytovani/drevene-chatky/drevene-chatky-0.webp";
// import DrChatky0s from "../assets/ubytovani/drevene-chatky/drevene-chatky-0-s.webp";
// import DrChatky1 from "../assets/ubytovani/drevene-chatky/drevene-chatky-1.webp";
// import DrChatky1s from "../assets/ubytovani/drevene-chatky/drevene-chatky-1-s.webp";
// import DrChatky2 from "../assets/ubytovani/drevene-chatky/drevene-chatky-2.webp";
// import DrChatky2s from "../assets/ubytovani/drevene-chatky/drevene-chatky-2-s.webp";
// import DrChatky3 from "../assets/ubytovani/drevene-chatky/drevene-chatky-3.webp";
// import DrChatky3s from "../assets/ubytovani/drevene-chatky/drevene-chatky-3-s.webp";

function DrChatkyPage() {
    useEffect(() => {
        document.title = 'Dřevěné chatky | Ubytování | Eden Jinolice';
    }, []);

    const DrChatky0 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-0.webp';
    const DrChatky0s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-0-s.webp';
    const DrChatky1 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-1.webp';
    const DrChatky1s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-1-s.webp';
    const DrChatky2 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-2.webp';
    const DrChatky2s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-2-s.webp';
    const DrChatky3 = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-3.webp';
    const DrChatky3s = 'https://cdn.edenjinolice.cz/web_assets/ubytovani/drevene-chatky/drevene-chatky-3-s.webp';

    const drChatky = [
        {
            name: "Dřevěné chatky",
            description:
                "Rekreační zařízení nabízí ubytování ve čtyřlůžkových chatkách s kapacitou 80 míst. Sprchy s teplou vodou a toalety jsou společné.",
            gallery: [DrChatky0, DrChatky1, DrChatky2, DrChatky3,],
            thumbnails: [DrChatky0s, DrChatky1s, DrChatky2s, DrChatky3s,],
        },
    ];

    return (
        <div className="ubytko-content">
            <Gallery data={drChatky} />
        </div>
    )
}

export default DrChatkyPage