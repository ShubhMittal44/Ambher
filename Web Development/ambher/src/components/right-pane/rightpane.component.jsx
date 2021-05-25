import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import './rightpane.style.css'

export const RightPane = () => (
    <div id="right-pane">
      <div id="right-pane-top">
        <div
          id="cross"
          onClick={() => {
            document
              .getElementById("right-pane")
              .classList.remove("right-slide");
          }}
        >
          <CloseIcon style={{ fontSize: 60, color:'black' }} />
        </div>
      </div>
    </div>
);
