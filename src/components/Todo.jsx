const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p>{description}</p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(id)}
            >
              Eliminar
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => updateTodo(id)}
            >
              Actualizar
            </button>
          </div>
        </div>
        <span className="badge bg-warning">{priority && "Prioritario"}</span>
      </div>
    </li>
  );
};

export default Todo;
