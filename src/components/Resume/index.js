import React from 'react'
import UseAnimations from "react-useanimations";
import loading2 from 'react-useanimations/lib/loading2'

const frontEnd = [ "Html5", "CSS: Boostrap, Materialize", "JavaScript", "jQuery", "React", "Handlebars" ]
const backEnd = [ "Node.js", "Express", "NoSQL: MongoDB", "SQL: sqlite, MySQL", "Sequelize" ]
const others = ["Version Control: Git, GitHub", "Visual Studio Code", "Object-Oriented Programming (OOP)", "Model-View-Controller (MVC)" , "Progressive Web Applications (PWA)"]

function Resume() {

    return (
        <section>
            <h3>Searching for incredible experiences...</h3>
            <h4>And improve my skills</h4>
            <br></br>
            <div><h3>Click <a href="src\assets\FlorhaideeGuerra-Resume.pdf">Here!</a>to download my resume</h3></div>
            <div className="resume my-5">
                <div id="frontEnd">
                    <h3>Front-End Skills</h3>
                    <ul>
                        { frontEnd.map( (skill) =>  (
                            <li key={skill}> 
                                <div className="skills">
                                    <UseAnimations
                                        animation={loading2}
                                        size={20}
                                        style={{ padding: 1, color:"aqua" }}
                                    />
                                    <p className="mx-1">{skill}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div id="backEnd">
                    <h3>Back-End Skills</h3>
                    <ul>
                        { backEnd.map( (skill) =>  (
                            <li key={skill}> 
                                <div className="skills">
                                    <UseAnimations
                                        animation={loading2}
                                        size={20}
                                        style={{ padding: 5, color:"#25CED1" }}
                                    />
                                    <p className="mx-1">{skill}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div id="otherSkills">
                    <h3>Other Skills</h3>
                    <ul>
                        { others.map( (skill) =>  (
                            <li key={skill}> 
                                <div className="skills">
                                    <UseAnimations
                                        animation={loading2}
                                        size={20}
                                        style={{ padding: 5, color:"#25CED1" }}
                                    />
                                    <p className="mx-1">{skill}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;