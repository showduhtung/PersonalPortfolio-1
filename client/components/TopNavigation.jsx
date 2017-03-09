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
          <span id="whiteIcons">
            <a href="mailto:wells.z.tsai@gmail.com" target="_blank" title="wells.z.tsai@gmail.com"><img src="../client/assets/email.svg" type="image/svg+xml" height="35em"/></a>
            <a href="http://linkedin.com/in/wells-tsai" target="_blank" title="Wells' LinkedIn Profile"><img src="../client/assets/linkedin.png" height="55em"/></a>
            <a href="http://github.com/wellstsai" target="_blank" title="Wells' Github Profile"><img src="../client/assets/github.svg" type="image/svg+xml" height="30em"/></a>
          </span>
        </nav>
      </header>);
  }
}

