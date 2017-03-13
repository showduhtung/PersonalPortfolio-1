import React from 'react';
import TopNavigation from './TopNavigation.jsx';

const About = () => {

  return (
    <section id="about" className="about">
      <div className="aboutContainer">
        <div className="aboutme">
          <h3>About Me</h3>
        </div>
        <div className="contact">
          <h3>Contact Me</h3>
          <form id="contactForm">
            <label>Name: </label>
            <div>
              <input type="text" name="name"/>
            </div>
            <label>Email: </label>
            <div>
              <input type="password" name="password"/>
            </div>
            <label>Message: </label>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    </section>)
}

export default About;