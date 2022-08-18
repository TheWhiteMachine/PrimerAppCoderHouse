import personas from "./data/personas.json";

function App() {
  return (
    <div className="App">
     <h1>Hola Coder House</h1>
      <div >
       { personas.map(persona =>(
          <div > 
            <p>Nombre:<strong>{persona.nombre}</strong> </p>
            <p>Edad: <strong>{persona.edad}</strong></p>
            <line></line>
            <br />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
