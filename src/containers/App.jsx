import React from 'react';
import { connect } from 'react-redux';
//
import SearchBox from '../components/search-box.comp';
import CardList from '../components/card-list.comp';
import Scroll from '../components/scroll.comp';
import ErrorBoundry from '../components/error-boundry.comp';
// redux
import { setSearchField, requestRobots } from '../redux/robots.actions';

// style
import './App.css';

//
const mapStateToProps = ({ robots, search }) => ({
  searchFieldRx: search.searchField,
  isLoadingRx: robots.isLoading,
  robotsRx: robots.robots,
  errorRx: robots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchFieldRx: text => dispatch(setSearchField(text)),
  onRequestRobotsRx: () => dispatch(requestRobots())
});

class App extends React.Component {
  //
  componentDidMount() {
    const { onRequestRobotsRx } = this.props;

    // input-from: online-fake-api
    onRequestRobotsRx();
  }

  render() {
    const {
      searchFieldRx,
      onSearchFieldRx,
      isLoadingRx,
      robotsRx,
      errorRx
    } = this.props;

    const filterRobots = robotsRx.filter(robo => {
      return robo.name.toLowerCase().includes(searchFieldRx.toLowerCase());
    });

    // console.log(this.props);

    // during loading
    if (isLoadingRx) {
      return <h1 className="tc f1">Loading...</h1>;
    }

    return (
      <div className="tc">
        {!isLoadingRx && errorRx ? (
          <h1 className="tc f1 red">{errorRx}</h1>
        ) : (
          <h1 className="f1">Success! - Robo List</h1>
        )}

        <SearchBox
          searchField={searchFieldRx}
          onSearchChange={onSearchFieldRx}
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
