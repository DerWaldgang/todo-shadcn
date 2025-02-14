import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo, TodosState } from "../types/todoState";
import { TODO_MOCK_API } from "../../api";

const initialState: TodosState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  try {
    const response = await TODO_MOCK_API.get();
    return response;
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
});

export const addTodo = createAsyncThunk("todos/add", async (text: string, ) => {
  try {
    const response = await TODO_MOCK_API.post(text);
    return response;
  } catch (error) {
    throw new Error("Failed to add todo");
  }
});

export const toggleTodo = createAsyncThunk(
  "todos/toggle",
  async (todo: Todo) => {
    try {
      const response = await TODO_MOCK_API.put({
        ...todo,
        completed: !todo.completed,
      });
      return response;
    } catch (error) {
      throw new Error("Failed to toggle todo");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id: number) => {
    try {
      await TODO_MOCK_API.delete(id);
      return id;
    } catch (error) {
      throw new Error("Failed to delete todo");
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch todos";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add todo";
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.error = action.error.message || "Failed to toggle todo";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete todo";
      });
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
