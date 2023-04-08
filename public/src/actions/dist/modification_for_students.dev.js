"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateModificationStudentStatus = exports.modification_for_students = void 0;

var _actionTypes = require("../constants/actionTypes");

var api = _interopRequireWildcard(require("../api/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var modification_for_students = function modification_for_students(payload) {
  return function _callee(dispatch) {
    var _ref, data, _ref2, _data, _ref3, _data2, _ref4, _data3, _ref5, _data4;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(payload.type == "create")) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return regeneratorRuntime.awrap(api.createModificationStudent(payload));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            console.log("modificationForStudent", data);

          case 7:
            if (!(payload.type == "update")) {
              _context.next = 12;
              break;
            }

            _context.next = 10;
            return regeneratorRuntime.awrap(api.updateModificationStudent(payload));

          case 10:
            _ref2 = _context.sent;
            _data = _ref2.data;

          case 12:
            if (!(payload.type == "view")) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return regeneratorRuntime.awrap(api.viewModificationStudent(payload));

          case 15:
            _ref3 = _context.sent;
            _data2 = _ref3.data;
            dispatch({
              type: _actionTypes.MODIFICATIONSTUDENT,
              payload: _data2
            });

          case 18:
            if (!(payload.type == "teacher_view")) {
              _context.next = 24;
              break;
            }

            _context.next = 21;
            return regeneratorRuntime.awrap(api.modificationForStudentData(payload));

          case 21:
            _ref4 = _context.sent;
            _data3 = _ref4.data;
            dispatch({
              type: _actionTypes.MODIFICATIONSTUDENT,
              payload: _data3
            });

          case 24:
            if (!(payload.type == "delete")) {
              _context.next = 29;
              break;
            }

            _context.next = 27;
            return regeneratorRuntime.awrap(api.deleteModificationStudent(payload));

          case 27:
            _ref5 = _context.sent;
            _data4 = _ref5.data;

          case 29:
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 31]]);
  };
};

exports.modification_for_students = modification_for_students;

var updateModificationStudentStatus = function updateModificationStudentStatus(payload) {
  return function _callee2(dispatch) {
    var _ref6, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.updateModificationStudentStatus(payload));

          case 3:
            _ref6 = _context2.sent;
            data = _ref6.data;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.updateModificationStudentStatus = updateModificationStudentStatus;