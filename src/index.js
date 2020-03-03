import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer : countModifier : the only function to change data
// Store : countStore : where the data is saved
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
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

// store.dispatch({ type : "type"}) : execute the function with sending type
// Parameter of dispatch must be object and have type (can't be other name)
// Instead of using string, use variable to prevent misspelling bug
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
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
