import React from "react";
import TodoItem from "./TodoItem";
import "./TodoContainer.css";
import { useState, useEffect } from "react";
import AddTodoItem from "./AddTodoItem";
import Header from "./Header";
import Footer from "./Footer";
// let initTodo;
// if (localStorage.getItem("defaultTodos") === null) {
//   initTodo = [];
// } else {
//   initTodo = JSON.parse(localStorage.getItem("defaultTodos"));
// }
// console.log(initTodo);

const getLocalItems = () => {
  let list = localStorage.getItem("defaultTodos");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("defaultTodos"));
  } else {
    return [];
  }
};
function TodoContainer() {
  const onDelete = (todo) => {
    setDefaultTodos(
      defaultTodos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sNo;

    if (defaultTodos.length === 0) {
      sNo = 0;
    } else {
      sNo = defaultTodos[defaultTodos.length - 1].srNo + 1;
    }
    const myTodo = {
      srNo: sNo,
      title: title,
      desc: desc,
    };
    setDefaultTodos([...defaultTodos, myTodo]);
    console.log(myTodo);
  };

  const [defaultTodos, setDefaultTodos] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("defaultTodos", JSON.stringify(defaultTodos));
  }, [defaultTodos]);

  return (
    <div className="container-01">
      <Header defaultTodos={defaultTodos} />
      <h1 className="cont-h1">
        <strong>To</strong>Do
      </h1>
      <AddTodoItem addTodo={addTodo} />
      <div className="content-01">
        {defaultTodos.length === 0 ? (
          <h6 style={{ marginTop: "100px", color: "#AAA", fontSize: "14px" }}>
            No Todo's to Display...Add Some!
          </h6>
        ) : (
          defaultTodos.map((todo) => {
            return (
              <TodoItem
                defaultTodos={todo}
                key={todo.srNo}
                onDelete={onDelete}
              />
            );
          })
        )}
      </div>

      <Footer />
    </div>
  );
}

export default TodoContainer;
