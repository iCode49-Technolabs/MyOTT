import axios from 'axios';

const API5005 = axios.create({ baseURL: 'http://127.0.0.1:5005/' });
const API5000 = axios.create({ baseURL: 'http://127.0.0.1:5000/' });
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













export const userscount = (formData) => API5005.post('/userscount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schoolscount = (formData) => API5005.post('/schoolscount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schoolsdetails = (formData) => API5005.post('/schoolsdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});

export const curriculum = (formData) => API5005.post('/curriculumDisplay/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const schoolonboarding = (formData) => API5005.post('/registerschool/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const newstudentcount = (formData) => API5005.post('/studentiepcount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const studentassessmentcount = (formData) => API5005.post('/studentassessmentcount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const populateyearlevels = (formData) => API5005.post('/populateyearlevels/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const yearleveldata = (formData) => API5005.post('/yearleveldata/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const newstudentdetails = (formData) => API5005.post('/newstudentdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewUpcomingOverdueReview = (formData) => API5005.post('/view_upcoming_overdue_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewAllReview = (formData) => API5005.post('/view_all_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const barGraphCounts = (formData) => API5005.post('/bar_graph_counts/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewAllReviewCount = (formData) => API5005.post('/view_all_review_count/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewUpcomingOverdueReviewCount = (formData) => API5005.post('/view_upcoming_overdue_review_count/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});





export const studentdetails = (formData) => API5005.post('/studentdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const userCount = (formData) => API5005.post('/userCount/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const activeStudent = (formData) => API5005.post('/activeStudent/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const totalStudentDetails = (formData) => API5005.post('/total_student_details/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const activeStudentDetails = (formData) => API5005.post('/active_student_details/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const assignteachercoordinator = (formData) => API5005.post('/assignteachercoordinator/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const roledisplay = (formData) => API5005.post('/roledisplay/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const teacherNames = (formData) => API5005.post('/teacherNames/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const studentvoiceupdate = (formData) => API5005.post('/studentvoiceupdate/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const reviewIEP = (formData) => API5005.post('/reviewIEP/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const teacherTagging = (formData) => API5005.post('/teacherTagging/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const getSubcategoryOfSoftskill = (formData) => API5005.post('/get_subcategory_of_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const getRootCauseOfSoftskill = (formData) => API5005.post('/get_root_cause_of_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const informationRecords = (formData) => API5005.post('/view_info_iep/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_student_view_review = (formData) => API5005.post('/create_student_view_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const forgotpassword = (formData)  => API5005.post('/forgetpassword/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const iep_step_1_studentDetails = (formData) => API5005.post('/iep_step_1_studentdetails/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iep_step_1_impInfo = (formData) => API5005.post('/iep_step_1_importantinfo/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iep_step_1_personalInfo = (formData) => API5005.post('/iep_step_1_personalinfo/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iepid = (formData) => API5005.post('/iepid/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const supportstaff = (formData) => API5005.post('/supportstaff/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const assessment_type = (formData) => API5005.post('/iepstep2_assessment_type/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const iep_step2 = (formData) => API5005.post('/preinformation/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewIEPStep2 = (formData) => API5005.post('/view_iep_step2/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateIEPStep2 = (formData) => API5005.post('/update_iep_step2/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const mapstudentviews = (formData) => API5005.post('/mapstudentviews/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const teachercomments = (formData) => API5005.post('/teachercomments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const create_key_outcome = (formData) => API5005.post('/create_key_outcome/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateKeyOutcome = (formData) => API5005.post('/update_key_outcome/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewKeyOutcome = (formData) => API5005.post('/view_key_outcome/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});

export const view_stratergies_adjustments = (formData) => API5005.post('/view_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_stratergies_adjustments = (formData) => API5005.post('/create_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_stratergies_adjustments = (formData) => API5005.post('/update_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_stratergies_adjustments = (formData) => API5005.post('/delete_stratergies_adjustments/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const view_subject = (formData) => API5005.post('/view_subject/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const iep_step3 = (formData) => API5005.post('/create_iep_step_3/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const negotiate_goal = (formData) => API5005.post('/negotiate_goal/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const viewIEPStep3 = (formData) => API5005.post('/view_iep_step3/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateIEPStep3 = (formData) => API5005.post('/update_iep_step3/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const step3teacherTagging = (formData) => API5005.post('/teacherTagging/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const view_soft_skill = (formData) => API5005.post('/view_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_soft_skill = (formData) => API5005.post('/create_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_soft_skill = (formData) => API5005.post('/edit_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_soft_skill = (formData) => API5005.post('/delete_soft_skill/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const view_review = (formData) => API5005.post('/view_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_review = (formData) => API5005.post('/create_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_review = (formData) => API5005.post('/edit_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_review = (formData) => API5005.post('/delete_review/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const view_category_of_concern = (formData) => API5005.post('/view_layer1/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const create_category_of_concern = (formData) => API5005.post('/create_category_of_concern/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const edit_category_of_concern = (formData) => API5005.post('/edit_category_of_concern/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const delete_category_of_concern = (formData) => API5005.post('/delete_category_of_concern/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});




export const get_new_student_duration = (formData) => API5005.post('/get_new_student_duration/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const update_new_student_duration = (formData) => API5005.post('/update_new_student_duration/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});



export const teacherassessmentrequest = (formData) => API5005.post('/teacher_assessment_request/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const create_lesson_unit = (formData) => API5005.post('/create_lesson_unit/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const view_lesson_unit = (formData) => API5005.post('/view_lesson_unit/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const update_lesson_unit = (formData) => API5005.post('/update_lesson_unit/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const user_profile_data = (formData) => API5005.post('/user_profile_data/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const student_profile = (formData) => API5005.post('/student_profile/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const fileUpload = (formData) => API5000.post('/upload_iep', formData);





export const createModificationStudent = (formData) => API5005.post('/create_modification_student/', formData);
export const updateModificationStudent = (formData) => API5005.post('/update_modification_student/', formData);
export const viewModificationStudent = (formData) => API5005.post('/view_modification_student/', formData);
export const modificationForStudentData = (formData) => API5005.post('/modification_for_student_data/', formData);
export const deleteModificationStudent = (formData) => API5005.post('/delete_modification_student/', formData);
export const updateModificationStudentStatus = (formData) => API5005.post('/update_modification_student_status/', formData);



export const adjustmentInstruction = (formData) => API5005.post('/delete_modification_student/', formData);




export const review_past_iep = (formData) => API5005.post('/student_view_review_status/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const viewPastIepFile = (formData) => API5005.post('/view_past_iep_file/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});


export const viewPastFormalAssessmentFiles = (formData) => API5005.post('/view_past_formal_assessment_files/', formData);

export const organise_formal_assessment= (formData) => API5005.post('/create_formal_assessment/', formData);



export const studentconvodata= (formData) => API5005.post('/teacher_assign_student_details/', formData);







export const insertShareSchool= (formData) => API5005.post('/insertShareSchool/', formData);
export const viewShareSchool= (formData) => API5005.post('/viewShareSchool/', formData);
export const deleteShareSchool= (formData) => API5005.post('/deleteShareSchool/', formData);




export const CreateRecordEvidence= (formData) => API5005.post('/create_record_evidence/', formData);
export const FindStrategiesAdjustments= (formData) => API5005.post('/find_strategies_adjustments/', formData);
export const CreateTargetedOutcome= (formData) => API5005.post('/create_targeted_outcome/', formData);
export const CreateTeacherStrategyRating= (formData) => API5005.post('/create_teacher_strategy_rating/', formData);
export const LessonModification= (formData) => API5005.post('/lesson_modifications/', formData);
export const ui_logs= (formData) => API5005.post('/ui_logs/', formData);

export const ViewKeyOutcome= (formData) => API5005.post('/teacher_view_key_outcome/', formData);

export const CreateLessonPlan= (formData) => API5005.post('/create_lesson_plan/', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const updateLessonPlan= (formData) => API5005.post('/update_lesson_plan/', formData);
export const viewLessonPlan= (formData) => API5005.post('/view_lesson_plan/', formData);
export const ListingOfLessonPlan= (formData) => API5005.post('/listing_of_lesson_plan/', formData);
export const targetedOutcome= (formData) => API5005.post('/targetedOutcome/', formData);
export const ListRecordEvidence= (formData) => API5005.post('/list_record_evidence/', formData);