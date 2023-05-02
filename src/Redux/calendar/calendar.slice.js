import { createSlice } from "@reduxjs/toolkit"
import initialState from "../calendar/initialState"


export const calendarSlice = createSlice({
    name:"calendar",
    initialState: initialState,
    reducers:{
        currentTime:(state,{payload})=>{
            
            return {...state, time:payload}
        },
        currentDay:(state,{payload})=>{
            return {...state, day: payload}
        },
        currentMonth:(state,{payload})=>{
            return{...state, month: payload}
        },
        currentYear:(state,{payload})=>{
       return {...state, year:payload}
    }}
})

export const calendarReduser= calendarSlice.reducer

export const {currentTime,currentDay, currentMonth,currentYear}= calendarSlice.actions