import React from "react";
import { TodoItem as TodoItemType } from "../types";
import { H1 } from "./atomic/H1";
import "./TodoItem.css";

type TodoItemProps = TodoItemType & {
  deleteItem: (id: number) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  deleteItem,
}) => {
  return (
    <div className="todoItem">
      <H1>
        {title} <sup>#{id}</sup>
      </H1>
      <hr />

      <div className="description">{description}</div>
      <button onClick={() => deleteItem(id)}>Delete</button>
      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};
