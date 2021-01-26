import React, { FC, useEffect, useState } from "react";
import { TodoItem } from "../types";
import { TodoItem as TodoItemComponent } from "./TodoItem";
import "./TodoList.css";

type TodoListProps = {
  items: TodoItem[];
};

export const TodoList: FC<TodoListProps> = ({ items: itemsProps }) => {
  const [items, setItems] = useState(itemsProps);

  const addItem = (item: TodoItem) => {
    setItems([...items, item]);
  };

  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItemComponent key={item.id} {...item} />
      ))}
      <AddTodoItem addItem={addItem} totalCount={items.length} />
    </div>
  );
};

type AddTodoItemProps = {
  addItem: (item: TodoItem) => void;
  totalCount: number;
};

export const AddTodoItem: FC<AddTodoItemProps> = ({ addItem, totalCount }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleAddItem = () => {
    const newTodo: TodoItem = {
      id: totalCount,
      title,
      description,
    };
    console.log("add item ", newTodo);
    addItem(newTodo);
  };
  return (
    <>
      <div>
        title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        description:{" "}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleAddItem}> ADD</button>
    </>
  );
};
