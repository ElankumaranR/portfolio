import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div className="con">
            <h1 className="contact_tit">Contact me</h1>            
        <div className="contact" id="contact">
            <div className="info">
                
                <div className="info-detials">
                    <div className="contact-item">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="con_i"/>
                        <h2 className="em">Email</h2>
                        <h3>elankumaran2103@gmail.com</h3>
                    </div>
                    <div className="contact-item">
                    <FontAwesomeIcon icon="fa-solid fa-square-phone" className="con_i" />
                        <h2 className="em">Phone</h2>
                        <h3>+91 7339650722</h3>
                    </div>
                    <div className="contact-item">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot"className="con_i" />
                        <h2 className="em">Address</h2>
                        <h3>west street,trichy,tamil nadu</h3>
                    </div>
                </div>
            </div>
            <div className="form">
            <h2 className="con_tit">Lets work together!</h2>
                <form className="con_f">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Footer;
