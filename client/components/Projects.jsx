import React from 'react';
import TopNavigation from './TopNavigation.jsx';



export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let $project1 = $('.project1');
    let $project2 = $('.project2');
    let $project3 = $('.project3');

    $project1.hover(
      //mouseover
      () => {
        $project1.attr('src', 'vrpacman2.gif');
      },
      //mousout
      () => {
        $project1.attr('src', 'vrPacmanScreenshot2.png');
      })

    $project2.hover(
      //mouseover
      () => {
        $project2.attr('src', 'tubenotes.gif');
      },
      //mousout
      () => {
        $project2.attr('src', 'tubenotesScreenshot2.png');
      })
  }



  render() {
    return (
      <section className="projects">
        <TopNavigation/>
        <h3 id="projects">Projects</h3>
        <div id="projects" className="single-project">
          <div className="rightColumn">
            <a href="http://vrpacman.com" target="_blank"><img className="project1" src="vrPacmanScreenshot2.png"/></a>
          </div>
          <div className="leftColumn box1">
            <h4>VIRTUAL REALITY PACMAN</h4>
            <p>First-person VR Pacman Game</p>
            <p className="tech">Tech used: BabylonJS, React, JavaScript, HTML5, CSS3, Node, Express, Webpack, jQuery, AJAX, Socket.IO, PassportJS, MySQL, Sequelize, Mocha, Chai</p>
          </div>
        </div>

        <div className="single-project">
          <div className="leftColumn box2">
            <h4>TUBENOTES</h4>
            <p>Virtual Notebook & Sketchbook for YouTube</p>
            <p className="tech">Tech used: Fabric.js, Angular, JavaScript, HTML5, CSS3, Node, Express, jQuery, AJAX, MySQL, Sequelize</p>
          </div>
          <div className="rightColumn">
            <a href="https://github.com/gitgreat/TubeNotes" target="_blank"><img className="project2" src="tubenotesScreenshot2.png"/></a>
          </div>
        </div>

        <div className="single-project">
          <div className="rightColumn">
            <a href="https://github.com/gitgreat/gitgreat" target="_blank"><img className="project3" src="planthis.png"/></a>
          </div>
          <div className="leftColumn box1">
            <h4>PLANTHIS</h4>
            <p>A Modern & Collaborative Event Planner</p>
            <p className="tech">Tech used: Cloudinary API, React, JavaScript, HTML5, CSS3, Node, Express, jQuery, AJAX, MySQL</p>
          </div>
        </div>

      </section>)
  }
}

//<img src="vrPacmanScreenshot2.png" width="35%"/>
// <img src="vrPacmanScreenshot.jpg" width="60%"/>