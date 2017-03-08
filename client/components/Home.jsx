import React from 'react';
import Navigation from './Navigation.jsx';
import Chaffle from 'chaffle';
import Footer from './Footer.jsx';
require ('../stylesheets/style.scss');

export default class Home extends React.Component {

  componentDidMount() {
    // randomize text animation
    let elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
      let chaffle = new Chaffle(el, {
        lang: 'en',
        speed: 5,
        delay: 150
      });
      chaffle.init();
    });

    // fade in text animation
    let $name = $('.name');
    $name.css('opacity', '0');
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        $name.css('transition', 'opacity 6000ms');
        $name.css('opacity', '1');
      }, 2300)
    })
    let $nav = $('nav');
    $nav.css('opacity', '0');
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        $nav.css('transition', 'opacity 6000ms');
        $nav.css('opacity', '1');
      }, 4000)
    })
    let $footer = $('.footer');
    $footer.css('opacity', '0');
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        $footer.css('transition', 'opacity 6000ms');
        $footer.css('opacity', '1');
      }, 4000)
    })
  }

  render() {
    return (
      <div className="home">
        <h1 className="catchHeadline ibuildapps" data-chaffle="en">i build apps.</h1>
        <h3 className="name">Wells Z. Tsai</h3>
        <Navigation/>
        <Footer/>
      </div>)
  }
}

// window.onclick = () => {
//   let $name = $('.name');
//   $name.css('display','block')
//   let $nav = $('nav');
//   $nav.css('display','block')

// }