import { LESSONPLAN } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const LessonPlanCreateUpdate = (payload) => async (dispatch) => {
    
    try {
        if (payload.type=="create")
      {
        const { data } = await api.CreateLessonPlan(payload);
    }
    if (payload.type=="update")
    {
      const { data } = await api.updateLessonPlan(payload);
  }
        
    } catch (error) {
      console.log(error);
    }
  };

  export const viewLessonPlan = (payload) => async (dispatch) => {
    
    try {
      const { data } = await api.viewLessonPlan(payload);
      dispatch({ type: LESSONPLAN, payload: data });
        
    } catch (error) {
      console.log(error);
    }
  };

  export const ListingOfLessonPlan = (payload) => async (dispatch) => {
    
    try {
      const { data } = await api.ListingOfLessonPlan(payload);
      dispatch({ type: LESSONPLAN, payload: data });
        
    } catch (error) {
      console.log(error);
    }
  };