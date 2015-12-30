import React from 'react';
import ReactDOM from 'react-dom';

import PersonalProjectHeader from 'javascript/PersonalProjectHeader'

// import 'dependencies/skeleton/css/normalize.css';
// import 'dependencies/skeleton/css/skeleton.css';
// import 'css/mandelbrot.css';
// import 'css/header.css';

let thing = React.createClass({
  render() {
    return (
      <div>
        <PersonalProjectHeader />
        <div>another thing</div>
      </div>
    )
  }
});

let reactStuff = document.getElementById('react-stuff');
ReactDOM.render(React.createElement(thing), reactStuff);


