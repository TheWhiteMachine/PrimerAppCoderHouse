import { createContext, useState } from "react";

const Provider = ({ children }) => {
    const { state, setState } = useState([
        {
            "title": "iphone",
            "price": "5000",
        },
        {
            "title": "Earpod",
            "price": "100",
        },
    ]);
    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();
export default Provider;