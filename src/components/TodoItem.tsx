import React, { useEffect, useState } from "react";
import { JsonItem as TodoItemType } from "../types";
import { H1 } from "./atomic/H1";
import "./TodoItem.css";

type TodoItemProps = TodoItemType & {
  deleteItem: (id: number) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  userId,
  deleteItem,
}) => {
  return (
    <div className="todoItem">
      <H1>
        {title}
        <sup>#{id}</sup>
      </H1>
      <hr />
      <div className="description">{userId}</div>
      <button onClick={() => deleteItem(id)}>Smazat</button>
    </div>
  );
};
