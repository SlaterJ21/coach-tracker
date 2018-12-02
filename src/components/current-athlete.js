import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from './opponent-modal'


class CurrentAthlete extends Component {

  render() {
    const { info } = this.props.currentAthlete
    return (
      <Row>
        <Row>
          <Col s={3}></Col>
          <Col l={2} className="center-align">
            <h4>{info.weights[info.weights.length - 1][0]}</h4>
          </Col>
          <Col l={2} className="center-align">
            <h4>{info.name}</h4>
          </Col>
          <Col l={2} className="center-align">
            <h4>{info.grade}</h4>
          </Col>
        </Row>
        <Row>
          <Col s={5}></Col>
          <Col l={2} className="center-align">
            <Modal/>
          </Col>
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentAthlete: state.mainReducer.currentAthlete,
  }
}

export default connect(
  mapStateToProps,
  null
)(CurrentAthlete);
