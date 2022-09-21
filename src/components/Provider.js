import { createContext, useState } from "react";




const Provider = ({ children }) => {
    const [cart, setCart] = useState([
        {

        }
    ]);

    const addToCart = (item) => {

        // setCart((prevState) => [...prevState, item])

    }

    return (
        <AppContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();
export default Provider;