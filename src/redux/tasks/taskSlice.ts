import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';

//interface 
import { Task } from '../../models/Task';

const tasks: Array<Task> = [
    {
        id: '1',
        title: "Task 1",
        status: false,
        priority: "high",
        description: "First task example"
    },
    {
        id: '2',
        title: "Task 2",
        status: false,
        priority: "medium",
        description: "Second task example"
    },
    {
        id: '3',
        title: "Task 3",
        status: false,
        priority: "low",
        description: "Third task example"
    }
]

const taskSlice = createSlice({
    name: "tasks",
    initialState: tasks,
    reducers: {
        addTask: (state, action) => {
            state.unshift(action.payload)
        },
        deleteTask: (state, action) => {
            const id = action.payload
            const taskFounded = state.find((task) => task.id === id)

            if (taskFounded) {
                state.splice(state.indexOf(taskFounded), 1);
            }
        },
        editTask: (state, action) => {
            const id = action.payload.id
            const taskIndex = state.findIndex((task) => task.id === id)

            if (taskIndex >= 0) {
                state[taskIndex] = action.payload
            }
        },
        completeTask: (state, action) => {
            const id = action.payload
            const taskFounded = state.findIndex((task) => task.id === id)

            state[taskFounded].status = true
        }
    }
})

export const { addTask, deleteTask, editTask, completeTask } = taskSlice.actions
export default taskSlice.reducer