(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "4EvU":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_pages_home_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pages/home/style.js */ "XolY");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var components_DragContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DragContainer/index.js */ "Iiq6");
/* harmony import */ var components_AddableButton_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AddableButton/index.js */ "u262");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "qKvR");








function Home() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var _ref$planner$plans = _ref.planner.plans,
        plans = _ref$planner$plans === void 0 ? [] : _ref$planner$plans;
    return {
      plans: plans
    };
  }),
      plans = _useSelector.plans;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onApply = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (planValue) {
    return dispatch({
      type: 'ADD_PLAN',
      payload: {
        title: planValue,
        planItems: []
      }
    });
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: src_pages_home_style_js__WEBPACK_IMPORTED_MODULE_1__["wrapperStyle"]
  }, plans.map(function (data, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(components_DragContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: data,
      key: index,
      id: index
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: src_pages_home_style_js__WEBPACK_IMPORTED_MODULE_1__["addPlanWrapStyle"]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(components_AddableButton_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onApply: onApply,
    buttonTitle: "+ Add another plan"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "EmB5":
/*!**********************************************!*\
  !*** ./src/components/TextAndInput/style.js ***!
  \**********************************************/
/*! exports provided: editStyle, inputStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStyle", function() { return editStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputStyle", function() { return inputStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "qKvR");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var editStyle =  false ? undefined : {
  name: "1fvtmz7-editStyle",
  styles: "background:#eee;padding:2px 8px;font-size:12px;border-radius:4px;border:1px solid #ddd;;label:editStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL1RleHRBbmRJbnB1dC9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNEIiLCJmaWxlIjoiL1VzZXJzL2FiaGlzaGVrdGhha3VyL0Rlc2t0b3AvY29kZS9sZWFybmluZy9kcmFnLWRyb3Avc3JjL2NvbXBvbmVudHMvVGV4dEFuZElucHV0L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuZXhwb3J0IGNvbnN0IGVkaXRTdHlsZSA9IGNzc2BcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuYFxuXG5leHBvcnQgY29uc3QgaW5wdXRTdHlsZSA9IGNzc2BcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5gIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var inputStyle =  false ? undefined : {
  name: "1ljg537-inputStyle",
  styles: "font-size:14px;height:100%;width:100%;margin-right:8px;;label:inputStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL1RleHRBbmRJbnB1dC9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVNkIiLCJmaWxlIjoiL1VzZXJzL2FiaGlzaGVrdGhha3VyL0Rlc2t0b3AvY29kZS9sZWFybmluZy9kcmFnLWRyb3Avc3JjL2NvbXBvbmVudHMvVGV4dEFuZElucHV0L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuZXhwb3J0IGNvbnN0IGVkaXRTdHlsZSA9IGNzc2BcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuYFxuXG5leHBvcnQgY29uc3QgaW5wdXRTdHlsZSA9IGNzc2BcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5gIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "Ffhv":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_reducers_planner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/reducers/planner.js */ "p3XE");

/* harmony default export */ __webpack_exports__["default"] = ({
  planner: store_reducers_planner_js__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "Iiq6":
/*!***********************************************!*\
  !*** ./src/components/DragContainer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragContainer; });
/* harmony import */ var src_components_DragContainer_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/DragContainer/style.js */ "dNRV");
/* harmony import */ var src_components_DragItem_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/DragItem/index.js */ "teI8");
/* harmony import */ var src_components_AddableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/AddableButton */ "u262");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "qKvR");






function DragContainer(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      id = _ref.id;
  var title = data.title,
      planItems = data.planItems;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var onApply = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (planItem) {
    return dispatch({
      type: 'ADD_TASK',
      payload: {
        id: id,
        planItem: planItem
      }
    });
  }, [id]);
  var handleOnDrop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_ref2) {
    var newPlanId = _ref2.newPlanId,
        event = _ref2.event;
    event.preventDefault();
    event.stopPropagation();
    var planId = event.dataTransfer.getData('planId');
    var taskId = event.dataTransfer.getData('taskId');
    dispatch({
      type: 'MOVE_TASK_ACROSS_PLAN',
      payload: {
        planId: planId,
        newPlanId: newPlanId,
        taskId: taskId
      }
    });
  }, []);
  var handleOnDragOver = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    event.preventDefault();
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    css: src_components_DragContainer_style_js__WEBPACK_IMPORTED_MODULE_0__["planItemStyle"]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    css: src_components_DragContainer_style_js__WEBPACK_IMPORTED_MODULE_0__["planCardStyle"],
    onDrop: function onDrop(event) {
      return handleOnDrop({
        newPlanId: id,
        event: event
      });
    },
    onDragOver: handleOnDragOver
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("label", {
    css: src_components_DragContainer_style_js__WEBPACK_IMPORTED_MODULE_0__["headerStyle"]
  }, title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_DragItem_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    planItems: planItems,
    planId: id
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_AddableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: src_components_DragContainer_style_js__WEBPACK_IMPORTED_MODULE_0__["bottomBarStyle"],
    buttonTitle: "+",
    onApply: onApply
  })));
}

