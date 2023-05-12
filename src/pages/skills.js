import React, { useEffect } from 'react';
import $ from 'jquery';
import '../styles/skills.css';

function Skills() {
  useEffect(() => {
    $(window).scroll(function() {
      var hT = $('#skill-bar-wrapper').offset().top,
          hH = $('#skill-bar-wrapper').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
  
      if (wS > (hT + hH - 1.4 * wH)) {
        $('.skillbar-container').each(function() {
          $(this)
            .find('.skills')
            .animate({
              width: $(this).attr('data-percent')
            }, 5000); // 5 seconds
        });
      }
    });
  }, []);
  return (
    <React.Fragment>

      <section className="container content-section text-center" id="skills" style={{padding:"100px"}}>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div id="skill-bar-wrapper">
              <h1>Skills</h1>
              <div className="text-left">


                <span>HTML</span>
                <span style={{ float: 'right' }}>75%</span>
                <div className="skillbar-container clearfix" data-percent="75%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

        
                <span>CSS</span>
                <span style={{ float: 'right' }}>65%</span>
                <div className="skillbar-container clearfix" data-percent="65%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

        
                <span>JavaScript</span>
                <span style={{ float: 'right' }}>35%</span>
                <div className="skillbar-container clearfix" data-percent="35%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

     
                <span>Node.js</span>
                <span style={{ float: 'right' }}>20%</span>
                <div className="skillbar-container clearfix" data-percent="20%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

             
                <span>React.js</span>
                <span style={{ float: 'right' }}>60%</span>
                <div className="skillbar-container clearfix" data-percent="60%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

       
                <span>ExpressJs</span>
                <span style={{ float: 'right' }}>10%</span>
                <div className="skillbar-container clearfix" data-percent="10%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>


                <span>MySQL</span>
                <span style={{ float: 'right' }}>30%</span>
                <div className="skillbar-container clearfix" data-percent="30%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

                <span>Bootstrap</span>
                <span style={{ float: 'right' }}>40%</span>
                <div className="skillbar-container clearfix" data-percent="40%">
                  <div className="skills" style={{ background: 'white' }}></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Skills;

