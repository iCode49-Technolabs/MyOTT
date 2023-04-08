import { FORGOTPASSWORD } from '../constants/actionTypes';
import * as api from '../api/index.js';


  export const forgotpassword = (payload) => async (dispatch) => {
    try {
      const { data } = await api.forgotpassword(payload);
      console.log(data)
      dispatch({ type: FORGOTPASSWORD, payload: data });
    } catch (error) {
      console.log(error);
    }
  };