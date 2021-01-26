import React, { FC, useEffect, useState } from "react";
import { TodoItem } from "../types";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem as TodoItemComponent } from "./TodoItem";
import "./TodoList.css";

type TodoListProps = {
  items: TodoItem[];
};

export const TodoList: FC<TodoListProps> = ({ items: itemsProps }) => {
  const [items, setItems] = useState(itemsProps);
  const [nextId, setNextId] = useState(items.length);

  const addItem = (item: TodoItem) => {
    setItems([...items, item]);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((x) => x.id !== id));
  };

  const getNewId = () => {
    setNextId((prev) => prev + 1);
    return nextId;
  };

  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItemComponent key={item.id} {...item} deleteItem={deleteItem} />
      ))}
      <AddTodoItem addItem={addItem} getNewId={getNewId} />
    </div>
  );
};
