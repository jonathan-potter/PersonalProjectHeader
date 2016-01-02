import React from 'react';
import ReactDOM from 'react-dom';

import PersonalProjectHeader from 'javascript/PersonalProjectHeader'

import 'dependencies/skeleton/css/normalize.css';
import 'dependencies/skeleton/css/skeleton.css';
import 'css/header.css'

const TITLE = 'Mandelbrot Set'
const DEMO_URL = 'http://jonathan-potter.github.io/Mandelbrot'
const GITHUB_URL = 'http://github.com/jonathan-potter/Mandelbrot'
const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki/Mandelbrot_set'

let projectHeader = React.createClass({
  render() {
    return (
      <PersonalProjectHeader
        title={TITLE}
        demoUrl={DEMO_URL}
        githubUrl={GITHUB_URL}
        wikipediaUrl={WIKIPEDIA_URL} />
    )
  }
});

let reactContainer = document.getElementById('personal-project-header');
ReactDOM.render(React.createElement(projectHeader), reactContainer);


