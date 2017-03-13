import React from 'react';
import TopNavigation from './TopNavigation.jsx';

const About = () => {

  return (
    <section id="about" className="about">
      <div className="aboutContainer">

        <h3>About Me</h3>
        <div className="aboutPics">
          <span><img src="../client/assets/linkedinProfilePic.jpg"/></span>
          <span><img src="../client/assets/monkeyimitation.jpg"/></span>
          <span><img src="../client/assets/icecave.jpg"/></span>
        </div>

        <div className="blurbContactContainer">
          <div className="aboutBlurb">
            <h3>Hello!</h3><br/>
            <p>I'm an enthusiastic and purpose-driven Software Engineer with a passion for building interactive applications. I enjoy learning new technologies and solving interesting technical problems. Currently, I'm seeking new professional opportunities that constructively challenge me and create a positive impact on the world!</p>
            <p>E-mail: <a href="mailto:wells.z.tsai@gmail.com">wells.z.tsai@gmail.com</a></p>
            <p>LinkedIn: <a href="http://linkedin.com/in/wells-tsai">http://linkedin.com/in/wells-tsai</a></p>
            <p>Github: <a href="http://github.com/wellstsai">http://github.com/wellstsai</a></p>
          </div>

          <div className="contact">
            <h3>Contact Me</h3>
            <form id="contactForm">
              <label>Name: *</label>
              <div>
                <input type="text" name="name" required/>
              </div>
              <label>Email: *</label>
              <div>
                <input type="text" name="email" required/>
              </div>
              <label>Message: *</label>
              <div>
                <textarea rows="10"></textarea>
              </div>
              <div>
                <div className="submit">
                  <input type="submit" value="Submit"/>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>)
}

export default About;