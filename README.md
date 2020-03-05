# Vanilla Redux

## [Three Principles of Redux](https://redux.js.org/introduction/three-principles/)

### 1. Single source of truth

The state of your whole application is stored in an object tree within a single store

### 2. State is read-only

The only way to change the state is to emit an action, an object describing what happened

### 3. Changes are made with pure functions

Reducer must return new state object, instead of mutating(modifying) the previous state

---

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

## React Redux

Most code related with creating store is same with pure Redux

### Using redux from other components

```js
// Store.js
import { createStore } from "redux";

const store = createStore(reducer);
export default store;
```

```js
// Index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// App.js
import React from "react";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
    </Router>
  );
}

export default App;
```

### Update state and Dispatching from other components

[Document](https://react-redux.js.org/using-react-redux/connect-mapstate)

- **mapStateToProps(state, ownProps)**
  - The function to return data of store to connected component **as props**
  - The function for selecting the part of data from store
- **mapDispatchToProps(dispatch, ownProps)**
  - The function to return data of store to connected component **as props**
  - The function for dispatching actions to store
- **connect(mapStateToProps, mapDispatchingToProps)(component)**
  - The function to connect react component to redux store

<br>

**Below Code is written only for explaining redux ! Don't copy and past on your code !**

```js
// Home.js

import { connect } from "react-redux";
import { actionCreators } from "../Store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}> ~~ </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.key} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

```js
// ToDo.js

function ToDo({ ~~ }) {
  return <li> ~~ </li>;
}

// ~~
```

```js
// Store.js

const addToDo = text => {
  return { ~~ };
};

const deleteToDo = id => {
  return { ~~ };
};

export const actionCreators = {
  addToDo,
  deleteToDo
};
```
