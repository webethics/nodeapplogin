webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n \n <div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer> </app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Welcome to crypto world';
    }
    //constructor(private router: Router) {}
    AppComponent.prototype.ngOnInit = function () {
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_index_component__ = __webpack_require__("./src/app/components/user/user/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_signup_signup_component__ = __webpack_require__("./src/app/components/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_signupconfirm_signupconfirm_component__ = __webpack_require__("./src/app/components/user/signupconfirm/signupconfirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_resetPassword_resetPassword_component__ = __webpack_require__("./src/app/components/user/resetPassword/resetPassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_edit_edit_component__ = __webpack_require__("./src/app/components/user/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_album_index_component__ = __webpack_require__("./src/app/components/album/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_album_add_album_component__ = __webpack_require__("./src/app/components/album/add_album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routerConfig__ = __webpack_require__("./src/app/routerConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_user_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_signupconfirm_signupconfirm_component__["a" /* SignupConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_user_forgotpassword_forgotpassword_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_user_resetPassword_resetPassword_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_album_index_component__["a" /* AlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_album_add_album_component__["a" /* AddAlbumComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routerConfig__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20__services_album_service__["a" /* AlbumService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/album/add_album.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"albumform\" (ngSubmit)=\"onSubmit()\" novalidate>\n <flash-messages></flash-messages>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Album Name\" formControlName=\"name\">\n  </div>\n   <div *ngIf=\"albumform.controls['name'].invalid && (albumform.controls['name'].dirty || albumform.controls['name'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"albumform.controls['name'].errors.required\">\n            Name is required.\n          </div>\n        </div>\n  <div class=\"form-group\">\n    <label for=\"avatar\">Avatar</label>\n    <input type=\"file\" id=\"photo\" (change)=\"onFileChange($event)\" formControlName=\"photo\"  #fileInput>\n    <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n  </div>\n  <div *ngIf=\"albumform.controls['photo'].invalid && (albumform.controls['photo'].dirty || albumform.controls['photo'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"albumform.controls['photo'].errors.required\">\n            Please Uplaod Album Cover.\n          </div>\n        </div>\n  <button type=\"submit\" [disabled]=\"albumform.invalid || loading\" class=\"btn btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n</form>"

/***/ }),

/***/ "./src/app/components/album/add_album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAlbumComponent = /** @class */ (function () {
    function AddAlbumComponent(_flashMessagesService, route, router, albumService, fb) {
        //constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService, private fb: FormBuilder) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.albumService = albumService;
        this.fb = fb;
        this.loading = false;
        this.title = 'Add Albumm';
        this.AlbumForm();
    }
    AddAlbumComponent.prototype.AlbumForm = function () {
        this.albumform = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            photo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    AddAlbumComponent.prototype.prepareSave = function () {
        var input = new FormData();
        // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
        input.append('name', this.albumform.get('name').value);
        input.append('photo', this.albumform.get('photo').value);
        return input;
    };
    AddAlbumComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.albumform.get('photo').setValue(file);
        }
    };
    AddAlbumComponent.prototype.clearFile = function () {
        this.albumform.get('photo').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    AddAlbumComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.prepareSave();
        this.loading = true;
        this.albumService.addAlbum(formModel).subscribe(function (result) {
            if (result.success) {
                _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 4000 });
                setTimeout(function () {
                    _this.router.navigate(['album']);
                    _this.loading = false;
                }, 2000);
            }
        });
        /*setTimeout(() => {
          // FormData cannot be inspected (see "Key difference"), hence no need to log it here
          //alert('done!');
        
        }, 1000); */
    };
    AddAlbumComponent.prototype.ngOnInit = function () {
        //this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success'});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddAlbumComponent.prototype, "fileInput", void 0);
    AddAlbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-album',
            template: __webpack_require__("./src/app/components/album/add_album.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddAlbumComponent);
    return AddAlbumComponent;
}());



/***/ }),

/***/ "./src/app/components/album/index.component.css":
/***/ (function(module, exports) {

module.exports = ".album{\r\n\tfloat:right ;\r\n}"

/***/ }),

