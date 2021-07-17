import React from 'react'
import Footer from './stles/footer.js'
import Icon from '../Icons/index'
import Astore from '../../assets/images/applestorebutton.png'
import Pstore from '../../assets/images/playstorebutton.png'
import logo from '../../assets/images/ambher_logo.jpeg'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row><Footer.Column><Footer.Title>Ambher</Footer.Title></Footer.Column></Footer.Row>
            <Footer.Row>

                <Footer.Column>
                <Footer.Title>Home</Footer.Title>
                    <Footer.Link href="#">Create Account</Footer.Link>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    <Footer.Link href="#">FAQs</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Locations</Footer.Title>
                    <Footer.Link href="#">Delhi</Footer.Link>
                    <Footer.Link href="#">Bangalore</Footer.Link>
                    <Footer.Link href="#">Mumbai</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Follow Us</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-linkedin-in" />LinkedIn</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>    
                <Footer.Column>
                    <br></br>
                    <img src={Astore}></img>
                    <br></br>
                    <img src={Pstore}></img>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}