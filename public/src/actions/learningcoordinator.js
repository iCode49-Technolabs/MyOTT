import { YEARLEVELDATA,POPULATEYEARLEVELS,NEWSTUDENTCOUNT,STUDENTASSESSMENTCOUNT,TOTALSTUDENT,TEACHER,PARENT,NEWSTUDENTDETAILS,BARGRAPHCOUNTS,ALLREVIEWCOUNT,UPCOMINGREVIEWCOUNT,OVERDUEREVIEWCOUNT } from '../constants/actionTypes';
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

  export const studentreviewcount = (payload) => async (dispatch) => {
    try {
      if (payload.type=="current"){
        const { data } = await api.viewAllReviewCount(payload);
      
      dispatch({ type: ALLREVIEWCOUNT, payload: data });
      }
      if (payload.type=="upcoming_overdue"){
        const { data } = await api.viewUpcomingOverdueReviewCount(payload);
      if(payload.review_status=="Upcoming Review")
      dispatch({ type: UPCOMINGREVIEWCOUNT, payload: data });
      else
      dispatch({ type: OVERDUEREVIEWCOUNT, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };


  export const userCount = (payload) => async (dispatch) => {
    try {
      const { data } = await api.userCount(payload);
      if (payload.role=="Student"){
        dispatch({ type: TOTALSTUDENT, payload: data });
      }
      if (payload.role=="Teacher"){
        dispatch({ type: TEACHER, payload: data });
      }
      if (payload.role=="Parent"){
        dispatch({ type: PARENT, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  export const populateyearlevels = (payload) => async (dispatch) => {
    try {
      const { data } = await api.populateyearlevels(payload);
      
      dispatch({ type: POPULATEYEARLEVELS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const yearleveldata = (payload) => async (dispatch) => {
    try {
      const { data } = await api.yearleveldata(payload);
      
      dispatch({ type: YEARLEVELDATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export const newstudentdetails = (payload) => async (dispatch) => {
    try {
      const { data } = await api.newstudentdetails(payload);
      
      dispatch({ type: NEWSTUDENTDETAILS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };



  export const barGraphCounts = (payload) => async (dispatch) => {
    try {
      const { data } = await api.barGraphCounts(payload);
      
      dispatch({ type: BARGRAPHCOUNTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  