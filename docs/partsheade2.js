/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};__webpack_unused_export__={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};__webpack_unused_export__=E;__webpack_unused_export__=p;
__webpack_unused_export__=r;__webpack_unused_export__=G;__webpack_unused_export__=q;__webpack_unused_export__=w;__webpack_unused_export__=W;
__webpack_unused_export__=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};__webpack_unused_export__=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};__webpack_unused_export__=M;__webpack_unused_export__=function(a){var b=M.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};
__webpack_unused_export__=function(a){return{$$typeof:v,render:a}};__webpack_unused_export__=O;__webpack_unused_export__=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};__webpack_unused_export__=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};__webpack_unused_export__=function(){throw Error("act(...) is not supported in production builds of React.");};
__webpack_unused_export__=function(a,b){return U.current.useCallback(a,b)};__webpack_unused_export__=function(a){return U.current.useContext(a)};__webpack_unused_export__=function(){};__webpack_unused_export__=function(a){return U.current.useDeferredValue(a)};__webpack_unused_export__=function(a,b){return U.current.useEffect(a,b)};__webpack_unused_export__=function(){return U.current.useId()};__webpack_unused_export__=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
__webpack_unused_export__=function(a,b){return U.current.useInsertionEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useMemo(a,b)};__webpack_unused_export__=function(a,b,e){return U.current.useReducer(a,b,e)};__webpack_unused_export__=function(a){return U.current.useRef(a)};__webpack_unused_export__=function(a){return U.current.useState(a)};__webpack_unused_export__=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
__webpack_unused_export__=function(){return U.current.useTransition()};__webpack_unused_export__="18.2.0";


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  /* unused reexport */ __webpack_require__(287);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
;// CONCATENATED MODULE: ./src/stylesheets/header.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const header_module = ({"O_Header":"BCiVFuVobl0bNFIGe1x1","M_MenuItemsHeader":"H3zLOLGQ7iLsM7q6T9RX","Q_Search":"jzNiLRiXxrgdCg0_uhai"});
;// CONCATENATED MODULE: ./src/header.js
// import React from 'react';
// import './stylesheets/header.scss';

// const header = ({ menu }) => {
//   return (
//     <nav className='menu-bar'>
//       <ul className='menu-list'>
//         {menu.map((link, index) => (
//           <li key={index}>
//             <a href={link.href} className={link.className}>{link.label}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default header;