/***/ "./src/app/components/album/index.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/addalbum']\" class=\"btn btn-primary album\">Add Album</a>\n\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n      <td>Album Name</td>\n      <td>Photo</td>\n      <td colspan=\"2\">Actions</td>\n  </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let album of albums\">\n          <td>{{ album.name }}</td>\n          <td><img  src=\"{{server_url}}/uploads/album/{{album.user_id}}/{{album._id}}/{{ album.photo }}?resize=150\"></td>\n          <td><a [routerLink]=\"['/edit', album._id]\" class=\"btn btn-primary\">Edit</a></td>\n          <td><button (click)=\"deleteAlbum(album._id)\"  class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n  </tbody>\n</table> "

/***/ }),

/***/ "./src/app/components/album/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        this.getAlbums();
    };
    /*  Get user info */
    AlbumComponent.prototype.getAlbums = function () {
        var _this = this;
        this.service.getAlbums().subscribe(function (res) {
            //if(res.success==true){
            _this.albums = res;
            _this.server_url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].server_url;
            // }
            // console.log(res);
        }, function (err) {
            _this.router.navigate(['login']);
        });
    };
    AlbumComponent.prototype.deleteAlbum = function (id) {
        var _this = this;
        this.service.deleteAlbum(id).subscribe(function (res) {
            //console.log(res.success); 
            //if(res.success==true)
            _this.getAlbums();
            // window.location.reload();
        });
    };
    AlbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-album',
            template: __webpack_require__("./src/app/components/album/index.component.html"),
            styles: [__webpack_require__("./src/app/components/album/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__services_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\n    <footer class=\"footer\">\n    <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n       Copy Right-2018\n      </p>\n    </div>\n    </div>\n    </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"create\" *ngIf=\"!isLoggedIn()\" class=\"nav-link\" routerLinkActive=\"active\">\n          Signup \n        </a> \n\t  \t\n      </li>   \n\t <li class=\"nav-item\">\n\t <a routerLink=\"login\" *ngIf=\"!isLoggedIn()\" class=\"nav-link\" routerLinkActive=\"active\">Login</a> \n\t  </li> \n\t<li class=\" nav-item\">\n\t\t<a routerLink=\"forgot\" *ngIf=\"!isLoggedIn()\" class=\"nav-link\" routerLinkActive=\"active\">\n           Forgot Password \n        </a>\n\t\t  </li> \n\t\t <li class=\"nav-item\">\n\t\t<a routerLink=\"users\" *ngIf=\"isLoggedIn()\" class=\"nav-link\" routerLinkActive=\"active\">\n           User Profile \n        </a>\n\t\t  </li> \n\t\t <li class=\"nav-item\">\n\t\t<a routerLink=\"album\" *ngIf=\"isLoggedIn()\" class=\"nav-link\" routerLinkActive=\"active\">\n           Album\n        </a>\n\t\t </li> \n\t\t <li class=\"nav-item\">\n\t\t<a (click)=\"logout()\" *ngIf=\"isLoggedIn()\" class=\"nav-link\" href=\"javascript:void();\" routerLinkActive=\"active\" >\n           Logout\n        </a>\n\t\t  </li> \n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.setItem('login_token', '');
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('login_token');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/user/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{ title }}\n  </div>\n  <div class=\"panel-body\">\n     <flash-messages></flash-messages>\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">User Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name [(ngModel)] = \"user.name\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['name'].errors.required\">\n          Name is required.\n        </div>\n      </div>\n\t  \n\t   <div class=\"form-group\">\n        <label class=\"col-md-4\">Email</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\" #email [(ngModel)] = \"user.email\" disabled=\"disabled\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['email'].errors.required\">\n          Name is required.\n        </div>\n      </div>\n\n\t  \n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Phone</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"phone\" #phone [(ngModel)] = \"user.phone\" />\n      </div>\n      <div *ngIf=\"angForm.controls['phone'].invalid && (angForm.controls['phone'].dirty || angForm.controls['phone'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['phone'].errors.required\">\n          Phone is required.\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"updateUser(name.value,email.value, phone.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Update</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(_flashMessagesService, route, router, service, fb) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.title = 'Edit User';
        this.editForm();
    }
    EditComponent.prototype.editForm = function () {
        this.angForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    EditComponent.prototype.updateUser = function (name, email, phone) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.updateUser(name, phone, email, params['id']).subscribe(function (result) {
                if (result.success) {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 3000 });
                    setTimeout(function () {
                        _this.router.navigate(['users']);
                    }, 3000);
                }
            });
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.user = _this.service.editUser(params['id']).subscribe(function (res) {
                _this.user = res;
            });
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/user/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/user/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/forgotpassword/forgotpassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h1>{{ title }} </h1>\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n\t\t<flash-messages></flash-messages>   \n      <div class=\"form-group\">\n        <label class=\"col-md-4\">User email</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\" #email />\n      </div>\n      <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['email'].errors.required\">\n          Email is required.\n        </div>\n\t\t <div *ngIf=\"angForm.controls['email'].errors.pattern\">\n            Please enter Valid Email .\n          </div>\n      </div> \n        <div class=\"form-group\">\n          <button (click)=\"forgot_password(email.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Send</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(_flashMessagesService, route, router, userservice, fb) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.title = 'Forgot Password';
        this.result = "";
        this.ForgotForm();
    }
    ForgotPasswordComponent.prototype.ForgotForm = function () {
        this.angForm = this.fb.group({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
        });
    };
    ForgotPasswordComponent.prototype.forgot_password = function (email, password) {
        var _this = this;
        this.userservice.forgot_password(email).subscribe(function (result) {
            /* if success then flash message for 5 seconds */
            if (result.success) {
                _this.angForm.reset();
                _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n   <h1>{{ title }} </h1>\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n\t   <!--div *ngIf=\"error.success\" class=\"alert alert-success\">\n           {{error.message}}          \n\t\t   </div>\n\t\t   <div *ngIf=\"error.success ==false\" class=\"alert alert-danger\">\n            {{error.message}}       \n\t\t   </div-->\n\t\t<flash-messages></flash-messages>   \n      <div class=\"form-group\">\n        <label class=\"col-md-4\">User email</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\" #email />\n      </div>\n      <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['email'].errors.required\">\n          Email is required.\n        </div>\n\t\t<div *ngIf=\"angForm.controls['email'].errors.pattern\">\n            Please enter Valid Email .\n          </div>\n\t\t \n      </div>\n\t \n\t  \n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Password :</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" #password  />\n      </div>\n      <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['password'].errors.required\">\n          Password is required.\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"LoginUser(email.value, password.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Login</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_flashMessagesService, route, router, userservice, fb) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.LoginForm();
    }
    LoginComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
        });
    };
    LoginComponent.prototype.LoginUser = function (email, password) {
        var _this = this;
        this.userservice.login_user(email, password).subscribe(function (result) {
            //this.error = result;
            if (result.success) {
                // this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:2000});
                //setTimeout(() => {
                localStorage.setItem('login_token', result.token);
                _this.router.navigate(['/users']);
                //	},1000);
            }
            else {
                _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 3000 });
            }
            if (result.success) {
            }
            /* this.error = {
             success: result['success'],
             message: result['message']
             }	 */
        });
        /* this.route.params.subscribe(params => {
        this.service.updateUser(name, phone,email, params['id']);
        this.router.navigate(['index']);
      }); */
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/resetPassword/resetPassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/resetPassword/resetPassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{ title }}\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n\t\t<flash-messages></flash-messages>   \n        <div [formGroup]=\"passwordFormGroup\">  \n\t\t\t<div class=\"form-group\">\n\t\t\t  <label class=\"col-md-4\">Password</label>\n\t\t\t  <input type=\"password\" class=\"form-control\" formControlName=\"password\" #password />\n\t\t\t</div>\n\t\t\t <div *ngIf=\"passwordFormGroup.controls['password'].invalid && (passwordFormGroup.controls['password'].dirty || passwordFormGroup.controls['password'].touched)\" class=\"alert alert-danger\">\n\t\t\t\t  <div *ngIf=\"passwordFormGroup.controls['password'].errors.required\">\n\t\t\t\t\tPassword is required.\n\t\t\t\t  </div>\n\t\t\t\t  <div *ngIf=\"passwordFormGroup.controls['password'].errors.minlength\">\n\t\t\t\t\t\tName must be at least 5 characters long.\n\t\t\t\t  </div> \n\t\t\t\t   <div *ngIf=\"passwordFormGroup.controls['password'].errors.maxlength\">\n\t\t\t\t\t\tName can be max 10 characters long.\n\t\t\t\t   </div> \n\t\t\t </div>\n\t\t\t <div class=\"form-group\">\n\t\t\t\t<label>Repeat Password</label>\n\t\t\t\t<input class=\"form-control\" type=\"password\"  formControlName=\"repeatPassword\" #repeatPassword>\n\t\t\t </div>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">Repeat password is required</div>\n\t\t\t\t<div  class=\"alert alert-danger\" *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\">Password does not match</div>\n          </div>\n        <div class=\"form-group\">\n          <button (click)=\"resetPassword(password.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Login</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/resetPassword/resetPassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator_password_validator__ = __webpack_require__("./src/app/validator/password.validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_flashMessagesService, route, router, userservice, fb) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.title = 'Reset Password';
        this.result = "";
        this.resetPasswordForm();
    }
    ResetPasswordComponent.prototype.resetPasswordForm = function () {
        this.passwordFormGroup = this.fb.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].maxLength(10)])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_5__validator_password_validator__["a" /* PasswordValidator */].validate.bind(this)
        });
        this.angForm = this.fb.group({
            passwordFormGroup: this.passwordFormGroup
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function (password) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userservice.resetPassword(password, params['id']).subscribe(function (result) {
                if (result.success) {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 5000 });
                    setTimeout(function () {
                        //localStorage.setItem('login_token', result.token);
                        _this.router.navigate(['/login']);
                    }, 4000);
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        });
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userservice.password_code(params['id']).subscribe(function (result) {
                //this.user = res;
                if (result.success) {
                    // this._flashMessagesService.show(result.message, { cssClass: 'alert-success',time:10000});
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', time: 1000 });
                }
                //this.success = res.success;
                //this.expire = res.expire;
            });
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/components/user/resetPassword/resetPassword.component.html"),
            styles: [__webpack_require__("./src/app/components/user/resetPassword/resetPassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/user/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n          <h1>{{ title }} </h1>\n    </div>\n\t\n    <div class=\"panel-body\">\n      <flash-messages></flash-messages>\n      <form [formGroup]=\"angForm\" novalidate>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">User Name  </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name />\n        </div>\n        <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['name'].errors.required\">\n            Name is required.\n          </div>\n        </div>\n\t\t <div class=\"form-group\">\n          <label class=\"col-md-4\">Email</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" #email  (keyup)=\"emailAlready(email.value)\"/>\n        </div>\n\t\t<div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['email'].errors.required\">\n            Email is required.\n          </div>\n\t\t  <div *ngIf=\"angForm.controls['email'].errors.pattern\">\n            Please enter Valid Email .\n          </div>\n\t\t  \n\t\t  \n        </div>\n\t\t  <div *ngIf=\"response.success ==true\" class=\"alert alert-danger\">\n           {{response.message}}          \n\t\t   </div>\n\t\t  \n\t  \n\t\t<div [formGroup]=\"passwordFormGroup\">  \n\t\t\t<div class=\"form-group\">\n\t\t\t  <label class=\"col-md-4\">Password</label>\n\t\t\t  <input type=\"password\" class=\"form-control\" formControlName=\"password\" #password />\n\t\t\t</div>\n\t\t\t <div *ngIf=\"passwordFormGroup.controls['password'].invalid && (passwordFormGroup.controls['password'].dirty || passwordFormGroup.controls['password'].touched)\" class=\"alert alert-danger\">\n\t\t\t\t  <div *ngIf=\"passwordFormGroup.controls['password'].errors.required\">\n\t\t\t\t\tPassword is required.\n\t\t\t\t  </div>\n\t\t\t\t  <div *ngIf=\"passwordFormGroup.controls['password'].errors.minlength\">\n\t\t\t\t\t\tName must be at least 5 characters long.\n\t\t\t\t  </div> \n\t\t\t\t   <div *ngIf=\"passwordFormGroup.controls['password'].errors.maxlength\">\n\t\t\t\t\t\tName can be max 10 characters long.\n\t\t\t\t   </div> \n\t\t\t </div>\n\t\t\t <div class=\"form-group\">\n\t\t\t\t<label>Repeat Password</label>\n\t\t\t\t<input class=\"form-control\" type=\"password\"  formControlName=\"repeatPassword\" #repeatPassword>\n\t\t\t </div>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">Repeat password is required</div>\n\t\t\t\t<div  class=\"alert alert-danger\" *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\">Password does not match</div>\n          </div>\n\t\t  \n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Phone</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\" #phone/>\n        </div>\n        <div *ngIf=\"angForm.controls['phone'].invalid && (angForm.controls['phone'].dirty || angForm.controls['phone'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['phone'].errors.required\">\n            Phone is required.\n          </div>\n        </div>\n          <div class=\"form-group\">\n            <button (click)=\"addUser(name.value, email.value, phone.value,password.value)\" [disabled]=\"angForm.pristine || angForm.invalid || response.success ==true\" class=\"btn btn-primary\">Signup</button>\n          </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_password_validator__ = __webpack_require__("./src/app/validator/password.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(_flashMessagesService, userservice, fb) {
        this._flashMessagesService = _flashMessagesService;
        this.userservice = userservice;
        this.fb = fb;
        this.title = 'SignUp';
        this.result = '';
        this.response = "";
        this.createForm();
    }
    /* Signup Form validation */
    SignupComponent.prototype.createForm = function () {
        this.passwordFormGroup = this.fb.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(10)])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_3__validator_password_validator__["a" /* PasswordValidator */].validate.bind(this)
        });
        this.angForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            passwordFormGroup: this.passwordFormGroup
        });
    };
    /* *** add user ** */
    SignupComponent.prototype.emailAlready = function (email) {
        var _this = this;
        this.userservice.emailAlready(email).subscribe(function (result) {
            // console.log(result);
            _this.response = result;
            /*  this.response = {
              success: result['success'],
              message: result['message']
              } */
        });
    };
    /* *** Add User ** */
    SignupComponent.prototype.addUser = function (name, email, phone, password) {
        var _this = this;
        this.userservice.addUser(name, email, phone, password).subscribe(function (result) {
            if (result.success) {
                _this._flashMessagesService.show('Thanks for registeration. Please check your email to confirm your account.', { cssClass: 'alert-success', timeout: 10000 });
                _this.angForm.reset();
            }
            else {
                _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        //console.log('=='+this.message.message)
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/components/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/user/signupconfirm/signupconfirm.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/signupconfirm/signupconfirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"success\"  class=\"alert alert-success\">\n  <p>You account is activated . Please click <a href=\"/login\">here </a> to login .</p>\n</div>\n\n<div *ngIf =\"!success\"  class=\"alert alert-danger\">\n  <p>You account is not activated.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/signupconfirm/signupconfirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupConfirmComponent = /** @class */ (function () {
    function SignupConfirmComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    SignupConfirmComponent.prototype.ngOnInit = function () {
        this.verify_code();
    };
    /*  Get user info */
    SignupConfirmComponent.prototype.verify_code = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.verify_code(params['id']).subscribe(function (res) {
                //this.user = res;
                _this.success = res.success;
                _this.expire = res.expire;
            });
        });
    };
    SignupConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__("./src/app/components/user/signupconfirm/signupconfirm.component.html"),
            styles: [__webpack_require__("./src/app/components/user/signupconfirm/signupconfirm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SignupConfirmComponent);
    return SignupConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user/index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user/index.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n  <tr>\n      <td>User Name</td>\n      <td>Email</td>\n      <td>Phone</td>\n      <td colspan=\"2\">Actions</td>\n  </tr>\n  </thead>\n\n  <tbody>\n      <tr *ngFor=\"let user of users\">\n          <td>{{ user.name }}</td>\n          <td>{{ user.email }}</td>\n          <td>{{ user.phone }}</td>\n          <td><a [routerLink]=\"['/edit', user._id]\" class=\"btn btn-primary\">Edit</a></td>\n          <!--td><button (click)=\"deleteUser(user._id)\"  class=\"btn btn-danger\">Delete</button></td-->\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/user/user/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    /*  Get user info */
    IndexComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (res) {
            _this.users = res;
            console.log(res);
        }, function (err) {
            console.log(err);
            //   this.router.navigate(['login']);
        });
    };
    IndexComponent.prototype.deleteUser = function (id) {
        this.service.deleteUser(id).subscribe(function (res) {
            console.log('Deleted');
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/components/user/user/index.component.html"),
            styles: [__webpack_require__("./src/app/components/user/user/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/routerConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_signup_signup_component__ = __webpack_require__("./src/app/components/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_edit_edit_component__ = __webpack_require__("./src/app/components/user/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_user_index_component__ = __webpack_require__("./src/app/components/user/user/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_album_index_component__ = __webpack_require__("./src/app/components/album/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_album_add_album_component__ = __webpack_require__("./src/app/components/album/add_album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_signupconfirm_signupconfirm_component__ = __webpack_require__("./src/app/components/user/signupconfirm/signupconfirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_resetPassword_resetPassword_component__ = __webpack_require__("./src/app/components/user/resetPassword/resetPassword.component.ts");









var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_0__components_user_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_7__components_user_forgotpassword_forgotpassword_component__["a" /* ForgotPasswordComponent */] },
    { path: 'resetpassword/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_user_resetPassword_resetPassword_component__["a" /* ResetPasswordComponent */] },
    { path: 'verify/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_user_signupconfirm_signupconfirm_component__["a" /* SignupConfirmComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_user_edit_edit_component__["a" /* EditComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__components_user_user_index_component__["a" /* IndexComponent */] },
    { path: 'album', component: __WEBPACK_IMPORTED_MODULE_4__components_album_index_component__["a" /* AlbumComponent */] },
    { path: 'addalbum', component: __WEBPACK_IMPORTED_MODULE_5__components_album_add_album_component__["a" /* AddAlbumComponent */] }
];


/***/ }),

/***/ "./src/app/services/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs/Rx';


var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
    }
    AlbumService.prototype.addAlbum = function (formdta) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'album/add';
        var token = localStorage.getItem('login_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, formdta, { headers: headers });
    };
    AlbumService.prototype.getAlbums = function () {
        var token = localStorage.getItem('login_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('token', token);
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'albums';
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res;
        });
    };
    AlbumService.prototype.deleteAlbum = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'album/delete/' + id;
        var token = localStorage.getItem('login_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res;
        });
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs/Rx';


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    /*  Add User  */
    UserService.prototype.addUser = function (name, email, phone, password) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/add'; //API
        var obj = {
            name: name,
            phone: phone,
            email: email,
            password: password
        };
        return this
            .http
            .post(uri, obj);
    };
    /*  Call Email Already exist API   */
    UserService.prototype.emailAlready = function (email) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/user_email'; //API 
        var obj = {
            email: email
        };
        return this
            .http
            .post(uri, obj);
    };
    /*  Call Login API   */
    UserService.prototype.login_user = function (email, password) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/userlogin';
        var obj = {
            email: email,
            password: password,
        };
        return this
            .http
            .post(uri, obj);
    };
    /*  Get Current logged in user data*/
    UserService.prototype.getUsers = function () {
        var token = localStorage.getItem('login_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('token', token);
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user';
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res;
        });
    };
    /*  Get user data and return to Edit conponent*/
    UserService.prototype.editUser = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/edit/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    /* Call user profile update API */
    UserService.prototype.updateUser = function (name, phone, email, id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/update/' + id;
        var obj = {
            name: name,
            phone: phone,
            email: email
        };
        return this
            .http
            .post(uri, obj);
    };
    /* Call verify user account API */
    UserService.prototype.verify_code = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/verify/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.forgot_password = function (email) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/forgotpassword';
        var obj = {
            email: email
        };
        return this
            .http
            .post(uri, obj);
    };
    /* Request node to check password code */
    UserService.prototype.password_code = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/check_passcode/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    /* Reset passwrd */
    UserService.prototype.resetPassword = function (password, id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/resetpassword/' + id;
        ;
        var obj = {
            password: password
        };
        return this
            .http
            .post(uri, obj);
    };
    UserService.prototype.deleteUser = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/delete/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/validator/password.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.validate = function (angForm) {
        var password = angForm.controls.password.value;
        var repeatPassword = angForm.controls.repeatPassword.value;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    return PasswordValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'https://nodewebethics.herokuapp.com//api/',
    server_url: 'https://nodewebethics.herokuapp.com'
    //apiUrl: 'http://localhost:4000/api/',
    //server_url: 'http://localhost:4000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map