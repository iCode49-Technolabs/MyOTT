import { ASSIGNTEACHERCOORDINATOR,COORDINATOR,TOTALSTUDENT,ACTIVESTUDENT,TEACHER,PARENT,STUDENT,SUPPORTSTAFF,STUDENTDETAILS } from '../constants/actionTypes';
import * as api from '../api/index.js';

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
  
  export const activeStudent = (payload) => async (dispatch) => {
    try {
      const { data } = await api.activeStudent(payload);
      
      dispatch({ type: ACTIVESTUDENT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const studentDetails = (payload) => async (dispatch) => {
    try {
      if(payload.type=="total"){
        const { data } = await api.totalStudentDetails(payload);
      
        dispatch({ type: STUDENTDETAILS, payload: data });
      }else{
        const { data } = await api.activeStudentDetails(payload);
      
        dispatch({ type: STUDENTDETAILS, payload: data });
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  
  export const assignteachercoordinator = (payload) => async (dispatch) => {
    try {
      const { data } = await api.assignteachercoordinator(payload);
      
      dispatch({ type: ASSIGNTEACHERCOORDINATOR, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const roledisplay = (payload) => async (dispatch) => {
    try {
      const { data } = await api.roledisplay(payload);
      
      if (payload.role=="Student"){
        
        dispatch({ type: STUDENT, payload: data });
      }
      if (payload.role=="Teacher"){
        dispatch({ type: TEACHER, payload: data });
      }
      if (payload.role=="Coordinator"){
        dispatch({ type: COORDINATOR, payload: data });
      }
      if (payload.role=="Support Staff"){
        dispatch({ type: SUPPORTSTAFF, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };