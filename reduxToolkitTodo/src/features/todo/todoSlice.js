import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    enabledEdit: false,
    enabledAdd: true,
    todo: {},
    todos: [{ id: 1, text: "Toto Text" }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        
        updateTodo : (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text
                }
            })
            state.enabledAdd = true
            state.enabledEdit = false
        },

        emptyTodo : (state, action) => {
            state.todo =  {}
        },

        allowEditing : (state, action) => {
            state.enabledEdit = true
            state.enabledAdd = false
            state.todo = {
                id: action.payload.id,
                text: action.payload.text
            }
        }
    }
})
 export const {addTodo, removeTodo, updateTodo, emptyTodo, allowEditing} = todoSlice.actions

 export default todoSlice.reducer