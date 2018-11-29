import React, { Component } from 'react';
import { Row } from 'react-materialize'
import Page from './components/page';
import WrestlerTable from './components/wrestler-table'

import './App.css';

class App extends Component {
  render() {
    return (
      <Row>
        <Page/>
        <WrestlerTable/>
      </Row>
    );
  }
}

export default App;
