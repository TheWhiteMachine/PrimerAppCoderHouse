import * as React from "react";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from '../components/CartContext'

function Navbar() {

  const { totalQty } = useCartContext();
  return (
    <>
      <div className="nav">
        <div className="logo">
          <span className="material-symbols-outlined">star_half</span>
        </div>
        <Link className="text-link" to="/">
          <h3>TECNOTRONICA</h3>
        </Link>
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
              <Link className="text-link" to={`/category/${"telefonia"}/`}>
                TELEFONIA
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link className="text-link" to={`/category/${"informatica"}/`}>
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
        <CartWidget cantProducts={totalQty} />
      </div>
      <div>
        <h2>Ofertas Tecno</h2>
      </div>
    </>
  );
}

export default Navbar;
