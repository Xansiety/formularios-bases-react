import React from "react";
import Controlado from "./components/Controlado";
import { NoControlados } from "./components/NoControlados";

const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      <br></br>
      {/* <NoControlados /> */}
      <Controlado />
    </div>
  );
};

export default App;
