import React from "react";
import '../styles/aboutme.css';

export default function AboutMe () {
    return (
<>
     <div class="hero" id="aboutme">
    <img src="https://i.ibb.co/HXqgjrt/Untitled-design-1-removebg-preview.png"alt="" class="hero--image" />
    <div class="hero--bio">
      <h2>HSamoen E.</h2>
      <h3>Information Technology Associate</h3>
      <div class="basic-info">
      <p>I’m an Information Technology Associate. I'm passionate in using coding to create and innovate solutions to everyday problems.</p>
      <p>"Learning to code is learning to create and innovate."</p>
      </div>
      
      <nav>
        <a href="#contact" class="nav--btn">Contact</a>
        <a href="https://www.linkedin.com/in/hsamoen-eban/overlay/1635518711607/single-media-viewer/?profileId=ACoAAEBOOCgBmF7ENuZHbnj92Qqt76xoSirFRqU" class="nav--btn" target="_blank">Resume</a>
      </nav>
    </div>
  </div>
    </>
    )
}