import React from "react";
import CommonNav from "../commonNav/CommonNav.component";
import { UserDetails } from "../UserDetails/UserDetails.component";
import { BillingAddress } from "../BillingAddress/BillingAddress.component";

function Profile() {
  const data = {
    dp: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Test Name",
    email: "dummy@gmail.com",
    location: "Bangalore",
    phone: "1234567890",
    password: "********",
    billingAddress: {
      stateName: "Karnataka",
      city: "Bangalore",
      pincode: "560037",
    },
    address:
      'Chourasia Hieght", #22, Ground Floor, First Cross, Ashwathnagar, Marathalli, Bangalore, Pin Code - 560037, Karnataka, INDIA',
  };

  return (
    <React.Fragment>
      <CommonNav info={data} />
      <UserDetails info={data} />
      <BillingAddress info={data} />
    </React.Fragment>
  );
}

export default Profile;
