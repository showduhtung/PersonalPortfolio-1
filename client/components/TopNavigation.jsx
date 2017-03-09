import React from 'react';
import {withRouter, Link} from 'react-router';

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.navigate').click(() => {

    })
  }

  navClick (e) {
    let clicked = e.target.innerHTML;
    let stickyHeight = $('#stickyBanner').height();
    let stickyHeightCopy = stickyHeight;
    let $stickyBanner = $('#stickyBanner');
    let stickyTop = $stickyBanner.offset().top;
    let $window = $(window);

    if ($('#projects').css('margin-top') === '0px') {
      stickyHeight = 0;
    }
    if (clicked === 'Home') {
      let pos = 0;
      $window.scrollTop(0);
    }
    else if (clicked === 'Projects') {
      let pos = $('#projects').offset().top - stickyHeightCopy;
      $window.scrollTop(pos);
    }
    else if (clicked === 'Skills') {
      let pos = $('#skills').offset().top - stickyHeight;
      $window.scrollTop(pos);
    }
    else if (clicked === 'Resume') {
      let pos = $('#resume').offset().top - stickyHeight;
      $window.scrollTop(pos);
    }
    else if (clicked === 'About') {
      let pos = $('#about').offset().top - stickyHeight;
      $window.scrollTop(pos);
    }

  }

  render() {
    return (
      <header className="header stickyBanner" id="stickyBanner">
        <h2>Wells Z. Tsai</h2>
        <nav className="topNav">
          <a onClick={this.navClick}>Home</a>
          <a onClick={this.navClick}>Projects</a>
          <a onClick={this.navClick}>Skills</a>
          <a onClick={this.navClick}>Resume</a>
          <a onClick={this.navClick}>About</a>
        </nav>
      </header>);
  }
}

