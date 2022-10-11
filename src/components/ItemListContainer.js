import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../Utils/Products";
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

export const ItemListContainer = ({ greetings }) => {
  const { id } = useParams();
  const [datos, setDatos] = useState();

  useEffect(() => {
    const getItems = async () => {
      const colRef = collection(db, "productos");
      const result = await getDocs(query(colRef));
      console.log("id", id);

      return typeof id === "undefined"
        ? result.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        : result.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }))
            .filter((prod) => prod.category == id);
    };
    getItems().then((data) => setDatos(data));
  }, [id]);
  console.log("datos fetcheados", datos);

  return (
    <div>
      {greetings}
      <ItemList datos={datos} />
    </div>
  );
};
