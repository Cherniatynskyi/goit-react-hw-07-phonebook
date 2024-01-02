import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from "./filterSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsApi } from "./contactsSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), contactsApi.middleware]
})

export const persistor = persistStore(store)