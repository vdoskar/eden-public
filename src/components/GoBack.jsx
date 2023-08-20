import { useEffect } from "react"
import { Link } from "react-router-dom"

function GoBack({ to }) {

    const cil = location.origin + "/" + to

    return (
        <div className="go-back">
            <Link to={cil}>Zpět </Link>
        </div>
    )
}

export default GoBack