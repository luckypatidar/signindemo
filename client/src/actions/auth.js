import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    history.push('/home');
    dispatch({ type: AUTH, data });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, history) => async (dispatch) => {
  try {
    console.log(form);
    const { data } = await api.signUp(form);
    console.log(data);
    dispatch({ type: AUTH, data });
    history.push('/home');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
