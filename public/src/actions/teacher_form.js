import { TEACHER_FORM } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const teacher_form = (payload) => async (dispatch) => {
    console.log('payload', payload);
    try {
      const { data } = await api.teacher_form(payload);
      console.log('dataw', data);
        dispatch({ type: TEACHER_FORM, payload: data });
        // console.log('dispatch', dispatch());
    } catch (error) {
      console.log(error);
    }
  };