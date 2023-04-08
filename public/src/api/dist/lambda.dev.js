"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewShareSchool = exports.deleteShareSchool = exports.insertShareSchool = exports.studentconvodata = exports.organise_formal_assessment = exports.viewPastFormalAssessmentFiles = exports.viewPastIepFile = exports.review_past_iep = exports.adjustmentInstruction = exports.updateModificationStudentStatus = exports.deleteModificationStudent = exports.modificationForStudentData = exports.viewModificationStudent = exports.updateModificationStudent = exports.createModificationStudent = exports.fileUpload = exports.student_profile = exports.user_profile_data = exports.update_lesson_unit = exports.view_lesson_unit = exports.create_lesson_unit = exports.teacherassessmentrequest = exports.update_new_student_duration = exports.get_new_student_duration = exports.delete_category_of_concern = exports.edit_category_of_concern = exports.create_category_of_concern = exports.view_category_of_concern = exports.delete_review = exports.edit_review = exports.create_review = exports.view_review = exports.delete_soft_skill = exports.edit_soft_skill = exports.create_soft_skill = exports.view_soft_skill = exports.step3teacherTagging = exports.updateIEPStep3 = exports.viewIEPStep3 = exports.negotiate_goal = exports.iep_step3 = exports.view_subject = exports.delete_stratergies_adjustments = exports.edit_stratergies_adjustments = exports.create_stratergies_adjustments = exports.view_stratergies_adjustments = exports.viewKeyOutcome = exports.updateKeyOutcome = exports.create_key_outcome = exports.teachercomments = exports.mapstudentviews = exports.updateIEPStep2 = exports.viewIEPStep2 = exports.iep_step2 = exports.assessment_type = exports.supportstaff = exports.iepid = exports.iep_step_1_personalInfo = exports.iep_step_1_impInfo = exports.iep_step_1_studentDetails = exports.forgotpassword = exports.create_student_view_review = exports.informationRecords = exports.teacherTagging = exports.getRootCauseOfSoftskill = exports.getSubcategoryOfSoftskill = exports.reviewIEP = exports.studentvoiceupdate = exports.teacherNames = exports.roledisplay = exports.assignteachercoordinator = exports.activeStudentDetails = exports.totalStudentDetails = exports.activeStudent = exports.userCount = exports.studentdetails = exports.viewUpcomingOverdueReviewCount = exports.viewAllReviewCount = exports.barGraphCounts = exports.viewAllReview = exports.viewUpcomingOverdueReview = exports.newstudentdetails = exports.yearleveldata = exports.populateyearlevels = exports.studentassessmentcount = exports.newstudentcount = exports.schoolonboarding = exports.curriculum = exports.schoolsdetails = exports.schoolscount = exports.userscount = exports.schools = exports.roles = exports.signUp = exports.validate = exports.auth = exports.logIn = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logIn = function logIn(formData) {
  return _axios["default"].post('https://s6tgcwi6u0.execute-api.ap-south-1.amazonaws.com/default/user_login', formData);
};

exports.logIn = logIn;

var auth = function auth(formData) {
  return _axios["default"].post('https://0f4l42opng.execute-api.ap-south-1.amazonaws.com/default/authorizeUser', formData);
};

exports.auth = auth;

var validate = function validate(formData) {
  return _axios["default"].post('https://7le10qeqnc.execute-api.ap-south-1.amazonaws.com/default/verify_validateUser', formData);
};

exports.validate = validate;

var signUp = function signUp(formData) {
  return _axios["default"].post('https://7uhsn2rma4.execute-api.ap-south-1.amazonaws.com/default/verify_registerUser', formData);
};

exports.signUp = signUp;

var roles = function roles(formData) {
  return _axios["default"].post('https://nsxc2pb8a7.execute-api.ap-south-1.amazonaws.com/default/rolesdisplay/', formData);
};

exports.roles = roles;

