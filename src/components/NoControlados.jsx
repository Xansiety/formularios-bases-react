import React, { useRef } from "react";

export const NoControlados = () => {
  const form = useRef(null); // Null por que el formulario no existe aun cuando se renderiza el componente

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form.current);
    // console.log(new FormData(form.current)) // FormData es una clase que nos permite acceder a los datos del formulario
    const formData = new FormData(form.current); // formData es una instancia de la clase FormData
    console.log([...formData.entries()]); // entries() es un método de la clase FormData que nos permite acceder a los datos del formulario

    const { title, description, state } = Object.fromEntries([
      ...formData.entries(),
    ]); // fromEntries() es un método de la clase Object que nos permite convertir un array en un objeto
    console.log({ title, description, state });

    // Validación de los datos
    if (!title.trim() || description.trim() === "") {
      console.log("Datos vacíos, llenar todos los campos");
      return;
    }
    // Enviar los datos al servidor
    console.log("Datos enviados al servidor", { title, description, state });
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese TODO"
        className="form-control mb-2"
        name="title"
        defaultValue={"Tarea por defecto"}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        defaultValue={"Descripción por defecto"}
      />

      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completado"
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
