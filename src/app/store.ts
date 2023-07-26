import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/users";
import { notesApi } from "../services/notes";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      usersApi.middleware,
      notesApi.middleware
    );
  },
  devTools: process.env.NODE_ENV === "development",
});
