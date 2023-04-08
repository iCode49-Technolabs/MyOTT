"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.document_repositry = exports.review_past_iep = exports.student_profile = exports.teachercomments = exports.mapstudentviews = void 0;

var _actionTypes = require("../constants/actionTypes");

var api = _interopRequireWildcard(require("../api/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mapstudentviews = function mapstudentviews(payload) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(api.mapstudentviews(payload));

          case 3:
            _ref = _context.sent;
            data = _ref.data;

            if (payload.view == "student") {
              dispatch({
                type: _actionTypes.STUDENT,
                payload: data
              });
            }

            if (payload.view == "teacher") {
              dispatch({
                type: _actionTypes.TEACHER,
                payload: data
              });
            }

            if (payload.view == "parent") {
              dispatch({
                type: _actionTypes.PARENT,
                payload: data
              });
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

exports.mapstudentviews = mapstudentviews;

var teachercomments = function teachercomments(payload) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.teachercomments(payload));

          case 3:
            _ref2 = _context2.sent;
            data = _ref2.data;
            console.log(data);
            dispatch({
              type: _actionTypes.TEACHERCOMMENTS,
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.teachercomments = teachercomments;

var student_profile = function student_profile(payload) {
  return function _callee3(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(api.student_profile(payload));

          case 3:
            _ref3 = _context3.sent;
            data = _ref3.data;
            // console.log('dataw', data);
            dispatch({
              type: _actionTypes.STUDENT_PROFILE,
              payload: data
            }); // console.log('dispatch', dispatch());

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.student_profile = student_profile;

var review_past_iep = function review_past_iep(payload) {
  return function _callee4(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(api.review_past_iep(payload));

          case 3:
            _ref4 = _context4.sent;
            data = _ref4.data;
            // console.log('dataw', data);
            dispatch({
              type: _actionTypes.REVIEW_PAST_IEP,
              payload: data
            }); // console.log('dispatch', dispatch());

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.review_past_iep = review_past_iep;

var document_repositry = function document_repositry(payload) {
  return function _callee5(dispatch) {
    var _ref5, data, _ref6, _data;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (!(payload.type == "formal_assessment")) {
              _context5.next = 7;
              break;
            }

            _context5.next = 4;
            return regeneratorRuntime.awrap(api.viewPastFormalAssessmentFiles(payload));

          case 4:
            _ref5 = _context5.sent;
            data = _ref5.data;
            dispatch({
              type: _actionTypes.DOCUMENT_REPOSITRY,
              payload: data
            });

          case 7:
            if (!(payload.type == "iep")) {
              _context5.next = 13;
              break;
            }

            _context5.next = 10;
            return regeneratorRuntime.awrap(api.viewPastIepFile(payload));

          case 10:
            _ref6 = _context5.sent;
            _data = _ref6.data;
            dispatch({
              type: _actionTypes.DOCUMENT_REPOSITRY,
              payload: _data
            });

          case 13:
            _context5.next = 18;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };
};

exports.document_repositry = document_repositry;