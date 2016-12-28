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

import axios from 'axios'

export const fetchRemoteData = (endpoint) => (dispatch, getState) => {
   dispatch({
      type: 'FETCH_REMOTE_DATA_REQUEST',
      endpoint,
      isFetching: true
   })
   return axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`).then(
      response =>
         dispatch({
            type: 'FETCH_REMOTE_DATA_SUCCESS',
            endpoint,
            isFetching: false,
            response
         })
      )
}
