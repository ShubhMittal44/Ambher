import React from 'react'
import '../GetOurApp/getApp.css'
import Phone from '../../assets/images/Mockup-crop.png'
import Astore from '../../assets/images/applestorebutton.png'
import Pstore from '../../assets/images/playstorebutton.png'

const GetOurApp = () => {
  return (
    <div className="container-fluid"  >
      <div class="row">
      <div class="col-sm-7">
        <h1>Get Our App</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
        <br></br>
        <img src={Astore}></img>
        <img src={Pstore}></img>
      </div>
      <div class="col-sm-1">
        <img src={Phone} class="left" id="imgs"></img>
      </div>
      <div class="col-sm-3">
        <img src={Phone} class="middle" id="imgs"></img>
      </div>
      <div class="col-sm-1" >
        <img src={Phone} class="right" id="imgs"></img>
      </div>  
      </div>
    </div>    
  )
}

export default GetOurApp;