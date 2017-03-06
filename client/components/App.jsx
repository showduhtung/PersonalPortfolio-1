import React from 'react';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Home/>
        <Navigation/>
      </div>);
  }
}