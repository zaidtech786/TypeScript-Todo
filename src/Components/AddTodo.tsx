import React, { ChangeEvent, useContext, useState } from 'react'
import { TodoContext, useTodos } from '../Context/TodoContext';

const AddTodo = () => {
    const [text,setText] = useState("");
   const {todos,addTodo} = useTodos();
  return (
    <div>
        <input type='text' value={text} onChange={(e:ChangeEvent<HTMLInputElement>) =>setText(e.target.value)}/>
        <button onClick={() =>addTodo(text) }>Add</button>
    </div>
  )
}

export default AddTodo