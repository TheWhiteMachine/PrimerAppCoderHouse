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
      setProduct({ getProducts }.map(item => item.id == id))
      :
      setProduct({ getProducts })
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
