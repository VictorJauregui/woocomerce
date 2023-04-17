import React, { useCallback, useEffect, useMemo, useState } from 'react'


export const toDoContext = React.createContext();
const MY_AUTH_APP = "MY_AUTH_APP_1";

export const ToDosProvider = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    const [allUser, setAllUser] = useState([])
    // const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false) 
    
    const login = useCallback(function() {
        window.localStorage.setItem(MY_AUTH_APP, true);
        setIsAuthenticated(true)
    },[]);
    
    const logOut = useCallback(function() {
        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false)
    },[]);

    const newValue = useMemo(() => ({
        login,
        logOut,
        isAuthenticated
    }), [login, logOut, isAuthenticated]
        )
    

    useEffect (() => {
        localStorage.setItem("todo", JSON.stringify(todoList))
    }, [todoList])

    const addTodo = async (todo) => {
        
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
    }

    const deleteTodo = async (id) => {
        await fetch(`http://localhost:4000/deletetodo/${id}`,{
            method: "DELETE", 
        })  
        
    }

    const registerUser = async(user) => {
        const res = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            
        })
        const data = await res.json()
        console.log(data)
    }

    const loginUser = async (user) => {
        const res = await fetch ("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        console.log(data)
        if(data.ok){
            setIsAuthenticated(true)
            console.log(isAuthenticated)
        }
    }
    return (
        <toDoContext.Provider value={{ todoList, setTodoList, addTodo, getTodos, deleteTodo, allUser, setAllUser, registerUser, loginUser, newValue}}>
            {children}
        </toDoContext.Provider>
    )
}