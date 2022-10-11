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
    };
    getItems()
      .then((data) => setProduct(data))
      .filter((p) => p.id == id);
    console.log("params", id);
  }, [id]);
  console.log("products", product);

  return (
    <>
      <div className="ListofItems">
        {id ? (
          <ItemDetails key={product.id} product={product} />
        ) : (
          <div>Cargando</div>
        )}
      </div>
    </>
  );
};