/***/ }),

/***/ "K3IZ":
/*!**********************************************!*\
  !*** ./src/components/TextAndInput/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextAndInput; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "4Brf");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "0oug");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "pjDv");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "J30X");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "4mDm");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "+2oP");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "DQNa");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "JfAA");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "PKPk");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "3bBZ");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_components_TextAndInput_style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/TextAndInput/style.js */ "EmB5");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/core */ "qKvR");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function TextAndInput(_ref) {
  var item = _ref.item,
      id = _ref.id,
      planId = _ref.planId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      editEnable = _useState2[0],
      setEditEnable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(item),
      _useState4 = _slicedToArray(_useState3, 2),
      text = _useState4[0],
      setText = _useState4[1];

  var changeEdit = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function () {
    setEditEnable(true);
  }, []);
  var handleInputChange = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (event) {
    setText(event.target.value);
  }, []);
  var handleKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (event) {
    if (event.key === 'Enter' && text) {
      dispatch({
        type: 'TASK_EDIT',
        payload: {
          id: id,
          planItem: text,
          planId: planId
        }
      });
      setEditEnable(false);
    }
  }, [id, text]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"], null, editEnable ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("input", {
    css: src_components_TextAndInput_style_js__WEBPACK_IMPORTED_MODULE_13__["inputStyle"],
    placeholder: "Enter text...",
    value: text,
    onKeyDown: handleKeyDown,
    onChange: handleInputChange
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("label", null, item), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("span", {
    css: src_components_TextAndInput_style_js__WEBPACK_IMPORTED_MODULE_13__["editStyle"],
    onClick: changeEdit
  }, "edit"));
}

/***/ }),

/***/ "W3s1":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: Core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return Core; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "qKvR");


var global = "\n    body {\n        margin: 0;\n        padding: 0;\n    }\n";
var Core = function Core() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["Global"], {
    styles: global
  });
};

/***/ }),

/***/ "XolY":
/*!*********************************!*\
  !*** ./src/pages/home/style.js ***!
  \*********************************/
/*! exports provided: wrapperStyle, addPlanWrapStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperStyle", function() { return wrapperStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlanWrapStyle", function() { return addPlanWrapStyle; });
/* harmony import */ var assets_background_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/background.jpeg */ "zoXn");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "qKvR");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var wrapperStyle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("height:100%;background:url(", assets_background_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"], ") center;background-size:cover;overflow-x:auto;white-space:nowrap;;label:wrapperStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9wYWdlcy9ob21lL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUkrQiIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvcGFnZXMvaG9tZS9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGJnU2NyZWVuIGZyb20gJ2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZWcnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlclN0eWxlID0gY3NzYFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtiZ1NjcmVlbn0pIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmBcblxuZXhwb3J0IGNvbnN0IGFkZFBsYW5XcmFwU3R5bGUgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuYFxuIl19 */"), ";label:wrapperStyle;");
var addPlanWrapStyle =  false ? undefined : {
  name: "2t8k6n-addPlanWrapStyle",
  styles: "background-color:rgba(255,255,255,0.24);border-radius:3px;padding:4px;width:270px;margin:8px;box-sizing:border-box;display:inline-block;vertical-align:top;;label:addPlanWrapStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9wYWdlcy9ob21lL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVltQyIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvcGFnZXMvaG9tZS9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGJnU2NyZWVuIGZyb20gJ2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZWcnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlclN0eWxlID0gY3NzYFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtiZ1NjcmVlbn0pIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmBcblxuZXhwb3J0IGNvbnN0IGFkZFBsYW5XcmFwU3R5bGUgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuYFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "cXEB":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "QWBl");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "HRxU");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "eoL8");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "5DmW");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "27RR");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "tkto");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "FZtP");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "sINF");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-devtools-extension */ "5HXA");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? {} : _ref$preloadedState,
      _ref$extraParams = _ref.extraParams,
      extraParams = _ref$extraParams === void 0 ? {} : _ref$extraParams,
      _ref$reducers = _ref.reducers,
      reducers = _ref$reducers === void 0 ? {} : _ref$reducers;

  var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_9__["combineReducers"])(reducers);
  var enhancers = Object(redux__WEBPACK_IMPORTED_MODULE_9__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"].withExtraArgument(_objectSpread({}, extraParams)));

  if (true) {
    enhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_11__["composeWithDevTools"])(enhancers);
  }

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_9__["createStore"])(rootReducer, preloadedState, enhancers);
  return store;
});

