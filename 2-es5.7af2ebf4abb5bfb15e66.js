function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/PmK":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return l}));var r=n("EM62"),a=n("nIj0"),i=n("2kYt"),c=["captchaWrapperElem"],o=function(){var e=function(){function e(t,n,a,i){_classCallCheck(this,e),this.renderer=t,this.zone=n,this.injector=a,this.scriptService=i,this.captchaElemPrefix="ngx_captcha_id_",this.setupCaptcha=!0,this.useGlobalDomain=!1,this.type="image",this.tabIndex=0,this.success=new r.q,this.load=new r.q,this.reset=new r.q,this.ready=new r.q,this.error=new r.q,this.expire=new r.q,this.setupAfterLoad=!1,this.resetCaptchaAfterSuccess=!1,this.isLoaded=!1}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this.control=this.injector.get(a.l).control}},{key:"ngAfterViewChecked",value:function(){this.setupCaptcha&&(this.setupCaptcha=!1,this.setupComponent())}},{key:"ngOnChanges",value:function(e){e&&e.hl&&(e.hl.firstChange||e.hl.currentValue===e.hl.previousValue||this.scriptService.cleanup()),e&&e.useGlobalDomain&&(e.useGlobalDomain.firstChange||e.useGlobalDomain.currentValue===e.useGlobalDomain.previousValue||this.scriptService.cleanup()),this.setupCaptcha=!0}},{key:"getResponse",value:function(){return this.reCaptchaApi.getResponse(this.captchaId)}},{key:"getCaptchaId",value:function(){return this.captchaId}},{key:"resetCaptcha",value:function(){var e=this;this.zone.run((function(){e.reCaptchaApi.reset(),e.onChange(void 0),e.onTouched(void 0),e.reset.next()}))}},{key:"getCurrentResponse",value:function(){return this.currentResponse}},{key:"reloadCaptcha",value:function(){this.setupComponent()}},{key:"ensureCaptchaElem",value:function(e){var t=document.getElementById(e);if(!t)throw Error("Captcha element with id '".concat(e,"' was not found"));this.captchaElem=t}},{key:"renderReCaptcha",value:function(){var e=this;this.zone.runOutsideAngular((function(){e.captchaId=e.reCaptchaApi.render(e.captchaElemId,e.getCaptchaProperties()),e.ready.next()}))}},{key:"handleCallback",value:function(e){var t=this;this.currentResponse=e,this.success.next(e),this.zone.run((function(){t.onChange(e),t.onTouched(e)})),this.resetCaptchaAfterSuccess&&this.resetCaptcha()}},{key:"getPseudoUniqueNumber",value:function(){return(new Date).getUTCMilliseconds()+Math.floor(9999*Math.random())}},{key:"setupComponent",value:function(){var e=this;this.captchaSpecificSetup(),this.createAndSetCaptchaElem(),this.scriptService.registerCaptchaScript(this.useGlobalDomain,"explicit",(function(t){e.onloadCallback(t)}),this.hl)}},{key:"onloadCallback",value:function(e){if(this.reCaptchaApi=e,!this.reCaptchaApi)throw Error("ReCaptcha Api was not initialized correctly");this.isLoaded=!0,this.load.next(),this.renderReCaptcha(),this.setupAfterLoad&&(this.setupAfterLoad=!1,this.setupComponent())}},{key:"generateNewElemId",value:function(){return this.captchaElemPrefix+this.getPseudoUniqueNumber()}},{key:"createAndSetCaptchaElem",value:function(){if(this.captchaElemId=this.generateNewElemId(),!this.captchaElemId)throw Error("Captcha elem Id is not set");if(!this.captchaWrapperElem)throw Error("Captcha DOM element is not initialized");this.captchaWrapperElem.nativeElement.innerHTML="";var e=this.renderer.createElement("div");e.id=this.captchaElemId,this.renderer.appendChild(this.captchaWrapperElem.nativeElement,e),this.ensureCaptchaElem(this.captchaElemId)}},{key:"writeValue",value:function(e){}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"handleErrorCallback",value:function(){var e=this;this.zone.run((function(){e.onChange(void 0),e.onTouched(void 0)})),this.error.next()}},{key:"handleExpireCallback",value:function(){this.expire.next(),this.resetCaptcha()}}]),e}();return e.\u0275fac=function(e){r.ic()},e.\u0275dir=r.Qb({type:e,inputs:{useGlobalDomain:"useGlobalDomain",type:"type",tabIndex:"tabIndex",siteKey:"siteKey",hl:"hl"},outputs:{success:"success",load:"load",reset:"reset",ready:"ready",error:"error",expire:"expire"},features:[r.Fb]}),e}(),s=function(){var e={InvisibleReCaptcha:0,ReCaptcha2:1};return e[e.InvisibleReCaptcha]="InvisibleReCaptcha",e[e.ReCaptcha2]="ReCaptcha2",e}(),u=function(){var e=function(){function e(t){_classCallCheck(this,e),this.zone=t,this.windowGrecaptcha="grecaptcha",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com"}return _createClass(e,[{key:"registerCaptchaScript",value:function(e,t,n,r){var a=this;if(this.grecaptchaScriptLoaded())this.zone.run((function(){n(window[a.windowGrecaptcha])}));else{window[this.windowOnLoadCallbackProperty]=function(){return a.zone.run(n.bind(a,window[a.windowGrecaptcha]))};var i=document.createElement("script");i.innerHTML="",i.src=this.getCaptchaScriptUrl(e,t,r),i.async=!0,i.defer=!0,document.getElementsByTagName("head")[0].appendChild(i)}}},{key:"cleanup",value:function(){window[this.windowOnLoadCallbackProperty]=void 0,window[this.windowGrecaptcha]=void 0}},{key:"grecaptchaScriptLoaded",value:function(){return!(!window[this.windowOnLoadCallbackProperty]||!window[this.windowGrecaptcha])}},{key:"getLanguageParam",value:function(e){return e?"&hl=".concat(e):""}},{key:"getCaptchaScriptUrl",value:function(e,t,n){return"https://www.".concat(e?this.globalDomain:this.defaultDomain,"/recaptcha/api.js?onload=").concat(this.windowOnLoadCallbackProperty,"&render=").concat(t).concat(this.getLanguageParam(n))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.fc(r.E))},e.\u0275prov=r.Rb({token:e,factory:e.\u0275fac}),e}(),l=function(){var e=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,a,i){var c;return _classCallCheck(this,n),(c=t.call(this,e,r,a,i)).renderer=e,c.zone=r,c.injector=a,c.scriptService=i,c.windowOnErrorCallbackProperty="ngx_captcha_error_callback",c.windowOnExpireCallbackProperty="ngx_captcha_expire_callback",c.theme="light",c.size="normal",c.recaptchaType=s.ReCaptcha2,c}return _createClass(n,[{key:"ngOnChanges",value:function(e){_get(_getPrototypeOf(n.prototype),"ngOnChanges",this).call(this,e)}},{key:"ngOnDestroy",value:function(){window[this.windowOnErrorCallbackProperty]={},window[this.windowOnExpireCallbackProperty]={}}},{key:"captchaSpecificSetup",value:function(){this.registerCallbacks()}},{key:"getCaptchaProperties",value:function(){var e=this;return{sitekey:this.siteKey,callback:function(t){return e.zone.run((function(){return e.handleCallback(t)}))},"expired-callback":function(){return e.zone.run((function(){return e.handleExpireCallback()}))},"error-callback":function(){return e.zone.run((function(){return e.handleErrorCallback()}))},theme:this.theme,type:this.type,size:this.size,tabindex:this.tabIndex}}},{key:"registerCallbacks",value:function(){window[this.windowOnErrorCallbackProperty]=_get(_getPrototypeOf(n.prototype),"handleErrorCallback",this).bind(this),window[this.windowOnExpireCallbackProperty]=_get(_getPrototypeOf(n.prototype),"handleExpireCallback",this).bind(this)}}]),n}(o);return e.\u0275fac=function(t){return new(t||e)(r.Vb(r.K),r.Vb(r.E),r.Vb(r.u),r.Vb(u))},e.\u0275cmp=r.Pb({type:e,selectors:[["ngx-recaptcha2"]],viewQuery:function(e,t){var n;1&e&&r.Tc(c,!0),2&e&&r.Ac(n=r.kc())&&(t.captchaWrapperElem=n.first)},inputs:{theme:"theme",size:"size",hl:"hl"},features:[r.Gb([{provide:a.k,useExisting:Object(r.Z)((function(){return e})),multi:!0}]),r.Eb,r.Fb],decls:2,vars:0,consts:[["captchaWrapperElem",""]],template:function(e,t){1&e&&r.Wb(0,"div",null,0)},encapsulation:2}),e}(),h=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.scriptService=t,this.zone=n}return _createClass(e,[{key:"execute",value:function(e,t,n,r){this.executeAsPromise(e,t,r).then(n)}},{key:"executeAsPromise",value:function(e,t,n){var r=this;return new Promise((function(a,i){r.scriptService.registerCaptchaScript(!(!n||!n.useGlobalDomain),e,(function(n){r.zone.runOutsideAngular((function(){try{n.execute(e,{action:t}).then((function(e){return r.zone.run((function(){return a(e)}))}))}catch(c){i(c)}}))}))}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.fc(u),r.fc(r.E))},e.\u0275prov=r.Rb({token:e,factory:e.\u0275fac}),e}(),p=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r.Tb({type:e}),e.\u0275inj=r.Sb({factory:function(t){return new(t||e)},providers:[u,h],imports:[[i.c]]}),e}()}}]);