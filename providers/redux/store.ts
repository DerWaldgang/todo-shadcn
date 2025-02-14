import { todoReducer } from "@/entities/todo";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch

