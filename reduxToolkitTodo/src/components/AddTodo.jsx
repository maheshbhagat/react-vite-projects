import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {addTodo, emptyTodo, updateTodo} from "../features/todo/todoSlice"

export default function AddTodo() {

    const dispatch = useDispatch()
    let todo = useSelector(state => state.todo)
    const [id, setId] = useState(0)
    const enabledEdit = useSelector(state => state.enabledEdit)
    const enabledAdd = useSelector(state => state.enabledAdd)

    let [input, setInput] = useState("")
    
    if(todo.text && todo.text.length >=1){
        setInput(todo.text)
        setId(todo.id)
        todo = {}
        dispatch(emptyTodo(todo))
    }
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    const updateTodoHandler = () => {
        dispatch(updateTodo({'id':  id, 'text' : input}))
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

                {(enabledAdd===true) ? <button
                    type="submit"
                    className="inline-flex bg-slate-900 hover:bg-slate-950 text-white font-semibold py-2 px-4 ml-2 rounded-md">
                    <svg className="w-5 h-5 text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                    </svg>
                    <span className="ml-2">Submit</span>
                </button> : ''}

                {(enabledEdit===true) ? <button
                        onClick={updateTodoHandler}
                        type="button"
                        className="inline-flex bg-slate-900 hover:bg-slate-950 text-white font-semibold py-2 px-4 ml-2 rounded-md"
                        >
                        <svg className="w-5 h-5 text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <span className="ml-2">Update</span>
                    </button> : ''}
                
            </form>
        </div>
        </>
    )

}