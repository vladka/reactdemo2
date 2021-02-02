import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { H1 } from "./components/atomic/H1";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./types";

const fakeData: Array<TodoItem> = [
  { id: 0, title: "Naucit se spanelsky", description: "lepe Katalansky" },
  { id: 1, title: "Naucit se Reactit" },
];

type JsonTodoItem = {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
};

const toTodoItem = ({ id, title, userId }: JsonTodoItem) => {
  const todoItem: TodoItem = {
    id,
    title,
    description: `item of user ${userId}`,
  };
  return todoItem;
};

const App = () => {
  const [items, setItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    const f = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data: JsonTodoItem[] = await result.json();
      console.log(data);
      setItems(data.map(toTodoItem));
    };

    f();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <H1>Todo app</H1>
        <TodoList items={items} />

        {/* <Counter initialValue={10} /> */}
      </header>
    </div>
  );
};

export default App;
