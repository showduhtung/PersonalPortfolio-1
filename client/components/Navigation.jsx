import React from 'react';
import {Link} from 'react-router';
import Chaffle from 'chaffle';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  navClick (e) {
    e.preventDefault();
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
      $('html').animate({scrollTop: 0}, 1000, 'slow');
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
      <nav className="bottomNav">
        <a onClick={this.navClick}>Home</a>
        <a onClick={this.navClick}>Projects</a>
        <a onClick={this.navClick}>Skills</a>
        <a onClick={this.navClick}>Resume</a>
        <a onClick={this.navClick}>About</a>
      </nav>);
  }
}
