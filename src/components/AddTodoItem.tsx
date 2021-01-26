import React, { FC, useState } from "react";
import { TodoItem } from "../types";

type AddTodoItemProps = {
  addItem: (item: TodoItem) => void;
  getNewId: () => number;
};

export const AddTodoItem: FC<AddTodoItemProps> = ({ addItem, getNewId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleAddItem = () => {
    const newTodo: TodoItem = {
      id: getNewId(),
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
