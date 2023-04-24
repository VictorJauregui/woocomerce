import React, { useCallback, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast';


export const toDoContext = React.createContext();
const MY_AUTH_APP = "MY_AUTH_APP_1";



export const ToDosProvider = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    const [allUser, setAllUser] = useState([])
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
    }, [])

    const addTodo = async (todo) => {
        
        const res = await fetch("http://localhost:4000/todo", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(todo)
        })
        const data = await res.json()

        setTodoList([...todoList, data.todo])
        
    }

    const editTodo = async (todoId, newValue) => {
        console.log(todoId, newValue)
        
        const res = await fetch("http://localhost:4000/edittodo", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({todoId, newValue})
        })
        const data = await res.json()
        return data
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

    const deleteAllTodos = async () => {
        await fetch('http://localhost:4000/deletealltodos',{
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
        
        if(data.ok){
            setIsAuthenticated(true)
        }
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

        if(data.ok){
            setIsAuthenticated(true)
        } else {
            toast.error("Este usuario no existe")
        }
    }

const updateTodoStatus = async(todo, status) => {
    const res = await fetch ("http://localhost:4000/updatetodostatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({todo, status})
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <toDoContext.Provider value={{ todoList, setTodoList, addTodo, getTodos, deleteTodo, allUser, setAllUser, registerUser, loginUser, newValue, editTodo, setIsAuthenticated, isAuthenticated, updateTodoStatus, deleteAllTodos}}>
            {children}
        </toDoContext.Provider>
    )
}