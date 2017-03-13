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
        <svg width="920" height="1000" id="skills"></svg>
      </section>)
  }
}