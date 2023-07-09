import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/users";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
  devTools: process.env.NODE_ENV === "development",
});
