import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

// import App from './components/App.jsx';
// import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import About from './components/About.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/skills' component={Skills}/>
    <Route path='/resume' component={Resume}/>
    <Route path='/about' component={About}/>
  </Router>,
  document.getElementById('app'));

let $stickyBanner = $('#stickyBanner');
let stickyTop = $stickyBanner.offset().top;
let $window = $(window);
let $projects = $('#projects');
let $stickyHeight = $stickyBanner.height();
let $socialIcons = $('.socialIcons');
let $whiteIcons = $('#whiteIcons');
$window.on( 'scroll', function(){
  if ($window.scrollTop() >= stickyTop) {
    $stickyBanner.css({'position': "fixed", top: "0%", width: "100%", 'z-index': '999'});
    $projects.css('margin-top', $stickyHeight);
  } else {
    $stickyBanner.css({'position': "relative", top: "0px"});
    $projects.css('margin-top', '0');
  }
  if ($window.scrollTop() >= 50) { // 55px is linkedin logo's height
    $socialIcons.css('display', 'none');
    $whiteIcons.css('display', 'inline');
  } else {
    $socialIcons.css('display', 'initial');
    $whiteIcons.css('display', 'none');

  }
});

// function sticky_relocate() {
//   var window_top = $(window).scrollTop();
//   var div_top = $('#stickyBanner').offset().top;
//   if (window_top >= div_top) {
//     $('#stickyBanner').css({position: "fixed", top: "0%", width: "100%"});
//   }
//   else {
//     console.log('hit');
//     $('#stickyBanner').css({position: "relative", top: "0%", width: "100%"});
//   }
// }

// let $window = $(window);
// $window.on('scroll', () => {
//   let window_top = $(window).scrollTop();
//   let div_top = $('#stickyBanner').offset().top;
//   if (window_top >= div_top) {
//     $('#stickyBanner').css({position: "fixed", top: "0%", width: "100%"});
//   } else {
//     console.log('hit');
//     $('#stickyBanner').css({position: "relative", top: "0%", width: "100%"});
//   }
// })

// $(window).scroll(() => {
//   let window_top = $(window).scrollTop();
//   let div_top = $('#stickyBanner').offset().top;
//   if (window_top >= div_top) {
//     $('#stickyBanner').css({position: "fixed", top: "0%", width: "100%"});
//   }
//   else {
//     console.log('hit');
//     $('#stickyBanner').css({position: "relative", top: "0%", width: "100%"});
//   }
// })
