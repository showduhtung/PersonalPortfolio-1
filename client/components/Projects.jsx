import React from 'react';
import TopNavigation from './TopNavigation.jsx';

const Projects = () => {

  return (
    <div>
      <TopNavigation/>
      <h1>Projects</h1>
      <div>
        <h2>Virtual Reality Pacman</h2>
        <a href="http://vrpacman.com" target="_blank">live</a>
        <p>VR Pacman is a virtual reality spin on the classic Pac-man game where you become the Pac-man as you traverse mazes in first-person virtual reality. I designed the entire back-end and styled the main front-end theme and layout. In addition, I implemented multiplayer mode using Socket.io and BabylonJS to enable virutal reality interaction online. This required architecting multiplayer rooms using Socket.io to for automated room assignments and creation of private rooms to play with friends. I also integrated user authentication using React-router, Passport, Node and Express to protect routes and secure profiles with features including email verification, forgot password, brute force and xss protection using npm modules for robust authentication. I also wrote tests using Mocha, Chai, and Supertest to ensure reliable API endpoints and authentication on Node server.</p>
      </div>
      <div>
        <h2>TubeNotes</h2>
        <p>TubeNotes is a full-stack web platform to create, save, and share notes and visual annotations on Youtube videos. I implemented the visual annotation drawing tools feature using Fabric.js canvas library to enable drawing over YouTube videos. This required manipulating canvas data using Fabric.js for real-time recording, editing, and synced playback of videos. I also designed and styled interactive UI with visual indicators in React and jQuery for intuitive user controls.</p>
      </div>
    </div>)
}

export default Projects;