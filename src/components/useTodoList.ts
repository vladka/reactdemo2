import { useEffect, useState } from "react";
import { JsonItem } from "../types";

export const useTodoList = (itemsProps: JsonItem[]) => {
  const [items, setItems] = useState(itemsProps);
  const [nextId, setNextId] = useState(items.length);

  useEffect(() => {
    setItems(itemsProps);
  }, [itemsProps]);

  const addItem = (item: JsonItem) => {
    setItems([...items, item]);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((x) => x.id !== id));
  };

  const getNewId = () => {
    setNextId((prev) => prev + 1);
    return nextId;
  };

  return [getNewId, deleteItem, addItem, items] as const;
};
