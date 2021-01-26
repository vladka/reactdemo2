import React, { useEffect, useState } from "react";
import "./Counter.css";

type CounterProps = {
  initialValue: number;
};

type BtnState = "normal" | "warning";

export const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const [state, setState] = useState<BtnState>("normal");

  const handleClick = () => {
    setCount(count - 1);
    if (count === 3) {
      setState("warning");
    }
  };

  useEffect(() => {
    console.log("volal se useEffect ", document.body.offsetWidth);
    const handleId = setTimeout(() => {
      console.log("timeout has run");
      //document.body.style.zoom = "3";
    }, 3000);
    return () => {
      console.log("uklizim timeout", handleId);
      clearTimeout(handleId);
    };
  }, [count, state]);

  return (
    <button className={`${state}Btn`} type="button" onClick={handleClick}>
      {count}
    </button>
  );
};
