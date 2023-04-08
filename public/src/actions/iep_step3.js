import { IEP_STEP3,KEY_OUTCOME,VIEW_STRATERGIES_ADJUSTMENTS,NEGOTIATE_GOAL,KEY_OUTCOME_ID } from '../constants/actionTypes';
import * as api from '../api/index.js';





  export const iep_step3 = (payload) => async (dispatch) => {
    try {
      if (payload.type=="create"){
        const { data } = await api.iep_step3(payload);
        console.log(data)
      }
      if (payload.type=="revise"){
        const { data } = await api.updateIEPStep3(payload);
        console.log(data)
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  export const viewIEPStep3 = (payload) => async (dispatch) => {
    try {
      const { data } = await api.viewIEPStep3(payload);
      
      dispatch({ type: IEP_STEP3, payload: data });
    } catch (error) {
      console.log(error);
    }
  };








  export const key_outcome = (payload) => async (dispatch) => {
    try {
     
        
        if (payload.type=="create"){
          const { data } = await api.create_key_outcome(payload);
      
        dispatch({ type: KEY_OUTCOME_ID, payload: data });
        }
        if (payload.type=="revise"){
          const { data } = await api.updateKeyOutcome(payload);
          console.log(data)
        }
    } catch (error) {
      console.log(error);
    }
  };
  export const viewKeyOutcome = (payload) => async (dispatch) => {
    try {
      const { data } = await api.viewKeyOutcome(payload);
      
      dispatch({ type: KEY_OUTCOME, payload: data });
      console.log("key-outcome",data)
    } catch (error) {
      console.log(error);
    }
  };








  export const strategies_adjustment = (payload) => async (dispatch) => {
    try {
      if (payload.type=="create"){
        const { data } = await api.create_stratergies_adjustments(payload);
        console.log(data)
      }
      else
      {const { data } = await api.view_stratergies_adjustments(payload);
      console.log("Strategies/Adjustments",data)
      dispatch({ type: VIEW_STRATERGIES_ADJUSTMENTS, payload: data });}
    } catch (error) {
      console.log(error);
    }
  };
  export const negotiate_goal = (payload) => async (dispatch) => {
    try {
      const { data } = await api.negotiate_goal(payload);
 
      dispatch({ type: NEGOTIATE_GOAL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const teacherTagging = (payload) => async (dispatch) => {
    try {
      const { data } = await api.step3teacherTagging(payload);
      

    } catch (error) {
      console.log(error);
    }
  };