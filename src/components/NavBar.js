import { CartWidget } from "./CartWidget";


function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <span className="material-symbols-outlined">
                        star_half</span>
                </div>

                <ul className="options">
                    <li className="inicio"><a href="#">HOME</a></li>
                    <li><a href="#">OFERTAS</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <div className="submit">Log in</div>
                <CartWidget />
            </div>
            <div>
                <h2>Las ofertas de la semana</h2>
            </div>
        </>
    )
}

export default Navbar;