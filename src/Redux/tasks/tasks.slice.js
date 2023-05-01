import { createSlice } from '@reduxjs/toolkit';
import { getTasksThunk, postTasksThunk, deleteTasksThunk, patchTasksThunk } from './tasks.thunk';

const tasksInitialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'taskbook',
  initialState: tasksInitialState,

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
      })
      .addCase(patchTasksThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.tasks.indexOf(payload.id);
        state.tasks = state.tasks.splice(idx, 1, payload);
      });
  },
});

function timeNormalize(value) {
  const date = new Date(value);
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 2);
  const currentDateTime = startOfMonth.toISOString().slice(0, 7);

  return String(currentDateTime);
}

export const tasksReduser = tasksSlice.reducer;
