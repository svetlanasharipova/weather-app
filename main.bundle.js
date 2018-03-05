webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"element\">\r\n  <h1>Hot Weather Widget</h1>\r\n  <div class=\"element-left\">\r\n    <app-main (hotelChanged)=\"selectedHotel=$event\"></app-main>\r\n  </div>\r\n\r\n  <div class=\"element-right\">\r\n    <app-weather [weather]=\"selectedHotel?.weather\" ></app-weather>\r\n    <app-social [socialinfo]=\"selectedHotel?.social_info\"></app-social>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pipes_hoteltype_pipe__ = __webpack_require__("../../../../../src/app/common/pipes/hoteltype.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_pipes_phonenumber_pipe__ = __webpack_require__("../../../../../src/app/common/pipes/phonenumber.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_weather_weather_component__ = __webpack_require__("../../../../../src/app/components/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_social_social_component__ = __webpack_require__("../../../../../src/app/components/social/social.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_4__common_pipes_hoteltype_pipe__["a" /* HoteltypePipe */],
                __WEBPACK_IMPORTED_MODULE_5__common_pipes_phonenumber_pipe__["a" /* PhonenumberPipe */],
                __WEBPACK_IMPORTED_MODULE_6__components_weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_social_social_component__["a" /* SocialComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/pipes/hoteltype.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoteltypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HoteltypePipe = /** @class */ (function () {
    function HoteltypePipe() {
    }
    HoteltypePipe.prototype.transform = function (hotels, hoteltype) {
        if (!hoteltype) {
            hoteltype = 'hotel';
        }
        return hotels.filter(function (h) {
            return h.type.toLowerCase() === hoteltype.toLowerCase();
        });
    };
    HoteltypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'hoteltype'
        })
    ], HoteltypePipe);
    return HoteltypePipe;
}());



/***/ }),

