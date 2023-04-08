"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = void 0;

var _redux = require("redux");

var _auth = _interopRequireDefault(require("./auth"));

var _studentvoicechoice = _interopRequireDefault(require("./studentvoicechoice"));

var _school_systemadmin = _interopRequireDefault(require("./school_systemadmin"));

var _iep_step = _interopRequireDefault(require("./iep_step1"));

var _iep_step2 = _interopRequireDefault(require("./iep_step2"));

var _iep_step3 = _interopRequireDefault(require("./iep_step3"));

var _studentprofile = _interopRequireDefault(require("./studentprofile"));

var _subject_requiring_adjustment = _interopRequireDefault(require("./subject_requiring_adjustment"));

var _setting = _interopRequireDefault(require("./setting"));

var _teacher_dashboard = _interopRequireDefault(require("./teacher_dashboard"));

var _modificationstudent = _interopRequireDefault(require("./modificationstudent"));

var _organise_formal_assessmentReducer = _interopRequireDefault(require("./organise_formal_assessmentReducer"));

var _unit_lesson_plan = _interopRequireDefault(require("./unit_lesson_plan"));

var _track_progress = _interopRequireDefault(require("./track_progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  auth: _auth["default"],
  track_progress: _track_progress["default"],
  unit_lesson_plan: _unit_lesson_plan["default"],
  organise_formal_assessmentReducer: _organise_formal_assessmentReducer["default"],
  modificationstudent: _modificationstudent["default"],
  setting: _setting["default"],
  studentvoicechoice: _studentvoicechoice["default"],
  school_systemadmin: _school_systemadmin["default"],
  iep_step1: _iep_step["default"],
  iep_step2: _iep_step2["default"],
  iep_step3: _iep_step3["default"],
  studentprofile: _studentprofile["default"],
  subject_requiring_adjustment: _subject_requiring_adjustment["default"],
  teacher_dashboard: _teacher_dashboard["default"]
});
exports.reducers = reducers;