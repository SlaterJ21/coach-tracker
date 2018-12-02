import React, { Component } from 'react'
import { Row, Col, Button, Table } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from './opponent-modal'
import Clock from './clock'

class MatchView extends Component {

  createTableData() {
    let currentMatchData = this.props.currentAthlete.matches[this.props.currentAthlete.matches.length - 1]
    let keys = Object.keys(currentMatchData.wrestler1.scores)
    return keys.map(key => {
      return (
        <tr>
          <td className="center-align"> { currentMatchData.wrestler1.scores[key].length } </td>
          <td className="center-align"> { key } </td>
          <td className="center-align">{ currentMatchData.wrestler2.scores[key].length }</td>
        </tr>
      )
    })
  }


  clock() {
    let timer = 0.00

    return timer
  }

  render() {
    const { info, matches } = this.props.currentAthlete
    let currentMatch = matches[matches.length - 1]
    console.log(currentMatch);

    return (
      <Row>
        <Col l={3}>
          <Table>
            <thead>
              <tr>
                <th data-field="id" className="center-align">{ currentMatch.score.wrestler1 }</th>
                <th data-field="id" className="center-align"></th>
                <th data-field="id" className="center-align">{ currentMatch.score.wrestler2 }</th>
              </tr>
              <tr>
                <th data-field="id" className="center-align">{ currentMatch.wrestler1.name }</th>
                <th data-field="id" className="center-align">VS</th>
                <th data-field="id" className="center-align">{ currentMatch.wrestler2.name }</th>
              </tr>
            </thead>
            <tbody>
              { this.createTableData() }
            </tbody>
          </Table>
        </Col>
        <Col l={6}>
          <Row>
            <Col l={12} className="center-align">
              <Clock/>
            </Col>
          </Row>
          <Row>

          </Row>
        </Col>
        <Col l={6}>
          <Row>
            <Col l={3}></Col>
            <Col l={3}>hello</Col>
            <Col l={3}> second</Col>
          </Row>
          <Row>
            <Col l={3}></Col>
            <Col l={3}>third</Col>
            <Col l={3}>forth</Col>
          </Row>
        </Col>
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
)(MatchView);
