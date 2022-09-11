import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemListContainer from "../components/ItemListContainer";
import Layout from "./Layout";

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route elementes={<Layout />}>
                <Route path="/" element={<ItemListContainer greetings={'Bienvenido'} />} />

            </Route>
        </Routes>
    </BrowserRouter >
}

export default Router;