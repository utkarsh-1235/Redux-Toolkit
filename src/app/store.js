import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
const store = configureStore({
    reducers: {todoReducer}
})

export default store;