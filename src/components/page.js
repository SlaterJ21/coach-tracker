import React, { Component } from 'react'
import { Row } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from '../logo.svg';
import { load } from '../actions'


class Page extends Component {
  render() {
    const { loaded, load } = this.props
    return (
      <Row className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  load
}, dispatch)

const mapStateToProps = state => {
  return {
    loaded: state.mainReducer.loaded
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
