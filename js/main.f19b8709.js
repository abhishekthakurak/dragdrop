(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{tjUo:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n("i8i4"),o=n.n(a),c=n("/MKj"),i=(n("pNMO"),n("TeQF"),n("QWBl"),n("HRxU"),n("eoL8"),n("5DmW"),n("27RR"),n("tkto"),n("FZtP"),n("ANjH")),l=n("sINF");n("5HXA");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("4Brf"),n("0oug"),n("pjDv"),n("J30X"),n("4mDm"),n("+2oP"),n("pDQq"),n("DQNa"),n("sMBO"),n("07d7"),n("JfAA"),n("PKPk"),n("3bBZ");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f={plans:[{title:"To Do",planItems:["Pay"]},{title:"Development",planItems:["Agreement"]},{title:"QA",planItems:["Landing"]},{title:"Ready For Release",planItems:["Home"]},{title:"Done",planItems:["Hooks"]}]},y={planner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"ADD_PLAN":return e.plans.push(r),e;case"ADD_TASK":return e.plans[r.id]&&e.plans[r.id].planItems.push(r.planItem),e;case"TASK_EDIT":e.plans[r.planId]&&(e.plans[r.planId].planItems[r.id]=r.planItem);case"MOVE_TASK_ACROSS_PLAN":var a=r.planId,o=r.newPlanId,c=r.taskId,i=e.plans[a].planItems.splice(c,1),l=d(i,1),u=l[0];return u&&e.plans[o].planItems.push(u),e;case"MOVE_TASK_WITHIN_PLAN":var s=r.newTaskId,p=r.currentPlanId,b=r.prevTaskId,y=e.plans[p].planItems[s];return e.plans[p].planItems[s]=e.plans[p].planItems[b],e.plans[p].planItems[b]=y,e;default:return e}}},m=n("qKvR"),g=function(){return Object(m.c)(m.a,{styles:"\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"})},v=(n("2B1R"),n.p+"assets/background.63e7a2c4.jpeg");var O=Object(m.b)("height:100%;background:url(",v,") center;background-size:cover;overflow-x:auto;white-space:nowrap;"),j={name:"yz4gtx",styles:"background-color:rgba(255,255,255,0.24);border-radius:3px;padding:4px;width:270px;margin:8px;box-sizing:border-box;display:inline-block;vertical-align:top;"};var h={name:"1uzuhk0",styles:"width:270px;margin:8px;height:100%;box-sizing:border-box;display:inline-block;vertical-align:top;"},x={name:"11zlflj",styles:"background-color:#ebecf0;border-radius:3px;box-sizing:border-box;display:flex;flex-direction:column;padding:12px 8px;"},I={name:"1in6sz",styles:"padding:10px 8px;min-height:20px;padding-right:36px;"},k={name:"akqimm",styles:"width:calc(100% - 16px);margin:8px;.button{width:30px;height:30px;border-radius:50%;float:right;}"};var w={name:"rrxjvi",styles:"padding:4px 8px;position:relative;margin:4px 12px;background:#fff;border-radius:4px;border:2px solid #ddd;display:flex;justify-content:space-between;align-items:center;height:30px;"};var A={name:"1uwhb0e",styles:"background:#eee;padding:2px 8px;font-size:12px;border-radius:4px;border:1px solid #ddd;"},S={name:"17kl0rw",styles:"font-size:14px;height:100%;width:100%;margin-right:8px;"};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e){var t=e.item,n=e.id,a=e.planId,o=Object(c.b)(),i=D(Object(r.useState)(!1),2),l=i[0],u=i[1],s=D(Object(r.useState)(t),2),p=s[0],d=s[1],b=Object(r.useCallback)((function(){u(!0)}),[]),f=Object(r.useCallback)((function(e){d(e.target.value)}),[]),y=Object(r.useCallback)((function(e){"Enter"===e.key&&p&&(o({type:"TASK_EDIT",payload:{id:n,planItem:p,planId:a}}),u(!1))}),[n,p]);return Object(m.c)(r.Fragment,null,l?Object(m.c)("input",{css:S,placeholder:"Enter text...",value:p,onKeyDown:y,onChange:f}):Object(m.c)("label",null,t),Object(m.c)("span",{css:A,onClick:b},"edit"))}function C(e){var t=e.planItems,n=e.planId,a=Object(c.b)(),o=Object(r.useCallback)((function(e){var t=e.event,n=e.planId,r=e.index;t.dataTransfer.setData("planId",n),t.dataTransfer.setData("taskId",r)}),[]),i=Object(r.useCallback)((function(e){var t=e.newTaskId,n=e.event,r=n.dataTransfer.getData("planId"),o=n.dataTransfer.getData("taskId");a({type:"MOVE_TASK_WITHIN_PLAN",payload:{currentPlanId:r,newTaskId:t,prevTaskId:o}})}),[]),l=Object(r.useCallback)((function(e){e.preventDefault()}),[]);return Object(m.c)(r.Fragment,null,t.map((function(e,t){return Object(m.c)("div",{css:w,key:t,draggable:"true",onDragStart:function(e){return o({event:e,planId:n,index:t})},onDrop:function(e){return i({newTaskId:t,event:e})},onDragOver:l},Object(m.c)(P,{item:e,id:t,planId:n}))})))}var _=n("iYmT"),E=n.p+"assets/cross.3075c8ea.png";var N={name:"uphijh",styles:"height:40px;width:calc(100% - 16px);background:#fff;font-size:16px;color:#5e6c84;padding:8px;margin:8px;"},K=Object(m.b)("color:#fff;width:12px;height:12px;margin:4px;position:absolute;right 0;top:0;background:url(",E,") center;cursor:pointer;"),z={name:"3t393m",styles:"width:calc(100% - 16px);border-radius:3px;color:#5e6c84;margin:8px;padding:4px 8px;"},M={name:"1l4w6pd",styles:"display:flex;justify-content:center;"};function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e){var t,n,a=e.onApply,o=e.buttonTitle,c=e.style,i=R(Object(r.useState)(!1),2),l=i[0],u=i[1],s=R(Object(r.useState)(""),2),p=s[0],d=s[1],b=Object(r.useCallback)((function(e){return d(e)}),[]),f=Object(r.useCallback)((function(e,t){e.stopPropagation(),d(""),u(t)}),[]),y=Object(r.useCallback)((function(e,t){var n=t.planValue;l?a(n):f(e,!0),d("")}),[f,l]),g=Object(r.useCallback)((function(e){"Enter"==e.key&&p&&(a(p),d(""),u(!1))}),[p,a]);return Object(m.c)("div",{css:Object(_.a)([(n=l,Object(m.b)("position:relative;",n&&"padding-top: 16px",";")),c],"")},l&&Object(m.c)(r.Fragment,null,Object(m.c)("div",{css:K,onClick:function(e){return f(e,!1)}}),Object(m.c)("input",{className:"input",css:N,placeholder:"Enter text...",onChange:function(e){return b(e.target.value)},value:p,onKeyDown:g})),Object(m.c)("button",{className:"button",css:Object(_.a)([z,(t=l,Object(m.b)("background:#5aac44;color:#fff;font-size:16px;",t&&M,""))],""),onClick:function(e){return y(e,{planValue:p})}},o))}function H(e){var t=e.data,n=void 0===t?{}:t,a=e.id,o=n.title,i=n.planItems,l=Object(c.b)(),u=Object(r.useCallback)((function(e){return l({type:"ADD_TASK",payload:{id:a,planItem:e}})}),[a]),s=Object(r.useCallback)((function(e){var t=e.newPlanId,n=e.event;n.stopPropagation();var r=n.dataTransfer.getData("planId"),a=n.dataTransfer.getData("taskId");l({type:"MOVE_TASK_ACROSS_PLAN",payload:{planId:r,newPlanId:t,taskId:a}})}),[]),p=Object(r.useCallback)((function(e){e.preventDefault()}),[]);return Object(m.c)("div",{css:h},Object(m.c)("div",{css:x,onDrop:function(e){return s({newPlanId:a,event:e})},onDragOver:p},Object(m.c)("label",{css:I},o),Object(m.c)(C,{planItems:i,planId:a}),Object(m.c)(L,{style:k,buttonTitle:"+",onApply:u})))}var B=function(){var e=Object(c.c)((function(e){var t=e.planner.plans;return{plans:void 0===t?[]:t}})).plans,t=Object(c.b)(),n=Object(r.useCallback)((function(e){return t({type:"ADD_PLAN",payload:{title:e,planItems:[]}})}),[]);return Object(m.c)("div",{css:O},e.map((function(e,t){return Object(m.c)(H,{data:e,key:t,id:t})})),Object(m.c)("div",{css:j},Object(m.c)(L,{onApply:n,buttonTitle:"+ Add another plan"})))};function U(){return Object(m.c)(r.Fragment,null,Object(m.c)(g,null),Object(m.c)(B,null))}var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.preloadedState,n=void 0===t?{}:t,r=e.extraParams,a=void 0===r?{}:r,o=e.reducers,c=void 0===o?{}:o,u=Object(i.combineReducers)(c),p=Object(i.applyMiddleware)(l.a.withExtraArgument(s({},a)));var d=Object(i.createStore)(u,n,p);return d}({reducers:y});o.a.render(Object(m.c)((function(){return Object(m.c)(c.a,{store:V},Object(m.c)(U,null))}),null),document.getElementById("root"))}},[["tjUo","runtime","core-js","react-redux","emotion","react-dom","vendors~main"]]]);