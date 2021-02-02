import React, { FC, useEffect, useState } from "react";
import { JsonItem } from "../types";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem as TodoItemComponent } from "./TodoItem";
import "./TodoList.css";
import { useTodoList } from "./useTodoList";

type TodoListProps = {
  items: JsonItem[];
};

export const TodoList: FC<TodoListProps> = ({ items: itemsProps }) => {
  const [getNewId, deleteItem, addItem, items] = useTodoList(itemsProps);

  return (
    <div className="todoList">
      {items.map((item) => (
        <TodoItemComponent key={item.id} {...item} deleteItem={deleteItem} />
      ))}
      <AddTodoItem addItem={addItem} getNewId={getNewId} />
    </div>
  );
};
