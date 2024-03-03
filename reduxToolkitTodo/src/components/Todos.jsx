import { useDispatch, useSelector } from "react-redux"
import { removeTodo, allowEditing } from "../features/todo/todoSlice"

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        <div className="w-full max-w-md mx-auto">
            <ul className="divide-y divide-gray-200">
                {todos.map((todo) => (
                    <li key={todo.id} className="bg-slate-800 text-white flex justify-between items-center px-2 py-2">
                        <span>{todo.text}</span>
                        <div className="justify-end">
                            <button onClick={() => dispatch(allowEditing(todo))} className="text-red-500 hover:text-red-700">✏️</button>
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 hover:text-red-700">❌</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )

}

export default Todos