/***/ }),

/***/ "dNRV":
/*!***********************************************!*\
  !*** ./src/components/DragContainer/style.js ***!
  \***********************************************/
/*! exports provided: planItemStyle, planCardStyle, headerStyle, bottomBarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planItemStyle", function() { return planItemStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planCardStyle", function() { return planCardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerStyle", function() { return headerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomBarStyle", function() { return bottomBarStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "qKvR");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var planItemStyle =  false ? undefined : {
  name: "9gtm6x-planItemStyle",
  styles: "width:270px;margin:8px;height:100%;box-sizing:border-box;display:inline-block;vertical-align:top;;label:planItemStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdDb250YWluZXIvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2dDIiwiZmlsZSI6Ii9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdDb250YWluZXIvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBwbGFuSXRlbVN0eWxlID0gY3NzYFxuICAgIHdpZHRoOiAyNzBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbmBcblxuZXhwb3J0IGNvbnN0IHBsYW5DYXJkU3R5bGUgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWNmMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBoZWFkZXJTdHlsZSA9IGNzc2BcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBib3R0b21CYXJTdHlsZSA9IGNzc2AgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDsgIFxuICAgIH1cbmBcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var planCardStyle =  false ? undefined : {
  name: "11hjykv-planCardStyle",
  styles: "background-color:#ebecf0;border-radius:3px;box-sizing:border-box;display:flex;flex-direction:column;padding:12px 8px;;label:planCardStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdDb250YWluZXIvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdDIiwiZmlsZSI6Ii9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdDb250YWluZXIvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBwbGFuSXRlbVN0eWxlID0gY3NzYFxuICAgIHdpZHRoOiAyNzBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbmBcblxuZXhwb3J0IGNvbnN0IHBsYW5DYXJkU3R5bGUgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWNmMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBoZWFkZXJTdHlsZSA9IGNzc2BcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBib3R0b21CYXJTdHlsZSA9IGNzc2AgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDsgIFxuICAgIH1cbmBcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var headerStyle =  false ? undefined : {
  name: "yyqjlk-headerStyle",
  styles: "padding:10px 8px;min-height:20px;padding-right:36px;;label:headerStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdDb250YWluZXIvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUI4QiIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9EcmFnQ29udGFpbmVyL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3QgcGxhbkl0ZW1TdHlsZSA9IGNzc2BcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5gXG5cbmV4cG9ydCBjb25zdCBwbGFuQ2FyZFN0eWxlID0gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZjA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgaGVhZGVyU3R5bGUgPSBjc3NgXG4gICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuYFxuXG5leHBvcnQgY29uc3QgYm90dG9tQmFyU3R5bGUgPSBjc3NgIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBtYXJnaW46IDhweDtcbiAgICAuYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7ICBcbiAgICB9XG5gXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var bottomBarStyle =  false ? undefined : {
  name: "1dqmrgd-bottomBarStyle",
  styles: "width:calc(100% - 16px);margin:8px;.button{width:30px;height:30px;border-radius:50%;float:right;};label:bottomBarStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdDb250YWluZXIvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJpQyIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9EcmFnQ29udGFpbmVyL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3QgcGxhbkl0ZW1TdHlsZSA9IGNzc2BcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5gXG5cbmV4cG9ydCBjb25zdCBwbGFuQ2FyZFN0eWxlID0gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZjA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgaGVhZGVyU3R5bGUgPSBjc3NgXG4gICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuYFxuXG5leHBvcnQgY29uc3QgYm90dG9tQmFyU3R5bGUgPSBjc3NgIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBtYXJnaW46IDhweDtcbiAgICAuYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7ICBcbiAgICB9XG5gXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "fAdW":
/*!******************************************!*\
  !*** ./src/components/DragItem/style.js ***!
  \******************************************/
/*! exports provided: itemStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemStyle", function() { return itemStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "qKvR");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var itemStyle =  false ? undefined : {
  name: "1c9vof1-itemStyle",
  styles: "padding:4px 8px;position:relative;margin:4px 12px;background:#fff;border-radius:4px;border:2px solid #ddd;display:flex;justify-content:space-between;align-items:center;height:30px;;label:itemStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0RyYWdJdGVtL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUU0QiIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9EcmFnSXRlbS9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBpdGVtU3R5bGUgPSBjc3NgXG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA0cHggMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGhlaWdodDogMzBweDsgICBcbmAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "nS5o":
/*!***********************************************!*\
  !*** ./src/components/AddableButton/style.js ***!
  \***********************************************/
