import { PROGRESSDATA } from "../constants/actionTypes";
import * as api from '../api/index.js';



  export const viewAllProgress = (payload) => async (dispatch) => {
    
    try {
      const { data } = await api.targetedOutcome(payload);
      dispatch({ type: PROGRESSDATA, payload: data });
        
    } catch (error) {
      console.log(error);
    }
  };

  