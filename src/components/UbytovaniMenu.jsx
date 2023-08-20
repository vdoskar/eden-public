import { Link } from "react-router-dom"

function UbytkoChild ({ item }) {

    return (
        <div className="ubytovani-menu-child">
            <Link to={`/${item.link}`} className="btn-primary">{item.title}</Link>
        </div>
    )
}

function UbytovaniMenu() {

    const ubytovaniList = [
        {
            title: "Hlavní budova",
            link: "ubytovani/hlavni-budova"
        },
        {
            title: "Velké chaty",
            link: "ubytovani/velke-chaty"
        },
        {
            title: "Dřevěné chatky",
            link: "ubytovani/drevene-chatky"
        },
        {
            title: "Okály",
            link: "ubytovani/okaly"
        },
        {
            title: "Mobilní domy",
            link: "ubytovani/mobilni-domy"
        },
        {
            title: "Karavany",
            link: "ubytovani/karavany"
        },
        {
            title: "Stanování",
            link: "ubytovani/stanovani"
        },
    ]

    return (
        <div className="ubytovani-menu">
            {ubytovaniList.map((ubytko, index) => (
                <UbytkoChild item={ubytko} key={index}/>
            ))}
        </div>
    )
}

export default UbytovaniMenu