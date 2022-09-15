import Router from "./App/Router";
import "./App/styles.css";
import Provider from "./components/Provider";
import * as React from "react";

function App() {
  return (
    <div className="App">
      <Provider>
        <Router />

      </Provider>
    </div>
  );
}

export default App;
