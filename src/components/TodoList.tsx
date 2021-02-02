import React, { useState } from "react";
import { TodoItem as TodoItemType } from "../types";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  items: TodoItemType[];
};

export const TodoList: React.FC<TodoListProps> = ({ items: itemsProps }) => {
  const [items, setItems] = useState(itemsProps);
  const [nextId, setNextId] = useState(itemsProps.length);

  const deleteItem = (id: number) => {
    setItems(items.filter((x) => x.id !== id));
  };

  const addItem = (newItem: TodoItemType) => {
    setItems([...items, newItem]);
    setNextId((prevId) => prevId + 1);
  };

  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} {...item} deleteItem={deleteItem} />
      ))}

      <AddTodoItem addItem={addItem} nextId={nextId} />

      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};
