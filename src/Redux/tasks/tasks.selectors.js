import { createSelector } from '@reduxjs/toolkit';

export const getTasks = state => state.taskbook.tasks;

export const getTask = state => state.taskbook;

export const isLoading = state => state.taskbook.isLoading;

export const getFilter = state => state.filter;

export const selectFilteredTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    switch (filter) {
      case filter !== '':
        return tasks.filter(tasks =>
          tasks.email.toLowerCase().includes(filter.toLowerCase())
        );
      default:
        return tasks.filter(tasks =>
          tasks.email.toLowerCase().includes(filter.toLowerCase())
        );
    }
  }
);
