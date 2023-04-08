import { combineReducers } from 'redux';


import auth from './auth';
import studentvoicechoice from './studentvoicechoice';
import school_systemadmin from './school_systemadmin';
import iep_step1 from './iep_step1';
import iep_step2 from './iep_step2';
import iep_step3 from './iep_step3';
import studentprofile from "./studentprofile"
import subject_requiring_adjustment from './subject_requiring_adjustment';
import setting from './setting';
import teacher_dashboard from './teacher_dashboard'
import modificationstudent from './modificationstudent';
import organise_formal_assessmentReducer from "./organise_formal_assessmentReducer"
import unit_lesson_plan from './unit_lesson_plan';
import track_progress from './track_progress';
export const reducers = combineReducers({ auth,track_progress,unit_lesson_plan,organise_formal_assessmentReducer,modificationstudent,setting,studentvoicechoice,school_systemadmin,iep_step1,iep_step2,iep_step3,studentprofile,subject_requiring_adjustment,teacher_dashboard });
