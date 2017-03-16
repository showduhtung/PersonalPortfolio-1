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
    if (clicked === 'HOME') {
      let pos = 0;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'PROJECTS') {
      let pos = $('#projects').offset().top - stickyHeightCopy;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'SKILLS') {
      let pos = $('#skills').offset().top - stickyHeight;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'RESUME') {
      let pos = $('#resume').offset().top - stickyHeight;
      $root.animate({
        scrollTop: pos
      }, scrollSpeed);
    }
    else if (clicked === 'ABOUT' || clicked === 'CONTACT') {
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
          <span className="left"><a onClick={this.navClick}>HOME</a><hr/></span>
          <span className="left"><a onClick={this.navClick}>PROJECTS</a><hr/></span>
          <span className="left"><a onClick={this.navClick}>SKILLS</a><hr/></span>
          <img className="logo" src="WZT-cube-filled-grey.png" height="80%" />
          <span className="right"><a onClick={this.navClick}>RESUME</a><hr/></span>
          <span className="right"><a onClick={this.navClick}>ABOUT</a><hr/></span>
          <span className="right"><a onClick={this.navClick}>CONTACT</a><hr/></span>
          <span id="whiteIcons">
            <a href="mailto:wells.z.tsai@gmail.com" target="_blank" title="wells.z.tsai@gmail.com"><img src="email.svg" type="image/svg+xml" height="35em"/></a>
            <a href="http://linkedin.com/in/wells-tsai" target="_blank" title="Wells' LinkedIn Profile"><img src="linkedin.png" height="55em"/></a>
            <a href="http://github.com/wellstsai" target="_blank" title="Wells' Github Profile"><img src="github.svg" type="image/svg+xml" height="30em"/></a>
          </span>
        </nav>
      </header>);
  }
}

