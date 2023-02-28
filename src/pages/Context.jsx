import React, { useState } from "react";
import Completed from "./Completed";
import Home from "./Home";
import InProgress from "./InProgress";


export const InputContext = React.createContext();

export const Context = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("allTasks")) || [])
    const [task, setTask] = useState("");

    return (
        <InputContext.Provider value={{ isVisible, setIsVisible, allTasks, setAllTasks, task, setTask }} >
            <section>
                <Home />
                <InProgress />
                <Completed />
            </section>
        </InputContext.Provider>
    )

}

