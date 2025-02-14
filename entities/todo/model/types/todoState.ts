export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
export interface TodosState {
    items: Todo[];
    isLoading: boolean;
    error: string | null;
  }