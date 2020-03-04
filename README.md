# Vanilla Redux

## Pure Redux

```js
import { createStore } from "redux";
```

### Store

Where the data is saved

- sadasd

```js
const store = createStore(Reducer);
```

### Reducer

The only function to change data

- Default value of state is start value (It will change after frist execute)
- Using switch with action is best usage

```js
const Reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};
```

### Dispatch

store.dispatch({ type: "type" }) : Sending type to store as action

- Parameter of dispatch must be object and have type in object (can't be other name)
- Instead of using string as type value, use variable to prevent misspelling mistake

```js
const ADD = "ADD";

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

// Usage
plus.addEventListener("click", handleAdd); // plus is button element
```

### Subsctibe

store.subscribe(function) : Execute funtion whenever state of store is updated

```js
const onChange = () => {
  number.innerText = countStore.getState(); // number is span element
};

countStore.subscribe(onChange);
```

---
---

## React Redux

---
