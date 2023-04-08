


import {VIEW_SUBJECT } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const view_subject = (payload) => async (dispatch) => {
    try {
      const { data } = await api.view_subject(payload);
      
      dispatch({ type: VIEW_SUBJECT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  