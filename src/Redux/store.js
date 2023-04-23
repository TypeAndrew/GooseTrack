import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { tasksReduser } from "./tasks/tasks.slice";
import { filterReduser } from "./filter/filter.slice";
import { authReducer } from "./auth/authSlice";
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
// Редюсер слайсу
export const rootReducer = combineReducers({
    taskbook: tasksReduser,
    filter: filterReduser,
    auth: persistReducer(authPersistConfig, authReducer),  
})

//[...getGetDefaultMiddleware(), logger]
export const store = configureStore({
  devtools: true,
  reducer: rootReducer,  
    
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  }
);

export const persistor = persistStore(store);
/*export const store = configureStore({
  reducer: {
    phonebook: contactsReduser,
    filter: filterReduser,
  },
});*/
