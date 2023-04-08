"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RateStrategyAdjustment = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StarRating = require("./StarRating");

var _bulb = _interopRequireDefault(require("./../images/bulb.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RateStrategyAdjustment = function RateStrategyAdjustment() {
  var strategiesAdjustment = [{
    title: "vjhv",
    subtitle: "hjvjh"
  }];

  var _useState = (0, _react.useState)({
    type: [],
    state: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      popup = _useState2[0],
      setPopup = _useState2[1];

  return (//     <div className="rate">
    //     <p className="sub-sub-title">
    //         Rate Adjustments
    //     </p>
    //     <div className="rate-card">
    {}
    /* <div className="cards" >
    {strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
    strategiesAdjustment.map((value,index)=>(
    
       
       <div key={value.title+index} className="rate-card">
       <p className="card-k_title">{value.title}</p>
       <p className="card-sub-k_title">{value.subtitle}</p>
      
       
    </div>
    ))
    }
    </div> */
    //         <div style={{ display: "flex", marginTop: "0rem" }}>
    //             <p style={{ width: "4rem" }}>Ease</p>
    //             <StarRating/>
    //         </div>
    //         <div style={{ display: "flex", marginTop: "0rem" }}>
    //             <p style={{ width: "4rem" }}>Efficiency</p>
    //             <StarRating/>
    //         </div>
    //     </div>
    // </div>
    //     <div key={"strategies"} style={{width:"80%"}}>
    //     <div key={"strategies_title"} style={{display:"flex",justifyContent:"space-between"}}><p className="k_title">Strategies / Adjustments </p>
    //     <div  key={"view_all"} style={{display:"flex",justifyContent:"space-between"}}><p style={{marginRight:".2rem",textDecoration:"underline"}} onClick={(e) => setPopup({...popup,state:true})}>View All</p><img src={bulb}/></div></div>
    // <div className="cards" >
    // {strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
    // strategiesAdjustment.map((value,index)=>(
    //     <div key={value.title+index} className="rate-card">
    //     <p className="card-k_title">{value.title}</p>
    //     <p className="card-sub-k_title">{value.subtitle}</p>
    // </div>
    // ))
    // }
    // </div>
    // </div>

  );
};

exports.RateStrategyAdjustment = RateStrategyAdjustment;