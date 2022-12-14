import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./TodoItem.css";
function TodoItem({ defaultTodos, onDelete }) {
  return (
    <div className="acc-items">
      <Accordion className="accordian-01">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="acc-head">{defaultTodos.title}</span>
          </Accordion.Header>
          <Accordion.Body className="body-text">
            {defaultTodos.desc}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <button
        className="btn btn-outline-danger"
        size="sm"
        onClick={() => onDelete(defaultTodos)}
      >
        x
      </button>
    </div>
  );
}

export default TodoItem;
