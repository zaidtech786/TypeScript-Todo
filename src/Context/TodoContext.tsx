import {  createContext, ReactNode, useContext, useEffect, useState } from "react"


export type Todo = {
    id:number;
    task:string;
    isCompleted:boolean;
}

export type TodosContextType = {
     todos:Todo[];
     addTodo:(task:string) => void;
     MarkCompleted:(id:number) => void
     deleteTodo:(id:number) => void
}


export const TodoContext = createContext<TodosContextType | null>(null)

export type todosProviderProps = {
    children:ReactNode
}

export const TodoProvider = ({children}:todosProviderProps) => {
    //  const jsonData = JSON.parse(localStorage.getItem("todos") )
    const [todos,setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") ))
    
    const addTodo = (task:string) => {
        setTodos( (prev) => {
        
           const newTodo:Todo[] = [
            {
                id: new Date().getMilliseconds(),
                task:task,
                isCompleted:false
            },
            ...prev
           ]
           return newTodo
        })
        }
    console.log(todos)

    const MarkCompleted = (id:number) => {
        let newTodo = todos.map( (todo) => {
            if(todo.id === id){
                return {...todo,isCompleted:!todo.isCompleted}
            }
            return todo
        });

        setTodos(newTodo)
    }

    const deleteTodo = (id:number) => {
        setTodos( (prev) => {
            let newTodo = prev.filter( (todo) => {
                    return todo.id!=id;
            });
            return newTodo
        })
    }

    useEffect( () => {
       localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

     return <TodoContext.Provider value={{todos,addTodo,MarkCompleted,deleteTodo}}>
        {children}
     </TodoContext.Provider>

}
    export const useTodos = () => {
       const todoConsumer = useContext(TodoContext);
       return todoConsumer;
    }