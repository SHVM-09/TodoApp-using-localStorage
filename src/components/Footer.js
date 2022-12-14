import React from "react";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import { MdEngineering } from "react-icons/md";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p>
        <span>
          &copy; All Rights Reserved
          <br />
          <b>Todo-app.com</b>
          <br />
          Shivam Upadhyay
        </span>
        <br />
        <br />
        <MdEngineering /> <DiReact /> <AiFillHtml5 /> <DiCss3 />{" "}
        <DiJavascript /> <SiRedux /> <SiBootstrap /> <SiNetlify />{" "}
        <SiFirebase /> <AiFillGithub /> <DiCode /> <AiOutlineCodepen />{" "}
        <DiNpm />
      </p>
    </div>
  );
}

export default Footer;

//
