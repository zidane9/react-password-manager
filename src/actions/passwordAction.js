import axios from 'axios';

import * as ActionTypes from './constants';

export const fetchDataSuccess = (data) => {
  return {
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const addDataSuccess = (data) => {
  return {
    type: ActionTypes.ADD_DATA_SUCCESS,
    payload: data
  }
}

export const updateDataSuccess = (data) => {
  return {
    type: ActionTypes.UPDATE_DATA_SUCCESS,
    payload: data
  }
}

export const deleteDataSuccess = (deletedId) => {
  return {
    type: ActionTypes.DELETE_DATA_SUCCESS,
    payload: deletedId
  }
}

export const fetchData = () => {
  return (dispatch) => {
    axios.get(`${ActionTypes.SERVER_URL}/passwordsave`)
    .then(res => dispatch(fetchDataSuccess(res.data)))
    .catch(err => console.error(err))
  }
}

export const addData = (data) => {
  data['createdAt'] = new Date();
  // data['updatedAt'] = new Date();
  return (dispatch) => {
    axios.post(`${ActionTypes.SERVER_URL}/passwordsave`, data)
    .then(res => dispatch(addDataSuccess(res.data)))
    .catch(err => console.error(err))
  }
}

export const updateData = (data) => {
  data['updatedAt'] = new Date();
  return (dispatch) => {
    axios.put(`${ActionTypes.SERVER_URL}/passwordsave/${data.id}`, data)
    .then(res => dispatch(updateDataSuccess(res.data)))
    .catch(err => console.error(err))
  }
}

export const deleteData = (deletedId) => {
  return (dispatch) => {
    axios.delete(`${ActionTypes.SERVER_URL}/passwordsave/${deletedId}`)
    .then(res => dispatch(deleteDataSuccess(deletedId)))
    .catch(err => console.error(err))
  }
}
