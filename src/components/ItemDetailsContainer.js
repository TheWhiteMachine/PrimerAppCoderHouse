import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../Utils/Products";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails"


export const ItemDetailsContainer = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);



  useEffect(() => {
    id ?

      getProducts.then(data => setProduct(data.find(item => item.id == id)))

      :
      getProducts.then(data => setProduct(data))

  }, [id]);



  return (
    <>

      <div className="ListofItems">
        {

          id ?
            <ItemDetails key={product.id} product={product} />
            : <div>Cargando</div>

        }

      </div>
    </>
  );
}
