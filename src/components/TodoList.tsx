import React, { useState } from "react";
import { TodoItem as TodoItemType } from "../types";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  items: TodoItemType[];
};

export const TodoList: React.FC<TodoListProps> = ({ items: itemsProps }) => {
  const [items, setItems] = useState(itemsProps);

  const deleteItem = (id: number) => {
    setItems(items.filter((x) => x.id !== id));
  };

  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} {...item} deleteItem={deleteItem} />
      ))}

      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};
