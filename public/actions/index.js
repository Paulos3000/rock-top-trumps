import { normalize } from 'normalizr';
import * as schema from './schema';

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
} // end fetchRemoteData actionCreator
