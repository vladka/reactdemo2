import React, { useEffect, useState } from "react";
import { TodoItem as TodoItemType } from "../types";
import { H1 } from "./atomic/H1";
import "./TodoItem.css";

type TodoItemProps = TodoItemType;

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <div className="todoItem">
      <H1>
        {title}
        <sup>#{id}</sup>
      </H1>
      <hr />
      <div className="description">{description}</div>
    </div>
  );
};
