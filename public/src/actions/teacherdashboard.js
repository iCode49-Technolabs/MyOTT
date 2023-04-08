

import {TEACHERASSESSMENTREQUEST,RECORDEVIDENCE,LESSON_UNIT,STUDENTCONVODATA,STRATEGIESADJUSTMENT,VIEWKEYOUTCOME } from '../constants/actionTypes';
import * as api from '../api/index.js';



  
  export const teacherassessmentrequest = (payload) => async (dispatch) => {
    try {
      const { data } = await api.teacherassessmentrequest(payload);
      
      dispatch({ type:TEACHERASSESSMENTREQUEST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const studentconvodata = (payload) => async (dispatch) => {
    try {
      const { data } = await api.studentconvodata(payload);
      
      dispatch({ type:STUDENTCONVODATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const adjustmentInstruction = (payload) => async (dispatch) => {
    try {
      const { data } = await api.adjustmentInstruction(payload);
   
    } catch (error) {
      console.log(error);
    }
  };

  export const CreateRecordEvidence = (payload) => async (dispatch) => {
    try {
      const { data } = await api.CreateRecordEvidence(payload);
   
    } catch (error) {
      console.log(error);
    }
  };
  export const CreateTargetedOutcome = (payload) => async (dispatch) => {
    try {
      const { data } = await api.CreateTargetedOutcome(payload);
   
    } catch (error) {
      console.log(error);
    }
  };
  export const CreateTeacherStrategyRating = (payload) => async (dispatch) => {
    try {
      const { data } = await api.CreateTeacherStrategyRating(payload);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  export const LessonModification = (payload) => async (dispatch) => {
    try {
      const { data } = await api.LessonModification(payload);
   
    } catch (error) {
      console.log(error);
    }
  };



  export const FindStrategiesAdjustments = (payload) => async (dispatch) => {
    try {
      const { data } = await api.FindStrategiesAdjustments(payload);
      console.log(data)
      dispatch({ type: STRATEGIESADJUSTMENT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const ViewKeyOutcome = (payload) => async (dispatch) => {
    try {
      const { data } = await api.ViewKeyOutcome(payload);
      dispatch({ type: VIEWKEYOUTCOME, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const lesson_unit = (payload) => async (dispatch) => {
   
    try {
      if (payload.type=="create"){
        const { data } = await api.create_lesson_unit(payload);
      }
      if (payload.type=="view")
      {
        const { data } = await api.view_lesson_unit(payload);
        dispatch({ type: LESSON_UNIT, payload: data });
      }
      if(payload.type=="edit")
      {
        console.log("hi")
        const { data } = await api.update_lesson_unit(payload);
      }
      
        // 
        // console.log('dispatch', dispatch());
    } catch (error) {
      console.log(error);
    }
  };

  export const ListRecordEvidence = (payload) => async (dispatch) => {
    
    try {
      const { data } = await api.ListRecordEvidence(payload);
      dispatch({ type: RECORDEVIDENCE, payload: data });
        console.log(data)
    } catch (error) {
      console.log(error);
    }
  };