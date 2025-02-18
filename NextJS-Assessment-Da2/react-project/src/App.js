import HelloWorld from "./components/Counter";
import Parent from "./components/Parent";
import TodoList from "./components/TodoList";
import Toggles from "./components/Toggles";
import './App.css';

function App() {
  return (
    <>
      <HelloWorld />
      <Parent />
      <TodoList />
      <Toggles />
    </>
  );
}

export default App;