/*! exports provided: wrapperStyle, inputStyle, crossStyle, bottomButtonStyle, bottomBarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperStyle", function() { return wrapperStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputStyle", function() { return inputStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossStyle", function() { return crossStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomButtonStyle", function() { return bottomButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomBarStyle", function() { return bottomBarStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "qKvR");
/* harmony import */ var assets_cross_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/cross.png */ "wHcX");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var wrapperStyle = function wrapperStyle(showPadding) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("position:relative;", showPadding && 'padding-top: 16px', ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWdEIiwiZmlsZSI6Ii9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgY3Jvc3MgZnJvbSAnYXNzZXRzL2Nyb3NzLnBuZydcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJTdHlsZSA9IChzaG93UGFkZGluZykgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAke3Nob3dQYWRkaW5nICYmICdwYWRkaW5nLXRvcDogMTZweCd9O1xuYFxuZXhwb3J0IGNvbnN0IGlucHV0U3R5bGUgPSBjc3NgXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzVlNmM4NDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiA4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBjcm9zc1N0eWxlID0gY3NzYFxuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQgMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7Y3Jvc3N9KSBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgYm90dG9tQnV0dG9uU3R5bGUgPSAoaXNBZGRQbGFuKSA9PiBjc3NgXG4gICAgYmFja2dyb3VuZDogIzVhYWM0NDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgJHtpc0FkZFBsYW4gJiYgYWRkUGxhblN0eWxlfVxuYFxuXG5leHBvcnQgY29uc3QgYm90dG9tQmFyU3R5bGUgPSBjc3NgIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6ICM1ZTZjODQ7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbmBcblxuY29uc3QgYWRkUGxhblN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gIl19 */"))
  );
};
var inputStyle =  false ? undefined : {
  name: "1ym62lv-inputStyle",
  styles: "height:40px;width:calc(100% - 16px);background:#fff;font-size:16px;color:#5e6c84;padding:8px;margin:8px;;label:inputStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUTZCIiwiZmlsZSI6Ii9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgY3Jvc3MgZnJvbSAnYXNzZXRzL2Nyb3NzLnBuZydcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJTdHlsZSA9IChzaG93UGFkZGluZykgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAke3Nob3dQYWRkaW5nICYmICdwYWRkaW5nLXRvcDogMTZweCd9O1xuYFxuZXhwb3J0IGNvbnN0IGlucHV0U3R5bGUgPSBjc3NgXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzVlNmM4NDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiA4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBjcm9zc1N0eWxlID0gY3NzYFxuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQgMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7Y3Jvc3N9KSBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgYm90dG9tQnV0dG9uU3R5bGUgPSAoaXNBZGRQbGFuKSA9PiBjc3NgXG4gICAgYmFja2dyb3VuZDogIzVhYWM0NDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgJHtpc0FkZFBsYW4gJiYgYWRkUGxhblN0eWxlfVxuYFxuXG5leHBvcnQgY29uc3QgYm90dG9tQmFyU3R5bGUgPSBjc3NgIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6ICM1ZTZjODQ7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbmBcblxuY29uc3QgYWRkUGxhblN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var crossStyle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("color:#fff;width:12px;height:12px;margin:4px;position:absolute;right 0;top:0;background:url(", assets_cross_png__WEBPACK_IMPORTED_MODULE_1__["default"], ") center;cursor:pointer;;label:crossStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I2QiIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9BZGRhYmxlQnV0dG9uL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGNyb3NzIGZyb20gJ2Fzc2V0cy9jcm9zcy5wbmcnXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyU3R5bGUgPSAoc2hvd1BhZGRpbmcpID0+IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJHtzaG93UGFkZGluZyAmJiAncGFkZGluZy10b3A6IDE2cHgnfTtcbmBcbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID0gY3NzYFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1ZTZjODQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgY3Jvc3NTdHlsZSA9IGNzc2BcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgke2Nyb3NzfSkgY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJ1dHRvblN0eWxlID0gKGlzQWRkUGxhbikgPT4gY3NzYFxuICAgIGJhY2tncm91bmQ6ICM1YWFjNDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICR7aXNBZGRQbGFuICYmIGFkZFBsYW5TdHlsZX1cbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJhclN0eWxlID0gY3NzYCBcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiAjNWU2Yzg0O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG5gXG5cbmNvbnN0IGFkZFBsYW5TdHlsZSA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYCJdfQ== */"), ";label:crossStyle;");
var bottomButtonStyle = function bottomButtonStyle(isAddPlan) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("background:#5aac44;color:#fff;font-size:16px;", isAddPlan && addPlanStyle,  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJtRCIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9BZGRhYmxlQnV0dG9uL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGNyb3NzIGZyb20gJ2Fzc2V0cy9jcm9zcy5wbmcnXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyU3R5bGUgPSAoc2hvd1BhZGRpbmcpID0+IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJHtzaG93UGFkZGluZyAmJiAncGFkZGluZy10b3A6IDE2cHgnfTtcbmBcbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID0gY3NzYFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1ZTZjODQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgY3Jvc3NTdHlsZSA9IGNzc2BcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgke2Nyb3NzfSkgY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJ1dHRvblN0eWxlID0gKGlzQWRkUGxhbikgPT4gY3NzYFxuICAgIGJhY2tncm91bmQ6ICM1YWFjNDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICR7aXNBZGRQbGFuICYmIGFkZFBsYW5TdHlsZX1cbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJhclN0eWxlID0gY3NzYCBcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiAjNWU2Yzg0O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG5gXG5cbmNvbnN0IGFkZFBsYW5TdHlsZSA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYCJdfQ== */")
  );
};
var bottomBarStyle =  false ? undefined : {
  name: "146kgzj-bottomBarStyle",
  styles: "width:calc(100% - 16px);border-radius:3px;color:#5e6c84;margin:8px;padding:4px 8px;;label:bottomBarStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQyIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9BZGRhYmxlQnV0dG9uL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGNyb3NzIGZyb20gJ2Fzc2V0cy9jcm9zcy5wbmcnXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyU3R5bGUgPSAoc2hvd1BhZGRpbmcpID0+IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJHtzaG93UGFkZGluZyAmJiAncGFkZGluZy10b3A6IDE2cHgnfTtcbmBcbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID0gY3NzYFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1ZTZjODQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgY3Jvc3NTdHlsZSA9IGNzc2BcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgke2Nyb3NzfSkgY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJ1dHRvblN0eWxlID0gKGlzQWRkUGxhbikgPT4gY3NzYFxuICAgIGJhY2tncm91bmQ6ICM1YWFjNDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICR7aXNBZGRQbGFuICYmIGFkZFBsYW5TdHlsZX1cbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJhclN0eWxlID0gY3NzYCBcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiAjNWU2Yzg0O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG5gXG5cbmNvbnN0IGFkZFBsYW5TdHlsZSA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYCJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var addPlanStyle =  false ? undefined : {
  name: "tr4fpy-addPlanStyle",
  styles: "display:flex;justify-content:center;;label:addPlanStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkN3QiIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9BZGRhYmxlQnV0dG9uL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGNyb3NzIGZyb20gJ2Fzc2V0cy9jcm9zcy5wbmcnXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyU3R5bGUgPSAoc2hvd1BhZGRpbmcpID0+IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJHtzaG93UGFkZGluZyAmJiAncGFkZGluZy10b3A6IDE2cHgnfTtcbmBcbmV4cG9ydCBjb25zdCBpbnB1dFN0eWxlID0gY3NzYFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1ZTZjODQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgY3Jvc3NTdHlsZSA9IGNzc2BcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgke2Nyb3NzfSkgY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJ1dHRvblN0eWxlID0gKGlzQWRkUGxhbikgPT4gY3NzYFxuICAgIGJhY2tncm91bmQ6ICM1YWFjNDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICR7aXNBZGRQbGFuICYmIGFkZFBsYW5TdHlsZX1cbmBcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUJhclN0eWxlID0gY3NzYCBcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiAjNWU2Yzg0O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG5gXG5cbmNvbnN0IGFkZFBsYW5TdHlsZSA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYCJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "p3XE":
/*!***************************************!*\
  !*** ./src/store/reducers/planner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "4Brf");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "0oug");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "pjDv");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "J30X");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "4mDm");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "+2oP");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "pDQq");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "DQNa");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "JfAA");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "PKPk");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "3bBZ");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = {
  plans: [{
    title: 'To Do',
    planItems: ['Pay']
  }, {
    title: 'Development',
    planItems: ['Agreement']
  }, {
    title: 'QA',
    planItems: ['Landing']
  }, {
    title: 'Ready For Release',
    planItems: ['Home']
  }, {
    title: 'Done',
    planItems: ['Hooks']
  }]
};

var planner = function planner() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case 'ADD_PLAN':
      {
        state.plans.push(payload);
        return state;
      }

    case 'ADD_TASK':
      if (state.plans[payload.id]) {
        state.plans[payload.id].planItems.push(payload.planItem);
      }

      return state;

    case 'TASK_EDIT':
      if (state.plans[payload.planId]) {
        state.plans[payload.planId].planItems[payload.id] = payload.planItem;
      }

    case 'MOVE_TASK_ACROSS_PLAN':
      var planId = payload.planId,
          newPlanId = payload.newPlanId,
          taskId = payload.taskId;

      var _state$plans$planId$p = state.plans[planId].planItems.splice(taskId, 1),
          _state$plans$planId$p2 = _slicedToArray(_state$plans$planId$p, 1),
          movedTask = _state$plans$planId$p2[0];

      movedTask && state.plans[newPlanId].planItems.push(movedTask);
      return state;

    case 'MOVE_TASK_WITHIN_PLAN':
      var newTaskId = payload.newTaskId,
          currentPlanId = payload.currentPlanId,
          prevTaskId = payload.prevTaskId;
      var swapper = state.plans[currentPlanId].planItems[newTaskId];
      state.plans[currentPlanId].planItems[newTaskId] = state.plans[currentPlanId].planItems[prevTaskId];
      state.plans[currentPlanId].planItems[prevTaskId] = swapper;
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (planner);

/***/ }),

