import { SUPPORTSTAFF,ASSESSMENT_TYPE,IEP_STEP2 } from '../constants/actionTypes';
import * as api from '../api/index.js';


  export const supportstaff = (payload) => async (dispatch) => {
    try {
      const { data } = await api.supportstaff(payload);
      
      dispatch({ type: SUPPORTSTAFF, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const assessment_type = (payload) => async (dispatch) => {
    try {
      const { data } = await api.assessment_type(payload);
      
      dispatch({ type: ASSESSMENT_TYPE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const iep_step2 = (payload) => async (dispatch) => {
    try {
      if (payload.type=="create"){
      const { data } = await api.iep_step2(payload);
      }
      if (payload.type=="revise"){
        const { data } = await api.updateIEPStep2(payload);
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  export const viewIEPStep2 = (payload) => async (dispatch) => {
    try {
      const { data } = await api.viewIEPStep2(payload);
      
      dispatch({ type: IEP_STEP2, payload: data });
    } catch (error) {
      console.log(error);
    }
  };