import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css';
function Home(){
    return(
        <>
        <div className="Home" id="home">
            <div className="home_content">
                <div className="home_text">
                <h1>I am Elankumaran</h1>
                <h1 className="home_title">Web Developer +</h1>
                <p className="home_desc">Passionate web developer with expertise in creating responsive, user-friendly websites using the latest front-end and back-end technologies. Let's build something amazing together!</p>
                <div className="home_link">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" className="h_link" />
                <FontAwesomeIcon icon="fa-brands fa-github" className="h_link" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" className="h_link"  />
                <FontAwesomeIcon icon="fa-brands fa-facebook"className="h_link"/>
                </div>
                <button className="cv">Download CV</button>
                </div>
                <img src="/profile.jpeg" className="img"alt="profile" /></div>
        </div>
        </>
    );
}
export default Home;