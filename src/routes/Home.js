import React, { useState } from "react";

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// Send state of Store to connected component as props
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

// connect() : The function connects react component to redux store
export default connect(mapStateToProps)(Home);
