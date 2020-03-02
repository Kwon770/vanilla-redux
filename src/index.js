import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

// reducer : countModifier : the only function to change data
// Store : countStore : where the data is saved
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    // (count++ , count--) can update state
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);
const onChange = () => {
  console.log(countStore.getState());
  number.innerText = countStore.getState();
};
// store.subscribe(function) : execute funtion whenever state update
countStore.subscribe(onChange);

// store.dispatch(par) : execute the function with sending parameter
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// let count = 0;
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
