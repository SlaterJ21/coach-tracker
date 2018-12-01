export const LOADED = 'LOADED'
export const NEW_ATHLETE = 'NEW_ATHLETE'
export const SUBMIT_ATHLETE = 'SUBMIT_ATHLETE'
export const NEW_MATCH = 'NEW_MATCH'
export const CREATE_OPPONENT = 'CREATE_OPPONENT'

export const createAthlete = data => {
  let newAthlete = {
    [data.id]: data.value
  }
  return {
    type: NEW_ATHLETE,
    payload: newAthlete
  }
}

export const submitAthlete = () => {
  return {
    type: SUBMIT_ATHLETE
  }
}

export const createOpponent = data => {
  let newOpponent = {
    [data.id]: data.value
  }
  return {
    type: CREATE_OPPONENT,
    payload: newOpponent
  }
}

export const newMatch = () => {
  return {
    type: NEW_MATCH
  }
}

export const load = () => {
  return {
    type: LOADED,
    payload: 'you did it!!!'
  }
}
