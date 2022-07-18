const { createSlice, configureStore } = require("@reduxjs/toolkit");

// Gérer les taches 
const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        addTask: (state, action) => {
            // action => {type: "todo/addTask", payload: "Ranger les livres"}
            const newTask = {
                id: Date.now(),
                text: action.payload,
                done: false,
            }
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            // action => {type: "todo/toggleTask", payload: 2}
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            // action => {type: "todo/deleteTask", payload: 2}
            state = state.filter(t => t.id !== action.payload);
            return state;
        },
    },
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})




