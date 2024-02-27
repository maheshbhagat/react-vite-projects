import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, text: "Learn React", completed: false }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}