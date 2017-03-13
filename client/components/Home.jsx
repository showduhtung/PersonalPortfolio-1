import React from 'react';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Resume from './Resume.jsx';
import About from './About.jsx';
require ('../stylesheets/style.scss');

import ScrollReveal from 'scrollreveal';
window.sr = ScrollReveal();



export default class Home extends React.Component {


  componentDidMount() {

    // fade in text animation
    let $headline = $('.catchHeadline');
    $headline.css('opacity', '0');
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        $headline.css('transition', 'opacity 6000ms');
        $headline.css('opacity', '1');
      }, 0)
    })
    let $name = $('.name');
    $name.css('opacity', '0');
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        $name.css('transition', 'opacity 6000ms');
        $name.css('opacity', '1');
      }, 200)
    })
    let $bottomNav = $('.bottomNav');
    let $footer = $('.footer');
    let $scrollDown = $('.scrollDown');
    $bottomNav.css('opacity', '0');
    $footer.css('opacity', '0');
    $scrollDown.css('opacity', '0');

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        $bottomNav.css('transition', 'opacity 6000ms');
        $bottomNav.css('opacity', '1');
        $footer.css('transition', 'opacity 6000ms');
        $footer.css('opacity', '1');
        $scrollDown.css('transition', 'opacity 6000ms');
        $scrollDown.css('opacity', '1');
      }, 2000)
    })

    // scroll reveal
    const config1 = {
      origin: 'right',
      duration: 700,
      delay: 0,
      distance: '90px',
      scale: 0.9,
      easing: 'ease',
      mobile: true,
      reset: true,
      useDelay: 'once',
      viewFactor: 0.6
    }
    const config2 = {
      origin: 'left',
      duration: 700,
      delay: 0,
      distance: '90px',
      scale: 0.9,
      easing: 'ease',
      mobile: true,
      reset: true,
      useDelay: 'once',
      viewFactor: 0.6
    }

    sr.reveal('.box1', config1);
    sr.reveal('.box2', config2);
  }

  scrollClick() {
    let pos = $('#projects').offset().top - $('#stickyBanner').height();
    $('html, body').animate({
        scrollTop: pos
      }, 1000);
  }


  render() {
    return (
      <div className="main">
        <div className="home">
          <h1 className="catchHeadline ibuildapps">i build apps.</h1>
          <h3 className="name">Wells Z. Tsai</h3>
          <Navigation/>
          <div className="navAnchor">
            <p className="scrollDown animated bounce" onClick={this.scrollClick}>SCROLL<span className="glyphicon glyphicon-menu-down"></span>
            </p>
            <span className="socialIcons scrollDown">
              <a href="mailto:wells.z.tsai@gmail.com" target="_blank" title="wells.z.tsai@gmail.com"><img src="../client/assets/email.svg" type="image/svg+xml" height="35em"/></a>
              <a href="http://linkedin.com/in/wells-tsai" target="_blank" title="Wells' LinkedIn Profile"><img src="../client/assets/linkedin.png" height="55em"/></a>
              <a href="http://github.com/wellstsai" target="_blank" title="Wells' Github Profile"><img src="../client/assets/github.svg" type="image/svg+xml" height="30em"/></a>
            </span>
          </div>
        </div>
        <Projects/>
        <Skills/>
        <Resume/>
        <About id="about"/>
      </div>)
  }
}