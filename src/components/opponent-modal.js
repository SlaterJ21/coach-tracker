import React, { Component } from 'react'
import { Row, Col, Button, Input } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newMatch, createOpponent } from '../actions'


const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    }
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    const { newMatch, createOpponent } = this.props
    let modal = [];
    modal.push(
      <Row className="modal" style={this.state.toggle ? display : hide}>
        <Row className="modal-content">
          <Row>
            <Col l={1}></Col>
            <Col l={10}> <h4>Opponent Info</h4> </Col>
          </Row>
          <Row>
            <Col l={1}></Col>
            <Col l={10}>
              <Input id="name" label="Name" onChange={e => createOpponent(e.target)} s={12}/>
              <Input id="school" label="School" onChange={e => createOpponent(e.target)} s={12} />
              <Input id="grade" label="Grade" onChange={e => createOpponent(e.target)} s={12} />
            </Col>
          </Row>
        </Row>
        <Row className="modal-footer">
          <Col l={10}></Col>
          <Col l={2}>
            <Button className="btn" onClick={() => {this.toggle(); newMatch()}}>Submit</Button>
          </Col>
        </Row>
      </Row>
    )

    return (
      <Row>
        <a className="btn" onClick={this.toggle}>Add new match</a>
        {modal}
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  newMatch,
  createOpponent
}, dispatch)

const mapStateToProps = state => {
  return {
    currentAthlete: state.mainReducer.currentAthlete,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
