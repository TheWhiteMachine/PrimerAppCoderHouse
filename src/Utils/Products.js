import {
  collection,
  getDoc,
  addDoc,
  deleteDoc,
  updeateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../App/firebaseConfig";

export const getProducts = async () => {
  const dats = await getDoc(collection(db, "productos"));
  console.log("dats", dats);
  return dats;
};
