import { normalize } from 'normalizr';
import * as schema from './schema';

export const shuffleDeck = () => (dispatch, getState) => {
   dispatch({
      type: 'SHUFFLE_DECK'
   })
}

export const changeNumPlayers = (number) => (dispatch, getState) => {
   dispatch({
      type: 'CHANGE_NUM_PLAYERS',
      number
   })
}

export const addNames = (p1name = null, p2name = null, p3name = null, p4name = null) => (dispatch, getState) => {
   dispatch({
      type: 'ADD_NAMES',
      p1name,
      p2name,
      p3name,
      p4name
   })
}

export const deal = (deck, players) => (dispatch, getState) => {
   dispatch({
      type: 'DEAL',
      deck,
      players
   })
}

export const nextPlayer = (players) => (dispatch, getState) => {
   dispatch({
      type: 'NEXT_PLAYER',
      players
   })
}

export const changeStage = (level) => (dispatch, getState) => {
   dispatch({
      type: 'CHANGE_STAGE',
      level
   })
}

export const gatherCards = (p1, p2, p3, p4) => (dispatch, getState) => {
   dispatch({
      type: 'GATHER_CARDS',
      p1,
      p2,
      p3,
      p4
   })
}

export const submitAttribute = (activeAttribute) => (dispatch, getState) => {
   dispatch({
      type: 'SUBMIT_ATTRIBUTE',
      activeAttribute
   })
}
