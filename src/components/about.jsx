import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';
 function About(){
    return(
        <div className="about" id="about">
            <h1 className="about_tit">About Me</h1>
            <div className="about_content">
                <div className="stud">
                    <h1>Education</h1>
                    <div className="stud_content">
                        <div className="stud_comp">
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="stud_i"/>   
                            <div className="stud_des">
                                <h2 className="year">2022-2026</h2>
                                <h1>Computer Science Engineering</h1>
                                <h6>Kongu Engineering College</h6>
                            </div>
                        </div>
                        <div className="stud_comp">
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="stud_i"/>   
                            <div className="stud_des">
                                <h2 className="year">2021-2022</h2>
                                <h1>HSC</h1>
                                <h6>Sree Ambaals school</h6>
                            </div>
                        </div> <div className="stud_comp">
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="stud_i"/>   
                            <div className="stud_des">
                                <h2 className="year">2019-2020</h2>
                                <h1>SSLC</h1>
                                <h6>St.Francis matric school</h6>
                            </div>
                        </div>             
                    </div>
                </div>
                <div className="ach">
                    <h1>Acheivements</h1>
                    <div className="ach_content">
                        <div className="ach_comp">
                            <FontAwesomeIcon icon="fa-solid fa-star"  className="ach_i" />
                            <div className="ach_des">
                                <h2 className="year">2023</h2>
                                <h1>Enterprenuership</h1>
                                <h6>NPTEL</h6>
                            </div>
                            
                        </div>
                        <div className="ach_comp">
                            <FontAwesomeIcon icon="fa-solid fa-star"  className="ach_i" />
                            <div className="ach_des">
                                <h2 className="year">2024</h2>
                                <h1>Dark pattern detection</h1>
                                <h6>paper presentation</h6>
                            </div>
                            
                        </div><div className="ach_comp">
                            <FontAwesomeIcon icon="fa-solid fa-star"  className="ach_i" />
                            <div className="ach_des">
                                <h2 className="year">2022</h2>
                                <h1>Harpin bend lights</h1>
                                <h6>project presentation</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default About;