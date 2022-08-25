import NavBar from "./components/NavBar";
import "./App/styles.css";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={'Bienvenido'} />
    </div>
  );
}

export default App;
