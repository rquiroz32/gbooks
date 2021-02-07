
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <ul key={"NavBar"} className="nav nav-tabs">
            <li key={"Home"} className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Google Books Search
                </Link>
            </li>
            <li key={"Search"} className="nav-item">
                <Link
                    to="/Search"
                    className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
                >
                    Search
                </Link>
            </li>
            <li key={"Saved"}  className="nav-item">
                <Link
                    to="/Saved"
                    className={window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
                >
                    Saved
                </Link>
            </li>
        </ul>
    )

}

export default Navbar;