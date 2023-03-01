import React, { useEffect, useState } from 'react'

export const toDoContext = React.createContext();

export const ToDosProvider = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    
    useEffect (() => {
        localStorage.setItem("todo", JSON.stringify(todoList))
    }, [todoList])

    return (
        <toDoContext.Provider value={{ todoList, setTodoList}}>
            {children}
        </toDoContext.Provider>
    )
}