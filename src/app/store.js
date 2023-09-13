import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { jsonFakeAPI } from "../services/api/jsonFakeAPI";

export const store = configureStore({
  reducer: {
    [jsonFakeAPI.reducerPath]: jsonFakeAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonFakeAPI.middleware),
});

// setupListeners(store.dispatch);
