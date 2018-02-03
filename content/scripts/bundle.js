/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vanilaSearchWidget = __webpack_require__(1);

var Widget = new _vanilaSearchWidget.vanilaSearchWidget();
Widget.onSearch();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vanilaSearchWidget = exports.vanilaSearchWidget = function () {
    function vanilaSearchWidget() {
        _classCallCheck(this, vanilaSearchWidget);

        this.message = " this is a test";
        this.ListofItems = ['book', 'pen', 'remote', 'keys', 'baseball', 'backpack', 'speakers', 'notebooks'];
        this.Items = document.getElementById('listOfSelectedItems');
        this.ElementRef = document.getElementById('searchId');
        this.Items.style.display = 'none';
        this.Items.style.position = 'absolute';
        this.Items.style.width = '500px';
        this.Items.style.marginLeft = '70px';
        this.Items.style.backgroundColor = '#f9f9f9';
        this.Items.style.boxShadow = '0px 8px 16px 0px rgba(0, 0,0,0.2)';
        this.Items.style.padding = '12px 16px';
        this.Items.style.zIndex = '1';
        this.resetbtn = document.getElementById('resetbtn');
    }

    _createClass(vanilaSearchWidget, [{
        key: 'onSearch',
        value: function onSearch() {
            var _this = this;

            this.ElementRef.onfocus = function (event) {
                if (_this.Items.childNodes.length > 0) {
                    while (_this.Items.firstChild) {
                        _this.Items.removeChild(_this.Items.firstChild);
                    }
                }
                _this.ElementRef.value = '';
                _this.Items.style.display = 'none';
                _this.resetbtn.style.marginTop = '10px';
            };
            this.ElementRef.onkeydown = function (event) {
                if (event.key !== 'Tab' && event.key !== 'Escape') {
                    if (_this.Items.childNodes.length > 0) {
                        while (_this.Items.firstChild) {
                            _this.Items.removeChild(_this.Items.firstChild);
                        }
                        if (_this.ElementRef.value === '') {
                            _this.Items.style.display = 'none';
                            _this.resetbtn.style.marginTop = '10px';
                        }
                    } else {
                        var itemDropDown = document.getElementsByClassName('searchWidgetDropDown-content');
                        _this.Items.style.display = 'none';
                        _this.resetbtn.style.marginTop = '10px';
                    }
                }
            };
            this.resetbtn.onclick = function () {
                _this.ElementRef.value = '';
                if (_this.Items.childNodes.length > 0) {
                    while (_this.Items.firstChild) {
                        _this.Items.removeChild(_this.Items.firstChild);
                    }
                }
                _this.Items.style.display = 'none';
            };
            this.ElementRef.onkeyup = function (event) {
                // const itemDropDown = document.getElementsByClassName('searchWidgetDropDown-content');   
                console.log(event.target.value);
                if (event.target.value === '') {
                    _this.Items.style.display = 'none';
                    _this.resetbtn.style.marginTop = '10px';
                } else {
                    var filteredItems = _this.ListofItems.filter(function (value, index) {
                        if (value.includes(event.target.value)) {
                            return value;
                        }
                    });
                    filteredItems.forEach(function (i, k) {
                        //  console.log(`${i}`);  
                        //  this.Items.innerHTML = `${i}`;   
                        var li = document.createElement('li');
                        //   const li_text = document.createTextNode( `${i}`);
                        li.innerHTML = '&#8618;' + ' ' + ('' + i);
                        li.style.cursor = 'pointer';
                        _this.Items.appendChild(li);
                        _this.Items.style.display = 'block';
                        _this.resetbtn.style.marginTop = '200px';
                    });
                }
                // console.log(filteredItems);    
            };
            addEventListener('keyup', function (event) {
                if (event.key === 'Escape') {
                    _this.ElementRef.focus();
                }
                if (event.key === 'Tab') {
                    //  console.log(document.activeElement === this.resetbtn);
                    _this.resetbtn.focus() ? _this.Items.focus = function () {
                        _this.Items.style.backgroundColor = "darkGray";
                    } : _this.resetbtn.focus = function () {
                        _this.resetbtn.style.backgroundColor = 'orange';
                    };
                }
            });
        }
    }]);

    return vanilaSearchWidget;
}();

/***/ })
/******/ ]);