import React from "react";
import './style.css';

function Project(){
    
    return(
        <div className="proj" id="proj" >
            <h1 className="proj_tit">Projects</h1>
            <div className="Proj_content">
                <div className="proj_comp">
                    <img src="ecom.jpg" class="proj_img" alt="p1"/>
                    <div className="proj_desc">
                        <h3>Ecommerce</h3>
                        <p>it is a project of Ecommerce website done by python flask</p>
                    </div>
                    <a href="https://github.com/ElankumaranR/ecomerce" target="_blank" rel="noopenner noreferrer" className="but">View on GitHub</a>
                </div>
                <div className="proj_comp">
                    <img src="emp.png" alt="p2" class="proj_img"/>
                    <div className="proj_desc">
                        <h3>employee management</h3>
                        <p>it is a project of management website done by java spring boot</p>
                    </div>
                    <a href="https://github.com/ElankumaranR/employee_management" target="_blank" rel="noopenner noreferrer" className="but">View on GitHub</a>
                </div><div className="proj_comp">
                    <img src="rr.webp"  alt ="p3"class="proj_img"/>
                    <div className="proj_desc">
                        <h3>Railway Reservation</h3>
                        <p>it is a project of Reservation website done by python flask</p>
                    </div>
                        <a href="https://github.com/Dinesh-18-04/railwayreservation" target="_blank" rel="noopenner noreferrer" className="but">View on GitHub</a>
                </div>
            </div>
        </div>
    )
}
export default Project;