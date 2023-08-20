import { useEffect } from "react"
import Heading from "../components/Heading"
import HeadingImage from "../assets/ub.webp"

function Page() {
    useEffect(() => {
        document.title = ' | Eden Jinolice';
    }, []);

    return (
        <div className="main">
            <Heading text="" img={HeadingImage}/>
        </div>
    )
}

export default Page