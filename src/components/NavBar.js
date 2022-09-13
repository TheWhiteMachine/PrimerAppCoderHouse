import * as React from 'react';
import { CartWidget } from "./CartWidget";


function Navbar() {



    return (
        <>
            <div className="nav">
                <div className="logo">
                    <span className="material-symbols-outlined">
                        star_half</span>

                </div>
                <h3>TECNOTRONICA</h3>
                <ul className="options">
                    <li className="inicio"><p>HOME</p></li>
                    <li><p href="#">OFERTAS</p></li>
                    <li><p href="#">ABOUT US</p></li>
                    <li><p href="#">CONTACT</p></li>
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