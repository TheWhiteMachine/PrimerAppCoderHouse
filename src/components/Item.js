import { useEffect } from "react";
import { useState } from "react"

const productosList = [
    { id: 1, name: "iphone", price: 500, pic: "https://tienda.antel.com.uy/equipo/1106/iphone_13_pro" },
    { id: 2, name: "earpods", price: 40, pic: "https://phonetecuy.com/product/earpods-apple-entrada-auxiliar/" },
    { id: 3, name: "cargador", price: 20, pic: "https://circuit.com.uy/cargadores" },
    { id: 4, name: "monitor", price: 120, pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Frealistic-computer-monitor-screen-isolated-260nw-1363396547.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fmonitor&tbnid=cdY0Ic_Xc274TM&vet=12ahUKEwj1l6jntvb5AhWBrZUCHc48DMgQMygEegUIARDmAQ..i&docid=Al3GZym9NcLZRM&w=260&h=280&q=monitor%20pic&ved=2ahUKEwj1l6jntvb5AhWBrZUCHc48DMgQMygEegUIARDmAQ" },
    { id: 5, name: "Teclado", price: 35, pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthermaltake.azureedge.net%2Fpub%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F6bf0ed99c663954fafc930039201ed07%2Fdb%2Fimgs%2Fpdt%2Fangle%2FKB-TPX-BLBRUS-01_76ef2322081541ac8a20fee81f614b01.jpg&imgrefurl=https%3A%2F%2Fwww.thermaltake.com%2Ftt-premium-x1-rgb-cherry-mx-blue-keyboard.html&tbnid=klF0tRzBOzHAFM&vet=12ahUKEwj3qI2Jt_b5AhUOnpUCHanFAa0QMygEegUIARDuAQ..i&docid=jJfLxPkgd_vIiM&w=720&h=720&q=keyboard%20pic&ved=2ahUKEwj3qI2Jt_b5AhUOnpUCHanFAa0QMygEegUIARDuAQ" }
]


export default function Item() {
    const [datos, setDatos] = useState([]);
    const task = new Promise((resolve, reject) => (
        setTimeout(() => {
            resolve(console.log('promesa resuelta'))
        }, 200)
    ))
    useEffect(() => {
        task.then(setDatos(productosList))

    }, [])

    return (
        <div >
            {


                datos.map(item => <li className="productItem" key={item.id}><h2>{item.name}</h2> <img src={item.pic} alt="imgprodcut"></img><span> Precio {item.price}</span>  </li>)

            }
        </div >

    )
}