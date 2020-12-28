import React from "react";
import {Link} from "gatsby"

const AboutPage = () =>  {
    return (
        <div>
            <h1>This a Page about me</h1>
            <p>I am a Colombian living in ireland for the last 5 years.<br/>
             passionate about technology and always developing my skills</p>
             <p>Lets Work together <Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

export default AboutPage;