import { createSlice } from '@reduxjs/toolkit';
import { getTasksThunk, postTasksThunk, deleteTasksThunk } from './tasks.thunk';

const tasksInitialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  // Ім'я слайсу
  name: 'taskbook',
  // Початковий стан редюсера слайсу
  initialState: tasksInitialState,
  // Об'єкт редюсерів

  extraReducers: builder => {
    builder
      .addCase(getTasksThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTasksThunk.fulfilled, (state, { payload }) => {
        const taskList = payload.data.tasks;
        const dateMonth = payload.dateMonth;

        state.isLoading = false;
        state.error = null;
        state.tasks = taskList.filter(
          task => task.date.slice(5, 7) === addFirstZero(dateMonth)
        );
      })
      .addCase(getTasksThunk.rejected, state => {
        state.error = true;
      })
      .addCase(postTasksThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(payload);
      })
      .addCase(deleteTasksThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.tasks = state.tasks.filter(el => el.id !== payload.id);
      });
  },
});

//

//export const { setContacts, deleteContacts } = contactsSlice.actions;

function addFirstZero(value) {
  return String(value).padStart(2, '0');
}

export const tasksReduser = tasksSlice.reducer;
