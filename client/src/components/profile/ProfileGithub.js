import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '2fda9a41308c51943221',
      clientSecret: '918648b3841317e34e2f7dea585511781b9297b5',
      count: 5,
      sort: 'created: asc',
      repos: []
    }
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientSecret, clientId } = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&clientSecret=${clientSecret}`)
      .then(res => res.json())
      .then(data => {
        this.setState({repos: data})
      }).catch(err => console.log(err))
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2" >
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a href={repo.html_url} className="text-info" target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p> {repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ))

    return (
      <div>
        <hr />
        <h3 className="mb-4"> Latest Github Repos> </h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
}

export default ProfileGithub;
