import React, { Component } from 'react'
import { Table, Col, Row } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { load } from '../actions'

const wrestlerData = [
  {
    info: {
      name: 'Joseph Booth',
      gaurdian: 'Emily Booth',
      contact: '516 851 5282'
    },
    attributes: {
      grade: '12',
      height: "5'10",
      weight: ['190', '183', '185']
    },
    results: [
      ['10', '11', '15'],
      ['20', '22', '18']
    ],
    shots: {
      'low ankle': 3,
      'high crotch': 8,
      'outside single': 10
    }
  },
  {
    info: {
      name: 'Jeffry Slater',
      gaurdian: 'Sara Slater',
      contact: '516 551 3722'
    },
    attributes: {
      height: "5'9",
      weight: ['158', '155', '155']
    },
    results: [
      ['10', '8', '14'],
      ['20', '22', '20']
    ],
    shots: {
    'low ankle': 3,
    'high crotch': 8,
    'outside single': 10
    }
  }
]

const headerData = [
  "Name", "10m Dash", "Pull Ups"
]

const getResults = results => {
  console.log(results);
  return results.map( result => {
    return (
      <td> {result[result.length - 1]} </td>
    )
  })
}


class WrestlerTable extends Component {

tableHeader = () => {
  return  headerData.map( item => {
    return (
      <th data-field="id">{ item }</th>
    )
  })
}

wrestlerInfo = () => {
  return  wrestlerData.map( wrestler => {
    console.log(wrestler);
    console.log(wrestler.info.name);
    console.log(wrestler.attributes.weight);
    console.log(wrestler.results);
    return (
      <tr>
        <td>{wrestler.attributes.weight[wrestler.attributes.weight.length - 1]} {wrestler.info.name}</td>
        {getResults(wrestler.results)}
      </tr>
    )
  })
}


  render() {
    const { loaded, load } = this.props
    return (
      <Row>
        <Col s={3}></Col>
        <Col l={6}>
          <Table>
            <thead>
              <tr>
                {this.tableHeader()}
              </tr>
            </thead>

            <tbody>
              {this.wrestlerInfo()}
            </tbody>
          </Table>
        </Col>
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
)(WrestlerTable);
