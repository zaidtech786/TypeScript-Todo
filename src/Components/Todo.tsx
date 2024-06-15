import React, { useContext } from 'react'
import {  TodoContext } from '../Context/TodoContext'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Todo = () => {
  const {todos,MarkCompleted,deleteTodo} = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  console.log(todosData);

  let data = todos;

  if(todosData == "active"){
     data = data.filter( (todo) => !todo.isCompleted)
  }

  if(todosData == "completed"){
     data = data.filter( (todo) => todo.isCompleted)
  }

  return (
    <div>
     <Link to="/"><span style={{margin:"10px",cursor:"pointer"}}>All</span></Link> 
      <Link to="/?todos=active"><span style={{margin:"10px",cursor:"pointer"}}>Active</span></Link>
      <Link to="/?todos=completed"><span style={{margin:"10px",cursor:"pointer"}}>Completed</span></Link>
      {
        data.map( (task:any) => {
          return(
            <div key={task.id} style={{marginTop:"20px"}}>
              <input type="checkbox"  id={task.id} checked={task.isCompleted} onChange={() => MarkCompleted(task.id)} />
              <label htmlFor={task.id} style={{textDecoration:task.isCompleted ? "line-through" : ""}}>{task.task}</label>
              {
                task.isCompleted 
                 &&
                 <button onClick={() => deleteTodo(task.id)}>Delete</button>
                 
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Todo