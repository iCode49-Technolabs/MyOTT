import { VIEW_SOFT_SKILL,VIEW_REVIEW,VIEW_CATEGORY_OF_CONCERN,VIEW_STRATERGIES_ADJUSTMENTS,NEW_STUDENT_DURATION,SHARE_SCHOOL } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const soft_skill = (payload) => async (dispatch) => {
    try {
      
      if (payload.type=="view"){
        const { data } = await api.view_soft_skill(payload);
       
        dispatch({ type: VIEW_SOFT_SKILL, payload: data });
      }
      if (payload.type=="create"){
        const { data } = await api.create_soft_skill(payload);
        
      }
      if (payload.type=="edit"){
        const { data } = await api.edit_soft_skill(payload);
       
      }
      if (payload.type=="delete"){
        const { data } = await api.delete_soft_skill(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export const review_name = (payload) => async (dispatch) => {
    try {
      
      if (payload.type=="view"){
        const { data } = await api.view_review(payload);
       console.log(data)
        dispatch({ type: VIEW_REVIEW, payload: data });
      }
      if (payload.type=="create"){
        const { data } = await api.create_review(payload);
        
      }
      if (payload.type=="edit"){
        const { data } = await api.edit_review(payload);
       
      }
      if (payload.type=="delete"){
        const { data } = await api.delete_review(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  export const category_of_concern = (payload) => async (dispatch) => {
    try {
      
      if (payload.type=="view"){
        const { data } = await api.view_category_of_concern(payload);
    
        dispatch({ type: VIEW_CATEGORY_OF_CONCERN, payload: data });
      }
      if (payload.type=="create"){
        const { data } = await api.create_category_of_concern(payload);
        console.log(data)
      }
      if (payload.type=="edit"){
        const { data } = await api.edit_category_of_concern(payload);
       
      }
      if (payload.type=="delete"){
        const { data } = await api.delete_category_of_concern(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
 

  export const strategies_adjustment = (payload) => async (dispatch) => {
    try {
      
      if (payload.type=="view"){
        const { data } = await api.view_stratergies_adjustments(payload);
       
        dispatch({ type: VIEW_STRATERGIES_ADJUSTMENTS, payload: data });
      }
      if (payload.type=="create"){
        const { data } = await api.create_stratergies_adjustments(payload);
        console.log(data)
      }
      if (payload.type=="edit"){
        const { data } = await api.edit_stratergies_adjustments(payload);
        
      }
      if (payload.type=="delete"){
        const { data } = await api.delete_stratergies_adjustments(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const new_student_duration = (payload) => async (dispatch) => {
    try {
      
      if (payload.type=="view"){
        const { data } = await api.get_new_student_duration(payload);
       console.log(data)
        dispatch({ type:NEW_STUDENT_DURATION, payload: data });
      }
     
      if (payload.type=="edit"){
        const { data } = await api.update_new_student_duration(payload);
        
      }
      
    } catch (error) {
      console.log(error);
    }
  };




  export const share_school_data = (payload) => async (dispatch) => {
    try {
      
      if (payload.type=="view"){
        const { data } = await api.viewShareSchool(payload);
       
        dispatch({ type:SHARE_SCHOOL, payload: data });
      }
     
      if (payload.type=="delete"){
        const { data } = await api.deleteShareSchool(payload);
        
      }
      if (payload.type=="create"){
        const { data } = await api.insertShareSchool(payload);
        
      }
      
    } catch (error) {
      console.log(error);
    }
  };