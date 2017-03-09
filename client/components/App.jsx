import React from 'react';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';

import '../reveal.js';



export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home/>
        <Navigation/>
        <div>testing</div>
      </div>);
  }
}