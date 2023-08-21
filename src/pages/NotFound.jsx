import { useEffect } from "react"
import Heading from "../components/Heading"

function NotFoundPage() {
    useEffect(() => {
        document.title = 'Ceník | Eden Jinolice';
    }, []);

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/ub.webp';

    return (
        <div className="main">
            <Heading text="404 STRÁNKA NENALEZENA" />
        </div>
    )
}

export default NotFoundPage