var A_header = function A_header() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "O_Header",
    className: styles['O_Header']
  }, /*#__PURE__*/React.createElement("div", {
    "class": "Q_Logo"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "150",
    height: "51",
    viewBox: "0 0 150 51",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28.9934 16.7189C30.2641 15.2894 31.599 14.629 33.0054 14.5782C34.9043 14.5056 35.9394 15.5433 36.2035 16.4069C36.4677 17.2704 36.5319 18.0977 36.5962 19.3676C36.5962 19.7885 36.7461 19.999 37.0388 19.999C37.6598 19.999 38.2381 19.8611 38.7592 19.5781C39.316 19.2951 39.7586 18.9467 40.087 18.5186C40.4154 18.0977 40.5796 17.7276 40.5796 17.4083C40.5796 16.7044 40.2869 16.015 39.6944 15.3474C39.4088 14.9918 39.0519 14.6653 38.6236 14.3823C38.5379 14.2879 37.2387 13.3155 35.4111 13.2139C33.5836 13.1123 30.7281 14.1355 28.3437 15.986C25.9594 17.8292 24.0034 20.2384 22.4614 23.1992C20.9194 26.1599 20.1484 29.1932 20.1484 32.2918C20.1484 35.0421 20.7481 37.1828 21.9474 38.7212C23.1467 40.2524 24.7244 41.0216 26.6733 41.0216C30.6139 41.0216 34.2118 37.5529 37.4671 30.6228H37.053C35.8537 33.061 34.6901 34.8026 33.555 35.8476C32.42 36.8925 31.2421 37.415 30.0071 37.415C28.4294 37.415 27.173 36.791 26.2307 35.5355C25.2884 34.2801 24.8172 32.3644 24.8172 29.7882C24.8172 27.2121 25.1955 24.7448 25.9451 22.3937C26.7018 20.0425 27.7084 18.1558 28.9791 16.7262L28.9934 16.7189Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52.9951 35.8412C51.8672 36.8862 50.6464 37.4087 49.3472 37.4087C47.7053 37.4087 46.406 36.7919 45.4637 35.551C44.5214 34.3173 44.0502 32.387 44.0502 29.7746C44.0502 28.8458 44.1216 27.8081 44.2715 26.6615C44.3429 26.0882 44.7427 25.6093 45.2924 25.4424C49.5542 24.1507 52.8309 22.7139 55.1225 21.1319C57.571 19.4411 58.7989 17.7648 58.7989 16.0885C58.7989 15.254 58.492 14.5646 57.8709 14.0276C57.2569 13.4906 56.3289 13.2148 55.0939 13.2148C52.6596 13.2148 50.2181 14.1364 47.7695 15.9869C45.3209 17.8301 43.3078 20.2248 41.7301 23.171C40.1525 26.1173 39.3672 29.1506 39.3672 32.2854C39.3672 35.0357 39.974 37.1765 41.1947 38.7149C42.4083 40.246 44.0145 41.0153 45.9991 41.0153C48.0908 41.0153 50.0254 40.1299 51.8101 38.352C53.5948 36.5742 55.2866 33.998 56.9 30.6164H56.486C55.2866 33.0547 54.123 34.7963 52.988 35.8412H52.9951ZM45.3066 22.4308C45.6279 21.4947 46.0062 20.6022 46.4417 19.7531C47.2841 18.1131 48.2478 16.8069 49.3472 15.8345C50.4466 14.8621 51.5245 14.3687 52.5882 14.3687C53.3092 14.3687 53.8732 14.5573 54.2872 14.9419C54.7013 15.3265 54.9012 15.8998 54.9012 16.669C54.9012 18.2365 54.0516 19.7749 52.3597 21.2915C51.1176 22.4018 49.39 23.3887 47.177 24.245C46.0562 24.6804 44.914 23.5774 45.3138 22.4308H45.3066Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80.9016 36.5457C80.4233 37.0827 79.945 37.3584 79.4595 37.3584C79.1883 37.3584 78.9527 37.2278 78.7671 36.9666C78.5815 36.7053 78.4815 36.299 78.4815 35.7402C78.4815 34.7678 78.7028 33.5777 79.1526 32.1844L82.3365 21.6332C82.8862 19.8553 83.1574 18.3604 83.1574 17.1413C83.1574 15.8206 82.8647 14.8336 82.2865 14.1878C81.7011 13.542 80.9515 13.2227 80.0235 13.2227C78.1746 13.2227 76.2542 14.5361 74.2697 17.1703C72.2851 19.7972 69.4224 25.3268 67.5878 28.7447C67.4521 28.9987 67.3165 29.2454 67.188 29.4922C66.7739 30.2541 65.6389 29.7679 65.8816 28.9334L68.2588 20.7479C68.7371 19.1441 68.9798 17.7726 68.9798 16.6188C68.9798 15.465 68.7585 14.6159 68.3088 14.0572C67.8662 13.4984 67.2951 13.2227 66.6098 13.2227C65.4461 13.2227 64.2468 13.8903 63.0118 15.2328C61.7768 16.5753 60.0992 18.5128 58.3216 21.0599H58.7857C59.9493 19.3908 60.9915 18.2225 61.5769 17.5622C62.1623 16.9018 62.7049 16.568 63.2188 16.568C63.8328 16.568 64.1469 17.0397 64.1469 17.9758C64.1469 18.6362 64.0112 19.4416 63.7328 20.3778L57.9219 40.3917H62.5978L68.0946 29.1076C70.2505 24.652 71.9995 21.488 73.3345 19.6231C74.6694 17.7581 75.8545 16.8292 76.8824 16.8292C77.8105 16.8292 78.2674 17.4243 78.2674 18.6071C78.2674 19.2312 78.1103 20.073 77.8033 21.1179L74.4124 32.3513C73.8271 34.3396 73.5415 35.9942 73.5415 37.3149C73.5415 38.5703 73.7699 39.4992 74.234 40.1087C74.698 40.7183 75.2691 41.0231 75.9544 41.0231C77.0823 41.0231 78.2674 40.3337 79.5024 38.9622C80.7374 37.5834 82.1937 35.6604 83.8713 33.1858H83.4073C82.208 34.8912 81.3656 36.0159 80.8873 36.5529L80.9016 36.5457Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M93.7235 36.4129C93.0524 37.0369 92.4099 37.3562 91.796 37.3562C91.282 37.3562 90.8679 37.1748 90.561 36.8047C90.254 36.4419 90.097 35.8541 90.097 35.0559C90.097 34.2576 90.2683 33.2634 90.6109 32.0806L95.3011 15.5208C95.4796 14.8967 96.0364 14.4686 96.6718 14.4686H101.355V13.8445H97.6498C96.7003 13.8445 96.015 12.9157 96.2791 11.9941L97.4999 7.68359H97.2429C96.6289 8.939 95.8223 10.1073 94.83 11.1813C93.9448 12.1392 93.0238 12.952 92.053 13.6051C91.8174 13.7647 91.539 13.8445 91.2606 13.8445H88.091V14.4686H89.019C89.9685 14.4686 90.6538 15.3975 90.3896 16.3263L85.985 31.8194C85.4353 33.8077 85.1641 35.4622 85.1641 36.7829C85.1641 38.2488 85.4496 39.3155 86.0136 39.9977C86.5775 40.6798 87.2914 41.0136 88.1481 41.0136C89.5187 41.0136 90.8822 40.317 92.2314 38.9237C93.5878 37.5304 95.1012 35.6146 96.7788 33.1764H96.3148C95.2511 34.7075 94.3874 35.7888 93.7163 36.4129H93.7235Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M102.005 17.8685C102.605 17.1864 103.176 16.8526 103.726 16.8526C104.311 16.8526 104.597 17.3243 104.597 18.2604C104.597 18.9208 104.461 19.7262 104.183 20.6624L100.742 32.5198C100.156 34.5372 99.8709 36.2497 99.8709 37.643C99.8709 38.8984 100.092 39.82 100.542 40.4151C100.985 41.0101 101.556 41.3004 102.241 41.3004C103.369 41.3004 104.554 40.611 105.789 39.2395C107.024 37.8607 108.48 35.9377 110.158 33.4632H109.694C108.595 35.0306 107.781 36.1191 107.252 36.7287C106.724 37.3382 106.232 37.643 105.789 37.643C105.104 37.643 104.761 37.106 104.761 36.0248C104.761 35.2265 104.982 34.0365 105.432 32.469L108.823 21.0252C109.301 19.4577 109.544 18.079 109.544 16.8961C109.544 15.7133 109.323 14.8933 108.873 14.3345C108.43 13.7758 107.845 13.5 107.124 13.5C105.96 13.5 104.761 14.1676 103.526 15.5101C102.291 16.8526 100.785 18.7901 99 21.3372H99.464C100.563 19.6972 101.406 18.5434 102.005 17.8613V17.8685Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M123.8 14.4699H129.169V13.8458H123.143C122.458 13.8458 121.873 13.3451 121.759 12.6557C121.523 11.2624 121.409 10.1957 121.409 9.45547C121.409 7.53971 121.916 6.11739 122.922 5.19579C123.936 4.27419 125.635 3.80977 128.034 3.80977C128.597 3.80977 129.297 3.84605 130.125 3.91862C130.846 3.98393 131.51 3.47596 131.639 2.75029C131.667 2.57613 131.681 2.40922 131.681 2.24232C131.681 1.58196 131.46 1.03771 131.01 0.624076C130.568 0.203188 129.947 0 129.161 0C127.891 0 126.584 0.529739 125.228 1.59647C123.872 2.65595 122.587 4.23791 121.373 6.32784C120.295 8.17104 119.36 10.348 118.568 12.8444C118.382 13.4394 117.846 13.853 117.233 13.853H112.871V14.4771H116.197C117.133 14.4771 117.804 15.3842 117.547 16.2985L110.044 42.7419C109.323 45.3181 108.602 47.0597 107.888 47.9668C107.167 48.8738 106.31 49.3238 105.318 49.3238C104.326 49.3238 103.39 48.99 102.62 48.3296C102.313 48.0684 102.02 47.7781 101.756 47.4588C100.92 46.4719 99.2857 46.9508 99.25 48.257C99.25 48.2788 99.25 48.3078 99.25 48.3296C99.25 49.0625 99.5427 49.6648 100.121 50.1293C100.706 50.6009 101.542 50.8332 102.641 50.8332C104.39 50.8332 106.189 50.2236 108.038 49.0045C109.887 47.7853 111.543 46.1816 112.999 44.2005C114.456 42.2122 115.491 40.144 116.112 37.9815L122.451 15.5003C122.622 14.8907 123.172 14.4699 123.8 14.4699Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M148.704 14.7901C147.847 13.7451 146.869 13.2227 145.777 13.2227C144.371 13.2227 143.05 14.1515 141.822 16.0165C140.587 17.8815 139.202 20.8349 137.66 24.8697H137.56C137.524 21.4227 137.118 18.6144 136.325 16.4591C135.54 14.2966 134.391 13.2227 132.884 13.2227C131.928 13.2227 130.871 13.7959 129.722 14.9498C128.572 16.0963 126.952 18.1354 124.867 21.0599H125.331C126.702 19.2457 127.673 18.0484 128.237 17.4533C128.801 16.8583 129.322 16.568 129.807 16.568C130.764 16.568 131.528 17.5767 132.092 19.6013C132.656 21.6187 132.941 24.1803 132.941 27.2789C132.941 30.8347 132.613 34.3179 131.963 37.7285C131.314 41.1392 130.307 43.962 128.958 46.1898C127.602 48.4176 125.931 49.5352 123.947 49.5352C122.747 49.5352 121.662 49.107 120.684 48.258C120.084 47.7355 119.57 47.1259 119.149 46.4438C118.65 45.6383 117.493 45.6166 116.936 46.3785C116.544 46.9155 116.344 47.5033 116.344 48.1274C116.344 48.9982 116.715 49.6948 117.45 50.2173C118.186 50.7398 119.206 51.001 120.506 51.001C124.239 51.001 128.43 49.0925 133.07 45.2827C137.71 41.4657 141.694 36.9956 145.02 31.8579C148.347 26.7201 150.003 22.4604 150.003 19.0861C150.003 17.2719 149.575 15.8496 148.718 14.8046L148.704 14.7901ZM143.335 32.2134C141.793 35.1306 139.609 38.0696 136.782 41.0448C136.275 41.5818 135.39 41.0739 135.576 40.3554C135.99 38.7445 136.482 36.7053 136.732 35.1887C137.132 32.7504 137.389 30.3194 137.503 27.8957C137.546 26.9523 137.732 26.0162 138.081 25.1454C138.945 22.9829 139.673 21.3066 140.273 20.1165C140.994 18.6869 141.594 17.7363 142.072 17.2719C142.55 16.8002 143.064 16.568 143.614 16.568C144.299 16.568 144.892 16.9744 145.384 17.7944C145.884 18.6144 146.127 19.8263 146.127 21.4227C146.127 25.0801 145.192 28.6794 143.328 32.2134H143.335Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.277 14.6718C15.9694 15.2015 16.3906 15.8328 16.5548 16.573C16.7547 17.2769 16.8832 18.2638 16.9474 19.5338C16.9474 19.9546 17.0974 20.1651 17.39 20.1651C18.0111 20.1651 18.5894 20.0272 19.1105 19.7442C19.6673 19.4612 20.1099 19.1129 20.4383 18.6847C20.7667 18.2638 20.9309 17.8937 20.9309 17.5744C20.9309 16.8706 20.6382 16.1812 20.0457 15.5135C19.4888 14.8096 18.6536 14.2436 17.5328 13.8227C16.4477 13.4018 15.1699 13.1914 13.6922 13.1914C11.1008 13.1914 9.01627 13.8445 7.4386 15.1507C5.89662 16.4206 5.12564 18.184 5.12564 20.4408C5.12564 21.7108 5.53255 23.075 6.31781 24.1635C7.10308 25.252 8.32381 26.5873 10.03 28.1402C11.8004 29.7294 13.1211 30.9921 13.9063 32.0153C14.7273 33.0385 15.1199 34.0326 15.1199 35.3026C15.1199 36.7829 13.7493 38.4737 11.7504 39.4461C9.63734 40.4766 6.56767 40.2734 4.61878 39.1559C0.135636 36.587 1.54197 32.9078 2.47001 31.6524C3.09109 30.8034 4.04768 30.1866 5.32552 29.802C5.48971 29.7657 5.56824 29.5915 5.56824 29.2722C5.56824 28.7425 5.35408 28.1765 4.92575 27.5814C4.53312 26.9791 4.09052 26.7034 3.59794 26.7324C2.87692 26.8413 2.20588 27.3492 1.57767 28.2636C0.956595 29.1416 0.556824 29.9544 0.392632 30.6946C0.128498 31.4347 0 32.2112 0 33.024C0 34.2939 0.278412 35.542 0.835236 36.7829C1.42775 37.9803 2.32724 38.989 3.54083 39.8017C4.75442 40.6145 6.2964 41.0208 8.16675 41.0208C10.0371 41.0208 11.6433 40.7233 13.1853 40.121C14.763 39.4897 16.0265 38.5898 16.976 37.4215C17.9255 36.2242 18.4038 34.7946 18.4038 33.1401C18.4038 31.696 18.0111 29.7367 17.2187 28.7135C16.462 27.6903 15.1842 26.3841 13.3781 24.8021C13.1496 24.628 12.807 24.3232 12.3429 23.9023C10.9295 22.5961 9.7587 21.4423 9.33751 20.8327C8.91633 20.2231 7.74557 17.8575 9.43746 15.3176C10.8795 13.1479 14.149 13.8373 15.2484 14.6863L15.277 14.6718Z",
    fill: "#E76423"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M107.081 10.6389C106.553 10.0801 106.281 9.36896 106.281 8.49816C106.281 7.62735 106.574 6.85089 107.152 6.27761C107.738 5.70433 108.473 5.41406 109.365 5.41406C110.258 5.41406 110.921 5.68982 111.471 6.24858C112.021 6.80735 112.292 7.5185 112.292 8.38931C112.292 9.26011 111.992 10.0366 111.393 10.6099C110.793 11.1831 110.029 11.4734 109.108 11.4734C108.287 11.4734 107.609 11.1976 107.081 10.6389Z",
    fill: "#E76423"
  }))), /*#__PURE__*/React.createElement("div", {
    "class": "M_MenuItemsHeader"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./aroma_atlas.html",
    "class": "A_MenuItemHeader"
  }, "\u0430\u0442\u043B\u0430\u0441 \u0430\u0440\u043E\u043C\u0430\u0442\u043E\u0432"), /*#__PURE__*/React.createElement("a", {
    href: "./articles.html",
    "class": "A_MenuItemHeader"
  }, "\u0441\u0442\u0430\u0442\u044C\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "./pop_culture.html",
    "class": "A_MenuItemHeader"
  }, "\u043F\u043E\u043F-\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430"), /*#__PURE__*/React.createElement("a", {
    href: "./tests.html",
    "class": "A_MenuItemHeader"
  }, "\u0442\u0435\u0441\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    "class": "A_MenuItemHeader"
  }, "\u043E \u043D\u0430\u0441")), /*#__PURE__*/React.createElement("div", {
    "class": "Q_Search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z",
    stroke: "#E76423",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.0031 27.9992L22.2031 22.1992",
    stroke: "#E76423",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))));
};
/* harmony default export */ const header = ((/* unused pure expression or super */ null && (A_header)));
/******/ })()
;