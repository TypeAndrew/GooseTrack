import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = "";

const filterSlice = createSlice({
    // Ім'я слайсу
    name: "filter",
    // Початковий стан редюсера слайсу
    initialState: filterInitialState,
    // Об'єкт редюсерів
    reducers: {
        setFilter(state, action) {
            return state = action.payload;
     
        },
    },

});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReduser = filterSlice.reducer;