"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTargetedOutcome = exports.FindStrategiesAdjustments = exports.CreateRecordEvidence = exports.deleteShareSchool = exports.viewShareSchool = exports.insertShareSchool = exports.studentconvodata = exports.organise_formal_assessment = exports.viewPastFormalAssessmentFiles = exports.viewPastIepFile = exports.review_past_iep = exports.adjustmentInstruction = exports.updateModificationStudentStatus = exports.deleteModificationStudent = exports.modificationForStudentData = exports.viewModificationStudent = exports.updateModificationStudent = exports.createModificationStudent = exports.fileUpload = exports.student_profile = exports.user_profile_data = exports.update_lesson_unit = exports.view_lesson_unit = exports.create_lesson_unit = exports.teacherassessmentrequest = exports.update_new_student_duration = exports.get_new_student_duration = exports.delete_category_of_concern = exports.edit_category_of_concern = exports.create_category_of_concern = exports.view_category_of_concern = exports.delete_review = exports.edit_review = exports.create_review = exports.view_review = exports.delete_soft_skill = exports.edit_soft_skill = exports.create_soft_skill = exports.view_soft_skill = exports.step3teacherTagging = exports.updateIEPStep3 = exports.viewIEPStep3 = exports.negotiate_goal = exports.iep_step3 = exports.view_subject = exports.delete_stratergies_adjustments = exports.edit_stratergies_adjustments = exports.create_stratergies_adjustments = exports.view_stratergies_adjustments = exports.viewKeyOutcome = exports.updateKeyOutcome = exports.create_key_outcome = exports.teachercomments = exports.mapstudentviews = exports.updateIEPStep2 = exports.viewIEPStep2 = exports.iep_step2 = exports.assessment_type = exports.supportstaff = exports.iepid = exports.iep_step_1_personalInfo = exports.iep_step_1_impInfo = exports.iep_step_1_studentDetails = exports.forgotpassword = exports.create_student_view_review = exports.informationRecords = exports.getRootCauseOfSoftskill = exports.getSubcategoryOfSoftskill = exports.teacherTagging = exports.reviewIEP = exports.studentvoiceupdate = exports.teacherNames = exports.roledisplay = exports.assignteachercoordinator = exports.activeStudentDetails = exports.totalStudentDetails = exports.activeStudent = exports.userCount = exports.studentdetails = exports.viewUpcomingOverdueReviewCount = exports.viewAllReviewCount = exports.barGraphCounts = exports.viewAllReview = exports.viewUpcomingOverdueReview = exports.newstudentdetails = exports.yearleveldata = exports.populateyearlevels = exports.studentassessmentcount = exports.newstudentcount = exports.schoolonboarding = exports.curriculum = exports.schoolsdetails = exports.schoolscount = exports.userscount = exports.schools = exports.roles = exports.signUp = exports.validate = exports.auth = exports.logIn = void 0;
exports.ListRecordEvidence = exports.targetedOutcome = exports.ListingOfLessonPlan = exports.viewLessonPlan = exports.updateLessonPlan = exports.CreateLessonPlan = exports.ViewKeyOutcome = exports.ui_logs = exports.LessonModification = exports.CreateTeacherStrategyRating = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API5005 = _axios["default"].create({
  baseURL: 'http://127.0.0.1:5005/'
});

var API5000 = _axios["default"].create({
  baseURL: 'http://127.0.0.1:5000/'
});

API5005.interceptors.request.use(function (req) {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = "Bearer ".concat(localStorage.getItem('profile').token);
  }

  return req;
});

