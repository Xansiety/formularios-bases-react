import Todo from "./Todo";

const ListaTodos = ({ todos, deleteTodo,updateTodo }) => {
  return (
    <div>
      <h2 className="my-2 text-center">Mis tareas por hacer</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
        {todos.length === 0 && (
          <li className="list-group-item">No hay tareas por hacer</li>
        )}
      </ul>
    </div>
  );
};

export default ListaTodos;
