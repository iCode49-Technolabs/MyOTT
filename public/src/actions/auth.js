import { FORGOTPASSWORD,AUTH,LOGIN, VALIDATE,ROLES,SCHOOLS,SCHOOLSCOUNT,USERSCOUNT,SCHOOLSDETAILS,NEWSTUDENTCOUNT,STUDENTASSESSMENTCOUNT,CURRICULUM,SCHOOLONBOARDING,studentdetails,TOTALSTUDENT,ACTIVESTUDENT,TEACHER,PARENT,STUDENTSCOUNT,COORDINATORSCOUNT,TEACHERSCOUNT,TEACHERNAMES } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const auth = (formData, router) => async (dispatch) => {
  try {
    router('/',{state:{}})
    console.log(formData)
    const { data } = await api.auth(formData);
    var test=JSON.parse(data).body[0]
    test["remember_me"]=formData.remember_me
    dispatch({ type: AUTH, test });
    
    if (JSON.parse(data).body[0].active=="no")
    {
      router("/",{state:{message:"Inactive Account, please contact system admin"}})
    }
    else{
      if (JSON.parse(data).body[0].role=="Super Admin")
      {
      router('/Application_SystemAdmin');
      }
      if (JSON.parse(data).body[0].role=="School Admin")
      {
      router('/School_SystemAdmin');
      }
      if (JSON.parse(data).body[0].role=="Coordinator")
      {
        
      router('/LearningCoordinator');
      }
      if (JSON.parse(data).body[0].role=="Teacher")
      {
      router('/Teacher');
      }
    }
    
  } catch (error) {
    console.log(error);
  }
};
export const login = (formData, router) => async (dispatch) => {
  try {
    
    const { data } = await api.logIn(formData);
    console.log(data,formData)
    dispatch({ type: LOGIN, data });
    
    if(data?.Status=="Login Successful")
    {
      dispatch(auth(formData, router));
    }
    else
    {
      router("/",{state:{message:"Invalid username or password"}})
    }
    
  } catch (error) {
    console.log(error.message);
    
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};
export const validate = (payload) => async (dispatch) => {
  try {
    const { data } = await api.validate(payload);

    dispatch({ type: VALIDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const roles = (payload) => async (dispatch) => {
  try {
    const { data } = await api.roles(payload);
    
    dispatch({ type: ROLES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const schools = (payload) => async (dispatch) => {
  try {
    const { data } = await api.schools(payload);
    
    dispatch({ type: SCHOOLS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const curriculum = (payload) => async (dispatch) => {
  try {
    const { data } = await api.curriculum(payload);
    
    dispatch({ type: CURRICULUM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const schoolonboarding = (payload,router) => async (dispatch) => {
  try {
    const { data } = await api.schoolonboarding(payload);
    //console.log(JSON.parse(data).body)
    // if (JSON.parse(data).body=="SchoolRegistered")
    // {
    //   router("/CurriculumSelection",{state:{school_name:payload.school_name,curriculum:payload.curriculum_name}})
    // }
    //dispatch({ type: SCHOOLONBOARDING, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const schoolscount = (payload) => async (dispatch) => {
  try {
    const { data } = await api.schoolscount(payload);
    
    dispatch({ type: SCHOOLSCOUNT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const userscount = (payload) => async (dispatch) => {
  try {
    const { data } = await api.userscount(payload);
    if (payload.users=="all"){
      dispatch({ type: USERSCOUNT, payload: data });
    }
    if (payload.users=="Student"){
      dispatch({ type: STUDENTSCOUNT, payload: data });
    }
    if (payload.users=="Coordinator"){
      dispatch({ type: COORDINATORSCOUNT, payload: data });
    }
    if (payload.users=="Teacher"){
      dispatch({ type: TEACHERSCOUNT, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
export const schoolsdetails = (payload) => async (dispatch) => {
  try {
    const { data } = await api.schoolsdetails(payload);
    
    dispatch({ type: SCHOOLSDETAILS, payload: data });
  } catch (error) {
    console.log(error);
  }
};




export const forgotpassword = (payload) => async (dispatch) => {
  try {
    const { data } = await api.forgotpassword(payload);
    console.log(data)
    dispatch({ type: FORGOTPASSWORD, payload: data });
  } catch (error) {
    console.log(error);
  }
};