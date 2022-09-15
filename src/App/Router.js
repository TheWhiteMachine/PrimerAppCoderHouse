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
        <Route path={"/category:id/"} element={<ItemListContainer />} />
        <Route path={`/item:id/`} element={<ItemDetailsContainer />} />
        <Route
          path="*"
          element={<div style={{ margin: "50px" }}>Error 404 guey</div>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