/***/ "teI8":
/*!******************************************!*\
  !*** ./src/components/DragItem/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragItem; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_DragItem_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/DragItem/style.js */ "fAdW");
/* harmony import */ var components_TextAndInput_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextAndInput/index.js */ "K3IZ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "qKvR");






function DragItem(_ref) {
  var planItems = _ref.planItems,
      planId = _ref.planId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var handleDragStart = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_ref2) {
    var event = _ref2.event,
        planId = _ref2.planId,
        index = _ref2.index;
    event.dataTransfer.setData('planId', planId);
    event.dataTransfer.setData('taskId', index);
  }, []);
  var handleOnDrop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_ref3) {
    var newTaskId = _ref3.newTaskId,
        event = _ref3.event;
    var planId = event.dataTransfer.getData('planId');
    var taskId = event.dataTransfer.getData('taskId');
    dispatch({
      type: 'MOVE_TASK_WITHIN_PLAN',
      payload: {
        currentPlanId: planId,
        newTaskId: newTaskId,
        prevTaskId: taskId
      }
    });
  }, []);
  var handleOnDragOver = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    event.preventDefault();
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, planItems.map(function (item, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      css: src_components_DragItem_style_js__WEBPACK_IMPORTED_MODULE_1__["itemStyle"],
      key: index,
      draggable: "true",
      onDragStart: function onDragStart(event) {
        return handleDragStart({
          event: event,
          planId: planId,
          index: index
        });
      },
      onDrop: function onDrop(event) {
        return handleOnDrop({
          newTaskId: index,
          event: event
        });
      },
      onDragOver: handleOnDragOver
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(components_TextAndInput_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item,
      id: index,
      planId: planId
    }));
  }));
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var store_configureStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/configureStore.js */ "cXEB");
/* harmony import */ var store_reducers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/reducers/index.js */ "Ffhv");
/* harmony import */ var src_App_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/App.js */ "vpQ9");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "qKvR");







