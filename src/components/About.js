import React from 'react'
import ProfilePic from '../../public/static/img/circle-cropped.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="triangle-div"></div>
            <div className="about-content" >
                <img data-sal-duration="3s" data-sal="slide-right" src={ProfilePic} alt="Profile Picture" className="profile-pic"/>
                <div class="about-text-container">
                    <div data-sal-duration="3s" data-sal="slide-left">
                        <h1 className="about-header">I'm a full-stack developer who finds enjoyment in all things creative.</h1>
                        <hr className="about-hr"/>
                        <p className="about-text">My favorite moment is when what feels like hours wasted culminates into something new and original. Fortunately, these moments are plentiful in the world of programming.</p>
                        <p className="about-text">After having spent the year of 2020 as a full-time learner, I am actively seeking employment as of Feburary 2021. When I am not coding, you can find me either playing music (mostly bluegrass), or spending time outside in the sun.</p>
                    </div>
                </div>
                <div className="skills-container">
                    <h1>Front End</h1>
                </div>
            </div>
        </div>
    )
}

export default About

