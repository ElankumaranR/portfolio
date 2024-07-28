import React from "react";
import './style.css';

function Skill(){
 return(
    <div className="skill" id="Skill">
        <h1 className="skill_tit">My Skills</h1>
        <div className="skill_content">
            <div className="skill_comp">
                <div className="skill_in">
                <img src="js.png" alt="s" className="skill_png"/>
                <p className="skill_per">89%</p>
                </div>
                <p className="skill_name">Javascript</p>
            </div>
            <div className="skill_comp">
                <div className="skill_in">
                <img src="sql.png"alt="s" className="skill_png"/>
                <p className="skill_per">85%</p>
                </div>
                <p className="skill_name">SQL</p>
            </div> <div className="skill_comp">
                <div className="skill_in">
                <img src="git.png"  alt="s"className="skill_png"/>
                <p className="skill_per">79%</p>
                </div>
                <p className="skill_name">GIT</p>
            </div> <div className="skill_comp">
                <div className="skill_in">
                <img src="node.png" alt="s" className="skill_png"/>
                <p className="skill_per">84%</p>
                </div>
                <p className="skill_name">Nodejs</p>
            </div> <div className="skill_comp">
                <div className="skill_in">
                <img src="react.png"  alt="s"className="skill_png"/>
                <p className="skill_per">80%</p>
                </div>
                <p className="skill_name">Reactjs</p>
            </div> <div className="skill_comp">
                <div className="skill_in">
                <img src="flask.png" alt="s" className="skill_png"/>
                <p className="skill_per">80%</p>
                </div>
                <p className="skill_name">Flask</p>
            </div>
        </div>

    </div>
 );
}
export default Skill;