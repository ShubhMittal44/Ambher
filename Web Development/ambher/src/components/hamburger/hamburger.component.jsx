import React from "react";
import "./hamburger.style.css";

export const Hamburger = () => (
  <div className="outer-ham">
    <div className="inner-ham" onClick={() => {
        console.log(Math.random());
        document.getElementById()
    }}>
      <div className="menu" id="1"></div>
      <div className="menu" id="2"></div>
      <div className="menu" id="3"></div>
    </div>
  </div>
);
