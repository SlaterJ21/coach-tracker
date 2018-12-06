import React, { Component } from 'react';
import { Row } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Page from './components/page';
import WrestlerTable from './components/wrestler-table'
import CreateAthlete from './components/create-athlete'
import CurrentAthlete from './components/current-athlete'
import MatchView from './components/match-view'


import './App.css';

class App extends Component {

viewHash = () => {
 switch (this.props.view) {
    case 'home':
      return (<CreateAthlete/>)

    case 'current-athlete':
      return (<CurrentAthlete/>)

    case 'match-view':
      return <MatchView/>

  default: return (<CreateAthlete/>)
  }

}

  render() {
    const { currentAthlete } = this.props
    return (
      <Row className="app">
        <Page/>
        <WrestlerTable/>
        { this.viewHash() }
      </Row>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// }, dispatch)

const mapStateToProps = state => {
  return {
    currentAthlete: state.mainReducer.currentAthlete,
    view: state.mainReducer.view
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
