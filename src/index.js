import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// https://redux.js.org/introduction/three-principles/
// Third of three principles : You must not mutate(mofify) state.
// Return new state object, instead of mutating thre previous state.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      break;
  }
};

const store = createStore(reducer);

store.subscribe();

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
