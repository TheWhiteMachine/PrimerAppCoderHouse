import NavBar from "./components/NavBar";
import "./App/styles.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={'Bienvenido'} />
      <h4> Agrego aqui las vistas de detalle</h4>
      <p>En la proxima entrega harmamos la vista ruteada de cada producto con su descripcion independiente</p>
      <ItemDetailsContainer />
    </div>
  );
}

export default App;
