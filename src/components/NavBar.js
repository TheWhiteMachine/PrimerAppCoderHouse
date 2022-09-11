import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom"

function Navbar() {



    return (
        <>
            <div className="nav">
                <div className="logo">
                    <span className="material-symbols-outlined">
                        star_half</span>

                </div>
                <h3><Link to="/">TECNOTRONICA</Link></h3>
                <ul className="options">
                    <li className="inicio"><link to="/">HOME</link></li>
                    <li><Link to="">TELEFONIA</Link></li>
                    <li><Link to="">INFORMATICA</Link></li>
                    <li><Link to="">CONTACT US</Link></li>
                </ul>
                <div className="submit">Log in</div>
                <CartWidget cantProducts={4} />
            </div>
            <div>
                <h2>Las ofertas de la semana</h2>
            </div>
        </>
    )
}

export default Navbar;