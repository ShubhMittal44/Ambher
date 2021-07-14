import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import "../header/header.style.css";
import "./searchbox.style.css";

export const Searchbox = () => (
  <div className="search-main">
    <div className="inner-search-box">
      <div className="uppersearch">
        <div className="search-icon icon-box">
          <SearchIcon style={{ fontSize: 30, color: "lightgrey" }} />
        </div>
        <div className="input-search">
          <input type="text" placeholder="Costumes, Shoes, Tables...."></input>
        </div>
        <div className="search-btn">
          <button type="submit">
            <RoomIcon style={{ fontSize: 30, color: "black" }} />
            <div id="text">Location</div>
          </button>
        </div>
      </div>
      <div className="lowersearch">
        <div className="startdt">
          <input type="date" placeholder="Enter Start Date"/>
        </div>
        <div className="enddt"><input type="date" placeholder="Enter End Date" onfocus="(this.type='date')" /></div>
      </div>
    </div>
  </div>
);
