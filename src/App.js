import personas from "./data/personas.json";

function App() {
  return (
    <div className="App">
     <h1>Hola Coder House</h1>
      <div >
       { personas.map(persona =>(
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <br />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
