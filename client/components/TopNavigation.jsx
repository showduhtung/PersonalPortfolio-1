import React from 'react';
import {withRouter, Link} from 'react-router';

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  navClick (e) {
    let clicked = e.target.innerHTML;
    let stickyHeight = $('#stickyBanner').height();
    let stickyHeightCopy = stickyHeight;
    let $stickyBanner = $('#stickyBanner');
    let stickyTop = $stickyBanner.offset().top;
    let $window = $(window);
    let $root = $('html, body');
    let scrollSpeed = 1000;
    if ($('#projects').css('margin-top') === '0px') {
      stickyHeight = 0;
    }
    if (clicked === 'Home') {
      let pos = 0;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'Projects') {
      let pos = $('#projects').offset().top - stickyHeightCopy;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'Skills') {
      let pos = $('#skills').offset().top - stickyHeight;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'Resume') {
      let pos = $('#resume').offset().top - stickyHeight;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'About' || clicked === 'Contact') {
      let pos = $('#about').offset().top - stickyHeight;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }

  }

  render() {
    return (
      <header className="header stickyBanner" id="stickyBanner">
        <nav className="topNav">
          <span className="left"><a onClick={this.navClick}>Home</a><hr/></span>
          <span className="left"><a onClick={this.navClick}>Projects</a><hr/></span>
          <span className="left"><a onClick={this.navClick}>Skills</a><hr/></span>
          <img src="WZTsmall.png" />
          <span className="right"><a onClick={this.navClick}>Resume</a><hr/></span>
          <span className="right"><a onClick={this.navClick}>About</a><hr/></span>
          <span className="right"><a onClick={this.navClick}>Contact</a><hr/></span>
          <span id="whiteIcons">
            <a href="mailto:wells.z.tsai@gmail.com" target="_blank" title="wells.z.tsai@gmail.com"><img src="email.svg" type="image/svg+xml" height="35em"/></a>
            <a href="http://linkedin.com/in/wells-tsai" target="_blank" title="Wells' LinkedIn Profile"><img src="linkedin.png" height="55em"/></a>
            <a href="http://github.com/wellstsai" target="_blank" title="Wells' Github Profile"><img src="github.svg" type="image/svg+xml" height="30em"/></a>
          </span>
        </nav>
      </header>);
  }
}

