import { IEPID,IEP_STEP_1_STUDENTDETAILS,IEP_STEP_1_IMPINFO,IEP_STEP_1_PERSONALINFO } from '../constants/actionTypes';
import * as api from '../api/index.js';


  export const iep_step_1_studentDetails = (payload) => async (dispatch) => {
    try {
      const { data } = await api.iep_step_1_studentDetails(payload);
      
      dispatch({ type: IEP_STEP_1_STUDENTDETAILS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const iep_step_1_impInfo = (payload) => async (dispatch) => {
    try {
      const { data } = await api.iep_step_1_impInfo(payload);
      console.log("Important Info",data)
      dispatch({ type: IEP_STEP_1_IMPINFO, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const iep_step_1_personalInfo = (payload) => async (dispatch) => {
    try {
      const { data } = await api.iep_step_1_personalInfo(payload);
      
      dispatch({ type: IEP_STEP_1_PERSONALINFO, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const iepid = (payload) => async (dispatch) => {
    try {
      const { data } = await api.iepid(payload);
      
      dispatch({ type: IEPID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };