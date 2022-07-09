import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {


    return (
        <>
            {todos.map((todo, index) => <TodoItem key={index} id={index} todo={todo} deleteTodo={deleteTodo} />)
            }

        </>
    );
};

export default TodoList;
