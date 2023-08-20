import { useEffect } from "react"
import Heading from "../components/Heading"

function NotFoundPage() {
    useEffect(() => {
        document.title = 'Ceník | Eden Jinolice';
    }, []);

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/ub.webp';

    return (
        <div className="main">
            <Heading text="404 Nenalezeno" img={HeadingImage}/>
            <div className="main-content">
                <section className="main-section">
                    <h2>Nenašli jste, co jste hledali?</h2>
                </section>
            </div>
        </div>
    )
}

export default NotFoundPage