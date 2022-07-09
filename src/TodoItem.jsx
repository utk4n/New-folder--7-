const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <li>
      {todo}
      <button className="delete-todo" onClick={() => deleteTodo(id)}>DEL</button>
    </li>
  );
};

export default TodoItem;
