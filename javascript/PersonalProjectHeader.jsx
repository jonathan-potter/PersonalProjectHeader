import React, {PropTypes} from 'react';

export default React.createClass({
  propTypes: {        
    title: PropTypes.string,
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    wikipediaUrl: PropTypes.string
  },

  render() {
    return (
      <div className='container'>
        { this.renderTitle() }
        { this.renderLinks() }
      </div>
    )
  },

  renderTitle() {
    return (
      <span className='heading'>
        <a href={this.props.demoUrl}>
          {this.props.title}
        </a>
      </span>
    )
  },

  renderLinks() {
    return (
      <nav className='right'>
        <ul>
          { this.renderGithubLink() }
          { this.renderWikipediaLink() }
        </ul>
      </nav>
    )
  },

  renderGithubLink() {
    if (!this.props.githubUrl) { return }

    return (
      <li>
        <a href={this.props.githubUrl} title="Github repo">
          <i className='header-link icon-github-circled'></i>
        </a>
      </li>
    )
  },

  renderWikipediaLink() {
    if (!this.props.wikipediaUrl) { return }

    return (
      <li>
        <a href={this.props.wikipediaUrl} title="Wikipedia">
          <i className='header-link icon-wikipedia'></i>
        </a>
      </li>
    )
  }
})


