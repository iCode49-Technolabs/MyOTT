
import * as api from '../api/index.js';

export const ui_logs = (payload) => async (dispatch) => {
    // console.log('payload', payload);
    try {
      const { data } = await api.ui_logs(payload);
      
        
    } catch (error) {
      console.log(error);
    }
  };