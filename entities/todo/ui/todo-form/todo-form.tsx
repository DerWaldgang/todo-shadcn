import { useAppDispatch } from "@/providers/redux/store";
import { useState } from "react";
import { addTodo } from "../../model/slice/todoSlice";
import { Button, Input } from "@/shared/ui";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const isDisabled = !Boolean(text.trim())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(text.trim()));
    setText("");
    console.log(text, "text");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center space-x-2 mb-4"
    >
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="max-w-64"
        placeholder="Add new todo..."
      />
      <Button type="submit" variant={"default"} disabled={isDisabled}>
        Add
      </Button>
    </form>
  );
};
