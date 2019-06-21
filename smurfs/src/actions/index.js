import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_START});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('hello', res);
      dispatch({type: FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_ERROR, payload: err.data});
    });
};

export const addSmurfs = smurfs => dispatch => {
  console.log(smurfs);
  dispatch({type: ADD_START});
  axios
    .post('http://localhost:3333/smurfs', smurfs)
    .then(res => {
      console.log('from action', res.smurfs);
      dispatch({type: ADD_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: ADD_ERROR, payload: err.msg});
    });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
