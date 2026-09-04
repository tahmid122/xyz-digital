import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth.slice";
import { baseApi } from "./api/base-api";

const rootReducer = combineReducers({
  auth: authReducer,

  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "root",

  storage,

  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "persist/PERSIST",
            "persist/REHYDRATE",
            "persist/REGISTER",
            "persist/FLUSH",
            "persist/PAUSE",
            "persist/PURGE",
          ],
        },
      }).concat(baseApi.middleware),
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
