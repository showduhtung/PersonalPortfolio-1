import React from 'react';
import TopNavigation from './TopNavigation.jsx';

export default class Skills extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    require('../skillsChart.js');
  }

  render() {
    return (
      <section className="skills">
        <h3 id="skills">Skills</h3>
        <svg width="960" height="1000"></svg>
      </section>)
  }
}