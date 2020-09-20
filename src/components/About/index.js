import React from 'react';
import coverImage from "../../assets/images/me.jpg";

function About() {

    return (
        <section >
            <h1 id="about" className="my-5">Full Stak Web Developer</h1>
            <div className="about">
                <img src={coverImage} className="my-2 mx-2" style={{ width: "20%" }} alt="cover" />
                <section className="my-5 mx-2">
                    <p>
                        Bilingual, solution-driven Full Stack Developer with a Bachelor of Science in Computer Engineering, 
                        who loves finding solutions to challenges and focused on customer satisfaction. 
                        A self-driven person and quick learner that as an intern, was the first person investigating new and emerging software applications within Business Rules,
                        and implement and use new software applications like Drools using Agile methodological. 
                    </p>
                    <br></br>
                    <p>
                        Proven experience developing consumer-focused web sites using HTML5, CSS3, jQuery, Bootstrap, JavaScript, Node.js, AWS, MySQL, MongoDB, Express & React. 
                        With a certificate of full stack web development from The University of Utah. 
                        A problem-solver and highly organized person that seeks great opportunities an experience with a full-time position as a full stack developer.
                    </p>
                </section>
            </div>
        </section>
    );
}

export default About;