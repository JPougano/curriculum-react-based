import React from "react";
import Twitter from "../images/Twitter Icon.png"
import Facebook from "../images/Facebook Icon.png"
import Instagram from "../images/Instagram Icon.png"
import GitHub from "../images/GitHub Icon.png"

export default function Footer(){
    return(
        <section className="footer-container">
            <img className="footer-icons" src={Twitter} alt="Twitter's icon"/>
            <img className="footer-icons" src={Facebook} alt="Facebook's icon"/>
            <img className="footer-icons" src={Instagram} alt="Instagram's icon"/>
            <img className="footer-icons" src={GitHub} alt="GitHub's icon"/>
        </section>
    )
}