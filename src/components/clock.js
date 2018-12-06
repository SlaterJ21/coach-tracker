import React, { Component } from 'react'
import { Button } from 'react-materialize'

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 5,
      laps: [],
      lastClearedIncrementer: null,
      periods: ['First', 'Second', 'Third', 'OT 1', 'OT 2'],
      periodLengths: [5, 5, 5, 3, 3],
      period: 0
    };
    this.incrementer = null;
  }

//make timer reset after 120 seconds increment counter to increase period!

  nextPeriod() {
    if (this.state.secondsElapsed === 0) {
      clearInterval(this.incrementer);
      this.setState({
        lastClearedIncrementer: this.incrementer,
        period: this.state.period + 1,
        secondsElapsed: this.state.periodLengths[this.state.period + 1]
      })
    }
  }


  handleStartClick() {
    this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed - 1
        })
      , 1000);
    setInterval(() => this.nextPeriod(), 1000)
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    clearInterval(this.nextPeriod);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: this.state.periodLengths[this.state.period],
      laps: []
    });
  }

  handleLapClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.secondsElapsed])
    })
  }

  render() {
    return (
      <div className="stopwatch">
      <h3 className="stopwatch-timer">{this.state.periods[this.state.period]} period</h3>
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
          : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
        )}

        {(this.state.secondsElapsed !== 0 &&
          this.incrementer !== this.state.lastClearedIncrementer
          ? <Button onClick={this.handleLapClick.bind(this)}>lap</Button>
          : null
        )}


        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
          : null
        )}

        <ul className="stopwatch-laps">
          { this.state.laps.map((lap, i) =>
              <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
          }
        </ul>
      </div>
    );
  }
}
