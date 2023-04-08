import { USER_PROFILE_DATA } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const user_profile_data = (payload) => async (dispatch) => {
    // console.log('payload', payload);
    try {
      const { data } = await api.user_profile_data(payload);
      // console.log('dataw', data);
        dispatch({ type: USER_PROFILE_DATA, payload: data });
        console.log('dispatch', dispatch());
        
    } catch (error) {
      console.log(error);
    }
  };