var schools = function schools(formData) {
  return _axios["default"].post('https://4r0ybvsqg8.execute-api.ap-south-1.amazonaws.com/default/verify_schoolDisplay', formData);
};

exports.schools = schools;

var userscount = function userscount(formData) {
  return _axios["default"].post('https://ie78q661ec.execute-api.ap-south-1.amazonaws.com/default/sysadmin_userCounts', formData);
};

exports.userscount = userscount;

var schoolscount = function schoolscount(formData) {
  return _axios["default"].post('https://0rxeznz97l.execute-api.ap-south-1.amazonaws.com/default/sysadmin_schoolCount', formData);
};

exports.schoolscount = schoolscount;

var schoolsdetails = function schoolsdetails(formData) {
  return _axios["default"].post('https://nf3b90i39e.execute-api.ap-south-1.amazonaws.com/default/sysadmin_schoolDetails', formData);
};

exports.schoolsdetails = schoolsdetails;

var curriculum = function curriculum(formData) {
  return _axios["default"].post('https://owuqiw6800.execute-api.ap-south-1.amazonaws.com/default/curriculumDisplay', formData);
};

exports.curriculum = curriculum;

var schoolonboarding = function schoolonboarding(formData) {
  return _axios["default"].post('https://w9n968g20g.execute-api.ap-south-1.amazonaws.com/default/registerSchool', formData);
};

exports.schoolonboarding = schoolonboarding;

var newstudentcount = function newstudentcount(formData) {
  return _axios["default"].post('https://33fh0eleg9.execute-api.ap-south-1.amazonaws.com/default/newStudentIEP', formData);
};

exports.newstudentcount = newstudentcount;

var studentassessmentcount = function studentassessmentcount(formData) {
  return _axios["default"].post('https://rvwdlc3llb.execute-api.ap-south-1.amazonaws.com/default/studentAssessment', formData);
};

exports.studentassessmentcount = studentassessmentcount;

var populateyearlevels = function populateyearlevels(formData) {
  return _axios["default"].post('https://oi87g4gmaa.execute-api.ap-south-1.amazonaws.com/default/poplateYearLevels', formData);
};

exports.populateyearlevels = populateyearlevels;

var yearleveldata = function yearleveldata(formData) {
  return _axios["default"].post('https://ik55ur1lt3.execute-api.ap-south-1.amazonaws.com/default/yearLevelData', formData);
};

exports.yearleveldata = yearleveldata;

var newstudentdetails = function newstudentdetails(formData) {
  return _axios["default"].post('https://yd5oazyd90.execute-api.ap-south-1.amazonaws.com/default/newStudentDetails', formData);
};

exports.newstudentdetails = newstudentdetails;

var viewUpcomingOverdueReview = function viewUpcomingOverdueReview(formData) {
  return _axios["default"].post('https://u1vfne9mb5.execute-api.ap-south-1.amazonaws.com/default/viewUpcomingOverdueReview', formData);
};

exports.viewUpcomingOverdueReview = viewUpcomingOverdueReview;

var viewAllReview = function viewAllReview(formData) {
  return _axios["default"].post('https://a1zeel0nzc.execute-api.ap-south-1.amazonaws.com/default/viewAllReview', formData);
};

exports.viewAllReview = viewAllReview;

var barGraphCounts = function barGraphCounts(formData) {
  return _axios["default"].post('https://ugdrz8vap9.execute-api.ap-south-1.amazonaws.com/default/barGraphCounts', formData);
};

exports.barGraphCounts = barGraphCounts;

var viewAllReviewCount = function viewAllReviewCount(formData) {
  return _axios["default"].post('https://osl65hh5v3.execute-api.ap-south-1.amazonaws.com/default/viewAllReview_count', formData);
};

exports.viewAllReviewCount = viewAllReviewCount;

var viewUpcomingOverdueReviewCount = function viewUpcomingOverdueReviewCount(formData) {
  return _axios["default"].post('https://u1vfne9mb5.execute-api.ap-south-1.amazonaws.com/default/viewUpcomingOverdueReview', formData);
};

