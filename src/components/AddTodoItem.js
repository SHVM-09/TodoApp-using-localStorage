import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./AddTodo.css";

function AddTodoItem(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [show, setShow] = useState(false);
  const submitTodo = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      setShow(true);
    } else {
      props.addTodo(title, desc);
    }
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      {show ? (
        <Alert
          variant="danger"
          style={{
            width: "fit-content",
            margin: "auto",
            marginBottom: "106.5px",
            marginTop: "110px",
            backgroundColor: "white",
            fontWeight: "900",
            color: "black",
          }}
        >
          Title or Description can not be blank!
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => setShow(false)}
            style={{ position: "relative", top: "-1px", left: "10px" }}
          >
            OK
          </Button>
        </Alert>
      ) : (
        <Form onSubmit={submitTodo} className="form-01">
          <Form.Group className="mb-3">
            <Form.Label className="title-01">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add title here!"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-01"
              style={{ width: "200px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="title-02">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Details here!"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="input-01"
            />
          </Form.Group>
          <Button
            variant="outline-danger"
            type="submit"
            onClick={submitTodo}
            className="btn-02"
          >
            Add ToDo
          </Button>
        </Form>
      )}
    </div>
  );
}

export default AddTodoItem;