var logIn = function logIn(formData) {
  return API5005.post('/authen/', formData, {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.logIn = logIn;

var auth = function auth(formData) {
  return API5005.post('/accessuser/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.auth = auth;

var validate = function validate(formData) {
  return API5005.post('/validate/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.validate = validate;

var signUp = function signUp(formData) {
  return API5005.post('/userregistration/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.signUp = signUp;

var roles = function roles(formData) {
  return API5005.post('/roles/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.roles = roles;

var schools = function schools(formData) {
  return API5005.post('/schools/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.schools = schools;

var userscount = function userscount(formData) {
  return API5005.post('/userscount/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.userscount = userscount;

var schoolscount = function schoolscount(formData) {
  return API5005.post('/schoolscount/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.schoolscount = schoolscount;

var schoolsdetails = function schoolsdetails(formData) {
  return API5005.post('/schoolsdetails/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.schoolsdetails = schoolsdetails;

var curriculum = function curriculum(formData) {
  return API5005.post('/curriculumDisplay/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.curriculum = curriculum;

var schoolonboarding = function schoolonboarding(formData) {
  return API5005.post('/registerschool/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.schoolonboarding = schoolonboarding;

var newstudentcount = function newstudentcount(formData) {
  return API5005.post('/studentiepcount/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.newstudentcount = newstudentcount;

var studentassessmentcount = function studentassessmentcount(formData) {
  return API5005.post('/studentassessmentcount/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.studentassessmentcount = studentassessmentcount;

var populateyearlevels = function populateyearlevels(formData) {
  return API5005.post('/populateyearlevels/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.populateyearlevels = populateyearlevels;

var yearleveldata = function yearleveldata(formData) {
  return API5005.post('/yearleveldata/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.yearleveldata = yearleveldata;

var newstudentdetails = function newstudentdetails(formData) {
  return API5005.post('/newstudentdetails/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.newstudentdetails = newstudentdetails;

var viewUpcomingOverdueReview = function viewUpcomingOverdueReview(formData) {
  return API5005.post('/view_upcoming_overdue_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewUpcomingOverdueReview = viewUpcomingOverdueReview;

var viewAllReview = function viewAllReview(formData) {
  return API5005.post('/view_all_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewAllReview = viewAllReview;

var barGraphCounts = function barGraphCounts(formData) {
  return API5005.post('/bar_graph_counts/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.barGraphCounts = barGraphCounts;

var viewAllReviewCount = function viewAllReviewCount(formData) {
  return API5005.post('/view_all_review_count/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewAllReviewCount = viewAllReviewCount;

var viewUpcomingOverdueReviewCount = function viewUpcomingOverdueReviewCount(formData) {
  return API5005.post('/view_upcoming_overdue_review_count/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewUpcomingOverdueReviewCount = viewUpcomingOverdueReviewCount;

var studentdetails = function studentdetails(formData) {
  return API5005.post('/studentdetails/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.studentdetails = studentdetails;

var userCount = function userCount(formData) {
  return API5005.post('/userCount/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.userCount = userCount;

var activeStudent = function activeStudent(formData) {
  return API5005.post('/activeStudent/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.activeStudent = activeStudent;

var totalStudentDetails = function totalStudentDetails(formData) {
  return API5005.post('/total_student_details/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.totalStudentDetails = totalStudentDetails;

var activeStudentDetails = function activeStudentDetails(formData) {
  return API5005.post('/active_student_details/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.activeStudentDetails = activeStudentDetails;

var assignteachercoordinator = function assignteachercoordinator(formData) {
  return API5005.post('/assignteachercoordinator/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.assignteachercoordinator = assignteachercoordinator;

var roledisplay = function roledisplay(formData) {
  return API5005.post('/roledisplay/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.roledisplay = roledisplay;

var teacherNames = function teacherNames(formData) {
  return API5005.post('/teacherNames/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.teacherNames = teacherNames;

var studentvoiceupdate = function studentvoiceupdate(formData) {
  return API5005.post('/studentvoiceupdate/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.studentvoiceupdate = studentvoiceupdate;

var reviewIEP = function reviewIEP(formData) {
  return API5005.post('/reviewIEP/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.reviewIEP = reviewIEP;

var teacherTagging = function teacherTagging(formData) {
  return API5005.post('/teacherTagging/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.teacherTagging = teacherTagging;

var getSubcategoryOfSoftskill = function getSubcategoryOfSoftskill(formData) {
  return API5005.post('/get_subcategory_of_soft_skill/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.getSubcategoryOfSoftskill = getSubcategoryOfSoftskill;

var getRootCauseOfSoftskill = function getRootCauseOfSoftskill(formData) {
  return API5005.post('/get_root_cause_of_soft_skill/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.getRootCauseOfSoftskill = getRootCauseOfSoftskill;

var informationRecords = function informationRecords(formData) {
  return API5005.post('/view_info_iep/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.informationRecords = informationRecords;

var create_student_view_review = function create_student_view_review(formData) {
  return API5005.post('/create_student_view_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_student_view_review = create_student_view_review;

var forgotpassword = function forgotpassword(formData) {
  return API5005.post('/forgetpassword/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.forgotpassword = forgotpassword;

var iep_step_1_studentDetails = function iep_step_1_studentDetails(formData) {
  return API5005.post('/iep_step_1_studentdetails/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.iep_step_1_studentDetails = iep_step_1_studentDetails;

var iep_step_1_impInfo = function iep_step_1_impInfo(formData) {
  return API5005.post('/iep_step_1_importantinfo/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.iep_step_1_impInfo = iep_step_1_impInfo;

var iep_step_1_personalInfo = function iep_step_1_personalInfo(formData) {
  return API5005.post('/iep_step_1_personalinfo/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.iep_step_1_personalInfo = iep_step_1_personalInfo;

var iepid = function iepid(formData) {
  return API5005.post('/iepid/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.iepid = iepid;

var supportstaff = function supportstaff(formData) {
  return API5005.post('/supportstaff/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.supportstaff = supportstaff;

var assessment_type = function assessment_type(formData) {
  return API5005.post('/iepstep2_assessment_type/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.assessment_type = assessment_type;

var iep_step2 = function iep_step2(formData) {
  return API5005.post('/preinformation/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.iep_step2 = iep_step2;

var viewIEPStep2 = function viewIEPStep2(formData) {
  return API5005.post('/view_iep_step2/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewIEPStep2 = viewIEPStep2;

var updateIEPStep2 = function updateIEPStep2(formData) {
  return API5005.post('/update_iep_step2/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.updateIEPStep2 = updateIEPStep2;

var mapstudentviews = function mapstudentviews(formData) {
  return API5005.post('/mapstudentviews/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.mapstudentviews = mapstudentviews;

var teachercomments = function teachercomments(formData) {
  return API5005.post('/teachercomments/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.teachercomments = teachercomments;

var create_key_outcome = function create_key_outcome(formData) {
  return API5005.post('/create_key_outcome/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_key_outcome = create_key_outcome;

var updateKeyOutcome = function updateKeyOutcome(formData) {
  return API5005.post('/update_key_outcome/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.updateKeyOutcome = updateKeyOutcome;

var viewKeyOutcome = function viewKeyOutcome(formData) {
  return API5005.post('/view_key_outcome/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewKeyOutcome = viewKeyOutcome;

var view_stratergies_adjustments = function view_stratergies_adjustments(formData) {
  return API5005.post('/view_stratergies_adjustments/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.view_stratergies_adjustments = view_stratergies_adjustments;

var create_stratergies_adjustments = function create_stratergies_adjustments(formData) {
  return API5005.post('/create_stratergies_adjustments/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_stratergies_adjustments = create_stratergies_adjustments;

var edit_stratergies_adjustments = function edit_stratergies_adjustments(formData) {
  return API5005.post('/update_stratergies_adjustments/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.edit_stratergies_adjustments = edit_stratergies_adjustments;

var delete_stratergies_adjustments = function delete_stratergies_adjustments(formData) {
  return API5005.post('/delete_stratergies_adjustments/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.delete_stratergies_adjustments = delete_stratergies_adjustments;

var view_subject = function view_subject(formData) {
  return API5005.post('/view_subject/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.view_subject = view_subject;

var iep_step3 = function iep_step3(formData) {
  return API5005.post('/create_iep_step_3/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.iep_step3 = iep_step3;

var negotiate_goal = function negotiate_goal(formData) {
  return API5005.post('/negotiate_goal/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.negotiate_goal = negotiate_goal;

var viewIEPStep3 = function viewIEPStep3(formData) {
  return API5005.post('/view_iep_step3/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewIEPStep3 = viewIEPStep3;

var updateIEPStep3 = function updateIEPStep3(formData) {
  return API5005.post('/update_iep_step3/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.updateIEPStep3 = updateIEPStep3;

var step3teacherTagging = function step3teacherTagging(formData) {
  return API5005.post('/teacherTagging/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.step3teacherTagging = step3teacherTagging;

var view_soft_skill = function view_soft_skill(formData) {
  return API5005.post('/view_soft_skill/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.view_soft_skill = view_soft_skill;

var create_soft_skill = function create_soft_skill(formData) {
  return API5005.post('/create_soft_skill/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_soft_skill = create_soft_skill;

var edit_soft_skill = function edit_soft_skill(formData) {
  return API5005.post('/edit_soft_skill/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.edit_soft_skill = edit_soft_skill;

var delete_soft_skill = function delete_soft_skill(formData) {
  return API5005.post('/delete_soft_skill/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.delete_soft_skill = delete_soft_skill;

var view_review = function view_review(formData) {
  return API5005.post('/view_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.view_review = view_review;

var create_review = function create_review(formData) {
  return API5005.post('/create_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_review = create_review;

var edit_review = function edit_review(formData) {
  return API5005.post('/edit_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.edit_review = edit_review;

var delete_review = function delete_review(formData) {
  return API5005.post('/delete_review/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.delete_review = delete_review;

var view_category_of_concern = function view_category_of_concern(formData) {
  return API5005.post('/view_layer1/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.view_category_of_concern = view_category_of_concern;

var create_category_of_concern = function create_category_of_concern(formData) {
  return API5005.post('/create_category_of_concern/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_category_of_concern = create_category_of_concern;

var edit_category_of_concern = function edit_category_of_concern(formData) {
  return API5005.post('/edit_category_of_concern/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.edit_category_of_concern = edit_category_of_concern;

var delete_category_of_concern = function delete_category_of_concern(formData) {
  return API5005.post('/delete_category_of_concern/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.delete_category_of_concern = delete_category_of_concern;

var get_new_student_duration = function get_new_student_duration(formData) {
  return API5005.post('/get_new_student_duration/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.get_new_student_duration = get_new_student_duration;

var update_new_student_duration = function update_new_student_duration(formData) {
  return API5005.post('/update_new_student_duration/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.update_new_student_duration = update_new_student_duration;

var teacherassessmentrequest = function teacherassessmentrequest(formData) {
  return API5005.post('/teacher_assessment_request/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.teacherassessmentrequest = teacherassessmentrequest;

var create_lesson_unit = function create_lesson_unit(formData) {
  return API5005.post('/create_lesson_unit/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.create_lesson_unit = create_lesson_unit;

var view_lesson_unit = function view_lesson_unit(formData) {
  return API5005.post('/view_lesson_unit/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.view_lesson_unit = view_lesson_unit;

var update_lesson_unit = function update_lesson_unit(formData) {
  return API5005.post('/update_lesson_unit/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.update_lesson_unit = update_lesson_unit;

var user_profile_data = function user_profile_data(formData) {
  return API5005.post('/user_profile_data/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.user_profile_data = user_profile_data;

var student_profile = function student_profile(formData) {
  return API5005.post('/student_profile/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.student_profile = student_profile;

var fileUpload = function fileUpload(formData) {
  return API5000.post('/upload_iep', formData);
};

exports.fileUpload = fileUpload;

var createModificationStudent = function createModificationStudent(formData) {
  return API5005.post('/create_modification_student/', formData);
};

exports.createModificationStudent = createModificationStudent;

var updateModificationStudent = function updateModificationStudent(formData) {
  return API5005.post('/update_modification_student/', formData);
};

exports.updateModificationStudent = updateModificationStudent;

var viewModificationStudent = function viewModificationStudent(formData) {
  return API5005.post('/view_modification_student/', formData);
};

exports.viewModificationStudent = viewModificationStudent;

var modificationForStudentData = function modificationForStudentData(formData) {
  return API5005.post('/modification_for_student_data/', formData);
};

exports.modificationForStudentData = modificationForStudentData;

var deleteModificationStudent = function deleteModificationStudent(formData) {
  return API5005.post('/delete_modification_student/', formData);
};

exports.deleteModificationStudent = deleteModificationStudent;

var updateModificationStudentStatus = function updateModificationStudentStatus(formData) {
  return API5005.post('/update_modification_student_status/', formData);
};

exports.updateModificationStudentStatus = updateModificationStudentStatus;

var adjustmentInstruction = function adjustmentInstruction(formData) {
  return API5005.post('/delete_modification_student/', formData);
};

exports.adjustmentInstruction = adjustmentInstruction;

var review_past_iep = function review_past_iep(formData) {
  return API5005.post('/student_view_review_status/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.review_past_iep = review_past_iep;

var viewPastIepFile = function viewPastIepFile(formData) {
  return API5005.post('/view_past_iep_file/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.viewPastIepFile = viewPastIepFile;

var viewPastFormalAssessmentFiles = function viewPastFormalAssessmentFiles(formData) {
  return API5005.post('/view_past_formal_assessment_files/', formData);
};

exports.viewPastFormalAssessmentFiles = viewPastFormalAssessmentFiles;

var organise_formal_assessment = function organise_formal_assessment(formData) {
  return API5005.post('/create_formal_assessment/', formData);
};

exports.organise_formal_assessment = organise_formal_assessment;

var studentconvodata = function studentconvodata(formData) {
  return API5005.post('/teacher_assign_student_details/', formData);
};

exports.studentconvodata = studentconvodata;

var insertShareSchool = function insertShareSchool(formData) {
  return API5005.post('/insertShareSchool/', formData);
};

exports.insertShareSchool = insertShareSchool;

var viewShareSchool = function viewShareSchool(formData) {
  return API5005.post('/viewShareSchool/', formData);
};

exports.viewShareSchool = viewShareSchool;

var deleteShareSchool = function deleteShareSchool(formData) {
  return API5005.post('/deleteShareSchool/', formData);
};

exports.deleteShareSchool = deleteShareSchool;

var CreateRecordEvidence = function CreateRecordEvidence(formData) {
  return API5005.post('/create_record_evidence/', formData);
};

exports.CreateRecordEvidence = CreateRecordEvidence;

var FindStrategiesAdjustments = function FindStrategiesAdjustments(formData) {
  return API5005.post('/find_strategies_adjustments/', formData);
};

exports.FindStrategiesAdjustments = FindStrategiesAdjustments;

var CreateTargetedOutcome = function CreateTargetedOutcome(formData) {
  return API5005.post('/create_targeted_outcome/', formData);
};

exports.CreateTargetedOutcome = CreateTargetedOutcome;

var CreateTeacherStrategyRating = function CreateTeacherStrategyRating(formData) {
  return API5005.post('/create_teacher_strategy_rating/', formData);
};

exports.CreateTeacherStrategyRating = CreateTeacherStrategyRating;

var LessonModification = function LessonModification(formData) {
  return API5005.post('/lesson_modifications/', formData);
};

exports.LessonModification = LessonModification;

var ui_logs = function ui_logs(formData) {
  return API5005.post('/ui_logs/', formData);
};

exports.ui_logs = ui_logs;

var ViewKeyOutcome = function ViewKeyOutcome(formData) {
  return API5005.post('/teacher_view_key_outcome/', formData);
};

exports.ViewKeyOutcome = ViewKeyOutcome;

var CreateLessonPlan = function CreateLessonPlan(formData) {
  return API5005.post('/create_lesson_plan/', formData, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json"
    }
  });
};

exports.CreateLessonPlan = CreateLessonPlan;

var updateLessonPlan = function updateLessonPlan(formData) {
  return API5005.post('/update_lesson_plan/', formData);
};

exports.updateLessonPlan = updateLessonPlan;

var viewLessonPlan = function viewLessonPlan(formData) {
  return API5005.post('/view_lesson_plan/', formData);
};

exports.viewLessonPlan = viewLessonPlan;

var ListingOfLessonPlan = function ListingOfLessonPlan(formData) {
  return API5005.post('/listing_of_lesson_plan/', formData);
};

exports.ListingOfLessonPlan = ListingOfLessonPlan;

var targetedOutcome = function targetedOutcome(formData) {
  return API5005.post('/targetedOutcome/', formData);
};

exports.targetedOutcome = targetedOutcome;

var ListRecordEvidence = function ListRecordEvidence(formData) {
  return API5005.post('/list_record_evidence/', formData);
};

exports.ListRecordEvidence = ListRecordEvidence;