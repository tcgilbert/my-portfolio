import React from 'react'
import ProfilePic from '../../public/static/img/circle-cropped.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="empty-div"></div>
            <div className="about-content" >
                <img  src={ProfilePic} alt="Profile Picture" className="profile-pic"/>
                <div class="about-text">
                    <h1>Hey, I'm Thomas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis nisi quisquam molestias! Et quae ad optio, consequatur sint repellendus assumenda, dignissimos eveniet, a unde saepe adipisci amet corporis nemo.</p>
                </div>
            </div>
        </div>
    )
}

export default About

// with animation
        // <div className="about-section" >
        //     <img data-sal-duration="1s" data-sal="slide-right" id="about-anchor" src={ProfilePic} alt="Profile Picture" className="profile-pic"/>
        //     <div data-sal-duration="1s" data-sal="slide-left" class="about-text">
        //         <h1>Hey, I'm Thomas</h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis nisi quisquam molestias! Et quae ad optio, consequatur sint repellendus assumenda, dignissimos eveniet, a unde saepe adipisci amet corporis nemo.</p>
        //     </div>
        // </div>