import { createSelector } from "@reduxjs/toolkit";

export const getTasks = state => state.taskbook.tasks

export const getTask = state => state.taskbook;

export const getFilter = state => state.filter;

export const selectFilteredTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    console.log("Calculating visible tasks");

    switch (filter) {
      case (filter !== "") :
        return tasks.filter(tasks => tasks.name.toLowerCase().includes(filter.toLowerCase()));
      default:
        return tasks.filter(tasks => tasks.name.toLowerCase().includes(filter.toLowerCase()));
    }
  }
);