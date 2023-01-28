import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaTodos from "./components/ListaTodos";

const initialStateTodos = [
  {
    id: 1,
    title: "TODO #01",
    description: "Descripción del TODO #01",
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: "TODO #02",
    description: "Descripción del TODO #02",
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: "TODO #03",
    description: "Descripción del TODO #03",
    state: true,
    priority: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="container mt-2 mb-2">
      <h1 className="my-2 text-center">Tareas por hacer</h1>
      {/* <NoControlados /> */}
      <Formulario addTodo={addTodo} />
      <br></br>
      <ListaTodos todos={todos} />
    </div>
  );
};

export default App;
