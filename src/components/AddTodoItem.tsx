import React, { FC, useState } from "react";
import { JsonItem } from "../types";

type AddTodoItemProps = {
  addItem: (item: JsonItem) => void;
  getNewId: () => number;
};

export const AddTodoItem: FC<AddTodoItemProps> = ({ addItem, getNewId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleAddItem = () => {
    const newTodo: JsonItem = {
      id: getNewId(),
      title,
      userId: 1,
      completed: false,
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
