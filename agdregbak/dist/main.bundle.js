webpackJsonp([2],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n.example-container {\r\n  width: 500px;\r\n}\r\n\r\n.example-button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n  -webkit-box-pack:  end;\r\n      -ms-flex-pack:  end;\r\n          justify-content:  flex-end;\r\n\r\n}\r\n.example-header-image {\r\n  background-image: url('/assets/Logo.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.example-section {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.divider{\r\n    height:30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<!--<md-toolbar color=\"primary\" >\r\n\r\n    <img src=\"assets/logo-DarkBg.png\" />\r\n\r\n    <span class=\"example-spacer\"></span>\r\n   \r\n</md-toolbar>-->\r\n<!--<md-toolbar color=\"primary2\">\r\n\r\n\r\n    <span style=\"margin-right:10px;\">Enquiry</span> | <span style=\"margin-left:10px;\">Register</span>\r\n    \r\n    <span class=\"example-spacer\"></span>\r\n    \r\n   \r\n    \r\n</md-toolbar>-->\r\n\r\n  <md-toolbar color=\"primary\" class=\"toolbig\">\r\n\r\n             <img src=\"assets/logo-DarkBg.png\" class=\"toolbar-logo\" />\r\n\r\n            <span class=\"example-spacer\"></span>\r\n<md-icon class=\"example-icon\" (click)=\"sidenav.toggle()\">arrow_forward</md-icon>\r\n\r\n \r\n        </md-toolbar>\r\n\r\n<div class=\"root2\">\r\n\r\n<md-sidenav-container class=\"example-sidenav-fab-container\">\r\n  <md-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n   \r\n    <div class=\"example-scrolling-content\">\r\n         <div class=\"main-form first-pnl\">\r\n        \r\n\r\n<md-card class=\"example-card green-card\">\r\n <img src=\"assets/logo-DarkBg.png\" class=\"side-logo\" />\r\n\r\n  <!--<img md-card-image src=\"assets/download.jpg\">-->\r\n  <md-card-content>\r\n    <p>\r\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n      bred for hunting.\r\n\r\n\r\n    </p>\r\n    <md-input-container class=\"example-full-width\">\r\n                <input mdInput placeholder=\"Reference Number\" [(ngModel)]=\"searchno\" />\r\n            </md-input-container>\r\n\r\n            <div class=\"example-button-row\">\r\n                <a md-fab (click)=\"search()\"><md-icon>search</md-icon></a>\r\n            </div>\r\n      <p [hidden]=\"enqstatus != 'PEN'\">\r\n                Your registeration is not reviewed yet. Thanks for your request.\r\n            </p>\r\n            <p [hidden]=\"enqstatus != 'REV'\">\r\n                Your registeration is in review state. We will contact you soon.\r\n                <!--<br />\r\n                {{enqmessage}}, {{enqreview}}-->\r\n            </p>       \r\n  </md-card-content>\r\n \r\n</md-card>\r\n\r\n       \r\n       \r\n    </div>\r\n    \r\n    </div>\r\n  </md-sidenav>\r\n\r\n  <div class=\"example-scrolling-content\">\r\n   <div class=\" main-form\">\r\n<!--     <md-toolbar color=\"primary\">\r\n\r\n        \r\n        \r\n        <md-icon class=\"example-icon\" (click)=\"previousState()\">keyboard_arrow_left</md-icon>\r\n        <span class=\"example-spacer\"></span>\r\n        <md-icon class=\"example-icon\" (click)=\"nextState()\">keyboard_arrow_right</md-icon>\r\n    </md-toolbar> -->\r\n    <div *ngIf=\"load\" style=\"position:relative;\">\r\n        <div style=\"position: absolute; left: 50%;z-index:1000;margin-top:200px;\">\r\n            <div style=\"position: relative; left: -50%;\">\r\n                <md-spinner></md-spinner>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"state == 0\" [@enterAnimation]=\"state==0\">\r\n    <md-card>\r\n        <h3>Service Request Form</h3>\r\n\r\n     \r\n            <!--<md-input-container class=\"example-full-width\">\r\n                <input mdInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n            </md-input-container>-->\r\n       \r\n             <md-card-title><span class=\"subno\">1</span>Personel Information</md-card-title>\r\n            <table class=\"example-full-width\" cellspacing=\"0\">\r\n                <tr>\r\n                 \r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.fname\" placeholder=\"First name\">\r\n                        </md-input-container>\r\n                    </td>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.lname\" placeholder=\"Long Last Name That Will Be Truncated\">\r\n                        </md-input-container>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <p>\r\n               <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.fathername\" placeholder=\"Father name\">\r\n                        </md-input-container>\r\n            </p>\r\n\r\n            <p>\r\n              <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.nrcno\" placeholder=\"Nrc number\">\r\n                        </md-input-container>\r\n            </p>\r\n<table>\r\n  <tr>\r\n    <td>\r\n       <md-input-container>\r\n                    <input placeholder=\"Date of birth\" mdInput [(ngModel)]=\"model.dob\" [mdDatepicker]=\"myDatepicker\">\r\n                    <button mdSuffix [mdDatepickerToggle]=\"myDatepicker\"></button>\r\n                </md-input-container>\r\n                <md-datepicker #myDatepicker></md-datepicker>\r\n    </td>\r\n      <td>\r\n        <md-select [(ngModel)]=\"model.gender\" placeholder=\"Gender\">\r\n                    <md-option *ngFor=\"let g of genders\" [value]=\"g.value\">\r\n                      {{ g.text }}\r\n                    </md-option>\r\n            </md-select>\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n             \r\n\r\n            <!--<section class=\"example-section\">\r\n                <label class=\"example-margin\">Gender:</label>\r\n                <md-radio-group #align>\r\n                    <md-radio-button class=\"example-margin\" value=\"start\">Male</md-radio-button>\r\n                    <md-radio-button class=\"example-margin\" value=\"end\">Female</md-radio-button>\r\n                </md-radio-group>\r\n            </section>-->\r\n\r\n            <p>\r\n                \r\n            </p>\r\n            \r\n\r\n          <!--<p>Contact Information</p>-->\r\n            <table class=\"example-full-width\" cellspacing=\"0\">\r\n                <tr>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.mobile\" placeholder=\"Mobile Number\">\r\n                        </md-input-container>\r\n                    </td>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.email\" placeholder=\"Email\">\r\n                        </md-input-container>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table class=\"example-full-width\" cellspacing=\"0\">\r\n                <tr>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.city\" placeholder=\"City\">\r\n                        </md-input-container>\r\n                    </td>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.state\" placeholder=\"State\">\r\n                        </md-input-container>\r\n                    </td>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input mdInput [(ngModel)]=\"model.postal\" maxlength=\"5\" placeholder=\"Postal Code(Optional)\" >\r\n                            <md-hint align=\"end\">{{model.postal.length}} / 5</md-hint>\r\n                        </md-input-container>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <p>\r\n                <md-input-container class=\"example-full-width\">\r\n                    <textarea mdInput [(ngModel)]=\"model.address\" placeholder=\"Address\"></textarea>\r\n                </md-input-container>\r\n                <!--<md-input-container class=\"example-full-width\">\r\n                    <textarea mdInput placeholder=\"Address 2\"></textarea>\r\n                </md-input-container>-->\r\n            </p>\r\n        \r\n             <div class=\"example-button-row\">\r\n\r\n                 <a md-fab (click)=\"goState(1)\"><md-icon>check</md-icon></a>\r\n\r\n             </div>\r\n        \r\n\r\n        </md-card>\r\n\r\n   </div>\r\n    <div *ngIf=\"state == 1\" [@enterAnimation]=\"state == 1\">\r\n    <md-card>\r\n          \r\n          \r\n            <md-card-title><span class=\"subno\">2</span>Choose Required Services</md-card-title>\r\n             <div class=\"form-tool\">\r\n              <md-icon (click)=\"previousState()\">arrow_backward</md-icon>\r\n          \r\n          \r\n        </div>\r\n        <md-list *ngFor=\"let t of services\">\r\n            <md-list-item *ngFor=\"let s of t.service\">\r\n                <md-checkbox class=\"example-margin\" [(ngModel)]=\"s.checked\">{{s.name}}</md-checkbox>\r\n            </md-list-item>\r\n        </md-list>\r\n                <!--<md-list >\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.acsaving\">Saving Account</md-checkbox></md-list-item>\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.acfix\">Fix Deposit Account</md-checkbox></md-list-item>\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.acloan\">Loan Account</md-checkbox></md-list-item>\r\n                \r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.appagdp\">AGD Pay</md-checkbox></md-list-item>\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.appmb\">Mobile Banking</md-checkbox></md-list-item>\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.appib\">Internet Banking</md-checkbox></md-list-item>\r\n\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.cardmpu\">MPU Card</md-checkbox></md-list-item>\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.cardvisa\">Visa Card</md-checkbox></md-list-item>\r\n                    <md-list-item><md-checkbox class=\"example-margin\" [(ngModel)]=\"model.cardmaster\">Master Card</md-checkbox></md-list-item>\r\n                \r\n                </md-list>-->\r\n\r\n                \r\n\r\n               \r\n          \r\n             <div class=\"example-button-row\">\r\n\r\n                 <a md-fab (click)=\"goState(2)\"><md-icon>check</md-icon></a>\r\n\r\n             </div>\r\n\r\n            <!--https://www.npmjs.com/package/angular2-image-upload-->\r\n\r\n       \r\n        </md-card>\r\n        </div>\r\n    <div *ngIf=\"state == 2\" [@enterAnimation]=\"state == 2\">  \r\n       \r\n         <md-card>\r\n\r\n             <md-card-title><span class=\"subno\">3</span>Upload Identity</md-card-title>\r\n\r\n             <div class=\"form-tool\">\r\n              <md-icon (click)=\"previousState()\">arrow_backward</md-icon>\r\n          \r\n          \r\n        </div>\r\n                <p class=\"sub-tit\">Passport photo</p>\r\n            <image-upload [max]=\"1\"\r\n                          [url]=\"'/home/upload'\"\r\n                          [headers]=\"[\r\n    {header: 'Authorization', value: 'MyToken'}\r\n  ]\"\r\n                          [buttonCaption]=\"'Select Images'\"\r\n                          [dropBoxMessage]=\"'Drop your image here!'\"\r\n                          (onFileUploadFinish)=\"imageUploaded($event)\"\r\n                          (onRemove)=\"imageRemoved($event)\"\r\n                          (isPending)=\"disableSendButton($event)\"></image-upload>\r\n     \r\n                <p class=\"sub-tit\">NRC front view</p>\r\n            <image-upload [max]=\"1\"\r\n                          [url]=\"'/home/upload'\"\r\n                          [headers]=\"[\r\n    {header: 'Authorization', value: 'MyToken'}\r\n  ]\"\r\n                          [buttonCaption]=\"'Select Images'\"\r\n                          [dropBoxMessage]=\"'Drop your image here!'\"\r\n                          (onFileUploadFinish)=\"nrcImageUploaded($event)\"\r\n                          (onRemove)=\"nrcImageRemoved($event)\"\r\n                          (isPending)=\"nrcDisableSendButton($event)\"></image-upload>\r\n\r\n\r\n                <p class=\"sub-tit\">NRC back view</p>\r\n                <image-upload [max]=\"1\"\r\n                              [url]=\"'/home/upload'\"\r\n                              [headers]=\"[\r\n    {header: 'Authorization', value: 'MyToken'}\r\n  ]\"\r\n                              [buttonCaption]=\"'Select Images'\"\r\n                              [dropBoxMessage]=\"'Drop your image here!'\"\r\n                              (onFileUploadFinish)=\"nrcBackImageUploaded($event)\"\r\n                              (onRemove)=\"nrcBackImageRemoved($event)\"\r\n                              (isPending)=\"nrcBackDisableSendButton($event)\"></image-upload>\r\n             <p>\r\n\r\n               <p class=\"sub-tit\">Signature file</p>\r\n                <image-upload [max]=\"1\"\r\n                              [url]=\"'/home/upload'\"\r\n                              [headers]=\"[\r\n    {header: 'Authorization', value: 'MyToken'}\r\n  ]\"\r\n                              [buttonCaption]=\"'Select Images'\"\r\n                              [dropBoxMessage]=\"'Drop your image here!'\"\r\n                              (onFileUploadFinish)=\"sigBackImageUploaded($event)\"\r\n                              (onRemove)=\"sigBackImageRemoved($event)\"\r\n                              (isPending)=\"sigBackDisableSendButton($event)\"></image-upload>\r\n             <p>\r\n             </p>\r\n             <!--https://www.npmjs.com/package/angular2-recaptcha-->\r\n             <re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"6LfHiyUUAAAAAJuMWWVOfIjHnrzx8wZw_6Z0F0g0\"></re-captcha>\r\n            \r\n                <div class=\"example-button-row\">\r\n\r\n                    <a md-fab (click)=\"postData()\"><md-icon>check</md-icon></a>\r\n\r\n                </div>\r\n                </md-card>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"state == 3\" [@enterAnimation]=\"state == 3\">\r\n        <md-card>\r\n            <md-card-title>Request Complete</md-card-title>\r\n            <p>\r\n                Your registeration process is successfully completed. Please save the following reference number for futher enquiry.\r\n            </p>\r\n            <h2>{{refnumber}}</h2>\r\n        </md-card>\r\n    </div>\r\n  \r\n</div>\r\n  </div>\r\n</md-sidenav-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n    \r\n   \r\n</div>\r\n\r\n<!--<div class=\"row\">\r\n    <div class=\"columns\">\r\n        <button (click)=\"toggleMove()\">Press me for animation</button>\r\n    </div>\r\n    <div class=\"columns\">\r\n        <div id=\"content\" [@focusPanel]='uistate' [@movePanel]='uistate'>Look at me animate</div>\r\n    </div>\r\n</div>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_recaptcha__ = __webpack_require__("./node_modules/angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_recaptcha__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export Register */
/* unused harmony export Service */
/* unused harmony export Gender */
/* unused harmony export ServiceInfo */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(http, snackBar) {
        var _this = this;
        this.http = http;
        this.snackBar = snackBar;
        this.model = new Register(1, '', '', '', '', '', '', '', '', '', '', '', '', '', "", "", "", "", '', []);
        this.state = 0;
        this.searchno = "";
        this.load = true;
        this.enqstatus = "";
        this.enqreview = "";
        this.enqmessage = "";
        this.uistate = 'inactive';
        //console.log(services);
        this.ser = new Promise(function (resolve) {
            _this.http.get("/home/getservices").subscribe(function (data) {
                _this.load = false;
                if (data.json()) {
                    resolve(data.json());
                    _this.services = data.json();
                }
                else {
                    console.log("Error");
                }
            });
        });
        this.postUrl = '';
        this.genders = [];
        this.genders.push(new Gender('0', 'Male'));
        this.genders.push(new Gender('1', 'Female'));
    }
    AppComponent.prototype.toggleMove = function () {
        this.uistate = (this.uistate === 'inactive' ? 'active' : 'inactive');
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("/home/enquiry?refno=" + _this.searchno).subscribe(function (data) {
                if (data.json()) {
                    resolve(data.json());
                    var enq = data.json();
                    if (enq.code == 400) {
                        _this.openSnackBar("Invalid reference number.", "ok");
                    }
                    if (enq.code == 200) {
                        _this.enqstatus = enq.status;
                        _this.enqreview = enq.review;
                        _this.enqmessage = enq.message;
                    }
                }
                else {
                    console.log("Error");
                }
            });
        });
    };
    AppComponent.prototype.previousState = function () {
        var newstate = this.state - 1;
        if (newstate >= 0 && newstate != 3) {
            this.goState(newstate);
        }
    };
    AppComponent.prototype.nextState = function () {
        var newstate = this.state + 1;
        if (newstate <= 2 && newstate != 3) {
            this.goState(newstate);
        }
    };
    AppComponent.prototype.goHome = function () {
        this.goState(0);
    };
    AppComponent.prototype.goState = function (s) {
        this.state = s;
        var rs = this.getRequestServices();
        console.log(rs);
    };
    AppComponent.prototype.getRequestServices = function () {
        var results = [];
        if (this.services)
            for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
                var t = _a[_i];
                for (var _b = 0, _c = t.service; _b < _c.length; _b++) {
                    var s = _c[_b];
                    if (s.checked) {
                        results.push(s.code);
                    }
                }
            }
        this.model.services = results;
        return results;
    };
    AppComponent.prototype.postData = function () {
        var _this = this;
        if (!this.model.recaptcha) {
            this.openSnackBar("Human verification fail.", "ok");
        }
        else {
            this.load = true;
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
            headers.append('Access-Control-Allow-Origin', '*');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
            this.captcha.reset();
            return new Promise(function (resolve) {
                _this.http.post("/home/register", _this.model, options_1).subscribe(function (data) {
                    _this.load = false;
                    if (data.json()) {
                        resolve(data.json());
                        var result = data.json();
                        if (result.code == 200) {
                            _this.state = 3;
                            _this.refnumber = result.message;
                        }
                        else {
                            _this.openSnackBar(result.message, "ok");
                        }
                    }
                    else {
                        console.log("Error");
                    }
                });
            });
        }
    };
    AppComponent.prototype.handleCorrectCaptcha = function (e) {
        this.model.recaptcha = e;
    };
    AppComponent.prototype.imageUploaded = function (s) {
        console.log('uploaded..');
        console.log(s.serverResponse._body);
        var result = JSON.parse(s.serverResponse._body);
        if (result.code = 200) {
            this.model.photo = result.message;
        }
        else {
            this.openSnackBar(result.message, "ok");
        }
    };
    AppComponent.prototype.imageRemoved = function (s) {
        this.model.photo = null;
        console.log('remove..');
    };
    AppComponent.prototype.disableSendButton = function (s) {
        console.log(s);
    };
    AppComponent.prototype.nrcImageUploaded = function (s) {
        console.log('uploaded..');
        console.log(s.serverResponse._body);
        var result = JSON.parse(s.serverResponse._body);
        if (result.code = 200) {
            this.model.nrc1 = result.message;
        }
        else {
            this.openSnackBar(result.message, "ok");
        }
    };
    AppComponent.prototype.nrcImageRemoved = function (s) {
        console.log('remove..');
        this.model.nrc1 = null;
        console.log(s);
    };
    AppComponent.prototype.nrcDisableSendButton = function (s) {
        console.log(s);
    };
    AppComponent.prototype.nrcBackImageUploaded = function (s) {
        console.log('uploaded..');
        console.log(s.serverResponse._body);
        var result = JSON.parse(s.serverResponse._body);
        if (result.code = 200) {
            this.model.nrc2 = result.message;
        }
        else {
            this.openSnackBar(result.message, "ok");
        }
    };
    AppComponent.prototype.nrcBackImageRemoved = function (s) {
        console.log('remove..');
        this.model.nrc2 = null;
        console.log(s);
    };
    AppComponent.prototype.nrcBackDisableSendButton = function (s) {
        console.log(s);
    };
    AppComponent.prototype.sigBackImageUploaded = function (s) {
        console.log('uploaded..');
        console.log(s.serverResponse._body);
        var result = JSON.parse(s.serverResponse._body);
        if (result.code = 200) {
            this.model.signature = result.message;
        }
        else {
            this.openSnackBar(result.message, "ok");
        }
    };
    AppComponent.prototype.sigBackImageRemoved = function (s) {
        console.log('remove..');
        this.model.signature = null;
        console.log(s);
    };
    AppComponent.prototype.sigBackDisableSendButton = function (s) {
        console.log(s);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_angular2_recaptcha__["ReCaptchaComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_recaptcha__["ReCaptchaComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_recaptcha__["ReCaptchaComponent"]) === "function" && _a || Object)
], AppComponent.prototype, "captcha", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["trigger"])('enterAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["transition"])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["animate"])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["transition"])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["animate"])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["style"])({ transform: 'translateY(100%)', opacity: 0 }))
                ])
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _c || Object])
], AppComponent);

