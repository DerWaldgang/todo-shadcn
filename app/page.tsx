"use client";

import { fetchTodos } from "@/entities/todo";
import { TodoForm } from "@/entities/todo/ui/todo-form/todo-form";
import { TodoList } from "@/entities/todo/ui/todo-list/todo-list";
import { useAppDispatch, useAppSelector } from "@/providers/redux/store";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
      <h1 className="text-4xl font-bold mb-4 row-start-1">Todo List</h1>
      <div className="flex-col justify-center items-center row-start-2 w-full h-full">
        <TodoForm />
        <TodoList todos={items} isLoading={isLoading} />
      </div>
    </main>
  );
}
