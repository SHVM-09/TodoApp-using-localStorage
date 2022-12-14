import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { SiTodoist } from "react-icons/si";
import "./Header.css";
function Header({ defaultTodos }) {
  return (
    <Navbar className="header-01" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <strong style={{ fontWeight: "900" }}>ToDo</strong>
          <span
            style={{
              color: "red",
              fontWeight: "900",
              position: "relative",
              top: "-15px",
            }}
          >
            List ☑️
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: "red" }}>
            <SiTodoist />{" "}
            <span style={{ position: "relative", top: "1px" }}>
              {defaultTodos.length}
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
