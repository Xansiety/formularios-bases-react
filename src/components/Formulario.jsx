import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
  //   const [title, setTitle] = useState("TODO #01");
  //   const [description, setDescription] = useState("Descripción del TODO #01");
  //   const [state, setState] = useState("pendiente");
  const [todo, setTodo] = useState({
    title: "TODO #01",
    description: "Descripción del TODO #01",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "titulo y descripción son obligatorios!",
        allowOutsideClick: false,
      });
    }
    // console.log(title, description, state);
    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado",
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tarea agregada con éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese TODO"
        className="form-control mb-2"
        name="title"
        value={title}
        // onChange={(event) => setTitle(event.target.value)}
        // onChange={(event) => setTodo({ ...todo, title: event.target.value })}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        // onChange={(event) =>
        //   setTodo({ ...todo, description: event.target.value })
        // }
        onChange={handleChange}
      />

      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          //   onChange={(event) =>
          //     setTodo({ ...todo, priority: event.target.checked })
          //   }
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="inputCheck">
          Dar Prioridad
        </label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        // onChange={(event) => setTodo({ ...todo, state: event.target.value })}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <button className="btn btn-primary btn-block" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default Formulario;
