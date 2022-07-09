import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const handleInput = () => {
    if (input == "" || input.length < 3) {
      return false;
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <form action="">
      <input
      maxLength={35}
        type="text"
        placeholder="Please Enter a Todo!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
      id="add-btn"
        onClick={(e) => {
          handleInput();
          e.preventDefault();
        }}
      >
        ADD TODO
      </button>
    </form>
  );
};

export default TodoForm;
