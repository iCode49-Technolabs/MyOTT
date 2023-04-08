import axios from 'axios';

const API5005 = axios.create({ baseURL: 'http://127.0.0.1:5005/' });
const API5006 = axios.create({ baseURL: 'http://127.0.0.1:5006/' });
const API5007 = axios.create({ baseURL: 'http://127.0.0.1:5007/' });
const API5009 = axios.create({ baseURL: 'http://127.0.0.1:5009/' });
const API5010 = axios.create({ baseURL: 'http://127.0.0.1:5010/' });
const API5011 = axios.create({ baseURL: 'http://127.0.0.1:5011/' });

const API5013 = axios.create({ baseURL: 'http://127.0.0.1:5013/' });
const API5014 = axios.create({ baseURL: 'http://127.0.0.1:5014/' });
const API5015 = axios.create({ baseURL: 'http://127.0.0.1:5015/' });
const API5016 = axios.create({ baseURL: 'http://127.0.0.1:5016/' });
const API5017 = axios.create({ baseURL: 'http://127.0.0.1:5017/' });
const API5018 = axios.create({ baseURL: 'http://127.0.0.1:5018/' });

const API5000 = axios.create({ baseURL: 'http://127.0.0.1:5000/' });

const API5111 = axios.create({ baseURL: 'http://127.0.0.1:5111/' });
const API5123 = axios.create({ baseURL: 'http://127.0.0.1:5123/' });
const API5200 = axios.create({ baseURL: 'http://127.0.0.1:5200/' });
const API5201 = axios.create({ baseURL: 'http://127.0.0.1:5201/' });
const API5202 = axios.create({ baseURL: 'http://127.0.0.1:5202/' });
const API5222 = axios.create({ baseURL: 'http://127.0.0.1:5222/' });

