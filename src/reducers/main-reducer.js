import {
  NEW_ATHLETE,
  SUBMIT_ATHLETE,
  LOADED,
  NEW_MATCH,
  CREATE_OPPONENT
} from '../actions'

class Athlete {
  constructor(info, matches = []) {
    this.info = info;
    this.matches = matches
  }
  weightPro(weights) {
    if( weights[weights.length - 1][0] > weights[weights.length - 2][0]){
      return '▲'
    } else if ( weights[weights.length - 1][0] < weights[weights.length - 2][0]) {
      return '▼'
    } else {
      return '-'
    }
  }
  newMatch(wrestler2, periods){
    this.matches.push(
      new Match(
          {...this.info, scores: new Score()},
          {...wrestler2, scores: new Score()},
          periods
      )
    )
  }
}

class Match {
  constructor(wrestler1, wrestler2, periods, score){
    this.wrestler1 = wrestler1;
    this.wrestler2 = wrestler2;
    this.periods = periods
    this.score = {wrestler1: 0, wrestler2: 0}
  }
  pointsFor(wrestler, points) {
    this.score[wrestler] += points
  }
}

class Score {
  constructor(takedowns = [], escapes = [], reversals = [], nearfall = [], pin = []){
    this.takedowns = takedowns;
    this.escapes = escapes;
    this.reversals = reversals;
    this.nearfall = nearfall;
    this.pin = pin;
  }
  addTakedown(type, timeStamp){
    this.takedowns.push([type, timeStamp])
  }
  addEscape(type, timeStamp){
    this.escapes.push([type, timeStamp])
  }
  addReversal(type, timeStamp){
    this.reversals.push([type, timeStamp])
  }
  addNearFall(type, timeStamp, points){
    this.nearfall.push([type, points, timeStamp])
  }
  addPin(type, timeStamp){
    this.pin.push([type, timeStamp])
  }
}

const initialState = {
  view: 'home',
  loaded: false,
  currentAthlete: {},
  newAthlete: {},
  newOpponent: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case LOADED:
      return {
        loaded: !state.loaded,
      }

    case NEW_ATHLETE:
      return {
        ...state,
        newAthlete: {...state.newAthlete, ...action.payload}
      }

    case NEW_MATCH:
      state.currentAthlete.newMatch(state.newOpponent, [2,2,2])
      console.log(state.currentAthlete.matches);
      return {
        ...state,
        view: 'match-view'
      }

    case CREATE_OPPONENT:
      return {
        ...state,
        newOpponent: {...state.newOpponent, ...action.payload}
      }

    case SUBMIT_ATHLETE:
      // let currentAthlete = new Athlete(state.newAthlete)
      let currentAthlete = new Athlete({
        name: 'Jeffry Slater',
        school: 'LuHi',
        grade: 'Graduate',
        weights: [['160', 'Oct 11'], ['158', 'Oct 18'], ['155', 'Oct 25']]
      })
      return {
        ...state,
        currentAthlete: currentAthlete,
        view: 'current-athlete'
      }

  default: return state
  }
}
