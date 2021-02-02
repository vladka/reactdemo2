import { useEffect, useState } from "react";
import { JsonItem } from "../types";

export const useTodoList = (itemsProps: JsonItem[], pageSize = 10) => {
  const [items, setItems] = useState(itemsProps);
  const [nextId, setNextId] = useState(items.length);
  const totalCount = items.length;
  const pageCount = Math.ceil(totalCount / pageSize);

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

  return {getNewId, deleteItem, addItem, items, totalCount, pageCount};
};
