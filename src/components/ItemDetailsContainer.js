import React from "react";
import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails";
import Cargador from "../images/cargador.jpeg";
import Earpods from "../images/earpods.webp";
import Iphone from "../images/iphone.jpg";
import Monitor from "../images/monitor.webp";
import Teclado from "../images/teclado.jpg";

const productosList = [
  {
    id: 1,
    name: "Iphone",
    price: 500,
    pic: Iphone,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
  },
  {
    id: 2,
    name: "Earpods",
    price: 40,
    pic: Earpods,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
  },
  {
    id: 3,
    name: "Cargador",
    price: 20,
    pic: Cargador,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
  },
  {
    id: 4,
    name: "Monitor",
    price: 120,
    pic: Monitor,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
  },
  {
    id: 5,
    name: "Teclado",
    price: 35,
    pic: Teclado,
    description:
      "Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.",
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

  return (
    <>
      {item.map((item) => (
        <ItemDetails key={item.id} product={item} />
      ))}
    </>
  );
}
