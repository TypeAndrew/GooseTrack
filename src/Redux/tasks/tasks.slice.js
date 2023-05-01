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
        state.tasks = taskList
        state.tasks = taskList.filter(
          task => task.date.slice(0, 7) === timeNormalize(dateMonth)
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

function timeNormalize(value) {
  const date = new Date(value);
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 2);
  const currentDateTime = startOfMonth.toISOString().slice(0, 7);

  return String(currentDateTime);
}

export const tasksReduser = tasksSlice.reducer;
