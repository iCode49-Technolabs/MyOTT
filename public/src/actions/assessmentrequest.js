import { NEWSTUDENTCOUNT,STUDENTASSESSMENTCOUNT,STUDENTDETAILS,UPCOMINGREVIEWS,OVERDUEREVIEWS,VIEWALLREVIEW,FILESTATUS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const newstudentcount = (payload) => async (dispatch) => {
    try {
      const { data } = await api.newstudentcount(payload);
      
      dispatch({ type: NEWSTUDENTCOUNT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const studentassessmentcount = (payload) => async (dispatch) => {
    try {
      const { data } = await api.studentassessmentcount(payload);
      
      dispatch({ type: STUDENTASSESSMENTCOUNT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export const studentdetails = (payload) => async (dispatch) => {
    try {
      const { data } = await api.studentdetails(payload);
      
      dispatch({ type: STUDENTDETAILS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const viewUpcomingOverdueReview = (payload) => async (dispatch) => {
    try {
      const { data } = await api.viewUpcomingOverdueReview(payload);
      if (payload.review_status=="Upcoming Review")
      dispatch({ type: UPCOMINGREVIEWS, payload: data });
      else if(payload.review_status=="Overdue Review")
      dispatch({ type: OVERDUEREVIEWS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  


  export const viewAllReview = (payload) => async (dispatch) => {
    try {
      const { data } = await api.viewAllReview(payload);
      
      dispatch({ type: VIEWALLREVIEW, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const fileUpload = (payload) => async (dispatch) => {
    try {
      const { data } = await api.fileUpload(payload);
      
      dispatch({ type: FILESTATUS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
