import React from 'react'
import ProfilePic from '../../public/static/img/circle-cropped.png'

const About = () => {
    return (
        <div className="about-section">
            <img src={ProfilePic} alt="Profile Picture" className="profile-pic"/>
        </div>
    )
}

export default About
