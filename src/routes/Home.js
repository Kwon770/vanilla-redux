import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../Store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.key} />
        ))}
      </ul>
    </>
  );
}

// https://react-redux.js.org/using-react-redux/connect-mapstate

// The function to return data of store to connected component 'as props'
// The function for selecting the part of data from store
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

// The function to return data of store to connected component 'as props'
// The function for dispatching actions to store
function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

// connect(map-state-to-props, map-dispatch-to-props)(component)
// The function to connect react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
