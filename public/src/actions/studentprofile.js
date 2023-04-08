

import {STUDENT,PARENT,TEACHER,TEACHERCOMMENTS,STUDENT_PROFILE,REVIEW_PAST_IEP,DOCUMENT_REPOSITRY } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const mapstudentviews = (payload) => async (dispatch) => {
    try {
      const { data } = await api.mapstudentviews(payload);
      if (payload.view=="student"){
        dispatch({ type: STUDENT, payload: data });
      }
      if (payload.view=="teacher"){
        dispatch({ type: TEACHER, payload: data });
      }
      if (payload.view=="parent"){
        dispatch({ type: PARENT, payload: data });
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  
  export const teachercomments = (payload) => async (dispatch) => {
    try {
      const { data } = await api.teachercomments(payload);
      console.log(data)
      dispatch({ type:TEACHERCOMMENTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };



  export const student_profile = (payload) => async (dispatch) => {
    // console.log('payload', payload);
    try {
      const { data } = await api.student_profile(payload);
      // console.log('dataw', data);
        dispatch({ type: STUDENT_PROFILE, payload: data });
        // console.log('dispatch', dispatch());
        
    } catch (error) {
      console.log(error);
    }
  };



  export const review_past_iep = (payload) => async (dispatch) => {
    // console.log('payload', payload);
    try {
      const { data } = await api.review_past_iep(payload);
      // console.log('dataw', data);
        dispatch({ type: REVIEW_PAST_IEP, payload: data });
        // console.log('dispatch', dispatch());
        
    } catch (error) {
      console.log(error);
    }
  };

  export const document_repositry = (payload) => async (dispatch) => {
    // console.log('payload', payload);
    try {
      if (payload.type=="formal_assessment"){
        const { data } = await api.viewPastFormalAssessmentFiles(payload);
        dispatch({ type: DOCUMENT_REPOSITRY, payload: data });
      }
      if (payload.type=="iep"){
        const { data } = await api.viewPastIepFile(payload);
        dispatch({ type: DOCUMENT_REPOSITRY, payload: data });
      }
     
        
    } catch (error) {
      console.log(error);
    }
  };

