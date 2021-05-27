import React from 'react'
import '../GetInTouch/getInTouch.css'
import CircPic from '../../assets/images/Contact Us.png'
import PrimaryBtn from '../Primary Button/PrimaryBtn.js'

const GetInTouch = () => {
  return (
    <div className="container-fluid1">
      <div class="row1">
        <div class="col-sm-6">
          <img src={CircPic} class="Contact-img"></img>
        </div>

        <div class="col-sm-6">
          <div class="contact-text">
          <h1>Get In Touch</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
            <form action="/action_page.php">
            <div class="inner-addon left-addon">
            <i class="glyphicon glyphicon-envelope test"></i>
              <input class="form-control" type="text" placeholder="Email" name="email" maxLength="60"></input>
            </div>
            
            <textarea placeholder="Query"></textarea>
            <div class="submitbtn">
            <PrimaryBtn text="Submit"/></div>
          </form>
        </div>
        </div>
        </div> 
    </div>
  )
}

export default GetInTouch;