/***/ "../../../../../src/app/common/pipes/phonenumber.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonenumberPipe = /** @class */ (function () {
    function PhonenumberPipe() {
    }
    PhonenumberPipe.prototype.transform = function (phone) {
        if (phone.toString().length !== 10) {
            return "Tel: " + phone;
        }
        var num = phone.toString().match(/(\d{3})(\d{3})(\d{4})/);
        var numformatted = '(' + num[1] + ') ' + num[2] + ' ' + num[3];
        return "Tel: " + numformatted;
    };
    PhonenumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'phonenumber'
        })
    ], PhonenumberPipe);
    return PhonenumberPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"element-bg-img\">\r\n    <img src=\"{{selectedHotel?.img}}\" alt=\"\" class=\"img-responsive\"> \r\n  </div>\r\n  <div class=\"element-left-bottom\" *ngIf=\"hotels$ | async as hotels\"> \r\n    <div class=\"ele-strip\">\r\n      <ul>\r\n        <!-- у последнего фильтра должен быть class=\"anc-bor\" (без правой границы) -->\r\n        <li *ngFor=\"let type of hotelTypes; let lasttype = last;\" class=\"{{ lasttype ? 'anc-bor' : '' }}\">\r\n          <a (click)=\"selectedType=type\">{{type}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"village\" >\r\n      <h3>Righteous indignation & like</h3>\r\n      <span class=\"line\"> </span>\r\n      <div class=\"activity_box\">\r\n        <div class=\"scrollbar\" id=\"style-2\">\r\n          <div class=\"activity-row\" *ngFor=\"let hotel of hotels | hoteltype:selectedType\">\r\n            <div class=\"activity-desc\" (click)=\"hotelClicked(hotel)\">\r\n              <h5>Resort Address</h5>\r\n              <p>{{hotel.address}}</p>\r\n              <h6>{{hotel.phone | phonenumber}}</h6>\r\n            </div>\r\n            <div class=\"activity-img\">\r\n              <ul>\r\n                <li *ngFor=\"let img of hotel.activityImg\"> <img src=\"{{img}}\" alt=\"\" />\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"clear\"> </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hotels__ = __webpack_require__("../../../../../src/app/hotels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.hotelChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.selectedType = 'hotel';
        this.hotelTypes = ['Hotel', 'Fishing', 'Tours', 'Weather'];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotels$ = __WEBPACK_IMPORTED_MODULE_0__hotels__["a" /* HOTELS$ */];
        __WEBPACK_IMPORTED_MODULE_0__hotels__["a" /* HOTELS$ */].subscribe(function (hotels) {
            _this.selectedHotel = hotels.find(function (x) { return x.type === _this.selectedType; });
            _this.hotelChanged.emit(_this.selectedHotel);
        });
    };
    MainComponent.prototype.hotelClicked = function (h) {
        this.selectedHotel = h;
        this.hotelChanged.emit(this.selectedHotel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */])
    ], MainComponent.prototype, "hotelChanged", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/social/social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\" *ngIf=\"socialinfo\">\r\n    <div class=\"teddy-text\">\r\n      <h4>{{socialinfo.title}}</h4>\r\n      <span class=\"w-line\"> </span>\r\n      <img src={{socialinfo.img}} alt=\"\"  class=\"img-responsive\">\r\n      </div>\r\n      <div class=\"teddy-follow\">\r\n        <ul>\r\n          <li class=\"folw-h\"><h3>{{socialinfo.followers}}</h3>\r\n            <p>Followers</p>\r\n          </li>\r\n          <li><h3>{{socialinfo.following}}</h3>\r\n            <p>Following</p>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/social/social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SocialComponent.prototype, "socialinfo", void 0);
    SocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-social',
            template: __webpack_require__("../../../../../src/app/components/social/social.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\" *ngIf=\"weather\">\r\n    <h5>{{weather.title}}</h5>\r\n    <span class=\"w-line\"> </span>\r\n    <span class=\"{{weather.icon}}\"> </span>\r\n    <h2>{{weather.temperature}}<sup class=\"degree\">°</sup></h2>\r\n    <h6>Water {{weather.water}}<sup class=\"degree\">°</sup></h6>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], WeatherComponent.prototype, "weather", void 0);
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/components/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hotels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOTELS$; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");



var hotels = [
    {
        'name': 'Residence Henri IV',
        'img': './assets/images/image1.jpg',
        'address': 'Misericordia, 67',
        'phone': 4031234789,
        'activityImg': [
            './assets/images/r1.jpg',
            './assets/images/res.jpg'
        ],
        'weather': {
            'title': 'Cloudy',
            'icon': 'cloud',
            'water': 20,
            'temperature': 24,
        },
        'social_info': {
            'title': 'Residence Henri IV',
            'img': './assets/images/b1.jpg',
            'followers': 2390,
            'following': 308,
        },
        'type': 'hotel'
    },
    {
        'name': 'Sabor da Saudade Resort',
        'img': './assets/images/image2.png',
        'address': 'Gloriantstraat, 10HS',
        'phone': 8123456789,
        'activityImg': [
            './assets/images/square/image5s.jpg',
            './assets/images/square/image14s.jpg'
        ],
        'weather': {
            'title': 'Always sunny',
            'icon': 'sun',
            'water': 25,
            'temperature': 30,
        },
        'social_info': {
            'title': 'Sabor da Saudade Resort',
            'img': './assets/images/square/image5s.jpg',
            'followers': 4500,
            'following': 123,
        },
        'type': 'weather'
    },
    {
        'name': 'Novotel',
        'img': './assets/images/image33.jpg',
        'address': '2 Rue Scribe, 9th',
        'phone': 7125656780,
        'activityImg': [
            './assets/images/square/image6s.jpg',
            './assets/images/square/image9s.jpg'
        ],
        'weather': {
            'title': 'Cloudy',
            'icon': 'cloud',
            'water': 20,
            'temperature': 25,
        },
        'social_info': {
            'title': 'Novotel',
            'img': './assets/images/square/image6s.jpg',
            'followers': 11360,
            'following': 601,
        },
        'type': 'hotel'
    },
    {
        'name': 'Blue Lake',
        'img': './assets/images/fishing1.jpg',
        'address': 'Perdido Blvd',
        'phone': 4563456789,
        'activityImg': [
            './assets/images/square/fishing1s.jpg',
            './assets/images/square/fishing2s.jpg'
        ],
        'weather': {
            'title': 'Rainy',
            'icon': 'rain',
            'water': 18,
            'temperature': 23,
        },
        'social_info': {
            'title': 'Blue Lake',
            'img': './assets/images/square/fishing2s.jpg',
            'followers': 3089,
            'following': 25,
        },
        'type': 'fishing'
    },
    {
        'name': 'Orange Beach',
        'img': './assets/images/fishing4.jpg',
        'address': 'Costa dorado',
        'phone': 5553433389,
        'activityImg': [
            './assets/images/square/fishing4s.jpg',
            './assets/images/square/fishing3s.jpg'
        ],
        'weather': {
            'title': 'Rainy',
            'icon': 'rain',
            'water': 21,
            'temperature': 27,
        },
        'social_info': {
            'title': 'Orange Beach',
            'img': './assets/images/square/fishing4s.jpg',
            'followers': 7082,
            'following': 251,
        },
        'type': 'fishing'
    },
    {
        'name': 'Hype Park Residence',
        'img': './assets/images/image30.jpg',
        'address': 'Abbey Road 23',
        'phone': 4323408089,
        'activityImg': [
            './assets/images/square/image30s.jpg',
            './assets/images/square/image16s.jpg'
        ],
        'weather': {
            'title': 'Cloudy',
            'icon': 'cloud',
            'water': 20,
            'temperature': 25,
        },
        'social_info': {
            'title': 'Hype Park Residence',
            'img': './assets/images/square/image30s.jpg',
            'followers': 17082,
            'following': 1251,
        },
        'type': 'tours'
    },
    {
        'name': 'Marriott Guangzhou',
        'img': './assets/images/image48.jpg',
        'address': '122 Liuhua Rd',
        'phone': 101345639,
        'activityImg': [
            './assets/images/square/image4s.jpg',
            './assets/images/square/image7s.jpg'
        ],
        'weather': {
            'title': 'Sunny',
            'icon': 'sun',
            'water': 20,
            'temperature': 25,
        },
        'social_info': {
            'title': 'Marriott Guangzhou',
            'img': './assets/images/square/image7s.jpg',
            'followers': 24508,
            'following': 412,
        },
        'type': 'tours'
    }
];
var HOTELS$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(hotels).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["a" /* delay */])(1000));


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map