import React from "react";
import EditIcon from "@material-ui/icons/Edit";
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
            <div className="scp-sub-ans">
              {props.info.billingAddress.stateName}
            </div>
          </div>
          <div className="scp-itm">
            <div className="scp-sub-head">City</div>
            <div className="scp-sub-ans">{props.info.billingAddress.city}</div>
          </div>
          <div className="scp-itm">
            <div className="scp-sub-head">Pincode</div>
            <div className="scp-sub-ans">
              {props.info.billingAddress.pincode}
            </div>
          </div>
        </div>
        <div id="bill-add">
          <div className="scp-sub-head">Address</div>
          <div className="scp-sub-ans">{props.info.address}</div>
        </div>
      </div>
    </div>
  );
};
