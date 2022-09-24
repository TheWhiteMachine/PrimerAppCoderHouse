import Cargador from "./images/cargador.jpeg";
import Earpods from "./images/earpods.webp";
import Iphone from "./images/iphone.jpg";
import Monitor from "./images/monitor.webp";
import Teclado from "./images/teclado.jpg";

import ItemList from "./components/ItemList";

export const getProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
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
        ]),
      2000
    );
  });

export const getItem = ({ id }) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          <ItemList
            key={id}
            product={Array.from(getProducts.then().filter((p) => p.id == id))}
          />
        ),
      2000
    );
  });