exports.viewUpcomingOverdueReviewCount = viewUpcomingOverdueReviewCount;

var studentdetails = function studentdetails(formData) {
  return _axios["default"].post('https://u3yd046z5h.execute-api.ap-south-1.amazonaws.com/default/studentDetails', formData);
};

exports.studentdetails = studentdetails;

var userCount = function userCount(formData) {
  return _axios["default"].post('https://5jn35d4wk4.execute-api.ap-south-1.amazonaws.com/default/userCount', formData);
};

exports.userCount = userCount;

var activeStudent = function activeStudent(formData) {
  return _axios["default"].post('https://lhrgdbhenc.execute-api.ap-south-1.amazonaws.com/default/activeStudent', formData);
};

exports.activeStudent = activeStudent;

var totalStudentDetails = function totalStudentDetails(formData) {
  return _axios["default"].post('https://uwel00tc8k.execute-api.ap-south-1.amazonaws.com/default/totalStudentDetails', formData);
};

exports.totalStudentDetails = totalStudentDetails;

var activeStudentDetails = function activeStudentDetails(formData) {
  return _axios["default"].post('https://pz9pjfcuxh.execute-api.ap-south-1.amazonaws.com/default/activeStudentDetails', formData);
};

exports.activeStudentDetails = activeStudentDetails;

var assignteachercoordinator = function assignteachercoordinator(formData) {
  return _axios["default"].post('https://8zs3fop3e7.execute-api.ap-south-1.amazonaws.com/default/stca_student_teacher_assign', formData);
};

exports.assignteachercoordinator = assignteachercoordinator;

var roledisplay = function roledisplay(formData) {
  return _axios["default"].post('https://xobrhfbkb2.execute-api.ap-south-1.amazonaws.com/default/stca_roleDisplay/', formData);
};

exports.roledisplay = roledisplay;

var teacherNames = function teacherNames(formData) {
  return _axios["default"].post('https://i045cq2o9c.execute-api.ap-south-1.amazonaws.com/default/teacherNames', formData);
};

exports.teacherNames = teacherNames;

var studentvoiceupdate = function studentvoiceupdate(formData) {
  return _axios["default"].post('https://i6gqazgap9.execute-api.ap-south-1.amazonaws.com/default/studentVoiceUpdate', formData);
};

exports.studentvoiceupdate = studentvoiceupdate;

var reviewIEP = function reviewIEP(formData) {
  return _axios["default"].post('https://d78p9gszj1.execute-api.ap-south-1.amazonaws.com/default/reviewIEP', formData);
};

exports.reviewIEP = reviewIEP;

