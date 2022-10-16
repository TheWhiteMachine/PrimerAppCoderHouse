import React, { PureComponent } from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../Utils/Products";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
import {
  collection,
  getDocs,
  addDoc,
  query,
  deleteDoc,
  updeateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../App/firebaseConfig";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getItems = async () => {
      const colRef = collection(db, "productos");
      const result = await getDocs(query(colRef));

      return typeof id == "undefined"
        ? result.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        : result.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .find((prod) => prod.id == id);

    };
    console.log("id", id)
    getItems().then((data) => setProduct(data));
    console.log("products", product);
  }, [id]);

  return (
    <>
      <div className="ListofItems">
        {product ?
          <ItemDetails key={product.id} product={product} />
          :
          <div>Cargando</div>
        }
      </div>
    </>
  );
};
