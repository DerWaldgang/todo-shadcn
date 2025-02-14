import { ReduxState } from "@/providers/redux/store";

export const selectAllTodos = (state: ReduxState) => state.todos;