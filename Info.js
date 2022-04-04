import React from "react";
import Avatar from "../images/Rectangle 90.png"
import EmailIcon from "../images/Icon.svg"
import LinkedinIcon from "../images/Vector.svg"

export default function Info(){
    return (
        <section className="info-container">
            <img src={Avatar} alt="Avatar's icon"/>
            <h2 className="info-title">Laura Smith</h2>
            <p className="info-roledescription">Fontend Developer</p>
            <p className="info-website">laurasmith.website</p>
            <div className="info-buttons--container">
                <p className="buttons button-email">
                    <img className="info-button--icon" src={EmailIcon} alt="Arrow down icon" width="13px"/>
                    Email
                </p>
                <p className="buttons button-linkedin" >
                    <img className="info-button--icon" src={LinkedinIcon} alt="Linkedin icon" width="13px"/>
                    Linkedin
                </p>
            </div>
        </section>

    )
}