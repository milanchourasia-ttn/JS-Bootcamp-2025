import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleTodo = () => {
    if (inputTodo.trim()) {
      setTodos([...todos, inputTodo]);
      setInputTodo("");
    }
  };
  return (
    <div className="container">
      <div className="mt-50">
       <h3>Q4. Create a TodoList component that stores a list of to-dos in its state.</h3>

       <input 
        type="text" 
        value={inputTodo} 
        onChange={(e) => setInputTodo(e.target.value)} 
        placeholder="todo's"
      />
      <button onClick={handleTodo}>
        Add Todo
      </button>
      <ul className="mt-4 list-disc pl-5">
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