var Register = (function () {
    function Register(id, fname, lname, dob, mobile, email, city, state, address, postal, gender, fathername, nrcno, salutation, photo, nrc1, nrc2, signature, recaptcha, services) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.mobile = mobile;
        this.email = email;
        this.city = city;
        this.state = state;
        this.address = address;
        this.postal = postal;
        this.gender = gender;
        this.fathername = fathername;
        this.nrcno = nrcno;
        this.salutation = salutation;
        this.photo = photo;
        this.nrc1 = nrc1;
        this.nrc2 = nrc2;
        this.signature = signature;
        this.recaptcha = recaptcha;
        this.services = services;
    }
    return Register;
}());

var Service = (function () {
    function Service(id, name, code, type_id, priority, checked) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.type_id = type_id;
        this.priority = priority;
        this.checked = checked;
    }
    return Service;
}());

var Gender = (function () {
    function Gender(value, text) {
        this.value = value;
        this.text = text;
    }
    return Gender;
}());

var ServiceInfo = (function () {
    function ServiceInfo(name, order, service) {
        this.name = name;
        this.order = order;
        this.service = service;
    }
    return ServiceInfo;
}());

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__("./node_modules/angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_recaptcha__ = __webpack_require__("./node_modules/angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["ImageUploadModule"].forRoot(), __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_8_angular2_recaptcha__["ReCaptchaModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map