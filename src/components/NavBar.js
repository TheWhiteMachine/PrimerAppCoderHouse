import * as React from "react";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <span className="material-symbols-outlined">star_half</span>
        </div>
        <h3>TECNOTRONICA</h3>
        <ul className="options">
          <li className="inicio">
            <p>
              <Link className="text-link" to="/">
                HOME
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link className="text-link" to="#">
                TELEFONIA
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link className="text-link" to="#">
                INFORMATICA
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link className="text-link" to="#">
                CONTACT
              </Link>
            </p>
          </li>
        </ul>
        <div className="submit">Log in</div>
        <CartWidget />
      </div>
      <div>
        <h2>Las ofertas de la semana</h2>
      </div>
    </>
  );
}

export default Navbar;
