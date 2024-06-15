import Todo from "./Components/Todo"
import AddTodo from "./Components/AddTodo";
import { BrowserRouter as Router } from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <AddTodo/>
      <Todo/>
    </Router>
    </>
  )
}

export default App
