import * as React from "react";
import { Link } from "react-router-dom";
import { ItemDetailsContainer } from "./ItemDetailsContainer";

const ShohDetails = () => {
  console.log("mostrar detalles");
  <Link to="/item:id" elemewnt={<ItemDetailsContainer />} />;
};

export default function Item({ product }) {
  return (
    <div className="item">
      <li className="productItem" key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.pic} alt="img"></img>
        <span> Precio {product.price}</span>

        <button onClick={() => ShohDetails()}>Detalles</button>
      </li>
    </div>
  );
}
