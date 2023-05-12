import React from "react";
import '../styles/projects.css';

export default function Projects () {
    return (
       <div id="projects">
         <h1>Check out my projects</h1>
         <div className="project-list">

            <div className="project">
                <img src="/Images/project1.png"></img>
                <h3>Pho Pho-natic</h3>
                <h4>Gateway</h4>
                <p>Restaurant website that features vietnamese cuisine</p>
                <p>Built with: HTML and CSS</p>
              
                <a href="https://github.com/HSamoen/GatewayV2.git" target="_blank"><img src="/Images/github.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
                <a href="https://main.d3etv9y0d7ne8p.amplifyapp.com/" target="_blank"><img src="/Images/amplify.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
            </div>

            <div className="project">
                <img src="/Images/project2.png"></img>
                <h3>Wellness Tea</h3>
                <h4>E-commerce V1</h4>
                <p>E-commerce website that features organic tea blends</p>
                <p>Built with: HTML, CSS, and JavaScript</p>

                <a href="https://github.com/HSamoen/E-commerce.git" target="_blank"><img src="/Images/github.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
            </div>

            <div className="project">
                <img src="/Images/project3.png"></img>
                <h3>Wellness Tea & Co</h3>
                <h4>Ecommerce V2</h4>
                <p>E-commerce website that features organic tea blends</p>
                <p>Built with: CSS, ExpressJs, Node.js, JavaScript, React.js, Bootstrap, and MySQL</p>

                <a href="https://github.com/HSamoen/ecommerce-version2.git" target="_blank"><img src="/Images/github.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
                <a href="https://main.d1x2qkj1775i8z.amplifyapp.com/" target="_blank"><img src="/Images/amplify.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>

            </div>

            <div className="project">
                <img src="/Images/project4.png"></img>
                <h3>Honest AQ</h3>
                <h4>Hope Hacks</h4>
                <p>Global Awareness website to promote awareness of air quality</p>
                <p>Built with: CSS, Handlebars, ExpressJs, Node.js, JavaScript, and MySQL</p>

                <a href="https://github.com/ShayeElle/HopeHacks-Team2.git" target="_blank"><img src="/Images/github.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
            </div>

            <div className="project">
                <img src="/Images/project5.png"></img>
                <h3>POP (Private Ownership of Prisons)</h3>
                <h4>Code for Justice</h4>
                <p>Nonprofit website to promote the issues of privately owned prisons</p>
                <p>Built with: HTML and CSS</p>

                <a href="https://github.com/HSamoen/C4JP.git" target="_blank"><img src="/Images/github.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
            </div>

            <div className="project">
                <img src="/Images/project6.png"></img>
                <h3>WellnessPlus</h3>
                <h4>Capstone</h4>
                <p>Health website to promote the awarness of food insecurity</p>
                <p>Built with: CSS, Node.js, JavaScript, ExpressJs, Bootstrap, React.js, and MySQL</p>

                <a href="https://github.com/HSamoen/Capstone-bcbs.git" target="_blank"><img src="/Images/github.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
                <a href="https://main.d3hr8taz5wl1fd.amplifyapp.com/" target="_blank"><img src="/Images/amplify.png" style={{width:"6%",marginTop:"15px", marginRight:"5px"}} alt=""></img></a>
            </div>

         </div>
       </div>
    )
}