import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase.config';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'


export const toDoContext = React.createContext();
const MY_AUTH_APP = "MY_AUTH_APP_1";

export const useAuth = () => {
    const context = useAuth(toDoContext)
    if(!context){
        console.log("error")
    }
    return context

}

export const ToDosProvider = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo")) || []);
    const [allUser, setAllUser] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false)
    
    const [googleUser, setGoogleUser] = useState("")
    useEffect(() => {
        const subscribed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("no hay usuario suscrito")
                setGoogleUser("")
            } else {
                setGoogleUser(currentUser)
            }  
        })
        return () => subscribed()
    }, [])
    

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }
    
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
        console.log(data)
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
        console.log(id)
        
    }

    const deleteAllTodos = async () => {
        await fetch('http://localhost:4000/deletealltodos',{
            method: "DELETE", 
        })  
        
    }

    const registerUser = async(user) => {
        // console.log(user)
        const res = await fetch("http://localhost:4000/register", {
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
        <toDoContext.Provider value={{ todoList, setTodoList, addTodo, getTodos, deleteTodo, allUser, setAllUser, registerUser, loginUser, newValue, editTodo, loginWithGoogle, googleUser, setIsAuthenticated, updateTodoStatus, deleteAllTodos}}>
            {children}
        </toDoContext.Provider>
    )
}