import axios from 'axios';




export const logIn = (formData) => axios.post('https://s6tgcwi6u0.execute-api.ap-south-1.amazonaws.com/default/user_login', formData);
export const auth = (formData) => axios.post('https://0f4l42opng.execute-api.ap-south-1.amazonaws.com/default/authorizeUser', formData);
export const validate = (formData) => axios.post('https://7le10qeqnc.execute-api.ap-south-1.amazonaws.com/default/verify_validateUser', formData);
export const signUp = (formData) => axios.post('https://7uhsn2rma4.execute-api.ap-south-1.amazonaws.com/default/verify_registerUser', formData);
export const roles = (formData) => axios.post('https://nsxc2pb8a7.execute-api.ap-south-1.amazonaws.com/default/rolesdisplay/', formData);
export const schools = (formData) => axios.post('https://4r0ybvsqg8.execute-api.ap-south-1.amazonaws.com/default/verify_schoolDisplay', formData);



export const userscount = (formData) => axios.post('https://ie78q661ec.execute-api.ap-south-1.amazonaws.com/default/sysadmin_userCounts', formData);
export const schoolscount = (formData) => axios.post('https://0rxeznz97l.execute-api.ap-south-1.amazonaws.com/default/sysadmin_schoolCount', formData);
export const schoolsdetails = (formData) => axios.post('https://nf3b90i39e.execute-api.ap-south-1.amazonaws.com/default/sysadmin_schoolDetails', formData);



export const curriculum = (formData) => axios.post('https://owuqiw6800.execute-api.ap-south-1.amazonaws.com/default/curriculumDisplay', formData);
export const schoolonboarding = (formData) => axios.post('https://w9n968g20g.execute-api.ap-south-1.amazonaws.com/default/registerSchool', formData);


export const newstudentcount = (formData) => axios.post('https://33fh0eleg9.execute-api.ap-south-1.amazonaws.com/default/newStudentIEP', formData);
export const studentassessmentcount = (formData) => axios.post('https://rvwdlc3llb.execute-api.ap-south-1.amazonaws.com/default/studentAssessment', formData);
export const populateyearlevels = (formData) => axios.post('https://oi87g4gmaa.execute-api.ap-south-1.amazonaws.com/default/poplateYearLevels', formData);
export const yearleveldata = (formData) => axios.post('https://ik55ur1lt3.execute-api.ap-south-1.amazonaws.com/default/yearLevelData', formData);
export const newstudentdetails = (formData) => axios.post('https://yd5oazyd90.execute-api.ap-south-1.amazonaws.com/default/newStudentDetails', formData);
export const viewUpcomingOverdueReview = (formData) => axios.post('https://u1vfne9mb5.execute-api.ap-south-1.amazonaws.com/default/viewUpcomingOverdueReview', formData);
export const viewAllReview = (formData) => axios.post('https://a1zeel0nzc.execute-api.ap-south-1.amazonaws.com/default/viewAllReview', formData);
export const barGraphCounts = (formData) => axios.post('https://ugdrz8vap9.execute-api.ap-south-1.amazonaws.com/default/barGraphCounts', formData);
export const viewAllReviewCount = (formData) => axios.post('https://osl65hh5v3.execute-api.ap-south-1.amazonaws.com/default/viewAllReview_count', formData);
export const viewUpcomingOverdueReviewCount = (formData) => axios.post('https://u1vfne9mb5.execute-api.ap-south-1.amazonaws.com/default/viewUpcomingOverdueReview', formData);





export const studentdetails = (formData) => axios.post('https://u3yd046z5h.execute-api.ap-south-1.amazonaws.com/default/studentDetails', formData);


export const userCount = (formData) => axios.post('https://5jn35d4wk4.execute-api.ap-south-1.amazonaws.com/default/userCount', formData);
export const activeStudent = (formData) => axios.post('https://lhrgdbhenc.execute-api.ap-south-1.amazonaws.com/default/activeStudent', formData);
export const totalStudentDetails = (formData) => axios.post('https://uwel00tc8k.execute-api.ap-south-1.amazonaws.com/default/totalStudentDetails', formData);
export const activeStudentDetails = (formData) => axios.post('https://pz9pjfcuxh.execute-api.ap-south-1.amazonaws.com/default/activeStudentDetails', formData);



