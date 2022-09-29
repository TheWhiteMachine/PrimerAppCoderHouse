
import { collection, getDocs, addDoc, deleteDoc, updeateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../App/firebaseConfig";


export const getProducts = () => {

    const [products, setProducts] = useState()

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, "productos"));
            console.log("datadoc : ", data.docs);
            const datafetch = data.docs.map(doc => doc.data());
            setProducts(datafetch)
        }
        getData()

    }, [])
    return (

        { products }


    )
}
