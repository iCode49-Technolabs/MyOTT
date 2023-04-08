"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teacherTagging = exports.negotiate_goal = exports.strategies_adjustment = exports.viewKeyOutcome = exports.key_outcome = exports.viewIEPStep3 = exports.iep_step3 = void 0;

var _actionTypes = require("../constants/actionTypes");

var api = _interopRequireWildcard(require("../api/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iep_step3 = function iep_step3(payload) {
  return function _callee(dispatch) {
    var _ref, data, _ref2, _data;

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
            return regeneratorRuntime.awrap(api.iep_step3(payload));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            console.log(data);

          case 7:
            if (!(payload.type == "revise")) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return regeneratorRuntime.awrap(api.updateIEPStep3(payload));

          case 10:
            _ref2 = _context.sent;
            _data = _ref2.data;
            console.log(_data);

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };
};

exports.iep_step3 = iep_step3;

var viewIEPStep3 = function viewIEPStep3(payload) {
  return function _callee2(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.viewIEPStep3(payload));

          case 3:
            _ref3 = _context2.sent;
            data = _ref3.data;
            dispatch({
              type: _actionTypes.IEP_STEP3,
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

exports.viewIEPStep3 = viewIEPStep3;

var key_outcome = function key_outcome(payload) {
  return function _callee3(dispatch) {
    var _ref4, data, _ref5, _data2;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(payload.type == "create")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return regeneratorRuntime.awrap(api.create_key_outcome(payload));

          case 4:
            _ref4 = _context3.sent;
            data = _ref4.data;
            dispatch({
              type: _actionTypes.KEY_OUTCOME_ID,
              payload: data
            });

          case 7:
            if (!(payload.type == "revise")) {
              _context3.next = 13;
              break;
            }

            _context3.next = 10;
            return regeneratorRuntime.awrap(api.updateKeyOutcome(payload));

          case 10:
            _ref5 = _context3.sent;
            _data2 = _ref5.data;
            console.log(_data2);

          case 13:
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };
};

exports.key_outcome = key_outcome;

var viewKeyOutcome = function viewKeyOutcome(payload) {
  return function _callee4(dispatch) {
    var _ref6, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(api.viewKeyOutcome(payload));

          case 3:
            _ref6 = _context4.sent;
            data = _ref6.data;
            dispatch({
              type: _actionTypes.KEY_OUTCOME,
              payload: data
            });
            console.log("key-outcome", data);
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.viewKeyOutcome = viewKeyOutcome;

var strategies_adjustment = function strategies_adjustment(payload) {
  return function _callee5(dispatch) {
    var _ref7, data, _ref8, _data3;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (!(payload.type == "create")) {
              _context5.next = 9;
              break;
            }

            _context5.next = 4;
            return regeneratorRuntime.awrap(api.create_stratergies_adjustments(payload));

          case 4:
            _ref7 = _context5.sent;
            data = _ref7.data;
            console.log(data);
            _context5.next = 15;
            break;

          case 9:
            _context5.next = 11;
            return regeneratorRuntime.awrap(api.view_stratergies_adjustments(payload));

          case 11:
            _ref8 = _context5.sent;
            _data3 = _ref8.data;
            console.log("Strategies/Adjustments", _data3);
            dispatch({
              type: _actionTypes.VIEW_STRATERGIES_ADJUSTMENTS,
              payload: _data3
            });

          case 15:
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 17]]);
  };
};

exports.strategies_adjustment = strategies_adjustment;

var negotiate_goal = function negotiate_goal(payload) {
  return function _callee6(dispatch) {
    var _ref9, data;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(api.negotiate_goal(payload));

          case 3:
            _ref9 = _context6.sent;
            data = _ref9.data;
            dispatch({
              type: _actionTypes.NEGOTIATE_GOAL,
              payload: data
            });
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

exports.negotiate_goal = negotiate_goal;

var teacherTagging = function teacherTagging(payload) {
  return function _callee7(dispatch) {
    var _ref10, data;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(api.step3teacherTagging(payload));

          case 3:
            _ref10 = _context7.sent;
            data = _ref10.data;
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

exports.teacherTagging = teacherTagging;