import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createAthlete, submitAthlete } from '../actions'


class CreateAthlete extends Component {

  //create object with school


  render() {
    const { createAthlete, submitAthlete, currentAthlete } = this.props
    return (
      <Row className="App">
      <Col l={1}></Col>
        <Col l={10}>
          <Input id="name" label="Full Name" onChange={e => createAthlete(e.target)} s={12}/>
          <Input id="school" label="School" onChange={e => createAthlete(e.target)} s={12} />
          <Input id="grade" label="Grade" onChange={e => createAthlete(e.target)} s={12} />
          <Input id="weight" label="Weight" onChange={e => createAthlete(e.target)} s={6} />
          <Input id="height" label="Height" onChange={e => createAthlete(e.target)} s={6} />
          <Button onClick={() => {console.log(currentAthlete) ;submitAthlete()}}>Submit</Button>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createAthlete,
  submitAthlete
}, dispatch)

const mapStateToProps = state => {
  return {
    newAthlete: state.mainReducer.newAthlete,
    currentAthlete: state.mainReducer.currentAthlete,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAthlete);
