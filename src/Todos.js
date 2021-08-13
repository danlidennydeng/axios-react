import React, { useState, useEffect } from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const listRef = React.createRef();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const scrollToTodo1 = () => {
    listRef.current.scrollToItem(10);
  };

  const scrollToTodo2 = () => {
    listRef.current.scrollToItem(0);
  };

  const ListStyle = {
    position: "relative",
    backgroundColor: "rgb(0,255,0)",
    width: "100%"
  };

  return (
    <div className="ListContainer">
      {todos && (
        <button className="btn" onClick={scrollToTodo1}>
          Scroll to - "{todos[10]?.title}"
        </button>
      )}

    {todos && (
        <button className="btn" onClick={scrollToTodo2}>
          Scroll to - last
        </button>
      )}

      <List
        className="List"
        ref={listRef}
        style={ListStyle} // adding styles
        itemData={todos} // adding your own data
        height={350}
        itemCount={todos.length}
        itemSize={35}
      >
        {Row}
      </List>
    </div>
  );
};

const Row = ({ index, style, data }) => (
  <div className="Row" style={style}>
    
    <p>{data[index].title}</p>
  </div>
);

export default Todos;