const API5252 = axios.create({ baseURL: 'http://127.0.0.1:5252/' });
const API5255 = axios.create({ baseURL: 'http://127.0.0.1:5255/' });
const API5333 = axios.create({ baseURL: 'http://127.0.0.1:5333/' });
API5005.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('profile').token}`;
  }

  return req;
});




export const logIn = (formData) => API5005.post('/authen/', formData,{headers:{ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const auth = (formData) => API5005.post('/accessuser/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const validate = (formData) => API5005.post('/validate/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const signUp = (formData) => API5005.post('/userregistration/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const roles = (formData) => API5005.post('/roles/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schools = (formData) => API5005.post('/schools/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});













export const userscount = (formData) => API5006.post('/userscount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schoolscount = (formData) => API5006.post('/schoolscount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schoolsdetails = (formData) => API5006.post('/schoolsdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});

export const curriculum = (formData) => API5007.post('/curriculumDisplay/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schoolonboarding = (formData) => API5007.post('/registerschool/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const newstudentcount = (formData) => API5009.post('/studentiepcount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const studentassessmentcount = (formData) => API5009.post('/studentassessmentcount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const populateyearlevels = (formData) => API5009.post('/populateyearlevels/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const yearleveldata = (formData) => API5009.post('/yearleveldata/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const newstudentdetails = (formData) => API5009.post('/newstudentdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewUpcomingOverdueReview = (formData) => API5123.post('/view_upcoming_overdue_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewAllReview = (formData) => API5123.post('/view_all_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const barGraphCounts = (formData) => API5123.post('/bar_graph_counts/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewAllReviewCount = (formData) => API5123.post('/view_all_review_count/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewUpcomingOverdueReviewCount = (formData) => API5123.post('/view_upcoming_overdue_review_count/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});





export const studentdetails = (formData) => API5010.post('/studentdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const userCount = (formData) => API5011.post('/userCount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const activeStudent = (formData) => API5011.post('/activeStudent/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const totalStudentDetails = (formData) => API5011.post('/total_student_details/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const activeStudentDetails = (formData) => API5011.post('/active_student_details/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const assignteachercoordinator = (formData) => API5015.post('/assignteachercoordinator/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const roledisplay = (formData) => API5015.post('/roledisplay/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const teacherNames = (formData) => API5013.post('/teacherNames/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const studentvoiceupdate = (formData) => API5013.post('/studentvoiceupdate/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const reviewIEP = (formData) => API5013.post('/reviewIEP/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const teacherTagging = (formData) => API5013.post('/teacherTagging/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const getSubcategoryOfSoftskill = (formData) => API5005.post('/get_subcategory_of_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const getRootCauseOfSoftskill = (formData) => API5005.post('/get_root_cause_of_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const informationRecords = (formData) => API5013.post('/view_info_iep/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_student_view_review = (formData) => API5255.post('/create_student_view_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const forgotpassword = (formData)  => API5014.post('/forgetpassword/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const iep_step_1_studentDetails = (formData) => API5016.post('/iep_step_1_studentdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iep_step_1_impInfo = (formData) => API5016.post('/iep_step_1_importantinfo/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iep_step_1_personalInfo = (formData) => API5016.post('/iep_step_1_personalinfo/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iepid = (formData) => API5016.post('/iepid/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const supportstaff = (formData) => API5017.post('/supportstaff/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const assessment_type = (formData) => API5017.post('/iepstep2_assessment_type/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iep_step2 = (formData) => API5017.post('/preinformation/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewIEPStep2 = (formData) => API5123.post('/view_iep_step2/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateIEPStep2 = (formData) => API5123.post('/update_iep_step2/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const mapstudentviews = (formData) => API5018.post('/mapstudentviews/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const teachercomments = (formData) => API5018.post('/teachercomments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const create_key_outcome = (formData) => API5222.post('/create_key_outcome/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateKeyOutcome = (formData) => API5123.post('/update_key_outcome/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewKeyOutcome = (formData) => API5123.post('/view_key_outcome/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});

export const view_stratergies_adjustments = (formData) => API5255.post('/view_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_stratergies_adjustments = (formData) => API5255.post('/create_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_stratergies_adjustments = (formData) => API5255.post('/update_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_stratergies_adjustments = (formData) => API5255.post('/delete_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const view_subject = (formData) => API5252.post('/view_subject/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const iep_step3 = (formData) => API5111.post('/create_iep_step_3/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const negotiate_goal = (formData) => API5255.post('/negotiate_goal/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewIEPStep3 = (formData) => API5123.post('/view_iep_step3/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateIEPStep3 = (formData) => API5123.post('/update_iep_step3/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const view_soft_skill = (formData) => API5200.post('/view_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_soft_skill = (formData) => API5200.post('/create_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_soft_skill = (formData) => API5200.post('/edit_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_soft_skill = (formData) => API5200.post('/delete_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const view_review = (formData) => API5201.post('/view_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_review = (formData) => API5201.post('/create_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_review = (formData) => API5201.post('/edit_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_review = (formData) => API5201.post('/delete_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const view_category_of_concern = (formData) => API5123.post('/view_category_of_concerns/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_category_of_concern = (formData) => API5202.post('/create_category_of_concern/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_category_of_concern = (formData) => API5202.post('/edit_category_of_concern/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_category_of_concern = (formData) => API5202.post('/delete_category_of_concern/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const get_new_student_duration = (formData) => API5255.post('/get_new_student_duration/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const update_new_student_duration = (formData) => API5255.post('/update_new_student_duration/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const teacherassessmentrequest = (formData) => API5333.post('/teacher_assessment_request/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const create_lesson_unit = (formData) => API5200.post('/create_lesson_unit/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const view_lesson_unit = (formData) => API5200.post('/view_lesson_unit/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const update_lesson_unit = (formData) => API5200.post('/update_lesson_unit/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const user_profile_data = (formData) => API5255.post('/user_profile_data/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const student_profile = (formData) => API5255.post('/student_profile/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const fileUpload = (formData) => API5000.post('/upload_iep', formData);





export const createModificationStudent = (formData) => API5123.post('/create_modification_student/', formData,{headers:{ 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateModificationStudent = (formData) => API5123.post('/update_modification_student/', formData,{headers:{ 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewModificationStudent = (formData) => API5123.post('/view_modification_student/', formData,{headers:{ 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const modificationForStudentData = (formData) => API5123.post('/modification_for_student_data/', formData);
export const deleteModificationStudent = (formData) => API5123.post('/delete_modification_student/', formData,{headers:{ 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateModificationStudentStatus = (formData) => API5123.post('/update_modification_student_status/', formData,{headers:{ 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const adjustmentInstruction = (formData) => API5123.post('/delete_modification_student/', formData,{headers:{ 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const review_past_iep = (formData) => API5123.post('/student_view_review_status/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const viewPastIepFile = (formData) => API5123.post('/view_past_iep_file/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const viewPastFormalAssessmentFiles = (formData) => API5123.post('/view_past_formal_assessment_files/', formData);




export const organise_formal_assessment= (formData) => API5123.post('/create_formal_assessment/', formData);



export const studentconvodata= (formData) => API5123.post('/teacher_assign_student_details/', formData);






export const insertShareSchool= (formData) => API5010.post('/insertShareSchool/', formData);
export const viewShareSchool= (formData) => API5010.post('/viewShareSchool/', formData);
export const deleteShareSchool= (formData) => API5010.post('/deleteShareSchool/', formData);
