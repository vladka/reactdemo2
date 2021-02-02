import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { H1 } from "./components/atomic/H1";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";
import { JsonItem } from "./types";

//"https://jsonplaceholder.typicode.com/todos"
const App = () => {
  const [items, setItems] = useState<JsonItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      console.log("fetching");
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = (await result.json()) as JsonItem[];
      console.log(data);
      setItems(data);
    };
    loadData();
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
