import { Link } from "react-router-dom"

import translations from '../translations/ubytovani.json';
const lang = localStorage.getItem('lang') || 'cz';

function UbytovaniChild ({ item }) {
    return (
        <div className="ubytovani-menu-child">
            <Link to={`/${item.link}`} className="btn-primary">{item.title}</Link>
        </div>
    )
}

function UbytovaniMenu() {
    const ubytovaniList = [
        {
            title: translations[lang].types.mainBuilding.title,
            link: "ubytovani/hlavni-budova"
        },
        {
            title: translations[lang].types.bigCottage.title,
            link: "ubytovani/velke-chaty"
        },
        {
            title: translations[lang].types.woodenCottage.title,
            link: "ubytovani/drevene-chatky"
        },
        {
            title: translations[lang].types.okal.title,
            link: "ubytovani/okaly"
        },
        {
            title: translations[lang].types.mobileHome.title,
            link: "ubytovani/mobilni-domy"
        },
        {
            title: translations[lang].types.caravan.title,
            link: "ubytovani/karavany"
        },
        {
            title: translations[lang].types.tent.title,
            link: "ubytovani/stanovani"
        },
    ]

    return (
        <div className="ubytovani-menu">
            {ubytovaniList.map((ubytko, index) => (
                <UbytovaniChild item={ubytko} key={index}/>
            ))}
        </div>
    )
}

export default UbytovaniMenu