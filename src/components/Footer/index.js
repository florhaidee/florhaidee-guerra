import React from 'react'
import UseAnimations from "react-useanimations";
import github  from 'react-useanimations/lib/github'
import linkedin  from 'react-useanimations/lib/linkedin'
import mail  from 'react-useanimations/lib/mail'

function Footer() {
 return (
    <div className="align-center">

        <a href="https://github.com/florhaidee" target="_blank" rel="noopener noreferrer">
        <UseAnimations
            animation={github}
            size={56}
            pathCss="stroke: #25CED1; stroke-width: 5%;"
        />
        </a>
        <a href="https://www.linkedin.com/in/florhaidee/?locale=en_US" target="_blank" rel="noopener noreferrer">
        <UseAnimations
            animation={linkedin}
            size={56}
            pathCss="stroke: #25CED1; stroke-width: 5%;"
        />
        </a>
        <a href="mailto:florhaideedev@gmail.com" target="_blank" rel="noopener noreferrer">
        <UseAnimations
            animation={mail}
            size={56}
            pathCss="stroke: #25CED1; stroke-width: 5%;"
        />
        </a>
    </div>

 )
}

export default Footer;