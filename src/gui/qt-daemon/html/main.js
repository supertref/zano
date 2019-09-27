(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputDisableSelectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDisableSelectionDirective", function() { return InputDisableSelectionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDisableSelectionDirective = /** @class */ (function () {
    function InputDisableSelectionDirective() {
    }
    InputDisableSelectionDirective.prototype.handleInput = function (event) {
        if (event.target.readOnly) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputDisableSelectionDirective.prototype, "handleInput", null);
    InputDisableSelectionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input'
        }),
        __metadata("design:paramtypes", [])
    ], InputDisableSelectionDirective);
    return InputDisableSelectionDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-validate/input-validate.directive.ts ***!
  \********************************************************************************/
/*! exports provided: InputValidateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidateDirective", function() { return InputValidateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputValidateDirective = /** @class */ (function () {
    function InputValidateDirective(el, variablesService) {
        this.el = el;
        this.variablesService = variablesService;
    }
    Object.defineProperty(InputValidateDirective.prototype, "defineInputType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    InputValidateDirective.prototype.handleInput = function (event) {
        if (this.type === 'money') {
            this.moneyValidation(event);
        }
        else if (this.type === 'integer') {
            this.integerValidation(event);
        }
    };
    InputValidateDirective.prototype.moneyValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d\.]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(',', '.').replace(OnlyD, '');
        }
        var _double_separator = currentValue.match(/\./g);
        if (_double_separator && _double_separator.length > 1) {
            currentValue = currentValue.substr(0, currentValue.lastIndexOf('.'));
        }
        if (currentValue.indexOf('.') === 0) {
            currentValue = '0' + currentValue;
        }
        var _zero_fill = currentValue.split('.');
        if (_zero_fill[0].length > 7) {
            _zero_fill[0] = _zero_fill[0].substr(0, 7);
        }
        if (1 in _zero_fill && _zero_fill[1].length) {
            _zero_fill[1] = _zero_fill[1].substr(0, this.variablesService.digits);
        }
        currentValue = _zero_fill.join('.');
        if (currentValue !== originalValue) {
            var cursorPosition = event.target.selectionEnd;
            event.target.value = currentValue;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
            event.target.dispatchEvent(new Event('input'));
        }
    };
    InputValidateDirective.prototype.integerValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(OnlyD, '');
        }
        if (currentValue !== originalValue) {
            var cursorPosition = event.target.selectionEnd;
            event.target.value = currentValue;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appInputValidate'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputValidateDirective.prototype, "defineInputType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputValidateDirective.prototype, "handleInput", null);
    InputValidateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInputValidate]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], InputValidateDirective);
    return InputValidateDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/modal-container/modal-container.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/_helpers/directives/modal-container/modal-container.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"content\">\r\n    <i class=\"icon\" [class.error]=\"type === 'error'\" [class.success]=\"type === 'success'\" [class.info]=\"type === 'info'\"></i>\r\n    <div class=\"message-container\">\r\n      <span class=\"title\">{{title}}</span>\r\n      <span class=\"message\" [innerHTML]=\"message\"></span>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"action-button\" (click)=\"onClose()\" #btn>{{ 'MODALS.OK' | translate }}</button>\r\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/modal-container/modal-container.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/_helpers/directives/modal-container/modal-container.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex;\n    margin: 1.2rem 0; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 4.4rem;\n      height: 4.4rem; }\n\n.modal .content .icon.error {\n        -webkit-mask: url('modal-alert.svg') no-repeat center;\n                mask: url('modal-alert.svg') no-repeat center; }\n\n.modal .content .icon.success {\n        -webkit-mask: url('modal-success.svg') no-repeat center;\n                mask: url('modal-success.svg') no-repeat center; }\n\n.modal .content .icon.info {\n        -webkit-mask: url('modal-info.svg') no-repeat center;\n                mask: url('modal-info.svg') no-repeat center; }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 2rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .action-button {\n    margin: 1.2rem auto 0.6rem;\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      -webkit-mask: url('close.svg') no-repeat center;\n              mask: url('close.svg') no-repeat center;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9tb2RhbC1jb250YWluZXIvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcZGlyZWN0aXZlc1xcbW9kYWwtY29udGFpbmVyXFxtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFSbEI7SUFXSSxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7O0FBWnBCO01BZU0sY0FBYztNQUNkLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBakJwQjtRQW9CUSxxREFBNkQ7Z0JBQTdELDZDQUE2RCxFQUFBOztBQXBCckU7UUF3QlEsdURBQStEO2dCQUEvRCwrQ0FBK0QsRUFBQTs7QUF4QnZFO1FBNEJRLG9EQUE0RDtnQkFBNUQsNENBQTRELEVBQUE7O0FBNUJwRTtNQWlDTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsaUJBQWlCLEVBQUE7O0FBckN2QjtRQXdDUSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQixFQUFBOztBQTFDM0I7UUE4Q1EsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTs7QUFoRDFCO0lBc0RJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osY0FBYyxFQUFBOztBQXhEbEI7SUE0REksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWMsRUFBQTs7QUF0RWxCO01BeUVNLCtDQUF1RDtjQUF2RCx1Q0FBdUQ7TUFDdkQsYUFBYTtNQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19oZWxwZXJzL2RpcmVjdGl2ZXMvbW9kYWwtY29udGFpbmVyL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzNHJlbTtcclxuICBtYXgtd2lkdGg6IDYwcmVtO1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxLjJyZW0gMDtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICB3aWR0aDogNC40cmVtO1xyXG4gICAgICBoZWlnaHQ6IDQuNHJlbTtcclxuXHJcbiAgICAgICYuZXJyb3Ige1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1hbGVydC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc3VjY2VzcyB7XHJcbiAgICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL21vZGFsLXN1Y2Nlc3Muc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmluZm8ge1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1pbmZvLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEuMnJlbSBhdXRvIDAuNnJlbTtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMi40cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjRyZW07XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBtYXNrOiB1cmwofnNyYy9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB3aWR0aDogMi40cmVtO1xyXG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/directives/modal-container/modal-container.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/modal-container/modal-container.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(translate) {
        this.translate = translate;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
        switch (this.type) {
            case 'error':
                this.title = this.translate.instant('MODALS.ERROR');
                break;
            case 'success':
                this.title = this.translate.instant('MODALS.SUCCESS');
                break;
            case 'info':
                this.title = this.translate.instant('MODALS.INFO');
                break;
        }
    };
    ModalContainerComponent.prototype.onClose = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalContainerComponent.prototype, "button", void 0);
    ModalContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-container',
            template: __webpack_require__(/*! ./modal-container.component.html */ "./src/app/_helpers/directives/modal-container/modal-container.component.html"),
            styles: [__webpack_require__(/*! ./modal-container.component.scss */ "./src/app/_helpers/directives/modal-container/modal-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar-container\">\r\n  <div class=\"progress-bar\">\r\n    <div class=\"progress-bar-full\" [style.width]=\"width\"></div>\r\n  </div>\r\n  <div class=\"progress-labels\">\r\n    <span *ngFor=\"let label of labels\">\r\n      {{ label | translate }}\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n  .progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n  .progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n  .progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2rem;\n    height: 100%; }\n  .progress-bar-container .progress-labels span {\n      flex: 1 0 0;\n      text-align: center; }\n  .progress-bar-container .progress-labels span:first-child {\n        text-align: left; }\n  .progress-bar-container .progress-labels span:last-child {\n        text-align: right; }\n  .progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9wcm9ncmVzcy1jb250YWluZXIvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcZGlyZWN0aXZlc1xccHJvZ3Jlc3MtY29udGFpbmVyXFxwcm9ncmVzcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTtFQU5kO0lBU0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixjQUFjLEVBQUE7RUFkbEI7TUFpQk0sY0FBYyxFQUFBO0VBakJwQjtJQXNCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBMUJoQjtNQTZCTSxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUE5QnhCO1FBaUNRLGdCQUFnQixFQUFBO0VBakN4QjtRQXFDUSxpQkFBaUIsRUFBQTtFQXJDekI7SUEyQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9wcm9ncmVzcy1jb250YWluZXIvcHJvZ3Jlc3MtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG5cclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTAuN3JlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDAgM3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cmVtKTtcclxuICAgIGhlaWdodDogMC43cmVtO1xyXG5cclxuICAgIC5wcm9ncmVzcy1iYXItZnVsbCB7XHJcbiAgICAgIGhlaWdodDogMC43cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLWxhYmVscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmbGV4OiAxIDAgMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLXRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3JlbTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProgressContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressContainerComponent", function() { return ProgressContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressContainerComponent = /** @class */ (function () {
    function ProgressContainerComponent() {
    }
    ProgressContainerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressContainerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProgressContainerComponent.prototype, "labels", void 0);
    ProgressContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-container',
            template: __webpack_require__(/*! ./progress-container.component.html */ "./src/app/_helpers/directives/progress-container/progress-container.component.html"),
            styles: [__webpack_require__(/*! ./progress-container.component.scss */ "./src/app/_helpers/directives/progress-container/progress-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressContainerComponent);
    return ProgressContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"switch\" (click)=\"toggleStaking(); $event.stopPropagation()\">\r\n  <span class=\"option\" *ngIf=\"staking\">{{ 'STAKING.SWITCH.ON' | translate }}</span>\r\n  <span class=\"circle\" [class.on]=\"staking\" [class.off]=\"!staking\"></span>\r\n  <span class=\"option\" *ngIf=\"!staking\">{{ 'STAKING.SWITCH.OFF' | translate }}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.5rem;\n  width: 5rem;\n  height: 2rem; }\n  .switch .circle {\n    border-radius: 1rem;\n    width: 1.2rem;\n    height: 1.2rem; }\n  .switch .option {\n    margin: 0 0.2rem;\n    line-height: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9zdGFraW5nLXN3aXRjaC9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxkaXJlY3RpdmVzXFxzdGFraW5nLXN3aXRjaFxcc3Rha2luZy1zd2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTtFQVRkO0lBWUksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFkbEI7SUFrQkksZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9zdGFraW5nLXN3aXRjaC9zdGFraW5nLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogNXJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5vcHRpb24ge1xyXG4gICAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.ts ***!
  \********************************************************************************/
/*! exports provided: StakingSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingSwitchComponent", function() { return StakingSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StakingSwitchComponent = /** @class */ (function () {
    function StakingSwitchComponent(backend, variablesService) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.stakingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StakingSwitchComponent.prototype.ngOnInit = function () { };
    StakingSwitchComponent.prototype.toggleStaking = function () {
        var wallet = this.variablesService.getWallet(this.wallet_id);
        if (wallet && wallet.loaded) {
            this.stakingChange.emit(!this.staking);
            if (!this.staking) {
                this.backend.startPosMining(this.wallet_id);
            }
            else {
                this.backend.stopPosMining(this.wallet_id);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "wallet_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "staking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StakingSwitchComponent.prototype, "stakingChange", void 0);
    StakingSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking-switch',
            template: __webpack_require__(/*! ./staking-switch.component.html */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html"),
            styles: [__webpack_require__(/*! ./staking-switch.component.scss */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"], _services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], StakingSwitchComponent);
    return StakingSwitchComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/tooltip.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/_helpers/directives/tooltip.directive.ts ***!
  \**********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer, route) {
        this.el = el;
        this.renderer = renderer;
        this.route = route;
        this.timeout = 0;
        this.delay = 0;
        this.showWhenNoOverflow = true;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        if (this.showWhenNoOverflow || (!this.showWhenNoOverflow && this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth)) {
            this.cursor = 'pointer';
            if (!this.tooltip) {
                this.show();
            }
            else {
                this.cancelHide();
            }
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        if (this.tooltip) {
            this.hide();
        }
    };
    TooltipDirective.prototype.show = function () {
        this.create();
        this.placement = this.placement === null ? 'top' : this.placement;
        this.setPosition(this.placement);
    };
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        this.removeTooltipTimeout = setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '0');
            _this.removeTooltipTimeoutInner = setTimeout(function () {
                _this.renderer.removeChild(document.body, _this.tooltip);
                _this.tooltip.removeEventListener('mouseenter', _this.enter);
                _this.tooltip.removeEventListener('mouseleave', _this.leave);
                _this.tooltip = null;
                _this.onHide.emit(true);
            }, _this.delay);
        }, this.timeout);
    };
    TooltipDirective.prototype.cancelHide = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        this.renderer.setStyle(this.tooltip, 'opacity', '1');
    };
    TooltipDirective.prototype.create = function () {
        var _this = this;
        this.tooltip = this.renderer.createElement('div');
        var innerBlock = this.renderer.createElement('div');
        if (typeof this.tooltipInner === 'string') {
            innerBlock.innerHTML = this.tooltipInner;
        }
        else {
            innerBlock = this.tooltipInner;
        }
        this.renderer.addClass(innerBlock, 'tooltip-inner');
        this.renderer.addClass(innerBlock, 'scrolled-content');
        this.renderer.appendChild(this.tooltip, innerBlock);
        this.renderer.appendChild(document.body, this.tooltip);
        this.enter = function () {
            _this.cancelHide();
        };
        this.tooltip.addEventListener('mouseenter', this.enter);
        this.leave = function () {
            if (_this.tooltip) {
                _this.hide();
            }
        };
        this.tooltip.addEventListener('mouseleave', this.leave);
        this.renderer.setStyle(document.body, 'position', 'relative');
        this.renderer.setStyle(this.tooltip, 'position', 'absolute');
        if (this.tooltipClass !== null) {
            var classes = this.tooltipClass.split(' ');
            for (var i = 0; i < classes.length; i++) {
                this.renderer.addClass(this.tooltip, classes[i]);
            }
        }
        this.renderer.setStyle(this.tooltip, 'opacity', '0');
        this.renderer.setStyle(this.tooltip, '-webkit-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-moz-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-o-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, 'transition', "opacity " + this.delay + "ms");
        window.setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '1');
        }, 0);
    };
    TooltipDirective.prototype.setPosition = function (placement) {
        var hostPos = this.el.nativeElement.getBoundingClientRect();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-' + placement);
        var topExit = hostPos.top - this.tooltip.getBoundingClientRect().height - parseInt(getComputedStyle(this.tooltip).marginTop, 10) < 0;
        var bottomExit = window.innerHeight < hostPos.bottom + this.tooltip.getBoundingClientRect().height + parseInt(getComputedStyle(this.tooltip).marginTop, 10);
        switch (placement) {
            case 'top':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-left':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-right':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-left':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-right':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.checkSides();
                }
                break;
            case 'left':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'left-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                break;
            case 'left-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
            case 'right':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'right-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                break;
            case 'right-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
        }
    };
    TooltipDirective.prototype.checkSides = function () {
        if (this.tooltip.getBoundingClientRect().left < 0) {
            this.renderer.setStyle(this.tooltip, 'left', 0);
        }
        if (this.tooltip.getBoundingClientRect().right > window.innerWidth) {
            this.renderer.setStyle(this.tooltip, 'left', window.innerWidth - this.tooltip.getBoundingClientRect().width + 'px');
        }
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        if (this.tooltip) {
            this.renderer.removeChild(document.body, this.tooltip);
            this.tooltip = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.cursor'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "cursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltip'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipInner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "showWhenNoOverflow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tooltip]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.ID' | translate }}</span>\r\n    <span class=\"cell key-value\" [style.flex-basis]=\"sizes[1] + 'px'\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.tx_hash)\" (click)=\"openInBrowser(transaction.tx_hash)\">{{transaction.tx_hash}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.SIZE' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{ 'HISTORY.DETAILS.SIZE_VALUE' | translate : {value: transaction.tx_blob_size} }}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.HEIGHT' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\">{{transaction.height}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.CONFIRMATION' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{transaction.height === 0 ? 0 : variablesService.height_app - transaction.height}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.INPUTS' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\" tooltip=\"{{inputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{inputs.join(', ')}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.OUTPUTS' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\" tooltip=\"{{outputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{outputs.join(', ')}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.PAYMENT_ID' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\r\n          tooltip=\"{{transaction.payment_id}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\r\n      {{transaction.payment_id}}\r\n    </span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.COMMENT' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\r\n          tooltip=\"{{transaction.comment}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\"\r\n          (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.comment)\">\r\n      {{transaction.comment}}\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n\n.table {\n  border-top: 0.2rem solid #ebebeb;\n  margin: 0 3rem;\n  padding: 0.5rem 0; }\n\n.table .row {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-top: none;\n    line-height: 3rem;\n    margin: 0 -3rem;\n    width: 100%;\n    height: 3rem; }\n\n.table .row .cell {\n      flex-shrink: 0;\n      flex-grow: 0;\n      padding: 0 1rem;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.table .row .cell:first-child {\n        padding-left: 3rem; }\n\n.table .row .cell:last-child {\n        padding-right: 3rem; }\n\n.table .row .cell.key-value {\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy90cmFuc2FjdGlvbi1kZXRhaWxzL0Q6XFxQcm9qZWN0c1xcUHJvamVjdHMgbm93XFx3b3JrXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXGRpcmVjdGl2ZXNcXHRyYW5zYWN0aW9uLWRldGFpbHNcXHRyYW5zYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUhuQjtJQU1JLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBYmhCO01BZ0JNLGNBQWM7TUFDZCxZQUFZO01BQ1osZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBQTs7QUFwQjdCO1FBdUJRLGtCQUFrQixFQUFBOztBQXZCMUI7UUEyQlEsbUJBQW1CLEVBQUE7O0FBM0IzQjtRQStCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9kaXJlY3RpdmVzL3RyYW5zYWN0aW9uLWRldGFpbHMvdHJhbnNhY3Rpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgYm9yZGVyLXRvcDogMC4ycmVtIHNvbGlkICNlYmViZWI7XHJcbiAgbWFyZ2luOiAwIDNyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgLTNyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuXHJcbiAgICAuY2VsbCB7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5rZXktdmFsdWUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/transaction.model */ "./src/app/_helpers/models/transaction.model.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(variablesService, backendService, intToMoneyPipe) {
        this.variablesService = variablesService;
        this.backendService = backendService;
        this.intToMoneyPipe = intToMoneyPipe;
        this.inputs = [];
        this.outputs = [];
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        for (var input in this.transaction.td['spn']) {
            if (this.transaction.td['spn'].hasOwnProperty(input)) {
                this.inputs.push(this.intToMoneyPipe.transform(this.transaction.td['spn'][input]));
            }
        }
        for (var output in this.transaction.td['rcv']) {
            if (this.transaction.td['rcv'].hasOwnProperty(output)) {
                this.outputs.push(this.intToMoneyPipe.transform(this.transaction.td['rcv'][output]));
            }
        }
    };
    TransactionDetailsComponent.prototype.openInBrowser = function (tr) {
        this.backendService.openUrlInBrowser('explorer.zano.org/transaction/' + tr);
    };
    TransactionDetailsComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__["Transaction"])
    ], TransactionDetailsComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransactionDetailsComponent.prototype, "sizes", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"], _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__["IntToMoneyPipe"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/models/transaction.model.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/models/transaction.model.ts ***!
  \******************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());



/***/ }),

/***/ "./src/app/_helpers/models/wallet.model.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/models/wallet.model.ts ***!
  \*************************************************/
/*! exports provided: Wallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

var Wallet = /** @class */ (function () {
    function Wallet(id, name, pass, path, address, balance, unlocked_balance, mined, tracking) {
        if (mined === void 0) { mined = 0; }
        if (tracking === void 0) { tracking = ''; }
        this.history = [];
        this.excluded_history = [];
        this.contracts = [];
        this.send_data = {
            address: null,
            amount: null,
            comment: null,
            mixin: null,
            fee: null,
            hide: null
        };
        this.wallet_id = id;
        this.name = name;
        this.pass = pass;
        this.path = path;
        this.address = address;
        this.balance = balance;
        this.unlocked_balance = unlocked_balance;
        this.mined_total = mined;
        this.tracking_hey = tracking;
        this.alias = {};
        this.staking = false;
        this.new_messages = 0;
        this.new_contracts = 0;
        this.history = [];
        this.excluded_history = [];
        this.progress = 0;
        this.loaded = false;
    }
    Wallet.prototype.getMoneyEquivalent = function (equivalent) {
        return this.balance.multipliedBy(equivalent).toFixed(0);
    };
    Wallet.prototype.havePass = function () {
        return (this.pass !== '' && this.pass !== null);
    };
    Wallet.prototype.isActive = function (id) {
        return this.wallet_id === id;
    };
    Wallet.prototype.prepareHistoryItem = function (item) {
        if (item.tx_type === 4) {
            item.sortFee = item.amount.plus(item.fee).negated();
            item.sortAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if (item.tx_type === 3) {
            item.sortFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if ((item.hasOwnProperty('contract') && (item.contract[0].state === 3 || item.contract[0].state === 6 || item.contract[0].state === 601) && !item.contract[0].is_a)) {
            item.sortFee = item.fee.negated();
            item.sortAmount = item.amount;
        }
        else {
            if (!item.is_income) {
                item.sortFee = item.fee.negated();
                item.sortAmount = item.amount.negated();
            }
            else {
                item.sortAmount = item.amount;
            }
        }
        return item;
    };
    Wallet.prototype.prepareHistory = function (items) {
        for (var i = 0; i < items.length; i++) {
            if ((items[i].tx_type === 7 && items[i].is_income) || (items[i].tx_type === 11 && items[i].is_income) || (items[i].amount.eq(0) && items[i].fee.eq(0))) {
                var exists = false;
                for (var j = 0; j < this.excluded_history.length; j++) {
                    if (this.excluded_history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.excluded_history[j].height !== items[i].height) {
                            this.excluded_history[j] = items[i];
                        }
                        break;
                    }
                }
                if (!exists) {
                    this.excluded_history.push(items[i]);
                }
            }
            else {
                var exists = false;
                for (var j = 0; j < this.history.length; j++) {
                    if (this.history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.history[j].height !== items[i].height) {
                            this.history[j] = this.prepareHistoryItem(items[i]);
                        }
                        break;
                    }
                }
                if (!exists) {
                    if (this.history.length && items[i].timestamp >= this.history[0].timestamp) {
                        this.history.unshift(this.prepareHistoryItem(items[i]));
                    }
                    else {
                        this.history.push(this.prepareHistoryItem(items[i]));
                    }
                }
            }
        }
    };
    Wallet.prototype.removeFromHistory = function (hash) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].tx_hash === hash) {
                this.history.splice(i, 1);
                break;
            }
        }
    };
    Wallet.prototype.prepareContractsAfterOpen = function (items, exp_med_ts, height_app, viewedContracts, notViewedContracts) {
        var wallet = this;
        var _loop_1 = function (i) {
            var contract = items[i];
            var contractTransactionExist = false;
            if (wallet && wallet.history) {
                contractTransactionExist = wallet.history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist && wallet && wallet.excluded_history) {
                contractTransactionExist = wallet.excluded_history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist) {
                contract.state = 140;
            }
            else if (contract.state === 1 && contract.expiration_time < exp_med_ts) {
                contract.state = 110;
            }
            else if (contract.state === 2 && contract.cancel_expiration_time !== 0 && contract.cancel_expiration_time < exp_med_ts && contract.height === 0) {
                var searchResult1 = viewedContracts.some(function (elem) { return elem.state === 2 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (!searchResult1) {
                    contract.state = 130;
                    contract.is_new = true;
                }
            }
            else if (contract.state === 1) {
                var searchResult2 = notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult2) {
                    if (searchResult2.time === contract.expiration_time) {
                        contract.state = 110;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 2 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 201;
            }
            else if (contract.state === 2) {
                var searchResult3 = viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult3) {
                    contract.state = 120;
                }
            }
            else if (contract.state === 5) {
                var searchResult4 = notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult4) {
                    if (searchResult4.time === contract.cancel_expiration_time) {
                        contract.state = 130;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 6 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 601;
            }
            var searchResult = viewedContracts.some(function (elem) { return elem.state === contract.state && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
            contract.is_new = !searchResult;
            wallet.contracts.push(contract);
        };
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        this.recountNewContracts();
    };
    Wallet.prototype.recountNewContracts = function () {
        this.new_contracts = (this.contracts.filter(function (item) { return item.is_new === true; })).length;
    };
    Wallet.prototype.getContract = function (id) {
        for (var i = 0; i < this.contracts.length; i++) {
            if (this.contracts[i].contract_id === id) {
                return this.contracts[i];
            }
        }
        return null;
    };
    return Wallet;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-status-messages.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ContractStatusMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractStatusMessagesPipe", function() { return ContractStatusMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractStatusMessagesPipe = /** @class */ (function () {
    function ContractStatusMessagesPipe(translate) {
        this.translate = translate;
    }
    ContractStatusMessagesPipe.prototype.getStateSeller = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NEW_CONTRACT');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAITING_BUYER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.PROPOSAL_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.getStateBuyer = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                break;
            case 120:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_SELLER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.transform = function (state, is_a) {
        if (is_a) {
            return this.getStateBuyer(state);
        }
        else {
            return this.getStateSeller(state);
        }
    };
    ContractStatusMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractStatusMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ContractStatusMessagesPipe);
    return ContractStatusMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-time-left.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-time-left.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ContractTimeLeftPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTimeLeftPipe", function() { return ContractTimeLeftPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractTimeLeftPipe = /** @class */ (function () {
    function ContractTimeLeftPipe(service, translate) {
        this.service = service;
        this.translate = translate;
    }
    ContractTimeLeftPipe.prototype.transform = function (value, arg) {
        var time = parseInt(((parseInt(value, 10) - this.service.exp_med_ts) / 3600).toFixed(0), 10);
        var type = arg || 0;
        if (time === 0) {
            return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_LESS_ONE');
        }
        if (this.service.settings.language === 'en') {
            if (type === 0) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
            }
            else if (type === 1) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
            }
        }
        else {
            var rest = time % 10;
            if (type === 0) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT', { time: time });
                }
            }
            else if (type === 1) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_WAITING', { time: time });
                }
            }
        }
        return null;
    };
    ContractTimeLeftPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractTimeLeft'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ContractTimeLeftPipe);
    return ContractTimeLeftPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/history-type-messages.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/_helpers/pipes/history-type-messages.pipe.ts ***!
  \**************************************************************/
/*! exports provided: HistoryTypeMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTypeMessagesPipe", function() { return HistoryTypeMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryTypeMessagesPipe = /** @class */ (function () {
    function HistoryTypeMessagesPipe(translate) {
        this.translate = translate;
    }
    HistoryTypeMessagesPipe.prototype.transform = function (item, args) {
        if (item.tx_type === 0) {
            if (item.remote_addresses && item.remote_addresses[0]) {
                return item.remote_addresses[0];
            }
            else {
                if (item.is_income) {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.HIDDEN');
                }
                else {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
                }
            }
        }
        else if (item.tx_type === 6 && item.height === 0) {
            return 'unknown';
        }
        else if (item.tx_type === 9) {
            if (item.hasOwnProperty('contract') && item.contract[0].is_a) {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_BUYER');
            }
            else {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_SELLER');
            }
        }
        else {
            switch (item.tx_type) {
                // case 0:
                //   return '';
                // case 1:
                //   return '';
                // case 2:
                //   return '';
                // case 3:
                //   return '';
                case 4:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_ALIAS');
                case 5:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UPDATE_ALIAS');
                case 6:
                    return (item.td['spn'] && item.td['spn'].length) ? this.translate.instant('HISTORY.TYPE_MESSAGES.POS_REWARD') : this.translate.instant('HISTORY.TYPE_MESSAGES.POW_REWARD');
                case 7:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_CONTRACT');
                case 8:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PLEDGE_CONTRACT');
                // case 9:
                //   return '';
                case 10:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.NULLIFY_CONTRACT');
                case 11:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PROPOSAL_CANCEL_CONTRACT');
                case 12:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CANCEL_CONTRACT');
            }
        }
        return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
    };
    HistoryTypeMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'historyTypeMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], HistoryTypeMessagesPipe);
    return HistoryTypeMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/int-to-money.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/int-to-money.pipe.ts ***!
  \*****************************************************/
/*! exports provided: IntToMoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntToMoneyPipe", function() { return IntToMoneyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntToMoneyPipe = /** @class */ (function () {
    function IntToMoneyPipe(variablesService) {
        this.variablesService = variablesService;
    }
    IntToMoneyPipe.prototype.transform = function (value, args) {
        if (value === 0 || value === undefined) {
            return '0';
        }
        var maxFraction = this.variablesService.digits;
        if (args) {
            maxFraction = parseInt(args, 10);
        }
        var power = Math.pow(10, this.variablesService.digits);
        var str = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](value)).div(power).toFixed(maxFraction);
        for (var i = str.length - 1; i >= 0; i--) {
            if (str[i] !== '0') {
                str = str.substr(0, i + 1);
                break;
            }
        }
        if (str[str.length - 1] === '.') {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    IntToMoneyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'intToMoney'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], IntToMoneyPipe);
    return IntToMoneyPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/money-to-int.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/money-to-int.pipe.ts ***!
  \*****************************************************/
/*! exports provided: MoneyToIntPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyToIntPipe", function() { return MoneyToIntPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoneyToIntPipe = /** @class */ (function () {
    function MoneyToIntPipe(variablesService) {
        this.variablesService = variablesService;
    }
    MoneyToIntPipe.prototype.transform = function (value, args) {
        var CURRENCY_DISPLAY_DECIMAL_POINT = this.variablesService.digits;
        var result;
        if (value) {
            var am_str = value.toString().trim();
            var point_index = am_str.indexOf('.');
            var fraction_size = 0;
            if (-1 !== point_index) {
                fraction_size = am_str.length - point_index - 1;
                while (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size && '0' === am_str[am_str.length - 1]) {
                    am_str = am_str.slice(0, am_str.length - 1);
                    --fraction_size;
                }
                if (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size) {
                    return undefined;
                }
                am_str = am_str.slice(0, point_index) + am_str.slice(point_index + 1, am_str.length);
            }
            else {
                fraction_size = 0;
            }
            if (!am_str.length) {
                return undefined;
            }
            if (fraction_size < CURRENCY_DISPLAY_DECIMAL_POINT) {
                for (var i = 0; i !== CURRENCY_DISPLAY_DECIMAL_POINT - fraction_size; i++) {
                    am_str = am_str + '0';
                }
            }
            result = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](am_str)).integerValue();
        }
        return result;
    };
    MoneyToIntPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'moneyToInt'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], MoneyToIntPipe);
    return MoneyToIntPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/safe-html.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/pipes/safe-html.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHTMLPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHTML'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/services/backend.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/services/backend.service.ts ***!
  \******************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var json_bignumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! json-bignumber */ "./node_modules/json-bignumber/src/JSONBigNumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BackendService = /** @class */ (function () {
    function BackendService(translate, variablesService, modalService, moneyToIntPipe) {
        this.translate = translate;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToIntPipe = moneyToIntPipe;
        this.backendLoaded = false;
    }
    BackendService_1 = BackendService;
    BackendService.bigNumberParser = function (key, val) {
        if (val.constructor.name === 'BigNumber' && ['balance', 'unlocked_balance', 'amount', 'fee', 'b_fee', 'to_pay', 'a_pledge', 'b_pledge', 'coast', 'a'].indexOf(key) === -1) {
            return val.toNumber();
        }
        if (key === 'rcv' || key === 'spn') {
            for (var i = 0; i < val.length; i++) {
                val[i] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](val[i]);
            }
        }
        return val;
    };
    BackendService.Debug = function (type, message) {
        switch (type) {
            case 0:
                console.error(message);
                break;
            case 1:
                console.warn(message);
                break;
            case 2:
                console.log(message);
                break;
            default:
                console.log(message);
                break;
        }
    };
    BackendService.prototype.informerRun = function (error, params, command) {
        var error_translate = '';
        switch (error) {
            case 'NOT_ENOUGH_MONEY':
                error_translate = 'ERRORS.NOT_ENOUGH_MONEY';
                break;
            case 'CORE_BUSY':
                if (command !== 'get_all_aliases') {
                    error_translate = 'ERRORS.CORE_BUSY';
                }
                break;
            case 'OVERFLOW':
                if (command !== 'get_all_aliases') {
                    error_translate = '';
                }
                break;
            case 'INTERNAL_ERROR:daemon is busy':
                error_translate = 'ERRORS.DAEMON_BUSY';
                break;
            case 'INTERNAL_ERROR:not enough money':
            case 'INTERNAL_ERROR:NOT_ENOUGH_MONEY':
                if (command === 'cancel_offer') {
                    error_translate = this.translate.instant('ERRORS.NO_MONEY_REMOVE_OFFER', {
                        'fee': this.variablesService.default_fee,
                        'currency': this.variablesService.defaultCurrency
                    });
                }
                else {
                    error_translate = 'ERRORS.NO_MONEY';
                }
                break;
            case 'INTERNAL_ERROR:not enough outputs to mix':
                error_translate = 'ERRORS.NOT_ENOUGH_OUTPUTS_TO_MIX';
                break;
            case 'INTERNAL_ERROR:transaction is too big':
                error_translate = 'ERRORS.TRANSACTION_IS_TO_BIG';
                break;
            case 'INTERNAL_ERROR:Transfer attempt while daemon offline':
                error_translate = 'ERRORS.TRANSFER_ATTEMPT';
                break;
            case 'ACCESS_DENIED':
                error_translate = 'ERRORS.ACCESS_DENIED';
                break;
            case 'INTERNAL_ERROR:transaction was rejected by daemon':
                // if (command === 'request_alias_registration') {
                // error_translate = 'INFORMER.ALIAS_IN_REGISTER';
                // } else {
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                // }
                break;
            case 'INTERNAL_ERROR':
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                break;
            case 'BAD_ARG':
                error_translate = 'ERRORS.BAD_ARG';
                break;
            case 'WALLET_WRONG_ID':
                error_translate = 'ERRORS.WALLET_WRONG_ID';
                break;
            case 'WRONG_PASSWORD':
            case 'WRONG_PASSWORD:invalid password':
                params = JSON.parse(params);
                if (!params.testEmpty) {
                    error_translate = 'ERRORS.WRONG_PASSWORD';
                }
                break;
            case 'FILE_RESTORED':
                if (command === 'open_wallet') {
                    error_translate = 'ERRORS.FILE_RESTORED';
                }
                break;
            case 'FILE_NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'CANCELED':
            case '':
                break;
            case 'FAIL':
                if (command === 'create_proposal' || command === 'accept_proposal' || command === 'release_contract' || command === 'request_cancel_contract' || command === 'accept_cancel_contract') {
                    error_translate = ' ';
                }
                break;
            case 'ALREADY_EXISTS':
                error_translate = 'ERRORS.FILE_EXIST';
                break;
            default:
                error_translate = error;
        }
        if (error.indexOf('FAIL:failed to save file') > -1) {
            error_translate = 'ERRORS.FILE_NOT_SAVED';
        }
        if (error.indexOf('FAILED:failed to open binary wallet file for saving') > -1 && command === 'generate_wallet') {
            error_translate = '';
        }
        if (error_translate !== '') {
            this.modalService.prepareModal('error', error_translate);
        }
    };
    BackendService.prototype.commandDebug = function (command, params, result) {
        BackendService_1.Debug(2, '----------------- ' + command + ' -----------------');
        var debug = {
            _send_params: params,
            _result: result
        };
        BackendService_1.Debug(2, debug);
        try {
            BackendService_1.Debug(2, json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(result, BackendService_1.bigNumberParser));
        }
        catch (e) {
            BackendService_1.Debug(2, { response_data: result, error_code: 'OK' });
        }
    };
    BackendService.prototype.backendCallback = function (resultStr, params, callback, command) {
        var Result = resultStr;
        if (command !== 'get_clipboard') {
            if (!resultStr || resultStr === '') {
                Result = {};
            }
            else {
                try {
                    Result = json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(resultStr, BackendService_1.bigNumberParser);
                }
                catch (e) {
                    Result = { response_data: resultStr, error_code: 'OK' };
                }
            }
        }
        else {
            Result = {
                error_code: 'OK',
                response_data: Result
            };
        }
        var Status = (Result.error_code === 'OK' || Result.error_code === 'TRUE');
        if (!Status && Status !== undefined && Result.error_code !== undefined) {
            BackendService_1.Debug(1, 'API error for command: "' + command + '". Error code: ' + Result.error_code);
        }
        var data = ((typeof Result === 'object') && 'response_data' in Result) ? Result.response_data : Result;
        var res_error_code = false;
        if (typeof Result === 'object' && 'error_code' in Result && Result.error_code !== 'OK' && Result.error_code !== 'TRUE' && Result.error_code !== 'FALSE') {
            this.informerRun(Result.error_code, params, command);
            res_error_code = Result.error_code;
        }
        // if ( command === 'get_offers_ex' ){
        //   Service.printLog( "get_offers_ex offers count "+((data.offers)?data.offers.length:0) );
        // }
        if (typeof callback === 'function') {
            callback(Status, data, res_error_code);
        }
        else {
            return data;
        }
    };
    BackendService.prototype.runCommand = function (command, params, callback) {
        if (this.backendObject) {
            var Action = this.backendObject[command];
            if (!Action) {
                BackendService_1.Debug(0, 'Run Command Error! Command "' + command + '" don\'t found in backendObject');
            }
            else {
                var that_1 = this;
                params = (typeof params === 'string') ? params : json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].stringify(params);
                if (params === undefined || params === '{}') {
                    Action(function (resultStr) {
                        that_1.commandDebug(command, params, resultStr);
                        return that_1.backendCallback(resultStr, params, callback, command);
                    });
                }
                else {
                    Action(params, function (resultStr) {
                        that_1.commandDebug(command, params, resultStr);
                        return that_1.backendCallback(resultStr, params, callback, command);
                    });
                }
            }
        }
    };
    BackendService.prototype.eventSubscribe = function (command, callback) {
        if (command === 'on_core_event') {
            this.backendObject[command].connect(callback);
        }
        else {
            this.backendObject[command].connect(function (str) {
                callback(json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(str, BackendService_1.bigNumberParser));
            });
        }
    };
    BackendService.prototype.initService = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            if (!_this.backendLoaded) {
                _this.backendLoaded = true;
                var that_2 = _this;
                window.QWebChannel(window.qt.webChannelTransport, function (channel) {
                    that_2.backendObject = channel.objects.mediator_object;
                    observer.next('ok');
                });
            }
            else {
                if (!_this.backendObject) {
                    observer.error('error');
                    observer.error('error');
                }
            }
        });
    };
    BackendService.prototype.webkitLaunchedScript = function () {
        return this.runCommand('webkit_launched_script');
    };
    BackendService.prototype.quitRequest = function () {
        return this.runCommand('on_request_quit');
    };
    BackendService.prototype.getAppData = function (callback) {
        this.runCommand('get_app_data', {}, callback);
    };
    BackendService.prototype.storeAppData = function (callback) {
        var _this = this;
        if (this.variablesService.wallets.length) {
            this.variablesService.settings.wallets = [];
            this.variablesService.wallets.forEach(function (wallet) {
                _this.variablesService.settings.wallets.push({ name: wallet.name, path: wallet.path });
            });
        }
        this.runCommand('store_app_data', this.variablesService.settings, callback);
    };
    BackendService.prototype.getSecureAppData = function (pass, callback) {
        this.runCommand('get_secure_app_data', pass, callback);
    };
    BackendService.prototype.setMasterPassword = function (pass, callback) {
        this.runCommand('set_master_password', pass, callback);
    };
    BackendService.prototype.checkMasterPassword = function (pass, callback) {
        this.runCommand('check_master_password', pass, callback);
    };
    BackendService.prototype.storeSecureAppData = function (callback) {
        var _this = this;
        var data;
        var wallets = [];
        var contacts = [];
        this.variablesService.wallets.forEach(function (wallet) {
            wallets.push({ name: wallet.name, pass: wallet.pass, path: wallet.path, staking: wallet.staking });
        });
        this.variablesService.contacts.forEach(function (contact) {
            contacts.push({ name: contact.name, address: contact.address, notes: contact.notes });
        });
        data = { wallets: wallets, contacts: contacts };
        this.backendObject['store_secure_app_data'](JSON.stringify(data), this.variablesService.appPass, function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'store_secure_app_data');
        });
    };
    BackendService.prototype.dropSecureAppData = function (callback) {
        var _this = this;
        this.backendObject['drop_secure_app_data'](function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'drop_secure_app_data');
        });
    };
    BackendService.prototype.haveSecureAppData = function (callback) {
        this.runCommand('have_secure_app_data', {}, callback);
    };
    BackendService.prototype.saveFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_savefile_dialog', params, callback);
    };
    BackendService.prototype.openFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_openfile_dialog', params, callback);
    };
    BackendService.prototype.storeFile = function (path, buff) {
        this.backendObject['store_to_file'](path, buff);
    };
    BackendService.prototype.loadFile = function (path, callback) {
        this.runCommand('load_from_file', path, callback);
    };
    BackendService.prototype.generateWallet = function (path, pass, callback) {
        var params = {
            path: path,
            pass: pass
        };
        this.runCommand('generate_wallet', params, callback);
    };
    BackendService.prototype.openWallet = function (path, pass, testEmpty, callback) {
        var params = {
            path: path,
            pass: pass
        };
        params['testEmpty'] = !!(testEmpty);
        this.runCommand('open_wallet', params, callback);
    };
    BackendService.prototype.closeWallet = function (wallet_id, callback) {
        this.runCommand('close_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.getSmartWalletInfo = function (wallet_id, callback) {
        this.runCommand('get_smart_wallet_info', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.runWallet = function (wallet_id, callback) {
        this.runCommand('run_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.isValidRestoreWalletText = function (text, callback) {
        this.runCommand('is_valid_restore_wallet_text', text, callback);
    };
    BackendService.prototype.restoreWallet = function (path, pass, restore_key, callback) {
        var params = {
            restore_key: restore_key,
            path: path,
            pass: pass
        };
        this.runCommand('restore_wallet', params, callback);
    };
    BackendService.prototype.sendMoney = function (from_wallet_id, to_address, amount, fee, mixin, comment, hide, callback) {
        var params = {
            wallet_id: parseInt(from_wallet_id, 10),
            destinations: [
                {
                    address: to_address,
                    amount: amount
                }
            ],
            mixin_count: (mixin) ? parseInt(mixin, 10) : 0,
            lock_time: 0,
            fee: this.moneyToIntPipe.transform(fee),
            comment: comment,
            push_payer: !hide
        };
        this.runCommand('transfer', params, callback);
    };
    BackendService.prototype.validateAddress = function (address, callback) {
        this.runCommand('validate_address', address, callback);
    };
    BackendService.prototype.setClipboard = function (str, callback) {
        return this.runCommand('set_clipboard', str, callback);
    };
    BackendService.prototype.getClipboard = function (callback) {
        return this.runCommand('get_clipboard', {}, callback);
    };
    BackendService.prototype.createProposal = function (wallet_id, title, comment, a_addr, b_addr, to_pay, a_pledge, b_pledge, time, payment_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            details: {
                t: title,
                c: comment,
                a_addr: a_addr,
                b_addr: b_addr,
                to_pay: this.moneyToIntPipe.transform(to_pay),
                a_pledge: this.moneyToIntPipe.transform(a_pledge),
                b_pledge: this.moneyToIntPipe.transform(b_pledge)
            },
            payment_id: payment_id,
            expiration_period: parseInt(time, 10) * 60 * 60,
            fee: this.variablesService.default_fee_big,
            b_fee: this.variablesService.default_fee_big
        };
        BackendService_1.Debug(1, params);
        this.runCommand('create_proposal', params, callback);
    };
    BackendService.prototype.getContracts = function (wallet_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10)
        };
        BackendService_1.Debug(1, params);
        this.runCommand('get_contracts', params, callback);
    };
    BackendService.prototype.acceptProposal = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_proposal', params, callback);
    };
    BackendService.prototype.releaseProposal = function (wallet_id, contract_id, release_type, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            release_type: release_type // "normal" or "burn"
        };
        BackendService_1.Debug(1, params);
        this.runCommand('release_contract', params, callback);
    };
    BackendService.prototype.requestCancelContract = function (wallet_id, contract_id, time, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            fee: this.variablesService.default_fee_big,
            expiration_period: parseInt(time, 10) * 60 * 60
        };
        BackendService_1.Debug(1, params);
        this.runCommand('request_cancel_contract', params, callback);
    };
    BackendService.prototype.acceptCancelContract = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_cancel_contract', params, callback);
    };
    BackendService.prototype.getMiningHistory = function (wallet_id, callback) {
        this.runCommand('get_mining_history', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.startPosMining = function (wallet_id, callback) {
        this.runCommand('start_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.stopPosMining = function (wallet_id, callback) {
        this.runCommand('stop_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.openUrlInBrowser = function (url, callback) {
        this.runCommand('open_url_in_browser', url, callback);
    };
    BackendService.prototype.start_backend = function (node, host, port, callback) {
        var params = {
            configure_for_remote_node: node,
            remote_node_host: host,
            remote_node_port: parseInt(port, 10)
        };
        this.runCommand('start_backend', params, callback);
    };
    BackendService.prototype.getDefaultFee = function (callback) {
        this.runCommand('get_default_fee', {}, callback);
    };
    BackendService.prototype.setBackendLocalization = function (stringsArray, title, callback) {
        var params = {
            strings: stringsArray,
            language_title: title
        };
        this.runCommand('set_localization_strings', params, callback);
    };
    BackendService.prototype.registerAlias = function (wallet_id, alias, address, fee, comment, reward, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias,
                address: address,
                tracking_key: '',
                comment: comment
            },
            fee: this.moneyToIntPipe.transform(fee),
            reward: this.moneyToIntPipe.transform(reward)
        };
        this.runCommand('request_alias_registration', params, callback);
    };
    BackendService.prototype.updateAlias = function (wallet_id, alias, fee, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias.name.replace('@', ''),
                address: alias.address,
                tracking_key: '',
                comment: alias.comment
            },
            fee: this.moneyToIntPipe.transform(fee)
        };
        this.runCommand('request_alias_update', params, callback);
    };
    BackendService.prototype.getAllAliases = function (callback) {
        this.runCommand('get_all_aliases', {}, callback);
    };
    BackendService.prototype.getAliasByName = function (value, callback) {
        return this.runCommand('get_alias_info_by_name', value, callback);
    };
    BackendService.prototype.getAliasByAddress = function (value, callback) {
        return this.runCommand('get_alias_info_by_address', value, callback);
    };
    BackendService.prototype.getAliasCoast = function (alias, callback) {
        this.runCommand('get_alias_coast', { v: alias }, callback);
    };
    BackendService.prototype.getWalletAlias = function (address) {
        var _this = this;
        if (address !== null && this.variablesService.daemon_state === 2) {
            if (this.variablesService.aliasesChecked[address] == null) {
                this.variablesService.aliasesChecked[address] = {};
                if (this.variablesService.aliases.length) {
                    for (var i = 0, length_1 = this.variablesService.aliases.length; i < length_1; i++) {
                        if (i in this.variablesService.aliases && this.variablesService.aliases[i]['address'] === address) {
                            this.variablesService.aliasesChecked[address]['name'] = this.variablesService.aliases[i].name;
                            this.variablesService.aliasesChecked[address]['address'] = this.variablesService.aliases[i].address;
                            this.variablesService.aliasesChecked[address]['comment'] = this.variablesService.aliases[i].comment;
                            return this.variablesService.aliasesChecked[address];
                        }
                    }
                }
                this.getAliasByAddress(address, function (status, data) {
                    if (status) {
                        _this.variablesService.aliasesChecked[data.address]['name'] = '@' + data.alias;
                        _this.variablesService.aliasesChecked[data.address]['address'] = data.address;
                        _this.variablesService.aliasesChecked[data.address]['comment'] = data.comment;
                    }
                });
            }
            return this.variablesService.aliasesChecked[address];
        }
        return {};
    };
    BackendService.prototype.getContactAlias = function () {
        var _this = this;
        if (this.variablesService.contacts.length && this.variablesService.daemon_state === 2) {
            this.variablesService.contacts.map(function (contact) {
                _this.getAliasByAddress(contact.address, function (status, data) {
                    if (status) {
                        if (data.alias) {
                            contact.alias = '@' + data.alias;
                        }
                    }
                    else {
                        contact.alias = null;
                    }
                });
            });
        }
    };
    BackendService.prototype.getPoolInfo = function (callback) {
        this.runCommand('get_tx_pool_info', {}, callback);
    };
    BackendService.prototype.getVersion = function (callback) {
        this.runCommand('get_version', {}, function (status, version) {
            callback(version);
        });
    };
    BackendService.prototype.setLogLevel = function (level) {
        return this.runCommand('set_log_level', { v: level });
    };
    var BackendService_1;
    BackendService = BackendService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__["MoneyToIntPipe"]])
    ], BackendService);
    return BackendService;
}());

/*

      toggleAutoStart: function (value) {
        return this.runCommand('toggle_autostart', asVal(value));
      },

      getOptions: function (callback) {
        return this.runCommand('get_options', {}, callback);
      },

      isFileExist: function (path, callback) {
        return this.runCommand('is_file_exist', path, callback);
      },

      isAutoStartEnabled: function (callback) {
        this.runCommand('is_autostart_enabled', {}, function (status, data) {
          if (angular.isFunction(callback)) {
            callback('error_code' in data && data.error_code !== 'FALSE')
          }
        });
      },

      resetWalletPass: function (wallet_id, pass, callback) {
        this.runCommand('reset_wallet_password', {wallet_id: wallet_id, pass: pass}, callback);
      },



      getOsVersion: function (callback) {
        this.runCommand('get_os_version', {}, function (status, version) {
          callback(version)
        })
      },

      getLogFile: function (callback) {
        this.runCommand('get_log_file', {}, function (status, version) {
          callback(version)
        })
      },

      resync_wallet: function (wallet_id, callback) {
        this.runCommand('resync_wallet', {wallet_id: wallet_id}, callback);
      },

      storeFile: function (path, buff, callback) {
        this.backendObject['store_to_file'](path, (typeof buff === 'string' ? buff : JSON.stringify(buff)), function (data) {
          backendCallback(data, {}, callback, 'store_to_file');
        });
      },

      getMiningEstimate: function (amount_coins, time, callback) {
        var params = {
          "amount_coins": $filter('money_to_int')(amount_coins),
          "time": parseInt(time)
        };
        this.runCommand('get_mining_estimate', params, callback);
      },

      backupWalletKeys: function (wallet_id, path, callback) {
        var params = {
          "wallet_id": wallet_id,
          "path": path
        };
        this.runCommand('backup_wallet_keys', params, callback);
      },

      setBlockedIcon: function (enabled, callback) {
        var mode = (enabled) ? "blocked" : "normal";
        Service.runCommand('bool_toggle_icon', mode, callback);
      },

      getWalletInfo: function (wallet_id, callback) {
        this.runCommand('get_wallet_info', {wallet_id: wallet_id}, callback);
      },

      printText: function (content) {
        return this.runCommand('print_text', {html_text: content});
      },

      printLog: function (msg, log_level) {
        return this.runCommand('print_log', {msg: msg, log_level: log_level});
      },

*/


/***/ }),

/***/ "./src/app/_helpers/services/modal.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/modal.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/modal-container/modal-container.component */ "./src/app/_helpers/directives/modal-container/modal-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, appRef, injector, ngZone, translate) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.ngZone = ngZone;
        this.translate = translate;
        this.components = [];
    }
    ModalService.prototype.prepareModal = function (type, message) {
        var _this = this;
        var length = this.components.push(this.componentFactoryResolver.resolveComponentFactory(_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponent"]).create(this.injector));
        this.components[length - 1].instance['type'] = type;
        this.components[length - 1].instance['message'] = message.length ? this.translate.instant(message) : '';
        this.components[length - 1].instance['close'].subscribe(function () {
            _this.removeModal(length - 1);
        });
        this.ngZone.run(function () {
            _this.appendModal(length - 1);
        });
    };
    ModalService.prototype.appendModal = function (index) {
        this.appRef.attachView(this.components[index].hostView);
        var domElem = this.components[index].hostView.rootNodes[0];
        document.body.appendChild(domElem);
    };
    ModalService.prototype.removeModal = function (index) {
        if (this.components[index]) {
            this.appRef.detachView(this.components[index].hostView);
            this.components[index].destroy();
            this.components.splice(index, 1);
        }
        else {
            var last = this.components.length - 1;
            this.appRef.detachView(this.components[last].hostView);
            this.components[last].destroy();
            this.components.splice(last, 1);
        }
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/variables.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/services/variables.service.ts ***!
  \********************************************************/
/*! exports provided: VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var idlejs_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idlejs/dist */ "./node_modules/idlejs/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VariablesService = /** @class */ (function () {
    function VariablesService(router, ngZone, contextMenuService) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.contextMenuService = contextMenuService;
        this.digits = 12;
        this.appPass = '';
        this.appLogin = false;
        this.moneyEquivalent = 0;
        this.defaultTheme = 'dark';
        this.defaultCurrency = 'ZANO';
        this.exp_med_ts = 0;
        this.net_time_delta_median = 0;
        this.height_app = 0;
        this.height_max = 0;
        this.last_build_available = '';
        this.last_build_displaymode = 0;
        this.daemon_state = 3;
        this.sync = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.default_fee = '0.010000000000';
        this.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"]('10000000000');
        this.settings = {
            appLockTime: 15,
            appLog: 0,
            theme: '',
            scale: 10,
            language: 'en',
            default_path: '/',
            viewedContracts: [],
            notViewedContracts: [],
            wallets: []
        };
        this.wallets = [];
        this.aliases = [];
        this.aliasesChecked = {};
        this.enableAliasSearch = false;
        this.maxWalletNameLength = 25;
        this.maxCommentLength = 255;
        this.dataIsLoaded = false;
        this.contacts = [];
        this.newContact = { name: null, address: null, notes: null };
        this.getExpMedTsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightMaxEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getRefreshStackingEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getAliasChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.idle = new idlejs_dist__WEBPACK_IMPORTED_MODULE_2__["Idle"]()
            .whenNotInteractive()
            .do(function () {
            if (_this.appPass == '') {
                _this.restartCountdown();
            }
            else {
                _this.ngZone.run(function () {
                    _this.idle.stop();
                    _this.appPass = '';
                    _this.appLogin = false;
                    _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                });
            }
        });
    }
    VariablesService.prototype.setExpMedTs = function (timestamp) {
        if (timestamp !== this.exp_med_ts) {
            this.exp_med_ts = timestamp;
            this.getExpMedTsEvent.next(timestamp);
        }
    };
    VariablesService.prototype.setHeightApp = function (height) {
        if (height !== this.height_app) {
            this.height_app = height;
            this.getHeightAppEvent.next(height);
        }
    };
    VariablesService.prototype.setHeightMax = function (height) {
        if (height !== this.height_max) {
            this.height_max = height;
            this.getHeightMaxEvent.next(height);
        }
    };
    VariablesService.prototype.setRefreshStacking = function (wallet_id) {
        this.getHeightAppEvent.next(wallet_id);
    };
    VariablesService.prototype.changeAliases = function () {
        this.getAliasChangedEvent.next(true);
    };
    VariablesService.prototype.setCurrentWallet = function (id) {
        var _this = this;
        this.wallets.forEach(function (wallet) {
            if (wallet.wallet_id === id) {
                _this.currentWallet = wallet;
            }
        });
    };
    VariablesService.prototype.getWallet = function (id) {
        for (var i = 0; i < this.wallets.length; i++) {
            if (this.wallets[i].wallet_id === id) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.startCountdown = function () {
        this.idle.within(this.settings.appLockTime).start();
    };
    VariablesService.prototype.stopCountdown = function () {
        this.idle.stop();
    };
    VariablesService.prototype.restartCountdown = function () {
        this.idle.within(this.settings.appLockTime).restart();
    };
    VariablesService.prototype.onContextMenu = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.allContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService.prototype.onContextMenuOnlyCopy = function ($event, copyText) {
        this.contextMenuService.show.next({
            contextMenu: this.onlyCopyContextMenu,
            event: $event,
            item: copyText
        });
        $event.preventDefault();
        $event.stopPropagation();
    };
    VariablesService.prototype.onContextMenuPasteSelect = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        console.warn($event.target);
        console.warn($event.target['disabled']);
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.pasteSelectContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenuService"]])
    ], VariablesService);
    return VariablesService;
}());



/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/contacts']\">{{ 'CONTACTS.TITLE' | translate }}</span>\r\n      <span>{{ 'CONTACTS.ADD' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-add\" [formGroup]=\"addContactForm\" (ngSubmit)=\"add()\">\r\n\r\n    <div class=\"input-block input-block-name\">\r\n      <label for=\"add-name\">{{ 'CONTACTS.FORM.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"add-name\" formControlName=\"name\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['name'].invalid && (addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched)\">\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['minlength'] || addContactForm.controls['name'].errors['maxlength']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_LENGTH' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['required']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['dublicated']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_DUBLICATED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block input-block-alias\">\r\n      <label for=\"address\">{{ 'CONTACTS.FORM.ADDRESS' | translate }}</label>\r\n  \r\n      <input type=\"text\" id=\"address\" formControlName=\"address\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n  \r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['address'].invalid && (addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched)\">\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['required']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['address_not_valid']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['dublicated']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_DUBLICATED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block input-block-notes\">\r\n      <label for=\"notes\">{{ 'CONTACTS.FORM.NOTES' | translate }}</label>\r\n  \r\n      <input type=\"text\" id=\"notes\" formControlName=\"notes\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      \r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['notes'].invalid\">\r\n        <div *ngIf=\"addContactForm.controls['notes'].errors['maxLength']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n   \r\n    <button type=\"submit\" class=\"blue-button\" [disabled]=\"!addContactForm.valid\">{{ 'CONTACTS.BUTTON.ADD_EDIT' | translate }}</button>\r\n  \r\n    <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"addContactForm\" (confirmed)=\"confirmed($event)\"></app-send-modal>\r\n  \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-add {\n  margin-top: 3rem; }\n  .form-add .input-block-name {\n    width: 50%; }\n  .form-add button {\n    margin-top: 3rem;\n    width: 100%;\n    max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3RzL0Q6XFxQcm9qZWN0c1xcUHJvamVjdHMgbm93XFx3b3JrXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcYWRkLWNvbnRhY3RzXFxhZGQtY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLFVBQVUsRUFBQTtFQUpkO0lBUUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb250YWN0cy9hZGQtY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1hZGQge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcblxyXG4gIC5pbnB1dC1ibG9jay1uYW1lIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.ts ***!
  \********************************************************/
/*! exports provided: AddContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactsComponent", function() { return AddContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddContactsComponent = /** @class */ (function () {
    function AddContactsComponent(route, backend, variablesService, modalService, ngZone, location) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.addContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    if (g.value) {
                        _this.backend.validateAddress(g.value, function (valid_status) {
                            _this.ngZone.run(function () {
                                if (valid_status === false) {
                                    g.setErrors(Object.assign({ address_not_valid: true }, g.errors));
                                }
                                else {
                                    if (g.hasError('address_not_valid')) {
                                        delete g.errors['address_not_valid'];
                                        if (Object.keys(g.errors).length === 0) {
                                            g.setErrors(null);
                                        }
                                    }
                                }
                            });
                        });
                        return g.hasError('address_not_valid')
                            ? { address_not_valid: true }
                            : null;
                    }
                    return null;
                },
                function (g) {
                    var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === g.value; });
                    if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                        return { dublicated: true };
                    }
                    return null;
                }
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                function (g) {
                    if (g.value) {
                        if (g.value.length > _this.variablesService.maxCommentLength) {
                            return { maxLength: true };
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        return null;
                    }
                }
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                function (g) {
                    if (g.value) {
                        var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === g.value.trim(); });
                        if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                            return { dublicated: true };
                        }
                        return null;
                    }
                }
            ])
        });
    }
    AddContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.id = parseInt(params.id, 10);
                _this.addContactForm.reset({
                    name: _this.variablesService.contacts[params.id]['name'],
                    address: _this.variablesService.contacts[params.id]['address'],
                    notes: _this.variablesService.contacts[params.id]['notes']
                });
            }
            else {
                _this.addContactForm.reset({
                    name: _this.variablesService.newContact['name'],
                    address: _this.variablesService.newContact['address'],
                    notes: _this.variablesService.newContact['notes']
                });
            }
        });
    };
    AddContactsComponent.prototype.add = function () {
        var _this = this;
        if (!this.variablesService.appPass) {
            this.modalService.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
        else {
            if (this.addContactForm.valid) {
                this.backend.validateAddress(this.addContactForm.get('address').value, function (valid_status) {
                    if (valid_status === false) {
                        _this.ngZone.run(function () {
                            _this.addContactForm
                                .get('address')
                                .setErrors({ address_not_valid: true });
                        });
                    }
                    else {
                        if (_this.id || _this.id === 0) {
                            _this.variablesService.contacts.forEach(function (contact, index) {
                                if (index === _this.id) {
                                    contact.name = _this.addContactForm.get('name').value.trim();
                                    contact.address = _this.addContactForm.get('address').value;
                                    contact.notes =
                                        _this.addContactForm.get('notes').value || '';
                                }
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SAVE');
                        }
                        else {
                            _this.variablesService.contacts.push({
                                name: _this.addContactForm.get('name').value.trim(),
                                address: _this.addContactForm.get('address').value,
                                notes: _this.addContactForm.get('notes').value || ''
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SENT');
                            _this.variablesService.newContact = {
                                name: null,
                                address: null,
                                notes: null
                            };
                            _this.addContactForm.reset({
                                name: null,
                                address: null,
                                notes: null
                            });
                        }
                    }
                });
            }
        }
    };
    AddContactsComponent.prototype.back = function () {
        this.location.back();
    };
    AddContactsComponent.prototype.ngOnDestroy = function () {
        if (!(this.id || this.id === 0)) {
            this.variablesService.newContact = {
                name: this.addContactForm.get('name').value,
                address: this.addContactForm.get('address').value,
                notes: this.addContactForm.get('notes').value
            };
        }
        this.queryRouting.unsubscribe();
    };
    AddContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contacts',
            template: __webpack_require__(/*! ./add-contacts.component.html */ "./src/app/add-contacts/add-contacts.component.html"),
            styles: [__webpack_require__(/*! ./add-contacts.component.scss */ "./src/app/add-contacts/add-contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AddContactsComponent);
    return AddContactsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components
























var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'wallet/:id',
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"],
        children: [
            {
                path: 'send',
                component: _send_send_component__WEBPACK_IMPORTED_MODULE_5__["SendComponent"]
            },
            {
                path: 'receive',
                component: _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__["ReceiveComponent"]
            },
            {
                path: 'history',
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"]
            },
            {
                path: 'contracts',
                component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__["ContractsComponent"],
            },
            {
                path: 'purchase',
                component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
            },
            {
                path: 'purchase/:id',
                component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
            },
            {
                path: 'messages',
                component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
            },
            {
                path: 'messages/:id',
                component: _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_11__["TypingMessageComponent"],
            },
            {
                path: 'staking',
                component: _staking_staking_component__WEBPACK_IMPORTED_MODULE_12__["StakingComponent"]
            },
            {
                path: '',
                redirectTo: 'history',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'create',
        component: _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_14__["CreateWalletComponent"]
    },
    {
        path: 'open',
        component: _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_15__["OpenWalletComponent"]
    },
    {
        path: 'restore',
        component: _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_16__["RestoreWalletComponent"]
    },
    {
        path: 'seed-phrase',
        component: _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_17__["SeedPhraseComponent"]
    },
    {
        path: 'details',
        component: _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_18__["WalletDetailsComponent"]
    },
    {
        path: 'assign-alias',
        component: _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_19__["AssignAliasComponent"]
    },
    {
        path: 'edit-alias',
        component: _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_20__["EditAliasComponent"]
    },
    {
        path: 'transfer-alias',
        component: _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_21__["TransferAliasComponent"]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_22__["ContactsComponent"]
    },
    {
        path: 'add-contacts',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__["AddContactsComponent"]
    },
    {
        path: 'edit-contacts/:id',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__["AddContactsComponent"]
    },
    {
        path: 'contact-send/:id',
        component: _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_24__["ContactSendComponent"]
    },
    {
        path: 'import',
        component: _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_25__["ExportImportComponent"]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar *ngIf=\"variablesService.appLogin\"></app-sidebar>\r\n\r\n<div class=\"app-content scrolled-content\">\r\n  <router-outlet *ngIf=\"[0, 1, 2].indexOf(variablesService.daemon_state) !== -1\"></router-outlet>\r\n  <div class=\"preloader\" *ngIf=\"[3, 4, 5].indexOf(variablesService.daemon_state) !== -1\">\r\n    <span *ngIf=\"variablesService.daemon_state === 3\">{{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}</span>\r\n    <span *ngIf=\"variablesService.daemon_state === 4\">{{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}</span>\r\n    <span *ngIf=\"variablesService.daemon_state === 5\">{{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}</span>\r\n    <span class=\"loading-bar\"></span>\r\n  </div>\r\n</div>\r\n<context-menu #allContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n<context-menu #onlyCopyContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuOnlyCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n<context-menu #pasteSelectContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n\r\n<app-open-wallet-modal *ngIf=\"needOpenWallets.length\" [wallets]=\"needOpenWallets\"></app-open-wallet-modal>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n* Implementation of themes\r\n*/\n.app-content {\n  display: flex;\n  overflow-x: overlay;\n  overflow-y: hidden;\n  width: 100%; }\n.app-content .preloader {\n    align-self: center;\n    color: #fff;\n    font-size: 2rem;\n    margin: 0 auto;\n    text-align: center;\n    width: 50%; }\n.app-content .preloader .loading-bar {\n      display: block;\n      -webkit-animation: move 5s linear infinite;\n              animation: move 5s linear infinite;\n      background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n      background-size: 10rem 10rem;\n      margin-top: 2rem;\n      width: 100%;\n      height: 1rem; }\n@-webkit-keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n@keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXNzZXRzXFxzY3NzXFxiYXNlXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVBOztDQzVFQztBQ0FEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBSmI7SUFPSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtBQVpkO01BZU0sY0FBYztNQUNkLDBDQUFrQztjQUFsQyxrQ0FBa0M7TUFDbEMsK2xDQXNCRztNQUNILDRCQUE0QjtNQUM1QixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTtBQUloQjtFQUNFO0lBQ0UsZ0NBQWdDLEVBQUE7RUFFbEM7SUFDRSwrQkFBK0IsRUFBQSxFQUFBO0FBTG5DO0VBQ0U7SUFDRSxnQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLCtCQUErQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbkBtaXhpbiB0ZXh0V3JhcCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgbGluZS1icmVhazogc3RyaWN0O1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcbkBtaXhpbiBjb3ZlckJveCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5AbWl4aW4gYWJzICgkdG9wOiBhdXRvLCAkcmlnaHQ6IGF1dG8sICRib3R0b206IGF1dG8sICRsZWZ0OiBhdXRvKSB7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG4gIGxlZnQ6ICRsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5AbWl4aW4gY292ZXJJbWcge1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG59XHJcbkBtaXhpbiB2YWxpbmdCb3gge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6ICA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbkBtaXhpbiB1blNlbGVjdCB7XHJcblx0LXdlYmtpdC10b3VjaC1jb2xsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbkBtaXhpbiBtYXgxMTk5IHsgLy8gbWFrZXQgMTE3MVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbWF4MTE3MCB7IC8vIG1ha2V0cyA5OTJcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIG1heDk5MSB7IC8vIG1ha2V0cyA3NjJcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbWF4NzYxIHsgLy8gbWFrZXRzIDU3NlxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkgeyBAY29udGVudDsgfVxyXG59XHJcbkBtaXhpbiBtYXg1NzUgeyAvLyBtYWtldHMgNDAwXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIG1vYmlsZSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGljb0NlbnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5AbWl4aW4gcHNldWRvICgkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpe1xyXG4gIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG4vKlxyXG4qIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xyXG4qL1xyXG5AbWl4aW4gdGhlbWlmeSgkdGhlbWVzOiAkdGhlbWVzKSB7XHJcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xyXG4gICAgLnRoZW1lLSN7JHRoZW1lfSAmIHtcclxuICAgICAgJHRoZW1lLW1hcDogKCkgIWdsb2JhbDtcclxuICAgICAgQGVhY2ggJGtleSwgJHN1Ym1hcCBpbiAkbWFwIHtcclxuICAgICAgICAkdmFsdWU6IG1hcC1nZXQobWFwLWdldCgkdGhlbWVzLCAkdGhlbWUpLCAnI3ska2V5fScpO1xyXG4gICAgICAgICR0aGVtZS1tYXA6IG1hcC1tZXJnZSgkdGhlbWUtbWFwLCAoJGtleTogJHZhbHVlKSkgIWdsb2JhbDtcclxuICAgICAgfVxyXG4gICAgICBAY29udGVudDtcclxuICAgICAgJHRoZW1lLW1hcDogbnVsbCAhZ2xvYmFsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHRoZW1lZCgka2V5KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZS1tYXAsICRrZXkpO1xyXG59XHJcbiIsIi8qXHJcbiogSW1wbGVtZW50YXRpb24gb2YgdGhlbWVzXHJcbiovXG4uYXBwLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBvdmVybGF5O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5hcHAtY29udGVudCAucHJlbG9hZGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlOyB9XG4gICAgLmFwcC1jb250ZW50IC5wcmVsb2FkZXIgLmxvYWRpbmctYmFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYW5pbWF0aW9uOiBtb3ZlIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDEwMCUgMTAwJSwgY29sb3Itc3RvcCgwLjEyNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC4xMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjM3NSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC42MjUsIHJnYmEoMCwgMCwgMCwgMC4xNSkpLCBjb2xvci1zdG9wKDAuNjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksIGNvbG9yLXN0b3AoMC44NzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKDAuMTI1LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuMTI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuMjUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuMzc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjg3NSwgcmdiYSgwLCAwLCAwLCAwLjI1KSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTByZW0gMTByZW07XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDFyZW07IH1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgLTEwcmVtOyB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTByZW07IH0gfVxuIiwiQGltcG9ydCAnfnNyYy9hc3NldHMvc2Nzcy9iYXNlL21peGlucyc7XHJcblxyXG4uYXBwLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteDogb3ZlcmxheTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5wcmVsb2FkZXIge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmxvYWRpbmctYmFyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgLXdlYmtpdC1ncmFkaWVudChcclxuICAgICAgICAgICAgbGluZWFyLCAwIDAsIDEwMCUgMTAwJSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguMTI1LCByZ2JhKDAsIDAsIDAsIC4xNSkpLCBjb2xvci1zdG9wKC4xMjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguMjUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjI1MCwgcmdiYSgwLCAwLCAwLCAuMTApKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguMzc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC4zNzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguNTAwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUwMCwgcmdiYSgwLCAwLCAwLCAuMTUpKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguNjI1LCByZ2JhKDAsIDAsIDAsIC4xNSkpLCBjb2xvci1zdG9wKC42MjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguNzUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjc1MCwgcmdiYSgwLCAwLCAwLCAuMTApKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguODc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC44NzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXHJcbiAgICAgICAgKSxcclxuICAgICAgICAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgICAgICAgICBsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4xMjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjEyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4yNTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguMjUwLCByZ2JhKDAsIDAsIDAsIC4yNSkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4zNzUsIHJnYmEoMCwgMCwgMCwgLjI1KSksIGNvbG9yLXN0b3AoLjM3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC41MDAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNTAwLCByZ2JhKDAsIDAsIDAsIC4zMCkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC42MjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjYyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC43NTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNzUwLCByZ2JhKDAsIDAsIDAsIC4yNSkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC44NzUsIHJnYmEoMCwgMCwgMCwgLjI1KSksIGNvbG9yLXN0b3AoLjg3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICB0byh0cmFuc3BhcmVudClcclxuICAgICAgICApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcmVtIDEwcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBtb3ZlIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtMTByZW07XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(http, renderer, translate, backend, router, variablesService, ngZone, intToMoneyPipe, modalService) {
        var _this = this;
        this.http = http;
        this.renderer = renderer;
        this.translate = translate;
        this.backend = backend;
        this.router = router;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.modalService = modalService;
        this.onQuitRequest = false;
        this.firstOnlineState = false;
        this.translateUsed = false;
        this.needOpenWallets = [];
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        translate.use('en').subscribe(function () {
            _this.translateUsed = true;
        });
    }
    AppComponent.prototype.setBackendLocalization = function () {
        var _this = this;
        if (this.translateUsed) {
            var stringsArray = [
                this.translate.instant('BACKEND_LOCALIZATION.QUIT'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_RECEIVED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_UNCONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.MINED'),
                this.translate.instant('BACKEND_LOCALIZATION.LOCKED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_MINIMIZE'),
                this.translate.instant('BACKEND_LOCALIZATION.RESTORE'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_SHOW'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_MINIMIZE')
            ];
            this.backend.setBackendLocalization(stringsArray, 'en');
        }
        else {
            console.warn('wait translate use');
            setTimeout(function () {
                _this.setBackendLocalization();
            }, 10000);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variablesService.allContextMenu = this.allContextMenu;
        this.variablesService.onlyCopyContextMenu = this.onlyCopyContextMenu;
        this.backend.initService().subscribe(function (initMessage) {
            console.log('Init message: ', initMessage);
            _this.backend.webkitLaunchedScript();
            _this.backend.start_backend(false, '127.0.0.1', 11512, function (st2, dd2) {
                console.log(st2, dd2);
            });
            _this.backend.eventSubscribe('quit_requested', function () {
                if (!_this.onQuitRequest) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                    _this.needOpenWallets = [];
                    _this.variablesService.daemon_state = 5;
                    var saveFunction_1 = function () {
                        _this.backend.storeAppData(function () {
                            var recursionCloseWallets = function () {
                                if (_this.variablesService.wallets.length) {
                                    var lastIndex_1 = _this.variablesService.wallets.length - 1;
                                    _this.backend.closeWallet(_this.variablesService.wallets[lastIndex_1].wallet_id, function () {
                                        _this.variablesService.wallets.splice(lastIndex_1, 1);
                                        recursionCloseWallets();
                                    });
                                }
                                else {
                                    _this.backend.quitRequest();
                                }
                            };
                            recursionCloseWallets();
                        });
                    };
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData(function () {
                            saveFunction_1();
                        });
                    }
                    else {
                        saveFunction_1();
                    }
                }
                _this.onQuitRequest = true;
            });
            _this.backend.eventSubscribe('update_wallet_status', function (data) {
                console.log('----------------- update_wallet_status -----------------');
                console.log(data);
                var wallet_state = data.wallet_state;
                var is_mining = data.is_mining;
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                // 1-synch, 2-ready, 3 - error
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.loaded = false;
                        wallet.staking = is_mining;
                        if (wallet_state === 2) { // ready
                            wallet.loaded = true;
                        }
                        if (wallet_state === 3) { // error
                            // wallet.error = true;
                        }
                        wallet.balance = data.balance;
                        wallet.unlocked_balance = data.unlocked_balance;
                        wallet.mined_total = data.minied_total;
                        wallet.alias_available = data.is_alias_operations_available;
                    });
                }
            });
            _this.backend.eventSubscribe('wallet_sync_progress', function (data) {
                console.log('----------------- wallet_sync_progress -----------------');
                console.log(data);
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.progress = (data.progress < 0) ? 0 : ((data.progress > 100) ? 100 : data.progress);
                        if (wallet.progress === 0) {
                            wallet.loaded = false;
                        }
                        else if (wallet.progress === 100) {
                            wallet.loaded = true;
                        }
                    });
                }
            });
            _this.backend.eventSubscribe('update_daemon_state', function (data) {
                console.log('----------------- update_daemon_state -----------------');
                console.log('DAEMON:' + data.daemon_network_state);
                console.log(data);
                // this.variablesService.exp_med_ts = data['expiration_median_timestamp'] + 600 + 1;
                _this.variablesService.setExpMedTs(data['expiration_median_timestamp'] + 600 + 1);
                _this.variablesService.net_time_delta_median = data.net_time_delta_median;
                _this.variablesService.last_build_available = data.last_build_available;
                _this.variablesService.last_build_displaymode = data.last_build_displaymode;
                _this.variablesService.setHeightApp(data.height);
                _this.variablesService.setHeightMax(data.max_net_seen_height);
                _this.ngZone.run(function () {
                    _this.variablesService.daemon_state = data['daemon_network_state'];
                    if (data['daemon_network_state'] === 1) {
                        var max = data['max_net_seen_height'] - data['synchronization_start_height'];
                        var current = data.height - data['synchronization_start_height'];
                        var return_val = Math.floor((current * 100 / max) * 100) / 100;
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.sync.progress_value = 0;
                            _this.variablesService.sync.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.sync.progress_value = 100;
                            _this.variablesService.sync.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.sync.progress_value = return_val;
                            _this.variablesService.sync.progress_value_text = return_val.toFixed(2);
                        }
                    }
                });
                if (!_this.firstOnlineState && data['daemon_network_state'] === 2) {
                    _this.getAliases();
                    _this.backend.getContactAlias();
                    _this.backend.getDefaultFee(function (status_fee, data_fee) {
                        _this.variablesService.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](data_fee);
                        _this.variablesService.default_fee = _this.intToMoneyPipe.transform(data_fee);
                    });
                    _this.firstOnlineState = true;
                }
            });
            _this.backend.eventSubscribe('money_transfer', function (data) {
                console.log('----------------- money_transfer -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    _this.ngZone.run(function () {
                        if (!wallet.loaded) {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        else {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        if (tr_info.tx_type === 6) {
                            _this.variablesService.setRefreshStacking(wallet_id);
                        }
                        var tr_exists = wallet.excluded_history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; });
                        tr_exists = (!tr_exists) ? wallet.history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; }) : tr_exists;
                        wallet.prepareHistory([tr_info]);
                        if (tr_info.hasOwnProperty('contract')) {
                            var exp_med_ts = _this.variablesService.exp_med_ts;
                            var height_app = _this.variablesService.height_app;
                            var contract_1 = tr_info.contract[0];
                            if (tr_exists) {
                                for (var i = 0; i < wallet.contracts.length; i++) {
                                    if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                        wallet.contracts[i].cancel_expiration_time = contract_1.cancel_expiration_time;
                                        wallet.contracts[i].expiration_time = contract_1.expiration_time;
                                        wallet.contracts[i].height = contract_1.height;
                                        wallet.contracts[i].timestamp = contract_1.timestamp;
                                        break;
                                    }
                                }
                                // $rootScope.getContractsRecount();
                                return;
                            }
                            if (contract_1.state === 1 && contract_1.expiration_time < exp_med_ts) {
                                contract_1.state = 110;
                            }
                            else if (contract_1.state === 5 && contract_1.cancel_expiration_time < exp_med_ts) {
                                contract_1.state = 130;
                            }
                            else if (contract_1.state === 1) {
                                var searchResult2 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult2) {
                                    if (searchResult2.time === contract_1.expiration_time) {
                                        contract_1.state = 110;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 2 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 201;
                            }
                            else if (contract_1.state === 2) {
                                var searchResult3 = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult3) {
                                    contract_1.state = 120;
                                }
                            }
                            else if (contract_1.state === 5) {
                                var searchResult4 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult4) {
                                    if (searchResult4.time === contract_1.cancel_expiration_time) {
                                        contract_1.state = 130;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 6 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 601;
                            }
                            var searchResult = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === contract_1.state && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                            contract_1.is_new = !searchResult;
                            var findContract = false;
                            for (var i = 0; i < wallet.contracts.length; i++) {
                                if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                    for (var prop in contract_1) {
                                        if (contract_1.hasOwnProperty(prop)) {
                                            wallet.contracts[i][prop] = contract_1[prop];
                                        }
                                    }
                                    findContract = true;
                                    break;
                                }
                            }
                            if (findContract === false) {
                                wallet.contracts.push(contract_1);
                            }
                            wallet.recountNewContracts();
                        }
                    });
                }
            });
            _this.backend.eventSubscribe('money_transfer_cancel', function (data) {
                console.log('----------------- money_transfer_cancel -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (tr_info.hasOwnProperty('contract')) {
                        for (var i = 0; i < wallet.contracts.length; i++) {
                            if (wallet.contracts[i].contract_id === tr_info.contract[0].contract_id && wallet.contracts[i].is_a === tr_info.contract[0].is_a) {
                                if (wallet.contracts[i].state === 1 || wallet.contracts[i].state === 110) {
                                    wallet.contracts[i].is_new = true;
                                    wallet.contracts[i].state = 140;
                                    wallet.recountNewContracts();
                                }
                                break;
                            }
                        }
                    }
                    wallet.removeFromHistory(tr_info.tx_hash);
                    var error_tr = '';
                    switch (tr_info.tx_type) {
                        case 0:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NORMAL') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_TO') + ' ' + _this.intToMoneyPipe.transform(tr_info.amount) + ' ' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_END');
                            break;
                        case 1:
                            // this.translate.instant('ERRORS.TX_TYPE_PUSH_OFFER');
                            break;
                        case 2:
                            // this.translate.instant('ERRORS.TX_TYPE_UPDATE_OFFER');
                            break;
                        case 3:
                            // this.translate.instant('ERRORS.TX_TYPE_CANCEL_OFFER');
                            break;
                        case 4:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 5:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_UPDATE_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 6:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_COIN_BASE');
                            break;
                    }
                    if (error_tr) {
                        _this.modalService.prepareModal('error', error_tr);
                    }
                }
            });
            _this.backend.eventSubscribe('on_core_event', function (data) {
                console.log('----------------- on_core_event -----------------');
                console.log(data);
                data = JSON.parse(data);
                if (data.events != null) {
                    var _loop_1 = function (i, length_1) {
                        switch (data.events[i].method) {
                            case 'CORE_EVENT_BLOCK_ADDED':
                                break;
                            case 'CORE_EVENT_ADD_ALIAS':
                                if (_this.variablesService.aliasesChecked[data.events[i].details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['address'] = data.events[i].details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['comment'] = data.events[i].details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var newAlias = {
                                        name: '@' + data.events[i].details.alias,
                                        address: data.events[i].details.address,
                                        comment: data.events[i].details.comment
                                    };
                                    _this.variablesService.aliases = _this.variablesService.aliases.concat(newAlias);
                                    _this.variablesService.changeAliases();
                                }
                                break;
                            case 'CORE_EVENT_UPDATE_ALIAS':
                                for (var address in _this.variablesService.aliasesChecked) {
                                    if (_this.variablesService.aliasesChecked.hasOwnProperty(address)) {
                                        if (_this.variablesService.aliasesChecked[address].name === '@' + data.events[i].details.alias) {
                                            if (_this.variablesService.aliasesChecked[address].address !== data.events[i].details.details.address) {
                                                delete _this.variablesService.aliasesChecked[address]['name'];
                                                delete _this.variablesService.aliasesChecked[address]['address'];
                                                delete _this.variablesService.aliasesChecked[address]['comment'];
                                            }
                                            else {
                                                _this.variablesService.aliasesChecked[address].comment = data.events[i].details.details.comment;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (_this.variablesService.aliasesChecked[data.events[i].details.details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['address'] = data.events[i].details.details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['comment'] = data.events[i].details.details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var CurrentAlias = _this.variablesService.aliases.find(function (element) { return element.name === '@' + data.events[i].details.alias; });
                                    if (CurrentAlias) {
                                        CurrentAlias.address = data.events[i].details.details.address;
                                        CurrentAlias.comment = data.events[i].details.details.comment;
                                    }
                                }
                                _this.variablesService.changeAliases();
                                break;
                            default:
                                break;
                        }
                    };
                    for (var i = 0, length_1 = data.events.length; i < length_1; i++) {
                        _loop_1(i, length_1);
                    }
                }
            });
            _this.intervalUpdateContractsState = setInterval(function () {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 201 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 2;
                            contract.is_new = true;
                            console.warn('need check state in contracts');
                        }
                        else if (contract.state === 601 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 6;
                            contract.is_new = true;
                        }
                    });
                });
            }, 30000);
            _this.expMedTsEvent = _this.variablesService.getExpMedTsEvent.subscribe(function (newTimestamp) {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 1 && contract.expiration_time <= newTimestamp) {
                            contract.state = 110;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                        else if (contract.state === 5 && contract.cancel_expiration_time <= newTimestamp) {
                            contract.state = 130;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                    });
                });
            });
            _this.backend.getAppData(function (status, data) {
                if (data && Object.keys(data).length > 0) {
                    for (var key in data) {
                        if (data.hasOwnProperty(key) && _this.variablesService.settings.hasOwnProperty(key)) {
                            _this.variablesService.settings[key] = data[key];
                        }
                    }
                    if (_this.variablesService.settings.hasOwnProperty('theme') && ['dark', 'white', 'gray'].indexOf(_this.variablesService.settings.theme) !== -1) {
                        _this.renderer.addClass(document.body, 'theme-' + _this.variablesService.settings.theme);
                    }
                    else {
                        _this.renderer.addClass(document.body, 'theme-' + _this.variablesService.defaultTheme);
                    }
                    if (_this.variablesService.settings.hasOwnProperty('scale') && [7.5, 10, 12.5, 15].indexOf(_this.variablesService.settings.scale) !== -1) {
                        _this.renderer.setStyle(document.documentElement, 'font-size', _this.variablesService.settings.scale + 'px');
                    }
                }
                else {
                    _this.variablesService.settings.theme = _this.variablesService.defaultTheme;
                    _this.renderer.addClass(document.body, 'theme-' + _this.variablesService.settings.theme);
                }
                _this.setBackendLocalization();
                _this.backend.setLogLevel(_this.variablesService.settings.appLog);
                if (_this.router.url !== '/login') {
                    _this.backend.haveSecureAppData(function (statusPass) {
                        if (statusPass) {
                            _this.ngZone.run(function () {
                                _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                            });
                        }
                        else {
                            if (Object.keys(data).length !== 0) {
                                _this.needOpenWallets = JSON.parse(JSON.stringify(_this.variablesService.settings.wallets));
                                _this.ngZone.run(function () {
                                    _this.variablesService.appLogin = true;
                                    _this.router.navigate(['/']);
                                });
                            }
                            else {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/login'], { queryParams: { type: 'reg' } });
                                });
                            }
                        }
                    });
                }
            });
        }, function (error) {
            console.log(error);
        });
        this.getMoneyEquivalent();
    };
    AppComponent.prototype.getMoneyEquivalent = function () {
        var _this = this;
        this.http.get('https://api.coingecko.com/api/v3/ping').subscribe(function () {
            _this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=zano&vs_currencies=usd').subscribe(function (data) {
                _this.variablesService.moneyEquivalent = data['zano']['usd'];
            }, function (error) {
                console.warn('api.coingecko.com price error: ', error);
            });
        }, function (error) {
            console.warn('api.coingecko.com error: ', error);
            setTimeout(function () {
                _this.getMoneyEquivalent();
            }, 60000);
        });
    };
    AppComponent.prototype.getAliases = function () {
        var _this = this;
        this.backend.getAllAliases(function (status, data, error) {
            console.warn(error);
            if (error === 'CORE_BUSY') {
                window.setTimeout(function () {
                    _this.getAliases();
                }, 10000);
            }
            else if (error === 'OVERFLOW') {
                _this.variablesService.aliases = [];
                _this.variablesService.enableAliasSearch = false;
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.alias = _this.backend.getWalletAlias(wallet.address);
                });
            }
            else {
                _this.variablesService.enableAliasSearch = true;
                if (data.aliases && data.aliases.length) {
                    _this.variablesService.aliases = [];
                    data.aliases.forEach(function (alias) {
                        var newAlias = {
                            name: '@' + alias.alias,
                            address: alias.address,
                            comment: alias.comment
                        };
                        _this.variablesService.aliases.push(newAlias);
                    });
                    _this.variablesService.wallets.forEach(function (wallet) {
                        wallet.alias = _this.backend.getWalletAlias(wallet.address);
                    });
                    _this.variablesService.aliases = _this.variablesService.aliases.sort(function (a, b) {
                        if (a.name.length > b.name.length) {
                            return 1;
                        }
                        if (a.name.length < b.name.length) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    _this.variablesService.changeAliases();
                }
            }
        });
    };
    AppComponent.prototype.contextMenuCopy = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
            var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
            var canUseSelection = ((target[start]) || (target[start] === '0'));
            var SelectedText = (canUseSelection) ? target['value'].substring(target[start], target[end]) : target['value'];
            this.backend.setClipboard(String(SelectedText));
        }
    };
    AppComponent.prototype.contextMenuOnlyCopy = function (text) {
        if (text) {
            this.backend.setClipboard(String(text));
        }
    };
    AppComponent.prototype.contextMenuPaste = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            this.backend.getClipboard(function (status, clipboard) {
                clipboard = String(clipboard);
                if (typeof clipboard !== 'string' || clipboard.length) {
                    var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
                    var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
                    var _pre = target['value'].substring(0, target[start]);
                    var _aft = target['value'].substring(target[end], target['value'].length);
                    var text = _pre + clipboard + _aft;
                    var cursorPosition = (_pre + clipboard).length;
                    if (target['maxLength'] && parseInt(target['maxLength'], 10) > 0) {
                        text = text.substr(0, parseInt(target['maxLength'], 10));
                    }
                    target['value'] = text;
                    target.setSelectionRange(cursorPosition, cursorPosition);
                    target.dispatchEvent(new Event('input'));
                    target['focus']();
                }
            });
        }
    };
    AppComponent.prototype.contextMenuSelect = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            target['focus']();
            setTimeout(function () {
                target['select']();
            });
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.intervalUpdateContractsState) {
            clearInterval(this.intervalUpdateContractsState);
        }
        this.expMedTsEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('allContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "allContextMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('onlyCopyContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "onlyCopyContextMenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, highchartsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-wallet-modal/open-wallet-modal.component */ "./src/app/open-wallet-modal/open-wallet-modal.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_helpers/pipes/history-type-messages.pipe */ "./src/app/_helpers/pipes/history-type-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_helpers/pipes/contract-status-messages.pipe */ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_helpers/pipes/contract-time-left.pipe */ "./src/app/_helpers/pipes/contract-time-left.pipe.ts");
/* harmony import */ var _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_helpers/pipes/safe-html.pipe */ "./src/app/_helpers/pipes/safe-html.pipe.ts");
/* harmony import */ var _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_helpers/directives/tooltip.directive */ "./src/app/_helpers/directives/tooltip.directive.ts");
/* harmony import */ var _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_helpers/directives/input-validate/input-validate.directive */ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts");
/* harmony import */ var _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_helpers/directives/staking-switch/staking-switch.component */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts");
/* harmony import */ var _helpers_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_helpers/directives/modal-container/modal-container.component */ "./src/app/_helpers/directives/modal-container/modal-container.component.ts");
/* harmony import */ var _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_helpers/directives/transaction-details/transaction-details.component */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! highcharts/modules/exporting.src */ "./node_modules/highcharts/modules/exporting.src.js");
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./_helpers/directives/progress-container/progress-container.component */ "./src/app/_helpers/directives/progress-container/progress-container.component.ts");
/* harmony import */ var _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./_helpers/directives/input-disable-selection/input-disable-selection.directive */ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts");
/* harmony import */ var _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./send-modal/send-modal.component */ "./src/app/send-modal/send-modal.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}

// import * as more from 'highcharts/highcharts-more.src';
// import * as exporting from 'highcharts/modules/exporting.src';
// import * as highstock from 'highcharts/modules/stock.src';
function highchartsFactory() {
    // Default options.
    highcharts__WEBPACK_IMPORTED_MODULE_46__["setOptions"]({
        time: {
            useUTC: false
        }
    });
    return [highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_47___default.a];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_8__["CreateWalletComponent"],
                _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_9__["OpenWalletComponent"],
                _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_10__["OpenWalletModalComponent"],
                _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_11__["RestoreWalletComponent"],
                _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_12__["SeedPhraseComponent"],
                _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_13__["WalletDetailsComponent"],
                _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_14__["AssignAliasComponent"],
                _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_15__["EditAliasComponent"],
                _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_16__["TransferAliasComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"],
                _send_send_component__WEBPACK_IMPORTED_MODULE_18__["SendComponent"],
                _receive_receive_component__WEBPACK_IMPORTED_MODULE_19__["ReceiveComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_20__["HistoryComponent"],
                _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__["ContractsComponent"],
                _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"],
                _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__["StakingComponent"],
                _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__["TypingMessageComponent"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_33__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_34__["IntToMoneyPipe"],
                _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_41__["StakingSwitchComponent"],
                _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_35__["HistoryTypeMessagesPipe"],
                _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_36__["ContractStatusMessagesPipe"],
                _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_37__["ContractTimeLeftPipe"],
                _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_39__["TooltipDirective"],
                _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_40__["InputValidateDirective"],
                _helpers_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_42__["ModalContainerComponent"],
                _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_43__["TransactionDetailsComponent"],
                _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_48__["ProgressContainerComponent"],
                _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_49__["InputDisableSelectionDirective"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_50__["SendModalComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_51__["ContactsComponent"],
                _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_52__["AddContactsComponent"],
                _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_53__["ContactSendComponent"],
                _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_54__["ExportImportComponent"],
                _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_38__["SafeHTMLPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__["NgSelectModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_45__["ChartModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_55__["PapaParseModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_44__["ContextMenuModule"].forRoot()
            ],
            providers: [
                _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__["BackendService"],
                _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__["ModalService"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_33__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_34__["IntToMoneyPipe"],
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_45__["HIGHCHARTS_MODULES"], useFactory: highchartsFactory }
                // {provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock, more, exporting ] }
            ],
            entryComponents: [
                _helpers_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_42__["ModalContainerComponent"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_50__["SendModalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.ASSIGN_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-assign\" [formGroup]=\"assignForm\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\" tooltip=\"{{ 'ASSIGN_ALIAS.NAME.TOOLTIP' | translate }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\r\n        {{ 'ASSIGN_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-name\" formControlName=\"name\" placeholder=\"{{ 'ASSIGN_ALIAS.NAME.PLACEHOLDER' | translate }}\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"assignForm.controls['name'].invalid && (assignForm.controls['name'].dirty || assignForm.controls['name'].touched)\">\r\n        <div *ngIf=\"assignForm.controls['name'].errors['required']\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"assignForm.controls['name'].errors['pattern'] && assignForm.get('name').value.length > 6 && assignForm.get('name').value.length <= 25\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_WRONG' | translate }}\r\n        </div>\r\n        <div *ngIf=\"assignForm.get('name').value.length <= 6 || assignForm.get('name').value.length > 25\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"alias.exists\">\r\n        <div>\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_EXISTS' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"notEnoughMoney\">\r\n        <div>\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\" tooltip=\"{{ 'ASSIGN_ALIAS.COMMENT.TOOLTIP' | translate }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\r\n        {{ 'ASSIGN_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\"\r\n                class=\"scrolled-content\"\r\n                formControlName=\"comment\"\r\n                placeholder=\"{{ 'ASSIGN_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"\r\n                [maxLength]=\"variablesService.maxCommentLength\"\r\n                (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      </textarea>\r\n      <div class=\"error-block\" *ngIf=\"assignForm.get('comment').value.length >= variablesService.maxCommentLength\">\r\n        {{ 'ASSIGN_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"ASSIGN_ALIAS.COST\" | translate : {value: alias.price | intToMoney, currency: variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"assignAlias()\" [disabled]=\"!assignForm.valid || !canRegister || notEnoughMoney\">{{ 'ASSIGN_ALIAS.BUTTON_ASSIGN' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-assign {\n  margin: 2.4rem 0; }\n  .form-assign .alias-name {\n    width: 50%; }\n  .form-assign .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-assign .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-assign .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n  .assign-alias-tooltip {\n  font-size: 1.3rem;\n  line-height: 2rem;\n  padding: 1rem 1.5rem;\n  max-width: 46rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduLWFsaWFzL0Q6XFxQcm9qZWN0c1xcUHJvamVjdHMgbm93XFx3b3JrXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcYXNzaWduLWFsaWFzXFxhc3NpZ24tYWxpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLFVBQVUsRUFBQTtFQUpkO0lBUUksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBVHBCO0lBYUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0IsRUFBQTtFQWYxQjtNQWtCTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0VBS2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ24tYWxpYXMvYXNzaWduLWFsaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYXNzaWduIHtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG5cclxuICAuYWxpYXMtbmFtZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmFsaWFzLWNvc3Qge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLndyYXAtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAyLjVyZW0gLTAuN3JlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgMC43cmVtO1xyXG4gICAgICB3aWR0aDogMTVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYXNzaWduLWFsaWFzLXRvb2x0aXAge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIG1heC13aWR0aDogNDZyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.ts ***!
  \********************************************************/
/*! exports provided: AssignAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAliasComponent", function() { return AssignAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssignAliasComponent = /** @class */ (function () {
    function AssignAliasComponent(ngZone, location, router, backend, variablesService, modalService, moneyToInt, intToMoney) {
        var _this = this;
        this.ngZone = ngZone;
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToInt = moneyToInt;
        this.intToMoney = intToMoney;
        this.assignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^@?[a-z0-9\.\-]{6,25}$/)]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [function (g) {
                    if (g.value > _this.variablesService.maxCommentLength) {
                        return { 'maxLength': true };
                    }
                    else {
                        return null;
                    }
                }])
        });
        this.alias = {
            name: '',
            fee: this.variablesService.default_fee,
            price: new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0),
            reward: '0',
            rewardOriginal: '0',
            comment: '',
            exists: false
        };
        this.canRegister = false;
        this.notEnoughMoney = false;
    }
    AssignAliasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wallet = this.variablesService.currentWallet;
        this.assignFormSubscription = this.assignForm.get('name').valueChanges.subscribe(function (value) {
            _this.canRegister = false;
            _this.alias.exists = false;
            var newName = value.toLowerCase().replace('@', '');
            if (!(_this.assignForm.controls['name'].errors && _this.assignForm.controls['name'].errors.hasOwnProperty('pattern')) && newName.length >= 6 && newName.length <= 25) {
                _this.backend.getAliasByName(newName, function (status) {
                    _this.ngZone.run(function () {
                        _this.alias.exists = status;
                    });
                    if (!status) {
                        _this.alias.price = new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0);
                        _this.backend.getAliasCoast(newName, function (statusPrice, dataPrice) {
                            _this.ngZone.run(function () {
                                if (statusPrice) {
                                    _this.alias.price = bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a.sum(dataPrice['coast'], _this.variablesService.default_fee_big);
                                }
                                _this.notEnoughMoney = _this.alias.price.isGreaterThan(_this.wallet.unlocked_balance);
                                _this.alias.reward = _this.intToMoney.transform(_this.alias.price, false);
                                _this.alias.rewardOriginal = _this.intToMoney.transform(dataPrice['coast'], false);
                                _this.canRegister = !_this.notEnoughMoney;
                            });
                        });
                    }
                    else {
                        _this.notEnoughMoney = false;
                        _this.alias.reward = '0';
                        _this.alias.rewardOriginal = '0';
                    }
                });
            }
            else {
                _this.notEnoughMoney = false;
                _this.alias.reward = '0';
                _this.alias.rewardOriginal = '0';
            }
            _this.alias.name = newName;
        });
    };
    AssignAliasComponent.prototype.assignAlias = function () {
        var _this = this;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        if (alias.hasOwnProperty('name')) {
            this.modalService.prepareModal('info', 'ASSIGN_ALIAS.ONE_ALIAS');
        }
        else {
            this.alias.comment = this.assignForm.get('comment').value;
            this.backend.registerAlias(this.wallet.wallet_id, this.alias.name, this.wallet.address, this.alias.fee, this.alias.comment, this.alias.rewardOriginal, function (status, data) {
                if (status) {
                    _this.wallet.wakeAlias = true;
                    _this.modalService.prepareModal('info', 'ASSIGN_ALIAS.REQUEST_ADD_REG');
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.wallet.wallet_id]);
                    });
                }
            });
        }
    };
    AssignAliasComponent.prototype.back = function () {
        this.location.back();
    };
    AssignAliasComponent.prototype.ngOnDestroy = function () {
        this.assignFormSubscription.unsubscribe();
    };
    AssignAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-alias',
            template: __webpack_require__(/*! ./assign-alias.component.html */ "./src/app/assign-alias/assign-alias.component.html"),
            styles: [__webpack_require__(/*! ./assign-alias.component.scss */ "./src/app/assign-alias/assign-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__["MoneyToIntPipe"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__["IntToMoneyPipe"]])
    ], AssignAliasComponent);
    return AssignAliasComponent;
}());



/***/ }),

/***/ "./src/app/contact-send/contact-send.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/contacts']\">{{\r\n        'CONTACTS.TITLE' | translate\r\n      }}</span>\r\n      <span>{{ 'CONTACTS.SEND' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"wallets-selection\">\r\n      <div class=\"input-block\">\r\n        <label>\r\n          {{ 'CONTACTS.SEND_FROM' | translate }}\r\n        </label>\r\n        <ng-select\r\n          class=\"custom-select\"\r\n          [items]=\"this.variablesService.wallets\"\r\n          [(ngModel)]=\"this.variablesService.selectWallet\"\r\n          bindValue=\"wallet_id\"\r\n          bindLabel=\"name\"\r\n          [clearable]=\"false\"\r\n          [searchable]=\"false\"\r\n        >\r\n        </ng-select>\r\n      </div>\r\n      <button [routerLink]=\"['/main']\">\r\n        {{ 'CONTACTS.OPEN_ADD_WALLET' | translate }}\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"address\">{{ 'CONTACTS.SEND_TO' | translate }}</label>\r\n      <input type=\"text\" id=\"address\" [ngModel]=\"address\" [readonly]=\"true\"/>\r\n    </div>\r\n  </div>\r\n  <button class=\"blue-button\" [routerLink]=\"['/wallet/' + this.variablesService.selectWallet + '/send']\" [queryParams]=\"{send: true}\" (click)=\"goToWallet(this.variablesService.selectWallet)\"\r\n    [disabled]=\"!(this.variablesService.selectWallet === 0 || this.variablesService.selectWallet)\">{{ 'CONTACTS.BUTTON.GO_TO_WALLET' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wallets-selection {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem; }\n  .wallets-selection .input-block {\n    width: 18rem; }\n  .wallets-selection button {\n    padding: 2rem;\n    background: transparent;\n    border: none;\n    outline: none; }\n  .input-block {\n  width: 44rem; }\n  .input-block input {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .blue-button {\n  margin-top: 2.5rem;\n  width: 100%;\n  max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1zZW5kL0Q6XFxQcm9qZWN0c1xcUHJvamVjdHMgbm93XFx3b3JrXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcY29udGFjdC1zZW5kXFxjb250YWN0LXNlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0VBSGxCO0lBTUksWUFBWSxFQUFBO0VBTmhCO0lBVUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBSWpCO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1zZW5kL2NvbnRhY3Qtc2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXRzLXNlbGVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgXHJcbiAgLmlucHV0LWJsb2NrIHtcclxuICAgIHdpZHRoOiAxOHJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWJsb2NrIHtcclxuICB3aWR0aDogNDRyZW07XHJcblxyXG4gIGlucHV0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbn1cclxuXHJcbi5ibHVlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMThyZW07XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.ts ***!
  \********************************************************/
/*! exports provided: ContactSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSendComponent", function() { return ContactSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactSendComponent = /** @class */ (function () {
    function ContactSendComponent(location, variablesService, route) {
        this.location = location;
        this.variablesService = variablesService;
        this.route = route;
    }
    ContactSendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.address) {
                _this.address = params.address;
            }
        });
    };
    ContactSendComponent.prototype.goToWallet = function (id) {
        this.variablesService.setCurrentWallet(id);
        this.variablesService.currentWallet.send_data['address'] = this.address;
    };
    ContactSendComponent.prototype.back = function () {
        this.location.back();
    };
    ContactSendComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    ContactSendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-send',
            template: __webpack_require__(/*! ./contact-send.component.html */ "./src/app/contact-send/contact-send.component.html"),
            styles: [__webpack_require__(/*! ./contact-send.component.scss */ "./src/app/contact-send/contact-send.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContactSendComponent);
    return ContactSendComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.TITLE' | translate }}</h3>\r\n\r\n    <div class=\"wrap-table\">\r\n      <ng-container>\r\n        <table\r\n          *ngIf=\"this.variablesService.contacts.length !== 0; else emptyList\"\r\n        >\r\n          <thead>\r\n            <tr #head (window:resize)=\"calculateWidth()\">\r\n              <th>{{ 'CONTACTS.TABLE.NAME' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.ALIAS' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.ADDRESS' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.NOTES' | translate }}</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container\r\n              *ngFor=\"\r\n                let contact of this.variablesService.contacts;\r\n                let i = index\r\n              \"\r\n            >\r\n              <tr>\r\n                <td>\r\n                  {{ contact.name }}\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngIf=\"contact.alias\">\r\n                    <span>{{ contact.alias }}</span\r\n                    >\r\n                  </ng-container>\r\n                </td>\r\n                <td class=\"remote-address\">\r\n                  {{ contact.address }}\r\n                </td>\r\n                <td class=\"remote-notes\">\r\n                  {{ contact.notes }}\r\n                </td>\r\n                <td>\r\n                  <div class=\"button-wrapper\">\r\n                    <button\r\n                      [routerLink]=\"['/contact-send/' + i]\"\r\n                      [queryParams]=\"{ address: contact.address }\"\r\n                    >\r\n                      <i class=\"icon transfer\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.SEND' | translate }}</span>\r\n                    </button>\r\n                    <button\r\n                      [routerLink]=\"['/edit-contacts/' + i]\"\r\n                      [queryParams]=\"{ id: i }\"\r\n                    >\r\n                      <i class=\"icon edit\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.EDIT' | translate }}</span>\r\n                    </button>\r\n                    <button (click)=\"delete(i)\">\r\n                      <i class=\"icon delete\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.DELETE' | translate }}</span>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </ng-container>\r\n\r\n      <ng-template #emptyList>\r\n        <div class=\"empty-list\">\r\n          {{ 'CONTACTS.TABLE.EMPTY' | translate }}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <button [routerLink]=\"['/add-contacts']\" class=\"blue-button\">\r\n      {{ 'CONTACTS.BUTTON.ADD' | translate }}\r\n    </button>\r\n\r\n    <div class=\"footer\">\r\n      <button type=\"button\" class=\"import-btn\" [routerLink]=\"['/import']\">\r\n        <i class=\"icon import\"></i>\r\n        <span>{{ 'CONTACTS.BUTTON.IMPORT_EXPORT' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.head {\n  justify-content: flex-end; }\n\n.contacts-title {\n  font-size: 1.7rem; }\n\n.wrap-table {\n  margin: 1rem -3rem; }\n\n.wrap-table table tbody tr td {\n    padding: 0 3rem 0 1rem;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.wrap-table table tbody tr td:first-child {\n      max-width: 10rem;\n      padding: 0 3rem 0 3rem; }\n\n.wrap-table table tbody tr td:nth-child(2) {\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td .alias {\n      cursor: pointer; }\n\n.wrap-table table tbody tr td .button-wrapper {\n      display: flex; }\n\n.wrap-table table tbody tr td .button-wrapper button {\n        display: flex;\n        align-items: center;\n        background: transparent;\n        border: none;\n        font-size: 1.3rem;\n        font-weight: 400;\n        line-height: 3rem;\n        outline: none;\n        padding: 0;\n        height: auto;\n        margin-right: 1.8rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon {\n          cursor: pointer;\n          margin-right: 0.8rem;\n          width: 1.7rem;\n          height: 1.7rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.edit {\n            -webkit-mask: url('edit.svg') no-repeat center;\n                    mask: url('edit.svg') no-repeat center; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.transfer {\n            -webkit-mask: url('send.svg') no-repeat center;\n                    mask: url('send.svg') no-repeat center; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.delete {\n            -webkit-mask: url('delete.svg') no-repeat center;\n                    mask: url('delete.svg') no-repeat center; }\n\n.wrap-table .empty-list {\n    margin: 2.5rem 3rem; }\n\n.blue-button {\n  width: 100%;\n  max-width: 18rem;\n  margin-top: 3rem; }\n\n.footer {\n  position: absolute;\n  bottom: 3rem;\n  font-size: 1.3rem; }\n\n.footer .import-btn {\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    font-size: inherit;\n    font-weight: 400;\n    line-height: 1.3rem;\n    padding: 0;\n    height: auto; }\n\n.footer .import-btn .icon {\n      margin-right: 0.7rem;\n      -webkit-mask: url('import-export.svg') no-repeat center;\n              mask: url('import-export.svg') no-repeat center;\n      width: 0.9rem;\n      height: 0.9rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQVVVLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7O0FBWmpDO01BZVksZ0JBQWdCO01BQ2hCLHNCQUFzQixFQUFBOztBQWhCbEM7TUFvQlksZ0JBQWdCLEVBQUE7O0FBcEI1QjtNQXdCWSxlQUFlLEVBQUE7O0FBeEIzQjtNQTRCWSxhQUFhLEVBQUE7O0FBNUJ6QjtRQStCYyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFVBQVU7UUFDVixZQUFZO1FBQ1osb0JBQW9CLEVBQUE7O0FBekNsQztVQTRDZ0IsZUFBZTtVQUNmLG9CQUFvQjtVQUNwQixhQUFhO1VBQ2IsY0FBYyxFQUFBOztBQS9DOUI7WUFrRGtCLDhDQUF1RDtvQkFBdkQsc0NBQXVELEVBQUE7O0FBbER6RTtZQXNEa0IsOENBQXVEO29CQUF2RCxzQ0FBdUQsRUFBQTs7QUF0RHpFO1lBMERrQixnREFBeUQ7b0JBQXpELHdDQUF5RCxFQUFBOztBQTFEM0U7SUFxRUksbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUhuQjtJQU1JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBYmhCO01BZ0JNLG9CQUFvQjtNQUNwQix1REFBZ0U7Y0FBaEUsK0NBQWdFO01BQ2hFLGFBQWE7TUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtaW4td2lkdGg6IDk1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jb250YWN0cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbn1cclxuXHJcbi53cmFwLXRhYmxlIHtcclxuICBtYXJnaW46IDFyZW0gLTNyZW07XHJcblxyXG4gIHRhYmxlIHtcclxuXHJcbiAgICB0Ym9keXtcclxuXHJcbiAgICAgIHRyIHtcclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzcmVtIDAgMXJlbTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtIDAgM3JlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTByZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFsaWFzIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmLmVkaXQge1xyXG4gICAgICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICYudHJhbnNmZXIge1xyXG4gICAgICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbmQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi5kZWxldGUge1xyXG4gICAgICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eS1saXN0IHtcclxuICAgIG1hcmdpbjogMi41cmVtIDNyZW07XHJcbiAgfSAgXHJcbn1cclxuXHJcbi5ibHVlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBcclxuICAuaW1wb3J0LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW1wb3J0LWV4cG9ydC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAwLjlyZW07XHJcbiAgICAgIGhlaWdodDogMC45cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(location, variablesService, backend) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.calculatedWidth = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.backend.getContactAlias();
    };
    ContactsComponent.prototype.delete = function (index) {
        if (this.variablesService.appPass) {
            this.variablesService.contacts.splice(index, 1);
            this.backend.storeSecureAppData();
        }
    };
    ContactsComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth +
            this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    // openInBrowser(alias: string) {
    //   if (alias !== null) {
    //     this.backend.openUrlInBrowser(
    //       `explorer.zano.org/aliases/${alias.slice(1)}#modalOpen`
    //     );
    //   }
    // }
    ContactsComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContactsComponent.prototype, "head", void 0);
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts.component.html":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty-contracts\" *ngIf=\"!variablesService.currentWallet.contracts.length\">\r\n  <span>{{ 'CONTRACTS.EMPTY' | translate }}</span>\r\n</div>\r\n\r\n<div class=\"wrap-table scrolled-content\" *ngIf=\"variablesService.currentWallet.contracts.length\">\r\n\r\n  <table class=\"contracts-table\">\r\n    <thead>\r\n    <tr>\r\n      <th>{{ 'CONTRACTS.CONTRACTS' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.DATE' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.AMOUNT' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.STATUS' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.COMMENTS' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of sortedArrayContracts\" [routerLink]=\"'/wallet/' + walletId + '/purchase/' + item.contract_id\">\r\n      <td>\r\n        <div class=\"contract\">\r\n          <i class=\"icon alert\" *ngIf=\"!item.is_new\"></i>\r\n          <i class=\"icon new\" *ngIf=\"item.is_new\"></i>\r\n          <i class=\"icon\" [class.purchase]=\"item.is_a\" [class.sell]=\"!item.is_a\"></i>\r\n          <span tooltip=\"{{ item.private_detailes.t }}\" placement=\"top-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{item.private_detailes.t}}</span>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</div>\r\n      </td>\r\n      <td>\r\n        <div>{{item.private_detailes.to_pay | intToMoney}} {{variablesService.defaultCurrency}}</div>\r\n      </td>\r\n      <td>\r\n        <div class=\"status\" [class.error-text]=\"item.state === 4\" tooltip=\"{{item.state | contractStatusMessages : item.is_a}}\" placement=\"top\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\r\n          {{item.state | contractStatusMessages : item.is_a}}\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div class=\"comment\" tooltip=\"{{ item.private_detailes.c }}\" placement=\"top-right\" tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\r\n          {{item.private_detailes.c}}\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"contracts-buttons\">\r\n  <button type=\"button\" class=\"blue-button\" [routerLink]=\"'/wallet/' + walletId + '/purchase'\">{{ 'CONTRACTS.PURCHASE_BUTTON' | translate }}</button>\r\n  <button type=\"button\" class=\"blue-button\" disabled>{{ 'CONTRACTS.LISTING_BUTTON' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contracts/contracts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.empty-contracts {\n  font-size: 1.5rem; }\n\n.wrap-table {\n  margin: -3rem -3rem 0 -3rem;\n  overflow-x: auto; }\n\n.wrap-table table tbody tr {\n    cursor: pointer;\n    outline: none !important; }\n\n.wrap-table table tbody tr .contract {\n      position: relative;\n      display: flex;\n      align-items: center; }\n\n.wrap-table table tbody tr .contract .icon {\n        flex-shrink: 0; }\n\n.wrap-table table tbody tr .contract .icon.new, .wrap-table table tbody tr .contract .icon.alert {\n          position: absolute;\n          top: 0; }\n\n.wrap-table table tbody tr .contract .icon.new {\n          left: -2.3rem;\n          -webkit-mask: url('new.svg') no-repeat center;\n                  mask: url('new.svg') no-repeat center;\n          width: 1.7rem;\n          height: 1.7rem; }\n\n.wrap-table table tbody tr .contract .icon.alert {\n          top: 0.2rem;\n          left: -2.1rem;\n          -webkit-mask: url('alert.svg') no-repeat center;\n                  mask: url('alert.svg') no-repeat center;\n          width: 1.2rem;\n          height: 1.2rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase, .wrap-table table tbody tr .contract .icon.sell {\n          margin-right: 1rem;\n          width: 1.5rem;\n          height: 1.5rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase {\n          -webkit-mask: url('purchase.svg') no-repeat center;\n                  mask: url('purchase.svg') no-repeat center; }\n\n.wrap-table table tbody tr .contract .icon.sell {\n          -webkit-mask: url('sell.svg') no-repeat center;\n                  mask: url('sell.svg') no-repeat center; }\n\n.wrap-table table tbody tr .contract span {\n        text-overflow: ellipsis;\n        overflow: hidden; }\n\n.wrap-table table tbody tr .status, .wrap-table table tbody tr .comment {\n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 100%; }\n\n.contracts-buttons {\n  display: flex;\n  margin: 3rem 0;\n  width: 50%; }\n\n.contracts-buttons button {\n    flex: 0 1 50%;\n    margin-right: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL0Q6XFxQcm9qZWN0c1xcUHJvamVjdHMgbm93XFx3b3JrXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcY29udHJhY3RzXFxjb250cmFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBU1EsZUFBZTtJQUNmLHdCQUF3QixFQUFBOztBQVZoQztNQWFVLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7O0FBZjdCO1FBa0JZLGNBQWMsRUFBQTs7QUFsQjFCO1VBcUJjLGtCQUFrQjtVQUNsQixNQUFNLEVBQUE7O0FBdEJwQjtVQTBCYyxhQUFhO1VBQ2IsNkNBQXNEO2tCQUF0RCxxQ0FBc0Q7VUFDdEQsYUFBYTtVQUNiLGNBQWMsRUFBQTs7QUE3QjVCO1VBaUNjLFdBQVc7VUFDWCxhQUFhO1VBQ2IsK0NBQXdEO2tCQUF4RCx1Q0FBd0Q7VUFDeEQsYUFBYTtVQUNiLGNBQWMsRUFBQTs7QUFyQzVCO1VBeUNjLGtCQUFrQjtVQUNsQixhQUFhO1VBQ2IsY0FBYyxFQUFBOztBQTNDNUI7VUErQ2Msa0RBQTJEO2tCQUEzRCwwQ0FBMkQsRUFBQTs7QUEvQ3pFO1VBbURjLDhDQUF1RDtrQkFBdkQsc0NBQXVELEVBQUE7O0FBbkRyRTtRQXdEWSx1QkFBdUI7UUFDdkIsZ0JBQWdCLEVBQUE7O0FBekQ1QjtNQThEVSxxQkFBcUI7TUFDckIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7O0FBT3pCO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBSFo7SUFNSSxhQUFhO0lBQ2Isb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250cmFjdHMvY29udHJhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktY29udHJhY3RzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLndyYXAtdGFibGUge1xyXG4gIG1hcmdpbjogLTNyZW0gLTNyZW0gMCAtM3JlbTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICB0YWJsZSB7XHJcblxyXG4gICAgdGJvZHkge1xyXG5cclxuICAgICAgdHIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5jb250cmFjdCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICAgICAgICAgJi5uZXcsICYuYWxlcnQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYubmV3IHtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMi4zcmVtO1xyXG4gICAgICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbmV3LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFsZXJ0IHtcclxuICAgICAgICAgICAgICB0b3A6IDAuMnJlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMi4xcmVtO1xyXG4gICAgICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvYWxlcnQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucHVyY2hhc2UsICYuc2VsbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucHVyY2hhc2Uge1xyXG4gICAgICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvcHVyY2hhc2Uuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnNlbGwge1xyXG4gICAgICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc2VsbC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLCAuY29tbWVudCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udHJhY3RzLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZsZXg6IDAgMSA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contracts/contracts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contracts/contracts.component.ts ***!
  \**************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractsComponent = /** @class */ (function () {
    function ContractsComponent(route, variablesService) {
        this.route = route;
        this.variablesService = variablesService;
    }
    Object.defineProperty(ContractsComponent.prototype, "sortedArrayContracts", {
        get: function () {
            return this.variablesService.currentWallet.contracts.sort(function (a, b) {
                if (a.is_new < b.is_new) {
                    return 1;
                }
                if (a.is_new > b.is_new) {
                    return -1;
                }
                if (a.timestamp < b.timestamp) {
                    return 1;
                }
                if (a.timestamp > b.timestamp) {
                    return -1;
                }
                if (a.contract_id < b.contract_id) {
                    return 1;
                }
                if (a.contract_id > b.contract_id) {
                    return -1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    ContractsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.walletId = params['id'];
            }
        });
    };
    ContractsComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
    };
    ContractsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts',
            template: __webpack_require__(/*! ./contracts.component.html */ "./src/app/contracts/contracts.component.html"),
            styles: [__webpack_require__(/*! ./contracts.component.scss */ "./src/app/contracts/contracts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], ContractsComponent);
    return ContractsComponent;
}());



/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.CREATE_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-create\" [formGroup]=\"createForm\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'CREATE_WALLET.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [attr.readonly]=\"walletSaved ? '' : null\" [maxlength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"createForm.controls['name'].invalid && (createForm.controls['name'].dirty || createForm.controls['name'].touched)\">\r\n        <div *ngIf=\"createForm.controls['name'].errors['required']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"createForm.controls['name'].errors['duplicate']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"createForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'CREATE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-password\">{{ 'CREATE_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"confirm-wallet-password\">{{ 'CREATE_WALLET.CONFIRM' | translate }}</label>\r\n      <input type=\"password\" id=\"confirm-wallet-password\" formControlName=\"confirm\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"createForm.controls['password'].dirty && createForm.controls['confirm'].dirty && createForm.errors\">\r\n        <div *ngIf=\"createForm.errors['confirm_mismatch']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"transparent-button\" *ngIf=\"walletSaved\" disabled><i class=\"icon\"></i>{{walletSavedName}}</button>\r\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\" [disabled]=\"!createForm.valid\" *ngIf=\"!walletSaved\">{{ 'CREATE_WALLET.BUTTON_SELECT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"createWallet()\" [disabled]=\"!walletSaved\">{{ 'CREATE_WALLET.BUTTON_CREATE' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n<app-progress-container [width]=\"progressWidth\" [labels]=\"['PROGRESS.ADD_WALLET', 'PROGRESS.SELECT_LOCATION', 'PROGRESS.CREATE_WALLET']\"></app-progress-container>\r\n"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.scss":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-create {\n  margin: 2.4rem 0;\n  width: 50%; }\n\n.form-create .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n\n.form-create .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-create .wrap-buttons button.transparent-button {\n        flex-basis: 50%; }\n\n.form-create .wrap-buttons button.select-button {\n        flex-basis: 60%; }\n\n.form-create .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXdhbGxldC9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGNyZWF0ZS13YWxsZXRcXGNyZWF0ZS13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUZaO0lBS0ksYUFBYTtJQUNiLHNCQUFzQixFQUFBOztBQU4xQjtNQVNNLGdCQUFnQixFQUFBOztBQVR0QjtRQVlRLGVBQWUsRUFBQTs7QUFadkI7UUFnQlEsZUFBZSxFQUFBOztBQWhCdkI7UUFvQlEsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXdhbGxldC9jcmVhdGUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tY3JlYXRlIHtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuXHJcbiAgICAgICYudHJhbnNwYXJlbnQtYnV0dG9uIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0LWJ1dHRvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNyZWF0ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletComponent", function() { return CreateWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateWalletComponent = /** @class */ (function () {
    function CreateWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, function (g) {
            return g.get('password').value === g.get('confirm').value ? null : { 'confirm_mismatch': true };
        });
        this.wallet = {
            id: ''
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
    }
    CreateWalletComponent.prototype.ngOnInit = function () {
    };
    CreateWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.router.navigate(['/seed-phrase'], { queryParams: { wallet_id: _this.wallet.id } });
        });
    };
    CreateWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.createForm.valid && this.createForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.saveFileDialog(this.translate.instant('CREATE_WALLET.TITLE_SAVE'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
                if (file_status) {
                    _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                    _this.walletSavedName = file_data.path.substr(file_data.path.lastIndexOf('/') + 1, file_data.path.length - 1);
                    _this.backend.generateWallet(file_data.path, _this.createForm.get('password').value, function (generate_status, generate_data, errorCode) {
                        if (generate_status) {
                            _this.wallet.id = generate_data.wallet_id;
                            _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](generate_data.wallet_id, _this.createForm.get('name').value, _this.createForm.get('password').value, generate_data['wi'].path, generate_data['wi'].address, generate_data['wi'].balance, generate_data['wi'].unlocked_balance, generate_data['wi'].mined_total, generate_data['wi'].tracking_hey);
                            _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(generate_data['wi'].address);
                            _this.ngZone.run(function () {
                                _this.walletSaved = true;
                                _this.progressWidth = '50%';
                            });
                        }
                        else {
                            if (errorCode && errorCode === 'ALREADY_EXISTS') {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_TOP');
                            }
                            else {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_SYSTEM');
                            }
                        }
                    });
                }
            });
        }
    };
    CreateWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-wallet',
            template: __webpack_require__(/*! ./create-wallet.component.html */ "./src/app/create-wallet/create-wallet.component.html"),
            styles: [__webpack_require__(/*! ./create-wallet.component.scss */ "./src/app/create-wallet/create-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], CreateWalletComponent);
    return CreateWalletComponent;
}());



/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.EDIT_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-edit\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\">\r\n        {{ 'EDIT_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\" placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\">\r\n        {{ 'EDIT_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\"\r\n                class=\"scrolled-content\"\r\n                [(ngModel)]=\"alias.comment\"\r\n                [ngModelOptions]=\"{standalone: true}\"\r\n                [maxlength]=\"variablesService.maxCommentLength\"\r\n                (contextmenu)=\"variablesService.onContextMenu($event)\"\r\n                placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\">\r\n      </textarea>\r\n      <div class=\"error-block\" *ngIf=\"alias.comment.length > 0 && notEnoughMoney\">\r\n        {{ 'EDIT_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"alias.comment.length >= variablesService.maxCommentLength\">\r\n        {{ 'EDIT_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"EDIT_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency: variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"updateAlias()\" [disabled]=\"notEnoughMoney || (oldAliasComment === alias.comment) || alias.comment.length > variablesService.maxCommentLength\">{{ 'EDIT_ALIAS.BUTTON_EDIT' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.scss":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-edit {\n  margin: 2.4rem 0; }\n  .form-edit .alias-name {\n    width: 50%; }\n  .form-edit .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-edit .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-edit .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hbGlhcy9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGVkaXQtYWxpYXNcXGVkaXQtYWxpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLFVBQVUsRUFBQTtFQUpkO0lBUUksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBVHBCO0lBYUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0IsRUFBQTtFQWYxQjtNQWtCTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1hbGlhcy9lZGl0LWFsaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWRpdCB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuXHJcbiAgLmFsaWFzLW5hbWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hbGlhcy1jb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.ts ***!
  \****************************************************/
/*! exports provided: EditAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAliasComponent", function() { return EditAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAliasComponent = /** @class */ (function () {
    function EditAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.requestProcessing = false;
    }
    EditAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment
        };
        this.oldAliasComment = alias.comment;
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    EditAliasComponent.prototype.updateAlias = function () {
        var _this = this;
        if (this.requestProcessing || this.notEnoughMoney || this.oldAliasComment === this.alias.comment || this.alias.comment.length > this.variablesService.maxCommentLength) {
            return;
        }
        this.requestProcessing = true;
        this.backend.updateAlias(this.wallet.wallet_id, this.alias, this.variablesService.default_fee, function (status) {
            if (status) {
                _this.modalService.prepareModal('success', '');
                _this.wallet.alias['comment'] = _this.alias.comment;
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/' + _this.wallet.wallet_id]);
                });
            }
            _this.requestProcessing = false;
        });
    };
    EditAliasComponent.prototype.back = function () {
        this.location.back();
    };
    EditAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-alias',
            template: __webpack_require__(/*! ./edit-alias.component.html */ "./src/app/edit-alias/edit-alias.component.html"),
            styles: [__webpack_require__(/*! ./edit-alias.component.scss */ "./src/app/edit-alias/edit-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EditAliasComponent);
    return EditAliasComponent;
}());



/***/ }),

/***/ "./src/app/export-import/export-import.component.html":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.IMPORT_EXPORT' | translate }}</h3>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <button class=\"blue-button\" type=\"button\" (click)=\"import()\">\r\n        {{ 'CONTACTS.IMPORT' | translate }}\r\n      </button>\r\n      <button class=\"blue-button\" type=\"button\" (click)=\"export()\">\r\n        {{ 'CONTACTS.EXPORT' | translate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/export-import/export-import.component.scss":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.head {\n  justify-content: flex-end; }\n\n.contacts-title {\n  font-size: 1.7rem;\n  margin-bottom: 1rem; }\n\n.btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -0.5rem;\n  padding: 1.5rem 0; }\n\n.btn-wrapper button {\n    flex: 1 0 auto;\n    margin: 0 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3J0LWltcG9ydC9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGV4cG9ydC1pbXBvcnRcXGV4cG9ydC1pbXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUxuQjtJQVFJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2V4cG9ydC1pbXBvcnQvZXhwb3J0LWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jb250YWN0cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmJ0bi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCAtMC41cmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/export-import/export-import.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/export-import/export-import.component.ts ***!
  \**********************************************************/
/*! exports provided: ExportImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImportComponent", function() { return ExportImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExportImportComponent = /** @class */ (function () {
    function ExportImportComponent(location, variablesService, backend, modalService, papa, translate) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modalService = modalService;
        this.papa = papa;
        this.translate = translate;
    }
    ExportImportComponent.prototype.ngOnInit = function () { };
    ExportImportComponent.prototype.import = function () {
        var _this = this;
        this.backend.openFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                if (_this.isValid(file_data.path)) {
                    _this.backend.loadFile(file_data.path, function (status, data) {
                        if (!status) {
                            _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT_EMPTY');
                        }
                        else {
                            var options = {
                                header: true
                            };
                            var elements = _this.papa.parse(data, options);
                            var isArray = Array.isArray(elements.data);
                            if (isArray && elements.data.length !== 0 && !elements.errors.length) {
                                if (!_this.variablesService.contacts.length) {
                                    elements.data.forEach(function (element) {
                                        _this.variablesService.contacts.push(element);
                                    });
                                }
                                else {
                                    elements.data.forEach(function (element) {
                                        var indexName = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === element.name; });
                                        var indexAddress = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === element.address; });
                                        if (indexAddress === -1 && indexName === -1) {
                                            _this.variablesService.contacts.push(element);
                                        }
                                        if (indexName !== -1 && indexAddress === -1) {
                                            _this.variablesService.contacts.push({
                                                name: element.name + " " + _this.translate.instant('CONTACTS.COPY'),
                                                address: element.address,
                                                notes: element.notes
                                            });
                                        }
                                    });
                                }
                                _this.backend.getContactAlias();
                                _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_IMPORT');
                            }
                            if (elements.errors.length) {
                                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT');
                                console.log(elements.errors);
                            }
                        }
                    });
                }
                else {
                    _this.modalService.prepareModal('error', 'CONTACTS.ERROR_TYPE_FILE');
                }
            }
        });
    };
    ExportImportComponent.prototype.export = function () {
        var _this = this;
        var contacts = [];
        this.variablesService.contacts.forEach(function (contact) {
            delete contact.alias;
            contacts.push(contact);
        });
        this.backend.saveFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (!_this.variablesService.contacts.length && !(file_data.error_code === 'CANCELED')) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EMPTY_LIST');
            }
            var path = _this.isValid(file_data.path) ? file_data.path : file_data.path + ".csv";
            if (file_status && _this.isValid(path) && _this.variablesService.contacts.length) {
                _this.backend.storeFile(path, _this.papa.unparse(contacts));
                _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_EXPORT');
            }
            if (!(file_data.error_code === 'CANCELED') && !_this.isValid(path)) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EXPORT');
            }
        });
    };
    ExportImportComponent.prototype.isValid = function (file) {
        return file.endsWith('.csv');
    };
    ExportImportComponent.prototype.back = function () {
        this.location.back();
    };
    ExportImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-import',
            template: __webpack_require__(/*! ./export-import.component.html */ "./src/app/export-import/export-import.component.html"),
            styles: [__webpack_require__(/*! ./export-import.component.scss */ "./src/app/export-import/export-import.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ExportImportComponent);
    return ExportImportComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table\">\r\n\r\n  <table class=\"history-table\">\r\n    <thead>\r\n    <tr #head (window:resize)=\"calculateWidth()\">\r\n      <th>{{ 'HISTORY.STATUS' | translate }}</th>\r\n      <th>{{ 'HISTORY.DATE' | translate }}</th>\r\n      <th>{{ 'HISTORY.AMOUNT' | translate }}</th>\r\n      <th>{{ 'HISTORY.FEE' | translate }}</th>\r\n      <th>{{ 'HISTORY.ADDRESS' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <ng-container *ngFor=\"let item of variablesService.currentWallet.history\">\r\n      <tr (click)=\"openDetails(item.tx_hash)\" [class.locked-transaction]=\"!item.is_mining && item.unlock_time > 0\">\r\n        <td> \r\n          <div class=\"status\" [class.send]=\"!item.is_income\" [class.received]=\"item.is_income\">\r\n            <ng-container *ngIf=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\">\r\n              <div class=\"confirmation\" tooltip=\"{{ 'HISTORY.STATUS_TOOLTIP' | translate : {'current': getHeight(item)/10, 'total': 10} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\r\n                <div class=\"fill\" [style.height]=\"getHeight(item) + '%'\"></div>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"item.unlock_time !== 0 && item.tx_type !== 6\">\r\n              <ng-container *ngIf=\"isLocked(item); else unlock\">\r\n                <ng-container *ngIf=\"item.unlock_time < 500000000\">\r\n                  <i class=\"icon lock-transaction\" tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': time(item) | date : 'MM.dd.yy'} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\r\n                  [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"item.unlock_time > 500000000\">\r\n                  <i class=\"icon lock-transaction\" tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\r\n                  [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                </ng-container>\r\n              </ng-container> \r\n              <ng-template #unlock>\r\n                <i class=\"icon unlock-transaction\" placement=\"bottom-left\" [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n            <!-- <ng-container *ngIf=\"!item.is_mining && item.unlock_time > 0\">\r\n              <i class=\"icon lock-transaction\" tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"></i>\r\n            </ng-container> -->\r\n            <i class=\"icon status-transaction\"></i>\r\n            <span>{{ (item.is_income ? 'HISTORY.RECEIVED' : 'HISTORY.SEND') | translate }}</span>\r\n          </div>\r\n        </td>\r\n        <td>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</td>\r\n        <td>\r\n          <span *ngIf=\"item.sortAmount && item.sortAmount.toString() !== '0'\">{{item.sortAmount | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n        </td>\r\n        <td>\r\n          <span *ngIf=\"item.sortFee && item.sortFee.toString() !== '0'\">{{item.sortFee | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n        </td>\r\n        <td class=\"remote-address\">\r\n          <span *ngIf=\"!(item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0])\">{{item | historyTypeMessages}}</span>\r\n          <span *ngIf=\"item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0]\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, item.remote_addresses[0])\">{{item.remote_addresses[0]}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"transaction-details\" [class.open]=\"item.tx_hash === openedDetails\">\r\n        <td colspan=\"5\">\r\n          <ng-container *ngIf=\"item.tx_hash === openedDetails\">\r\n            <app-transaction-details [transaction]=\"item\" [sizes]=\"calculatedWidth\"></app-transaction-details>\r\n          </ng-container>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-table {\n  margin: -3rem; }\n\n.wrap-table table tbody tr td {\n    min-width: 10rem; }\n\n.wrap-table table tbody tr .status {\n    position: relative;\n    display: flex;\n    align-items: center; }\n\n.wrap-table table tbody tr .status .confirmation {\n      position: absolute;\n      top: 50%;\n      left: -2rem;\n      transform: translateY(-50%);\n      display: flex;\n      align-items: flex-end;\n      width: 0.7rem;\n      height: 1.5rem; }\n\n.wrap-table table tbody tr .status .confirmation .fill {\n        width: 100%; }\n\n.wrap-table table tbody tr .status .lock-transaction {\n      position: absolute;\n      left: -2rem;\n      -webkit-mask: url('lock-transaction.svg') no-repeat center;\n              mask: url('lock-transaction.svg') no-repeat center;\n      width: 1.2rem;\n      height: 1.2rem;\n      margin-right: 1.1rem; }\n\n.wrap-table table tbody tr .status .unlock-transaction {\n      position: absolute;\n      left: -2rem;\n      -webkit-mask: url('unlock-transaction.svg') no-repeat center;\n              mask: url('unlock-transaction.svg') no-repeat center;\n      width: 1.2rem;\n      height: 1.2rem;\n      margin-right: 1.1rem; }\n\n.wrap-table table tbody tr .status .position {\n      position: static; }\n\n.wrap-table table tbody tr .status .status-transaction {\n      margin-right: 1rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.wrap-table table tbody tr .status.send .status-transaction {\n      -webkit-mask: url('send.svg') no-repeat center;\n              mask: url('send.svg') no-repeat center; }\n\n.wrap-table table tbody tr .status.received .status-transaction {\n      -webkit-mask: url('receive.svg') no-repeat center;\n              mask: url('receive.svg') no-repeat center; }\n\n.wrap-table table tbody tr .remote-address {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 25vw; }\n\n.wrap-table table tbody tr:not(.transaction-details) {\n    cursor: pointer; }\n\n.wrap-table table tbody tr.transaction-details {\n    transition: 0.5s height linear, 0s font-size;\n    transition-delay: 0s, 0.5s;\n    height: 0; }\n\n.wrap-table table tbody tr.transaction-details.open {\n      height: 16.2rem; }\n\n.wrap-table table tbody tr.transaction-details td {\n      position: relative;\n      overflow: hidden;\n      line-height: inherit;\n      padding-top: 0;\n      padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGhpc3RvcnlcXGhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBRGY7SUFVVSxnQkFBZ0IsRUFBQTs7QUFWMUI7SUFjVSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQWhCN0I7TUFtQlksa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixXQUFXO01BQ1gsMkJBQTJCO01BQzNCLGFBQWE7TUFDYixxQkFBcUI7TUFDckIsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUExQjFCO1FBNkJjLFdBQVcsRUFBQTs7QUE3QnpCO01Ba0NZLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsMERBQW1FO2NBQW5FLGtEQUFtRTtNQUNuRSxhQUFhO01BQ2IsY0FBYztNQUNkLG9CQUFvQixFQUFBOztBQXZDaEM7TUEyQ1ksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCw0REFBcUU7Y0FBckUsb0RBQXFFO01BQ3JFLGFBQWE7TUFDYixjQUFjO01BQ2Qsb0JBQW9CLEVBQUE7O0FBaERoQztNQW9EWSxnQkFBZ0IsRUFBQTs7QUFwRDVCO01Bd0RZLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQTFEMUI7TUFnRWMsOENBQXVEO2NBQXZELHNDQUF1RCxFQUFBOztBQWhFckU7TUF1RWMsaURBQTBEO2NBQTFELHlDQUEwRCxFQUFBOztBQXZFeEU7SUE2RVUsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlLEVBQUE7O0FBL0V6QjtJQW1GVSxlQUFlLEVBQUE7O0FBbkZ6QjtJQXdGVSw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLFNBQVMsRUFBQTs7QUExRm5CO01BNkZZLGVBQWUsRUFBQTs7QUE3RjNCO01BaUdZLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLGNBQWM7TUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndyYXAtdGFibGUge1xyXG4gIG1hcmdpbjogLTNyZW07XHJcblxyXG4gIHRhYmxlIHtcclxuXHJcbiAgICB0Ym9keSB7XHJcblxyXG4gICAgICB0ciB7XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTByZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jb25maXJtYXRpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMnJlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLjdyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgLmZpbGwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvY2stdHJhbnNhY3Rpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0ycmVtO1xyXG4gICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2xvY2stdHJhbnNhY3Rpb24uc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVubG9jay10cmFuc2FjdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdW5sb2NrLXRyYW5zYWN0aW9uLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN0YXR1cy10cmFuc2FjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEuN3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zZW5kICB7XHJcblxyXG4gICAgICAgICAgICAuc3RhdHVzLXRyYW5zYWN0aW9uIHtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbmQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5yZWNlaXZlZCB7XHJcblxyXG4gICAgICAgICAgICAuc3RhdHVzLXRyYW5zYWN0aW9uIHtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3JlY2VpdmUuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVtb3RlLWFkZHJlc3Mge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyNXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpub3QoLnRyYW5zYWN0aW9uLWRldGFpbHMpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudHJhbnNhY3Rpb24tZGV0YWlscyB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgaGVpZ2h0IGxpbmVhciwgMHMgZm9udC1zaXplO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBoZWlnaHQgbGluZWFyLCAwcyBmb250LXNpemU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC41cztcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuXHJcbiAgICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2LjJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(route, variablesService) {
        this.route = route;
        this.variablesService = variablesService;
        this.openedDetails = false;
        this.calculatedWidth = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.openedDetails = false;
        });
    };
    HistoryComponent.prototype.ngAfterViewChecked = function () {
        this.calculateWidth();
    };
    HistoryComponent.prototype.getHeight = function (item) {
        if ((this.variablesService.height_app - item.height >= 10 && item.height !== 0) || (item.is_mining === true && item.height === 0)) {
            return 100;
        }
        else {
            if (item.height === 0 || this.variablesService.height_app - item.height < 0) {
                return 0;
            }
            else {
                return (this.variablesService.height_app - item.height) * 10;
            }
        }
    };
    HistoryComponent.prototype.openDetails = function (tx_hash) {
        if (tx_hash === this.openedDetails) {
            this.openedDetails = false;
        }
        else {
            this.openedDetails = tx_hash;
        }
    };
    HistoryComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth + this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    HistoryComponent.prototype.time = function (item) {
        var now = new Date().getTime();
        var unlockTime = now + ((item.unlock_time - this.variablesService.height_max) * 60 * 1000);
        return unlockTime;
    };
    HistoryComponent.prototype.isLocked = function (item) {
        if ((item.unlock_time > 500000000) && (item.unlock_time > new Date().getTime() / 1000)) {
            return true;
        }
        if ((item.unlock_time < 500000000) && (item.unlock_time > this.variablesService.height_max)) {
            return true;
        }
        return false;
    };
    HistoryComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HistoryComponent.prototype, "head", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"wrap-login\">\r\n\r\n    <div class=\"logo\" [innerHTML]=\"logo | safeHTML\"></div>\r\n\r\n    <form *ngIf=\"type === 'reg'\" class=\"form-login\" [formGroup]=\"regForm\" (ngSubmit)=\"onSubmitCreatePass()\">\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"master-pass\">{{ 'LOGIN.SETUP_MASTER_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"master-pass\" formControlName=\"password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"confirm-pass\">{{ 'LOGIN.SETUP_CONFIRM_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"confirm-pass\" formControlName=\"confirmation\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n        <div class=\"error-block\" *ngIf=\"regForm.controls['password'].dirty && regForm.controls['confirmation'].dirty && regForm.errors\">\r\n          <div *ngIf=\"regForm.errors['mismatch']\">\r\n            {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"wrap-button\">\r\n        <button type=\"submit\" class=\"blue-button\" [disabled]=\"!regForm.controls['password'].value.length || !regForm.controls['confirmation'].value.length || (regForm.errors && regForm.errors['mismatch'])\">{{ 'LOGIN.BUTTON_NEXT' | translate }}</button>\r\n        <button type=\"button\" class=\"blue-button\" (click)=\"onSkipCreatePass()\" [disabled]=\"regForm.controls['password'].value.length || regForm.controls['confirmation'].value.length\">{{ 'LOGIN.BUTTON_SKIP' | translate }}</button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <form *ngIf=\"type !== 'reg'\" class=\"form-login\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmitAuthPass()\">\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"master-pass-login\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"master-pass-login\" formControlName=\"password\" autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      </div>\r\n\r\n      <div class=\"wrap-button\">\r\n        <button type=\"submit\" class=\"blue-button\">{{ 'LOGIN.BUTTON_NEXT' | translate }}</button>\r\n        <button type=\"button\" class=\"blue-button_reset\" (click)=\"dropSecureAppData()\">{{ 'LOGIN.BUTTON_RESET' | translate }}</button>   <!--Add \"Reset\"-button-->\r\n      </div> \r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  :host .content {\n    display: flex; }\n  :host .content .wrap-login {\n      margin: auto;\n      width: 100%;\n      max-width: 40rem; }\n  :host .content .wrap-login .logo {\n        display: flex;\n        justify-content: center; }\n  :host .content .wrap-login .logo::ng-deep svg {\n          width: 14rem; }\n  :host .content .wrap-login .form-login {\n        display: flex;\n        flex-direction: column; }\n  :host .content .wrap-login .form-login .wrap-button {\n          display: flex;\n          align-items: center;\n          justify-content: space-between; }\n  :host .content .wrap-login .form-login .wrap-button button {\n            margin: 2.5rem 0; }\n  :host .content .wrap-login .form-login button {\n          margin: 2.5rem auto;\n          width: 100%;\n          max-width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBTGQ7SUFRSSxhQUFhLEVBQUE7RUFSakI7TUFXTSxZQUFZO01BQ1osV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBYnRCO1FBZ0JRLGFBQWE7UUFDYix1QkFBdUIsRUFBQTtFQWpCL0I7VUFvQlUsWUFBWSxFQUFBO0VBcEJ0QjtRQXlCUSxhQUFhO1FBQ2Isc0JBQXNCLEVBQUE7RUExQjlCO1VBNkJVLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsOEJBQThCLEVBQUE7RUEvQnhDO1lBa0NZLGdCQUFnQixFQUFBO0VBbEM1QjtVQXVDVSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAud3JhcC1sb2dpbiB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDByZW07XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJjo6bmctZGVlcCBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tbG9naW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLndyYXAtYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAyLjVyZW0gYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, backend, variablesService, modalService, ngZone) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, function (g) {
            return g.get('password').value === g.get('confirmation').value ? null : { 'mismatch': true };
        });
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.type = 'reg';
        this.logo = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__.logo;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                _this.type = params.type;
            }
        });
    };
    LoginComponent.prototype.onSubmitCreatePass = function () {
        var _this = this;
        if (this.regForm.valid) {
            this.variablesService.appPass = this.regForm.get('password').value; // the pass what was written in input of login form by user
            this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                if (status) {
                    _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                    _this.variablesService.appLogin = true;
                    _this.variablesService.dataIsLoaded = true;
                    _this.variablesService.startCountdown();
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                }
                else {
                    console.log(data['error_code']);
                }
            });
        }
    };
    LoginComponent.prototype.onSkipCreatePass = function () {
        var _this = this;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.variablesService.appLogin = true;
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.dropSecureAppData = function () {
        var _this = this;
        this.backend.dropSecureAppData(function () {
            _this.onSkipCreatePass();
        });
        this.variablesService.wallets = [];
        this.variablesService.contacts = [];
    };
    LoginComponent.prototype.onSubmitAuthPass = function () {
        var _this = this;
        if (this.authForm.valid) {
            this.variablesService.appPass = this.authForm.get('password').value;
            if (this.variablesService.dataIsLoaded) {
                this.backend.checkMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.variablesService.appLogin = true;
                        _this.variablesService.startCountdown();
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                });
            }
            else {
                this.getData(this.variablesService.appPass);
            }
        }
    };
    LoginComponent.prototype.getData = function (appPass) {
        var _this = this;
        this.backend.getSecureAppData({ pass: appPass }, function (status, data) {
            if (!data.error_code) {
                _this.variablesService.appLogin = true;
                _this.variablesService.dataIsLoaded = true;
                _this.variablesService.startCountdown();
                _this.variablesService.appPass = appPass;
                var isEmptyObject = Object.keys(data).length === 0 && data.constructor === Object;
                if (_this.variablesService.wallets.length) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.variablesService.wallets[0].wallet_id]);
                    });
                    return;
                }
                if (data.hasOwnProperty('contacts')) {
                    if (Object.keys(data['contacts']).length !== 0) {
                        data['contacts'].map(function (contact) {
                            _this.variablesService.contacts.push(contact);
                        });
                    }
                }
                if (data.hasOwnProperty('wallets')) {
                    if (Object.keys(data['wallets']).length !== 0) {
                        _this.getWalletData(data['wallets']);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
                if (!data.hasOwnProperty('wallets') && !data.hasOwnProperty('contacts')) {
                    if (data.length !== 0 && !isEmptyObject) {
                        _this.getWalletData(data);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            }
        });
    };
    LoginComponent.prototype.getWalletData = function (walletData) {
        var _this = this;
        var openWallets = 0;
        var runWallets = 0;
        walletData.forEach(function (wallet, wallet_index) {
            _this.backend.openWallet(wallet.path, wallet.pass, true, function (open_status, open_data, open_error) {
                if (open_status || open_error === 'FILE_RESTORED') {
                    openWallets++;
                    _this.ngZone.run(function () {
                        var new_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, wallet.name, wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet.alias = _this.backend.getWalletAlias(new_wallet.address);
                        if (wallet.staking) {
                            new_wallet.staking = true;
                            _this.backend.startPosMining(new_wallet.wallet_id);
                        }
                        else {
                            new_wallet.staking = false;
                        }
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet.prepareHistory(open_data.recent_history.history);
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet);
                        if (_this.variablesService.wallets.length === 1) {
                            _this.router.navigate(['/wallet/' + _this.variablesService.wallets[0].wallet_id]);
                        }
                    });
                    _this.backend.runWallet(open_data.wallet_id, function (run_status) {
                        if (run_status) {
                            runWallets++;
                        }
                        else {
                            if (wallet_index === walletData.length - 1 && runWallets === 0) {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            }
                        }
                    });
                }
                else {
                    if (wallet_index === walletData.length - 1 && openWallets === 0) {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            });
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\" *ngIf=\"variablesService.wallets.length > 0\">\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"add-wallet\">\r\n    <h3 class=\"add-wallet-title\">{{ 'MAIN.TITLE' | translate }}</h3>\r\n    <div class=\"add-wallet-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" [routerLink]=\"['/create']\">{{ 'MAIN.BUTTON_NEW_WALLET' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"openWallet()\">{{ 'MAIN.BUTTON_OPEN_WALLET' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" [routerLink]=\"['/restore']\">{{ 'MAIN.BUTTON_RESTORE_BACKUP' | translate }}</button>\r\n    </div>\r\n    <div class=\"add-wallet-help\" (click)=\"openInBrowser()\">\r\n      <i class=\"icon\"></i><span>{{ 'MAIN.HELP' | translate }}</span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 0 auto;\n  padding: 3rem; }\n\n.content {\n  padding: 3rem;\n  min-height: 100%; }\n\n.content .head {\n    justify-content: flex-end; }\n\n.add-wallet .add-wallet-title {\n  margin-bottom: 1rem; }\n\n.add-wallet .add-wallet-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -0.5rem;\n  padding: 1.5rem 0; }\n\n.add-wallet .add-wallet-buttons button {\n    flex: 1 0 auto;\n    margin: 0 0.5rem; }\n\n.add-wallet .add-wallet-help {\n  display: flex;\n  cursor: pointer;\n  font-size: 1.3rem;\n  line-height: 1.4rem; }\n\n.add-wallet .add-wallet-help .icon {\n    -webkit-mask: url('howto.svg') no-repeat center;\n            mask: url('howto.svg') no-repeat center;\n    margin-right: 0.8rem;\n    width: 1.4rem;\n    height: 1.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUZsQjtJQUtJLHlCQUF5QixFQUFBOztBQUk3QjtFQUdJLG1CQUFtQixFQUFBOztBQUh2QjtFQU9JLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFYckI7SUFjTSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBZnRCO0VBb0JJLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQXZCdkI7SUEwQk0sK0NBQXdEO1lBQXhELHVDQUF3RDtJQUN4RCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuaGVhZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC13YWxsZXQge1xyXG5cclxuICAuYWRkLXdhbGxldC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFkZC13YWxsZXQtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMCAtMC41cmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDA7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkLXdhbGxldC1oZWxwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2hvd3RvLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICAgIGhlaWdodDogMS40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainComponent = /** @class */ (function () {
    function MainComponent(router, location, backend, variablesService, ngZone, translate) {
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.openWallet = function () {
        var _this = this;
        this.backend.openFileDialog(this.translate.instant('MAIN.CHOOSE_PATH'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                _this.ngZone.run(function () {
                    _this.router.navigate(['/open'], { queryParams: { path: file_data.path } });
                });
            }
            else {
                console.log(file_data['error_code']);
            }
        });
    };
    MainComponent.prototype.openInBrowser = function () {
        this.backend.openUrlInBrowser('docs.zano.org/docs/getting-started-1#section-create-new-wallet');
    };
    MainComponent.prototype.back = function () {
        this.location.back();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table\">\r\n\r\n  <table class=\"messages-table\">\r\n    <thead>\r\n    <tr>\r\n      <th>{{ 'MESSAGES.ADDRESS' | translate }}</th>\r\n      <th>{{ 'MESSAGES.MESSAGE' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\" [routerLink]=\"[message.address]\">\r\n      <td>\r\n        <span>{{message.address}}</span>\r\n        <i class=\"icon\" *ngIf=\"message.is_new\"></i>\r\n      </td>\r\n      <td>\r\n        <span>{{message.message}}</span>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-table {\n  margin: -3rem; }\n\n.wrap-table table tbody tr td:first-child {\n    position: relative;\n    padding-right: 5rem;\n    width: 18rem; }\n\n.wrap-table table tbody tr td:first-child span {\n      display: block;\n      line-height: 3.5rem;\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:first-child .icon {\n      position: absolute;\n      top: 50%;\n      right: 1rem;\n      transform: translateY(-50%);\n      display: block;\n      -webkit-mask: url('alert.svg') no-repeat 0;\n              mask: url('alert.svg') no-repeat 0;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxtZXNzYWdlc1xcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBRGY7SUFZWSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUFkeEI7TUFpQmMsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTs7QUFuQjlCO01BdUJjLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixjQUFjO01BQ2QsMENBQW1EO2NBQW5ELGtDQUFtRDtNQUNuRCxhQUFhO01BQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53cmFwLXRhYmxlIHtcclxuICBtYXJnaW46IC0zcmVtO1xyXG5cclxuICB0YWJsZSB7XHJcblxyXG4gICAgdGJvZHkge1xyXG5cclxuICAgICAgdHIge1xyXG5cclxuICAgICAgICB0ZCB7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2FsZXJ0LnN2Zykgbm8tcmVwZWF0IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.messages = [
            {
                is_new: true,
                address: '@bitmap',
                message: 'No more miners for you!'
            },
            {
                is_new: false,
                address: 'Hjkwey36gHasdhkajshd4bxnb5mcvowyefb2633FdsFGGWbb',
                message: 'Hey! What’s with our BBR deal?'
            },
            {
                is_new: false,
                address: '@john',
                message: 'I’m coming!'
            }
        ];
    }
    MessagesComponent.prototype.ngOnInit = function () { };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <h3 class=\"title\">{{ 'OPEN_WALLET.MODAL.TITLE' | translate }}</h3>\r\n  <form class=\"open-form\" (ngSubmit)=\"openWallet()\">\r\n    <div class=\"wallet-path\">{{ wallet.name }}</div>\r\n    <div class=\"wallet-path\">{{ wallet.path }}</div>\r\n    <div class=\"input-block\" *ngIf=\"!wallet.notFound && !wallet.emptyPass\">\r\n      <label for=\"password\">{{ 'OPEN_WALLET.MODAL.LABEL' | translate }}</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"wallet.pass\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n    </div>\r\n    <div class=\"error-block\" *ngIf=\"wallet.notFound\">\r\n      {{ 'OPEN_WALLET.MODAL.NOT_FOUND' | translate }}\r\n    </div>\r\n    <div class=\"wrap-button\">\r\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"wallet.notFound\">{{ 'OPEN_WALLET.MODAL.OPEN' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"skipWallet()\">{{ 'OPEN_WALLET.MODAL.SKIP' | translate }}</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 64rem; }\n\n.modal .title {\n    font-size: 1.8rem;\n    text-align: center; }\n\n.modal .open-form .wallet-path {\n    font-size: 1.3rem;\n    margin: 5rem 0 2rem;\n    word-wrap: break-word;\n    line-height: 2rem; }\n\n.modal .open-form .wrap-button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 2rem -2rem 0; }\n\n.modal .open-form .wrap-button button {\n      flex: 1 0 0;\n      margin: 0 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQtbW9kYWwvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxvcGVuLXdhbGxldC1tb2RhbFxcb3Blbi13YWxsZXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUd2QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVBsQjtJQVVJLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFYdEI7SUFpQk0saUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBcEJ2QjtJQXdCTSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0IsRUFBQTs7QUEzQjFCO01BOEJRLFdBQVc7TUFDWCxjQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVuLXdhbGxldC1tb2RhbC9vcGVuLXdhbGxldC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzNHJlbTtcclxuICBtYXgtd2lkdGg6IDY0cmVtO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAub3Blbi1mb3JtIHtcclxuXHJcbiAgICAud2FsbGV0LXBhdGgge1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgbWFyZ2luOiA1cmVtIDAgMnJlbTtcclxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAud3JhcC1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbjogMnJlbSAtMnJlbSAwO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAxIDAgMDtcclxuICAgICAgICBtYXJnaW46IDAgMnJlbSA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: OpenWalletModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletModalComponent", function() { return OpenWalletModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenWalletModalComponent = /** @class */ (function () {
    function OpenWalletModalComponent(variablesService, backend, translate, modalService, ngZone) {
        this.variablesService = variablesService;
        this.backend = backend;
        this.translate = translate;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.wallet = {
            name: '',
            path: '',
            pass: '',
            notFound: false,
            emptyPass: false
        };
    }
    OpenWalletModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.wallets.length) {
            this.wallet = this.wallets[0];
            this.wallet.pass = '';
            this.backend.openWallet(this.wallet.path, '', true, function (status, data, error) {
                if (error === 'FILE_NOT_FOUND') {
                    _this.wallet.notFound = true;
                }
                if (status) {
                    _this.wallet.pass = '';
                    _this.wallet.emptyPass = true;
                    _this.backend.closeWallet(data.wallet_id);
                    _this.openWallet();
                }
            });
        }
    };
    OpenWalletModalComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.wallets.length === 0) {
            return;
        }
        this.backend.openWallet(this.wallet.path, this.wallet.pass, false, function (open_status, open_data, open_error) {
            if (open_error && open_error === 'FILE_NOT_FOUND') {
                var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                error_translate += ':<br>' + _this.wallet.path;
                error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                _this.modalService.prepareModal('error', error_translate);
            }
            else {
                if (open_status || open_error === 'FILE_RESTORED') {
                    var exists_1 = false;
                    _this.variablesService.wallets.forEach(function (wallet) {
                        if (wallet.address === open_data['wi'].address) {
                            exists_1 = true;
                        }
                    });
                    if (exists_1) {
                        _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                        _this.backend.closeWallet(open_data.wallet_id);
                    }
                    else {
                        var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__["Wallet"](open_data.wallet_id, _this.wallet.name, _this.wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet_1.prepareHistory(open_data.recent_history.history);
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet_1);
                        _this.backend.runWallet(open_data.wallet_id);
                        _this.skipWallet();
                    }
                }
            }
        });
    };
    OpenWalletModalComponent.prototype.skipWallet = function () {
        if (this.wallets.length) {
            this.wallets.splice(0, 1);
            this.ngOnInit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenWalletModalComponent.prototype, "wallets", void 0);
    OpenWalletModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet-modal',
            template: __webpack_require__(/*! ./open-wallet-modal.component.html */ "./src/app/open-wallet-modal/open-wallet-modal.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet-modal.component.scss */ "./src/app/open-wallet-modal/open-wallet-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OpenWalletModalComponent);
    return OpenWalletModalComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.html":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.OPEN_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-open\" [formGroup]=\"openForm\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'OPEN_WALLET.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"openForm.controls['name'].invalid && (openForm.controls['name'].dirty || openForm.controls['name'].touched)\">\r\n        <div *ngIf=\"openForm.controls['name'].errors['required']\">\r\n          {{ 'OPEN_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"openForm.controls['name'].errors['duplicate']\">\r\n          {{ 'OPEN_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"openForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'OPEN_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-password\">{{ 'OPEN_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"openWallet()\" [disabled]=\"!openForm.valid\">{{ 'OPEN_WALLET.BUTTON' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.scss":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-open {\n  margin: 2.4rem 0;\n  width: 50%; }\n  .form-open .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n  .form-open .wrap-buttons button {\n      margin: 0 0.7rem; }\n  .form-open .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxvcGVuLXdhbGxldFxcb3Blbi13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBO0VBRlo7SUFLSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFOMUI7TUFTTSxnQkFBZ0IsRUFBQTtFQVR0QjtRQVlRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29wZW4td2FsbGV0L29wZW4td2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tb3BlbiB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAmLmNyZWF0ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.ts ***!
  \******************************************************/
/*! exports provided: OpenWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletComponent", function() { return OpenWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpenWalletComponent = /** @class */ (function () {
    function OpenWalletComponent(route, router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.openForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    OpenWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.path) {
                _this.filePath = params.path;
                var filename = '';
                if (params.path.lastIndexOf('.') === -1) {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1);
                }
                else {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1, params.path.lastIndexOf('.') - 1 - params.path.lastIndexOf('/'));
                }
                if (filename.length > 25) {
                    filename = filename.slice(0, 25);
                }
                _this.openForm.get('name').setValue(filename);
                _this.openForm.get('name').markAsTouched();
            }
        });
    };
    OpenWalletComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.openForm.valid && this.openForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.openWallet(this.filePath, this.openForm.get('password').value, false, function (open_status, open_data, open_error) {
                if (open_error && open_error === 'FILE_NOT_FOUND') {
                    var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                    error_translate += ':<br>' + _this.filePath;
                    error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                    _this.modalService.prepareModal('error', error_translate);
                }
                else {
                    if (open_status || open_error === 'FILE_RESTORED') {
                        var exists_1 = false;
                        _this.variablesService.wallets.forEach(function (wallet) {
                            if (wallet.address === open_data['wi'].address) {
                                exists_1 = true;
                            }
                        });
                        if (exists_1) {
                            _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                            _this.backend.closeWallet(open_data.wallet_id, function () {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            });
                        }
                        else {
                            var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, _this.openForm.get('name').value, _this.openForm.get('password').value, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                            new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                            if (open_data.recent_history && open_data.recent_history.history) {
                                new_wallet_1.prepareHistory(open_data.recent_history.history);
                            }
                            _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                                if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                    _this.ngZone.run(function () {
                                        new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                    });
                                }
                            });
                            _this.variablesService.wallets.push(new_wallet_1);
                            _this.backend.runWallet(open_data.wallet_id, function (run_status, run_data) {
                                if (run_status) {
                                    if (_this.variablesService.appPass) {
                                        _this.backend.storeSecureAppData();
                                    }
                                    _this.ngZone.run(function () {
                                        _this.router.navigate(['/wallet/' + open_data.wallet_id]);
                                    });
                                }
                                else {
                                    console.log(run_data['error_code']);
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    OpenWalletComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    OpenWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet',
            template: __webpack_require__(/*! ./open-wallet.component.html */ "./src/app/open-wallet/open-wallet.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet.component.scss */ "./src/app/open-wallet/open-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], OpenWalletComponent);
    return OpenWalletComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <div class=\"breadcrumbs\">\r\n    <span [routerLink]=\"'/wallet/' + currentWalletId + '/contracts'\">{{ 'BREADCRUMBS.CONTRACTS' | translate }}</span>\r\n    <span *ngIf=\"newPurchase\">{{ 'BREADCRUMBS.NEW_PURCHASE' | translate }}</span>\r\n    <span *ngIf=\"!newPurchase\">{{ 'BREADCRUMBS.OLD_PURCHASE' | translate }}</span>\r\n  </div>\r\n  <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n    <i class=\"icon back\"></i>\r\n    <span>{{ 'COMMON.BACK' | translate }}</span>\r\n  </button>\r\n</div>\r\n\r\n<form class=\"form-purchase scrolled-content\" [formGroup]=\"purchaseForm\">\r\n\r\n  <div class=\"input-block\">\r\n    <label for=\"purchase-description\">{{ 'PURCHASE.DESCRIPTION' | translate }}</label>\r\n    <input type=\"text\" id=\"purchase-description\" formControlName=\"description\" maxlength=\"100\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    <div class=\"error-block\" *ngIf=\"purchaseForm.controls['description'].invalid && (purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched)\">\r\n      <div *ngIf=\"purchaseForm.controls['description'].errors['required']\">\r\n        {{ 'PURCHASE.FORM_ERRORS.DESC_REQUIRED' | translate }}\r\n      </div>\r\n    </div>\r\n    <div class=\"error-block\" *ngIf=\"newPurchase && purchaseForm.controls['description'].value.length >= 100\">\r\n      <div>\r\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n    <div class=\"input-block input-block-alias\">\r\n      <label for=\"purchase-seller\">{{ 'PURCHASE.SELLER' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-seller\" formControlName=\"seller\" [readonly]=\"!newPurchase\" (mousedown)=\"addressMouseDown($event)\" (contextmenu)=\"(!newPurchase) ? variablesService.onContextMenuOnlyCopy($event, purchaseForm.controls['seller'].value) : variablesService.onContextMenu($event)\">\r\n      <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\r\n        <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['seller'].invalid && (purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['address_not_valid']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_NOT_VALID' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['address_same']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_SAME' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['alias_not_valid']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-amount\">{{ 'PURCHASE.AMOUNT' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-amount\" formControlName=\"amount\" appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['amount'].invalid && (purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['amount'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.AMOUNT_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['amount'].errors['amount_zero']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.AMOUNT_ZERO' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-your-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.BUYER_DEPOSIT' : 'PURCHASE.YOUR_DEPOSIT') | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-your-deposit\" formControlName=\"yourDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['yourDeposit'].invalid && (purchaseForm.controls['yourDeposit'].dirty || purchaseForm.controls['yourDeposit'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['yourDeposit'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.YOUR_DEPOSIT_REQUIRED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <div class=\"wrap-label\">\r\n        <label for=\"purchase-seller-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.YOUR_DEPOSIT' : 'PURCHASE.SELLER_DEPOSIT') | translate }}</label>\r\n        <div class=\"checkbox-block\">\r\n          <input type=\"checkbox\" id=\"purchase-same-amount\" class=\"style-checkbox\" formControlName=\"sameAmount\" (change)=\"sameAmountChange()\">\r\n          <label for=\"purchase-same-amount\">{{ 'PURCHASE.SAME_AMOUNT' | translate }}</label>\r\n        </div>\r\n      </div>\r\n      <input type=\"text\" readonly *ngIf=\"purchaseForm.controls['sameAmount'].value\" [value]=\"purchaseForm.controls['amount'].value\">\r\n      <input type=\"text\" id=\"purchase-seller-deposit\" *ngIf=\"!purchaseForm.controls['sameAmount'].value\" formControlName=\"sellerDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['sellerDeposit'].invalid && (purchaseForm.controls['sellerDeposit'].dirty || purchaseForm.controls['sellerDeposit'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['sellerDeposit'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_DEPOSIT_REQUIRED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-block\">\r\n    <label for=\"purchase-comment\">{{ 'PURCHASE.COMMENT' | translate }}</label>\r\n    <input type=\"text\" id=\"purchase-comment\" formControlName=\"comment\" maxlength=\"100\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    <div class=\"error-block\" *ngIf=\"newPurchase && purchaseForm.controls['comment'].value.length >= 100\">\r\n      <div>\r\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"purchase-select\" (click)=\"toggleOptions()\">\r\n    <span>{{ 'PURCHASE.DETAILS' | translate }}</span><i class=\"icon arrow\" [class.down]=\"!additionalOptions\" [class.up]=\"additionalOptions\"></i>\r\n  </button>\r\n\r\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-fee\">{{ 'PURCHASE.FEE' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-fee\" formControlName=\"fee\" readonly>\r\n    </div>\r\n    <div class=\"input-block\" *ngIf=\"newPurchase\">\r\n      <label for=\"purchase-time\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\r\n      <ng-select id=\"purchase-time\" class=\"custom-select\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 formControlName=\"time\">\r\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\r\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\r\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\r\n        </ng-option>\r\n      </ng-select>\r\n    </div>\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-payment\">{{ 'PURCHASE.PAYMENT' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-payment\" formControlName=\"payment\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"blue-button send-button\" *ngIf=\"newPurchase\" [disabled]=\"!purchaseForm.valid\" (click)=\"createPurchase()\">{{ 'PURCHASE.SEND_BUTTON' | translate }}</button>\r\n\r\n  <div class=\"purchase-states\" *ngIf=\"!newPurchase\">\r\n    <ng-container *ngIf=\"currentContract.state == 1 && !currentContract.is_a && currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\r\n      <span>{{ 'PURCHASE.NEED_MONEY' | translate }}</span>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"purchase-buttons\" *ngIf=\"!newPurchase\">\r\n\r\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 1\">\r\n      <button type=\"button\" class=\"green-button\" (click)=\"acceptState();\" [disabled]=\"currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\r\n        {{'PURCHASE.BUTTON_MAKE_PLEDGE' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"ignoredContract();\">{{'PURCHASE.BUTTON_IGNORE' | translate}}</button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!showNullify && !showTimeSelect && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\r\n      <button type=\"button\" class=\"green-button\" (click)=\"dealsDetailsFinish();\" [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_RECEIVED' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"turquoise-button\" (click)=\"showNullify = true;\" [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_NULLIFY' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = true;\" [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_CANCEL_BUYER' | translate}}\r\n      </button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 5\">\r\n      <button type=\"button\" class=\"turquoise-button\" (click)=\"dealsDetailsDontCanceling();\">{{'PURCHASE.BUTTON_NOT_CANCEL' | translate}}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsSellerCancel();\">{{'PURCHASE.BUTTON_CANCEL_SELLER' | translate}}</button>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <div class=\"nullify-block-row\" *ngIf=\"showNullify\">\r\n    <div>{{'PURCHASE.NULLIFY_QUESTION' | translate}}</div>\r\n    <div class=\"nullify-block-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showNullify = false;\">{{ 'PURCHASE.CANCEL' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"productNotGot();\">{{ 'PURCHASE.BUTTON_NULLIFY_SHORT' | translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"time-cancel-block-row\" *ngIf=\"showTimeSelect && !newPurchase && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\r\n    <div class=\"time-cancel-block-question\">{{ 'PURCHASE.WAITING_TIME_QUESTION' | translate }}</div>\r\n    <label for=\"purchase-timeCancel\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\r\n    <div class=\"input-block\">\r\n      <ng-select id=\"purchase-timeCancel\" class=\"custom-select\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 formControlName=\"timeCancel\">\r\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\r\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\r\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\r\n        </ng-option>\r\n      </ng-select>\r\n    </div>\r\n    <div class=\"time-cancel-block-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = false;\">{{ 'PURCHASE.CANCEL' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsCancel();\">{{ 'PURCHASE.BUTTON_CANCEL_BUYER' | translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<div class=\"progress-bar-container\">\r\n  <div class=\"progress-bar\">\r\n    <div class=\"progress-bar-full\" [style.width]=\"getProgressBarWidth()\"></div>\r\n  </div>\r\n  <div class=\"progress-labels\">\r\n\r\n    <ng-container *ngIf=\"newPurchase\">\r\n      <span>{{ 'PURCHASE.STATUS_MESSAGES.NEW_PURCHASE' | translate }}</span>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!newPurchase && currentContract.is_a\">\r\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 120\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 201\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate }}\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 601\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!newPurchase && !currentContract.is_a\">\r\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 201\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate }}\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 601\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n    </ng-container>\r\n\r\n  </div>\r\n  <div class=\"progress-time\" *ngIf=\"!newPurchase\">\r\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time | contractTimeLeft: 0}}</span>\r\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time | contractTimeLeft: 2}}</span>\r\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time | contractTimeLeft: 1}}</span>\r\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time | contractTimeLeft: 1}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/purchase/purchase.component.scss":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  margin: -3rem -3rem 0; }\n\n.form-purchase {\n  flex: 1 1 auto;\n  margin: 1.5rem -3rem 0;\n  padding: 0 3rem;\n  overflow-y: overlay; }\n\n.form-purchase .input-blocks-row {\n    display: flex; }\n\n.form-purchase .input-blocks-row .input-block {\n      flex-basis: 50%; }\n\n.form-purchase .input-blocks-row .input-block:first-child {\n        margin-right: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block:last-child {\n        margin-left: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block .checkbox-block {\n        display: flex; }\n\n.form-purchase .purchase-select {\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    font-size: 1.3rem;\n    line-height: 1.3rem;\n    margin: 1.5rem 0 0;\n    padding: 0;\n    width: 100%;\n    max-width: 15rem;\n    height: 1.3rem; }\n\n.form-purchase .purchase-select .arrow {\n      margin-left: 1rem;\n      width: 0.8rem;\n      height: 0.8rem; }\n\n.form-purchase .purchase-select .arrow.down {\n        -webkit-mask: url('arrow-down.svg') no-repeat center;\n                mask: url('arrow-down.svg') no-repeat center; }\n\n.form-purchase .purchase-select .arrow.up {\n        -webkit-mask: url('arrow-up.svg') no-repeat center;\n                mask: url('arrow-up.svg') no-repeat center; }\n\n.form-purchase .additional-details {\n    display: flex;\n    margin-top: 1.5rem;\n    padding: 0.5rem 0 2rem; }\n\n.form-purchase .additional-details > div {\n      flex-basis: 25%; }\n\n.form-purchase .additional-details > div:first-child {\n        padding-left: 1.5rem;\n        padding-right: 1rem; }\n\n.form-purchase .additional-details > div:last-child {\n        padding-left: 1rem;\n        padding-right: 1.5rem; }\n\n.form-purchase .purchase-states {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    line-height: 2.9rem; }\n\n.form-purchase .send-button {\n    margin: 2.4rem 0;\n    width: 100%;\n    max-width: 15rem; }\n\n.form-purchase .purchase-buttons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 2.4rem -0.5rem; }\n\n.form-purchase .purchase-buttons button {\n      flex: 0 1 33%;\n      margin: 0 0.5rem; }\n\n.form-purchase .nullify-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.form-purchase .time-cancel-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-question {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .input-block {\n      width: 25%; }\n\n.form-purchase .time-cancel-block-row label {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n\n.progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n\n.progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n\n.progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    height: 100%; }\n\n.progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxwdXJjaGFzZVxccHVyY2hhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBSnJCO0lBT0ksYUFBYSxFQUFBOztBQVBqQjtNQVVNLGVBQWUsRUFBQTs7QUFWckI7UUFhUSxvQkFBb0IsRUFBQTs7QUFiNUI7UUFpQlEsbUJBQW1CLEVBQUE7O0FBakIzQjtRQXFCUSxhQUFhLEVBQUE7O0FBckJyQjtJQTJCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBOztBQXJDbEI7TUF3Q00saUJBQWlCO01BQ2pCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBMUNwQjtRQTZDUSxvREFBNEQ7Z0JBQTVELDRDQUE0RCxFQUFBOztBQTdDcEU7UUFpRFEsa0RBQTBEO2dCQUExRCwwQ0FBMEQsRUFBQTs7QUFqRGxFO0lBdURJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7O0FBekQxQjtNQTRETSxlQUFlLEVBQUE7O0FBNURyQjtRQStEUSxvQkFBb0I7UUFDcEIsbUJBQW1CLEVBQUE7O0FBaEUzQjtRQW9FUSxrQkFBa0I7UUFDbEIscUJBQXFCLEVBQUE7O0FBckU3QjtJQTJFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBOztBQWhGdkI7SUFvRkksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUF0RnBCO0lBMEZJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCLEVBQUE7O0FBNUYxQjtNQStGTSxhQUFhO01BQ2IsZ0JBQWdCLEVBQUE7O0FBaEd0QjtJQXFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUF4RzNCO01BMkdNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxXQUFXLEVBQUE7O0FBL0dqQjtRQWtIUSxhQUFhO1FBQ2IsZ0JBQWdCLEVBQUE7O0FBbkh4QjtJQXlISSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUE1SDNCO01BK0hNLG1CQUFtQixFQUFBOztBQS9IekI7TUFtSU0sVUFBVSxFQUFBOztBQW5JaEI7TUF1SU0sbUJBQW1CLEVBQUE7O0FBdkl6QjtNQTJJTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsV0FBVyxFQUFBOztBQS9JakI7UUFrSlEsYUFBYTtRQUNiLGdCQUFnQixFQUFBOztBQU94QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQU5kO0lBU0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixjQUFjLEVBQUE7O0FBZGxCO01BaUJNLGNBQWMsRUFBQTs7QUFqQnBCO0lBc0JJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7O0FBMUJoQjtJQThCSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdXJjaGFzZS9wdXJjaGFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBtYXJnaW46IC0zcmVtIC0zcmVtIDA7XHJcbn1cclxuXHJcbi5mb3JtLXB1cmNoYXNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtYXJnaW46IDEuNXJlbSAtM3JlbSAwO1xyXG4gIHBhZGRpbmc6IDAgM3JlbTtcclxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG5cclxuICAuaW5wdXQtYmxvY2tzLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGVja2JveC1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnB1cmNoYXNlLXNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogMS4zcmVtO1xyXG5cclxuICAgIC5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICB3aWR0aDogMC44cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuOHJlbTtcclxuXHJcbiAgICAgICYuZG93biB7XHJcbiAgICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LWRvd24uc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnVwIHtcclxuICAgICAgICBtYXNrOiB1cmwofnNyYy9hc3NldHMvaWNvbnMvYXJyb3ctdXAuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkaXRpb25hbC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAycmVtO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZmxleC1iYXNpczogMjUlO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHVyY2hhc2Utc3RhdGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi45cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlbmQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMi40cmVtIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgfVxyXG5cclxuICAucHVyY2hhc2UtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAyLjRyZW0gLTAuNXJlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmbGV4OiAwIDEgMzMlO1xyXG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm51bGxpZnktYmxvY2stcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5udWxsaWZ5LWJsb2NrLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aW1lLWNhbmNlbC1ibG9jay1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnRpbWUtY2FuY2VsLWJsb2NrLXF1ZXN0aW9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtYmxvY2sge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGltZS1jYW5jZWwtYmxvY2stYnV0dG9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3JlbTtcclxuXHJcbiAgLnByb2dyZXNzLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0wLjdyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwIDNyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7XHJcbiAgICBoZWlnaHQ6IDAuN3JlbTtcclxuXHJcbiAgICAucHJvZ3Jlc3MtYmFyLWZ1bGwge1xyXG4gICAgICBoZWlnaHQ6IDAuN3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1sYWJlbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLXRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3JlbTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
/*!************************************************!*\
  !*** ./src/app/purchase/purchase.component.ts ***!
  \************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(route, backend, variablesService, modalService, ngZone, location, intToMoneyPipe) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.intToMoneyPipe = intToMoneyPipe;
        this.isOpen = false;
        this.localAliases = [];
        this.newPurchase = false;
        this.purchaseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            seller: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (g.value === _this.variablesService.currentWallet.address) {
                        return { 'address_same': true };
                    }
                    return null;
                }, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status) {
                                _this.ngZone.run(function () {
                                    if (valid_status === false) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status, alias_data) {
                                    _this.ngZone.run(function () {
                                        if (alias_status) {
                                            if (alias_data.address === _this.variablesService.currentWallet.address) {
                                                g.setErrors(Object.assign({ 'address_same': true }, g.errors));
                                            }
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (parseFloat(g.value) === 0) {
                        return { 'amount_zero': true };
                    }
                    return null;
                }]),
            yourDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sellerDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sameAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: false, disabled: false }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.variablesService.default_fee),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            timeCancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.additionalOptions = false;
        this.currentContract = null;
        this.showTimeSelect = false;
        this.showNullify = false;
    }
    PurchaseComponent.prototype.checkAndChangeHistory = function () {
        var _this = this;
        if (this.currentContract.state === 201) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 8 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
        else if (this.currentContract.state === 601) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 12 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
    };
    PurchaseComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.purchaseForm.get('seller').value && this.purchaseForm.get('seller').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    PurchaseComponent.prototype.setAlias = function (alias) {
        this.purchaseForm.get('seller').setValue(alias);
    };
    PurchaseComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'purchase-seller' && this.isOpen) {
            this.isOpen = false;
        }
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function (params) {
            _this.currentWalletId = params['id'];
        });
        this.subRouting = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.currentContract = _this.variablesService.currentWallet.getContract(params['id']);
                _this.purchaseForm.controls['seller'].setValidators([]);
                _this.purchaseForm.updateValueAndValidity();
                _this.purchaseForm.setValue({
                    description: _this.currentContract.private_detailes.t,
                    seller: _this.currentContract.private_detailes.b_addr,
                    amount: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.to_pay),
                    yourDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.a_pledge),
                    sellerDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.b_pledge),
                    sameAmount: _this.currentContract.private_detailes.to_pay.isEqualTo(_this.currentContract.private_detailes.b_pledge),
                    comment: _this.currentContract.private_detailes.c,
                    fee: _this.variablesService.default_fee,
                    time: 12,
                    timeCancel: 12,
                    payment: _this.currentContract.payment_id
                });
                _this.purchaseForm.get('sameAmount').disable();
                _this.newPurchase = false;
                if (_this.currentContract.is_new) {
                    if (_this.currentContract.is_a && _this.currentContract.state === 2) {
                        _this.currentContract.state = 120;
                    }
                    if (_this.currentContract.state === 130 && _this.currentContract.cancel_expiration_time !== 0 && _this.currentContract.cancel_expiration_time < _this.variablesService.exp_med_ts) {
                        _this.currentContract.state = 2;
                    }
                    _this.variablesService.settings.viewedContracts = (_this.variablesService.settings.viewedContracts) ? _this.variablesService.settings.viewedContracts : [];
                    var findViewedCont = false;
                    for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                        if (_this.variablesService.settings.viewedContracts[j].contract_id === _this.currentContract.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === _this.currentContract.is_a) {
                            _this.variablesService.settings.viewedContracts[j].state = _this.currentContract.state;
                            findViewedCont = true;
                            break;
                        }
                    }
                    if (!findViewedCont) {
                        _this.variablesService.settings.viewedContracts.push({
                            contract_id: _this.currentContract.contract_id,
                            is_a: _this.currentContract.is_a,
                            state: _this.currentContract.state
                        });
                    }
                    _this.currentContract.is_new = false;
                    setTimeout(function () {
                        _this.variablesService.currentWallet.recountNewContracts();
                    }, 0);
                }
                _this.checkAndChangeHistory();
            }
            else {
                _this.newPurchase = true;
            }
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (_this.currentContract && _this.currentContract.state === 201 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 2;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
            else if (_this.currentContract && _this.currentContract.state === 601 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 6;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
        });
    };
    PurchaseComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    PurchaseComponent.prototype.getProgressBarWidth = function () {
        var progress = '0';
        if (!this.newPurchase) {
            if (this.currentContract) {
                if (this.currentContract.state === 1) {
                    progress = '10%';
                }
                if (this.currentContract.state === 201) {
                    progress = '25%';
                }
                if ([120, 2].indexOf(this.currentContract.state) !== -1) {
                    progress = '50%';
                }
                if ([5, 601].indexOf(this.currentContract.state) !== -1) {
                    progress = '75%';
                }
                if ([110, 130, 140, 3, 4, 6].indexOf(this.currentContract.state) !== -1) {
                    progress = '100%';
                }
            }
        }
        return progress;
    };
    PurchaseComponent.prototype.sameAmountChange = function () {
        if (this.purchaseForm.get('sameAmount').value) {
            this.purchaseForm.get('sellerDeposit').clearValidators();
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
        }
        else {
            this.purchaseForm.get('sellerDeposit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
        }
    };
    PurchaseComponent.prototype.createPurchase = function () {
        var _this = this;
        if (this.purchaseForm.valid) {
            var sellerDeposit_1 = this.purchaseForm.get('sameAmount').value ? this.purchaseForm.get('amount').value : this.purchaseForm.get('sellerDeposit').value;
            if (this.purchaseForm.get('seller').value.indexOf('@') !== 0) {
                this.backend.createProposal(this.variablesService.currentWallet.wallet_id, this.purchaseForm.get('description').value, this.purchaseForm.get('comment').value, this.variablesService.currentWallet.address, this.purchaseForm.get('seller').value, this.purchaseForm.get('amount').value, this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, this.purchaseForm.get('time').value, this.purchaseForm.get('payment').value, function (create_status) {
                    if (create_status) {
                        _this.back();
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.purchaseForm.get('seller').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.purchaseForm.get('seller').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.createProposal(_this.variablesService.currentWallet.wallet_id, _this.purchaseForm.get('description').value, _this.purchaseForm.get('comment').value, _this.variablesService.currentWallet.address, alias_data.address, _this.purchaseForm.get('amount').value, _this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, _this.purchaseForm.get('time').value, _this.purchaseForm.get('payment').value, function (create_status) {
                                if (create_status) {
                                    _this.back();
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    PurchaseComponent.prototype.back = function () {
        this.location.back();
    };
    PurchaseComponent.prototype.acceptState = function () {
        var _this = this;
        this.backend.acceptProposal(this.currentWalletId, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.ACCEPT_STATE_WAIT_BIG');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ignoredContract = function () {
        this.variablesService.settings.notViewedContracts = (this.variablesService.settings.notViewedContracts) ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 110;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 110,
                time: this.currentContract.expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 110;
        this.currentContract.time = this.currentContract.expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_ACCEPT');
        this.back();
    };
    PurchaseComponent.prototype.productNotGot = function () {
        var _this = this;
        this.backend.releaseProposal(this.currentWalletId, this.currentContract.contract_id, 'REL_B', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.BURN_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsFinish = function () {
        var _this = this;
        this.backend.releaseProposal(this.currentWalletId, this.currentContract.contract_id, 'REL_N', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('success', 'PURCHASE.SUCCESS_FINISH_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsCancel = function () {
        var _this = this;
        this.backend.requestCancelContract(this.currentWalletId, this.currentContract.contract_id, this.purchaseForm.get('timeCancel').value, function (cancel_status) {
            if (cancel_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.SEND_CANCEL_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsDontCanceling = function () {
        this.variablesService.settings.notViewedContracts = this.variablesService.settings.notViewedContracts ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 130;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.cancel_expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 130,
                time: this.currentContract.cancel_expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 130;
        this.currentContract.time = this.currentContract.cancel_expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_CANCEL');
        this.back();
    };
    PurchaseComponent.prototype.dealsDetailsSellerCancel = function () {
        var _this = this;
        this.backend.acceptCancelContract(this.currentWalletId, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.DEALS_CANCELED_WAIT');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.subRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PurchaseComponent.prototype, "onClick", null);
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.scss */ "./src/app/purchase/purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/receive/receive.component.html":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-qr\">\r\n  <img src=\"{{qrImageSrc}}\" alt=\"qr-code\">\r\n  <div class=\"wrap-address\">\r\n    <div class=\"address\">{{variablesService.currentWallet.address}}</div>\r\n    <button type=\"button\" class=\"btn-copy-address\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/receive/receive.component.scss":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-qr {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.wrap-qr img {\n    margin: 4rem 0; }\n\n.wrap-qr .wrap-address {\n    display: flex;\n    align-items: center;\n    font-size: 1.4rem;\n    line-height: 2.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address {\n      margin-left: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address.copy {\n        -webkit-mask: url('copy.svg') no-repeat center;\n                mask: url('copy.svg') no-repeat center; }\n\n.wrap-qr .wrap-address .btn-copy-address.copy:hover {\n          opacity: 0.75; }\n\n.wrap-qr .wrap-address .btn-copy-address.copied {\n        -webkit-mask: url('complete-testwallet.svg') no-repeat center;\n                mask: url('complete-testwallet.svg') no-repeat center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZS9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHJlY2VpdmVcXHJlY2VpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUhyQjtJQU1JLGNBQWMsRUFBQTs7QUFObEI7SUFVSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUFidkI7TUFnQk0sbUJBQW1CO01BQ25CLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBbEJwQjtRQXFCUSw4Q0FBdUQ7Z0JBQXZELHNDQUF1RCxFQUFBOztBQXJCL0Q7VUF3QlUsYUFBYSxFQUFBOztBQXhCdkI7UUE2QlEsNkRBQXNFO2dCQUF0RSxxREFBc0UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlY2VpdmUvcmVjZWl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndyYXAtcXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgfVxyXG5cclxuICAud3JhcC1hZGRyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi43cmVtO1xyXG5cclxuICAgIC5idG4tY29weS1hZGRyZXNzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxuICAgICAgd2lkdGg6IDEuN3JlbTtcclxuICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gICAgICAmLmNvcHkge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY29weS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29waWVkIHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvbXBsZXRlLXRlc3R3YWxsZXQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/receive/receive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/receive/receive.component.ts ***!
  \**********************************************/
/*! exports provided: ReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveComponent", function() { return ReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(route, backend, variablesService) {
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.copyAnimation = false;
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            qrcode__WEBPACK_IMPORTED_MODULE_1___default.a.toDataURL(_this.variablesService.currentWallet.address, {
                width: 106,
                height: 106
            }).then(function (url) {
                _this.qrImageSrc = url;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    ReceiveComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    ReceiveComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        clearTimeout(this.copyAnimationTimeout);
    };
    ReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receive',
            template: __webpack_require__(/*! ./receive.component.html */ "./src/app/receive/receive.component.html"),
            styles: [__webpack_require__(/*! ./receive.component.scss */ "./src/app/receive/receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.RESTORE_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-restore\" [formGroup]=\"restoreForm\">\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"wallet-name\">{{ 'RESTORE_WALLET.LABEL_NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [attr.readonly]=\"walletSaved ? '' : null\" [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['name'].invalid && (restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched)\">\r\n        <div *ngIf=\"restoreForm.controls['name'].errors['required']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"restoreForm.controls['name'].errors['duplicate']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'RESTORE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"wallet-password\">{{ 'RESTORE_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"confirm-wallet-password\">{{ 'RESTORE_WALLET.CONFIRM' | translate }}</label>\r\n      <input type=\"password\" id=\"confirm-wallet-password\" formControlName=\"confirm\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['confirm'].dirty && restoreForm.errors\">\r\n        <div *ngIf=\"restoreForm.errors['confirm_mismatch']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"phrase-key\">{{ 'RESTORE_WALLET.LABEL_PHRASE_KEY' | translate }}</label>\r\n      <input type=\"text\" id=\"phrase-key\" formControlName=\"key\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['key'].invalid && (restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched)\">\r\n        <div *ngIf=\"restoreForm.controls['key'].errors['required']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.KEY_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"restoreForm.controls['key'].errors['key_not_valid']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.KEY_NOT_VALID' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"transparent-button\" *ngIf=\"walletSaved\" disabled><i class=\"icon\"></i>{{walletSavedName}}</button>\r\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\" [disabled]=\"!restoreForm.valid\" *ngIf=\"!walletSaved\">{{ 'RESTORE_WALLET.BUTTON_SELECT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"createWallet()\" [disabled]=\"!walletSaved\">{{ 'RESTORE_WALLET.BUTTON_CREATE' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n<app-progress-container [width]=\"progressWidth\" [labels]=\"['PROGRESS.ADD_WALLET', 'PROGRESS.SELECT_LOCATION', 'PROGRESS.RESTORE_WALLET']\"></app-progress-container>\r\n"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-restore {\n  margin: 2.4rem 0;\n  width: 100%; }\n\n.form-restore .input-block.half-block {\n    width: 50%; }\n\n.form-restore .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem;\n    width: 50%; }\n\n.form-restore .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-restore .wrap-buttons button.transparent-button {\n        flex-basis: 50%; }\n\n.form-restore .wrap-buttons button.select-button {\n        flex-basis: 60%; }\n\n.form-restore .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdG9yZS13YWxsZXQvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxyZXN0b3JlLXdhbGxldFxccmVzdG9yZS13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUZiO0lBT00sVUFBVSxFQUFBOztBQVBoQjtJQVlJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVSxFQUFBOztBQWRkO01BaUJNLGdCQUFnQixFQUFBOztBQWpCdEI7UUFvQlEsZUFBZSxFQUFBOztBQXBCdkI7UUF3QlEsZUFBZSxFQUFBOztBQXhCdkI7UUE0QlEsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVzdG9yZS13YWxsZXQvcmVzdG9yZS13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9ybS1yZXN0b3JlIHtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuaW5wdXQtYmxvY2sge1xyXG5cclxuICAgICYuaGFsZi1ibG9jayB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgMC43cmVtO1xyXG5cclxuICAgICAgJi50cmFuc3BhcmVudC1idXR0b24ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3QtYnV0dG9uIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3JlYXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgZmxleDogMSAxIDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.ts ***!
  \************************************************************/
/*! exports provided: RestoreWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreWalletComponent", function() { return RestoreWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RestoreWalletComponent = /** @class */ (function () {
    function RestoreWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.restoreForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, function (g) {
            return g.get('password').value === g.get('confirm').value ? null : { 'confirm_mismatch': true };
        });
        this.wallet = {
            id: ''
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
    }
    RestoreWalletComponent.prototype.ngOnInit = function () { };
    RestoreWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.router.navigate(['/seed-phrase'], { queryParams: { wallet_id: _this.wallet.id } });
        });
    };
    RestoreWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.restoreForm.valid && this.restoreForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.isValidRestoreWalletText(this.restoreForm.get('key').value, function (valid_status, valid_data) {
                if (valid_data !== 'TRUE') {
                    _this.ngZone.run(function () {
                        _this.restoreForm.get('key').setErrors({ key_not_valid: true });
                    });
                }
                else {
                    _this.backend.saveFileDialog(_this.translate.instant('RESTORE_WALLET.CHOOSE_PATH'), '*', _this.variablesService.settings.default_path, function (save_status, save_data) {
                        if (save_status) {
                            _this.variablesService.settings.default_path = save_data.path.substr(0, save_data.path.lastIndexOf('/'));
                            _this.walletSavedName = save_data.path.substr(save_data.path.lastIndexOf('/') + 1, save_data.path.length - 1);
                            _this.backend.restoreWallet(save_data.path, _this.restoreForm.get('password').value, _this.restoreForm.get('key').value, function (restore_status, restore_data) {
                                if (restore_status) {
                                    _this.wallet.id = restore_data.wallet_id;
                                    _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](restore_data.wallet_id, _this.restoreForm.get('name').value, _this.restoreForm.get('password').value, restore_data['wi'].path, restore_data['wi'].address, restore_data['wi'].balance, restore_data['wi'].unlocked_balance, restore_data['wi'].mined_total, restore_data['wi'].tracking_hey);
                                    _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(_this.variablesService.opening_wallet.address);
                                    if (restore_data.recent_history && restore_data.recent_history.history) {
                                        _this.variablesService.opening_wallet.prepareHistory(restore_data.recent_history.history);
                                    }
                                    _this.backend.getContracts(_this.variablesService.opening_wallet.wallet_id, function (contracts_status, contracts_data) {
                                        if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                            _this.ngZone.run(function () {
                                                _this.variablesService.opening_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                            });
                                        }
                                    });
                                    _this.ngZone.run(function () {
                                        _this.walletSaved = true;
                                        _this.progressWidth = '50%';
                                    });
                                }
                                else {
                                    _this.modalService.prepareModal('error', 'RESTORE_WALLET.NOT_CORRECT_FILE_OR_PASSWORD');
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    RestoreWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restore-wallet',
            template: __webpack_require__(/*! ./restore-wallet.component.html */ "./src/app/restore-wallet/restore-wallet.component.html"),
            styles: [__webpack_require__(/*! ./restore-wallet.component.scss */ "./src/app/restore-wallet/restore-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], RestoreWalletComponent);
    return RestoreWalletComponent;
}());



/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.html":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.SAVE_PHRASE' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <h3 class=\"seed-phrase-title\">{{ 'SEED_PHRASE.TITLE' | translate }}</h3>\r\n\r\n  <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\r\n    <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\r\n      <div class=\"word\">{{(index + 1) + '. ' + word}}</div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"wrap-buttons\">\r\n    <button type=\"button\" class=\"blue-button seed-phrase-button\" (click)=\"runWallet()\">{{ 'SEED_PHRASE.BUTTON_CREATE_ACCOUNT' | translate }}</button>\r\n    <button type=\"button\" class=\"blue-button copy-button\" (click)=\"copySeedPhrase()\">{{ 'SEED_PHRASE.BUTTON_COPY' | translate }}</button>\r\n  </div>\r\n</div>\r\n\r\n<app-progress-container [width]=\"'100%'\" [labels]=\"['PROGRESS.ADD_WALLET', 'PROGRESS.SELECT_LOCATION', 'PROGRESS.CREATE_WALLET']\"></app-progress-container>\r\n"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.scss":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.seed-phrase-title {\n  line-height: 2.2rem;\n  padding: 2.2rem 0; }\n\n.seed-phrase-content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1.4rem;\n  width: 100%;\n  height: 12rem; }\n\n.seed-phrase-content .word {\n    line-height: 2.2rem;\n    max-width: 13rem; }\n\n.wrap-buttons {\n  display: flex; }\n\n.wrap-buttons .seed-phrase-button {\n    margin: 2.8rem 0;\n    width: 25%;\n    min-width: 1.5rem; }\n\n.wrap-buttons .copy-button {\n    margin: 2.8rem 1rem;\n    width: 25%;\n    min-width: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VlZC1waHJhc2UvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzZWVkLXBocmFzZVxcc2VlZC1waHJhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBTmY7SUFTSSxtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsYUFBYSxFQUFBOztBQURmO0lBSUksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUIsRUFBQTs7QUFOckI7SUFVSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VlZC1waHJhc2Uvc2VlZC1waHJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VlZC1waHJhc2UtdGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgcGFkZGluZzogMi4ycmVtIDA7XHJcbn1cclxuXHJcbi5zZWVkLXBocmFzZS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDEuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEycmVtO1xyXG5cclxuICAud29yZCB7XHJcbiAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi53cmFwLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5zZWVkLXBocmFzZS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAyLjhyZW0gMDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtaW4td2lkdGg6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb3B5LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIuOHJlbSAxcmVtO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1pbi13aWR0aDogMS41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.ts":
/*!******************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.ts ***!
  \******************************************************/
/*! exports provided: SeedPhraseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedPhraseComponent", function() { return SeedPhraseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeedPhraseComponent = /** @class */ (function () {
    function SeedPhraseComponent(route, router, location, backend, variablesService, modalService, ngZone) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.seedPhrase = '';
        this.seedPhraseCopied = false;
    }
    SeedPhraseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.wallet_id) {
                _this.wallet_id = params.wallet_id;
                _this.backend.getSmartWalletInfo(params.wallet_id, function (status, data) {
                    if (data.hasOwnProperty('restore_key')) {
                        _this.ngZone.run(function () {
                            _this.seedPhrase = data['restore_key'].trim();
                        });
                    }
                });
            }
        });
    };
    SeedPhraseComponent.prototype.runWallet = function () {
        var _this = this;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet_id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.wallet_id]);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet_id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    SeedPhraseComponent.prototype.copySeedPhrase = function () {
        var _this = this;
        this.backend.setClipboard(this.seedPhrase, function () {
            _this.ngZone.run(function () {
                _this.seedPhraseCopied = true;
            });
        });
    };
    SeedPhraseComponent.prototype.back = function () {
        this.location.back();
    };
    SeedPhraseComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    SeedPhraseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed-phrase',
            template: __webpack_require__(/*! ./seed-phrase.component.html */ "./src/app/seed-phrase/seed-phrase.component.html"),
            styles: [__webpack_require__(/*! ./seed-phrase.component.scss */ "./src/app/seed-phrase/seed-phrase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SeedPhraseComponent);
    return SeedPhraseComponent;
}());



/***/ }),

/***/ "./src/app/send-modal/send-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"title\">\r\n    <span>{{ 'CONFIRM.TITLE' | translate }}</span>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"message-container\">\r\n      <div class=\"message-block\">\r\n        <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.SEND' | translate }}</div>\r\n        <div class=\"message-text\">{{ form.get('amount').value }} {{variablesService.defaultCurrency}}</div>\r\n      </div>\r\n      <div class=\"message-block\">\r\n        <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.FROM' | translate }}</div>\r\n        <div class=\"message-text\">{{ variablesService.currentWallet.address }}</div>\r\n      </div>\r\n      <div class=\"message-block\">\r\n        <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.TO' | translate }}</div>\r\n        <div class=\"message-text\">{{ form.get('address').value }}</div>\r\n      </div>\r\n      <ng-container *ngIf=\"form.get('comment').value != ''\">\r\n        <div class=\"message-block\" *ngIf=\"form.get('comment').value != null\">\r\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.COMMENT' | translate }}</div>\r\n          <div class=\"message-text\">{{ form.get('comment').value }}</div>\r\n        </div>  \r\n      </ng-container>   \r\n    </div>\r\n  </div>\r\n  <div class=\"wrapper-buttons\">\r\n    <button type=\"button\" class=\"blue-button\" (click)=\"confirm()\">{{ 'CONFIRM.BUTTON_CONFIRM' | translate }}</button>\r\n    <button type=\"button\" class=\"blue-button\" (click)=\"onClose()\">{{ 'CONFIRM.BUTTON_CANCEL' | translate }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 0.3rem 3rem 3rem 3rem;\n  width: 64rem; }\n\n.modal .title {\n    padding: 1.4rem 0;\n    font-size: 1.8rem;\n    line-height: 3rem; }\n\n.modal .content {\n    display: flex;\n    font-size: 1.4rem; }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin: 1.4rem 3rem 6.2rem 0; }\n\n.modal .content .message-container .message-block {\n        display: flex;\n        margin-bottom: 1rem; }\n\n.modal .content .message-container .message-block:first-child .message-label {\n          line-height: 4rem; }\n\n.modal .content .message-container .message-block:first-child .message-text {\n          line-height: 4rem; }\n\n.modal .content .message-container .message-block:last-child {\n          margin-bottom: 0; }\n\n.modal .content .message-container .message-block .message-label {\n          min-width: 6.7rem;\n          line-height: 2rem; }\n\n.modal .content .message-container .message-block .message-text {\n          overflow-wrap: break-word;\n          margin-left: 4.8rem;\n          width: 43.4rem;\n          line-height: 2rem; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 100%;\n      max-width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tb2RhbC9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNlbmQtbW9kYWxcXHNlbmQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLFlBQVksRUFBQTs7QUFQZDtJQVVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBWnJCO0lBZ0JJLGFBQWE7SUFDYixpQkFBaUIsRUFBQTs7QUFqQnJCO01Bb0JNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHVCQUF1QjtNQUN2Qiw0QkFBNEIsRUFBQTs7QUF4QmxDO1FBMkJRLGFBQWE7UUFDYixtQkFBbUIsRUFBQTs7QUE1QjNCO1VBaUNZLGlCQUFpQixFQUFBOztBQWpDN0I7VUFxQ1ksaUJBQWlCLEVBQUE7O0FBckM3QjtVQTBDVSxnQkFBZ0IsRUFBQTs7QUExQzFCO1VBOENVLGlCQUFpQjtVQUNqQixpQkFBaUIsRUFBQTs7QUEvQzNCO1VBbURVLHlCQUF5QjtVQUN6QixtQkFBbUI7VUFDbkIsY0FBYztVQUNkLGlCQUFpQixFQUFBOztBQXREM0I7SUE4REksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUFoRWxDO01BbUVNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbmQtbW9kYWwvc2VuZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAzcmVtIDNyZW0gM3JlbTtcclxuICB3aWR0aDogNjRyZW07XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxLjRyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcblxyXG4gICAgLm1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDEuNHJlbSAzcmVtIDYuMnJlbSAwO1xyXG4gICAgICBcclxuICAgICAgLm1lc3NhZ2UtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcblxyXG4gICAgICAgICAgLm1lc3NhZ2UtbGFiZWwge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVzc2FnZS10ZXh0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlLWxhYmVsIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogNi43cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZS10ZXh0IHtcclxuICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNC44cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDQzLjRyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud3JhcHBlci1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.ts ***!
  \****************************************************/
/*! exports provided: SendModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendModalComponent", function() { return SendModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendModalComponent = /** @class */ (function () {
    function SendModalComponent(variablesService) {
        this.variablesService = variablesService;
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SendModalComponent.prototype.ngOnInit = function () {
    };
    SendModalComponent.prototype.confirm = function () {
        this.confirmed.emit(true);
    };
    SendModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], SendModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SendModalComponent.prototype, "confirmed", void 0);
    SendModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-modal',
            template: __webpack_require__(/*! ./send-modal.component.html */ "./src/app/send-modal/send-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-modal.component.scss */ "./src/app/send-modal/send-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], SendModalComponent);
    return SendModalComponent;
}());



/***/ }),

/***/ "./src/app/send/send.component.html":
/*!******************************************!*\
  !*** ./src/app/send/send.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-send\" [formGroup]=\"sendForm\" (ngSubmit)=\"showDialog()\">\r\n\r\n  <div class=\"input-block input-block-alias\">\r\n    <label for=\"send-address\">{{ 'SEND.ADDRESS' | translate }}</label>\r\n\r\n    <input type=\"text\" id=\"send-address\" formControlName=\"address\" (mousedown)=\"addressMouseDown($event)\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n\r\n    <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\r\n      <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\r\n    </div>\r\n\r\n    <div class=\"error-block\" *ngIf=\"sendForm.controls['address'].invalid && (sendForm.controls['address'].dirty || sendForm.controls['address'].touched)\">\r\n      <div *ngIf=\"sendForm.controls['address'].errors['required']\">\r\n        {{ 'SEND.FORM_ERRORS.ADDRESS_REQUIRED' | translate }}\r\n      </div>\r\n      <div *ngIf=\"sendForm.controls['address'].errors['address_not_valid']\">\r\n        {{ 'SEND.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\r\n      </div>\r\n      <div *ngIf=\"sendForm.controls['address'].errors['alias_not_valid']\">\r\n        {{ 'SEND.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-amount\">{{ 'SEND.AMOUNT' | translate }}</label>\r\n      <input type=\"text\" id=\"send-amount\" formControlName=\"amount\" appInputValidate=\"money\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.controls['amount'].invalid && (sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched)\">\r\n        <div *ngIf=\"sendForm.controls['amount'].errors['required']\">\r\n          {{ 'SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"sendForm.controls['amount'].errors['zero']\">\r\n          {{ 'SEND.FORM_ERRORS.AMOUNT_ZERO' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-comment\">{{ 'SEND.COMMENT' | translate }}</label>\r\n      <input type=\"text\" id=\"send-comment\" formControlName=\"comment\" [maxLength]=\"variablesService.maxCommentLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.get('comment').value && sendForm.get('comment').value.length >= variablesService.maxCommentLength\">\r\n        {{ 'SEND.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"send-select\" (click)=\"toggleOptions()\">\r\n    <span>{{ 'SEND.DETAILS' | translate }}</span><i class=\"icon arrow\" [class.down]=\"!additionalOptions\" [class.up]=\"additionalOptions\"></i>\r\n  </button>\r\n\r\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-mixin\">{{ 'SEND.MIXIN' | translate }}</label>\r\n      <input type=\"text\" id=\"send-mixin\" formControlName=\"mixin\" appInputValidate=\"integer\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.controls['mixin'].invalid && (sendForm.controls['mixin'].dirty || sendForm.controls['mixin'].touched)\">\r\n        <div *ngIf=\"sendForm.controls['mixin'].errors['required']\">\r\n          {{ 'SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-fee\">{{ 'SEND.FEE' | translate }}</label>\r\n      <input type=\"text\" id=\"send-fee\" formControlName=\"fee\" appInputValidate=\"money\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.controls['fee'].invalid && (sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched)\">\r\n        <div *ngIf=\"sendForm.controls['fee'].errors['required']\">\r\n          {{ 'SEND.FORM_ERRORS.FEE_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"sendForm.controls['fee'].errors['less_min']\">\r\n          {{ 'SEND.FORM_ERRORS.FEE_MINIMUM' | translate : {fee: variablesService.default_fee} }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"checkbox-block\">\r\n      <input type=\"checkbox\" id=\"send-hide\" class=\"style-checkbox\" formControlName=\"hide\">\r\n      <label for=\"send-hide\">{{ 'SEND.HIDE' | translate }}</label>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"blue-button\" [disabled]=\"!sendForm.valid || !variablesService.currentWallet.loaded\">{{ 'SEND.BUTTON' | translate }}</button>\r\n\r\n  <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"sendForm\" (confirmed)=\"confirmed($event)\"></app-send-modal>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/send/send.component.scss":
/*!******************************************!*\
  !*** ./src/app/send/send.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.form-send .input-blocks-row {\n  display: flex; }\n\n.form-send .input-blocks-row > div {\n    flex-basis: 50%; }\n\n.form-send .input-blocks-row > div:first-child {\n      margin-right: 1.5rem; }\n\n.form-send .input-blocks-row > div:last-child {\n      margin-left: 1.5rem; }\n\n.form-send .send-select {\n  display: flex;\n  align-items: center;\n  background: transparent;\n  border: none;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  margin: 1.5rem 0 0;\n  padding: 0;\n  width: 100%;\n  max-width: 15rem;\n  height: 1.3rem; }\n\n.form-send .send-select .arrow {\n    margin-left: 1rem;\n    width: 0.8rem;\n    height: 0.8rem; }\n\n.form-send .send-select .arrow.down {\n      -webkit-mask: url('arrow-down.svg') no-repeat center;\n              mask: url('arrow-down.svg') no-repeat center; }\n\n.form-send .send-select .arrow.up {\n      -webkit-mask: url('arrow-up.svg') no-repeat center;\n              mask: url('arrow-up.svg') no-repeat center; }\n\n.form-send .additional-details {\n  display: flex;\n  margin-top: 1.5rem;\n  padding: 0.5rem 0 2rem; }\n\n.form-send .additional-details > div {\n    flex-basis: 25%; }\n\n.form-send .additional-details > div:first-child {\n      padding-left: 1.5rem;\n      padding-right: 1rem; }\n\n.form-send .additional-details > div:last-child {\n      padding-left: 1rem;\n      padding-right: 1.5rem; }\n\n.form-send .additional-details .checkbox-block {\n    flex-basis: 50%; }\n\n.form-send .additional-details .checkbox-block > label {\n      top: 3.5rem; }\n\n.form-send button {\n  margin: 2.4rem 0;\n  width: 100%;\n  max-width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNlbmRcXHNlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFHSSxhQUFhLEVBQUE7O0FBSGpCO0lBTU0sZUFBZSxFQUFBOztBQU5yQjtNQVNRLG9CQUFvQixFQUFBOztBQVQ1QjtNQWFRLG1CQUFtQixFQUFBOztBQWIzQjtFQW1CSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQTdCbEI7SUFnQ00saUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBbENwQjtNQXFDUSxvREFBNEQ7Y0FBNUQsNENBQTRELEVBQUE7O0FBckNwRTtNQXlDUSxrREFBMEQ7Y0FBMUQsMENBQTBELEVBQUE7O0FBekNsRTtFQStDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQWpEMUI7SUFvRE0sZUFBZSxFQUFBOztBQXBEckI7TUF1RFEsb0JBQW9CO01BQ3BCLG1CQUFtQixFQUFBOztBQXhEM0I7TUE0RFEsa0JBQWtCO01BQ2xCLHFCQUFxQixFQUFBOztBQTdEN0I7SUFrRU0sZUFBZSxFQUFBOztBQWxFckI7TUFxRVEsV0FBVyxFQUFBOztBQXJFbkI7RUEyRUksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2VuZCB7XHJcblxyXG4gIC5pbnB1dC1ibG9ja3Mtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VuZC1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogMS41cmVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDEuM3JlbTtcclxuXHJcbiAgICAuYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgd2lkdGg6IDAuOHJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjhyZW07XHJcblxyXG4gICAgICAmLmRvd24ge1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi51cCB7XHJcbiAgICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LXVwLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZGl0aW9uYWwtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMnJlbTtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1ibG9jayB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuXHJcbiAgICAgID4gbGFiZWwge1xyXG4gICAgICAgIHRvcDogMy41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/send/send.component.ts":
/*!****************************************!*\
  !*** ./src/app/send/send.component.ts ***!
  \****************************************/
/*! exports provided: SendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComponent", function() { return SendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SendComponent = /** @class */ (function () {
    function SendComponent(route, backend, variablesService, modalService, ngZone) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.isOpen = false;
        this.localAliases = [];
        this.isModalDialogVisible = false;
        this.currentWalletId = null;
        this.sendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status) {
                                _this.ngZone.run(function () {
                                    if (valid_status === false) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status) {
                                    _this.ngZone.run(function () {
                                        if (alias_status) {
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["BigNumber"](g.value).eq(0)) {
                        return { 'zero': true };
                    }
                    return null;
                }]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mixin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.variablesService.default_fee, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if ((new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["BigNumber"](g.value)).isLessThan(_this.variablesService.default_fee)) {
                        return { 'less_min': true };
                    }
                    return null;
                }]),
            hide: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.additionalOptions = false;
    }
    SendComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.sendForm.get('address').value && this.sendForm.get('address').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    SendComponent.prototype.setAlias = function (alias) {
        this.sendForm.get('address').setValue(alias);
    };
    SendComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'send-address' && this.isOpen) {
            this.isOpen = false;
        }
    };
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function (params) {
            _this.currentWalletId = params['id'];
            _this.sendForm.reset({
                address: _this.variablesService.currentWallet.send_data['address'],
                amount: _this.variablesService.currentWallet.send_data['amount'],
                comment: _this.variablesService.currentWallet.send_data['comment'],
                mixin: _this.variablesService.currentWallet.send_data['mixin'] || 0,
                fee: _this.variablesService.currentWallet.send_data['fee'] || _this.variablesService.default_fee,
                hide: _this.variablesService.currentWallet.send_data['hide'] || false
            });
        });
    };
    SendComponent.prototype.showDialog = function () {
        this.isModalDialogVisible = true;
    };
    SendComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.onSend();
        }
        this.isModalDialogVisible = false;
    };
    SendComponent.prototype.onSend = function () {
        var _this = this;
        if (this.sendForm.valid) {
            if (this.sendForm.get('address').value.indexOf('@') !== 0) {
                this.backend.validateAddress(this.sendForm.get('address').value, function (valid_status) {
                    if (valid_status === false) {
                        _this.ngZone.run(function () {
                            _this.sendForm.get('address').setErrors({ 'address_not_valid': true });
                        });
                    }
                    else {
                        _this.backend.sendMoney(_this.currentWalletId, _this.sendForm.get('address').value, _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (send_status) {
                            if (send_status) {
                                _this.modalService.prepareModal('success', 'SEND.SUCCESS_SENT');
                                _this.variablesService.currentWallet.send_data = { address: null, amount: null, comment: null, mixin: null, fee: null, hide: null };
                                _this.sendForm.reset({ address: null, amount: null, comment: null, mixin: 0, fee: _this.variablesService.default_fee, hide: false });
                            }
                        });
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.sendForm.get('address').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.sendForm.get('address').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.sendMoney(_this.currentWalletId, alias_data.address, // this.sendForm.get('address').value,
                            _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (send_status) {
                                if (send_status) {
                                    _this.modalService.prepareModal('success', 'SEND.SUCCESS_SENT');
                                    _this.variablesService.currentWallet.send_data = { address: null, amount: null, comment: null, mixin: null, fee: null, hide: null };
                                    _this.sendForm.reset({ address: null, amount: null, comment: null, mixin: 0, fee: _this.variablesService.default_fee, hide: false });
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    SendComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    SendComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.variablesService.currentWallet.send_data = {
            address: this.sendForm.get('address').value,
            amount: this.sendForm.get('amount').value,
            comment: this.sendForm.get('comment').value,
            mixin: this.sendForm.get('mixin').value,
            fee: this.sendForm.get('fee').value,
            hide: this.sendForm.get('hide').value
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SendComponent.prototype, "onClick", null);
    SendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send',
            template: __webpack_require__(/*! ./send.component.html */ "./src/app/send/send.component.html"),
            styles: [__webpack_require__(/*! ./send.component.scss */ "./src/app/send/send.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"settings-title\">{{ 'SETTINGS.TITLE' | translate }}</h3>\r\n\r\n    <div class=\"theme-selection\">\r\n      <div class=\"radio-block\">\r\n        <input class=\"style-radio\" type=\"radio\" id=\"dark\" name=\"theme\" value=\"dark\" [checked]=\"theme == 'dark'\" (change)=\"setTheme('dark')\">\r\n        <label for=\"dark\">{{ 'SETTINGS.DARK_THEME' | translate }}</label>\r\n      </div>\r\n      <div class=\"radio-block\">\r\n        <input class=\"style-radio\" type=\"radio\" id=\"white\" name=\"theme\" value=\"white\" [checked]=\"theme == 'white'\" (change)=\"setTheme('white')\">\r\n        <label for=\"white\">{{ 'SETTINGS.WHITE_THEME' | translate }}</label>\r\n      </div>\r\n      <div class=\"radio-block\">\r\n        <input class=\"style-radio\" type=\"radio\" id=\"gray\" name=\"theme\" value=\"gray\" [checked]=\"theme == 'gray'\" (change)=\"setTheme('gray')\">\r\n        <label for=\"gray\">{{ 'SETTINGS.GRAY_THEME' | translate }}</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"scale-selection\">\r\n      <button type=\"button\" class=\"button-block\" [class.active]=\"item.id === variablesService.settings.scale\" *ngFor=\"let item of appScaleOptions\" (click)=\"setScale(item.id)\">\r\n        <span class=\"label\">{{item.name}}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOCK.TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\"\r\n                 [items]=\"appLockOptions\"\r\n                 bindValue=\"id\"\r\n                 bindLabel=\"name\"\r\n                 [(ngModel)]=\"variablesService.settings.appLockTime\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 (change)=\"onLockChange()\">\r\n        <ng-template ng-label-tmp let-item=\"item\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOG_TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\"\r\n                 [items]=\"appLogOptions\"\r\n                 bindValue=\"id\"\r\n                 bindLabel=\"id\"\r\n                 [(ngModel)]=\"variablesService.settings.appLog\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 (change)=\"onLogChange()\">\r\n      </ng-select>\r\n    </div>\r\n\r\n    <form class=\"master-password\" [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmitChangePass()\">\r\n\r\n      <span class=\"master-password-title\">{{ 'SETTINGS.MASTER_PASSWORD.TITLE' | translate }}</span>\r\n\r\n      <div class=\"input-block\" *ngIf=\"variablesService.appPass\">\r\n        <label for=\"old-password\">{{ 'SETTINGS.MASTER_PASSWORD.OLD' | translate }}</label>\r\n        <input type=\"password\" id=\"old-password\" formControlName=\"password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n        <div class=\"error-block\" *ngIf=\"changeForm.invalid && changeForm.controls['password'].valid && (changeForm.controls['password'].dirty || changeForm.controls['password'].touched) && changeForm.errors && changeForm.errors.pass_mismatch\">\r\n          {{ 'SETTINGS.FORM_ERRORS.PASS_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"new-password\">{{ 'SETTINGS.MASTER_PASSWORD.NEW' | translate }}</label>\r\n        <input type=\"password\" id=\"new-password\" formControlName=\"new_password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"confirm-password\">{{ 'SETTINGS.MASTER_PASSWORD.CONFIRM' | translate }}</label>\r\n        <input type=\"password\" id=\"confirm-password\" formControlName=\"new_confirmation\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n        <div class=\"error-block\" *ngIf=\"changeForm.invalid && (changeForm.controls['new_confirmation'].dirty || changeForm.controls['new_confirmation'].touched) && changeForm.errors && changeForm.errors.confirm_mismatch\">\r\n          {{ 'SETTINGS.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"!changeForm.valid\">{{ 'SETTINGS.MASTER_PASSWORD.BUTTON' | translate }}</button>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"last-build\">{{ 'SETTINGS.LAST_BUILD' | translate : {value: currentBuild} }}</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  justify-content: flex-end; }\n\n.settings-title {\n  font-size: 1.7rem; }\n\n.theme-selection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 2.4rem 0;\n  width: 50%; }\n\n.theme-selection .radio-block {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1.3rem;\n    line-height: 2.7rem; }\n\n.lock-selection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 2.4rem 0;\n  width: 50%; }\n\n.lock-selection .lock-selection-title {\n    display: flex;\n    font-size: 1.5rem;\n    line-height: 2.7rem;\n    margin-bottom: 1rem; }\n\n.scale-selection {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0 4rem;\n  width: 50%;\n  height: 0.5rem; }\n\n.scale-selection .button-block {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1 0 auto;\n    margin: 0 0.2rem;\n    padding: 0;\n    height: 0.5rem; }\n\n.scale-selection .button-block .label {\n      position: absolute;\n      bottom: -1rem;\n      left: 50%;\n      transform: translate(-50%, 100%);\n      font-size: 1rem;\n      white-space: nowrap; }\n\n.master-password {\n  width: 50%; }\n\n.master-password .master-password-title {\n    display: flex;\n    font-size: 1.5rem;\n    line-height: 2.7rem;\n    margin-bottom: 1rem; }\n\n.master-password button {\n    margin: 2.5rem auto;\n    width: 100%;\n    max-width: 15rem; }\n\n.last-build {\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUxaO0lBUUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBTFo7SUFRSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFOaEI7SUFTSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYyxFQUFBOztBQWhCbEI7TUFtQk0sa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixTQUFTO01BQ1QsZ0NBQWdDO01BQ2hDLGVBQWU7TUFDZixtQkFBbUIsRUFBQTs7QUFLekI7RUFDRSxVQUFVLEVBQUE7O0FBRFo7SUFJSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTs7QUFQdkI7SUFXSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbn1cclxuXHJcbi50aGVtZS1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIC5yYWRpby1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2NrLXNlbGVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMi40cmVtIDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuXHJcbiAgLmxvY2stc2VsZWN0aW9uLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjdyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNjYWxlLXNlbGVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDAgNHJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMC41cmVtO1xyXG5cclxuICAuYnV0dG9uLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAwLjVyZW07XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC0xcmVtO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFzdGVyLXBhc3N3b3JkIHtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAubWFzdGVyLXBhc3N3b3JkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjdyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMi41cmVtIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubGFzdC1idWlsZCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(renderer, variablesService, backend, location, ngZone) {
        var _this = this;
        this.renderer = renderer;
        this.variablesService = variablesService;
        this.backend = backend;
        this.location = location;
        this.ngZone = ngZone;
        this.appLockOptions = [
            {
                id: 5,
                name: 'SETTINGS.APP_LOCK.TIME1'
            },
            {
                id: 15,
                name: 'SETTINGS.APP_LOCK.TIME2'
            },
            {
                id: 60,
                name: 'SETTINGS.APP_LOCK.TIME3'
            },
            {
                id: 0,
                name: 'SETTINGS.APP_LOCK.TIME4'
            }
        ];
        this.appScaleOptions = [
            {
                id: 7.5,
                name: '75% scale'
            },
            {
                id: 10,
                name: '100% scale'
            },
            {
                id: 12.5,
                name: '125% scale'
            },
            {
                id: 15,
                name: '150% scale'
            }
        ];
        this.appLogOptions = [
            {
                id: -1
            },
            {
                id: 0
            },
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ];
        this.currentBuild = '';
        this.theme = this.variablesService.settings.theme;
        this.scale = this.variablesService.settings.scale;
        this.changeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            new_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        }, [function (g) {
                return g.get('new_password').value === g.get('new_confirmation').value ? null : { 'confirm_mismatch': true };
            }, function (g) {
                if (_this.variablesService.appPass) {
                    return g.get('password').value === _this.variablesService.appPass ? null : { 'pass_mismatch': true };
                }
                return null;
            }]);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getVersion(function (version) {
            _this.ngZone.run(function () {
                _this.currentBuild = version;
            });
        });
    };
    SettingsComponent.prototype.setTheme = function (theme) {
        this.renderer.removeClass(document.body, 'theme-' + this.theme);
        this.theme = theme;
        this.variablesService.settings.theme = this.theme;
        this.renderer.addClass(document.body, 'theme-' + this.theme);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.setScale = function (scale) {
        this.scale = scale;
        this.variablesService.settings.scale = this.scale;
        this.renderer.setStyle(document.documentElement, 'font-size', this.scale + 'px');
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onSubmitChangePass = function () {
        var _this = this;
        if (this.changeForm.valid) {
            this.variablesService.appPass = this.changeForm.get('new_password').value;
            if (this.variablesService.appPass) {
                this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                        _this.variablesService.appLogin = true;
                        _this.variablesService.dataIsLoaded = true;
                        _this.variablesService.startCountdown();
                    }
                    else {
                        console.log(data['error_code']);
                    }
                });
            }
            else {
                this.backend.dropSecureAppData();
            }
            this.changeForm.reset();
        }
    };
    SettingsComponent.prototype.onLockChange = function () {
        if (this.variablesService.appLogin) {
            this.variablesService.restartCountdown();
        }
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onLogChange = function () {
        this.backend.setLogLevel(this.variablesService.settings.appLog);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.back = function () {
        this.location.back();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-accounts\">\r\n  <div class=\"sidebar-accounts-header\">\r\n    <h3>{{ 'SIDEBAR.TITLE' | translate }}</h3><button [routerLink]=\"['main']\">{{ 'SIDEBAR.ADD_NEW' | translate }}</button>\r\n  </div>\r\n  <div class=\"sidebar-accounts-list scrolled-content\">\r\n    <div class=\"sidebar-account\" *ngFor=\"let wallet of variablesService.wallets\" [class.active]=\"wallet?.wallet_id === walletActive\" [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">\r\n      <div class=\"sidebar-account-row account-title-balance\">\r\n        <span class=\"title\" tooltip=\"{{ wallet.name }}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.name}}</span>\r\n        <span class=\"balance\">{{wallet.balance | intToMoney : '3' }} {{variablesService.defaultCurrency}}</span>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-alias\">\r\n        <div class=\"name\">\r\n          <span tooltip=\"{{wallet.alias['name']}}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.alias['name']}}</span>\r\n          <ng-container *ngIf=\"wallet.alias['comment'] && wallet.alias['comment'].length\">\r\n            <i class=\"icon comment\" tooltip=\"{{wallet.alias['comment']}}\" placement=\"top\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\"></i>\r\n          </ng-container>\r\n        </div>\r\n        <span class=\"price\">$ {{wallet.getMoneyEquivalent(variablesService.moneyEquivalent) | intToMoney | number : '1.2-2'}}</span>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-staking\" *ngIf=\"!(!wallet.loaded && variablesService.daemon_state === 2)\">\r\n        <span class=\"text\">{{ 'SIDEBAR.ACCOUNT.STAKING' | translate }}</span>\r\n        <app-staking-switch [wallet_id]=\"wallet.wallet_id\" [(staking)]=\"wallet.staking\"></app-staking-switch>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-messages\" *ngIf=\"!(!wallet.loaded && variablesService.daemon_state === 2)\">\r\n        <span class=\"text\">{{ 'SIDEBAR.ACCOUNT.MESSAGES' | translate }}</span>\r\n        <span class=\"indicator\">{{wallet.new_contracts}}</span>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-synchronization\" *ngIf=\"!wallet.loaded && variablesService.daemon_state === 2\">\r\n        <span class=\"status\">{{ 'SIDEBAR.ACCOUNT.SYNCING' | translate }}</span>\r\n        <div class=\"progress-bar-container\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"wallet.progress + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ wallet.progress }}%</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sidebar-settings\">\r\n  <div class=\"wrap-button\" routerLinkActive=\"active\" *ngIf=\"variablesService.appPass === ''; else contactsShow\" tooltip=\"{{ 'SIDEBAR.CONTACTS_TOOLTIP' | translate }}\" placement=\"top\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\">\r\n    <button (click)=\"contactsRoute()\" [class.disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\" \r\n      [disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\">\r\n      <i class=\"icon contacts\"></i>\r\n      <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <ng-template #contactsShow>\r\n    <div class=\"wrap-button\" routerLinkActive=\"active\">\r\n      <button (click)=\"contactsRoute()\"\r\n        (mouseover)=\"menuItem = true\"\r\n        (mouseleave)=\"menuItem = false\"\r\n      >\r\n        <i class=\"icon contacts\" *ngIf=\"!menuItem; else svgContacts\"></i>\r\n        <ng-template #svgContacts>\r\n          <div class=\"animated\" [innerHTML]=\"contacts | safeHTML\"></div>\r\n        </ng-template>\r\n        <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"wrap-button\" routerLinkActive=\"active\">\r\n    <button [routerLink]=\"['/settings']\"\r\n      (mouseover)=\"menuItemHovered = true\"\r\n      (mouseleave)=\"menuItemHovered = false\"\r\n    >\r\n      <i class=\"icon settings\" *ngIf=\"!menuItemHovered; else svgSetting\"></i>\r\n      <ng-template #svgSetting>\r\n        <div class=\"animated\" [innerHTML]=\"settings | safeHTML\"></div>\r\n      </ng-template>\r\n      <span>{{ 'SIDEBAR.SETTINGS' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"wrap-button\" *ngIf=\"variablesService.appPass === ''; else masterPass\" tooltip=\"{{ 'SIDEBAR.LOG_OUT_TOOLTIP' | translate }}\" placement=\"bottom\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\">\r\n    <button (click)=\"logOut()\" [class.disabled]=\"variablesService.appPass === ''\" [disabled]=\"variablesService.appPass === ''\">\r\n      <i class=\"icon logout\"></i>\r\n      <span>{{ 'SIDEBAR.LOG_OUT' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <ng-template #masterPass>\r\n    <div class=\"wrap-button\">\r\n      <button \r\n      (mouseover)=\"itemHovered = true\"\r\n      (mouseleave)=\"itemHovered = false\"\r\n      (click)=\"logOut()\">\r\n        <i class=\"icon logout\" *ngIf=\"!itemHovered; else svgLogout\"></i>\r\n        <ng-template #svgLogout>\r\n          <div class=\"animated\" [innerHTML]=\"exit | safeHTML\"></div>\r\n        </ng-template>\r\n        \r\n        <span>{{ 'SIDEBAR.LOG_OUT' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<div class=\"sidebar-synchronization-status\" [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 ? 'flex-start' : 'center'}\">\r\n  <div class=\"status-container\">\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\r\n    </span>\r\n    <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{ 'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\r\n    </span>\r\n    <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\r\n    </span>\r\n    <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\r\n    </span>\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\r\n    </span>\r\n    <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\r\n    </span>\r\n    <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\r\n      <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\r\n        </div>\r\n        <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\r\n      </div>\r\n      <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"update-container\" *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\r\n      <div class=\"update-text standard\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\"></i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\r\n      <div class=\"update-text important\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\r\n        <br>\r\n        <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\r\n      <div class=\"update-text critical\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\r\n        <br>\r\n        <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\"></i>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"update-container\" *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\r\n    <div class=\"update-text time\">\r\n      <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\r\n    </div>\r\n    <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 0 0 25rem;\n  padding: 0 3rem;\n  max-width: 25rem; }\n\n.animated {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.2rem; }\n\n.animated::ng-deep svg {\n    width: 2rem;\n    height: 2rem; }\n\n.animated::ng-deep svg path, .animated::ng-deep svg circle, .animated::ng-deep svg polygon {\n      fill: #4db1ff; }\n\n.sidebar-accounts {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto; }\n\n.sidebar-accounts .sidebar-accounts-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    height: 8rem;\n    font-weight: 400; }\n\n.sidebar-accounts .sidebar-accounts-header h3 {\n      font-size: 1.7rem; }\n\n.sidebar-accounts .sidebar-accounts-header button {\n      background: transparent;\n      border: none;\n      outline: none; }\n\n.sidebar-accounts .sidebar-accounts-list {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    margin: 0 -3rem;\n    overflow-y: overlay; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account {\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      cursor: pointer;\n      padding: 2rem 3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row {\n        display: flex;\n        align-items: center;\n        justify-content: space-between; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-title-balance {\n          line-height: 2.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-title-balance .title {\n            font-size: 1.5rem;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-title-balance .balance {\n            font-size: 1.8rem;\n            font-weight: 600;\n            white-space: nowrap; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias {\n          font-size: 1.3rem;\n          line-height: 3.4rem;\n          margin-bottom: 0.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .name {\n            display: flex;\n            align-items: center;\n            flex-shrink: 1;\n            line-height: 1.6rem;\n            padding-right: 1rem;\n            overflow: hidden; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .name span {\n              text-overflow: ellipsis;\n              overflow: hidden;\n              white-space: nowrap; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .price {\n            flex-shrink: 0; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .icon {\n            margin-left: 0.5rem;\n            width: 1.2rem;\n            height: 1.2rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .icon.comment {\n              -webkit-mask: url('alert.svg') no-repeat center;\n                      mask: url('alert.svg') no-repeat center; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-staking {\n          line-height: 2.9rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-staking .text {\n            font-size: 1.3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-messages {\n          line-height: 2.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-messages .text {\n            font-size: 1.3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-messages .indicator {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 1rem;\n            font-size: 1rem;\n            min-width: 2.4rem;\n            height: 1.6rem;\n            padding: 0 0.5rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization {\n          flex-direction: column;\n          height: 5.6rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .status {\n            align-self: flex-start;\n            font-size: 1.3rem;\n            line-height: 2.6rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container {\n            display: flex;\n            margin: 0.4rem 0;\n            height: 0.7rem;\n            width: 100%; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container .progress-bar {\n              flex: 1 0 auto; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container .progress-bar .fill {\n                height: 100%; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container .progress-percent {\n              flex: 0 0 auto;\n              font-size: 1.3rem;\n              line-height: 0.7rem;\n              padding-left: 0.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account:focus {\n        outline: none; }\n\n.sidebar-accounts:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: -3rem;\n    width: calc(100% + 6rem);\n    height: 5rem; }\n\n.sidebar-settings {\n  flex: 0 0 auto;\n  padding-bottom: 1rem; }\n\n.sidebar-settings .wrap-button {\n    margin: 0 -3rem; }\n\n.sidebar-settings .wrap-button button {\n      display: flex;\n      align-items: center;\n      background: transparent;\n      border: none;\n      font-weight: 400;\n      line-height: 3rem;\n      outline: none;\n      padding: 0 3rem;\n      width: 100%; }\n\n.sidebar-settings .wrap-button button.disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.sidebar-settings .wrap-button button .icon {\n        margin-right: 1.2rem;\n        width: 2rem;\n        height: 2rem; }\n\n.sidebar-settings .wrap-button button .icon.contacts {\n          -webkit-mask: url('contacts.svg') no-repeat center;\n                  mask: url('contacts.svg') no-repeat center; }\n\n.sidebar-settings .wrap-button button .icon.settings {\n          -webkit-mask: url('settings.svg') no-repeat center;\n                  mask: url('settings.svg') no-repeat center; }\n\n.sidebar-settings .wrap-button button .icon.logout {\n          -webkit-mask: url('logout.svg') no-repeat center;\n                  mask: url('logout.svg') no-repeat center; }\n\n.sidebar-synchronization-status {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 0 0 7rem;\n  font-size: 1.3rem; }\n\n.sidebar-synchronization-status .status-container {\n    position: relative;\n    flex-grow: 1;\n    text-align: left; }\n\n.sidebar-synchronization-status .status-container .offline, .sidebar-synchronization-status .status-container .online {\n      position: relative;\n      display: block;\n      line-height: 1.2rem;\n      padding-left: 2.2rem; }\n\n.sidebar-synchronization-status .status-container .offline:before, .sidebar-synchronization-status .status-container .online:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: 50%;\n        width: 1.2rem;\n        height: 1.2rem; }\n\n.sidebar-synchronization-status .status-container .syncing, .sidebar-synchronization-status .status-container .loading {\n      line-height: 5rem; }\n\n.sidebar-synchronization-status .status-container .progress-bar-container {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      height: 0.7rem;\n      width: 100%; }\n\n.sidebar-synchronization-status .status-container .progress-bar-container .syncing {\n        display: flex; }\n\n.sidebar-synchronization-status .status-container .progress-bar-container .syncing .progress-bar {\n          flex: 1 0 auto; }\n\n.sidebar-synchronization-status .status-container .progress-bar-container .syncing .progress-bar .fill {\n            height: 100%; }\n\n.sidebar-synchronization-status .status-container .progress-bar-container .syncing .progress-percent {\n          flex: 0 0 auto;\n          font-size: 1.3rem;\n          line-height: 0.7rem;\n          padding-left: 0.7rem; }\n\n.sidebar-synchronization-status .status-container .progress-bar-container .loading {\n        -webkit-animation: move 5s linear infinite;\n                animation: move 5s linear infinite;\n        background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n        background-size: 7rem 7rem;\n        height: 100%; }\n\n.sidebar-synchronization-status .update-container {\n    display: flex;\n    flex-grow: 1;\n    margin-left: 1rem;\n    text-align: right; }\n\n.sidebar-synchronization-status .update-container .update-text {\n      flex: 1 1 auto;\n      font-size: 1.2rem;\n      line-height: 1.8rem;\n      text-align: left; }\n\n.sidebar-synchronization-status .update-container .update-text.time {\n        font-size: 1.1rem; }\n\n.sidebar-synchronization-status .update-container .icon {\n      flex: 1 0 auto;\n      margin: 0.3rem 0 0 0.6rem;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n.sidebar-synchronization-status .update-container .icon.update {\n        -webkit-mask: url('update.svg') no-repeat center;\n                mask: url('update.svg') no-repeat center; }\n\n.sidebar-synchronization-status .update-container .icon.time {\n        -webkit-mask: url('time.svg') no-repeat center;\n                mask: url('time.svg') no-repeat center; }\n\n@-webkit-keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n@keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUp0QjtJQVFJLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBVGhCO01BWU0sYUFBYSxFQUFBOztBQUtuQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVpwQjtNQWVNLGlCQUFpQixFQUFBOztBQWZ2QjtNQW1CTSx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGFBQWEsRUFBQTs7QUFyQm5CO0lBMEJJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUE5QnZCO01BaUNNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0IsRUFBQTs7QUFyQ3hCO1FBd0NRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCLEVBQUE7O0FBMUN0QztVQTZDVSxtQkFBbUIsRUFBQTs7QUE3QzdCO1lBZ0RZLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFBOztBQW5EL0I7WUF1RFksaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixtQkFBbUIsRUFBQTs7QUF6RC9CO1VBOERVLGlCQUFpQjtVQUNqQixtQkFBbUI7VUFDbkIscUJBQXFCLEVBQUE7O0FBaEUvQjtZQW1FWSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGdCQUFnQixFQUFBOztBQXhFNUI7Y0EyRWMsdUJBQXVCO2NBQ3ZCLGdCQUFnQjtjQUNoQixtQkFBbUIsRUFBQTs7QUE3RWpDO1lBa0ZZLGNBQWMsRUFBQTs7QUFsRjFCO1lBc0ZZLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsY0FBYyxFQUFBOztBQXhGMUI7Y0EyRmMsK0NBQXdEO3NCQUF4RCx1Q0FBd0QsRUFBQTs7QUEzRnRFO1VBaUdVLG1CQUFtQixFQUFBOztBQWpHN0I7WUFvR1ksaUJBQWlCLEVBQUE7O0FBcEc3QjtVQXlHVSxtQkFBbUIsRUFBQTs7QUF6RzdCO1lBNEdZLGlCQUFpQixFQUFBOztBQTVHN0I7WUFnSFksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGlCQUFpQixFQUFBOztBQXZIN0I7VUE0SFUsc0JBQXNCO1VBQ3RCLGNBQWMsRUFBQTs7QUE3SHhCO1lBZ0lZLHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsbUJBQW1CLEVBQUE7O0FBbEkvQjtZQXNJWSxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXLEVBQUE7O0FBekl2QjtjQTRJYyxjQUFjLEVBQUE7O0FBNUk1QjtnQkErSWdCLFlBQVksRUFBQTs7QUEvSTVCO2NBb0pjLGNBQWM7Y0FDZCxpQkFBaUI7Y0FDakIsbUJBQW1CO2NBQ25CLG9CQUFvQixFQUFBOztBQXZKbEM7UUE4SlEsYUFBYSxFQUFBOztBQTlKckI7SUFvS0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsY0FBYztFQUNkLG9CQUFvQixFQUFBOztBQUZ0QjtJQUtJLGVBQWUsRUFBQTs7QUFMbkI7TUFRTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUFoQmpCO1FBbUJRLDJDQUE0RCxFQUFBOztBQW5CcEU7UUF1QlEsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBekJwQjtVQTRCVSxrREFBMkQ7a0JBQTNELDBDQUEyRCxFQUFBOztBQTVCckU7VUFnQ1Usa0RBQTJEO2tCQUEzRCwwQ0FBMkQsRUFBQTs7QUFoQ3JFO1VBb0NVLGdEQUF5RDtrQkFBekQsd0NBQXlELEVBQUE7O0FBT25FO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUxuQjtJQVFJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBVnBCO01BYU0sa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CLEVBQUE7O0FBaEIxQjtRQW1CUSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjLEVBQUE7O0FBekJ0QjtNQThCTSxpQkFBaUIsRUFBQTs7QUE5QnZCO01Ba0NNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsT0FBTztNQUNQLGNBQWM7TUFDZCxXQUFXLEVBQUE7O0FBdENqQjtRQXlDUSxhQUFhLEVBQUE7O0FBekNyQjtVQTRDVSxjQUFjLEVBQUE7O0FBNUN4QjtZQStDWSxZQUFZLEVBQUE7O0FBL0N4QjtVQW9EVSxjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixvQkFBb0IsRUFBQTs7QUF2RDlCO1FBNERRLDBDQUFrQztnQkFBbEMsa0NBQWtDO1FBQ2xDLCtsQ0FzQkc7UUFDSCwwQkFBMEI7UUFDMUIsWUFBWSxFQUFBOztBQXJGcEI7SUEyRkksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBOUZyQjtNQWlHTSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTs7QUFwR3RCO1FBdUdRLGlCQUFpQixFQUFBOztBQXZHekI7TUE0R00sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQS9HcEI7UUFrSFEsZ0RBQXlEO2dCQUF6RCx3Q0FBeUQsRUFBQTs7QUFsSGpFO1FBc0hRLDhDQUF1RDtnQkFBdkQsc0NBQXVELEVBQUE7O0FBTS9EO0VBQ0U7SUFDRSwrQkFBK0IsRUFBQTtFQUVqQztJQUNFLDhCQUE4QixFQUFBLEVBQUE7O0FBTGxDO0VBQ0U7SUFDRSwrQkFBK0IsRUFBQTtFQUVqQztJQUNFLDhCQUE4QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4OiAwIDAgMjVyZW07XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG4gIG1heC13aWR0aDogMjVyZW07XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG5cclxuICAmOjpuZy1kZWVwIHN2ZyB7XHJcblxyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgXHJcbiAgICBwYXRoLCBjaXJjbGUsIHBvbHlnb24ge1xyXG4gICAgICBmaWxsOiAjNGRiMWZmO1xyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbi5zaWRlYmFyLWFjY291bnRzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICAuc2lkZWJhci1hY2NvdW50cy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItYWNjb3VudHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIC0zcmVtO1xyXG4gICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcclxuXHJcbiAgICAuc2lkZWJhci1hY2NvdW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogMnJlbSAzcmVtO1xyXG5cclxuICAgICAgLnNpZGViYXItYWNjb3VudC1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICYuYWNjb3VudC10aXRsZS1iYWxhbmNlIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjdyZW07XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iYWxhbmNlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjY291bnQtYWxpYXMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMy40cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG5cclxuICAgICAgICAgICAgJi5jb21tZW50IHtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2FsZXJ0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY2NvdW50LXN0YWtpbmcge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOXJlbTtcclxuXHJcbiAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY2NvdW50LW1lc3NhZ2VzIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjdyZW07XHJcblxyXG4gICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyLjRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWNjb3VudC1zeW5jaHJvbml6YXRpb24ge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGhlaWdodDogNS42cmVtO1xyXG5cclxuICAgICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC40cmVtIDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAuZmlsbCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MtcGVyY2VudCB7XHJcbiAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IC0zcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDZyZW0pO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXItc2V0dGluZ3Mge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG5cclxuICAud3JhcC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIC0zcmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgICAmLmNvbnRhY3RzIHtcclxuICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY29udGFjdHMuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZXR0aW5ncyB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NldHRpbmdzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubG9nb3V0IHtcclxuICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbG9nb3V0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN5bmNocm9uaXphdGlvbi1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleDogMCAwIDdyZW07XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcblxyXG4gIC5zdGF0dXMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgLm9mZmxpbmUsIC5vbmxpbmUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIuMnJlbTtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3luY2luZywgLmxvYWRpbmcge1xyXG4gICAgICBsaW5lLWhlaWdodDogNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBoZWlnaHQ6IDAuN3JlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuc3luY2luZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuXHJcbiAgICAgICAgICAuZmlsbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9ncmVzcy1wZXJjZW50IHtcclxuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgIGFuaW1hdGlvbjogbW92ZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICAgIC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgbGluZWFyLCAwIDAsIDEwMCUgMTAwJSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC4xMjUsIHJnYmEoMCwgMCwgMCwgLjE1KSksIGNvbG9yLXN0b3AoLjEyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjI1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC4yNTAsIHJnYmEoMCwgMCwgMCwgLjEwKSksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguMzc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC4zNzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC41MDAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNTAwLCByZ2JhKDAsIDAsIDAsIC4xNSkpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjYyNSwgcmdiYSgwLCAwLCAwLCAuMTUpKSwgY29sb3Itc3RvcCguNjI1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguNzUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjc1MCwgcmdiYSgwLCAwLCAwLCAuMTApKSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC44NzUsIHJnYmEoMCwgMCwgMCwgLjEwKSksIGNvbG9yLXN0b3AoLjg3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICAgIHRvKHRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgbGluZWFyLCAwIDEwMCUsIDEwMCUgMCxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC4xMjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjEyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjI1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC4yNTAsIHJnYmEoMCwgMCwgMCwgLjI1KSksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguMzc1LCByZ2JhKDAsIDAsIDAsIC4yNSkpLCBjb2xvci1zdG9wKC4zNzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC41MDAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNTAwLCByZ2JhKDAsIDAsIDAsIC4zMCkpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjYyNSwgcmdiYSgwLCAwLCAwLCAuMzApKSwgY29sb3Itc3RvcCguNjI1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguNzUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjc1MCwgcmdiYSgwLCAwLCAwLCAuMjUpKSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC44NzUsIHJnYmEoMCwgMCwgMCwgLjI1KSksIGNvbG9yLXN0b3AoLjg3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICAgIHRvKHRyYW5zcGFyZW50KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDdyZW0gN3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51cGRhdGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIC51cGRhdGUtdGV4dCB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICYudGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICBtYXJnaW46IDAuM3JlbSAwIDAgMC42cmVtO1xyXG4gICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuXHJcbiAgICAgICYudXBkYXRlIHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3VwZGF0ZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudGltZSB7XHJcbiAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy90aW1lLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIC03cmVtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgN3JlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route, router, variablesService, backend, modal, ngZone) {
        this.route = route;
        this.router = router;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modal = modal;
        this.ngZone = ngZone;
        this.contacts = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_5__.contacts;
        this.settings = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_5__.settings;
        this.exit = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_5__.exit;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.indexOf('/wallet/') !== -1) {
            var localPathArr = this.router.url.split('/');
            if (localPathArr.length >= 3) {
                this.walletActive = parseInt(localPathArr[2], 10);
            }
        }
        else if (this.router.url.indexOf('/details') !== -1) {
            this.walletActive = this.variablesService.currentWallet.wallet_id;
        }
        else {
            this.walletActive = null;
        }
        this.walletSubRouting = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url.indexOf('/wallet/') !== -1) {
                    var localPathArr = event.url.split('/');
                    if (localPathArr.length >= 3) {
                        _this.walletActive = parseInt(localPathArr[2], 10);
                    }
                }
                else if (event.url.indexOf('/details') !== -1) {
                    _this.walletActive = _this.variablesService.currentWallet.wallet_id;
                }
                else {
                    _this.walletActive = null;
                }
            }
        });
    };
    SidebarComponent.prototype.contactsRoute = function () {
        if (this.variablesService.appPass) {
            this.router.navigate(['/contacts']);
        }
        else {
            this.modal.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
    };
    SidebarComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser('zano.org/downloads.html');
    };
    SidebarComponent.prototype.logOut = function () {
        var _this = this;
        this.variablesService.stopCountdown();
        this.variablesService.appLogin = false;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.walletSubRouting.unsubscribe();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/staking/staking.component.html":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-header\">\r\n  <div class=\"general\">\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE' | translate }}</span>\r\n      <span class=\"value\">\r\n        <app-staking-switch [wallet_id]=\"variablesService.currentWallet.wallet_id\" [(staking)]=\"variablesService.currentWallet.staking\"></app-staking-switch>\r\n      </span>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE_PENDING' | translate }}</span>\r\n      <span class=\"value\">{{pending.total | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE_TOTAL' | translate }}</span>\r\n      <span class=\"value\">{{total | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"selected\" *ngIf=\"selectedDate && selectedDate.date\">\r\n    <span>{{selectedDate.date | date : 'MMM. EEEE, dd, yyyy'}}</span>\r\n    <span>{{selectedDate.amount}} {{variablesService.defaultCurrency}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"chart\">\r\n  <div [chart]=\"chart\"></div>\r\n</div>\r\n\r\n<div class=\"chart-options\">\r\n  <div class=\"title\">\r\n    {{ 'STAKING.TITLE_PERIOD' | translate }}\r\n  </div>\r\n  <div class=\"options\">\r\n    <ng-container *ngFor=\"let period of periods\">\r\n      <button type=\"button\" [class.active]=\"period.active\" (click)=\"changePeriod(period)\">{{period.title}}</button>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"title\">\r\n    {{ 'STAKING.TITLE_GROUP' | translate }}\r\n  </div>\r\n  <div class=\"options\">\r\n    <ng-container *ngFor=\"let group of groups\">\r\n      <button type=\"button\" [class.active]=\"group.active\" (click)=\"changeGroup(group)\">{{group.title}}</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/staking/staking.component.scss":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.chart-header {\n  display: flex;\n  flex: 0 0 auto; }\n\n.chart-header .general {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 1.3rem;\n    margin: -0.5rem 0; }\n\n.chart-header .general > div {\n      display: flex;\n      align-items: center;\n      margin: 0.5rem 0;\n      height: 2rem; }\n\n.chart-header .general > div .label {\n        display: inline-block;\n        width: 9rem; }\n\n.chart-header .selected {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 1.8rem; }\n\n.chart-header .selected span {\n      line-height: 2.9rem; }\n\n.chart {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  min-height: 40rem; }\n\n.chart > div {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n.chart-options {\n  display: flex;\n  align-items: center;\n  height: 2.4rem;\n  flex: 0 0 auto; }\n\n.chart-options .title {\n    font-size: 1.3rem;\n    padding: 0 1rem; }\n\n.chart-options .title:first-child {\n      padding-left: 0; }\n\n.chart-options .options {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1;\n    height: 100%; }\n\n.chart-options .options button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1 1 auto;\n      cursor: pointer;\n      font-size: 1.3rem;\n      margin: 0 0.1rem;\n      padding: 0;\n      height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rha2luZy9EOlxcUHJvamVjdHNcXFByb2plY3RzIG5vd1xcd29ya1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHN0YWtpbmdcXHN0YWtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBRmhCO0lBS0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBWHJCO01BY00sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQWpCbEI7UUFvQlEscUJBQXFCO1FBQ3JCLFdBQVcsRUFBQTs7QUFyQm5CO0lBMkJJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7O0FBaENyQjtNQW1DTSxtQkFBbUIsRUFBQTs7QUFLekI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBTG5CO0lBUUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUpoQjtJQU9JLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBUm5CO01BV00sZUFBZSxFQUFBOztBQVhyQjtJQWdCSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBbkJoQjtNQXNCTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YWtpbmcvc3Rha2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGFydC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcblxyXG4gIC5nZW5lcmFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luOiAtMC41cmVtIDA7XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtaW4taGVpZ2h0OiA0MHJlbTtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQtb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMi40cmVtO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIG1hcmdpbjogMCAwLjFyZW07XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/staking/staking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/staking/staking.component.ts ***!
  \**********************************************/
/*! exports provided: StakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingComponent", function() { return StakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StakingComponent = /** @class */ (function () {
    function StakingComponent(route, variablesService, backend, ngZone, intToMoneyPipe, translate) {
        this.route = route;
        this.variablesService = variablesService;
        this.backend = backend;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.translate = translate;
        this.periods = [
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK1'),
                key: '1 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK2'),
                key: '2 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH1'),
                key: '1 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH3'),
                key: '3 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH6'),
                key: '6 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.YEAR'),
                key: '1 year',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.ALL'),
                key: 'All',
                active: true
            }
        ];
        this.groups = [
            {
                title: this.translate.instant('STAKING.GROUP.DAY'),
                key: 'day',
                active: true
            },
            {
                title: this.translate.instant('STAKING.GROUP.WEEK'),
                key: 'week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.GROUP.MONTH'),
                key: 'month',
                active: false
            }
        ];
        this.selectedDate = {
            date: null,
            amount: null
        };
        this.originalData = [];
        this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
        this.pending = {
            list: [],
            total: new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0)
        };
    }
    StakingComponent_1 = StakingComponent;
    StakingComponent.makeGroupTime = function (key, date) {
        if (key === 'day') {
            return date.setHours(0, 0, 0, 0);
        }
        else if (key === 'week') {
            return new Date(date.setDate(date.getDate() - date.getDay())).setHours(0, 0, 0, 0);
        }
        else {
            return new Date(date.setDate(1)).setHours(0, 0, 0, 0);
        }
    };
    StakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.getMiningHistory();
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (!_this.pending.total.isZero()) {
                var pendingCount = _this.pending.list.length;
                for (var i = pendingCount - 1; i >= 0; i--) {
                    if (newHeight - _this.pending.list[i].h >= 10) {
                        _this.pending.list.splice(i, 1);
                    }
                }
                if (pendingCount !== _this.pending.list.length) {
                    _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                    for (var i = 0; i < _this.pending.list.length; i++) {
                        _this.pending.total = _this.pending.total.plus(_this.pending.list[i].a);
                    }
                }
            }
        });
        this.refreshStackingEvent = this.variablesService.getRefreshStackingEvent.subscribe(function (wallet_id) {
            if (_this.variablesService.currentWallet.wallet_id === wallet_id) {
                _this.getMiningHistory();
            }
        });
    };
    StakingComponent.prototype.drawChart = function (data) {
        var _this = this;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            title: { text: '' },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: { enabled: false },
            chart: {
                type: 'line',
                backgroundColor: 'transparent',
                height: null,
                zoomType: null,
                events: {
                    load: function () {
                        _this.changePeriod();
                    }
                }
            },
            yAxis: {
                min: 0,
                tickAmount: 5,
                title: {
                    text: ''
                },
                gridLineColor: '#2b3644',
                gridLineWidth: 2,
                lineColor: '#2b3644',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 120,
                tickColor: '#2b3644',
                labels: {
                    y: -8,
                    align: 'left',
                    x: -120,
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    },
                    format: '{value} ' + this.variablesService.defaultCurrency
                },
                showLastLabel: false,
            },
            xAxis: {
                type: 'datetime',
                gridLineColor: '#2b3644',
                lineColor: '#2b3644',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 10,
                tickColor: '#2b3644',
                labels: {
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    }
                },
                minPadding: 0,
                maxPadding: 0,
                minRange: 86400000,
                // tickInterval: 86400000,
                minTickInterval: 3600000,
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(124,181,236,0.2)'],
                            [1, 'rgba(124,181,236,0)']
                        ]
                    },
                    marker: {
                        enabled: false,
                        radius: 2
                    },
                    lineWidth: 2,
                    threshold: null
                },
                series: {
                    point: {
                        events: {
                            mouseOver: function (obj) {
                                _this.selectedDate.date = obj.target['x'];
                                _this.selectedDate.amount = obj.target['y'];
                            }
                        }
                    },
                    events: {
                        mouseOut: function () {
                            _this.selectedDate.date = null;
                            _this.selectedDate.amount = null;
                        }
                    }
                }
            },
            series: [
                {
                    type: 'area',
                    data: data
                }
            ]
        });
    };
    StakingComponent.prototype.getMiningHistory = function () {
        var _this = this;
        if (this.variablesService.currentWallet.loaded) {
            this.backend.getMiningHistory(this.variablesService.currentWallet.wallet_id, function (status, data) {
                _this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.pending.list = [];
                _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.originalData = [];
                if (data.mined_entries) {
                    data.mined_entries.forEach(function (item, key) {
                        if (item.t.toString().length === 10) {
                            data.mined_entries[key].t = (new Date(item.t * 1000)).setUTCMilliseconds(0);
                        }
                    });
                    data.mined_entries.forEach(function (item) {
                        _this.total = _this.total.plus(item.a);
                        if (_this.variablesService.height_app - item.h < 10) {
                            _this.pending.list.push(item);
                            _this.pending.total = _this.pending.total.plus(item.a);
                        }
                        _this.originalData.push([parseInt(item.t, 10), parseFloat(_this.intToMoneyPipe.transform(item.a))]);
                    });
                    _this.originalData = _this.originalData.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                }
                _this.ngZone.run(function () {
                    _this.drawChart([]);
                });
            });
        }
    };
    StakingComponent.prototype.changePeriod = function (period) {
        if (period) {
            this.periods.forEach(function (p) {
                p.active = false;
            });
            period.active = true;
        }
        else {
            period = this.periods.find(function (p) { return p.active; });
        }
        var d = new Date();
        var min = null;
        var newData = [];
        var group = this.groups.find(function (g) { return g.active; });
        if (period.key === '1 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 7, 0, 0, 0, 0);
        }
        else if (period.key === '2 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 14, 0, 0, 0, 0);
        }
        else if (period.key === '1 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 1, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '3 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 3, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '6 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 6, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '1 year') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear() - 1, d.getMonth(), d.getDate(), 0, 0, 0, 0);
        }
        else {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
        }
        this.chart.ref.xAxis[0].setExtremes(min, null);
    };
    StakingComponent.prototype.changeGroup = function (group) {
        this.groups.forEach(function (g) {
            g.active = false;
        });
        group.active = true;
        this.changePeriod();
    };
    StakingComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
        this.refreshStackingEvent.unsubscribe();
    };
    var StakingComponent_1;
    StakingComponent = StakingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking',
            template: __webpack_require__(/*! ./staking.component.html */ "./src/app/staking/staking.component.html"),
            styles: [__webpack_require__(/*! ./staking.component.scss */ "./src/app/staking/staking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], StakingComponent);
    return StakingComponent;
}());



/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.TRANSFER_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-transfer\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\">\r\n        {{ 'TRANSFER_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\" placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\">\r\n        {{ 'TRANSFER_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\" [value]=\"alias.comment\" placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\" readonly></textarea>\r\n    </div>\r\n\r\n    <div class=\"input-block alias-transfer-address\">\r\n      <label for=\"alias-transfer\">\r\n        {{ 'TRANSFER_ALIAS.ADDRESS.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-transfer\" [(ngModel)]=\"transferAddress\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"changeAddress()\" placeholder=\"{{ 'TRANSFER_ALIAS.ADDRESS.PLACEHOLDER' | translate }}\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"transferAddress.length > 0 && (transferAddressAlias || !transferAddressValid || (transferAddressValid && !permissionSend) || notEnoughMoney)\">\r\n        <div *ngIf=\"!transferAddressValid\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.WRONG_ADDRESS' | translate }}\r\n        </div>\r\n        <div *ngIf=\"transferAddressAlias || (transferAddressValid && !permissionSend)\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.ALIAS_EXISTS' | translate }}\r\n        </div>\r\n        <div *ngIf=\"notEnoughMoney\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"TRANSFER_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency: variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"transferAlias()\" [disabled]=\"transferAddressAlias || !transferAddressValid || notEnoughMoney\">{{ 'TRANSFER_ALIAS.BUTTON_TRANSFER' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-transfer {\n  margin: 2.4rem 0; }\n  .form-transfer .alias-name {\n    width: 50%; }\n  .form-transfer .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-transfer .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-transfer .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXItYWxpYXMvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFx0cmFuc2Zlci1hbGlhc1xcdHJhbnNmZXItYWxpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLFVBQVUsRUFBQTtFQUpkO0lBUUksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBVHBCO0lBYUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0IsRUFBQTtFQWYxQjtNQWtCTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhbnNmZXItYWxpYXMvdHJhbnNmZXItYWxpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10cmFuc2ZlciB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuXHJcbiAgLmFsaWFzLW5hbWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hbGlhcy1jb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.ts ***!
  \************************************************************/
/*! exports provided: TransferAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferAliasComponent", function() { return TransferAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransferAliasComponent = /** @class */ (function () {
    function TransferAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.transferAddress = '';
        this.requestProcessing = false;
    }
    TransferAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment,
            tracking_key: alias.tracking_key
        };
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    TransferAliasComponent.prototype.changeAddress = function () {
        var _this = this;
        this.backend.validateAddress(this.transferAddress, function (status) {
            _this.transferAddressValid = status;
            if (status) {
                _this.backend.getPoolInfo(function (statusPool, dataPool) {
                    if (dataPool.hasOwnProperty('aliases_que') && dataPool.aliases_que.length) {
                        _this.setStatus(!dataPool.aliases_que.some(function (el) { return el.address === _this.transferAddress; }));
                    }
                    else {
                        _this.setStatus(status);
                    }
                });
            }
            else {
                _this.setStatus(false);
            }
        });
    };
    TransferAliasComponent.prototype.setStatus = function (statusSet) {
        var _this = this;
        this.permissionSend = statusSet;
        if (statusSet) {
            this.backend.getAliasByAddress(this.transferAddress, function (status) {
                _this.ngZone.run(function () {
                    if (status) {
                        _this.transferAddressAlias = true;
                        _this.permissionSend = false;
                    }
                    else {
                        _this.transferAddressAlias = false;
                    }
                });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.transferAddressAlias = false;
            });
        }
    };
    TransferAliasComponent.prototype.transferAlias = function () {
        var _this = this;
        if (this.requestProcessing || !this.permissionSend || !this.transferAddressValid || this.notEnoughMoney) {
            return;
        }
        this.requestProcessing = true;
        var newAlias = {
            name: this.alias.name,
            address: this.transferAddress,
            comment: this.alias.comment,
            tracking_key: this.alias.tracking_key
        };
        this.backend.updateAlias(this.wallet.wallet_id, newAlias, this.variablesService.default_fee, function (status, data) {
            if (status && data.hasOwnProperty('success') && data.success) {
                _this.modalService.prepareModal('info', 'TRANSFER_ALIAS.REQUEST_SEND_REG');
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/' + _this.wallet.wallet_id]);
                });
            }
            _this.requestProcessing = false;
        });
    };
    TransferAliasComponent.prototype.back = function () {
        this.location.back();
    };
    TransferAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-alias',
            template: __webpack_require__(/*! ./transfer-alias.component.html */ "./src/app/transfer-alias/transfer-alias.component.html"),
            styles: [__webpack_require__(/*! ./transfer-alias.component.scss */ "./src/app/transfer-alias/transfer-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TransferAliasComponent);
    return TransferAliasComponent;
}());



/***/ }),

/***/ "./src/app/typing-message/typing-message.component.html":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <div class=\"interlocutor\">\r\n    @bitmain\r\n  </div>\r\n  <a class=\"back-btn\" [routerLink]=\"['/main']\">\r\n    <i class=\"icon back\"></i>\r\n    <span>{{ 'COMMON.BACK' | translate }}</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"messages-content\">\r\n  <div class=\"messages-list scrolled-content\">\r\n    <div class=\"date\">10:39</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"date\">11:44</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"date\">12:15</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"date\">13:13</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n  </div>\r\n  <div class=\"type-message\">\r\n    <div class=\"input-block textarea\">\r\n      <textarea placeholder=\"{{ 'MESSAGES.SEND_PLACEHOLDER' | translate }}\"></textarea>\r\n    </div>\r\n    <button type=\"button\" class=\"blue-button\">{{ 'MESSAGES.SEND_BUTTON' | translate }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  margin: -3rem -3rem 0; }\n\n.messages-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1; }\n\n.messages-content .messages-list {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    margin: 1rem -3rem;\n    padding: 0 3rem;\n    overflow-y: overlay; }\n\n.messages-content .messages-list div {\n      margin: 0.7rem 0; }\n\n.messages-content .messages-list div.date {\n        text-align: center; }\n\n.messages-content .messages-list div.my, .messages-content .messages-list div.buddy {\n        position: relative;\n        padding: 1.8rem;\n        max-width: 60%; }\n\n.messages-content .messages-list div.buddy {\n        align-self: flex-end; }\n\n.messages-content .type-message {\n    display: flex;\n    flex: 0 0 auto;\n    width: 100%;\n    height: 4.2rem; }\n\n.messages-content .type-message .input-block {\n      width: 100%; }\n\n.messages-content .type-message .input-block > textarea {\n        min-height: 4.2rem; }\n\n.messages-content .type-message button {\n      flex: 0 0 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nLW1lc3NhZ2UvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFx0eXBpbmctbWVzc2FnZVxcdHlwaW5nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBOztBQUpkO0lBT0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFadkI7TUFlTSxnQkFBZ0IsRUFBQTs7QUFmdEI7UUFrQlEsa0JBQWtCLEVBQUE7O0FBbEIxQjtRQXNCUSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWMsRUFBQTs7QUF4QnRCO1FBNEJRLG9CQUFvQixFQUFBOztBQTVCNUI7SUFrQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQXJDbEI7TUF3Q00sV0FBVyxFQUFBOztBQXhDakI7UUEyQ1Esa0JBQWtCLEVBQUE7O0FBM0MxQjtNQWdETSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90eXBpbmctbWVzc2FnZS90eXBpbmctbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBtYXJnaW46IC0zcmVtIC0zcmVtIDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgLm1lc3NhZ2VzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogMXJlbSAtM3JlbTtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiAwLjdyZW0gMDtcclxuXHJcbiAgICAgICYuZGF0ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm15LCAmLmJ1ZGR5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMS44cmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ1ZGR5IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnR5cGUtbWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNC4ycmVtO1xyXG5cclxuICAgIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgPiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNC4ycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZmxleDogMCAwIDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.ts":
/*!************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.ts ***!
  \************************************************************/
/*! exports provided: TypingMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingMessageComponent", function() { return TypingMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypingMessageComponent = /** @class */ (function () {
    function TypingMessageComponent(route) {
        this.route = route;
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    TypingMessageComponent.prototype.ngOnInit = function () {
    };
    TypingMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typing-message',
            template: __webpack_require__(/*! ./typing-message.component.html */ "./src/app/typing-message/typing-message.component.html"),
            styles: [__webpack_require__(/*! ./typing-message.component.scss */ "./src/app/typing-message/typing-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TypingMessageComponent);
    return TypingMessageComponent;
}());



/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span (click)=\"back()\">{{variablesService.currentWallet.name}}</span>\r\n      <span>{{ 'BREADCRUMBS.WALLET_DETAILS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-details\" [formGroup]=\"detailsForm\" (ngSubmit)=\"onSubmitEdit()\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"detailsForm.controls['name'].invalid && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\r\n        <div *ngIf=\"detailsForm.controls['name'].errors['required']\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"seed-phrase\">{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\r\n      <div class=\"seed-phrase\" id=\"seed-phrase\">\r\n        <div class=\"seed-phrase-hint\" (click)=\"showSeedPhrase()\" *ngIf=\"!showSeed\">{{ 'WALLET_DETAILS.SEED_PHRASE_HINT' | translate }}</div>\r\n        <div class=\"seed-phrase-content\" *ngIf=\"showSeed\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\r\n          <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\r\n            <div class=\"word\">{{(index + 1) + '. ' + word}}</div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wallet-buttons\">\r\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"!detailsForm.valid\">{{ 'WALLET_DETAILS.BUTTON_SAVE' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"closeWallet()\">{{ 'WALLET_DETAILS.BUTTON_REMOVE' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-details {\n  margin-top: 1.8rem; }\n  .form-details .input-block:first-child {\n    width: 50%; }\n  .form-details .seed-phrase {\n    display: flex;\n    font-size: 1.4rem;\n    line-height: 1.5rem;\n    padding: 1.4rem;\n    width: 100%;\n    height: 8.8rem; }\n  .form-details .seed-phrase .seed-phrase-hint {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      width: 100%;\n      height: 100%; }\n  .form-details .seed-phrase .seed-phrase-content {\n      display: flex;\n      flex-direction: column;\n      flex-wrap: wrap;\n      width: 100%;\n      height: 100%; }\n  .form-details .wallet-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .form-details .wallet-buttons button {\n      margin: 2.9rem 0;\n      width: 100%;\n      max-width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LWRldGFpbHMvRDpcXFByb2plY3RzXFxQcm9qZWN0cyBub3dcXHdvcmtcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFx3YWxsZXQtZGV0YWlsc1xcd2FsbGV0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQU1NLFVBQVUsRUFBQTtFQU5oQjtJQVdJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYyxFQUFBO0VBaEJsQjtNQW1CTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVksRUFBQTtFQXhCbEI7TUE0Qk0sYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVksRUFBQTtFQWhDbEI7SUFxQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtFQXZDbEM7TUEwQ00sZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC1kZXRhaWxzL3dhbGxldC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG5cclxuICAuaW5wdXQtYmxvY2sge1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlZWQtcGhyYXNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxLjRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOC44cmVtO1xyXG5cclxuICAgIC5zZWVkLXBocmFzZS1oaW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VlZC1waHJhc2UtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53YWxsZXQtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDIuOXJlbSAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.ts ***!
  \************************************************************/
/*! exports provided: WalletDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailsComponent", function() { return WalletDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletDetailsComponent = /** @class */ (function () {
    function WalletDetailsComponent(router, backend, variablesService, ngZone, location) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.location = location;
        this.seedPhrase = '';
        this.showSeed = false;
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                                return { 'same': true };
                            }
                            else {
                                return { 'duplicate': true };
                            }
                        }
                    }
                    return null;
                }]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    WalletDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSeed = false;
        this.detailsForm.get('name').setValue(this.variablesService.currentWallet.name);
        this.detailsForm.get('path').setValue(this.variablesService.currentWallet.path);
        this.backend.getSmartWalletInfo(this.variablesService.currentWallet.wallet_id, function (status, data) {
            if (data.hasOwnProperty('restore_key')) {
                _this.ngZone.run(function () {
                    _this.seedPhrase = data['restore_key'].trim();
                });
            }
        });
    };
    WalletDetailsComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
    };
    WalletDetailsComponent.prototype.onSubmitEdit = function () {
        var _this = this;
        if (this.detailsForm.value) {
            this.variablesService.currentWallet.name = this.detailsForm.get('name').value;
            this.ngZone.run(function () {
                _this.router.navigate(['/wallet/' + _this.variablesService.currentWallet.wallet_id]);
            });
        }
    };
    WalletDetailsComponent.prototype.closeWallet = function () {
        var _this = this;
        this.backend.closeWallet(this.variablesService.currentWallet.wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/' + _this.variablesService.currentWallet.wallet_id]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    WalletDetailsComponent.prototype.ngOnDestroy = function () { };
    WalletDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-details',
            template: __webpack_require__(/*! ./wallet-details.component.html */ "./src/app/wallet-details/wallet-details.component.html"),
            styles: [__webpack_require__(/*! ./wallet-details.component.scss */ "./src/app/wallet-details/wallet-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], WalletDetailsComponent);
    return WalletDetailsComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div>\r\n    <h3 tooltip=\"{{ variablesService.currentWallet.name }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{variablesService.currentWallet.name}}</h3>\r\n    <button [routerLink]=\"['/assign-alias']\" *ngIf=\"!variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2 && variablesService.currentWallet.alias_available\">\r\n      <i class=\"icon account\"></i>\r\n      <span>{{ 'WALLET.REGISTER_ALIAS' | translate }}</span>\r\n    </button>\r\n    <div class=\"alias\" *ngIf=\"variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2\">\r\n      <span>{{variablesService.currentWallet.alias['name']}}</span>\r\n      <ng-container *ngIf=\"variablesService.currentWallet.alias_available\">\r\n        <i class=\"icon edit\" [routerLink]=\"['/edit-alias']\"></i>\r\n        <i class=\"icon transfer\" [routerLink]=\"['/transfer-alias']\"></i>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <button [routerLink]=\"['/details']\" routerLinkActive=\"active\">\r\n      <i class=\"icon details\"></i>\r\n    </button>\r\n    <button type=\"button\" (click)=\"closeWallet()\">\r\n      <i class=\"icon close-wallet\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"address\">\r\n  <span>{{variablesService.currentWallet.address}}</span>\r\n  <i class=\"icon\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></i>\r\n</div>\r\n<div class=\"balance\">\r\n  <span [tooltip]=\"getTooltip()\" [placement]=\"'bottom'\" [tooltipClass]=\"'balance-tooltip'\" [delay]=\"150\" [timeout]=\"0\" (onHide)=\"onHideTooltip()\">{{variablesService.currentWallet.balance | intToMoney  : '3'}} {{variablesService.defaultCurrency}}</span>\r\n  <span>$ {{variablesService.currentWallet.getMoneyEquivalent(variablesService.moneyEquivalent) | intToMoney | number : '1.2-2'}}</span>\r\n</div>\r\n<div class=\"tabs\">\r\n  <div class=\"tabs-header\">\r\n    <ng-container *ngFor=\"let tab of tabs; let index = index\">\r\n      <div class=\"tab\" [class.active]=\"tab.active\" [class.disabled]=\"(tab.link === '/send' || tab.link === '/contracts' || tab.link === '/staking') && (variablesService.daemon_state !== 2 || !variablesService.currentWallet.loaded)\" (click)=\"changeTab(index)\" (mouseover)=\"itemHovered(index, true)\" (mouseleave)=\"itemHovered(index, false)\">\r\n        <i class=\"icon\" [ngClass]=\"tab.icon\"  *ngIf=\"!tab.itemHovered; else svgAnimated\"></i>\r\n        <ng-template #svgAnimated>\r\n          <div class=\"animated\" [innerHTML]=\"tab.animated | safeHTML\"></div>\r\n        </ng-template>\r\n        <span>{{ tab.title | translate }}</span>\r\n        <span class=\"indicator\" *ngIf=\"tab.indicator\">{{variablesService.currentWallet.new_contracts}}</span>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div #scrolledContent class=\"tabs-content scrolled-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.scss":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0 3rem 3rem;\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  height: 8rem; }\n\n.header > div {\n    display: flex;\n    align-items: center; }\n\n.header > div :not(:last-child) {\n      margin-right: 3.2rem; }\n\n.header h3 {\n    font-size: 1.7rem;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 50rem;\n    line-height: 2.7rem; }\n\n.header button {\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    font-weight: 400;\n    outline: none;\n    padding: 0; }\n\n.header button .icon {\n      margin-right: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.header button .icon.account {\n        -webkit-mask: url('account.svg') no-repeat center;\n                mask: url('account.svg') no-repeat center; }\n\n.header button .icon.lock {\n        -webkit-mask: url('lock.svg') no-repeat center;\n                mask: url('lock.svg') no-repeat center; }\n\n.header button .icon.details {\n        -webkit-mask: url('details-settings.svg') no-repeat center;\n                mask: url('details-settings.svg') no-repeat center;\n        margin-right: 0; }\n\n.header button .icon.close-wallet {\n        -webkit-mask: url('close-wallet.svg') no-repeat center;\n                mask: url('close-wallet.svg') no-repeat center;\n        margin-right: 0; }\n\n.header .alias {\n    display: flex;\n    align-items: center;\n    font-size: 1.3rem; }\n\n.header .alias .icon {\n      cursor: pointer;\n      margin-right: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.header .alias .icon.edit {\n        -webkit-mask: url('details.svg') no-repeat center;\n                mask: url('details.svg') no-repeat center; }\n\n.header .alias .icon.transfer {\n        -webkit-mask: url('send.svg') no-repeat center;\n                mask: url('send.svg') no-repeat center; }\n\n.address {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  font-size: 1.4rem;\n  line-height: 1.7rem; }\n\n.address .icon {\n    cursor: pointer;\n    margin-left: 1.2rem;\n    width: 1.7rem;\n    height: 1.7rem; }\n\n.address .icon.copy {\n      -webkit-mask: url('copy.svg') no-repeat center;\n              mask: url('copy.svg') no-repeat center; }\n\n.address .icon.copy:hover {\n        opacity: 0.75; }\n\n.address .icon.copied {\n      -webkit-mask: url('complete-testwallet.svg') no-repeat center;\n              mask: url('complete-testwallet.svg') no-repeat center; }\n\n.balance {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  flex: 0 0 auto;\n  margin: 2.6rem 0; }\n\n.balance :first-child {\n    font-size: 3.3rem;\n    font-weight: 600;\n    line-height: 2.4rem;\n    margin-right: 3.5rem; }\n\n.balance :last-child {\n    font-size: 1.8rem;\n    font-weight: 600;\n    line-height: 1.3rem; }\n\n.tabs {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto; }\n\n.tabs .tabs-header {\n    display: flex;\n    justify-content: space-between;\n    flex: 0 0 auto; }\n\n.tabs .tabs-header .tab {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1 0 auto;\n      cursor: pointer;\n      padding: 0 1rem;\n      height: 5rem; }\n\n.tabs .tabs-header .tab .animated {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-right: 1.3rem; }\n\n.tabs .tabs-header .tab .animated ::ng-deep svg {\n        width: 2rem;\n        height: 2rem; }\n\n.tabs .tabs-header .tab .animated ::ng-deep svg path, .tabs .tabs-header .tab .animated ::ng-deep svg circle, .tabs .tabs-header .tab .animated ::ng-deep svg polygon {\n          fill: #4db1ff; }\n\n.tabs .tabs-header .tab .icon {\n        margin-right: 1.3rem;\n        width: 2rem;\n        height: 2rem; }\n\n.tabs .tabs-header .tab .icon.send {\n          -webkit-mask: url('send.svg') no-repeat center;\n                  mask: url('send.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.receive {\n          -webkit-mask: url('receive.svg') no-repeat center;\n                  mask: url('receive.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.history {\n          -webkit-mask: url('history.svg') no-repeat center;\n                  mask: url('history.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.contracts {\n          -webkit-mask: url('contracts.svg') no-repeat center;\n                  mask: url('contracts.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.messages {\n          -webkit-mask: url('message.svg') no-repeat center;\n                  mask: url('message.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.staking {\n          -webkit-mask: url('staking.svg') no-repeat center;\n                  mask: url('staking.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .indicator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 1rem;\n        font-size: 1rem;\n        font-weight: 600;\n        margin-left: 1.3rem;\n        padding: 0 0.5rem;\n        min-width: 1.6rem;\n        height: 1.6rem; }\n\n.tabs .tabs-header .tab.disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.tabs .tabs-header .tab:not(:last-child) {\n        margin-right: 0.3rem; }\n\n.tabs .tabs-content {\n    display: flex;\n    padding: 3rem;\n    flex: 1 1 auto;\n    overflow-x: hidden;\n    overflow-y: overlay; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L0Q6XFxQcm9qZWN0c1xcUHJvamVjdHMgbm93XFx3b3JrXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcd2FsbGV0XFx3YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUxkO0lBUUksYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVR2QjtNQVlNLG9CQUFvQixFQUFBOztBQVoxQjtJQWlCSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUF2QnZCO0lBMkJJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVLEVBQUE7O0FBbENkO01BcUNNLG9CQUFvQjtNQUNwQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQXZDcEI7UUEwQ1EsaURBQTBEO2dCQUExRCx5Q0FBMEQsRUFBQTs7QUExQ2xFO1FBOENRLDhDQUF1RDtnQkFBdkQsc0NBQXVELEVBQUE7O0FBOUMvRDtRQWtEUSwwREFBbUU7Z0JBQW5FLGtEQUFtRTtRQUNuRSxlQUFlLEVBQUE7O0FBbkR2QjtRQXVEUSxzREFBK0Q7Z0JBQS9ELDhDQUErRDtRQUMvRCxlQUFlLEVBQUE7O0FBeER2QjtJQThESSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBOztBQWhFckI7TUFtRU0sZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQXRFcEI7UUF5RVEsaURBQTBEO2dCQUExRCx5Q0FBMEQsRUFBQTs7QUF6RWxFO1FBNkVRLDhDQUF1RDtnQkFBdkQsc0NBQXVELEVBQUE7O0FBTS9EO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUxyQjtJQVFJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWMsRUFBQTs7QUFYbEI7TUFjTSw4Q0FBdUQ7Y0FBdkQsc0NBQXVELEVBQUE7O0FBZDdEO1FBaUJRLGFBQWEsRUFBQTs7QUFqQnJCO01Bc0JNLDZEQUFzRTtjQUF0RSxxREFBc0UsRUFBQTs7QUFLNUU7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBTGxCO0lBUUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUE7O0FBWHhCO0lBZUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTs7QUFSbEI7TUFXTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsZUFBZTtNQUNmLGVBQWU7TUFDZixZQUFZLEVBQUE7O0FBakJsQjtRQW9CUSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixvQkFBb0IsRUFBQTs7QUF2QjVCO1FBNEJRLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBN0JwQjtVQWdDVSxhQUFhLEVBQUE7O0FBaEN2QjtRQXFDUSxvQkFBb0I7UUFDcEIsV0FBVztRQUNYLFlBQVksRUFBQTs7QUF2Q3BCO1VBMENVLDhDQUF1RDtrQkFBdkQsc0NBQXVELEVBQUE7O0FBMUNqRTtVQThDVSxpREFBMEQ7a0JBQTFELHlDQUEwRCxFQUFBOztBQTlDcEU7VUFrRFUsaURBQTBEO2tCQUExRCx5Q0FBMEQsRUFBQTs7QUFsRHBFO1VBc0RVLG1EQUE0RDtrQkFBNUQsMkNBQTRELEVBQUE7O0FBdER0RTtVQTBEVSxpREFBMEQ7a0JBQTFELHlDQUEwRCxFQUFBOztBQTFEcEU7VUE4RFUsaURBQTBEO2tCQUExRCx5Q0FBMEQsRUFBQTs7QUE5RHBFO1FBbUVRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWMsRUFBQTs7QUE1RXRCO1FBZ0ZRLDJDQUE0RCxFQUFBOztBQWhGcEU7UUFvRlEsb0JBQW9CLEVBQUE7O0FBcEY1QjtJQTBGSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMCAzcmVtIDNyZW07XHJcbiAgbWluLXdpZHRoOiA5NXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMy4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi43cmVtO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuICAgICAgd2lkdGg6IDEuN3JlbTtcclxuICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gICAgICAmLmFjY291bnQge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvYWNjb3VudC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubG9jayB7XHJcbiAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9sb2NrLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kZXRhaWxzIHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2RldGFpbHMtc2V0dGluZ3Muc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jbG9zZS13YWxsZXQge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Utd2FsbGV0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbGlhcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuICAgICAgd2lkdGg6IDEuN3JlbTtcclxuICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gICAgICAmLmVkaXQge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZGV0YWlscy5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudHJhbnNmZXIge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc2VuZC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxuICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICBoZWlnaHQ6IDEuN3JlbTtcclxuXHJcbiAgICAmLmNvcHkge1xyXG4gICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuY29waWVkIHtcclxuICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iYWxhbmNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luOiAyLjZyZW0gMDtcclxuXHJcbiAgOmZpcnN0LWNoaWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDpsYXN0LWNoaWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICAudGFicy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG5cclxuICAgIC50YWIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICBoZWlnaHQ6IDVyZW07XHJcblxyXG4gICAgICAuYW5pbWF0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuM3JlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFuaW1hdGVkIDo6bmctZGVlcCBzdmcge1xyXG4gICAgICBcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIFxyXG4gICAgICAgIHBhdGgsIGNpcmNsZSwgcG9seWdvbiB7XHJcbiAgICAgICAgICBmaWxsOiAjNGRiMWZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4zcmVtO1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuXHJcbiAgICAgICAgJi5zZW5kIHtcclxuICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc2VuZC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJlY2VpdmUge1xyXG4gICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9yZWNlaXZlLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaGlzdG9yeSB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2hpc3Rvcnkuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5jb250cmFjdHMge1xyXG4gICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb250cmFjdHMuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tZXNzYWdlcyB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL21lc3NhZ2Uuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zdGFraW5nIHtcclxuICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc3Rha2luZy5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS4zcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogMS42cmVtO1xyXG4gICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBjdXJzb3I6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbm90LWFsbG93ZWQuc3ZnKSwgbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJzLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WalletComponent = /** @class */ (function () {
    function WalletComponent(route, router, backend, variablesService, ngZone, translate, intToMoneyPipe) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.intToMoneyPipe = intToMoneyPipe;
        this.copyAnimation = false;
        this.tabs = [
            {
                title: 'WALLET.TABS.HISTORY',
                icon: 'history',
                link: '/history',
                indicator: false,
                active: true,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.history,
                itemHovered: false
            },
            {
                title: 'WALLET.TABS.SEND',
                icon: 'send',
                link: '/send',
                indicator: false,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.send,
                itemHovered: false
            },
            {
                title: 'WALLET.TABS.RECEIVE',
                icon: 'receive',
                link: '/receive',
                indicator: false,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.receive,
                itemHovered: false
            },
            {
                title: 'WALLET.TABS.CONTRACTS',
                icon: 'contracts',
                link: '/contracts',
                indicator: 1,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.contracts,
                itemHovered: false
            },
            /*{
              title: 'WALLET.TABS.MESSAGES',
              icon: 'messages',
              link: '/messages',
              indicator: 32,
              active: false,
              animated: icons.messages,
              itemHovered: false
            },*/
            {
                title: 'WALLET.TABS.STAKING',
                icon: 'staking',
                link: '/staking',
                indicator: false,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.staking,
                itemHovered: false
            }
        ];
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subRouting1 = this.route.params.subscribe(function (params) {
            _this.walletID = +params['id'];
            _this.variablesService.setCurrentWallet(_this.walletID);
            _this.scrolledContent.nativeElement.scrollTop = 0;
            clearTimeout(_this.copyAnimationTimeout);
            _this.copyAnimation = false;
        });
        this.subRouting2 = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]) {
                if (val.state.root.firstChild && val.state.root.firstChild.firstChild) {
                    for (var i = 0; i < _this.tabs.length; i++) {
                        _this.tabs[i].active = (_this.tabs[i].link === '/' + val.state.root.firstChild.firstChild.url[0].path);
                    }
                }
            }
        });
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.send) {
                _this.tabs.forEach(function (tab, index) {
                    if (tab.link === '/send') {
                        _this.changeTab(index);
                    }
                });
            }
        });
        if (this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
            this.variablesService.currentWallet.wakeAlias = false;
        }
        this.aliasSubscription = this.variablesService.getAliasChangedEvent.subscribe(function () {
            if (_this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
                _this.variablesService.currentWallet.wakeAlias = false;
            }
        });
    };
    WalletComponent.prototype.changeTab = function (index) {
        var _this = this;
        if ((this.tabs[index].link === '/send' || this.tabs[index].link === '/contracts' || this.tabs[index].link === '/staking') && (this.variablesService.daemon_state !== 2 || !this.variablesService.currentWallet.loaded)) {
            return;
        }
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        this.tabs[index].active = true;
        this.ngZone.run(function () {
            _this.scrolledContent.nativeElement.scrollTop = 0;
            _this.router.navigate(['wallet/' + _this.walletID + _this.tabs[index].link]);
        });
    };
    WalletComponent.prototype.itemHovered = function (index, state) {
        this.tabs[index].itemHovered = state;
    };
    WalletComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    WalletComponent.prototype.getTooltip = function () {
        var _this = this;
        this.balanceTooltip = document.createElement('div');
        var available = document.createElement('span');
        available.setAttribute('class', 'available');
        available.innerHTML = this.translate.instant('WALLET.AVAILABLE_BALANCE', { available: this.intToMoneyPipe.transform(this.variablesService.currentWallet.unlocked_balance), currency: this.variablesService.defaultCurrency });
        this.balanceTooltip.appendChild(available);
        var locked = document.createElement('span');
        locked.setAttribute('class', 'locked');
        locked.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE', { locked: this.intToMoneyPipe.transform(this.variablesService.currentWallet.balance.minus(this.variablesService.currentWallet.unlocked_balance)), currency: this.variablesService.defaultCurrency });
        this.balanceTooltip.appendChild(locked);
        var link = document.createElement('span');
        link.setAttribute('class', 'link');
        link.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE_LINK');
        link.addEventListener('click', function () {
            _this.openInBrowser('docs.zano.org/docs/locked-balance');
        });
        this.balanceTooltip.appendChild(link);
        return this.balanceTooltip;
    };
    WalletComponent.prototype.onHideTooltip = function () {
        this.balanceTooltip = null;
    };
    WalletComponent.prototype.openInBrowser = function (link) {
        this.backend.openUrlInBrowser(link);
    };
    WalletComponent.prototype.closeWallet = function () {
        var _this = this;
        this.backend.closeWallet(this.variablesService.currentWallet.wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/' + _this.variablesService.currentWallet.wallet_id]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletComponent.prototype.ngOnDestroy = function () {
        this.subRouting1.unsubscribe();
        this.subRouting2.unsubscribe();
        this.queryRouting.unsubscribe();
        this.aliasSubscription.unsubscribe();
        clearTimeout(this.copyAnimationTimeout);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrolledContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WalletComponent.prototype, "scrolledContent", void 0);
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/assets/icons/icons.json":
/*!*************************************!*\
  !*** ./src/assets/icons/icons.json ***!
  \*************************************/
/*! exports provided: logo, contacts, settings, exit, history, send, receive, contracts, messages, staking, default */
/***/ (function(module) {

module.exports = {"logo":"<svg version='1.1'id='Layer_1' image-rendering='optimizeQuality' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 256 256'style='enable-background:new 0 0 256 256;' xml:space='preserve'><style type='text/css'>.st0{display:none;} .st1{display:inline;fill:url(#SVGID_1_);} .st2{display:inline;fill:url(#SVGID_2_);} .st3{display:inline;fill:url(#SVGID_3_);} .st4{display:inline;fill:url(#SVGID_4_);} .st5{display:inline;fill:url(#SVGID_5_);} .st6{display:inline;fill:url(#SVGID_6_);} .st7{display:inline;fill:url(#SVGID_7_);} .st8{display:inline;fill:url(#SVGID_8_);} .st9{display:inline;fill:url(#SVGID_9_);} .st10{display:inline;fill:url(#SVGID_10_);} .st11{display:inline;fill:url(#SVGID_11_);} .st12{display:inline;fill:url(#SVGID_12_);} .st13{display:inline;fill:url(#SVGID_13_);} .st14{display:inline;fill:url(#SVGID_14_);} .st15{display:inline;fill:url(#SVGID_15_);} .st16{display:inline;fill:url(#SVGID_16_);} .st17{display:inline;fill:url(#SVGID_17_);} .st18{display:inline;fill:url(#SVGID_18_);} .st19{display:inline;fill:url(#SVGID_19_);} .st20{display:inline;fill:url(#SVGID_20_);} .st21{display:inline;fill:url(#SVGID_21_);} .st22{display:inline;fill:url(#SVGID_22_);} .st23{display:inline;fill:url(#SVGID_23_);} .st24{display:inline;fill:url(#SVGID_24_);} .st25{display:inline;fill:url(#SVGID_25_);} .st26{display:inline;fill:url(#SVGID_26_);} .st27{display:inline;fill:url(#SVGID_27_);} .st28{display:inline;fill:url(#SVGID_28_);} .st29{display:inline;fill:url(#SVGID_29_);} .st30{display:inline;fill:url(#SVGID_30_);} .st31{display:inline;fill:url(#SVGID_31_);} .st32{display:inline;fill:url(#SVGID_32_);} .st33{display:inline;fill:url(#SVGID_33_);} .st34{display:inline;fill:url(#SVGID_34_);} .st35{display:inline;fill:url(#SVGID_35_);} .st36{display:inline;fill:url(#SVGID_36_);} .st37{display:inline;fill:url(#SVGID_37_);} .st38{display:inline;fill:url(#SVGID_38_);} .st39{display:inline;fill:url(#SVGID_39_);} .st40{display:inline;fill:url(#SVGID_40_);} .st41{display:inline;fill:url(#SVGID_41_);} .st42{display:inline;fill:url(#SVGID_42_);} .st43{display:inline;fill:url(#SVGID_43_);} .st44{display:inline;fill:url(#SVGID_44_);} .st45{display:inline;fill:url(#SVGID_45_);} .st46{display:inline;fill:#8AA9F4;} .st47{display:inline;fill:url(#SVGID_46_);} .st48{display:inline;fill:url(#SVGID_47_);} .st49{display:inline;fill:url(#SVGID_48_);} .st50{display:inline;fill:url(#SVGID_49_);} .st51{display:inline;fill:url(#SVGID_50_);} .st52{display:inline;fill:url(#SVGID_51_);} .st53{display:inline;fill:url(#SVGID_52_);} .st54{display:inline;fill:url(#SVGID_53_);} .st55{display:inline;fill:url(#SVGID_54_);} .st56{display:inline;fill:url(#SVGID_55_);} .st57{display:inline;fill:url(#SVGID_56_);} .st58{display:inline;fill:url(#SVGID_57_);} .st59{display:inline;fill:url(#SVGID_58_);} .st60{display:inline;fill:url(#SVGID_59_);} .st61{display:inline;fill:url(#SVGID_60_);} .st62{display:inline;fill:url(#SVGID_61_);} .st63{display:inline;fill:url(#SVGID_62_);} .st64{display:inline;fill:url(#SVGID_63_);} .st65{display:inline;fill:url(#SVGID_64_);} .st66{display:inline;fill:url(#SVGID_65_);} .st67{display:inline;fill:url(#SVGID_66_);} .st68{display:inline;fill:url(#SVGID_67_);} .st69{display:inline;fill:url(#SVGID_68_);} .st70{display:inline;fill:url(#SVGID_69_);} .st71{display:inline;fill:url(#SVGID_70_);} .st72{display:inline;fill:url(#SVGID_71_);} .st73{display:inline;fill:url(#SVGID_72_);} .st74{display:inline;fill:url(#SVGID_73_);} .st75{display:inline;fill:url(#SVGID_74_);} .st76{display:inline;fill:url(#SVGID_75_);} .st77{display:inline;fill:url(#SVGID_76_);} .st78{display:inline;fill:url(#SVGID_77_);} .st79{display:inline;fill:url(#SVGID_78_);} .st80{display:inline;fill:url(#SVGID_79_);} .st81{display:inline;fill:url(#SVGID_80_);} .st82{display:inline;fill:url(#SVGID_81_);} .st83{display:inline;fill:url(#SVGID_82_);} .st84{display:inline;fill:url(#SVGID_83_);} .st85{display:inline;fill:url(#SVGID_84_);} .st86{display:inline;fill:url(#SVGID_85_);} .st87{display:inline;fill:url(#SVGID_86_);} .st88{display:inline;fill:url(#SVGID_87_);} .st89{display:inline;fill:url(#SVGID_88_);} .st90{display:inline;fill:url(#SVGID_89_);} .st91{display:inline;fill:url(#SVGID_90_);} .st92{display:inline;fill:url(#SVGID_91_);} .st93{display:inline;fill:url(#SVGID_92_);} .st94{display:inline;fill:url(#SVGID_93_);} .st95{display:inline;fill:url(#SVGID_94_);} .st96{display:inline;fill:url(#SVGID_95_);} .st97{display:inline;fill:url(#SVGID_96_);} .st98{display:inline;fill:url(#SVGID_97_);} .st99{display:inline;fill:url(#SVGID_98_);} .st100{display:inline;fill:url(#SVGID_99_);} .st101{display:inline;fill:url(#SVGID_100_);} .st102{display:inline;fill:url(#SVGID_101_);} .st103{display:inline;fill:url(#SVGID_102_);} .st104{display:inline;fill:url(#SVGID_103_);} .st105{display:inline;fill:url(#SVGID_104_);} .st106{display:inline;fill:url(#SVGID_105_);} .st107{display:inline;fill:url(#SVGID_106_);} .st108{display:inline;fill:url(#SVGID_107_);} .st109{display:inline;fill:url(#SVGID_108_);} .st110{display:inline;fill:url(#SVGID_109_);} .st111{display:inline;fill:url(#SVGID_110_);} .st112{display:inline;fill:url(#SVGID_111_);} .st113{display:inline;fill:url(#SVGID_112_);} .st114{display:inline;fill:url(#SVGID_113_);} .st115{display:inline;fill:url(#SVGID_114_);} .st116{display:inline;fill:url(#SVGID_115_);} .st117{display:inline;fill:url(#SVGID_116_);} .st118{display:inline;fill:url(#SVGID_117_);} .st119{display:inline;fill:url(#SVGID_118_);} .st120{display:inline;fill:url(#SVGID_119_);} .st121{display:inline;fill:url(#SVGID_120_);} .st122{display:inline;fill:url(#SVGID_121_);} .st123{display:inline;fill:url(#SVGID_122_);} </style><g><g class='st0'><linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#68B0E9;stop-opacity:0'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st1' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.7;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><linearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6BB1E9;stop-opacity:0.08627'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st2' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.67333;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6EB2E9;stop-opacity:0.17254'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st3' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.66667;.67333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_4_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#71B3E9;stop-opacity:0.26274'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st4' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.66;.66667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_5_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#74B4E9;stop-opacity:0.34901'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st5' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.65333;.66;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_6_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#77B5E9;stop-opacity:0.43529'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st6' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.64667;.65333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_7_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7BB6E9;stop-opacity:0.52156'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st7' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.64;.64667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_8_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7EB7E9;stop-opacity:0.60784'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st8' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.63333;.64;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_9_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#81B8E9;stop-opacity:0.69411'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st9' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.62667;.63333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_10_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#84B9E9;stop-opacity:0.78431'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st10' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.62;.62667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_11_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#87BAE9;stop-opacity:0.87058'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st11' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.61333;.62;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_12_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8ABBE9;stop-opacity:0.95686'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st12' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.60667;.61333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_13_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8ABBE9;stop-opacity:0.96078'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st13' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.6;.60667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_14_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8ABBE9;stop-opacity:0.9647'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st14' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.59333;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_15_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BBBE9;stop-opacity:0.96862'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st15' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.58667;.59333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_16_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BBBE9;stop-opacity:0.97254'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st16' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.58;.58667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_17_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BBBE9;stop-opacity:0.97647'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st17' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.56667;.58;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_18_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BBBE9;stop-opacity:0.98039'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st18' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.56;.56667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_19_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BBBE9;stop-opacity:0.98431'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st19' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.55333;.56;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_20_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.98823'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st20' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.54667;.55333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_21_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.99215'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st21' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.54;.54667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_22_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.99607'/><stop offset='1' style='stop-color:#7C83F4'/></linearGradient><path class='st22' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.53333;.54;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_23_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.91372'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.91764'/></linearGradient><path class='st23' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.52667;.53333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_24_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.83137'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.83137'/></linearGradient><path class='st24' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.52;.52667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_25_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.74901'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.74901'/></linearGradient><path class='st25' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.51333;.52;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_26_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.66274'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.66666'/></linearGradient><path class='st26' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.50667;.51333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_27_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.58039'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.58431'/></linearGradient><path class='st27' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.5;.50667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_28_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.49803'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.50196'/></linearGradient><path class='st28' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.49333;.5;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_29_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.41568'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.41568'/></linearGradient><path class='st29' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.48667;.49333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_30_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.33333'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.33333'/></linearGradient><path class='st30' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.48;.48667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_31_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.25098'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.25098'/></linearGradient><path class='st31' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.47333;.48;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_32_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.1647'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.16862'/></linearGradient><path class='st32' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.46667;.47333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_33_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0.08235'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0.08235'/></linearGradient><path class='st33' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.46;.46667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_34_' gradientUnits='userSpaceOnUse' x1='201.8000031' y1='162.3374939' x2='201.8000031' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBBE9;stop-opacity:0'/><stop offset='1' style='stop-color:#7C83F4;stop-opacity:0'/></linearGradient><path class='st34' d='M207.8500061,178.9499969L256,95.4000015H147.6000061l60.25,83.5500107V178.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.45333;.46;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_35_' gradientUnits='userSpaceOnUse' x1='195.3500061' y1='162.2875061' x2='195.3500061' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CBAEA;stop-opacity:0.08235'/><stop offset='1' style='stop-color:#7D86F4;stop-opacity:0.08235'/></linearGradient><path class='st35' d='M204.3000031,179.0500031l42.4000092-79.1500015L144,95.4499969l60.3000031,83.5999908V179.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.44667;.45333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_36_' gradientUnits='userSpaceOnUse' x1='188.8999939' y1='162.2875061' x2='188.8999939' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CB8EB;stop-opacity:0.16862'/><stop offset='1' style='stop-color:#7E89F4;stop-opacity:0.16862'/></linearGradient><path class='st36' d='M200.75,179.1000061l36.6499939-74.75l-97-8.9000015L200.75,179.1000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.44;.44667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_37_' gradientUnits='userSpaceOnUse' x1='182.3999939' y1='162.2875061' x2='182.3999939' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8CB7EC;stop-opacity:0.25098'/><stop offset='1' style='stop-color:#808DF4;stop-opacity:0.25098'/></linearGradient><path class='st37' d='M197.1499939,179.1999969l30.8999939-70.4000015l-91.3000031-13.3499985L197.1499939,179.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.43333;.44;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_38_' gradientUnits='userSpaceOnUse' x1='175.9000092' y1='162.2875061' x2='175.9000092' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BB5ED;stop-opacity:0.33333'/><stop offset='1' style='stop-color:#8190F4;stop-opacity:0.33333'/></linearGradient><path class='st38' d='M193.5500031,179.25l25.1499939-66.0500031l-85.5999908-17.8000031L193.5500031,179.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.42667;.43333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_39_' gradientUnits='userSpaceOnUse' x1='169.5' y1='162.2875061' x2='169.5' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BB3EE;stop-opacity:0.41568'/><stop offset='1' style='stop-color:#8293F4;stop-opacity:0.41568'/></linearGradient><path class='st39' d='M190.0500031,179.3000031l19.3999939-61.6500015l-79.9000092-22.25l60.5,83.9000015H190.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.42;.42667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_40_' gradientUnits='userSpaceOnUse' x1='163.0499878' y1='162.2875061' x2='163.0499878' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BB2EF;stop-opacity:0.50196'/><stop offset='1' style='stop-color:#8396F4;stop-opacity:0.50196'/></linearGradient><path class='st40' d='M186.5,179.3500061l13.6499939-57.25l-74.1999969-26.6999969L186.5,179.3500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.41333;.42;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_41_' gradientUnits='userSpaceOnUse' x1='156.5999908' y1='162.2875061' x2='156.5999908' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BB1EF;stop-opacity:0.58431'/><stop offset='1' style='stop-color:#8499F4;stop-opacity:0.58431'/></linearGradient><path class='st41' d='M182.9499969,179.3999939l7.8999939-52.8499985l-68.5-31.1500015l60.5999908,84H182.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.40667;.41333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_42_' gradientUnits='userSpaceOnUse' x1='150.1499939' y1='162.2875061' x2='150.1499939' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BAFF0;stop-opacity:0.66666'/><stop offset='1' style='stop-color:#859CF4;stop-opacity:0.66666'/></linearGradient><path class='st42' d='M179.3999939,179.4499969L181.5499878,131l-62.8000031-35.5999985l60.6500092,84.0500107V179.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.4;.40667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_43_' gradientUnits='userSpaceOnUse' x1='145.5' y1='162.3374939' x2='145.5' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8BAEF1;stop-opacity:0.74901'/><stop offset='1' style='stop-color:#87A0F4;stop-opacity:0.74901'/></linearGradient><path class='st43' d='M175.8500061,179.5L172.25,135.3999939l-57.0999985-40.0500031L175.8500061,179.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.39333;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_44_' gradientUnits='userSpaceOnUse' x1='141.875' y1='162.3374939' x2='141.875' y2='84.9624939' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8AACF2;stop-opacity:0.83137'/><stop offset='1' style='stop-color:#88A3F4;stop-opacity:0.83137'/></linearGradient><path class='st44' d='M172.25,179.5500031l-9.3500061-39.75l-51.4000015-44.5L172.25,179.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.38667;.39333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_45_' gradientUnits='userSpaceOnUse' x1='138.3000183' y1='162.2875061' x2='138.3000183' y2='84.9125061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8AAAF3;stop-opacity:0.91764'/><stop offset='1' style='stop-color:#89A6F4;stop-opacity:0.91764'/></linearGradient><path class='st45' d='M153.6000061,144.3000031l-45.6999969-48.9499969l60.8000031,84.3000031l-15.1000061-35.3499908V144.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.38;.38667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M144.25,148.75l-40-53.4000015l60.8500061,84.3499985L144.25,148.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.37333;.38;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.36667;.37333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_46_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#7E8AF4;stop-opacity:0'/></linearGradient><path class='st47' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.7;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><linearGradient id='SVGID_47_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#808BF4;stop-opacity:0.08627'/></linearGradient><path class='st48' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.67333;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_48_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#818DF4;stop-opacity:0.17254'/></linearGradient><path class='st49' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.66667;.67333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_49_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#838EF3;stop-opacity:0.26274'/></linearGradient><path class='st50' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.66;.66667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_50_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#848FF3;stop-opacity:0.34901'/></linearGradient><path class='st51' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.65333;.66;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_51_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8691F3;stop-opacity:0.43529'/></linearGradient><path class='st52' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.64667;.65333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_52_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8792F3;stop-opacity:0.52156'/></linearGradient><path class='st53' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.64;.64667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_53_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8994F3;stop-opacity:0.60784'/></linearGradient><path class='st54' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.63333;.64;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_54_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8A95F3;stop-opacity:0.69411'/></linearGradient><path class='st55' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.62667;.63333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_55_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8C96F2;stop-opacity:0.78431'/></linearGradient><path class='st56' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.62;.62667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_56_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8D98F2;stop-opacity:0.87058'/></linearGradient><path class='st57' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.61333;.62;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_57_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8F99F2;stop-opacity:0.95686'/></linearGradient><path class='st58' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.60667;.61333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_58_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8F99F2;stop-opacity:0.96078'/></linearGradient><path class='st59' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.6;.60667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_59_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8F99F2;stop-opacity:0.9647'/></linearGradient><path class='st60' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.59333;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_60_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8F99F2;stop-opacity:0.96862'/></linearGradient><path class='st61' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.58667;.59333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_61_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8F99F2;stop-opacity:0.97254'/></linearGradient><path class='st62' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.58;.58667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_62_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#8F99F2;stop-opacity:0.97647'/></linearGradient><path class='st63' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.57333;.58;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_63_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.97647'/></linearGradient><path class='st64' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.56667;.57333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_64_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.98039'/></linearGradient><path class='st65' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.56;.56667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_65_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.98431'/></linearGradient><path class='st66' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.55333;.56;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_66_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.98823'/></linearGradient><path class='st67' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.54667;.55333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_67_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.99215'/></linearGradient><path class='st68' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.54;.54667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_68_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.99607'/></linearGradient><path class='st69' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.53333;.54;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_69_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.91764'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.91372'/></linearGradient><path class='st70' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.52667;.53333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_70_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.83137'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.83137'/></linearGradient><path class='st71' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.52;.52667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_71_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.74901'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.74901'/></linearGradient><path class='st72' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.51333;.52;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_72_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.66666'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.66274'/></linearGradient><path class='st73' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.50667;.51333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_73_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.58431'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.58039'/></linearGradient><path class='st74' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.5;.50667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_74_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.50196'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.49803'/></linearGradient><path class='st75' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.49333;.5;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_75_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.41568'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.41568'/></linearGradient><path class='st76' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.48667;.49333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_76_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.33333'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.33333'/></linearGradient><path class='st77' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.48;.48667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_77_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.25098'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.25098'/></linearGradient><path class='st78' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.47333;.48;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_78_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.16862'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.1647'/></linearGradient><path class='st79' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.46667;.47333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_79_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0.08235'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0.08235'/></linearGradient><path class='st80' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.46;.46667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_80_' gradientUnits='userSpaceOnUse' x1='54.4500008' y1='177.0249939' x2='54.4500008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#57B7E3;stop-opacity:0'/><stop offset='1' style='stop-color:#909AF2;stop-opacity:0'/></linearGradient><path class='st81' d='M108.9000015,161l-60.5-84.5500031L0,161H108.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.45333;.46;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_81_' gradientUnits='userSpaceOnUse' x1='61.3250008' y1='177.0249939' x2='61.3250008' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#5BB6E4;stop-opacity:0.08235'/><stop offset='1' style='stop-color:#909BF2;stop-opacity:0.08235'/></linearGradient><path class='st82' d='M112.5,161.0500031L54.6500015,77.6999969c-14.8666649,27.3666763-29.6999989,53.9666748-44.5,79.8000031L112.5,161.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.44667;.45333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_82_' gradientUnits='userSpaceOnUse' x1='68.25' y1='177.0249939' x2='68.25' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#60B5E6;stop-opacity:0.16862'/><stop offset='1' style='stop-color:#8F9DF2;stop-opacity:0.16862'/></linearGradient><path class='st83' d='M116.1500015,161.1000061l-55.25-82.2000046C47.3333321,105.4666672,33.8166656,130.5,20.3500004,154L116.1500015,161.1000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.44;.44667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_83_' gradientUnits='userSpaceOnUse' x1='75.1500015' y1='177.0249939' x2='75.1500015' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#64B4E7;stop-opacity:0.25098'/><stop offset='1' style='stop-color:#8F9EF3;stop-opacity:0.25098'/></linearGradient><path class='st84' d='M119.8000031,161.1999969L67.0999985,80.1500015C54.8333321,105.8833313,42.6333313,129.3333282,30.5,150.5L119.8000031,161.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.43333;.44;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_84_' gradientUnits='userSpaceOnUse' x1='82.0500031' y1='177.0249939' x2='82.0500031' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#68B2E9;stop-opacity:0.33333'/><stop offset='1' style='stop-color:#8E9FF3;stop-opacity:0.33333'/></linearGradient><path class='st85' d='M123.4000015,161.25L73.3500061,81.3499985c-10.9666634,24.9333344-21.8500023,46.8000107-32.6500015,65.5999985L123.4000015,161.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.42667;.43333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_85_' gradientUnits='userSpaceOnUse' x1='88.9499969' y1='177.0249939' x2='88.9499969' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6CB1EA;stop-opacity:0.41568'/><stop offset='1' style='stop-color:#8DA0F3;stop-opacity:0.41568'/></linearGradient><path class='st86' d='M127.0500031,161.3000031L79.5999985,82.5999985c-9.7000046,24.1000061-19.2833366,44.3833389-28.75,60.8499985C50.8499985,143.4499969,127.0499954,161.3000031,127.0500031,161.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.42;.42667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_86_' gradientUnits='userSpaceOnUse' x1='95.8499908' y1='177.0249939' x2='95.8499908' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#71B0EC;stop-opacity:0.50196'/><stop offset='1' style='stop-color:#8DA2F3;stop-opacity:0.50196'/></linearGradient><path class='st87' d='M130.6499939,161.3500061l-44.8000031-77.5c-8.4000015,23.2666702-16.6666641,41.9666672-24.7999992,56.1000061L130.6499939,161.3500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.41333;.42;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_87_' gradientUnits='userSpaceOnUse' x1='102.7249985' y1='177.0249939' x2='102.7249985' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#75AFED;stop-opacity:0.58431'/><stop offset='1' style='stop-color:#8DA3F3;stop-opacity:0.58431'/></linearGradient><path class='st88' d='M134.25,161.3999939L92.0500031,85.0499954C84.9500046,107.4833298,78,124.6166611,71.1999969,136.4499969L134.25,161.3999939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.40667;.41333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_88_' gradientUnits='userSpaceOnUse' x1='109.625' y1='177.0249939' x2='109.625' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#79AEEE;stop-opacity:0.66666'/><stop offset='1' style='stop-color:#8CA4F3;stop-opacity:0.66666'/></linearGradient><path class='st89' d='M81.3499985,132.9499969l56.5499954,28.5L98.3000031,86.3000031c-5.8333282,21.5999985-11.4833298,37.1500092-16.9499969,46.6500092L81.3499985,132.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.4;.40667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_89_' gradientUnits='userSpaceOnUse' x1='116.5500031' y1='177.0249939' x2='116.5500031' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7DADF0;stop-opacity:0.74901'/><stop offset='1' style='stop-color:#8CA5F4;stop-opacity:0.74901'/></linearGradient><path class='st90' d='M91.5500031,129.4499969l50,32.0999908l-37-74.0500031c-4.5333405,20.8000031-8.8666763,34.7833328-13,41.9499969V129.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.39333;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_90_' gradientUnits='userSpaceOnUse' x1='123.4249954' y1='177.0249939' x2='123.4249954' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#81ABF1;stop-opacity:0.83137'/><stop offset='1' style='stop-color:#8BA6F4;stop-opacity:0.83137'/></linearGradient><path class='st91' d='M101.6999969,125.9000015l43.4499969,35.7000046l-34.4000015-72.8499985C107.5166626,108.7166748,104.4999924,121.1000137,101.6999969,125.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.38667;.39333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_91_' gradientUnits='userSpaceOnUse' x1='130.3500061' y1='177.0249939' x2='130.3500061' y2='97.375' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#86AAF3;stop-opacity:0.91764'/><stop offset='1' style='stop-color:#8AA8F4;stop-opacity:0.91764'/></linearGradient><path class='st92' d='M111.9000015,122.4000015l36.9000015,39.2499924L117,89.9499969C115.0666733,109.1166611,113.3666687,119.9333267,111.9000015,122.4000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.38;.38667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M122,118.9000015l30.3500061,42.7999954l-29.1500015-70.5C122.5333328,109.5333252,122.1333389,118.7666626,122,118.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.37333;.38;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_92_' gradientUnits='userSpaceOnUse' x1='128.125' y1='11.6500092' x2='128.125' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6A44FB'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#1ECED0'/></linearGradient><path class='st93' d='M86.0500031,10.1499996L48.4000015,76.4499969l121.4500046,169.8999939l38-67.3499908L86.0500031,10.1499996z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.36667;.37333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_93_' gradientUnits='userSpaceOnUse' x1='128.1240082' y1='11.6500092' x2='128.1240082' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6A44FB'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#1ECED0'/></linearGradient><path class='st94' d='M86.0500031,10.1499996L48.4000015,76.4499969l121.4500046,169.8999939l37.9980164-67.3915253L86.0500031,10.1499996z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.66667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><linearGradient id='SVGID_94_' gradientUnits='userSpaceOnUse' x1='123.210907' y1='18.8035545' x2='123.210907' y2='255.0035706' gradientTransform='matrix(1.0276099 0 0 -1.02753 1.5104843 267.2888794)'><stop offset='0' style='stop-color:#6B47FB'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#22CDD1'/></linearGradient><path class='st95' d='M86.0433502,10.1548958L48.3998222,76.449791l121.4488831,169.8981628l37.9979401-67.3912811L86.0433502,10.1548958z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.36667;.66667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_95_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6499939' x2='128.1499939' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6C4BFB'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#25CCD2'/></linearGradient><path class='st96' d='M90.0500031,15.6499996l-37.7500038,66.5l113.5500031,158.7000122l38.1499939-67.5L90.0500031,15.6499996z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.36;.36667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_96_' gradientUnits='userSpaceOnUse' x1='128.1500092' y1='11.6999969' x2='128.1500092' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6D4EFA'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#29CAD4'/></linearGradient><path class='st97' d='M92.0500031,18.2999992L54.2500038,84.9499969l109.6000061,153.1000061l38.1999969-67.5999908l-110-152.1499939V18.2999992z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.35333;.36;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_97_' gradientUnits='userSpaceOnUse' x1='128.125' y1='11.6499939' x2='128.125' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6E51FA'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#2CC9D5'/></linearGradient><path class='st98' d='M94.0999985,21.1000004l-37.9499969,66.75l105.7499924,147.5499878l38.1999969-67.6999969C200.0999908,167.6999969,94.0999908,21.0999908,94.0999985,21.1000004z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.34667;.35333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_98_' gradientUnits='userSpaceOnUse' x1='128.125' y1='11.6499939' x2='128.125' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#6F55FA'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#30C8D6'/></linearGradient><path class='st99' d='M96.0999985,23.8500004l-38,66.8499985l101.7999954,141.9499969l38.25-67.8000031C198.1499939,164.8499908,96.0999908,23.8499908,96.0999985,23.8500004z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.34;.34667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_99_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6499939' x2='128.1499939' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7058FA'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#34C7D7'/></linearGradient><path class='st100' d='M98.0999985,26.6000004L60.0499992,93.5500031l97.8499908,136.3499908L196.25,162.0499878L98.0999985,26.6000004z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.33333;.34;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_100_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6999969' x2='128.1499939' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#715CF9'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#37C5D8'/></linearGradient><path class='st101' d='M100.0999985,29.25L62,96.3499985l93.8999939,130.75l38.3999939-67.9499969L100.0999908,29.2500153L100.0999985,29.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.32667;.33333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_101_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6999969' x2='128.1499939' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#735FF9'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#3BC4DA'/></linearGradient><path class='st102' d='M102.0999985,32L63.9500008,99.25l89.9499969,125.1000061l38.4499969-68L102.0999985,32z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.32;.32667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_102_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6999969' x2='128.1499939' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7462F9'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#3EC3DB'/></linearGradient><path class='st103' d='M104.0999985,34.75l-38.1999969,67.3499985l85.9999924,119.5000076l38.5-68.1000061C190.3999939,153.5,104.0999908,34.75,104.0999985,34.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.31333;.32;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_103_' gradientUnits='userSpaceOnUse' x1='128.1500092' y1='11.6999969' x2='128.1500092' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7566F9'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#42C2DC'/></linearGradient><path class='st104' d='M106.0999985,37.5l-38.2999954,67.4499969l82.1500092,113.9000092l38.5500031-68.1499939L106.1000137,37.5000153L106.0999985,37.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.30667;.31333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_104_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6999969' x2='128.1499939' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7669F8'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#46C0DD'/></linearGradient><path class='st105' d='M108.0999985,40.2000008L69.75,107.8000031l78.1999969,108.3000031l38.5999908-68.25L108.0999985,40.2000008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.3;.30667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_105_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6999969' x2='128.1500092' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#776CF8'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#49BFDE'/></linearGradient><path class='st106' d='M110.1500015,42.9500008l-38.4500046,67.6999969l74.25,102.75l38.6500092-68.3500061L110.1500092,42.9499893L110.1500015,42.9500008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.29333;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_106_' gradientUnits='userSpaceOnUse' x1='128.1500092' y1='11.6999969' x2='128.1500092' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7870F8'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#4DBEE0'/></linearGradient><path class='st107' d='M112.1500015,45.7000008l-38.5,67.8000031l70.3000107,97.1499939l38.6999969-68.4499969C182.6500092,142.1999969,112.1500092,45.6999969,112.1500015,45.7000008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.28667;.29333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_107_' gradientUnits='userSpaceOnUse' x1='128.1750183' y1='11.6999969' x2='128.1750183' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7973F8'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#50BDE1'/></linearGradient><path class='st108' d='M114.1500015,48.4500008l-38.5499954,67.9000092l66.3500061,91.5500031l38.8000031-68.5l-66.5999985-90.9499969L114.1500015,48.4500008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.28;.28667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_108_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7A77F8'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#54BCE2'/></linearGradient><path class='st109' d='M116.1500015,51.2000008l-38.5999985,68L140,205.1499939l38.8000031-68.5500031l-62.6500015-85.4000015V51.2000008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.27333;.28;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_109_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6999969' x2='128.1500092' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7B7AF7'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#58BAE3'/></linearGradient><path class='st110' d='M118.1500015,53.9000015l-38.7000046,68.1500015L138,202.3999939L176.8500061,133.75C176.8500061,133.75,118.1500092,53.9000015,118.1500015,53.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.26667;.27333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_110_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7C7DF7'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#5BB9E4'/></linearGradient><path class='st111' d='M120.1500015,56.6500015l-38.75,68.25L136,199.6499939l38.9499969-68.6999969C174.9499969,130.9499969,120.1499939,56.6499939,120.1500015,56.6500015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.26;.26667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_111_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7D81F7'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#5FB8E6'/></linearGradient><path class='st112' d='M83.3499985,127.75L134,196.8999939l39-68.8000031l-50.8499985-68.6999969C122.1500015,59.3999939,83.3500061,127.7499924,83.3499985,127.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.25333;.26;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_112_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7E84F7'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#62B7E7'/></linearGradient><path class='st113' d='M85.3000031,130.6000061L132,194.2000122l39.0500031-68.9000015l-46.8499985-63.1500015L85.3000031,130.6000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.24667;.25333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_113_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#7F87F6'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#66B5E8'/></linearGradient><path class='st114' d='M87.25,133.4499969l42.75,58l39.1000061-69l-42.9000015-57.5999985L87.25,133.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.24;.24667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_114_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#808BF6'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#6AB4E9'/></linearGradient><path class='st115' d='M89.1500015,136.3000031l38.9000015,52.4000092l39.1500092-69.0500031l-39-52.0500031C128.2000122,67.6000061,89.1500092,136.3000031,89.1500015,136.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.23333;.24;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_115_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#818EF6'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#6DB3EA'/></linearGradient><path class='st116' d='M91.0999985,139.1499939l34.9500046,46.8000031L165.25,116.7999954l-35.0500031-46.4500046L91.0999985,139.1499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.22667;.23333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_116_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8391F6'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#71B2EC'/></linearGradient><path class='st117' d='M93.0500031,142.0500031l31,41.1500092L163.3000031,114l-31.1000061-40.9000015l-39.1500015,68.9499893L93.0500031,142.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.22;.22667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_117_' gradientUnits='userSpaceOnUse' x1='128.1750183' y1='11.6499939' x2='128.1750183' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8495F5'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#74B0ED'/></linearGradient><path class='st118' d='M122.0500031,180.5l39.3000031-69.3000031l-27.1499939-35.3499985l-39.1999969,69.0999985L122.0500183,180.5H122.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.21333;.22;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_118_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6499939' x2='128.1499939' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#8598F5'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#78AFEE'/></linearGradient><path class='st119' d='M120,177.75l39.3999939-69.3499985l-23.25-29.7999954l-39.25,69.1999969C96.8999939,147.8000031,119.9999924,177.75,120,177.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.20667;.21333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_119_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6499939' x2='128.1499939' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#869CF5'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#7CAEEF'/></linearGradient><path class='st120' d='M98.8499985,150.6499939L118,175l39.4499969-69.4499969l-19.3000031-24.1999969l-39.3000031,69.3000031L98.8499985,150.6499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.2;.20667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_120_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6999969' x2='128.1750031' y2='247.9000092' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#879FF5'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#7FADF0'/></linearGradient><path class='st121' d='M100.8000031,153.4499969L116.1000061,172.25l39.4499969-69.5500031L140.25,84.0499954L100.8000031,153.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.19333;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_121_' gradientUnits='userSpaceOnUse' x1='128.1750031' y1='11.6499939' x2='128.1750031' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#88A2F4'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#83ABF2'/></linearGradient><path class='st122' d='M102.75,156.3500061l11.3499985,13.1999969l39.5000076-69.6500015L142.25,86.8000031L102.75,156.3500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.18667;.19333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><linearGradient id='SVGID_122_' gradientUnits='userSpaceOnUse' x1='128.1499939' y1='11.6499939' x2='128.1499939' y2='247.8500061' gradientTransform='matrix(1 0 0 -1 0 258)'><stop offset='0' style='stop-color:#89A6F4'/><stop offset='0.4980392' style='stop-color:#8AA9F4'/><stop offset='1' style='stop-color:#86AAF3'/></linearGradient><path class='st123' d='M151.6499939,97.0999985l-7.4499969-7.5500031l-39.5500031,69.6500015l7.4000015,7.6000061C112.0499954,166.8000031,151.6499939,97.1000061,151.6499939,97.0999985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.18;.18667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M149.6999969,94.25l-3.5-1.9499969l-39.5999985,69.75l3.4499969,2L149.6999969,94.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.17333;.18;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M148.8500061,95.5999985c-1.0999908-0.6333313-2.2166595-1.25-3.3500061-1.8499985l-4.8000031,8.5c-4.1000061,7.2000046-8.1999969,14.4166641-12.3000031,21.6500015c-4.5333328,7.9333267-9.0499954,15.8666611-13.5500031,23.7999954l-7.4000015,13l1.1500015,0.6499939c0.6999969,0.4333344,1.4166718,0.8500061,2.1500015,1.25c2.0333328-3.5666656,4.0500031-7.1333313,6.0500031-10.6999969l7.4000015-13l14.8000031-26C142.2666626,107.1333237,145.5500031,101.3666611,148.8500061,95.5999985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.16667;.17333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M148,96.9499969l-3.1999969-1.8000031l-4.6000061,8.1999969c-3.9333344,6.8666611-7.8666687,13.7666702-11.8000031,20.6999969c-4.3333359,7.5999908-8.6666641,15.2166595-13,22.8500061c-2.3999939,4.1333313-4.7666626,8.2833405-7.0999985,12.4499969l1.0999985,0.6499939c0.6666641,0.3999939,1.3500061,0.8000031,2.0500031,1.1999969L117.25,150.8999786l7.0999985-12.3999939c4.7333298-8.2999878,9.4666672-16.6166611,14.2000046-24.9499969C141.6833344,108.016655,144.8333282,102.4833145,148,96.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.16;.16667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M147.1999969,98.3000031c-1-0.5666656-2.0166626-1.1333389-3.0500031-1.6999969c-1.4666595,2.6000061-2.9499969,5.2000046-4.4499969,7.8000031c-3.7666626,6.5666656-7.5333252,13.1666641-11.3000031,19.8000031c-4.1333313,7.3000031-8.2833328,14.5833282-12.4499969,21.8500061c-2.2666702,3.9666595-4.5333328,7.9499969-6.8000031,11.9499969l1.0999985,0.6000061c0.6333313,0.3999939,1.2833328,0.7833405,1.9499969,1.1499939c1.8666687-3.2666626,3.7166672-6.5333252,5.5500031-9.8000031c2.2999954-3.9666595,4.5833282-7.9333344,6.8499985-11.8999939c4.5333252-7.9333344,9.0666809-15.8833313,13.6000061-23.8499985l9-15.9000015V98.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.15333;.16;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M124.75,137.6499939l13-22.8000031l8.6000061-15.1999969c-0.9666595-0.5333328-1.9333344-1.0833359-2.8999939-1.6500015c-1.4000092,2.5-2.8166656,4.9833374-4.25,7.4499969l-10.8000031,18.9000015l-11.9000015,20.8999939l-6.5,11.3999939l1,0.5500031l1.9000015,1.1000061c1.7666702-3.0999908,3.5333405-6.2166595,5.3000031-9.3500061c2.2000046-3.7666626,4.3833389-7.5333405,6.5500031-11.3000031L124.75,137.6499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.14667;.15333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M124.8499985,137.1999969L137.25,115.5c2.7333374-4.8333359,5.4833374-9.6500015,8.25-14.4499969c-0.9333344-0.5666656-1.8666534-1.0999985-2.8000031-1.5999985c-1.3666687,2.3666687-2.7166748,4.7333374-4.0500031,7.0999985c-3.4333344,5.9666595-6.8666687,11.9666595-10.3000031,18c-3.8000031,6.6000061-7.5833282,13.2166595-11.3499985,19.8500061c-2.0666656,3.6333313-4.1333313,7.25-6.1999969,10.8500061l0.9499969,0.6000061c0.6000061,0.3333282,1.1999969,0.6833344,1.8000031,1.0500031l5.0999985-8.8999939l6.1999969-10.8000031L124.8499985,137.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.14;.14667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M125,136.8000031c3.9333344-6.8666687,7.8666534-13.7500076,11.8000031-20.6500015c2.6000061-4.6000061,5.2166595-9.1833344,7.8500061-13.75c-0.9000092-0.5333328-1.7833252-1.0333328-2.6499939-1.5c-1.3000031,2.2333298-2.5833282,4.4666672-3.8500061,6.6999969c-3.2666626,5.6666641-6.5333252,11.3666687-9.8000031,17.0999985c-3.6000061,6.2666626-7.2000046,12.5666656-10.8000031,18.8999939c-1.9999924,3.4333344-3.9666672,6.8666687-5.9000015,10.3000031l0.9000015,0.5500031l1.6999969,1c1.5999985-2.7999878,3.2166672-5.6166687,4.8499985-8.4499969L125,136.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.13333;.14;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M125.1999969,136.3500061c3.7000122-6.5,7.4166565-13.0166702,11.1499939-19.5500031c2.5-4.3333282,4.9833374-8.6833344,7.4499969-13.0500031c-0.8333282-0.5-1.6833344-0.9833374-2.5500031-1.4499969c-1.1999969,2.1333237-2.4000092,4.2499924-3.6000061,6.3499985c-3.1333313,5.3666687-6.25,10.7666626-9.3500061,16.2000046c-3.4000015,5.9333344-6.8166656,11.8999939-10.25,17.8999939c-1.8666611,3.2666626-3.7166672,6.5333252-5.5500031,9.8000031l0.8499985,0.5l1.5999985,1l4.5999985-8c1.8666687-3.2333374,3.75-6.4666748,5.6500015-9.6999969H125.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.12667;.13333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M125.4000015,135.9499969l10.5999985-18.5c2.3333282-4.0999985,4.6666718-8.2166672,7-12.3499985c-0.8000031-0.4666672-1.5999908-0.9166718-2.3999939-1.3499985c-1.1333313,2-2.2833405,4-3.4499969,6c-2.9333344,5.0333328-5.8666687,10.1166687-8.8000031,15.25c-3.2333298,5.6333313-6.4666672,11.2833252-9.6999969,16.9499969c-1.7666702,3.0666656-3.5333328,6.1499939-5.3000031,9.25l0.8499985,0.5l1.5,0.8999939c1.4333344-2.5,2.8833313-5.0166626,4.3499985-7.5500031c1.7999954-3.0333405,3.5833282-6.0666656,5.3499985-9.1000061V135.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.12;.12667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M125.5500031,135.5c3.3333435-5.7666626,6.6666718-11.5666733,10-17.4000015c2.1999969-3.8666687,4.4000092-7.75,6.6000061-11.6500015c-0.7333374-0.4333344-1.4833374-0.8666611-2.25-1.3000031c-1.0666809,1.8999939-2.1500092,3.7833328-3.25,5.6500015c-2.7666626,4.7333298-5.5333252,9.5166626-8.3000031,14.3499985c-3.0333328,5.3000031-6.0833359,10.6166687-9.1500015,15.9499969c-1.7000046,2.9000092-3.3666687,5.8166809-5,8.75l0.8000031,0.4499969c0.4666672,0.3000031,0.9333344,0.5833282,1.4000015,0.8500061c1.3666763-2.3333282,2.7333298-4.6833344,4.0999985-7.0500031c1.7000046-2.8666687,3.3833313-5.7333374,5.0500031-8.6000061L125.5500031,135.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.11333;.12;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M125.6999969,135.0500031c3.1333313-5.3999939,6.2666626-10.8333282,9.3999939-16.3000031c2.0666809-3.6333313,4.1333313-7.2833252,6.1999969-10.9499969l-2.1000061-1.1999969c-1,1.7666702-2.0166779,3.5166702-3.0500031,5.25c-2.5999908,4.4666672-5.1999969,8.9500046-7.8000031,13.4499969c-2.8666687,4.9666595-5.7333374,9.9499969-8.5999985,14.9499969c-1.6000061,2.7666626-3.1666641,5.5166626-4.6999969,8.25l0.6999969,0.3999939c0.4666672,0.2666626,0.9166718,0.5500031,1.3499985,0.8500061c1.2999954-2.1999969,2.5833359-4.4166718,3.8499985-6.6499939c1.6000061-2.6666718,3.1833344-5.3500061,4.75-8.0500031H125.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.10667;.11333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M125.9000015,134.6499939c2.9000015-5.0666656,5.816658-10.1499939,8.7499924-15.25c1.9666595-3.3999939,3.8999939-6.816658,5.8000031-10.25c-0.6333313-0.3666687-1.2833252-0.7333374-1.9499969-1.0999985c-0.9333344,1.6333313-1.8833313,3.2666626-2.8500061,4.9000015c-2.4666595,4.1333389-4.9166718,8.3000031-7.3500061,12.5c-2.6666641,4.6333313-5.3499985,9.3000031-8.0500031,14c-1.4666595,2.5666656-2.9166641,5.1333313-4.3499985,7.6999969l0.6500015,0.3999939c0.4333267,0.2333374,0.8499985,0.4833374,1.25,0.75c1.2000046-2.0333405,2.4000015-4.0833282,3.5999985-6.1499939l4.5-7.5H125.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.1;.10667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M126.0500031,134.1999969c2.6999969-4.6999969,5.4166718-9.4166718,8.1499939-14.1500015c1.8333282-3.1666641,3.6333313-6.3500061,5.3999939-9.5500031c-0.5999908-0.3333359-1.1999969-0.6833344-1.8000031-1.0500031c-0.8666687,1.5333405-1.75,3.0500031-2.6499939,4.5500031c-2.3000031,3.8333282-4.5833282,7.6999969-6.8500061,11.5999985c-2.5,4.2999878-5,8.6333313-7.5,13c-1.3666687,2.4000092-2.7166748,4.8000031-4.0500031,7.1999969l0.5999985,0.3500061c0.3999939,0.2333374,0.7833405,0.4666595,1.1500015,0.6999969c1.1333389-1.8666687,2.2499924-3.7666626,3.3499985-5.6999969c1.3999939-2.3000031,2.8000031-4.6166687,4.1999969-6.9499969H126.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.09333;.1;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M126.1999969,133.8000031c2.5333405-4.3333282,5.0666656-8.6999969,7.6000061-13.0999985l5-8.8000031c-0.5666656-0.3666687-1.1333313-0.6999969-1.6999969-1c-0.8333282,1.3666687-1.6666718,2.75-2.5,4.1500015c-2.0999908,3.5333328-4.1999969,7.1166611-6.3000031,10.75c-2.3000031,3.9666595-4.6166611,7.9666595-6.9499969,12c-1.2999954,2.1999969-2.566658,4.4000092-3.8000031,6.6000061l0.5999985,0.3500061c0.3333359,0.2333374,0.6999969,0.4666748,1.0999985,0.6999969c1-1.7666626,2.0333328-3.5166626,3.0999985-5.25c1.2999954-2.0999908,2.5833282-4.2333221,3.8499985-6.3999939V133.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.08667;.09333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M126.3499985,133.3500061c2.3333359-3.9666595,4.6666794-7.9666672,7.0000076-12l4.6000061-8.0999985c-0.5333405-0.3333282-1.0500031-0.6500015-1.5500031-0.9499969l-2.3000031,3.8000031c-1.9333344,3.2333298-3.8666687,6.5166626-5.8000031,9.8499985c-2.1333389,3.6333313-4.2666702,7.3000031-6.4000015,11c-1.1999969,2.0333405-2.3666687,4.0666656-3.5,6.1000061l0.5500031,0.3000031c0.2999954,0.2333374,0.6333313,0.4500122,1,0.6499939c0.9333344-1.5999908,1.8833313-3.1999969,2.8499985-4.8000031C124,137.3000031,125.183342,135.3500061,126.3499985,133.3500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.08;.08667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M126.5500031,132.9499969c2.1000061-3.6333313,4.2166595-7.2833328,6.3500061-10.9499969c1.4333191-2.4666672,2.8333282-4.9333267,4.1999969-7.4000015c-0.4666595-0.3000031-0.9333344-0.5833359-1.3999939-0.8499985c-0.6999969,1.1333313-1.4000092,2.2833252-2.1000061,3.4499969c-1.8000031,2.9000015-3.5833282,5.8666611-5.3500061,8.9000015c-1.9333267,3.3000107-3.8833313,6.6500015-5.8499985,10.0499954c-1.0666656,1.8333282-2.1166687,3.6833344-3.1500015,5.5500031L119.75,142c0.2666626,0.1999969,0.5666733,0.3833466,0.9000015,0.5500031c0.8333359-1.4333191,1.6999969-2.8666687,2.5999985-4.3000031C124.3499985,136.5166626,125.4500046,134.75,126.5500031,132.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.07333;.08;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M126.6999969,132.5c1.8999939-3.2666626,3.8166656-6.5499954,5.75-9.8499985c1.3000031-2.2333374,2.5666656-4.4666595,3.8000031-6.6999969c-0.4333344-0.2666626-0.8499908-0.5166626-1.25-0.75c-0.6333313,1-1.2666626,2.0166702-1.8999939,3.0500031c-1.6333313,2.6333313-3.25,5.3000031-4.8500061,8c-1.7666626,2.9666672-3.5333328,5.9833298-5.3000031,9.0499954c-0.9666595,1.6999969-1.9166641,3.3833313-2.8499985,5.0500031l0.4000015,0.25c0.2666626,0.1666718,0.5499954,0.3500061,0.8499985,0.5500031c0.7666702-1.2999878,1.5500031-2.6000061,2.3499985-3.8999939c0.9999924-1.5333405,1.9999924-3.1166687,3-4.75V132.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.06667;.07333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M126.8499985,132.0500031c1.7000046-2.8666687,3.4166641-5.7833405,5.1500015-8.75c1.1666718-1.9999924,2.3000031-3.9999924,3.3999939-6l-1.1000061-0.6999969l-1.6999969,2.6999969c-1.4666748,2.3333359-2.9166565,4.6999969-4.3500061,7.0999985c-1.5666656,2.6333389-3.1500015,5.3166733-4.75,8.0499954C122.5999832,135.9833374,121.7499771,137.5,120.9499817,139l0.3499985,0.1999969c0.2333374,0.1666565,0.4833374,0.3333282,0.75,0.5l2.0999985-3.3999939c0.9000015-1.3666687,1.7999954-2.7833405,2.6999969-4.25H126.8499985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.06;.06667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M133.6000061,118.0500031c-0.5,0.7666702-1.0166779,1.5500031-1.5500031,2.3499985c-1.2666626,2-2.5333252,4.0500031-3.8000031,6.1500015c-1.4000015,2.3333435-2.7999954,4.6999969-4.1999969,7.1000061c-0.8000031,1.3333282-1.5666656,2.6666565-2.3000031,4l0.3499985,0.1999969c0.1999969,0.1333313,0.4166641,0.2666626,0.6500015,0.3999939c0.5999985-0.9666595,1.2166672-1.9499969,1.8499985-2.9499969c0.8333282-1.1666565,1.6333389-2.3833313,2.4000015-3.6499939c1.5333405-2.5333252,3.0666656-5.0999985,4.6000061-7.6999969c1-1.7666626,1.9833221-3.5333328,2.9499969-5.3000031C134.2166748,118.4500122,133.9000092,118.2500076,133.6000061,118.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.05333;.06;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M132.8500061,119.4499969c-0.4000092,0.6666641-0.8333435,1.3333282-1.3000031,2c-1.1333313,1.7000046-2.25,3.4500046-3.3500061,5.25c-1.1999969,2-2.4166718,4.0333405-3.6500015,6.1000061c-0.6666641,1.1666718-1.3166656,2.3333435-1.9499969,3.5l0.3000031,0.1499939c0.1666718,0.1333313,0.3499985,0.2666626,0.5500031,0.3999939l1.5999985-2.5c0.7333298-1,1.4499969-2.0500031,2.1500015-3.1499939c1.3000107-2.1666718,2.6166611-4.3666611,3.9500046-6.5999985c0.8999939-1.5,1.75-3.0333252,2.5500031-4.5999985C133.4333496,119.8333359,133.1500092,119.6500015,132.8500061,119.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.04667;.05333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M132.1499939,120.9000015c-0.3333282,0.5333405-0.6999969,1.0666733-1.1000061,1.5999985c-0.9666595,1.4000015-1.9166718,2.8499985-2.8500061,4.3499985c-1,1.6666794-2.0333328,3.3833389-3.0999985,5.1500015c-0.6000061,0.9666595-1.1500015,1.9499969-1.6500015,2.9499969l0.25,0.1000061c0.1333313,0.1333313,0.2833328,0.25,0.4499969,0.3500061c0.4333344-0.6666718,0.8833389-1.3500061,1.3499985-2.0500031c0.6333313-0.8000031,1.25-1.6499939,1.8499985-2.5500031C128.4499664,129,129.5666351,127.1500015,130.6999817,125.25c0.7666626-1.2666626,1.4833221-2.5666733,2.1499939-3.9000015c-0.2333374-0.1333313-0.4666748-0.2833252-0.6999969-0.4499969H132.1499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.04;.04667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M131.4499969,122.3499985c-0.2999878,0.4000015-0.6000061,0.8166656-0.8999939,1.25c-0.8000031,1.0666656-1.5833282,2.2166595-2.3500061,3.4499969c-0.8333359,1.2999954-1.6833344,2.6666641-2.5500031,4.0999985c-0.5,0.8000031-0.9500046,1.5999908-1.3499985,2.3999939l0.1999969,0.1499939c0.1000061,0.0999908,0.2166595,0.1999969,0.3499985,0.3000031c0.3666611-0.5333252,0.7500076-1.0666809,1.1500015-1.6000061c0.5-0.6333313,1-1.3166656,1.5-2.0500031c0.9000015-1.4333344,1.8166733-2.9166641,2.7500076-4.4499969c0.6333313-1.0333405,1.2333374-2.0833359,1.8000031-3.1500015c-0.2000122-0.1666641-0.3999939-0.3000031-0.6000061-0.4000015V122.3499985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.03333;.04;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M129.8000031,126.5500031c0.5-0.8000031,0.9666595-1.6166611,1.3999939-2.4499969c-0.1666718-0.1333313-0.3166656-0.25-0.4499969-0.3499985l-0.6999969,0.9000015c-0.6333313,0.8000031-1.25,1.6500015-1.8500061,2.5500031c-0.6666718,0.9666595-1.3333359,2.0166626-2,3.1499939c-0.4000015,0.6333313-0.7500076,1.25-1.0500031,1.8500061l0.0999985,0.1000061c0.1000061,0.0666656,0.1999969,0.1500092,0.3000031,0.25c0.2666626-0.3666687,0.5666656-0.75,0.9000015-1.1499939c0.4000015-0.4333344,0.8000031-0.9166718,1.1999969-1.4499969c0.6999969-1.0999908,1.4166718-2.2333298,2.1499939-3.4000015L129.8000031,126.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.02667;.03333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M129.3999939,127.1999969c0.3666687-0.5666656,0.6833344-1.1500015,0.9499969-1.75c-0.0999908-0.0999985-0.1999969-0.1833344-0.3000031-0.25c-0.1666718,0.1666641-0.3499908,0.3333282-0.5500031,0.5c-0.4666595,0.4999924-0.9166718,1.0500031-1.3500061,1.6500015c-0.4666672,0.6666794-0.9499969,1.3833389-1.4499969,2.1500015c-0.2666702,0.4666595-0.5166702,0.9166718-0.75,1.3500061l0.0999985,0.0500031l0.1999969,0.1999969l0.6500015-0.6499939c0.3333359-0.2666626,0.6500015-0.5833282,0.9499969-0.9499969c0.5-0.7333374,1.0166626-1.5,1.5500031-2.3000031L129.3999939,127.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.02;.02667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st46' d='M129.5,126.8000031c-0.0666656-0.0666656-0.1166687-0.1333389-0.1499939-0.1999969c-0.0999908,0.066658-0.2166595,0.1333313-0.3500061,0.1999969c-0.3000031,0.1666718-0.5833282,0.4000015-0.8500061,0.6999969c-0.2666702,0.3333359-0.5666733,0.7333374-0.9000015,1.1999969c-0.2000046,0.2666626-0.3499985,0.5333252-0.4499969,0.8000031l0.0500031,0.0500031c0.0333328,0.0333252,0.0666656,0.0833435,0.0999985,0.1499939c0.0999985-0.0666809,0.2333298-0.1500092,0.4000015-0.25c0.2333374-0.0666809,0.4499969-0.1833344,0.6500015-0.3500061c0.3000031-0.3666687,0.6166534-0.7833405,0.9499969-1.25c0.2333374-0.3333282,0.4166718-0.6833344,0.5500031-1.0500031V126.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.01333;.02;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g transform='translate(-202 -13)' class='st0'><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.00667;.01333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='3s' fill='freeze' keyTimes='0;.00667;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g></g></svg>","contacts":"<svg version='1.1'id='Layer_1' image-rendering='inherit' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><g><g class='st0'><path class='st1' d='M357,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C241.0333405,46.75,218.1666718,38,190,38s-51.0333405,8.75-68.5999985,26.25C102.4666672,83.1500015,93,109.4000015,93,143c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833389,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C44.2166634,273.9833374,33.5,305.0666809,23,346L357,345.8999939M170.6000061,82.6500015C176.5333252,80.8833313,183,80,190,80s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3499908,13.9499969,13.0500031,23.8499985C243.9833374,125.3333359,245,133.7333374,245,143c0,17.3666687-5.3833466,32.1999969-16.1499939,44.5C218.0833282,199.8333282,205.1333466,206,190,206c-15.1666718,0-28.1333313-6.1666718-38.8999939-18.5C140.3666687,175.1999969,135,160.3666687,135,143c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M117.9500046,239.75c5.7999954-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C171.3166656,246.5500031,180.5333252,248,190,248c9.4333344,0,18.6499786-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.4000092,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C86.2500229,283.5500183,93.8166885,267.7333374,101.7500153,256.5C106.8500137,249.3333282,112.2500229,243.75,117.9500046,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0285714286;.0571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st2' d='M359,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C243.0333405,46.75,220.1666718,38,192,38s-51.0333405,8.75-68.5999985,26.25C104.4666672,83.1500015,95,109.4000015,95,143c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833389,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C46.2166634,273.9833374,35.5,305.0666809,25,346L359,345.8999939M153.0500031,93.9499969c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031C178.5333252,80.8833313,185,80,192,80s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3499908,13.9499969,13.0500031,23.8499985C245.9833374,125.3333359,247,133.7333374,247,143c0,17.3666687-5.3833466,32.1999969-16.1499939,44.5C220.0833282,199.8333282,207.1333466,206,192,206c-15.1666718,0-28.1333313-6.1666718-38.8999939-18.5C142.3666687,175.1999969,137,160.3666687,137,143c0-12.3333282,1.75-23,5.25-32C144.9499969,104.0999985,148.5500031,98.4166641,153.0500031,93.9499969 M103.75,256.5c5.0999985-7.1666718,10.5-12.75,16.1999969-16.75c5.8000031-4.0666656,12.4166565-6.8166656,19.8500061-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C173.3166656,246.5500031,182.5333252,248,192,248c9.4333344,0,18.6499786-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.4000092,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C88.2500229,283.5500183,95.8166885,267.7333374,103.7500153,256.5H103.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0285714286;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g class='st0'><path class='st1' d='M384,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C268.0333557,46.75,245.1666718,38,217,38s-51.0333405,8.75-68.6000061,26.25C129.4666595,83.1500015,120,109.4000015,120,143c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833313,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.1000061,28.1833191-52,55.1499939C71.2166672,273.9833374,60.5,305.0666809,50,346L384,345.8999939M178.0500031,93.9499969c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031C203.5333252,80.8833313,210,80,217,80s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6.0000153,6,10.3500214,13.9499969,13.0500031,23.8499985C270.9833374,125.3333359,272,133.7333374,272,143c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5C245.0833282,199.8333282,232.1333466,206,217,206c-15.1666718,0-28.1333466-6.1666718-38.8999939-18.5C167.3666687,175.1999969,162,160.3666687,162,143c0-12.3333282,1.75-23,5.25-32C169.9499969,104.0999985,173.5500031,98.4166641,178.0500031,93.9499969 M128.75,256.5c5.0999908-7.1666718,10.5-12.75,16.1999969-16.75c5.8000031-4.0666656,12.4166565-6.8166656,19.8500061-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C198.3166656,246.5500031,207.5333252,248,217,248c9.4333344,0,18.6499786-1.4499969,27.6499939-4.3500061c8.6999817-2.8000031,16.8999939-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878c7.2000046-20.3999939,14.7666702-36.2166748,22.6999969-47.4500122H128.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.3428571429;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M383.75,345.8999939C373.2166748,304.9666748,362.5,273.9166565,351.6000061,252.75c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C267.7833557,46.75,244.9166718,38,216.75,38s-51.0333405,8.75-68.6000061,26.25c-18.9333344,18.9000015-28.4000015,45.1500015-28.4000015,78.75c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.3999939,9.0999908,5.8833389,17.6833191,10.4500046,25.75c-20.7666702,9.8000031-38.1000061,28.1833191-52,55.1499939C70.9666672,273.9833374,60.25,305.0666809,49.75,346L383.75,345.8999939 M177.8000031,93.9499969c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031C203.2833252,80.8833237,209.75,79.9999924,216.75,79.9999924s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.1000061,19.5500031,11.3000031c6.0000153,5.9999924,10.3500214,13.9499969,13.0500031,23.8499985C270.7333374,125.3333206,271.75,133.7333221,271.75,143c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5C244.8333282,199.8333282,231.8833466,206,216.75,206c-15.1666718,0-28.1333466-6.1666718-38.8999939-18.5C167.1166687,175.1999969,161.75,160.3666687,161.75,143c0-12.3333282,1.75-23,5.25-32C169.6999969,104.0999985,173.3000031,98.4166641,177.8000031,93.9499969 M128.5,256.5c5.0999908-7.1666718,10.5-12.75,16.1999969-16.75c5.8000031-4.0666656,12.4166565-6.8166656,19.8500061-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C198.0666656,246.5500031,207.2833252,248,216.75,248c9.4333344,0,18.6499786-1.4499969,27.6499939-4.3500061c8.6999817-2.8000031,16.8999939-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878c7.2000046-20.3999939,14.7666702-36.2166748,22.6999969-47.4500122H128.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.3142857143;.3428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M383.1000061,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.8999939-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666809-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666443-59.8499985-28.3999939-78.75C267.1333313,46.75,244.2666779,38,216.1000061,38S165.0666656,46.75,147.5,64.25c-18.9333344,18.9000015-28.4000015,45.1500015-28.4000015,78.75c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.3999939,9.0999908,5.8833389,17.6833191,10.4500046,25.75c-20.7666626,9.8000031-38.0999985,28.1833191-52,55.1499939C70.3166656,273.9833374,59.5999947,305.0666809,49.0999985,346L383.1000061,345.8999939 M177.1499939,93.9499969c5.2333527-5.1999969,11.7500153-8.9666672,19.5500031-11.3000031C202.6333466,80.8833313,209.1000214,80,216.1000061,80c7.0000153,0,13.4499969,0.8833313,19.3500061,2.6500015C243.25,84.9833374,249.7666779,88.75,255.0000153,93.9500046c5.9999847,6,10.3499908,13.9499969,13.0500031,23.8499985c2.0333252,7.5333328,3.0499878,15.9333344,3.0499878,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666626,12.3333282-23.7166748,18.5-38.8500061,18.5c-15.1666565,0-28.1333313-6.1666718-38.8999939-18.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031 M127.8500061,256.5c5.0999908-7.1666718,10.4999847-12.75,16.1999969-16.75c5.7999878-4.0666656,12.4166718-6.8166656,19.8500061-8.25c7.6666565,5.3000031,15.8499908,9.3499908,24.5500031,12.1499939C197.4166718,246.5500031,206.6333466,248,216.1000061,248c9.4333191,0,18.6499939-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.8999939-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333618,9.5833282,16.2000122,16.7500153c7.9000244,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C112.350029,283.5500183,119.916687,267.7333374,127.8500214,256.5H127.8500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2857142857;.3142857143;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M381.7999878,345.8999939c-10.5332947-40.9333191-21.2499695-71.9833374-32.1499939-93.1499939c-13.8999939-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666809-8.0999908,8.0499878-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C265.8333435,46.75,242.9666595,38,214.8000031,38s-51.0333252,8.75-68.5999908,26.25c-18.933342,18.9000015-28.4000015,45.1500015-28.4000092,78.75c0.0000076,9.8666687,1.2333298,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833313,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C69.0166626,273.9833374,58.2999992,305.0666809,47.7999992,346L381.7999878,345.8999939 M175.8500061,93.9499969c5.2333221-5.1999969,11.7500153-8.9666672,19.5500031-11.3000031C201.3333282,80.8833313,207.8000031,80,214.8000031,80S228.25,80.8833313,234.1500092,82.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3500061,13.9499969,13.0499878,23.8499985c2.0333252,7.5333328,3.0499878,15.9333344,3.0499878,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666473,12.3333282-23.7166595,18.5-38.8499908,18.5c-15.1666565,0-28.1333313-6.1666718-38.9000092-18.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031 M126.5499878,256.5c5.0999908-7.1666718,10.5-12.75,16.1999969-16.75c5.8000031-4.0666656,12.4166565-6.8166656,19.8500061-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C196.1166534,246.5500031,205.3333282,248,214.8000031,248c9.4333344,0,18.6499939-1.4499969,27.6499939-4.3500061c8.7000122-2.8000031,16.9000092-6.8666687,24.5999908-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878c7.2000046-20.3999939,14.7666702-36.2166748,22.6999969-47.4500122H126.5499878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2571428571;.2857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M379.75,345.8999939C369.2166748,304.9666748,358.5,273.9166565,347.6000061,252.75c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C263.7833557,46.75,240.9166718,38,212.75,38s-51.0333405,8.75-68.6000061,26.25c-18.933342,18.9000015-28.4000015,45.1500015-28.4000015,78.75c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.3999939,9.0999908,5.8833313,17.6833191,10.4500046,25.75c-20.7666702,9.8000031-38.1000061,28.1833191-52,55.1499939C66.9666672,273.9833374,56.25,305.0666809,45.75,346L379.75,345.8999939 M173.8000031,93.9499969c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031C199.2833252,80.8833237,205.75,79.9999924,212.75,79.9999924s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.1000061,19.5500031,11.3000031c6.0000153,5.9999924,10.3500214,13.9499969,13.0500031,23.8499985C266.7333374,125.3333206,267.75,133.7333221,267.75,143c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5C240.8333282,199.8333282,227.8833466,206,212.75,206c-15.1666718,0-28.1333466-6.1666718-38.8999939-18.5C163.1166687,175.1999969,157.75,160.3666687,157.75,143c0-12.3333282,1.75-23,5.25-32C165.6999969,104.0999985,169.3000031,98.4166641,173.8000031,93.9499969 M140.7000122,239.75c5.8000031-4.0666656,12.4166718-6.8166656,19.8500061-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C194.0666962,246.5500031,203.2833405,248,212.7500153,248c9.4333344,0,18.6499939-1.4499969,27.6499939-4.3500061c8.7000122-2.8000031,16.9000092-6.8666687,24.5999908-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878c7.2000046-20.3999939,14.7666702-36.2166748,22.6999969-47.4500122C129.6000214,249.3333282,135.0000153,243.75,140.7000122,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2285714286;.2571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M376.1000061,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.8999939-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666809-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666443-59.8499985-28.3999939-78.75C260.1333313,46.75,237.2666779,38,209.1000061,38S158.0666656,46.75,140.5,64.25c-18.9333267,18.9000015-28.4000015,45.1500015-28.4000015,78.75c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.3999939,9.0999908,5.8833313,17.6833191,10.4499969,25.75c-20.7666626,9.8000031-38.0999985,28.1833191-52,55.1499939C63.3166618,273.9833374,52.5999947,305.0666809,42.0999985,346L376.1000061,345.8999939 M170.1499939,93.9499969c5.2333527-5.1999969,11.7500153-8.9666672,19.5500031-11.3000031C195.6333466,80.8833313,202.1000214,80,209.1000061,80c7.0000153,0,13.4499969,0.8833313,19.3500061,2.6500015C236.25,84.9833374,242.7666779,88.75,248.0000153,93.9500046c5.9999847,6,10.3499908,13.9499969,13.0500031,23.8499985c2.0333252,7.5333328,3.0499878,15.9333344,3.0499878,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666626,12.3333282-23.7166748,18.5-38.8500061,18.5c-15.1666565,0-28.1333313-6.1666718-38.8999939-18.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031 M137.0500183,239.75c5.8000031-4.0666656,12.4166718-6.8166656,19.8500061-8.25c7.6666718,5.3000031,15.8499908,9.3499908,24.5500031,12.1499939C190.4166718,246.5500031,199.6333466,248,209.1000061,248c9.4333191,0,18.6499939-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333618,9.5833282,16.2000122,16.7500153c7.9000244,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C105.350029,283.5500183,112.916687,267.7333374,120.8500214,256.5C125.9500122,249.3333282,131.3500214,243.75,137.0500183,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2;.2285714286;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M364.8999939,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.8999939-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666809-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C248.9333496,46.75,226.0666504,38,197.8999939,38s-51.0333405,8.75-68.6000061,26.25c-18.9333267,18.9000015-28.3999863,45.1500015-28.3999863,78.75c0,9.8666687,1.2333298,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833313,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.1000061,28.1833191-52,55.1499939C52.1166687,273.9833374,41.4000015,305.0666809,30.8999996,346L364.8999939,345.8999939 M178.5,82.6500015C184.4333344,80.8833313,190.8999786,80,197.8999939,80c6.9999847,0,13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3500061,13.9499969,13.0500031,23.8499985c2.0333405,7.5333328,3.0500031,15.9333344,3.0500031,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666779,12.3333282-23.7166901,18.5-38.8500214,18.5C182.7333221,206,169.7666626,199.8333282,159,187.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M125.8499985,239.75c5.8000107-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666565,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C179.2166748,246.5500031,188.4333344,248,197.8999939,248c9.4333344,0,18.6499939-1.4499969,27.6499939-4.3500061c8.7000122-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.4000244,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153C294,267.6166687,301.5666809,283.4333496,308.8000183,303.9000244l-221.8500061,0.0499878c7.2000046-20.3999939,14.7666626-36.2166748,22.6999969-47.4500122C114.7500076,249.3333282,120.1500015,243.75,125.8499985,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.1714285714;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M361.25,345.8999939C350.7166748,304.9666748,340,273.9166565,329.1000061,252.75c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C245.2833405,46.75,222.4166718,38,194.25,38s-51.0333405,8.75-68.5999985,26.25C106.7166672,83.1500015,97.25,109.4000015,97.25,143c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833389,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C48.4666634,273.9833374,37.75,305.0666809,27.25,346L361.25,345.8999939 M174.8500061,82.6500015C180.7833252,80.8833313,187.25,80,194.25,80s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3499908,13.9499969,13.0500031,23.8499985c2.0333405,7.5333328,3.0500031,15.9333344,3.0500031,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666626,12.3333282-23.7166595,18.5-38.8499908,18.5c-15.1666565,0-28.1333313-6.1666718-38.8999939-18.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M122.2000351,239.75c5.8000107-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666565,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C175.5666962,246.5500031,184.783371,248,194.2500305,248c9.4333191,0,18.6499939-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333618,9.5833282,16.2000122,16.7500153c7.9000244,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C90.5000534,283.5500183,98.0667114,267.7333374,106.0000458,256.5C111.1000443,249.3333282,116.5000381,243.75,122.2000351,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.1428571429;.1714285714;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M359.2000122,345.8999939c-10.5333557-40.9333191-21.2499695-71.9833374-32.1499939-93.1499939c-13.8999939-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666809-8.0999908,8.0499878-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C243.2333527,46.75,220.3666534,38,192.1999969,38s-51.0333252,8.75-68.5999985,26.25C104.6666641,83.1500015,95.1999893,109.4000015,95.1999969,143c-0.0000076,9.8666687,1.2333298,19.4833374,3.6999969,28.8500061c2.3999939,9.0999908,5.8833313,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C46.4166679,273.9833374,35.7000008,305.0666809,25.2000008,346L359.2000122,345.8999939 M172.8000031,82.6500015C178.7333374,80.8833313,185.1999969,80,192.1999969,80s13.4500122,0.8833313,19.3500061,2.6500015c7.7999878,2.3333359,14.3166504,6.0999985,19.5500031,11.3000031c6.0000153,6,10.3500061,13.9499969,13.0500031,23.8499985c2.0333405,7.5333328,3.0500031,15.9333344,3.0500031,25.1999969c0,17.3666687-5.383316,32.1999969-16.1499939,44.5c-10.7666931,12.3333282-23.7166901,18.5-38.8500214,18.5c-15.1666718,0-28.1333313-6.1666718-38.9000092-18.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M120.1499863,239.75c5.8000031-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666565,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C173.5166626,246.5500031,182.7333374,248,192.1999969,248c9.4333191,0,18.6499939-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833527,4.2166748,19.7500153,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C88.4500351,283.5500183,96.0167007,267.7333374,103.9500275,256.5c5.0999985-7.1666718,10.5000076-12.75,16.1999969-16.75H120.1499863z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.1142857143;.1428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M357.8999939,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.8999939-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666809-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C241.9333496,46.75,219.0666504,38,190.8999939,38s-51.0333405,8.75-68.5999985,26.25C103.3666687,83.1500015,93.9000015,109.4000015,93.9000015,143c0,9.8666687,1.2333298,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833313,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.1000061,28.1833191-52,55.1499939C45.1166687,273.9833374,34.4000015,305.0666809,23.8999996,346L357.8999939,345.8999939 M171.5,82.6500015C177.4333344,80.8833313,183.8999786,80,190.8999939,80c6.9999847,0,13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3500061,13.9499969,13.0500031,23.8499985c2.0333405,7.5333328,3.0500031,15.9333344,3.0500031,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666779,12.3333282-23.7166901,18.5-38.8500214,18.5C175.7333221,206,162.7666626,199.8333282,152,187.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M118.8499985,239.75c5.7999954-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666565,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C172.2166748,246.5500031,181.4333344,248,190.8999939,248c9.4333344,0,18.6499939-1.4499969,27.6499939-4.3500061c8.7000122-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.4000092,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153C287,267.6166687,294.5666809,283.4333496,301.8000183,303.9000244l-221.8500061,0.0499878C87.1500168,283.5500183,94.7166748,267.7333374,102.6500092,256.5C107.7500076,249.3333282,113.1500015,243.75,118.8499985,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0857142857;.1142857143;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M357.25,345.8999939C346.7166748,304.9666748,336,273.9166565,325.1000061,252.75c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C241.2833405,46.75,218.4166718,38,190.25,38s-51.0333405,8.75-68.5999985,26.25C102.7166672,83.1500015,93.25,109.4000015,93.25,143c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833389,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C44.4666634,273.9833374,33.75,305.0666809,23.25,346L357.25,345.8999939 M170.8500061,82.6500015C176.7833252,80.8833313,183.25,80,190.25,80s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3499908,13.9499969,13.0500031,23.8499985c2.0333405,7.5333328,3.0500031,15.9333344,3.0500031,25.1999969c0,17.3666687-5.3833313,32.1999969-16.1499939,44.5c-10.7666626,12.3333282-23.7166595,18.5-38.8499908,18.5c-15.1666565,0-28.1333313-6.1666718-38.8999939-18.5c-10.7333374-12.3000031-16.1000061-27.1333313-16.1000061-44.5c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M118.2000351,239.75c5.7999954-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666565,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C171.5666962,246.5500031,180.783371,248,190.2500305,248c9.4333191,0,18.6499939-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.3999939,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333618,9.5833282,16.2000122,16.7500153c7.9000244,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C86.5000534,283.5500183,94.0667114,267.7333374,102.0000458,256.5C107.1000443,249.3333282,112.5000381,243.75,118.2000351,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0571428571;.0857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M357,345.8999939c-10.5333252-40.9333191-21.25-71.9833374-32.1499939-93.1499939c-13.9000244-26.9666748-31.2333374-45.3666534-52-55.1999969c4.5666504-8.0999908,8.0500183-16.6833191,10.4500122-25.75c2.4666748-9.3999939,3.7000122-19,3.7000122-28.8000031c0-33.5999985-9.4666748-59.8499985-28.3999939-78.75C241.0333405,46.75,218.1666718,38,190,38s-51.0333405,8.75-68.5999985,26.25C102.4666672,83.1500015,93,109.4000015,93,143c0,9.8666687,1.2333374,19.4833374,3.6999969,28.8500061c2.4000015,9.0999908,5.8833389,17.6833191,10.4499969,25.75c-20.7666702,9.8000031-38.0999985,28.1833191-52,55.1499939C44.2166634,273.9833374,33.5,305.0666809,23,346L357,345.8999939M170.6000061,82.6500015C176.5333252,80.8833313,183,80,190,80s13.4499969,0.8833313,19.3500061,2.6500015c7.8000031,2.3333359,14.3166656,6.0999985,19.5500031,11.3000031c6,6,10.3499908,13.9499969,13.0500031,23.8499985C243.9833374,125.3333359,245,133.7333374,245,143c0,17.3666687-5.3833466,32.1999969-16.1499939,44.5C218.0833282,199.8333282,205.1333466,206,190,206c-15.1666718,0-28.1333313-6.1666718-38.8999939-18.5C140.3666687,175.1999969,135,160.3666687,135,143c0-12.3333282,1.75-23,5.25-32c2.6999969-6.9000015,6.3000031-12.5833359,10.8000031-17.0500031c5.2333374-5.1999969,11.75-8.9666672,19.5500031-11.3000031M117.9500046,239.75c5.7999954-4.0666656,12.4166641-6.8166656,19.8499985-8.25c7.6666718,5.3000031,15.8500061,9.3499908,24.5500031,12.1499939C171.3166656,246.5500031,180.5333252,248,190,248c9.4333344,0,18.6499786-1.4499969,27.6499939-4.3500061c8.6999969-2.8000031,16.9000092-6.8666687,24.6000061-12.1999969c7.4000092,1.4666748,13.9833374,4.2166748,19.75,8.25c5.7333374,4,11.1333313,9.5833282,16.2000122,16.7500153c7.8999939,11.1666565,15.4666748,26.9833374,22.7000122,47.4500122l-221.8500061,0.0499878C86.2500229,283.5500183,93.8166885,267.7333374,101.7500153,256.5C106.8500137,249.3333282,112.2500229,243.75,117.9500046,239.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0285714286;.0571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><animate accumulate='none' additive='replace' calcMode='linear' display='none' fill='remove' restart='always'></animate></g><g class='st0'><path class='st1' d='M0,123h78.9499969C80.4833298,108,83.75,94,88.75,81H0V123z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.3428571429;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M56.9500008,123C58.4833336,108,61.75,94,66.75,81H-22v42C-22,123,56.9499969,123,56.9500008,123z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.3142857143;.3428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M34.9500008,123C36.4833336,108,39.75,94,44.75,81H-44v42C-44,123,34.9499969,123,34.9500008,123z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2857142857;.3142857143;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M12.9499998,123C14.4833336,108,17.75,94,22.75,81H-66v42C-66,123,12.9499969,123,12.9499998,123z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2571428571;.2857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-88,81v42h78.9499969c1.5333333-15,4.8000002-29,9.8000002-42H-88z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2285714286;.2571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M80.5500031,171H0v42h56.7999992c7.9333305-12.0333252,16.6499977-22.3833466,26.1499977-31.0500031C82.0166626,178.4499969,81.2166672,174.8000031,80.5500031,171z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.5142857143;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M62.4500008,181.9499969c-0.9333344-3.5-1.7333374-7.1499939-2.4000015-10.9499969H-20.5v42h56.7999992C44.2333336,200.9666748,52.9499969,190.6166534,62.4500008,181.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.4857142857;.5142857143;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M41.9500008,181.9499969c-0.9333344-3.5-1.7333374-7.1499939-2.4000015-10.9499969H-41v42h56.7999992C23.7333317,200.9666748,32.4499969,190.6166534,41.9500008,181.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.4571428571;.4857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M21.4500008,181.9499969c-0.9333324-3.5-1.7333336-7.1499939-2.3999996-10.9499969H-61.5v42h56.7999992C3.2333324,200.9666748,11.9499998,190.6166534,21.4500008,181.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.4285714286;.4571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-1.45,171H-82v42h56.7999992c7.9333324-12.0333252,16.6499996-22.3833466,26.1499996-31.0500031C0.0166655,178.4499969-0.7833345,174.8000031-1.45,171z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.4;.4285714286;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M32.4500008,261H0v42h18.2000008C22.9666672,287,27.7166672,273,32.4500008,261z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.7428571429;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M32.4500008,261H0v42h18.2000008C22.9666672,287,27.7166672,273,32.4500008,261z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.6857142857;.7428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M11.8000002,303c4.7666674-16,9.5166674-30,14.249999-42H-6.4000001v42C-6.4000001,303,11.8000011,303,11.8000002,303z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.6571428571;.6857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M5.4000001,303c4.7666669-16,9.5166664-30,14.25-42h-32.4500008v42H5.4000001z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.6285714286;.6571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-19.2000008,303H-1c4.7666664-16,9.5166664-30,14.25-42h-32.4500008V303z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.6;.6285714286;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-25.6000004,303h18.2000008c4.7666664-16,9.5166664-30,14.25-42h-32.4500008V303z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.5714285714;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.5428571429;.5714285714;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.5142857143;.5428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g></g></svg>","settings":"<svg xmlns='http://www.w3.org/2000/svg' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='384' height='384' baseProfile='basic' image-rendering='inherit' preserveAspectRatio='xMidYMid' viewBox='0 0 384 384' anigen:version='0.8.1'><defs><path id='a' fill='#42A5F5' d='M151.25-120.55l-30.55-30.3-46.7 46.5Q50.05-121 21.3-125.7V-192h-42.65v65.9q-28.75 4.65-52.7 21.35l-46.7-46.1-30.1 30.1 46.5 46.7Q-121-50.1-125.7-21.35H-192V21.3h65.9q4.65 28.75 21.35 52.7l-46.1 46.7 30.1 30.1 46.5-46.5q23.95 16.65 52.7 21.35V192H21.1v-65.95q28.75-4.65 52.7-21.35l46.5 46.55 30.05-30.1-46.5-46.5q16.7-23.95 21.35-52.7H192v-43.3h-65.95q-4.65-28.75-21.35-52.7l46.55-46.5M0-89.4q18.2 0 34.8 7 16 6.8 28.4 19.2 12.35 12.35 19.15 28.4 7 16.6 7 34.8 0 18.2-7 34.8-6.8 16-19.15 28.4-12.4 12.35-28.4 19.15-16.6 7-34.8 7-18.2-.05-34.75-7.05-16.05-6.8-28.4-19.15-12.4-12.4-19.2-28.4-7-16.6-7.05-34.75 0-18.2 7-34.8 6.8-16.05 19.2-28.4 12.35-12.4 28.4-19.2 16.6-7 34.8-7z' overflow='visible'/><use id='f' overflow='visible' xlink:href='#a'/><g id='b' fill='#42A5F5' overflow='visible'><path d='M29-29Q16.95-41 0-41q-17 0-29 12T-41 0q0 16.95 12 29 12 12 29 12 16.95 0 29-12Q41 16.95 41 0q0-17-12-29z'/><path d='M150.7-120.7l-30.15-30.15-46.6 46.6q-23.6-17-52.35-22.15l-.4-65.6h-42.6l-.15 65.85q-28.7 5.2-52.3 22.2l-46.9-46.9-30.15 30.15 46.6 46.6q-17.05 23.65-22.2 52.4l-65.6.4v42.6l65.75-.05q5.2 28.7 22.15 52.35l-46.9 46.9 30.15 30.15 46.6-46.6q23.65 17.05 52.4 22.2L-22 192l42.55-.05v-65.7Q49.3 121.1 72.9 104.1l47.2 47.2 30.65-30.65-46.6-46.6q17-23.6 22.15-52.35h65.8l-.2-43-65.85-.15q-5.2-28.7-22.25-52.35l46.9-46.9M33.55-82.85q16.7 6.8 29.55 19.65 12.85 12.85 19.65 29.55Q89.25-17.55 89.3 0q-.05 17.45-6.55 33.65-6.8 16.7-19.65 29.55-12.85 12.85-29.55 19.65Q17.4 89.3-.1 89.4q-17.5-.1-33.65-6.55-16.7-6.8-29.55-19.65-12.8-12.9-19.55-29.55Q-89.4 17.5-89.4 0t6.5-33.6q6.8-16.7 19.6-29.6 12.85-12.85 29.55-19.65Q-17.6-89.4-.1-89.4t33.65 6.55z'/></g><use id='e' overflow='visible' xlink:href='#b'/><g id='c' fill='#42A5F5' overflow='visible'><path d='M-.1-41q-17 0-29 12t-12 29q0 17 12 29t29 12q17 0 29-12t12-29q0-17-12-29t-29-12z'/><path d='M150.85-120.7l-30.1-30.1-46.7 46.5q-23.95-16.65-52.7-21.35v-66.3h-42.6v65.9Q-50-121.4-73.95-104.7l-46.7-46.1-30.1 30.1 46.5 46.5q-16.65 23.95-21.35 52.7h-66.35v42.6H-126q4.65 28.75 21.35 52.7l-46.55 46.5 30.1 30.05 46.5-46.5q23.95 16.7 52.7 21.35V192h43.25v-65.95q28.75-4.65 52.7-21.35l46.5 46.55 30.3-30.55-46.5-46.7Q121 50.05 125.7 21.3H192v-42.6h-65.9q-4.65-28.75-21.35-52.7l46.1-46.7M0-89.35q18.2 0 34.8 7 16.05 6.8 28.4 19.2 12.4 12.35 19.2 28.4 7 16.6 7 34.8 0 18.15-7 34.75-6.8 16-19.2 28.4-12.35 12.35-28.4 19.15-16.6 7-34.8 7-18.15 0-34.75-7-16-6.8-28.4-19.15Q-75.5 50.8-82.3 34.8q-7-16.6-7-34.75.05-18.2 7.05-34.75 6.8-16.05 19.15-28.4 12.4-12.4 28.4-19.2 16.6-7 34.7-7.05z'/></g><use id='d' overflow='visible' xlink:href='#c'/></defs><g overflow='visible'><g><use transform='rotate(89.995 .016 191.934)' xlink:href='#d'/><animate fill='freeze' attributeName='display' dur='1.5s' keyTimes='0;.9777777778;1' repeatCount='1' values='none;inline;inline'/></g><g display='none'><use transform='rotate(89.989 -.069 191.87) scale(.99997)' xlink:href='#e'><animateTransform fill='freeze' additive='replace' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.511111111099;.5111111111;.533333333299;.5333333333;.555555555599;.5555555556;.577777777799;.5777777778;.599999999999;.6;.622222222199;.6222222222;.644444444399;.6444444444;.666666666699;.6666666667;.688888888899;.6888888889;.711111111099;.7111111111;.733333333299;.7333333333;.755555555599;.7555555556;.777777777799;.7777777778;.799999999999;.8;.822222222199;.8222222222;.844444444399;.8444444444;.866666666699;.8666666667;.888888888899;.8888888889;.911111111099;.9111111111;.933333333299;.9333333333;.955555555599;.9555555556;1' type='translate' values='192.1414123535,192;192.1414123535,192;192.155632019,191.9854560852;192.155632019,191.9854560852;192.1909408569,192.0002914429;192.1909408569,192.0002914429;192.1557830811,191.9850067139;192.1557830811,191.9850067139;192.1206344604,192.0203079224;192.1206344604,192.0203079224;192.1556289673,191.9854652405;192.1556289673,191.9854652405;192.175617218,191.9879501343;192.175617218,191.9879501343;192.155316925,191.9863937378;192.155316925,191.9863937378;192.157219696,192.030330658;192.157219696,192.030330658;192.1334007263,192.0837089539;192.1334007263,192.0837089539;192.1361930847,192.0292640686;192.1361930847,192.0292640686;192.0803787231,191.9539138794;192.0803787231,191.9539138794;191.9089317322,191.943536377;191.9089317322,191.943536377;191.9362167358,191.9624420166;191.9362167358,191.9624420166;191.845489502,192.0042480469;191.845489502,192.0042480469;191.9013275146,191.9495346069;191.9013275146,191.9495346069;191.8513206482,191.8993110657;191.8513206482,191.8993110657;191.9000190735,191.9999809265;191.9000190735,191.9999809265;191.8499794006,191.9500221252;191.8499794006,191.9500221252;191.8499778748,191.9999946594;191.8499778748,191.9999946594;191.9499984741,191.9499893188;191.9499984741,191.9499893188;191.9000030518,191.9499908447;191.9000030518,191.9499908447'/><animateTransform fill='freeze' additive='sum' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.511111111099;.5111111111;.533333333299;.5333333333;.555555555599;.5555555556;.577777777799;.5777777778;.599999999999;.6;.622222222199;.6222222222;.644444444399;.6444444444;.666666666699;.6666666667;.688888888899;.6888888889;.711111111099;.7111111111;.733333333299;.7333333333;.755555555599;.7555555556;.777777777799;.7777777778;.799999999999;.8;.822222222199;.8222222222;.844444444399;.8444444444;.866666666699;.8666666667;.888888888899;.8888888889;.911111111099;.9111111111;.933333333299;.9333333333;.955555555599;.9555555556;1' type='rotate' values='45,0,0;45,0,0;45.1028594971,0,0;45.1028594971,0,0;45.1002349854,0,0;45.1002349854,0,0;44.8787078857,0,0;44.8787078857,0,0;44.8488616943,0,0;44.8488616943,0,0;45.123916626,0,0;45.123916626,0,0;45.8988189697,0,0;45.8988189697,0,0;45.6313476563,0,0;45.6313476563,0,0;42.3553924561,0,0;42.3553924561,0,0;39.6382141113,0,0;39.6382141113,0,0;48.618637085,0,0;48.618637085,0,0;67.471572876,0,0;67.471572876,0,0;86.4837646484,0,0;86.4837646484,0,0;95.0636291504,0,0;95.0636291504,0,0;92.5415649414,0,0;92.5415649414,0,0;89.4623413086,0,0;89.4623413086,0,0;89.1966094971,0,0;89.1966094971,0,0;89.9685211182,0,0;89.9685211182,0,0;90.0568237305,0,0;90.0568237305,0,0;90.0244750977,0,0;90.0244750977,0,0;89.9912567139,0,0;89.9912567139,0,0;89.9886322021,0,0;89.9886322021,0,0'/><animateTransform fill='freeze' additive='sum' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.511111111099;.5111111111;.622222222199;.6222222222;.644444444399;.6444444444;.688888888899;.6888888889;.711111111099;.7111111111;.733333333299;.7333333333;.755555555599;.7555555556;.777777777799;.7777777778;.799999999999;.8;.822222222199;.8222222222;.844444444399;.8444444444;.866666666699;.8666666667;.933333333299;.9333333333;1' type='scale' values='.9999237061,.9999237061;.9999237061,.9999237061;.9966125488,.9966125488;.9966125488,.9966125488;.9966278076,.9966278076;.9966278076,.9966278076;.9966430664,.9966430664;.9966430664,.9966430664;.996673584,.996673584;.996673584,.996673584;.9966278076,.9966278076;.9966278076,.9966278076;.9976348877,.9976348877;.9976348877,.9976348877;.9995269775,.9995269775;.9995269775,.9995269775;.9993896484,.9993896484;.9993896484,.9993896484;.9996643066,.9996643066;.9996643066,.9996643066;.9999237061,.9999237061;.9999237061,.9999237061;.9998626709,.9998626709;.9998626709,.9998626709;.9999237061,.9999237061;.9999237061,.9999237061;.9999694824,.9999694824;.9999694824,.9999694824'/><animateTransform fill='freeze' additive='sum' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.511111111099;.5111111111;.533333333299;.5333333333;.555555555599;.5555555556;.577777777799;.5777777778;.599999999999;.6;.622222222199;.6222222222;.644444444399;.6444444444;.688888888899;.6888888889;.711111111099;.7111111111;.733333333299;.7333333333;.755555555599;.7555555556;.777777777799;.7777777778;.799999999999;.8;.822222222199;.8222222222;.844444444399;.8444444444;.866666666699;.8666666667;.888888888899;.8888888889;.911111111099;.9111111111;.933333333299;.9333333333;.955555555599;.9555555556;1' type='translate' values='-.1,.1;-.1,.1;-.1,.05;-.1,.05;-.1,.1;-.1,.1;-.1,.05;-.1,.05;-.1,0;-.1,0;-.1,.05;-.1,.05;-.15,.1;-.15,.1;-.1,.05;-.1,.05;-.15,-.05;-.15,-.05;-.15,.05;-.15,.05;-.1,.1;-.1,.1;-.15,.1;-.15,.1;-.15,.15;-.15,.15;-.1,.1;-.1,.1;-.15,.05;-.15,.05;-.1,.05;-.1,.05;-.15,.05;-.15,.05;-.05,.1;-.05,.1;-.15,.05;-.15,.05;-.05,.15;-.05,.15;-.1,.1;-.1,.1'/></use><animate fill='freeze' attributeName='display' dur='1.5s' keyTimes='0;.4888888889;.9777777778;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><use transform='rotate(44.896 -136.371 328.507) scale(.99832)' xlink:href='#f'><animateTransform fill='freeze' additive='replace' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.022222222199;.0222222222;.044444444399;.0444444444;.066666666699;.0666666667;.088888888899;.0888888889;.111111111099;.1111111111;.133333333299;.1333333333;.155555555599;.1555555556;.177777777799;.1777777778;.199999999999;.2;.222222222199;.2222222222;.244444444399;.2444444444;.266666666699;.2666666667;.288888888899;.2888888889;.311111111099;.3111111111;.333333333299;.3333333333;.355555555599;.3555555556;.377777777799;.3777777778;.399999999999;.4;.422222222199;.4222222222;.444444444399;.4444444444;.466666666699;.4666666667;1' type='translate' values='192,192;192,192;191.9999954224,192.1000022888;191.9999954224,192.1000022888;191.9999954224,192.1;191.9999954224,192.1;192.0999954224,191.9999816895;192.0999954224,191.9999816895;192.0500106812,191.9999847412;192.0500106812,191.9999847412;192.0999832153,192.0500106812;192.0999832153,192.0500106812;191.9993240356,192.0506561279;191.9993240356,192.0506561279;192.0495452881,192.0508827209;192.0495452881,192.0508827209;192.1042541504,192.095489502;192.1042541504,192.095489502;192.013483429,192.0947044373;192.013483429,192.0947044373;192.0497680664,192.006111145;192.0497680664,192.006111145;192.1692558289,192.153528595;192.1692558289,192.153528595;192.1292694092,192.1361999512;192.1292694092,192.1361999512;192.165486145,192.1217971802;192.165486145,192.1217971802;192.1171539307,192.0736465454;192.1171539307,192.0736465454;192.1220169067,192.1901657104;192.1220169067,192.1901657104;192.0879508972,192.1756210327;192.0879508972,192.1756210327;192.1559379578,192.1054801941;192.1559379578,192.1054801941;192.1203125,192.0706375122;192.1203125,192.0706375122;192.1409469604,192.0503036499;192.1409469604,192.0503036499;192.1559288025,192.1054893494;192.1559288025,192.1054893494;192.1559310913,192.1054916382;192.1559310913,192.1054916382'/><animateTransform fill='freeze' additive='sum' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.022222222199;.0222222222;.044444444399;.0444444444;.066666666699;.0666666667;.088888888899;.0888888889;.111111111099;.1111111111;.133333333299;.1333333333;.155555555599;.1555555556;.177777777799;.1777777778;.199999999999;.2;.222222222199;.2222222222;.244444444399;.2444444444;.266666666699;.2666666667;.288888888899;.2888888889;.311111111099;.3111111111;.333333333299;.3333333333;.355555555599;.3555555556;.377777777799;.3777777778;.399999999999;.4;.422222222199;.4222222222;.444444444399;.4444444444;.466666666699;.4666666667;1' type='rotate' values='0,0,0;0,0,0;.0104980469,0,0;.0104980469,0,0;.0078735352,0,0;.0078735352,0,0;-.0270996094,0,0;-.0270996094,0,0;-.0585784912,0,0;-.0585784912,0,0;.0305938721,0,0;.0305938721,0,0;.802520752,0,0;.802520752,0,0;.5359039307,0,0;.5359039307,0,0;-2.5424346924,0,0;-2.5424346924,0,0;-5.2526702881,0,0;-5.2526702881,0,0;3.5144958496,0,0;3.5144958496,0,0;22.5000762939,0,0;22.5000762939,0,0;41.3793945313,0,0;41.3793945313,0,0;50.3628234863,0,0;50.3628234863,0,0;47.6450805664,0,0;47.6450805664,0,0;44.367767334,0,0;44.367767334,0,0;44.1002807617,0,0;44.1002807617,0,0;44.8756408691,0,0;44.8756408691,0,0;45.1520233154,0,0;45.1520233154,0,0;45.1212921143,0,0;45.1212921143,0,0;44.8980102539,0,0;44.8980102539,0,0;44.8958129883,0,0;44.8958129883,0,0'/><animateTransform fill='freeze' additive='sum' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.066666666699;.0666666667;.088888888899;.0888888889;.111111111099;.1111111111;.133333333299;.1333333333;.155555555599;.1555555556;.177777777799;.1777777778;.199999999999;.2;.222222222199;.2222222222;.244444444399;.2444444444;.266666666699;.2666666667;.288888888899;.2888888889;.311111111099;.3111111111;.333333333299;.3333333333;.355555555599;.3555555556;.399999999999;.4;.422222222199;.4222222222;.466666666699;.4666666667;1' type='scale' values='1,1;1,1;.9999694824,.9999694824;.9999694824,.9999694824;.9999542236,.9999542236;.9999542236,.9999542236;.9999694824,.9999694824;.9999694824,.9999694824;.9998931885,.9998931885;.9998931885,.9998931885;.9999542236,.9999542236;.9999542236,.9999542236;.9996948242,.9996948242;.9996948242,.9996948242;.9994049072,.9994049072;.9994049072,.9994049072;.9995574951,.9995574951;.9995574951,.9995574951;.9988250732,.9988250732;.9988250732,.9988250732;.996673584,.996673584;.996673584,.996673584;.9967041016,.9967041016;.9967041016,.9967041016;.996673584,.996673584;.996673584,.996673584;.9966583252,.9966583252;.9966583252,.9966583252;.9966430664,.9966430664;.9966430664,.9966430664;.996673584,.996673584;.996673584,.996673584;.9966430664,.9966430664;.9966430664,.9966430664;.9966583252,.9966583252;.9966583252,.9966583252'/><animateTransform fill='freeze' additive='sum' attributeName='transform' calcMode='discrete' dur='1.5s' keyTimes='0;.022222222199;.0222222222;.044444444399;.0444444444;.066666666699;.0666666667;.088888888899;.0888888889;.111111111099;.1111111111;.133333333299;.1333333333;.155555555599;.1555555556;.177777777799;.1777777778;.199999999999;.2;.222222222199;.2222222222;.244444444399;.2444444444;.288888888899;.2888888889;.311111111099;.3111111111;.333333333299;.3333333333;.355555555599;.3555555556;.377777777799;.3777777778;.399999999999;.4;.422222222199;.4222222222;.444444444399;.4444444444;1' type='translate' values='0,0;0,0;-.05,-.1;-.05,-.1;0,-.15;0,-.15;-.15,0;-.15,0;-.05,-.05;-.05,-.05;-.1,-.1;-.1,-.1;-.05,-.05;-.05,-.05;-.1,-.05;-.1,-.05;-.1,-.1;-.1,-.1;-.05,-.15;-.05,-.15;-.1,0;-.1,0;-.15,-.05;-.15,-.05;-.2,.05;-.2,.05;-.1,0;-.1,0;-.15,-.05;-.15,-.05;-.15,-.1;-.15,-.1;-.15,0;-.15,0;-.1,0;-.1,0;-.1,.1;-.1,.1;-.15,0;-.15,0'/></use><animate fill='freeze' attributeName='display' dur='1.5s' keyTimes='0;.4888888889;1' repeatCount='1' values='inline;none;none'/></g></g><circle cx='192' cy='192' r='41' fill='#42a5f5'/></svg>","exit":"<svg version='1.1'id='Layer_1' image-rendering='inherit' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><g><g><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9666666667;1' repeatCount='1' restart='always' transform='translate(-224.854 -192.854)' values='inline;none;none'></animate></g><g class='st0'><path class='st1' d='M281.3500061,192l-87.5-77.5V270L281.3500061,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.9333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M279.2999878,192l-87.5-77.5V270L279.2999878,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8666666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M273.7000122,192l-87.5-77.5V270L273.7000122,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8333333333;.8666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M261.3500061,192l-87.5-77.5V270L261.3500061,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.8333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M149.8999939,114.5V270l87.5-78L149.8999939,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7666666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M113.0999985,114.5V270l87.5000076-78C200.6000061,192,113.1000061,114.5,113.0999985,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7333333333;.7666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M89.1500015,114.5V270l87.4999924-78C176.6499939,192,89.1499939,114.5,89.1500015,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.7333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M76.8000031,114.5V270l87.5-78L76.8000031,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6666666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M158.6999969,192l-87.5-77.5V270L158.6999969,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6333333333;.6666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M156.6499939,192l-87.5-77.5V270L156.6499939,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6;.6333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M156,192l-87.5-77.5V270L156,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4666666667;.5666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M156.1000061,192l-87.5-77.5V270L156.1000061,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4333333333;.4666666667;.5666666667;.6;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M156.8999939,192l-87.5-77.5V270L156.8999939,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4;.4333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M159.8500061,192l-87.5-77.5V270L159.8500061,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3666666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M80.1999969,114.5V270l87.5-78L80.1999969,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3333333333;.3666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M97.6500015,114.5V270l87.4999924-78C185.1499939,192,97.6499939,114.5,97.6500015,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3;.3333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M131.5,114.5V270l87.5-78L131.5,114.5z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2666666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M252.8500061,192l-87.5-77.5V270L252.8500061,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2333333333;.2666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M270.2999878,192l-87.5-77.5V270L270.2999878,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.2333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M278.1499939,192l-87.5-77.5V270L278.1499939,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1666666667;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M281.1000061,192l-87.5-77.5V270L281.1000061,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1333333333;.1666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M281.8999939,192l-87.5-77.5V270L281.8999939,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.1333333333;.9333333333;.9666666667;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M282,192l-87.5-77.5V270L282,192z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;.1;.9666666667;1' repeatCount='1' restart='always' values='none;inline;none;inline;inline'></animate></g><g><path class='st2' d='M195.8999939,213l-0.5-42H-0.8l0.15,41.6499939L195.9000092,213H195.8999939z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g class='st0'><path class='st1' d='M195.8999939,213l-0.5-42H-0.8l0.15,41.6499939L195.9000092,213H195.8999939z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9666666667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M195.8000031,213l-0.5-42H-0.75l0.15,41.6499939L195.7999878,213H195.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9333333333;.9666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M195.25,213l-0.4499969-42H-0.45l0.15,41.6499939L195.25,213z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.9333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M0.7,171l0.15,41.6499939L193.25,213l-0.5-42H0.7z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8666666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M3.8,171L3.95,212.6499939L187.8000031,213l-0.3999939-42H3.8z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8333333333;.8666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M10.6499996,171l0.1499996,41.6499939l164.8999939,0.3000031L175.4499969,171H10.6499996z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.8333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M152.3000031,171H24l0.1000004,41.6999969l128.1999969,0.25V171z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7666666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M116.8000031,171.0500031H44.4000015L44.4500008,212.75l71.9000092,0.1000061L116.8000031,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7333333333;.7666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M93.6500015,171.0500031H57.75v41.75l35.1999969,0.0500031C92.9499969,212.8500061,93.6499939,171.0500031,93.6500015,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.7333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M81.6999969,171.0500031H64.5999985v41.75h16.25L81.6999969,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6666666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M76.3000031,171.0500031h-8.5999985v41.75h7.6999969L76.3000031,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6333333333;.6666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M74.3000031,171.0500031h-5.4499969v41.75h4.5500031C73.4000092,212.8000031,74.3000107,171.0500031,74.3000031,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6;.6333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M73.8000031,171.0500031h-4.6500015v41.75h3.6999969C72.8499985,212.8000031,73.7999954,171.0500031,73.8000031,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5666666667;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M73.6999969,171.0500031h-4.5v41.75H72.75L73.6999969,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5333333333;.5666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M73.6999969,171.0500031h-4.5v41.75H72.75L73.6999969,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4666666667;.5333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M73.8000031,171.0500031h-4.6500015v41.75h3.6999969C72.8499985,212.8000031,73.7999954,171.0500031,73.8000031,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4333333333;.4666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M74.5999985,171.0500031h-5.9000015v41.75h4.9499969C73.6499939,212.8000031,74.5999908,171.0500031,74.5999985,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4;.4333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M77.4000015,171.0500031H67.0500031v41.75H76.5L77.4000015,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3666666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M85,171.0500031H62.7000008v41.75h21.4999962L85,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3333333333;.3666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M101.8499985,171.0500031H53L53.0499992,212.75L101.25,212.8500061L101.8499985,171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3;.3333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M134.5500031,171.0500031H34.2000008L34.2999992,212.75l100.0500031,0.1499939l0.1999969-41.8500061V171.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2666666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M15.3999996,171L15.5,212.6999969l151.8999939,0.25L167.25,171H15.3999996z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2333333333;.2666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M5.6999998,171l0.1500001,41.6499939L184.4500122,213l-0.3500061-42H5.6999998z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.2333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M1.35,171l0.15,41.6499939L192.1499939,213l-0.4499969-42H1.35z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1666666667;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M195,213l-0.5-42H-0.3l0.15,41.6499939L195,213z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1333333333;.1666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M195.8000031,213l-0.5-42H-0.75l0.15,41.6499939L195.7999878,213H195.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.1333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M195.8999939,213l-0.5-42H-0.8l0.15,41.6499939L195.9000092,213H195.8999939z'/><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0666666667;.1;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><animate accumulate='none' additive='replace' attributeName='display' begin='-70ms' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g></g><path class='st2' d='M69,0.0039989v90h42v-48h231v300H111v-48H69v90h315v-384C384,0.0039967,69,0.0039967,69,0.0039989z'/></svg>","history":"<svg version='1.1'id='Layer_1' image-rendering='inherit' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><g><g class='st0'><path class='st1' d='M181.5500031,173.6999969c-5,2.8999939-8.2666779,7.1499939-9.8000031,12.75c-1.4666595,5.5999908-0.75,10.8999939,2.1499939,15.8999939c2.8666687,5,7.1000061,8.2833252,12.6999969,9.8500061c5.6333313,1.4666748,10.9499969,0.75,15.9499969-2.1499939l56.2999878-32.5c5-2.8666687,8.25-7.1000061,9.75-12.6999969c1.5-5.6666718,0.8166809-11-2.0499878-16c-2.8999939-5-7.1666565-8.25-12.8000031-9.75c-5.6000061-1.4666595-10.8999939-0.7666626-15.8999939,2.1000061l-56.3000031,32.5L181.5500031,173.6999969z'/><path class='st1' d='M192,56c-5.8000031,0-10.75,2.0499992-14.8500061,6.1500015S171,71.1833344,171,76.9499969v115c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9000092,186.1999969,212.9499969,192,212.9499969c5.7666626,0,10.7166748-2.0499878,14.8500061-6.1499939C210.9499969,202.6666718,213,197.7166748,213,191.9499969v-115c0-5.7666702-2.0500031-10.7000046-6.1499939-14.7999992C202.7166748,58.0499992,197.7666626,56,192,56z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.9428571429;.9714285714;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M192,56c-5.8000031,0-10.75,2.0499992-14.8500061,6.1500015S171,71.1833344,171,76.9499969v115c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9000092,186.1999969,212.9499969,192,212.9499969c5.7666626,0,10.7166748-2.0499878,14.8500061-6.1499939C210.9499969,202.6666718,213,197.7166748,213,191.9499969v-115c0-5.7666702-2.0500031-10.7000046-6.1499939-14.7999992C202.7166748,58.0499992,197.7666626,56,192,56z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.8571428571;.9428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M269.7999878,86.9000015C268.2666626,81.2999954,265,77.0666733,260,74.2000046c-5.0333252-2.8999939-10.3333282-3.6166687-15.8999939-2.1500015c-5.6333313,1.5333328-9.8833313,4.8000031-12.75,9.8000031l-57.5500031,99.6000061c-2.8666687,5-3.5500031,10.2999878-2.0500031,15.8999939c1.5,5.5999908,4.7666626,9.8499908,9.8000031,12.75c5,2.8666687,10.2999878,3.5666656,15.8999939,2.1000061c5.5999908-1.5333405,9.8333282-4.8000031,12.6999969-9.8000031l57.5499878-99.5999985C270.5666504,97.8000107,271.2666321,92.5000076,269.7999878,86.9000015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.8;.8571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M181.5500031,173.75c-5,2.8666534-8.2666779,7.1166534-9.8000031,12.75c-1.4666595,5.5666656-0.75,10.8666534,2.1499939,15.8999939c2.8666687,4.9999847,7.1000061,8.2666779,12.6999969,9.8000031c5.6000061,1.4666748,10.8999939,0.7666626,15.8999939-2.1000061l99.5999908-57.5500031c5-2.8666687,8.2666626-7.0999908,9.7999878-12.6999969c1.4666748-5.5999908,0.7666626-10.8999939-2.1000061-15.9000015c-2.9000244-5.0333328-7.1500244-8.3000031-12.75-9.8000031c-5.6000061-1.5-10.8999939-0.8166656-15.8999939,2.0500031l-99.6000061,57.5499954L181.5500031,173.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.7428571429;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M192,170.9499969c-5.7666626,0-10.7166748,2.0500031-14.8500061,6.1499939C173.0500031,181.1999969,171,186.1499786,171,191.9499969c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061c4.1333313,4.1000061,9.0833282,6.1499939,14.8500061,6.1499939h115c5.7666626,0,10.6999817-2.0499878,14.7999878-6.1499939c4.1000061-4.1333313,6.1499939-9.0833282,6.1499939-14.8500061c0-5.7999878-2.0499878-10.75-6.1499939-14.8500061S312.7666626,170.9499969,307,170.9499969H192z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.6857142857;.7428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M202.4499969,173.8500061c-4.9666595-2.8666687-10.25-3.5666656-15.8500061-2.1000061c-5.5999908,1.5-9.8499908,4.7666626-12.75,9.8000031c-2.8666687,4.9666595-3.5666656,10.25-2.1000061,15.8500061c1.5333405,5.5999908,4.7833405,9.8333282,9.75,12.6999969l99.4499969,57.5499878c5,2.8666382,10.2833252,3.5666504,15.8500061,2.1000061c5.6000061-1.5333252,9.8333435-4.7833252,12.7000122-9.75c2.8999939-5.0333252,3.6166687-10.3333282,2.1499939-15.8999939c-1.5-5.6000061-4.75-9.8333282-9.75-12.6999969L202.4499969,173.8500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.6285714286;.6857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M181.5,173.8500061c-5,2.8666687-8.25,7.1166687-9.75,12.75s-0.8166656,10.9499969,2.0500031,15.9499969l57.5500031,99.5999908c2.8666687,5,7.1166687,8.25,12.75,9.75C249.6999969,313.3666687,255,312.6666565,260,309.7999878c5.0333252-2.8999939,8.2999878-7.1499939,9.7999878-12.75s0.8166809-10.8999939-2.0499878-15.8999939l-57.5500031-99.6000061c-2.8666687-5-7.1166687-8.2666626-12.75-9.8000031c-5.6000061-1.5-10.9166718-0.7999878-15.9499969,2.1000061V173.8500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.5714285714;.6285714286;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M177.1000061,177.1499939C173,181.2833252,170.9500122,186.2333221,170.9500122,192v115c0,5.7666626,2.0499878,10.6999817,6.1499939,14.7999878c4.1333313,4.1000061,9.0833435,6.1499939,14.8500061,6.1499939c5.7999878,0,10.75-2.0499878,14.8500061-6.1499939S212.9500275,312.7666626,212.9500122,307V192c0-5.7666626-2.0499878-10.7166748-6.1499939-14.8500061C202.7000275,173.0500031,197.7500153,171,191.9500122,171C186.1833496,171,181.2333527,173.0500031,177.1000061,177.1499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.5142857143;.5714285714;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M186.5,171.75c-5.6333466,1.5-9.8833466,4.75-12.75,9.75l-57.5500031,99.6000061c-2.8666611,5-3.5500031,10.3166504-2.0500031,15.9500122c1.5333328,5.6000061,4.7999954,9.833313,9.8000031,12.7000122c5.0333405,2.8999939,10.3333282,3.6166687,15.8999939,2.1499939c5.6333313-1.5333252,9.8833313-4.7999878,12.75-9.7999878l57.5500031-99.6000061c2.8666687-4.9999847,3.5500031-10.3000031,2.0500031-15.8999939c-1.4666595-5.633316-4.7166595-9.9000092-9.75-12.8000031c-5-2.8666687-10.3166504-3.5500031-15.9499969-2.0500031V171.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.4571428571;.5142857143;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M197.3500061,171.75c-5.6333313-1.5-10.9499969-0.8166656-15.9499969,2.0500031l-99.5999985,57.5500031c-5,2.8666687-8.25,7.1166687-9.75,12.75C70.5833435,249.6999969,71.2833481,255,74.1500092,260c2.9000015,5,7.1500015,8.2666626,12.75,9.7999878c5.5999985,1.4666748,10.9000015,0.7666626,15.9000015-2.1000061l99.5999985-57.5500031c5-2.8666687,8.2666626-7.1000061,9.8000031-12.6999969c1.5-5.6333313,0.7999878-10.9499969-2.1000061-15.9499969c-2.8666687-5-7.1166687-8.25-12.75-9.75V171.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.4;.4571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M212.9499969,191.9499969c0-5.7666626-2.0499878-10.7166595-6.1499939-14.8500061c-4.1333313-4.0999908-9.0833282-6.1499939-14.8500061-6.1499939H76.9000015c-5.7666702,0-10.6999969,2.0500031-14.7999992,6.1499939C58,181.2333221,55.9500008,186.1833344,55.9500008,191.9499969c0,5.8000031,2.0499992,10.75,6.1500015,14.8500061s9.033329,6.1500092,14.7999992,6.1499939h115.0500107c5.7666626,0,10.7166595-2.0499878,14.8500061-6.1499939c4.1000061-4.0999908,6.1499939-9.0500031,6.1499939-14.8500061H212.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.3428571429;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M212.1999969,186.4499969c-1.5333252-5.6000061-4.8000183-9.8333435-9.8000031-12.6999969l-99.5999985-57.5500031c-5-2.8666611-10.3166656-3.5666656-15.9499969-2.0999985c-5.5999985,1.5666656-9.8333359,4.8499908-12.6999969,9.8499985C71.25,128.9499969,70.5333328,134.25,72,139.8499908c1.5333328,5.6000061,4.8000031,9.8333282,9.8000031,12.6999969l99.5999908,57.5500031c4.9999847,2.8666687,10.3166656,3.5666809,15.9499969,2.1000061c5.6000061-1.5,9.8500061-4.75,12.75-9.75C212.9666595,197.4499969,213.6666718,192.1166534,212.1999969,186.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2857142857;.3428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192,171c-5.8000031,0-10.75,2.0500031-14.8500061,6.1499939C173.0499878,181.25,171,186.1999969,171,192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213h65c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C275.9499817,202.7166748,278,197.7666626,278,192c0-5.8000031-2.0500183-10.75-6.1499939-14.8500061C267.7166748,173.0500031,262.7666626,171,257,171H192z'/><path class='st1' d='M212.1999969,197.3999939c1.4666748-5.6666718,0.75-10.9833221-2.1499939-15.9499969l-57.5-99.6500015c-2.8999939-5-7.1333313-8.25-12.6999969-9.75c-5.6666718-1.4666595-10.9833221-0.7666626-15.9499969,2.0999985c-5.0333328,2.9000015-8.3000031,7.1500015-9.8000031,12.75c-1.5,5.6000061-0.7999954,10.9000015,2.0999985,15.9000015l57.5000076,99.6500015c2.9000092,4.9666748,7.1500092,8.2333374,12.75,9.8000031c5.5999908,1.4666748,10.9166718,0.75,15.9499969-2.1499939c4.9666748-2.8666687,8.2333374-7.1000061,9.8000031-12.6999969L212.1999969,197.3999939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.2285714286;.2857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M194.75,124.4000015c-0.8000031-1.4333344-2.0333252-2.6500015-3.6999969-3.6500015c-2.5333405-1.4333267-5.3999939-1.7999954-8.6000061-1.0999985c-3.2333374,0.6666718-5.9499969,2.3999939-8.1499939,5.1999969C172.0999908,127.6166687,171,130.8166656,171,134.4499969V134.5c0,12.9333344,1.0333252,25.4333344,3.1000061,37.5c1.8666687,11,4.0833435,21.1500092,6.6499939,30.4499969c0.2333374,1.0333405,0.6000214,2,1.1000061,2.8999939c0.9666595,1.6999969,2.3666687,3.1833344,4.1999969,4.4499969c2.8333435,1.9666595,6.0666504,2.8166656,9.6999969,2.5500031c6.7333374-0.5333405,13.3500214-1.3499908,19.8500061-2.4499969c6.5333405-1.0999908,12.7833405-2.3166656,18.75-3.6499939c3.1333313-0.6999969,5.7833405-2.4499969,7.9499969-5.25c1.5333252-2,2.5166626-4.2166748,2.9499969-6.6499939c0.1666718-0.9999847,0.2333374-2.0166779,0.1999969-3.0500031c-0.0333252-3.6666565-1.1666718-6.8833313-3.3999939-9.6499939c-2.2666626-2.7666626-5.0333252-4.4833221-8.3000031-5.1499939c-4.1999969-0.8666687-8.5500031-1.6666565-13.0500031-2.3999939c-4.2999878-0.7333374-8.6666718-1.3333435-13.1000061-1.8000031c-1.5333405-7.4000092-3.2333374-14.3666687-5.1000061-20.8999939c-2.6666718-9.1333313-4.9666595-17.4000092-6.8999939-24.8000031c-0.1666565-0.7999954-0.4500122-1.5333328-0.8500061-2.1999969L194.75,124.4000015z'/><path class='st1' d='M192,56c-5.8000031,0-10.75,2.0499992-14.8500061,6.1500015S171,71.1833344,171,76.9499969V192c0,5.7666626,2.0500031,10.7166748,6.1499939,14.8500061C181.25,210.9499969,186.1999969,213,192,213c5.7666626,0,10.7166748-2.0500031,14.8500061-6.1499939C210.9499969,202.7166748,213,197.7666626,213,192V76.9499969c0-5.7666702-2.0500031-10.7000046-6.1499939-14.7999992C202.7166748,58.0499992,197.7666626,56,192,56z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.1714285714;.2285714286;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M177.1499939,177.1499939C173.0500031,181.25,171,186.1833344,171,191.9499969c0,5.8000031,2.0500031,10.75,6.1499939,14.8500061c4.1000061,4.1000061,9.0333405,6.1500092,14.8000031,6.1499939c5.8000031,0,10.75-2.0499878,14.8500061-6.1499939c4.1000061-4.0999908,6.1500092-9.0500031,6.1499939-14.8500061c0-5.7666626-2.0499878-10.6999969-6.1499939-14.8000031C202.7000122,173.0499878,197.75,171,191.9499969,171C186.1833344,171,181.25,173.0500031,177.1499939,177.1499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.1428571429;.1714285714;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192.1000061,176.25c-4.3666687,0-8.1000061,1.5500031-11.1999969,4.6499939c-3.0666809,3.1000061-4.6000061,6.8166656-4.6000061,11.1499939c0,4.4000092,1.5333252,8.1500092,4.6000061,11.25c3.0999908,3.0999908,6.8333282,4.6500092,11.1999969,4.6499939c4.3999939,0.0000153,8.1499939-1.5500031,11.25-4.6499939c3.0999908-3.0999908,4.6499939-6.8499908,4.6499939-11.25c0-4.3333282-1.5500031-8.0499878-4.6499939-11.1499939C200.25,177.8000031,196.5,176.25,192.1000061,176.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.1142857143;.1428571429;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192.25,181.5c-2.9333344,0-5.4499969,1.0333252-7.5500031,3.1000061c-2.1000061,2.0999908-3.1499939,4.6333313-3.1499939,7.6000061c0,2.9666595,1.0499878,5.5,3.1499939,7.6000061c2.0999908,2.1000061,4.6166534,3.1499939,7.5500031,3.1499939c3,0,5.5500031-1.0499878,7.6499939-3.1499939c2.1000061-2.0999908,3.1499939-4.6333313,3.1499939-7.6000061c0-2.9666595-1.0499878-5.5-3.1499939-7.6000061C197.8000031,182.5333252,195.25,181.5,192.25,181.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0857142857;.1142857143;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M198.0500031,192.3000031c0-1.5333405-0.5500031-2.8500061-1.6499939-3.9499969c-1.1000061-1.1000061-2.4333344-1.6499939-4-1.6499939c-1.5333252,0-2.8500061,0.5499878-3.9499969,1.6499939c-1.0666656,1.0999908-1.5999908,2.4166565-1.6000061,3.9499969c0.0000153,1.5666809,0.5333405,2.9000092,1.6000061,4c1.0999908,1.1000061,2.4166718,1.6499939,3.9499969,1.6499939c1.5666656,0,2.8999939-0.5499878,4-1.6499939C197.5,195.2000122,198.0500031,193.866684,198.0500031,192.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0571428571;.0857142857;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M192.9499969,192.8000031c0.0999908-0.0999908,0.1499939-0.2333374,0.1499939-0.3999939c0-0.1333313-0.0500031-0.25-0.1499939-0.3500061c-0.1000061-0.0666656-0.2333221-0.1000061-0.3999939-0.1000061c-0.1333313,0-0.25,0.0333405-0.3500061,0.1000061c-0.0666809,0.1000061-0.1000061,0.2166595-0.1000061,0.3500061c0,0.1666565,0.0333252,0.3000031,0.1000061,0.3999939c0.0999908,0.1000061,0.2166748,0.1499939,0.3500061,0.1499939C192.7166748,192.9499969,192.8499908,192.9000092,192.9499969,192.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0285714286;.0571428571;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.1666666667s' fill='freeze' keyTimes='0;.0285714286;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g></g><path class='st2' d='M384,20L244,0l20,140l43.6000061-43.5999985C329.8999939,123.1999969,342,156.6999969,342,192c0,40.1000061-15.6000061,77.7000122-43.8999939,106.1000061C269.8000183,326.3999939,232.1000061,342,192,342s-77.6999969-15.6000061-106.0999985-43.8999939C57.5999985,269.7000122,42,232.1000061,42,192s15.5999985-77.6999969,43.9000015-106.0999985C109,62.9000015,138.3000031,48.2000008,170,43.6000023V1.3C74.3000031,12.1999998,0,93.4000015,0,192c0,106,86,192,192,192s192-86,192-192c0-47.8999939-17.6000061-91.6999969-46.6000061-125.4000015L384,20z'/></svg>","send":"<svg version='1.1'id='Layer_1' image-rendering='inherit' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><style type='text/css'>.st0{display:none;} .st1{display:inline;fill:#42A5F5;} .st2{fill:#42A5F5;} </style><g><g class='st0'><path class='st1' d='M713.2000122-58.3499985l106.2999878-384l-384,170.25L614.1500244-205.75l99.0499878,147.3999939M755.2999878-368l-58.2000122,210.3999939l-55.6500244-82.8000031l-94.5999756-35.1500092L755.2999878-368z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5;.5333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M323.8500061-158.6999969L502.5-92.3499985l99.0499878,147.3999939l106.2999878-384l-384,170.25M585.4499512-44.2000122L529.7999878-127l-94.6000061-35.1499939l208.4499817-92.4499969L585.4499512-44.1999969V-44.2000122z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4666666667;.5;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M619.0999756-238.75L235.1000061-68.5L413.75-2.1500001L512.7999878,145.25L619.0999756-238.75M441.0499878-36.7999992l-94.6000061-35.1499977l208.4500427-92.4499969L496.7000122,46l-55.6499939-82.8000031L441.0499878-36.7999992z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4333333333;.4666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M344.6499939,68l99.0500183,147.3999939l106.2999878-384L166,1.65L344.6499939,68 M277.3499756-1.8000031L485.7999878-94.25l-58.2000122,210.3999939l-55.6499939-82.8000031C371.9499817,33.3499908,277.3499756-1.8000107,277.3499756-1.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4;.4333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M113.3499985,55.0999985L292,121.4499969l99.0499878,147.3999786l106.2999878-384l-384,170.25M319.2999878,86.8000031l-94.6000061-35.1500015l208.4500122-92.4499969l-58.2000122,210.3999939l-55.6499939-82.8000031V86.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3666666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M74.3499985,94.6999969L253,161.0500031l99.0499878,147.4000092l106.2999878-384l-384,170.25M280.2999878,126.4000092l-94.6000061-35.1500015L394.1499939-1.2l-58.2000122,210.3999939l-55.6499939-82.8000031V126.4000092z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3333333333;.3666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M46.4500008,123.0999985l178.6499939,66.3499985l99.0500031,147.3999786l106.3000183-384l-384,170.25M252.4000092,154.7999725l-94.5999908-35.1500015L366.25,27.2000008l-58.2000122,210.3999939l-55.6499939-82.8000031L252.4000092,154.7999725z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3;.3333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M205.8500061,208.9499969l99.0500183,147.3999786l106.2999878-384l-384,170.25l178.6499939,66.3500061M233.1500092,174.2999878l-94.5999908-35.1499939L347,46.7000008l-58.2000122,210.4000092l-55.6499939-82.8000031L233.1500092,174.2999878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2666666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M193.3500061,221.6999969l99.0500183,147.3999786l106.2999878-384l-384,170.25l178.6499939,66.3500061M220.6500092,187.0499878l-94.5999985-35.1499939L334.5,59.4500008l-58.2000122,210.4000092l-55.6499939-82.8000031L220.6500092,187.0499878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2333333333;.2666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M185.75,229.3999939l99.0499878,147.3999939l106.2999878-384l-384,170.25l178.6499939,66.3500061M213.0499725,194.75l-94.5999985-35.1499939l208.4500122-92.4500046l-58.2000122,210.3999939l-55.6499939-82.8000031L213.0499725,194.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.2333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M181.5500031,233.6499939l99.0500031,147.3999939l106.3000183-384L2.9000001,167.3000031l178.6499939,66.3499908 M264.5,281.7999878L208.8500061,199l-94.5999985-35.1499939l208.4500122-92.4500046L264.5,281.7999878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1666666667;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M179.5500031,235.6499939l99.0500031,147.3999939l106.3000183-384L0.9,169.3000031l178.6499939,66.3499908M262.5,283.7999878L206.8500061,201l-94.5999985-35.1499939l208.4500122-92.4500046L262.5,283.7999878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1333333333;.1666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M178.8500061,236.3999939l99.0500183,147.3999939l106.2999878-384l-384,170.25l178.6499939,66.3499908M261.7999878,284.5499878l-55.6499939-82.8000031l-94.5999985-35.1500092L320,74.1500015L261.7999878,284.5499878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.1333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M178.6499939,236.6000061L277.7000122,384L384,0L0,170.25L178.6499939,236.6000061 M261.5999756,284.75l-55.6499939-82.8000031l-94.5999985-35.1500092l208.4500122-92.4499893L261.5999756,284.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;.1;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st2' d='M178.6499939,236.6000061L277.7000122,384L384,0L0,170.25L178.6499939,236.6000061 M261.5999756,284.75l-55.6499939-82.8000031l-94.5999985-35.1500092l208.4500122-92.4499893L261.5999756,284.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g transform='translate(104.893 -104.857)' class='st0'><path class='st1' d='M172.8000031,488.8500061l106.3000031-384l-384,170.25L73.75,341.4500122L172.8000031,488.8500061M156.6999969,389.6000061l-55.6500015-82.8000183L6.4499965,271.6499939l208.4499969-92.4499969l-58.1999969,210.3999786V389.6000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9666666667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M91.0500031,570.5999756l106.3000031-384l-384,170.25L-8,423.2000122L91.0500031,570.5999756M74.9500046,471.3499756l-55.6500015-82.7999878l-94.5999985-35.1499939l208.4499817-92.4499817L74.9499969,471.3500061L74.9500046,471.3499756z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9333333333;.9666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M28.8500004,632.8499756l106.3000107-384l-384,170.25l178.6499939,66.3500061l99.0500031,147.3999939M70.9500046,323.1999817L12.7500038,533.5999756l-55.6500015-82.7999878L-137.5,415.6499939l208.4499969-92.4499817L70.9500046,323.1999817z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.9333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-295,465.25l178.6499939,66.3499756L-17.2999992,679L89,295L-295,465.25 M-33.3999939,579.75l-55.6500015-82.7999878l-94.5999985-35.1499939l208.4499969-92.4500122C24.7999992,369.3500061-33.4000015,579.75-33.3999939,579.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8666666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-149.3999939,564.5999756L-50.3499985,712L55.9500046,328l-384,170.25L-149.3999939,564.5999756M-122.0999908,529.9499512l-94.5999908-35.1499939l208.4499969-92.4499817L-66.4499817,612.75l-55.6500015-82.7999878L-122.0999908,529.9499512z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8333333333;.8666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-172.1000061,587.3499756L-73.0500031,734.75L33.25,350.75l-384,170.25L-172.1000061,587.3499756M-89.1500092,635.5l-55.6500092-82.7999878l-94.6000061-35.1500244l208.4499969-92.4500122L-89.1500244,635.5H-89.1500092z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.8333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-186.9499969,602.2000122l99.0500031,147.3999634l106.3000031-384l-384,170.25l178.6499939,66.3499756M-103.9999847,650.3499756l-55.6500092-82.7999878L-254.25,532.3999634l208.4499969-92.4500122L-104,650.3499756H-103.9999847z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7666666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-195.8999939,611.0999756L-96.8499908,758.5l106.3000031-384l-384,170.25L-195.8999939,611.0999756M-168.5999908,576.4499512l-94.5999908-35.1500244l208.4499969-92.4500122l-58.1999969,210.3999634l-55.6499939-82.7999878L-168.5999908,576.4499512z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7333333333;.7666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-200.8500061,616.0999756L-101.8000031,763.5L4.5,379.5l-384,170.25L-200.8500061,616.0999756M-173.5500031,581.4499512l-94.5999908-35.1500244l208.4499969-92.4500122l-58.1999969,210.3999634l-55.6499939-82.7999878L-173.5500031,581.4499512z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.7333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-203.1999969,618.4500122l99.0500031,147.3999634l106.3000031-384l-384,170.25l178.6499939,66.3499756M-175.8999786,583.7999268l-94.5999908-35.1500244l208.4499969-92.4500122l-58.1999969,210.3999634l-55.6499939-82.7999878L-175.8999786,583.7999268z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6666666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-204.1000061,619.3499756L-105.0500031,766.75L1.25,382.75l-384,170.25L-204.1000061,619.3499756M-176.8000031,584.6999512l-94.5999908-35.1500244l208.4499969-92.4500122l-58.1999969,210.3999634l-55.6499939-82.7999878L-176.8000031,584.6999512z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6333333333;.6666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-204.3000031,619.5499878L-105.25,766.9499512l106.3000031-384l-384,170.25l178.6499939,66.3499756M-177.0000153,584.8999023l-94.5999908-35.1500244l208.4499969-92.4500122l-58.1999969,210.3999634L-177,584.8998413L-177.0000153,584.8999023z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5666666667;.6333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5333333333;.5666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g></g></svg>","receive":"<svg version='1.1'id='Layer_1' image-rendering='inherit' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><style type='text/css'>.st0{display:none;} .st1{display:inline;fill:#42A5F5;} .st2{fill:#42A5F5;} </style><g><g class='st0'><path class='st1' d='M-60.25,658.7000122l-178.6999969-66.4000244L-337.9500122,445L-444.25,829L-60.25,658.7000122 M-266.25,627l94.6000061,35.1500244l-208.4499817,92.5l58.25-210.4500122L-266.2499695,627H-266.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5;.5333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-125,478.1499939l-99-147.3000183l-106.2999878,384l384-170.2999878l-178.6999969-66.3999939M-152.2999878,512.8499756L-57.7000008,548l-208.4499969,92.5l58.25-210.4500122L-152.2999878,512.8499756z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4666666667;.5;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M-34.5,387.5l-99-147.3000031l-106.3000031,384l384-170.2999878L-34.5,387.5000305 M-175.6499939,549.8500366l58.25-210.4500122l55.5999985,82.7999878l94.5999985,35.1499939l-208.4499969,92.4999695V549.8500366z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4333333333;.4666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M214.6999969,383.2999878L36,316.8999939l-99-147.3000031l-106.3000031,384L214.6999969,383.2999878M8.6999969,351.5999756l94.5999985,35.1499939l-208.4499969,92.5l58.25-210.4499817L8.6999969,351.5999756z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4;.4333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M268.3500061,329.5499878L89.6500092,263.1499939l-99-147.3000031l-106.3000031,384L268.3500061,329.5499878M6.75,215.0500031l55.5999985,82.8000031L156.9499969,333L-51.5,425.5L6.75,215.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3666666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M129.4499969,223.3000031L30.4500008,76L-75.8500061,460l384-170.2999878l-178.6999969-66.3999939M46.5499954,175.2000122L102.1499939,258L196.75,293.1499939l-208.4499969,92.5l58.2499962-210.4499969L46.5499954,175.2000122z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3333333333;.3666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M157.9499969,194.75l-99-147.3000031l-106.3000031,384l384-170.2999878l-178.6999969-66.3999939M225.25,264.6000366L16.7999992,357.1000061l58.2500038-210.4499969l55.5999908,82.8000031L225.25,264.6000061V264.6000366z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3;.3333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M177.5500031,175.1000061l-99-147.3000031l-106.3000031,384l384-170.3000031l-178.6999969-66.4000092M94.6500015,127L150.25,209.8000031l94.6000061,35.1500092l-208.4499969,92.5L94.6500015,127z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2666666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M190.3000031,162.3000031L91.3000031,15L-15,399l384-170.3000031l-178.6999969-66.4000092M107.4000015,114.1999893L163,197l94.6000061,35.1499939l-208.4499969,92.5C49.1500092,324.6499939,107.4000015,114.1999969,107.4000015,114.1999893z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2333333333;.2666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M198.0500031,154.5500031l-99-147.3000031L-7.25,391.25l384-170.3000031l-178.6999969-66.4000092M170.75,189.2499847l94.6000061,35.1500092l-208.4500122,92.5l58.25-210.4499969L170.75,189.25V189.2499847z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.2333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M202.3500061,150.25l-99-147.3000031l-106.3000031,384l384-170.3000031L202.3499908,150.25M175.0499878,184.9499969l94.6000061,35.1500092l-208.4499969,92.5l58.2499962-210.4499969l55.5999908,82.8000031V184.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1666666667;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M204.3500061,148.25l-99-147.3000031l-106.3000031,384l384-170.3000031L204.3499908,148.25M177.0499878,182.9499969l94.6000061,35.1500092l-208.4499969,92.5l58.2499962-210.4499969l55.5999908,82.8000031V182.9499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1333333333;.1666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M205.1000061,147.5L106.0999985,0.2l-106.2999954,384l384-170.3000031L205.0999908,147.5M177.7999878,182.1999969l94.6000061,35.1500092l-208.4499969,92.5l58.25-210.4500122l55.5999908,82.8000107V182.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.1333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M106.3000031,0L0,384l384-170.3000031l-178.6999969-66.4000092L106.3000031,0 M178,182l94.6000061,35.1499939l-208.4499969,92.5l58.2499924-210.4499969L178,182z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0666666667;.1;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M205.3000031,147.3000031L106.3000031,0L0,384l384-170.3000031l-178.6999969-66.4000092M122.4000015,99.1999893L178,182l94.6000061,35.1499939l-208.4499969,92.5C64.1500092,309.6499939,122.4000015,99.1999969,122.4000015,99.1999893z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;.0666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st2' d='M205.3000031,147.3000031L106.3000031,0L0,384l384-170.3000031l-178.6999969-66.4000092M122.4000015,99.1999893L178,182l94.6000061,35.1499939l-208.4499969,92.5C64.1500092,309.6499939,122.4000015,99.1999969,122.4000015,99.1999893z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.0333333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g transform='translate(-105.2 105.2)' class='st0'><path class='st1' d='M105.1999969,278.7999878l384-170.3000031L310.5,42.0999832l-99-147.3000031L105.1999969,278.7999878M377.7999878,111.9499817l-208.4499969,92.5L227.6000061-6l55.6000061,82.8000031l94.6000061,35.1500015L377.7999878,111.9499817z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9666666667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M392.3999939-39.9000015l-99-147.3000183l-106.3000031,384l384-170.3000031L392.3999634-39.9000168 M309.5-88l55.6000061,82.8000031l94.6000061,35.1500015l-208.4499969,92.5L309.5-88z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9333333333;.9666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M633.5-35.9000015l-178.7000122-66.4000015l-99-147.3000031l-106.3000031,384l384-170.3000031M371.8999939-150.3999939L427.5-67.5999908l94.5999756,35.1500015l-208.4500122,92.5L371.8999939-150.3999939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.9333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M501.0499878-148.5500031l-99-147.3000031l-106.2999878,384l384-170.3000031l-178.7000122-66.4000092M418.1499939-196.6500244L473.75-113.8500214l94.5999756,35.1500015L359.8999939,13.8000002l58.25-210.4499969V-196.6500244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8666666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M534.2000122-181.6999969l-99-147.3000031L328.8999939,55l384.0000305-170.3000031l-178.7000122-66.4000092M506.8999939-147L601.5-111.8499985l-208.4500122,92.5l58.25-210.4500122L506.8999939-147z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8333333333;.8666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M556.9500122-204.4499969l-99-147.3000031l-106.2999878,384l384-170.3000031l-178.7000122-66.4000092M529.6500244-169.7500153L624.25-134.6000061L415.7999878-42.0999985l58.25-210.4499817l55.5999756,82.8000031L529.6500244-169.7500153z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.8333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M571.7999878-219.3999939l-99-147.3000183l-106.2999878,384l384-170.3000031l-178.7000122-66.4000092M544.5-184.7000275l94.5999756,35.1500092l-208.4500122,92.5L488.8999939-267.5L544.5-184.6999969V-184.7000275z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7666666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M580.7999878-228.3999939l-99-147.3000183L375.5,8.2999878l384-170.3000031l-178.7000122-66.4000092M497.8999939-276.5000305L553.5-193.7000275l94.5999756,35.1500092l-208.4500122,92.5L497.8999939-276.5V-276.5000305z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7333333333;.7666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M585.7999878-233.3000031l-99-147.3000031L380.5,3.3999939l384-170.3000031l-178.7000122-66.4000092M502.8999939-281.4000244L558.5-198.6000214l94.5999756,35.1500092l-208.4500122,92.5l58.2500305-210.4499817V-281.4000244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.7333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M588.1500244-235.6499939l-99-147.3000183l-106.2999878,384l384-170.3000031l-178.7000122-66.4000092M505.2500305-283.7500305l55.6000061,82.8000031l94.5999756,35.1500092L447-73.3000031L505.25-283.75L505.2500305-283.7500305z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6666666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M589.0499878-236.5500031l-99-147.3000031l-106.2999878,384l384-170.3000031l-178.7000122-66.4000092M506.1499939-284.6500244L561.75-201.8500214l94.5999756,35.1500092L447.8999939-74.1999969l58.25-210.4499969V-284.6500244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6333333333;.6666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M589.25-236.75l-99-147.2999878l-106.2999878,384l384-170.3000031L589.25-236.75 M506.3500061-284.8500061l55.6000061,82.8000031l94.5999756,35.1500092L448.1000061-74.4000015L506.3500061-284.8500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5666666667;.6333333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5333333333;.5666666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g></g></svg>","contracts":"<svg version='1.1'id='Layer_1' image-rendering='inherit' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><style type='text/css'>.st0{fill:#42A5F5;} </style><g><g><path class='st0' d='M114,226v42h156v-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6451612903;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g><path class='st0' d='M114,226v42h144.6000061v-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6129032258;.6451612903;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h133.1999969L247.25,226H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5806451613;.6129032258;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h121.8000031l0.0500031-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5483870968;.5806451613;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h110.3999939L224.5,226H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5161290323;.5483870968;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h99l0.1000061-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4838709677;.5161290323;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h87.5500031l0.1499939-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4516129032;.4838709677;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h76.1499939l0.1999969-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4193548387;.4516129032;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h64.75l0.1999969-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.3870967742;.4193548387;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h53.3500061l0.25-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.3548387097;.3870967742;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h41.9499969l0.25-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.3225806452;.3548387097;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h33.6499939l0.25-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.2903225806;.3225806452;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h25.3500061l0.3000031-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.2580645161;.2903225806;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h17.1000061l0.25-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.2258064516;.2580645161;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,226v42h8.8000031l0.3000031-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.1935483871;.2258064516;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114.8000031,226H114v42h0.5L114.8000031,226z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.1612903226;.1935483871;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M156,156v-42h-42v42H156z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.1290322581;.1612903226;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M167.3500061,156v-42H114v42H167.3500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.935483871;.9677419355;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M178.6999969,156v-42H114v42H178.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.9032258065;.935483871;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M190,156v-42h-76v42H190z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8709677419;.9032258065;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M201.3500061,156v-42H114v42H201.3500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8387096774;.8709677419;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M212.6999969,156v-42H114v42H212.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8064516129;.8387096774;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M224.0500031,156v-42H114v42H224.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.7741935484;.8064516129;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M235.3999939,156v-42H114v42H235.3999939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.7419354839;.7741935484;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M246.6999969,156v-42H114v42H246.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.7096774194;.7419354839;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M258.0499878,156v-42H114v42H258.0499878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6774193548;.7096774194;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M269.3999939,156v-42H114v42H269.3999939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6451612903;.6774193548;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M256.7999878,156v-42H114v42H256.7999878z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6129032258;.6451612903;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M244.1999969,156v-42H114v42H244.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5806451613;.6129032258;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M231.6000061,156v-42H114v42H231.6000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5483870968;.5806451613;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M219,156v-42H114v42H219z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5161290323;.5483870968;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M206.3999939,156v-42H114v42H206.3999939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4838709677;.5161290323;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M193.8000031,156v-42H114v42H193.8000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4516129032;.4838709677;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M181.1999969,156v-42H114v42H181.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4193548387;.4516129032;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M168.6000061,156v-42H114v42H168.6000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.3870967742;.4193548387;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M156,156v-42h-42v42H156z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.3225806452;.3870967742;.9677419355;1' repeatCount='1' restart='always' values='none;inline;none;inline;inline'></animate></g><g><path class='st0' d='M114,114v42h42v-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.1935483871;.3225806452;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M156,114h-42v42h42V114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.1612903226;.1935483871;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,114v42h31.6499939v-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.1290322581;.1612903226;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,114v42h21.25v-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.0967741935;.1290322581;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114,114v42h10.9000015v-42H114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.064516129;.0967741935;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M114.5,114H114v42h0.5V114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.0322580645;.064516129;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M247.1000061,114.0500031L247-0.0000022L205,42v114.5500031l115-0.3999939L362,114L247.1000061,114.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.0322580645;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g><g transform='translate(192 192)'><g id='c'><path id='b' class='st0' d='M169.9200134-78l-115-114h-225v384h340V-78 M37.6200104-150l90.3000031,89.5V150h-256v-300H37.6200104z'/></g></g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.9677419355;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g><g transform='translate(192 192)'><g id='d'><path class='st0' d='M169.9200134-78l-115-114h-225v384h340V-78 M37.6200104-150l90.3000031,89.5V150h-256v-300H37.6200104z'/></g></g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8064516129;.9677419355;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><g transform='translate(192 192)'><g id='e'><path id='a' class='st0' d='M54.9200134-150v-42h-225v384h340V-78h-42v228h-256v-300H54.9200134z'/></g></g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5483870968;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g><path class='st0' d='M247.1000061,114.0500031L247-0.0000022L205,42v114.5500031l115-0.3999939L362,114L247.1000061,114.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.9677419355;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g><path class='st0' d='M211.1499939,42l11.3000031,97.1000061L320,150l42-36L261.4500122,99.8000031L247-0.0000022L211.1499939,42z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.935483871;.9677419355;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M275.7999878,85.5500031L247-0.0000022L217.25,42l22.6999969,79.6500015L320,143.8500061L362,114L275.7999878,85.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.9032258065;.935483871;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M290.1499939,71.25L247-0.0000022l-23.6000061,41.9500046l34,62.2499962L320,137.6499939L362,114L290.1499939,71.25z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8709677419;.9032258065;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M304.5,57l-57.5-57l-17.5,41.9500008L274.8500061,86.75L320,131.5l42-17.5L304.5,57z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8387096774;.8709677419;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M316,45.5999985L247-0.0000022l-17.5,41.9500046l54.3999939,35.9000053l36.1499939,56.5500031L362,114L316,45.5999985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.8064516129;.8387096774;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,114l-34.5-79.8000031L247-0.0000022l-17.5,41.9500046l63.3999939,26.9500008l27.2000122,68.4000015L362,114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.7741935484;.8064516129;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,114l-23.0499878-91.1999969L247-0.0000022l-17.5,41.9500046L301.9500122,60l18.25,80.1499939L362,114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.7419354839;.7741935484;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,114L350.4500122,11.3999977L247-0.0000022l-17.5,41.9500046l81.4500122,9.1000023l9.2999878,92L362,114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.7096774194;.7419354839;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,114l-0.0499878-114H247l-17.5,41.9500008l90.5,0.2000008l0.2999878,103.8000107L362,114z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6774193548;.7096774194;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M328.6499939,151.5L362,114L350.8500061,11.6499977L247-0.0000022l-26.5,33.5500031l90.4500122,17.3999977L328.6500244,151.5H328.6499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6451612903;.6774193548;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M336.9500122,157.0500031L362,114l-22.2000122-90.6999969L247-0.0000022l-35.5,25.1499977L301.9500122,59.75L336.9500122,157.0500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.6129032258;.6451612903;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M345.2999878,162.6499939L362,114l-33.2999878-79.0500031L247-0.0000022l-44.5,16.7999973l90.3999939,51.8000031L345.2999878,162.6499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5806451613;.6129032258;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M353.6000061,168.1999969L362,114l-44.3500061-67.4000015L247-0.0000022l-53.5,8.3999996l90.3999939,69l69.6999817,90.8000107L353.6000061,168.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5483870968;.5806451613;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M361.9500122,173.75L362,114l-55.4500122-55.75L247-0.0000022h-62.5l90.3500061,86.1999969L361.9500122,173.75z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5161290323;.5483870968;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M361.9500122,170.1999969L362,114l-67.3500061-44.5999985L247-0.0000022h-58.3999939l72.3000183,100.1500015l101.0499878,70.0500107V170.1999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4838709677;.5161290323;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M361.9500122,166.6499939L362,114l-79.25-33.4499969L247-0.0000022h-54.3000031l54.1999969,114.0999985L361.9500122,166.6499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4516129032;.4838709677;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M361.9500122,163.1000061V114L270.75,91.6999969L246.9499969-0.0000022H196.75l36.1499939,128.1000061L361.9500122,163.1000061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.4193548387;.4516129032;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,159.5500031V114l-103.1000061-11.1500015L247-0.0000022h-46.1000061l18.0500031,142.0500031L362,159.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.3870967742;.4193548387;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,156v-42H247v-114h-42v156H362z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.0967741935;.3870967742;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st0' d='M362,156v-42H247v-114h-42v156H362z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.0322580645;.0967741935;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.0322580645;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g><g transform='translate(192 192)'><g id='f'><path class='st0' d='M54.9200134-150v-42h-225v384h340V-78h-42v228h-256v-300H54.9200134z'/></g></g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.9677419355;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g><g transform='translate(192 192)'><g id='g'><path class='st0' d='M54.9200134-150v-42h-225v384h340V-78h-42v228h-256v-300H54.9200134z'/></g></g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1.0333333333s' fill='freeze' keyTimes='0;.5483870968;.9677419355;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g></g><path class='st0' d='M229.6300049,42l90.2900085,89.5039978V342h-256V42h165.7100067 M246.9200134-0.0000022h-225v384h340V114L246.9200134-0.0000022z'><animate accumulate='none' additive='replace' attributeName='display' begin='-525ms' calcMode='linear' dur='2100ms' fill='freeze' repeatCount='1' restart='always' values='none;inline;none;none'></animate></path></svg>","messages":"<svg xmlns='http://www.w3.org/2000/svg' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='384' height='384' baseProfile='basic' image-rendering='inherit' preserveAspectRatio='xMidYMid' viewBox='0 0 384 384' anigen:version='0.8.1'><defs><use id='e' overflow='visible' xlink:href='#a'/><path id='b' fill='#42A5F5' d='M384 362V22H0v340h384M342 64v256H42V64h300z' overflow='visible'/><use id='d' overflow='visible' xlink:href='#b'/><path id='c' fill='#42A5F5' d='M192 170v-340h-383.95v340H192m-74.2-298L0-26.7-117.75-128H117.8M0 28.65l150-129V128h-300v-228.35l150 129z' overflow='visible'/><use id='a' overflow='visible' xlink:href='#c'/></defs><g overflow='visible'><g display='none'><use transform='translate(941.55 192)' xlink:href='#d'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5;.5333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g><use transform='translate(191.95 192)' xlink:href='#e'><animateTransform fill='freeze' additive='replace' attributeName='transform' calcMode='discrete' dur='1s' keyTimes='0;.066666666699;.0666666667;.099999999999;.1;.133333333299;.1333333333;.166666666699;.1666666667;.199999999999;.2;.233333333299;.2333333333;.266666666699;.2666666667;.299999999999;.3;.333333333299;.3333333333;.366666666699;.3666666667;.399999999999;.4;.433333333299;.4333333333;.466666666699;.4666666667;1' type='translate' values='191.95,192;191.95,192;192.45,192;192.45,192;195.8,192;195.8,192;208.1,192;208.1,192;241.3,192;241.3,192;314.75,192;314.75,192;457.4,192;457.4,192;676.1,192;676.1,192;818.75,192;818.75,192;892.2,192;892.2,192;925.4,192;925.4,192;937.7,192;937.7,192;941.05,192;941.05,192;941.55,192;941.55,192'/></use><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5;1' repeatCount='1' values='inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 362V22H0v340h384M342 64v256H42V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.7;1' repeatCount='1' values='none;inline;inline'/></g><g display='none'><path fill='#42A5F5' d='M383.95 362V22h-384v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.6666666667;.7;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M383.2 362V22H-.8v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.6333333333;.6666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M378 362V22H-6v340h384M336 64v256H36V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.6;.6333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M358.7 362V22h-384v340h384m-42-42h-300V64h300v256z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5666666667;.6;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M306.85 362V22h-384v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5333333333;.5666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M192.05 362V22h-384v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5;.5333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M77.2 362V22h-384v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.4666666667;.5;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M25.3 362V22h-384v340h384m-342-42V64h300v256h-300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.4333333333;.4666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M6.05 362V22h-384v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.4;.4333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M.8 362V22h-384v340H.8m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.3666666667;.4;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M.05 362V22h-384v340h384m-42-298v256h-300V64h300z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.3;.3666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.2666666667;.3;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 143.25L25 22 1 56l191 164.6L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.9666666667;1' repeatCount='1' values='none;inline;inline'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 142.05L25 22 1 56l191 163.3L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.9333333333;.9666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 133.85L25 22 1 56l191 154.35L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.9;.9333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 103.55L25 22 1 56l191 121.2L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.8666666667;.9;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 39.75L25 22 1 56l191 51.45L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.8333333333;.8666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 9.45L25 22 1 56l191 18.3L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.8;.8333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34-166 1.25L25 22 1 56l191 9.35L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.7666666667;.8;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34H25L1 56l191 8.05L384 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.7333333333;.7666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M384 56l-26-34H25L1 56l191 8 192-8z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.7;.7333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M383.95 56l-26-34h-333l-24 34 191 8 192-8z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.6666666667;.7;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M383.2 56l-26-34h-333L.2 56l191 8 192-8z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.6333333333;.6666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M378 56l-26-34H19L-5 56l191 8 192-8z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.6;.6333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M358.7 56l-26-34H-.3l-24 34 191.1 8 191.9-8z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5666666667;.6;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M306.85 56l-26-34h-333l-24 34 191.2 8 191.8-8z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5333333333;.5666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M192.05 56l-26-34h-333l-24 34L.5 64.05 192.05 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.5;.5333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M77.2 56l-26-34h-333l-24 34 191.75 8.05L77.2 56z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.4666666667;.5;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M-333.7 22l-24 34 191.85 8.05L25.3 56l-26-34h-333z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.4333333333;.4666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M-352.95 22l-24 34L-185 64.05 6.05 56l-26-34h-333z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.4;.4333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M-358.2 22l-24 34 191.95 8.05L.8 56l-26-34h-333z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.3666666667;.4;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M-358.95 22l-24 34L-191 64.05.05 56l-26-34h-333z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.3333333333;.3666666667;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><path fill='#42A5F5' d='M-25.95 22l-164.05.05-168.95-.05-24 34L-191 64.05.05 56l-26-34z'/><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.3;.3333333333;1' repeatCount='1' values='none;inline;none;none'/></g><g display='none'><animate fill='freeze' attributeName='display' dur='1s' keyTimes='0;.2666666667;.3;1' repeatCount='1' values='none;inline;none;none'/></g></g></svg>","staking":"<svg version='1.1'id='Layer_1' image-rendering='optimizeQuality' anigen:version='0.8.1' xmlns:anigen='http://www.anigen.org/namespace' xmlns:svg='http://www.w3.org/2000/svg'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 384 384'style='enable-background:new 0 0 384 384;' xml:space='preserve'><g><g class='st0'><path class='st1' d='M384,362v-42H64V0H22v320H0v42h22v22h42v-22H384z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g><path class='st2' d='M334,269V135h-42v134H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V150.6499939h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.96666667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M334,269V166.25h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.93333333;.96666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-87.1000061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.93333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-71.5h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.86666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-55.8500061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.83333333;.86666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-40.25h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.83333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-24.6000061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.76666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-9h-42v9H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.73333333;.76666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-38.3000031h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.73333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-67.5500031h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.66666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-96.8500061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.63333333;.66666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V142.8500061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6;.63333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V113.5500031h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.56666667;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V84.3000031h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.53333333;.56666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V55h-42v214H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5;.53333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V77.8499985h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.46666667;.5;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V100.6999969h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.43333333;.46666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V123.5500031h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4;.43333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-54h-42v54H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.26666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-65.4499969h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.23333333;.26666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-76.8500061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.23333333;.3;.33333333;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-88.3000031h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.16666667;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269v-99.6999969h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.13333333;.16666667;.33333333;.36666667;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V157.8500061h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.13333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V146.4499969h-42V269H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.06666667;.1;.36666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M334,269V135h-42v134H334z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;.06666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st2' d='M244,41h-42v228h42V41z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,63.5h-42V269h42V63.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.96666667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M244,86h-42v183h42V86z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.93333333;.96666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,108.5h-42V269h42V108.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.93333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,131h-42v138h42V131z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.86666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,153.5h-42V269h42V153.5z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.83333333;.86666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,176h-42v93h42V176z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.83333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,269v-70.5h-42V269H244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.76666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,269v-48h-42v48H244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.73333333;.76666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,269v-56.5500031h-42V269H244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.73333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,269v-65.1499939h-42V269H244z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.66666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,195.3000031h-42V269h42V195.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.63333333;.66666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,186.6999969h-42V269h42V186.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6;.63333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,178.1499939h-42V269h42V178.1499939z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.56666667;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,169.5500031h-42V269h42V169.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.53333333;.56666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,161h-42v108h42V161z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.5;.53333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,141.6999969h-42V269h42V141.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.46666667;.5;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,122.4499969h-42V269h42V122.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.43333333;.46666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,103.1500015h-42V269h42V103.1500015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.4;.43333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,83.8499985h-42V269h42V83.8499985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.36666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,64.5500031h-42V269h42V64.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.33333333;.36666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,45.2999992h-42V269h42V45.2999992z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.3;.33333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,26h-42v243h42V26z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.26666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,28.1499996h-42V269h42V28.1499996z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.23333333;.26666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,30.2999992h-42V269h42V30.2999992z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.23333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,32.4500008h-42V269h42V32.4500008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.16666667;.2;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,34.5499992h-42V269h42V34.5499992z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.13333333;.16666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,36.7000008h-42V269h42V36.7000008z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.13333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,38.8499985h-42V269h42V38.8499985z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.06666667;.1;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M244,41h-42v228h42V41z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;.06666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g><path class='st2' d='M154,179h-42v90h42V179z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,164h-42v105h42V164z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.96666667;1' repeatCount='1' restart='always' values='none;inline;inline'></animate></g><g class='st0'><path class='st1' d='M154,149h-42v120h42V149z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.93333333;.96666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,134h-42v135h42V134z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.9;.93333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,119h-42v150h42V119z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.86666667;.9;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,104h-42v165h42V104z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.83333333;.86666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,89h-42v180h42V89z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.8;.83333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,74h-42v195h42V74z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.76666667;.8;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,59h-42v210h42V59z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.73333333;.76666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,76.1500015h-42V269h42V76.1500015z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.7;.73333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,93.3000031h-42V269h42V93.3000031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.66666667;.7;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,110.4499969h-42V269h42V110.4499969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.63333333;.66666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,127.5500031h-42V269h42V127.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.6;.63333333;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,144.6999969h-42V269h42V144.6999969z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.56666667;.6;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,161.8500061h-42V269h42V161.8500061z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.53333333;.56666667;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M112,266.75v2.2000122h42V266.75H112z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.26666667;.3;1' repeatCount='1' restart='always' values='none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M112,254.25V269h42v-14.75H112z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.23333333;.26666667;.3;.33333333;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M112,269h42v-27.3000031h-42V269z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.2;.23333333;.33333333;.36666667;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M112,229.1499939V269h42v-39.8500061H112z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.16666667;.2;.36666667;.4;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M112,216.6499939V269h42v-52.3500061H112z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.13333333;.16666667;.4;.43333333;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M112,204.1000061V269h42v-64.8999939H112z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.1;.13333333;.43333333;.46666667;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,191.5500031h-42V269h42V191.5500031z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.06666667;.1;.46666667;.5;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g class='st0'><path class='st1' d='M154,179h-42v90h42V179z'/><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;.06666667;.5;.53333333;1' repeatCount='1' restart='always' values='none;inline;none;inline;none;none'></animate></g><g><animate accumulate='none' additive='replace' attributeName='display' calcMode='linear' dur='1s' fill='freeze' keyTimes='0;.03333333;1' repeatCount='1' restart='always' values='inline;none;none'></animate></g></g><path class='st2' d='M384,320H64V0H22v320H0v42h22v22h42v-22h320V320z'/></svg>"};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Projects now\work\zano\src\gui\qt-daemon\html_source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map