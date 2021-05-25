import React from "react";
import "./user.style.css";
import PersonIcon from "@material-ui/icons/Person";
import { RightPane } from "../right-pane/rightpane.component";

export const Usericon = () => (
  <div>
    <div
      id="user-icon"
      onClick={() => {
        console.log(Math.floor(Math.random() * 1000));
        document.getElementById("right-pane").classList.add("right-slide");
      }}
    >
      <PersonIcon style={{ fontSize: 40 }} />
    </div>
      <RightPane />
  </div>
);
