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
                src="https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="userDP"
            />
          </div>
          <div id="user-details">
              <div id="left">
                  <div id="username">
                      <div className="subhead">Name</div>
                      {/* <div className="subans">{props.info.name}</div> */}
                      <div className="subans">Marcus Spencer</div>
                  </div>
                  <div id="user-location">
                      <div className="subhead">Location</div>
                      <div className="subans">Bangalore</div>
                  </div>
                  <div id="user-pass">
                      <div className="subhead">Password</div>
                      <div className="subans">********</div>
                  </div>
              </div>
              <div id="right">
                  <div id="user-email">
                      <div className="subhead">Email-ID <span><WarningIcon style={{ fontSize: 15 }} /><span className='vertext'>Verify</span></span></div>
                      <div className="subans">marcusspencer@gmail.com</div>
                  </div>
                  <div id="user-phone">
                      <div className="subhead">Phone <span><WarningIcon style={{ fontSize: 15 }} /><span className='vertext'>Verify</span></span></div>
                      <div className="subans">+91 1234567890</div>
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
