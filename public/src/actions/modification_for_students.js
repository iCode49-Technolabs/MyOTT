import { MODIFICATIONSTUDENT } from '../constants/actionTypes';
import * as api from '../api/index.js';





  
  export const modification_for_students = (payload) => async (dispatch) => {
    try {
      if (payload.type=="create"){
        const { data } = await api.createModificationStudent(payload);
      console.log("modificationForStudent",data)
      }
      if (payload.type=="update"){
        const { data } = await api.updateModificationStudent(payload);
      
      
      }
      if (payload.type=="view"){
        const { data } = await api.viewModificationStudent(payload);
      
        dispatch({ type: MODIFICATIONSTUDENT, payload: data });
      }
      if (payload.type=="teacher_view"){
        const { data } = await api.modificationForStudentData(payload);
      
        dispatch({ type: MODIFICATIONSTUDENT, payload: data });
      }
      if (payload.type=="delete"){
        const { data } = await api.deleteModificationStudent(payload);
      
       
      }

      
    } catch (error) {
      console.log(error);
    }
  };


  export const updateModificationStudentStatus = (payload) => async (dispatch) => {
    try {
      
        const { data } = await api.updateModificationStudentStatus(payload);
      
     

      
    } catch (error) {
      console.log(error);
    }
  };

  



  