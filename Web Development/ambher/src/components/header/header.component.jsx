import React from "react";
import "./header.style.css";
import PersonIcon from "@material-ui/icons/Person";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import { Searchbox } from "../searchbox/searchbox.component";
import { Hamburger } from "../hamburger/hamburger.component";

export const Header = () => (
  <div className="heading-content">
    <div className="top-bar">
      <div className="menu-ham">
        <Hamburger />
      </div>
      <div className="right-info">
        <div className="icon-box">
          <PersonIcon style={{ fontSize: 40 }} />
        </div>
        <div className="icon-box">
          <HeadsetMicIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    </div>

    <div className="title">
      <div className="ambher">Ambher</div>

      <div className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </div>
    <Searchbox />
  </div>
);
