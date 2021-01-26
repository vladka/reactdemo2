import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { H1 } from "./components/atomic/H1";
import { Counter } from "./components/Counter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <H1>Todo app</H1>
        <TodoList items={fakeData} /> */}

        <Counter initialValue={10} />
      </header>
    </div>
  );
};

export default App;
