"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListingOfLessonPlan = exports.viewLessonPlan = exports.LessonPlanCreateUpdate = void 0;

var _actionTypes = require("../constants/actionTypes");

var api = _interopRequireWildcard(require("../api/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LessonPlanCreateUpdate = function LessonPlanCreateUpdate(payload) {
  return function _callee(dispatch) {
    var _ref, data, _ref2, _data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(payload.type == "create")) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return regeneratorRuntime.awrap(api.CreateLessonPlan(payload));

          case 4:
            _ref = _context.sent;
            data = _ref.data;

          case 6:
            if (!(payload.type == "update")) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return regeneratorRuntime.awrap(api.updateLessonPlan(payload));

          case 9:
            _ref2 = _context.sent;
            _data = _ref2.data;

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

exports.LessonPlanCreateUpdate = LessonPlanCreateUpdate;

var viewLessonPlan = function viewLessonPlan(payload) {
  return function _callee2(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.viewLessonPlan(payload));

          case 3:
            _ref3 = _context2.sent;
            data = _ref3.data;
            dispatch({
              type: _actionTypes.LESSONPLAN,
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

exports.viewLessonPlan = viewLessonPlan;

var ListingOfLessonPlan = function ListingOfLessonPlan(payload) {
  return function _callee3(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(api.ListingOfLessonPlan(payload));

          case 3:
            _ref4 = _context3.sent;
            data = _ref4.data;
            dispatch({
              type: _actionTypes.LESSONPLAN,
              payload: data
            });
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

exports.ListingOfLessonPlan = ListingOfLessonPlan;