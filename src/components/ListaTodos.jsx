import React from "react";

const ListaTodos = ({ todos }) => {
  return (
    <div>
      <h2 className="my-2 text-center">Mis tareas por hacer</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTodos;