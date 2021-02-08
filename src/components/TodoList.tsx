import React, { FC, useEffect, useState } from "react";
import { JsonItem } from "../types";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem as TodoItemComponent } from "./TodoItem";
import "./TodoList.css";
import { useTodoList } from "./useTodoList";

type TodoListProps = {
  items: JsonItem[];
};
const pageSize = 10;

export const TodoList: FC<TodoListProps> = ({ items: itemsProps }) => {
  const {
    getNewId,
    deleteItem,
    addItem,
    totalCount,
    pageCount,
    page,
    setPage,
    onePageItems
  } = useTodoList(itemsProps, pageSize);
  
  return (
    <>
      <div className="pages">
        <button onClick={() => setPage(page - 1)}>&lt;</button> {page + 1}/
        {pageCount} <button onClick={() => setPage(page + 1)}>&gt;</button>
      </div>
      <div className="todoList">
        {onePageItems.map((item) => (
          <TodoItemComponent key={item.id} {...item} deleteItem={deleteItem} />
        ))}
        <AddTodoItem addItem={addItem} getNewId={getNewId} />
      </div>
    </>
  );
};
