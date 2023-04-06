import React, { useEffect, useState } from 'react'

export const toDoContext = React.createContext();

export const ToDosProvider = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    
    useEffect (() => {
        localStorage.setItem("todo", JSON.stringify(todoList))
    }, [todoList])

    const addTodo = async (todo) => {
        // setTodoList([...todoList, todo])
        console.log(todo)
        const res = await fetch("http://localhost:4000/todo", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(todo)
        })
        const data = await res.json()
        console.log(data)
    }

    const getTodos = async () => {
        const res = await fetch('http://localhost:4000/todo')
        const data = await res.json()
        setTodoList(data.todos)
        console.log(data)
    }

    return (
        <toDoContext.Provider value={{ todoList, setTodoList, addTodo, getTodos}}>
            {children}
        </toDoContext.Provider>
    )
}