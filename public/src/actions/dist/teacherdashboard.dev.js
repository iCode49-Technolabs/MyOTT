"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRecordEvidence = exports.lesson_unit = exports.ViewKeyOutcome = exports.FindStrategiesAdjustments = exports.LessonModification = exports.CreateTeacherStrategyRating = exports.CreateTargetedOutcome = exports.CreateRecordEvidence = exports.adjustmentInstruction = exports.studentconvodata = exports.teacherassessmentrequest = void 0;

var _actionTypes = require("../constants/actionTypes");

var api = _interopRequireWildcard(require("../api/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var teacherassessmentrequest = function teacherassessmentrequest(payload) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(api.teacherassessmentrequest(payload));

          case 3:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _actionTypes.TEACHERASSESSMENTREQUEST,
              payload: data
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.teacherassessmentrequest = teacherassessmentrequest;

var studentconvodata = function studentconvodata(payload) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.studentconvodata(payload));

          case 3:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _actionTypes.STUDENTCONVODATA,
              payload: data
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.studentconvodata = studentconvodata;

var adjustmentInstruction = function adjustmentInstruction(payload) {
  return function _callee3(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(api.adjustmentInstruction(payload));

          case 3:
            _ref3 = _context3.sent;
            data = _ref3.data;
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.adjustmentInstruction = adjustmentInstruction;

var CreateRecordEvidence = function CreateRecordEvidence(payload) {
  return function _callee4(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(api.CreateRecordEvidence(payload));

          case 3:
            _ref4 = _context4.sent;
            data = _ref4.data;
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.CreateRecordEvidence = CreateRecordEvidence;

var CreateTargetedOutcome = function CreateTargetedOutcome(payload) {
  return function _callee5(dispatch) {
    var _ref5, data;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(api.CreateTargetedOutcome(payload));

          case 3:
            _ref5 = _context5.sent;
            data = _ref5.data;
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.CreateTargetedOutcome = CreateTargetedOutcome;

var CreateTeacherStrategyRating = function CreateTeacherStrategyRating(payload) {
  return function _callee6(dispatch) {
    var _ref6, data;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(api.CreateTeacherStrategyRating(payload));

          case 3:
            _ref6 = _context6.sent;
            data = _ref6.data;
            console.log(data);
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.CreateTeacherStrategyRating = CreateTeacherStrategyRating;

var LessonModification = function LessonModification(payload) {
  return function _callee7(dispatch) {
    var _ref7, data;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(api.LessonModification(payload));

          case 3:
            _ref7 = _context7.sent;
            data = _ref7.data;
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.LessonModification = LessonModification;

var FindStrategiesAdjustments = function FindStrategiesAdjustments(payload) {
  return function _callee8(dispatch) {
    var _ref8, data;

    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return regeneratorRuntime.awrap(api.FindStrategiesAdjustments(payload));

          case 3:
            _ref8 = _context8.sent;
            data = _ref8.data;
            console.log(data);
            dispatch({
              type: _actionTypes.STRATEGIESADJUSTMENT,
              payload: data
            });
            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.FindStrategiesAdjustments = FindStrategiesAdjustments;

var ViewKeyOutcome = function ViewKeyOutcome(payload) {
  return function _callee9(dispatch) {
    var _ref9, data;

    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return regeneratorRuntime.awrap(api.ViewKeyOutcome(payload));

          case 3:
            _ref9 = _context9.sent;
            data = _ref9.data;
            dispatch({
              type: _actionTypes.VIEWKEYOUTCOME,
              payload: data
            });
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.ViewKeyOutcome = ViewKeyOutcome;

var lesson_unit = function lesson_unit(payload) {
  return function _callee10(dispatch) {
    var _ref10, data, _ref11, _data, _ref12, _data2;

    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;

            if (!(payload.type == "create")) {
              _context10.next = 6;
              break;
            }

            _context10.next = 4;
            return regeneratorRuntime.awrap(api.create_lesson_unit(payload));

          case 4:
            _ref10 = _context10.sent;
            data = _ref10.data;

          case 6:
            if (!(payload.type == "view")) {
              _context10.next = 12;
              break;
            }

            _context10.next = 9;
            return regeneratorRuntime.awrap(api.view_lesson_unit(payload));

          case 9:
            _ref11 = _context10.sent;
            _data = _ref11.data;
            dispatch({
              type: _actionTypes.LESSON_UNIT,
              payload: _data
            });

          case 12:
            if (!(payload.type == "edit")) {
              _context10.next = 18;
              break;
            }

            console.log("hi");
            _context10.next = 16;
            return regeneratorRuntime.awrap(api.update_lesson_unit(payload));

          case 16:
            _ref12 = _context10.sent;
            _data2 = _ref12.data;

          case 18:
            _context10.next = 23;
            break;

          case 20:
            _context10.prev = 20;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);

          case 23:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 20]]);
  };
};

exports.lesson_unit = lesson_unit;

var ListRecordEvidence = function ListRecordEvidence(payload) {
  return function _callee11(dispatch) {
    var _ref13, data;

    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return regeneratorRuntime.awrap(api.ListRecordEvidence(payload));

          case 3:
            _ref13 = _context11.sent;
            data = _ref13.data;
            dispatch({
              type: _actionTypes.RECORDEVIDENCE,
              payload: data
            });
            console.log(data);
            _context11.next = 12;
            break;

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.ListRecordEvidence = ListRecordEvidence;