import { useState } from "react"
import {useDispatch} from "react-redux"
import {addTodo, removeTodo} from "../features/todo/todoSlice"



export default function AddTodo() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
        <div className="flex items-center space-x-4 justify-center py-3">
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    className="border text-white bg-slate-900 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter text here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-950 text-white font-semibold py-2 px-4 ml-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
        </>
    )

}