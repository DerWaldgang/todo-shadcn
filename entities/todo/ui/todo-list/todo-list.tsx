import { FC, useMemo } from "react";
import { Todo } from "../../model/types/todoState";
import { TodoItem } from "../todo-item";
import { Skeleton } from "@/shared/ui";

interface TodoListProps {
  todos: Todo[];
  isLoading: boolean;
}

export const TodoList: FC<TodoListProps> = ({ todos, isLoading }) => {
  const LoadingContent = useMemo(() => {
    
    const skeletons = Array(5)
      .fill(0)
      .map((_, i) => i + 1);

    return (
      <>
        {skeletons.map((skeleton) => (
          <Skeleton key={skeleton} className="h-14 w-full" />
        ))}
      </>
    );
  }, [isLoading]);

  return (
    <div className="flex-col justify-center items-center space-y-2 w-full">
      {isLoading
        ? LoadingContent
        : todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};
