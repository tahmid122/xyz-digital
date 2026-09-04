/* eslint-disable react-hooks/refs */
"use client";

import { useRef } from "react";

import { Provider } from "react-redux";

import { persistStore, type Persistor } from "redux-persist";

import { PersistGate } from "redux-persist/integration/react";

import { makeStore, type AppStore } from "./index";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  const storeRef = useRef<AppStore | null>(null);
  const persistorRef = useRef<Persistor | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  if (!persistorRef.current) {
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}
