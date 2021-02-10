import React from 'react'
import ProfilePic from '../assests/img/circle-cropped.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="triangle-div"></div>
            <div className="about-content" >
                <img data-sal-duration="700" data-sal="slide-right" src={ProfilePic} alt="Profile Pic" className="profile-pic"/>
                <div class="about-text-container">
                    <div data-sal-duration="700" data-sal="slide-left">
                        <h1 className="about-header">I'm a full-stack developer who finds enjoyment in all things creative.</h1>
                        <hr className="about-hr"/>
                        <p className="about-text">With a 1,000+ hours programming, and a background as an audio engineer, I have spent most of my life finding answers to technical questions through creative pursuits.</p>
                        <p className="about-text">Whether it be music or software, my favorite moment is when what feels like hours wasted, culminates into something new and original.</p>
                        <p className="about-text">When I am not coding, you can find me either playing music, or spending time out in the sun.</p>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skill-category">
                        <h1 className="skill-title">Front End</h1>
                        <p className="skill-text">HTML</p>
                        <p className="skill-text">CSS / SCSS</p>
                        <p className="skill-text">Javascript</p>
                        <p className="skill-text">React.js</p>
                        <p className="skill-text">Gatsby.js</p>
                    </div>
                    <div className="skill-category">
                        <h1 className="skill-title">Back End</h1>
                        <p className="skill-text">Node.js</p>
                        <p className="skill-text">Express.js</p>
                        <p className="skill-text">PostgreSQL</p>
                        <p className="skill-text">MongoDB</p>
                        <p className="skill-text">Python</p>
                    </div>
                    <div className="skill-category">
                        <h1 className="skill-title">Tools</h1>
                        <p className="skill-text">Adobe Photoshop</p>
                        <p className="skill-text">DBDesigner</p>
                        <p className="skill-text">Figma</p>
                        <p className="skill-text">Github</p>
                        <p className="skill-text">Git</p>
                    </div>
                    <div className="skill-category">
                        <h1 className="skill-title">Test & Deployment</h1>
                        <p className="skill-text">Mocha / Jest</p>
                        <p className="skill-text">Heroku</p>
                        <p className="skill-text">Netlify</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

