import React from 'react';
import {withRouter, Link} from 'react-router';

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="topNav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
      </nav>);
  }
}

export default withRouter(TopNavigation)