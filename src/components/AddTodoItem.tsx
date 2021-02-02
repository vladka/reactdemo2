import React, { useEffect, useState } from "react";
import { TodoItem } from "../types";

type AddTodoItemProps = {
  addItem: (item: TodoItem) => void;
  nextId: number;
};

export const AddTodoItem: React.FC<AddTodoItemProps> = ({
  addItem,
  nextId,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    const newItem: TodoItem = {
      id: nextId,
      title,
      description,
    };

    addItem(newItem);
  };

  return (
    <div>
      nextId bude {nextId}
      <div>
        title:{" "}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        description:{" "}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};
