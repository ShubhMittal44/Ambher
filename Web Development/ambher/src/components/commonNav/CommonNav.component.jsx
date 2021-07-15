import React from "react";
import { Hamburger } from "../hamburger/hamburger.component";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./CommonNav.style.css";

function CommonNav() {
  return (
    <nav>
      <Hamburger />
        <div className="right-commonNav-items">
            <div id="cart">
            <ShoppingCartIcon style={{ fontSize: 30 }} />
            </div>
            <div id="support-icon">
            <HeadsetMicIcon style={{ fontSize: 30 }} />
            </div>
            <div id="display-picture">
            <img
                src="https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="userDP"
            />
            </div>
        </div>
    </nav>
  );
}

export default CommonNav;