export const assignteachercoordinator = (formData) => axios.post('https://8zs3fop3e7.execute-api.ap-south-1.amazonaws.com/default/stca_student_teacher_assign', formData);
export const roledisplay = (formData) => axios.post('https://xobrhfbkb2.execute-api.ap-south-1.amazonaws.com/default/stca_roleDisplay/', formData);



export const teacherNames = (formData) => axios.post('https://i045cq2o9c.execute-api.ap-south-1.amazonaws.com/default/teacherNames', formData);
export const studentvoiceupdate = (formData) => axios.post('https://i6gqazgap9.execute-api.ap-south-1.amazonaws.com/default/studentVoiceUpdate', formData);
export const reviewIEP = (formData) => axios.post('https://d78p9gszj1.execute-api.ap-south-1.amazonaws.com/default/reviewIEP', formData);
export const getSubcategoryOfSoftskill = (formData) => axios.post('https://wgbyowwtqf.execute-api.ap-south-1.amazonaws.com/default/getSubcategoryOfSoftskill', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const getRootCauseOfSoftskill = (formData) => axios.post('https://4nhu1fpyp2.execute-api.ap-south-1.amazonaws.com/default/getRootCauseOfSoftskill', formData,{headers:{ 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }});
export const teacherTagging = (formData) => axios.post('https://ckb6i4tta1.execute-api.ap-south-1.amazonaws.com/default/teacherTagging', formData);
export const informationRecords = (formData) => axios.post('https://286s06f8m1.execute-api.ap-south-1.amazonaws.com/default/viewInformIEP', formData);
export const create_student_view_review = (formData) => axios.post('https://99zvg27m96.execute-api.ap-south-1.amazonaws.com/default/createStudentViewReview', formData);


export const forgotpassword = (formData)  => axios.post('https://74b8cye1oh.execute-api.ap-south-1.amazonaws.com/default/forgetPassword', formData);


export const iep_step_1_studentDetails = (formData) => axios.post('https://ftqmdh1gh5.execute-api.ap-south-1.amazonaws.com/default/iep_step_1_studentDetails', formData);
export const iep_step_1_impInfo = (formData) => axios.post('https://iam2gw2abb.execute-api.ap-south-1.amazonaws.com/default/studentIEP_impInfo', formData);
export const iep_step_1_personalInfo = (formData) => axios.post('https://x6jicy56cf.execute-api.ap-south-1.amazonaws.com/default/iep_step_1_personalInfo', formData);
export const iepid = (formData) => axios.post('https://febdcqrcga.execute-api.ap-south-1.amazonaws.com/default/iep_step1_iepID', formData);


export const supportstaff = (formData) => axios.post('https://kcfhwbssue.execute-api.ap-south-1.amazonaws.com/default/roleDisplaySupportStaff', formData);
export const assessment_type = (formData) => axios.post('https://s847ojx5a0.execute-api.ap-south-1.amazonaws.com/default/iepStep2', formData);
export const iep_step2 = (formData) => axios.post('https://l34k78dcw5.execute-api.ap-south-1.amazonaws.com/default/preInformation', formData);
export const viewIEPStep2 = (formData) => axios.post('https://54sq2enp48.execute-api.ap-south-1.amazonaws.com/default/viewIEPStep2', formData);
export const updateIEPStep2 = (formData) => axios.post('https://33thc4ytdf.execute-api.ap-south-1.amazonaws.com/default/updateIEPStep2', formData);




export const mapstudentviews = (formData) => axios.post('https://pnawg59b52.execute-api.ap-south-1.amazonaws.com/default/mapStudentViews', formData);
export const teachercomments = (formData) => axios.post('https://usscoxwj2g.execute-api.ap-south-1.amazonaws.com/default/teacherComments', formData);


export const create_key_outcome = (formData) => axios.post('https://iovqgy85th.execute-api.ap-south-1.amazonaws.com/default/createKeyOutcome', formData);
export const updateKeyOutcome = (formData) => axios.post('https://n5fti7bkx4.execute-api.ap-south-1.amazonaws.com/default/updateKeyOutcome', formData);
export const viewKeyOutcome = (formData) => axios.post('https://w71boqcoja.execute-api.ap-south-1.amazonaws.com/default/viewKeyOutcome', formData);

export const view_stratergies_adjustments = (formData) => axios.post('https://vt2lunk2fk.execute-api.ap-south-1.amazonaws.com/default/viewStrategiesAdjustments', formData);
export const create_stratergies_adjustments = (formData) => axios.post('https://16hrp2gj9a.execute-api.ap-south-1.amazonaws.com/default/StratergiesAdjustments_Create', formData);
export const edit_stratergies_adjustments = (formData) => axios.post('https://7gez1dnko7.execute-api.ap-south-1.amazonaws.com/default/updateStratergiesAdjustments', formData);
export const delete_stratergies_adjustments = (formData) => axios.post('https://1ybtyx8p1g.execute-api.ap-south-1.amazonaws.com/default/deleteStratergiesAdjustments', formData);


export const view_subject = (formData) => axios.post('https://ta9fent5t3.execute-api.ap-south-1.amazonaws.com/default/sra_viewSubject', formData);



export const iep_step3 = (formData) => axios.post('https://zum5t8jh2l.execute-api.ap-south-1.amazonaws.com/default/CreateIEPstep3', formData);
export const negotiate_goal = (formData) => axios.post('https://dzoet3yyik.execute-api.ap-south-1.amazonaws.com/default/negotiateGoal', formData);
export const viewIEPStep3 = (formData) => axios.post('https://sfx2csael1.execute-api.ap-south-1.amazonaws.com/default/viewIEPStep3', formData);
export const updateIEPStep3 = (formData) => axios.post('https://8ogvmbjcu1.execute-api.ap-south-1.amazonaws.com/default/updateIEPStep3', formData);
export const step3teacherTagging = (formData) => axios.post('https://ckb6i4tta1.execute-api.ap-south-1.amazonaws.com/default/teacherTagging', formData);


export const view_soft_skill = (formData) => axios.post('/view_soft_skill/', formData);
export const create_soft_skill = (formData) => axios.post('/create_soft_skill/', formData);
export const edit_soft_skill = (formData) => axios.post('/edit_soft_skill/', formData);
export const delete_soft_skill = (formData) => axios.post('/delete_soft_skill/', formData);




export const view_review = (formData) => axios.post('https://fjsxjzqjea.execute-api.ap-south-1.amazonaws.com/default/viewReview', formData);
export const create_review = (formData) => axios.post('https://99eo19jvz1.execute-api.ap-south-1.amazonaws.com/default/createReview', formData);
export const edit_review = (formData) => axios.post('https://o5utcdm1z0.execute-api.ap-south-1.amazonaws.com/default/editReview', formData);
export const delete_review = (formData) => axios.post('https://59blqrczn9.execute-api.ap-south-1.amazonaws.com/default/deleteReview', formData);



export const view_category_of_concern = (formData) => axios.post('https://h12pu92ouk.execute-api.ap-south-1.amazonaws.com/default/viewLayer1', formData);
export const create_category_of_concern = (formData) => axios.post('https://spz4azxw37.execute-api.ap-south-1.amazonaws.com/default/createCategoryOfConcern', formData);
export const edit_category_of_concern = (formData) => axios.post('https://ougvoa1ba9.execute-api.ap-south-1.amazonaws.com/default/editCategoryOfConcern', formData);
export const delete_category_of_concern = (formData) => axios.post('https://rchurtzhz6.execute-api.ap-south-1.amazonaws.com/default/deleteCategoryOfConcern', formData);




export const get_new_student_duration = (formData) => axios.post('https://xqpuhxfkb9.execute-api.ap-south-1.amazonaws.com/default/getNewStudentDuration', formData);
export const update_new_student_duration = (formData) => axios.post('https://qt37ipykj8.execute-api.ap-south-1.amazonaws.com/default/updateNewStudentDuration', formData);



export const teacherassessmentrequest = (formData) => axios.post('https://wi9xzwt6f8.execute-api.ap-south-1.amazonaws.com/default/teacherAssessmentRequest', formData);


export const create_lesson_unit = (formData) => axios.post('https://45383xqu4h.execute-api.ap-south-1.amazonaws.com/default/createLessonUnit', formData);
export const view_lesson_unit = (formData) => axios.post('https://7bpe17t2gi.execute-api.ap-south-1.amazonaws.com/default/viewLessonUnit', formData);
export const update_lesson_unit = (formData) => axios.post('https://hwql2boav5.execute-api.ap-south-1.amazonaws.com/default/updateLessonUnit', formData);


export const user_profile_data = (formData) => axios.post('https://q8holt87k7.execute-api.ap-south-1.amazonaws.com/default/userProfile', formData);


export const student_profile = (formData) => axios.post('https://bbozgk2qlc.execute-api.ap-south-1.amazonaws.com/default/studentProfile', formData);


export const fileUpload = (formData) =>  axios.post('http://ec2-43-205-135-93.ap-south-1.compute.amazonaws.com:8000/upload_iep', formData);






export const createModificationStudent = (formData) => axios.post('https://8rdwfok76a.execute-api.ap-south-1.amazonaws.com/default/createModificationStudent', formData);
export const updateModificationStudent = (formData) => axios.post('https://gpq0sd2u54.execute-api.ap-south-1.amazonaws.com/default/updateModificationStudent', formData);
export const viewModificationStudent = (formData) => axios.post('https://tyimzdqkd4.execute-api.ap-south-1.amazonaws.com/default/viewModificationStudent', formData);
export const modificationForStudentData = (formData) => axios.post('https://tyimzdqkd4.execute-api.ap-south-1.amazonaws.com/default/viewModificationStudent', formData);
export const deleteModificationStudent = (formData) => axios.post('https://bldotxd2j7.execute-api.ap-south-1.amazonaws.com/default/deleteModificationStudent', formData);
export const updateModificationStudentStatus = (formData) => axios.post('https://csetofcsd9.execute-api.ap-south-1.amazonaws.com/default/updateModificationStudentStatus', formData);

export const adjustmentInstruction = (formData) => axios.post('/delete_modification_student/', formData);




export const review_past_iep = (formData) => axios.post('https://uj15m7ycg4.execute-api.ap-south-1.amazonaws.com/default/studentViewReviewStatus', formData);


export const viewPastIepFile = (formData) => axios.post('https://5856g95on7.execute-api.ap-south-1.amazonaws.com/default/viewPastIepFile', formData);


export const viewPastFormalAssessmentFiles = (formData) => axios.post('https://1gpldvtrq5.execute-api.ap-south-1.amazonaws.com/default/viewPastFormalAssessmentFiles', formData);

export const organise_formal_assessment= (formData) => axios.post('https://lctgtwrade.execute-api.ap-south-1.amazonaws.com/default/createFormalAssessment', formData);



export const studentconvodata= (formData) => axios.post('https://scja074bnl.execute-api.ap-south-1.amazonaws.com/default/teacherAssignStudentDetails', formData);




export const insertShareSchool= (formData) => axios.post('https://zdvt5p5dh5.execute-api.ap-south-1.amazonaws.com/default/insertShareSchool', formData);
export const deleteShareSchool= (formData) => axios.post('https://qnsl2zdc19.execute-api.ap-south-1.amazonaws.com/default/deleteShareSchool', formData);
export const viewShareSchool= (formData) => axios.post('https://5zphn6ka4c.execute-api.ap-south-1.amazonaws.com/default/viewShareSchool', formData);