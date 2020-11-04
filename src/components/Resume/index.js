import React from 'react'
import UseAnimations from "react-useanimations";
import loading2 from 'react-useanimations/lib/loading2'
import BorderWrapper from 'react-border-wrapper'
import Typical from 'react-typical'

const step1 = [
    `Searching for incredible experiences...`, 1000,
    `Searching for incredible experiences... And improve my skills!`, 50000,
];
const frontEnd = [ "Html5", "CSS: Boostrap, Materialize", "JavaScript", "jQuery", "React", "Handlebars" ]
const backEnd = [ "Node.js", "Express", "NoSQL: MongoDB", "SQL: sqlite, MySQL", "Sequelize" ]
const others = ["Version Control: Git, GitHub", "Visual Studio Code", "Object-Oriented Programming (OOP)", "Model-View-Controller (MVC)" , "Progressive Web Applications (PWA)"]

function Resume() {
    
    return (
        <section>
            <Typical wrapper="span" steps={step1} loop={1} className={'intro'} />
            <br></br>
            <div><h3>Click <a href="https://github.com/florhaidee/florhaidee-guerra/raw/feature/resume/src/assets/F-Guerra-resume.pdf">Here!</a>to download my resume</h3></div>
            <br></br>
            <BorderWrapper borderColour="#6eb1a9">
            <div className="resume my-1">
                <div id="frontEnd">
                    <h3 className="subtitle">Front-End Skills</h3>
                    <ul>
                        { frontEnd.map( (skill) =>  (
                            <li key={skill}> 
                                <div className="skills">
                                <UseAnimations
                                    animation= {loading2}
                                    size={20}
                                    pathCss="stroke: #25CED1; stroke-width: 5%;"
                                />
                                    <p className="mx-1">{skill}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div id="backEnd">
                    <h3 className="subtitle">Back-End Skills</h3>
                    <ul>
                        { backEnd.map( (skill) =>  (
                            <li key={skill}> 
                                <div className="skills">
                                    <UseAnimations
                                        animation={loading2}
                                        size={20}
                                        style={{ padding: 5, color:"#25CED1" }}
                                        pathCss="stroke: #25CED1; stroke-width: 5%;"
                                    />
                                    <p className="mx-1">{skill}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div id="otherSkills">
                    <h3 className="subtitle">Other Skills</h3>
                    <ul>
                        { others.map( (skill) =>  (
                            <li key={skill}> 
                                <div className="skills">
                                    <UseAnimations
                                        animation={loading2}
                                        size={20}
                                        pathCss="stroke: #25CED1; stroke-width: 5%;"
                                    />
                                    <p className="mx-1">{skill}</p>
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            </BorderWrapper>
        </section>
    )
}

export default Resume;