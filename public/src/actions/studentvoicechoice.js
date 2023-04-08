

import {STUDENTSVOICCHOICE, TEACHER, TEACHERNAMES,TEACHERTAGGING,STUDENT,PARENT,SOFT_SKILL_ROOT_CAUSE,SOFT_SKILL_SUB_CATEGORY } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const teacherNames = (payload) => async (dispatch) => {
    try {
      const { data } = await api.teacherNames(payload);
      
      dispatch({ type: TEACHERNAMES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const teacherTagging = (payload) => async (dispatch) => {
    try {
      const { data } = await api.teacherTagging(payload);
      
      dispatch({ type: TEACHERTAGGING, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const soft_skill_data = (payload) => async (dispatch) => {
    try {
      if(payload.type=="sub_category"){
        const { data } = await api.getSubcategoryOfSoftskill(payload);
      
        dispatch({ type: SOFT_SKILL_SUB_CATEGORY, payload: data });
      }
      else if(payload.type=="root_cause"){
        const { data } = await api.getRootCauseOfSoftskill(payload);
      
        dispatch({ type: SOFT_SKILL_ROOT_CAUSE, payload: data });
      }
      
    } catch (error) {
      console.log(error);
    }
  };


  export const formSubmit = (payload) => async (dispatch) => {
    try {
      if (payload.tab=="inform"){
      const { data } = await api.studentvoiceupdate(payload);
      dispatch({ type: STUDENTSVOICCHOICE, payload: data });
      }
      else if(payload.tab=="student_review"){
        const { data } = await api.create_student_view_review(payload);
        dispatch({ type: STUDENTSVOICCHOICE, payload: data });
      }
      else{
        const { data } = await api.reviewIEP(payload);
        dispatch({ type: STUDENTSVOICCHOICE, payload: data });
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  export const informationRecords = (payload) => async (dispatch) => {
    try {
      const { data } = await api.informationRecords(payload);
      if (payload.view=="student"){
      
      dispatch({ type: STUDENT, payload: data });
      }
      else if (payload.view=="teacher"){
        dispatch({ type: TEACHER, payload: data });
      }
      else{
        
        dispatch({ type:PARENT, payload: data });
      }
      
    } catch (error) {
      console.log(error);
    }
  };