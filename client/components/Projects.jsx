import React from 'react';
import TopNavigation from './TopNavigation.jsx';



export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section className="projects">
        <TopNavigation/>
        <div id="projects" className="single-project">
          <div className="rightColumn">
            <img className="project1" src="../client/assets/vrPacmanScreenshot2.png"/>
          </div>
          <div className="leftColumn">
            <h4>Virtual Reality Pacman</h4>
            <p>First-person VR Pacman Game</p>
            <p className="tech">Tech used: BabylonJS, React, JavaScript, HTML5, CSS3, Node, Express, Webpack, jQuery, AJAX, Socket.IO, PassportJS, MySQL, Sequelize, Mocha, Chai</p>
            <a href="http://vrpacman.com" target="_blank">- live -</a>
          </div>
        </div>

        <div className="single-project">
          <div className="leftColumn">
            <h4>TubeNotes</h4>
            <p>Virtual Notebook & Sketchbook for YouTube</p>
            <p className="tech">Tech used: Fabric.js, Angular, JavaScript, HTML5, CSS3, Node, Express, jQuery, AJAX, MySQL, Sequelize</p>
            <a href="https://github.com/gitgreat/TubeNotes" target="_blank">- git -</a>
          </div>
          <div className="rightColumn">
            <img className="project2" src="../client/assets/tubenotesScreenshot1.png"/>
          </div>
        </div>

        <div className="single-project">
          <div className="rightColumn">
            <img className="project3" src="../client/assets/planthis.png"/>
          </div>
          <div className="leftColumn">
            <h4>PlanThis</h4>
            <p>A Modern & Collaborative Event Planner</p>
            <p className="tech">Tech used: Cloudinary API, React, JavaScript, HTML5, CSS3, Node, Express, jQuery, AJAX, MySQL</p>
            <a href="https://github.com/gitgreat/gitgreat" target="_blank">- git -</a>
          </div>
        </div>

      </section>)
  }
}

//<img src="../client/assets/vrPacmanScreenshot2.png" width="35%"/>
// <img src="../client/assets/vrPacmanScreenshot.jpg" width="60%"/>