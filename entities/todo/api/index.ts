import { Todo } from "../model/types/todoState";

export const TODO_MOCK_API = {
  get: () => new Promise<Todo[]>(resolve => 
    setTimeout(() => resolve([{ id: 1, text: 'Initial Todo', completed: false }]), 5000)
  ),
  post: (text: string) => new Promise<Todo>(resolve => 
    setTimeout(() => resolve({ id: parseInt(Math.random().toString().slice(2)), text, completed: false }), 500)
  ),
  put: (todo: Todo) => new Promise<Todo>(resolve => 
    setTimeout(() => resolve(todo), 500)
  ),
  delete: (id: number) => new Promise<number>(resolve => 
    setTimeout(() => resolve(id), 500)
  ),
};