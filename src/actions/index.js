import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import Config from '../config';

import {
  EMAIL_CHANGED, PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

// return a function
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const url = Config.API_URL + "checkeruser";
    const data = { username: email, password };
  
    axios.post(url, data)
    .then((response)=>{
      if(response.data.exist)
        loginUserSuccess(dispatch, response.data)
      else
        loginUserFail(dispatch, "User doest not exist.")
    })
    .catch((err) => loginUserFail(dispatch, err));
  }
}

const loginUserFail = (dispatch, err) => {
  dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSuccess = (dispatch, data) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  Actions.progressView();
}

