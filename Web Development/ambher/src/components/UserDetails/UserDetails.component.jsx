import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import WarningIcon from '@material-ui/icons/Warning';
import "./UserDetails.style.css";

export const UserDetails = props => {
  return (
    <div className="account-information">
      <div id="top">
        <div id="heading">Account Information</div>
        <div id="edit">
          <EditIcon />
        </div>
      </div>
      <div id="bottom">
          <div id="user-dp">
              <img
                src={props.info.dp}
                alt="userDP"
            />
          </div>
          <div id="user-details">
              <div id="left">
                  <div id="username">
                      <div className="subhead">Name</div>
                      <div className="subans">{props.info.name}</div>
                  </div>
                  <div id="user-location">
                      <div className="subhead">Location</div>
                      <div className="subans">{ props.info.location }</div>
                  </div>
                  <div id="user-pass">
                      <div className="subhead">Password</div>
                      <div className="subans">{ props.info.password }</div>
                  </div>
              </div>
              <div id="right">
                  <div id="user-email">
                      <div className="subhead">Email-ID <span><WarningIcon style={{ fontSize: 15 }} /><span className='vertext'>Verify</span></span></div>
                      <div className="subans">{ props.info.email }</div>
                  </div>
                  <div id="user-phone">
                      <div className="subhead">Phone <span><WarningIcon style={{ fontSize: 15 }} /><span className='vertext'>Verify</span></span></div>
                      <div className="subans">+91 { props.info.phone }</div>
                  </div>
                  <div id="change-pass-btn">
                    <button id='btn-chg' type='button' onclick="">Change Password</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
