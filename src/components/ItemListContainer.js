import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

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

export const ItemListContainer = ({ greetings }) => {
  const [datos, setDatos] = useState([]);
  const task = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(console.log("promesa resuelta"));
    }, 200)
  );
  useEffect(() => {
    task.then(setDatos(productosList));
  }, []);

  return (
    <div>
      {greetings}

      <ItemCount stock={5} initial={1} />
      <ItemList datos={datos} />
    </div>
  );
};