var store = Object(store_configureStore_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
  reducers: store_reducers_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});

function MainComponent() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_App_js__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MainComponent, null), document.getElementById('root'));

/***/ }),

/***/ "u262":
/*!***********************************************!*\
  !*** ./src/components/AddableButton/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddableButton; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "4Brf");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "0oug");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "pjDv");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "J30X");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "4mDm");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "+2oP");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "DQNa");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "JfAA");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "PKPk");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "3bBZ");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/css */ "iYmT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_components_AddableButton_style_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/AddableButton/style.js */ "nS5o");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/core */ "qKvR");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function AddableButton(_ref) {
  var onApply = _ref.onApply,
      buttonTitle = _ref.buttonTitle,
      style = _ref.style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      addPlan = _useState2[0],
      setAddPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      planValue = _useState4[0],
      setPlanValue = _useState4[1];

  var inputChange = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (value) {
    return setPlanValue(value);
  }, []);
  var changeAddPlan = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (event, value) {
    event.stopPropagation();
    setPlanValue('');
    setAddPlan(value);
  }, []);
  var handleAdd = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (event, _ref2) {
    var planValue = _ref2.planValue;
    addPlan ? onApply(planValue) : changeAddPlan(event, true);
    setPlanValue('');
  }, [changeAddPlan, addPlan]);
  var handleKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_14__["useCallback"])(function (event) {
    if (event.key == 'Enter' && planValue) {
      onApply(planValue);
      setPlanValue('');
      setAddPlan(false);
    }
  }, [planValue, onApply]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("div", {
    css: /*#__PURE__*/Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["default"])([Object(src_components_AddableButton_style_js__WEBPACK_IMPORTED_MODULE_15__["wrapperStyle"])(addPlan), style], ";label:AddableButton;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NhIiwiZmlsZSI6Ii9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBcbiAgICBib3R0b21CYXJTdHlsZSxcbiAgICBib3R0b21CdXR0b25TdHlsZSxcbiAgICBpbnB1dFN0eWxlLFxuICAgIGNyb3NzU3R5bGUsXG4gICAgd3JhcHBlclN0eWxlXG59IGZyb20gJ3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vc3R5bGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZGFibGVCdXR0b24gKHsgb25BcHBseSwgYnV0dG9uVGl0bGUsIHN0eWxlIH0pIHtcbiAgICBjb25zdCBbYWRkUGxhbiwgc2V0QWRkUGxhbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbcGxhblZhbHVlLCBzZXRQbGFuVmFsdWVdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBpbnB1dENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0UGxhblZhbHVlKHZhbHVlKSwgW10pXG5cbiAgICBjb25zdCBjaGFuZ2VBZGRQbGFuID0gdXNlQ2FsbGJhY2soKGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRQbGFuVmFsdWUoJycpXG4gICAgICAgIHNldEFkZFBsYW4odmFsdWUpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBoYW5kbGVBZGQgPSB1c2VDYWxsYmFjaygoZXZlbnQsIHsgcGxhblZhbHVlIH0pID0+IHtcbiAgICAgICAgYWRkUGxhbiA/IG9uQXBwbHkocGxhblZhbHVlKSA6IGNoYW5nZUFkZFBsYW4oZXZlbnQsIHRydWUpXG4gICAgICAgIHNldFBsYW5WYWx1ZSgnJylcbiAgICB9LCBbY2hhbmdlQWRkUGxhbiwgYWRkUGxhbl0pXG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKGV2ZW50LmtleSA9PSAnRW50ZXInICYmIHBsYW5WYWx1ZSkge1xuICAgICAgICAgICAgb25BcHBseShwbGFuVmFsdWUpXG4gICAgICAgICAgICBzZXRQbGFuVmFsdWUoJycpXG4gICAgICAgICAgICBzZXRBZGRQbGFuKGZhbHNlKVxuICAgICAgICB9XG4gICAgfSwgW3BsYW5WYWx1ZSwgb25BcHBseV0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjc3M9e1t3cmFwcGVyU3R5bGUoYWRkUGxhbiksIHN0eWxlXX0+XG4gICAgICAgICAgICB7YWRkUGxhbiAmJlxuICAgICAgICAgICAgKDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNzcz17Y3Jvc3NTdHlsZX0gb25DbGljaz17KGV2ZW50KSA9PiBjaGFuZ2VBZGRQbGFuKGV2ZW50LCBmYWxzZSl9Lz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQnXG4gICAgICAgICAgICAgICAgICAgIGNzcz17aW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQuLi4nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGlucHV0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwbGFuVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgICAgICAgY3NzPXtbYm90dG9tQmFyU3R5bGUsIGJvdHRvbUJ1dHRvblN0eWxlKGFkZFBsYW4pXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+ICBoYW5kbGVBZGQoZXZlbnQsIHsgcGxhblZhbHVlIH0pfT5cbiAgICAgICAgICAgICAgICB7YnV0dG9uVGl0bGV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdfQ== */"))
  }, addPlan && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("div", {
    css: src_components_AddableButton_style_js__WEBPACK_IMPORTED_MODULE_15__["crossStyle"],
    onClick: function onClick(event) {
      return changeAddPlan(event, false);
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("input", {
    className: "input",
    css: src_components_AddableButton_style_js__WEBPACK_IMPORTED_MODULE_15__["inputStyle"],
    placeholder: "Enter text...",
    onChange: function onChange(event) {
      return inputChange(event.target.value);
    },
    value: planValue,
    onKeyDown: handleKeyDown
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("button", {
    className: "button",
    css: /*#__PURE__*/Object(_emotion_css__WEBPACK_IMPORTED_MODULE_13__["default"])([src_components_AddableButton_style_js__WEBPACK_IMPORTED_MODULE_15__["bottomBarStyle"], Object(src_components_AddableButton_style_js__WEBPACK_IMPORTED_MODULE_15__["bottomButtonStyle"])(addPlan)], ";label:AddableButton;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpc2hla3RoYWt1ci9EZXNrdG9wL2NvZGUvbGVhcm5pbmcvZHJhZy1kcm9wL3NyYy9jb21wb25lbnRzL0FkZGFibGVCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQiIsImZpbGUiOiIvVXNlcnMvYWJoaXNoZWt0aGFrdXIvRGVza3RvcC9jb2RlL2xlYXJuaW5nL2RyYWctZHJvcC9zcmMvY29tcG9uZW50cy9BZGRhYmxlQnV0dG9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgXG4gICAgYm90dG9tQmFyU3R5bGUsXG4gICAgYm90dG9tQnV0dG9uU3R5bGUsXG4gICAgaW5wdXRTdHlsZSxcbiAgICBjcm9zc1N0eWxlLFxuICAgIHdyYXBwZXJTdHlsZVxufSBmcm9tICdzcmMvY29tcG9uZW50cy9BZGRhYmxlQnV0dG9uL3N0eWxlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRhYmxlQnV0dG9uICh7IG9uQXBwbHksIGJ1dHRvblRpdGxlLCBzdHlsZSB9KSB7XG4gICAgY29uc3QgW2FkZFBsYW4sIHNldEFkZFBsYW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3BsYW5WYWx1ZSwgc2V0UGxhblZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgaW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFBsYW5WYWx1ZSh2YWx1ZSksIFtdKVxuXG4gICAgY29uc3QgY2hhbmdlQWRkUGxhbiA9IHVzZUNhbGxiYWNrKChldmVudCwgdmFsdWUpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgc2V0UGxhblZhbHVlKCcnKVxuICAgICAgICBzZXRBZGRQbGFuKHZhbHVlKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlQWRkID0gdXNlQ2FsbGJhY2soKGV2ZW50LCB7IHBsYW5WYWx1ZSB9KSA9PiB7XG4gICAgICAgIGFkZFBsYW4gPyBvbkFwcGx5KHBsYW5WYWx1ZSkgOiBjaGFuZ2VBZGRQbGFuKGV2ZW50LCB0cnVlKVxuICAgICAgICBzZXRQbGFuVmFsdWUoJycpXG4gICAgfSwgW2NoYW5nZUFkZFBsYW4sIGFkZFBsYW5dKVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZihldmVudC5rZXkgPT0gJ0VudGVyJyAmJiBwbGFuVmFsdWUpIHtcbiAgICAgICAgICAgIG9uQXBwbHkocGxhblZhbHVlKVxuICAgICAgICAgICAgc2V0UGxhblZhbHVlKCcnKVxuICAgICAgICAgICAgc2V0QWRkUGxhbihmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtwbGFuVmFsdWUsIG9uQXBwbHldKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY3NzPXtbd3JhcHBlclN0eWxlKGFkZFBsYW4pLCBzdHlsZV19PlxuICAgICAgICAgICAge2FkZFBsYW4gJiZcbiAgICAgICAgICAgICg8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjc3M9e2Nyb3NzU3R5bGV9IG9uQ2xpY2s9eyhldmVudCkgPT4gY2hhbmdlQWRkUGxhbihldmVudCwgZmFsc2UpfS8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0J1xuICAgICAgICAgICAgICAgICAgICBjc3M9e2lucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBpbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGxhblZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNzcz17W2JvdHRvbUJhclN0eWxlLCBib3R0b21CdXR0b25TdHlsZShhZGRQbGFuKV19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiAgaGFuZGxlQWRkKGV2ZW50LCB7IHBsYW5WYWx1ZSB9KX0+XG4gICAgICAgICAgICAgICAge2J1dHRvblRpdGxlfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXX0= */")),
    onClick: function onClick(event) {
      return handleAdd(event, {
        planValue: planValue
      });
    }
  }, buttonTitle));
}

/***/ }),

/***/ "vpQ9":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var src_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/style.js */ "W3s1");
/* harmony import */ var pages_home_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/home/index.js */ "4EvU");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "qKvR");




function App() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_style_js__WEBPACK_IMPORTED_MODULE_0__["Core"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pages_home_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "wHcX":
/*!******************************!*\
  !*** ./src/assets/cross.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/cross.png");

/***/ }),

/***/ "zoXn":
/*!************************************!*\
  !*** ./src/assets/background.jpeg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/background.jpeg");

/***/ })

},[["tjUo","runtime","_core-js","_react-redux","_emotion","_scheduler","_react-dom","_react","vendors~main"]]]);
//# sourceMappingURL=main.js.map