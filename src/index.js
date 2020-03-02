import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer : countModifier : the only function to change data
// Store : countStore : where the data is saved
const countModifier = (count = 0) => {
  return count;
};
const countStore = createStore(countModifier);

let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

// plus.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
