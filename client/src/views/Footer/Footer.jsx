import React from "react"
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../../styles/styles.css"

export default function Footer() {
    return (
        <div style={{backgroundColor: "var(--Color1)"}}>
            <span style={{margin: "50px", color: "white"}}> © 2020 RestEasy Technologies, Inc. </span>
            <a href="/privacypolicy" style={{margin: "50px", color: "white"}}> Privacy Policy / Terms & Conditions </a>
            <a href="/about" style={{margin: "50px", color: "white"}}> About RestEasy </a>
            <a href="/press" style={{margin: "50px", color: "white"}}> Press </a>
            <a href="https://www.facebook.com/tryresteasy">
                <img href="www.facebook.com" src={require('../../assets/img/facebook.png')} style={{margin: "10px", maxHeight: "40px"}} />
            </a>
            <a href="https://www.instagram.com/resteasyinc/">
                <img src={require('../../assets/img/instagram.png')} style={{margin: "10px",maxHeight: "40px"}} />
            </a>
            <a href="https://www.linkedin.com/company/resteasy/">
                <img src={require('../../assets/img/linkedin.png')} style={{margin: "10px",maxHeight: "40px"}} />
            </a>
            
            
            
            <a href="/" style={{margin: "50px", color: "white"}}> #resteasier </a>
            <br />
        </div>
    )
}
