import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailsContainer } from "../components/ItemDetailsContainer";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route patch="/category/:id" element={<ItemListContainer />} />
        <Route patch="/item/:id" element={<ItemDetailsContainer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
