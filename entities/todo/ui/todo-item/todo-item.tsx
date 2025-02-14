import { Button, Checkbox } from "@/shared/ui";
import { FC } from "react";
import { Todo } from "../../model/types/todoState";
import { useAppDispatch } from "@/providers/redux/store";
import { deleteTodo, toggleTodo } from "../../model/slice/todoSlice";
import { cn } from "@/shared/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between h-16 p-4 border rounded-lg w-full">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => dispatch(toggleTodo(todo))}
        />
        <span className={cn(todo.completed && "line-through text-gray-400")}>
          {todo.text}
        </span>
      </div>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </Button>
    </div>
  );
};
