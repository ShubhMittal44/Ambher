import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import WarningIcon from "@material-ui/icons/Warning";
import "./BillingAddress.style.css";

export const BillingAddress = (props) => {
  return (
    <div className="bill-address">
      <div id="bill-top">
        <div id="bill-heading">Billing Address</div>
        <div id="edit">
          <EditIcon />
        </div>
      </div>
      <div id="bill-bottom">
        <div id="bill-scp">
          <div className="scp-itm">
            <div className="scp-sub-head">State</div>
            <div className="scp-sub-ans">Karnataka</div>
          </div>
          <div className="scp-itm">
            <div className="scp-sub-head">City</div>
            <div className="scp-sub-ans">Bangalore</div>
          </div>
          <div className="scp-itm">
            <div className="scp-sub-head">Pincode</div>
            <div className="scp-sub-ans">560037</div>
          </div>
        </div>
        <div id="bill-add">
          <div className="scp-sub-head">Address</div>
          <div className="scp-sub-ans">
            Chourasia Hieght", #22, Ground Floor, First Cross, Ashwathnagar,
            Marathalli, Bangalore, Pin Code - 560037, Karnataka, INDIA
          </div>
        </div>
      </div>
    </div>
  );
};