var getSubcategoryOfSoftskill = function getSubcategoryOfSoftskill(formData) {
  return _axios["default"].post('https://wgbyowwtqf.execute-api.ap-south-1.amazonaws.com/default/getSubcategoryOfSoftskill', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.getSubcategoryOfSoftskill = getSubcategoryOfSoftskill;

var getRootCauseOfSoftskill = function getRootCauseOfSoftskill(formData) {
  return _axios["default"].post('https://4nhu1fpyp2.execute-api.ap-south-1.amazonaws.com/default/getRootCauseOfSoftskill', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.getRootCauseOfSoftskill = getRootCauseOfSoftskill;

var teacherTagging = function teacherTagging(formData) {
  return _axios["default"].post('https://ckb6i4tta1.execute-api.ap-south-1.amazonaws.com/default/teacherTagging', formData);
};

exports.teacherTagging = teacherTagging;

var informationRecords = function informationRecords(formData) {
  return _axios["default"].post('https://286s06f8m1.execute-api.ap-south-1.amazonaws.com/default/viewInformIEP', formData);
};

exports.informationRecords = informationRecords;

var create_student_view_review = function create_student_view_review(formData) {
  return _axios["default"].post('https://99zvg27m96.execute-api.ap-south-1.amazonaws.com/default/createStudentViewReview', formData);
};

exports.create_student_view_review = create_student_view_review;

var forgotpassword = function forgotpassword(formData) {
  return _axios["default"].post('https://74b8cye1oh.execute-api.ap-south-1.amazonaws.com/default/forgetPassword', formData);
};

exports.forgotpassword = forgotpassword;

var iep_step_1_studentDetails = function iep_step_1_studentDetails(formData) {
  return _axios["default"].post('https://ftqmdh1gh5.execute-api.ap-south-1.amazonaws.com/default/iep_step_1_studentDetails', formData);
};

exports.iep_step_1_studentDetails = iep_step_1_studentDetails;

var iep_step_1_impInfo = function iep_step_1_impInfo(formData) {
  return _axios["default"].post('https://iam2gw2abb.execute-api.ap-south-1.amazonaws.com/default/studentIEP_impInfo', formData);
};

exports.iep_step_1_impInfo = iep_step_1_impInfo;

var iep_step_1_personalInfo = function iep_step_1_personalInfo(formData) {
  return _axios["default"].post('https://x6jicy56cf.execute-api.ap-south-1.amazonaws.com/default/iep_step_1_personalInfo', formData);
};

exports.iep_step_1_personalInfo = iep_step_1_personalInfo;

var iepid = function iepid(formData) {
  return _axios["default"].post('https://febdcqrcga.execute-api.ap-south-1.amazonaws.com/default/iep_step1_iepID', formData);
};

exports.iepid = iepid;

var supportstaff = function supportstaff(formData) {
  return _axios["default"].post('https://kcfhwbssue.execute-api.ap-south-1.amazonaws.com/default/roleDisplaySupportStaff', formData);
};

exports.supportstaff = supportstaff;

var assessment_type = function assessment_type(formData) {
  return _axios["default"].post('https://s847ojx5a0.execute-api.ap-south-1.amazonaws.com/default/iepStep2', formData);
};

exports.assessment_type = assessment_type;

var iep_step2 = function iep_step2(formData) {
  return _axios["default"].post('https://l34k78dcw5.execute-api.ap-south-1.amazonaws.com/default/preInformation', formData);
};

exports.iep_step2 = iep_step2;

var viewIEPStep2 = function viewIEPStep2(formData) {
  return _axios["default"].post('https://54sq2enp48.execute-api.ap-south-1.amazonaws.com/default/viewIEPStep2', formData);
};

exports.viewIEPStep2 = viewIEPStep2;

var updateIEPStep2 = function updateIEPStep2(formData) {
  return _axios["default"].post('https://33thc4ytdf.execute-api.ap-south-1.amazonaws.com/default/updateIEPStep2', formData);
};

exports.updateIEPStep2 = updateIEPStep2;

var mapstudentviews = function mapstudentviews(formData) {
  return _axios["default"].post('https://pnawg59b52.execute-api.ap-south-1.amazonaws.com/default/mapStudentViews', formData);
};

exports.mapstudentviews = mapstudentviews;

var teachercomments = function teachercomments(formData) {
  return _axios["default"].post('https://usscoxwj2g.execute-api.ap-south-1.amazonaws.com/default/teacherComments', formData);
};

exports.teachercomments = teachercomments;

var create_key_outcome = function create_key_outcome(formData) {
  return _axios["default"].post('https://iovqgy85th.execute-api.ap-south-1.amazonaws.com/default/createKeyOutcome', formData);
};

exports.create_key_outcome = create_key_outcome;

var updateKeyOutcome = function updateKeyOutcome(formData) {
  return _axios["default"].post('https://n5fti7bkx4.execute-api.ap-south-1.amazonaws.com/default/updateKeyOutcome', formData);
};

exports.updateKeyOutcome = updateKeyOutcome;

var viewKeyOutcome = function viewKeyOutcome(formData) {
  return _axios["default"].post('https://w71boqcoja.execute-api.ap-south-1.amazonaws.com/default/viewKeyOutcome', formData);
};

exports.viewKeyOutcome = viewKeyOutcome;

var view_stratergies_adjustments = function view_stratergies_adjustments(formData) {
  return _axios["default"].post('https://vt2lunk2fk.execute-api.ap-south-1.amazonaws.com/default/viewStrategiesAdjustments', formData);
};

exports.view_stratergies_adjustments = view_stratergies_adjustments;

var create_stratergies_adjustments = function create_stratergies_adjustments(formData) {
  return _axios["default"].post('https://16hrp2gj9a.execute-api.ap-south-1.amazonaws.com/default/StratergiesAdjustments_Create', formData);
};

exports.create_stratergies_adjustments = create_stratergies_adjustments;

var edit_stratergies_adjustments = function edit_stratergies_adjustments(formData) {
  return _axios["default"].post('https://7gez1dnko7.execute-api.ap-south-1.amazonaws.com/default/updateStratergiesAdjustments', formData);
};

exports.edit_stratergies_adjustments = edit_stratergies_adjustments;

var delete_stratergies_adjustments = function delete_stratergies_adjustments(formData) {
  return _axios["default"].post('https://1ybtyx8p1g.execute-api.ap-south-1.amazonaws.com/default/deleteStratergiesAdjustments', formData);
};

exports.delete_stratergies_adjustments = delete_stratergies_adjustments;

var view_subject = function view_subject(formData) {
  return _axios["default"].post('https://ta9fent5t3.execute-api.ap-south-1.amazonaws.com/default/sra_viewSubject', formData);
};

exports.view_subject = view_subject;

var iep_step3 = function iep_step3(formData) {
  return _axios["default"].post('https://zum5t8jh2l.execute-api.ap-south-1.amazonaws.com/default/CreateIEPstep3', formData);
};

exports.iep_step3 = iep_step3;

var negotiate_goal = function negotiate_goal(formData) {
  return _axios["default"].post('https://dzoet3yyik.execute-api.ap-south-1.amazonaws.com/default/negotiateGoal', formData);
};

exports.negotiate_goal = negotiate_goal;

var viewIEPStep3 = function viewIEPStep3(formData) {
  return _axios["default"].post('https://sfx2csael1.execute-api.ap-south-1.amazonaws.com/default/viewIEPStep3', formData);
};

exports.viewIEPStep3 = viewIEPStep3;

var updateIEPStep3 = function updateIEPStep3(formData) {
  return _axios["default"].post('https://8ogvmbjcu1.execute-api.ap-south-1.amazonaws.com/default/updateIEPStep3', formData);
};

exports.updateIEPStep3 = updateIEPStep3;

var step3teacherTagging = function step3teacherTagging(formData) {
  return _axios["default"].post('https://ckb6i4tta1.execute-api.ap-south-1.amazonaws.com/default/teacherTagging', formData);
};

exports.step3teacherTagging = step3teacherTagging;

var view_soft_skill = function view_soft_skill(formData) {
  return _axios["default"].post('/view_soft_skill/', formData);
};

exports.view_soft_skill = view_soft_skill;

var create_soft_skill = function create_soft_skill(formData) {
  return _axios["default"].post('/create_soft_skill/', formData);
};

exports.create_soft_skill = create_soft_skill;

var edit_soft_skill = function edit_soft_skill(formData) {
  return _axios["default"].post('/edit_soft_skill/', formData);
};

exports.edit_soft_skill = edit_soft_skill;

var delete_soft_skill = function delete_soft_skill(formData) {
  return _axios["default"].post('/delete_soft_skill/', formData);
};

exports.delete_soft_skill = delete_soft_skill;

var view_review = function view_review(formData) {
  return _axios["default"].post('https://fjsxjzqjea.execute-api.ap-south-1.amazonaws.com/default/viewReview', formData);
};

exports.view_review = view_review;

var create_review = function create_review(formData) {
  return _axios["default"].post('https://99eo19jvz1.execute-api.ap-south-1.amazonaws.com/default/createReview', formData);
};

exports.create_review = create_review;

var edit_review = function edit_review(formData) {
  return _axios["default"].post('https://o5utcdm1z0.execute-api.ap-south-1.amazonaws.com/default/editReview', formData);
};

exports.edit_review = edit_review;

var delete_review = function delete_review(formData) {
  return _axios["default"].post('https://59blqrczn9.execute-api.ap-south-1.amazonaws.com/default/deleteReview', formData);
};

exports.delete_review = delete_review;

var view_category_of_concern = function view_category_of_concern(formData) {
  return _axios["default"].post('https://h12pu92ouk.execute-api.ap-south-1.amazonaws.com/default/viewLayer1', formData);
};

exports.view_category_of_concern = view_category_of_concern;

var create_category_of_concern = function create_category_of_concern(formData) {
  return _axios["default"].post('https://spz4azxw37.execute-api.ap-south-1.amazonaws.com/default/createCategoryOfConcern', formData);
};

exports.create_category_of_concern = create_category_of_concern;

var edit_category_of_concern = function edit_category_of_concern(formData) {
  return _axios["default"].post('https://ougvoa1ba9.execute-api.ap-south-1.amazonaws.com/default/editCategoryOfConcern', formData);
};

exports.edit_category_of_concern = edit_category_of_concern;

var delete_category_of_concern = function delete_category_of_concern(formData) {
  return _axios["default"].post('https://rchurtzhz6.execute-api.ap-south-1.amazonaws.com/default/deleteCategoryOfConcern', formData);
};

exports.delete_category_of_concern = delete_category_of_concern;

var get_new_student_duration = function get_new_student_duration(formData) {
  return _axios["default"].post('https://xqpuhxfkb9.execute-api.ap-south-1.amazonaws.com/default/getNewStudentDuration', formData);
};

exports.get_new_student_duration = get_new_student_duration;

var update_new_student_duration = function update_new_student_duration(formData) {
  return _axios["default"].post('https://qt37ipykj8.execute-api.ap-south-1.amazonaws.com/default/updateNewStudentDuration', formData);
};

exports.update_new_student_duration = update_new_student_duration;

var teacherassessmentrequest = function teacherassessmentrequest(formData) {
  return _axios["default"].post('https://wi9xzwt6f8.execute-api.ap-south-1.amazonaws.com/default/teacherAssessmentRequest', formData);
};

exports.teacherassessmentrequest = teacherassessmentrequest;

var create_lesson_unit = function create_lesson_unit(formData) {
  return _axios["default"].post('https://45383xqu4h.execute-api.ap-south-1.amazonaws.com/default/createLessonUnit', formData);
};

exports.create_lesson_unit = create_lesson_unit;

var view_lesson_unit = function view_lesson_unit(formData) {
  return _axios["default"].post('https://7bpe17t2gi.execute-api.ap-south-1.amazonaws.com/default/viewLessonUnit', formData);
};

exports.view_lesson_unit = view_lesson_unit;

var update_lesson_unit = function update_lesson_unit(formData) {
  return _axios["default"].post('https://hwql2boav5.execute-api.ap-south-1.amazonaws.com/default/updateLessonUnit', formData);
};

exports.update_lesson_unit = update_lesson_unit;

var user_profile_data = function user_profile_data(formData) {
  return _axios["default"].post('https://q8holt87k7.execute-api.ap-south-1.amazonaws.com/default/userProfile', formData);
};

exports.user_profile_data = user_profile_data;

var student_profile = function student_profile(formData) {
  return _axios["default"].post('https://bbozgk2qlc.execute-api.ap-south-1.amazonaws.com/default/studentProfile', formData);
};

exports.student_profile = student_profile;

var fileUpload = function fileUpload(formData) {
  return _axios["default"].post('http://ec2-43-205-135-93.ap-south-1.compute.amazonaws.com:8000/upload_iep', formData);
};

exports.fileUpload = fileUpload;

var createModificationStudent = function createModificationStudent(formData) {
  return _axios["default"].post('https://8rdwfok76a.execute-api.ap-south-1.amazonaws.com/default/createModificationStudent', formData);
};

exports.createModificationStudent = createModificationStudent;

var updateModificationStudent = function updateModificationStudent(formData) {
  return _axios["default"].post('https://gpq0sd2u54.execute-api.ap-south-1.amazonaws.com/default/updateModificationStudent', formData);
};

exports.updateModificationStudent = updateModificationStudent;

var viewModificationStudent = function viewModificationStudent(formData) {
  return _axios["default"].post('https://tyimzdqkd4.execute-api.ap-south-1.amazonaws.com/default/viewModificationStudent', formData);
};

exports.viewModificationStudent = viewModificationStudent;

var modificationForStudentData = function modificationForStudentData(formData) {
  return _axios["default"].post('https://tyimzdqkd4.execute-api.ap-south-1.amazonaws.com/default/viewModificationStudent', formData);
};

exports.modificationForStudentData = modificationForStudentData;

var deleteModificationStudent = function deleteModificationStudent(formData) {
  return _axios["default"].post('https://bldotxd2j7.execute-api.ap-south-1.amazonaws.com/default/deleteModificationStudent', formData);
};

exports.deleteModificationStudent = deleteModificationStudent;

var updateModificationStudentStatus = function updateModificationStudentStatus(formData) {
  return _axios["default"].post('https://csetofcsd9.execute-api.ap-south-1.amazonaws.com/default/updateModificationStudentStatus', formData);
};

exports.updateModificationStudentStatus = updateModificationStudentStatus;

var adjustmentInstruction = function adjustmentInstruction(formData) {
  return _axios["default"].post('/delete_modification_student/', formData);
};

exports.adjustmentInstruction = adjustmentInstruction;

var review_past_iep = function review_past_iep(formData) {
  return _axios["default"].post('https://uj15m7ycg4.execute-api.ap-south-1.amazonaws.com/default/studentViewReviewStatus', formData);
};

exports.review_past_iep = review_past_iep;

var viewPastIepFile = function viewPastIepFile(formData) {
  return _axios["default"].post('https://5856g95on7.execute-api.ap-south-1.amazonaws.com/default/viewPastIepFile', formData);
};

exports.viewPastIepFile = viewPastIepFile;

var viewPastFormalAssessmentFiles = function viewPastFormalAssessmentFiles(formData) {
  return _axios["default"].post('https://1gpldvtrq5.execute-api.ap-south-1.amazonaws.com/default/viewPastFormalAssessmentFiles', formData);
};

exports.viewPastFormalAssessmentFiles = viewPastFormalAssessmentFiles;

var organise_formal_assessment = function organise_formal_assessment(formData) {
  return _axios["default"].post('https://lctgtwrade.execute-api.ap-south-1.amazonaws.com/default/createFormalAssessment', formData);
};

exports.organise_formal_assessment = organise_formal_assessment;

var studentconvodata = function studentconvodata(formData) {
  return _axios["default"].post('https://scja074bnl.execute-api.ap-south-1.amazonaws.com/default/teacherAssignStudentDetails', formData);
};

exports.studentconvodata = studentconvodata;

var insertShareSchool = function insertShareSchool(formData) {
  return _axios["default"].post('https://zdvt5p5dh5.execute-api.ap-south-1.amazonaws.com/default/insertShareSchool', formData);
};

exports.insertShareSchool = insertShareSchool;

var deleteShareSchool = function deleteShareSchool(formData) {
  return _axios["default"].post('https://qnsl2zdc19.execute-api.ap-south-1.amazonaws.com/default/deleteShareSchool', formData);
};

exports.deleteShareSchool = deleteShareSchool;

var viewShareSchool = function viewShareSchool(formData) {
  return _axios["default"].post('https://5zphn6ka4c.execute-api.ap-south-1.amazonaws.com/default/viewShareSchool', formData);
};

exports.viewShareSchool = viewShareSchool;