import { useState } from "react";

const Controlado = () => {
  //   const [title, setTitle] = useState("TODO #01");
  //   const [description, setDescription] = useState("Descripción del TODO #01");
  //   const [state, setState] = useState("pendiente");
  const [todo, setTodo] = useState({
    title: "TODO #01",
    description: "Descripción del TODO #01",
    state: "pendiente",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(todo.title, todo.description, todo.state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese TODO"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        // onChange={(event) => setTitle(event.target.value)}
        onChange={(event) => setTodo({ ...todo, title: event.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={todo.description}
        onChange={(event) =>
          setTodo({ ...todo, description: event.target.value })
        }
      />

      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={(event) => setTodo({ ...todo, state: event.target.value })}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <button className="btn btn-primary btn-block" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
