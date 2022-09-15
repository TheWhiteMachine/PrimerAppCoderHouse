import React from "react";
import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails";
import Cargador from "../images/cargador.jpeg";
import Earpods from "../images/earpods.webp";
import Iphone from "../images/iphone.jpg";
import Monitor from "../images/monitor.webp";
import Teclado from "../images/teclado.jpg";
import { useParams } from "react-router-dom";

const productosList = [
  {
    id: 1,
    name: "Iphone",
    price: 500,
    pic: Iphone,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
    category: "telefonia",
  },
  {
    id: 2,
    name: "Earpods",
    price: 40,
    pic: Earpods,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
    category: "telefonia",
  },
  {
    id: 3,
    name: "Cargador",
    price: 20,
    pic: Cargador,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
    category: "telefonia",
  },
  {
    id: 4,
    name: "Monitor",
    price: 120,
    pic: Monitor,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
    category: "informatica",
  },
  {
    id: 5,
    name: "Teclado",
    price: 35,
    pic: Teclado,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
    category: "informatica",
  },
];

export const GetItem = () => {
  const [item, setItem] = useState([]);
  const task = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(console.log("promesa detalles resuelta"));
    }, 200)
  );
  useEffect(() => {
    task.then((data) => {
      setItem(productosList);
      console.log("asignado");
    });
  }, []);
  return item;
};

export function ItemDetailsContainer() {
  const item = GetItem();
  const { id } = useParams();

  return (
    <>
      {item.map((i) =>
        item.id === { id } ? (
          <ItemDetails key={item.id} product={item} />
        ) : (
          <> </>
        )
      )}
    </>
  );
}
