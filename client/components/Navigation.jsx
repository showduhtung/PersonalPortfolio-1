import React from 'react';
import {withRouter} from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  navClick(e) {
    // need a navigate action that triggers a display reducer that displays correct navigation
    let destination = e.target.innerHTML;
    if (destination === 'Home') {
      this.props.router.push('/');
    }
    if (destination === 'Projects') {
      this.props.router.push('/projects');
    }
    if (destination === 'Skills') {
      this.props.router.push('/skills');
    }
    if (destination === 'Resume') {
      this.props.router.push('/resume');
    }
    if (destination === 'About') {
      this.props.router.push('/about');
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <li onClick={this.navClick.bind(this)}>Home</li>
          <li onClick={this.navClick.bind(this)}>Projects</li>
          <li onClick={this.navClick.bind(this)}>Skills</li>
          <li onClick={this.navClick.bind(this)}>Resume</li>
          <li onClick={this.navClick.bind(this)}>About</li>
        </ul>
      </nav>);
  }
}

export default withRouter(Navigation)