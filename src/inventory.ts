import { InventoryItem } from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  { name: "motor", price: 10, quantity: 10 },
  { name: "sensor", price: 12.5, quantity: 4 },
  { name: "LED", price: 1, quantity: 20 },
];

const calcInventoryValue = (array: InventoryItem[]) => {
  let allProducts = 0;
  array.forEach((item) => {
    allProducts += item.price * item.quantity;
  });
  return allProducts;
};

console.log(calcInventoryValue(inventory));
