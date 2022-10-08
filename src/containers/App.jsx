import React from 'react';
//
import SearchBox from '../components/search-box.comp';
import CardList from '../components/card-list.comp';
import Scroll from '../components/scroll.comp';
import ErrorBoundry from '../components/error-boundry.comp';

//
import './App.css';
//
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: '',
      error: null,
      isLoading: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    // during loading
    this.setState({ isLoading: true });

    // input-from: online-fake-api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ robots: users, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));

    // input-from: using local-data, props
    // this.setState(() => ({ robots }));
  }

  onSearchChange(ev) {
    const { value } = ev.target;

    // input-from: search-box event
    this.setState({ searchField: value });
  }

  render() {
    const { robots, searchField, isLoading, error } = this.state;

    const filterRobots = robots.filter(robo => {
      return robo.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(searchField);

    // during loading
    if (isLoading) {
      return <h1 className="tc f1">Loading...</h1>;
    }

    return (
      <div className="tc">
        {!isLoading && error ? (
          <h1 className="tc f1 red">ERROR! </h1>
        ) : (
          <h1 className="f1">Success! - Robo List</h1>
        )}

        <SearchBox
          searchField={searchField}
          onSearchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundry>
            {filterRobots.length ? (
              <CardList robots={filterRobots} />
            ) : (
              <div>doesn&apos;t exist</div>
            )}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
