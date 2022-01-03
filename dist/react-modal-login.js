/*! For license information please see react-modal-login.js.LICENSE.txt */
!function(){var e={184:function(e,n){var r;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var t=a.apply(null,r);t&&e.push(t)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)o.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},251:function(e,n,r){"use strict";var o=r(689),a=60103;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),s("react.fragment")}var t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var o,s={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:a,type:e,key:c,ref:u,props:s,_owner:t.current}}n.jsx=c,n.jsxs=c},893:function(e,n,r){"use strict";e.exports=r(251)},689:function(e){"use strict";e.exports=require("react")}},n={};function r(o){var a=n[o];if(void 0!==a)return a.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";function e(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(r){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(n){e(r,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,a,s=[],t=!0,i=!1;try{for(r=r.call(e);!(t=(o=r.next()).done)&&(s.push(o.value),!n||s.length!==n);t=!0);}catch(e){i=!0,a=e}finally{try{t||null==r.return||r.return()}finally{if(i)throw a}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(o),r.d(o,{default:function(){return S}});var i=r(689),l=r(893),c=function(){return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 266.893 266.895",children:[(0,l.jsx)("path",{d:"M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z",fill:"#fff"}),(0,l.jsx)("path",{d:"M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z",fill:"#3b5998"})]})},u=function(e){return(0,l.jsxs)("button",{className:e.btnClass,disabled:e.inactive,onClick:function(){e.onStartLoading(),console.log(window),window.FB.login((function(n){"connected"==n.status&&e.onSuccess?e.onSuccess("facebook",n):"connected"!=n.status&&e.onFail&&e.onFail("facebook",n)}),{scope:e.scope})},children:[(0,l.jsx)(c,{}),(0,l.jsx)("span",{children:e.label})]})},d=function(){return(0,l.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",children:(0,l.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,l.jsx)("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),(0,l.jsx)("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),(0,l.jsx)("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),(0,l.jsx)("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})]})})},g=function(e){return(0,l.jsxs)("button",{className:e.btnClass,disabled:e.inactive,onClick:function(){undefined.props.onStartLoading(),window.gapi.auth2.getAuthInstance().isSignedIn.get()?e.onSuccess&&e.onSuccess("google",window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse()):window.gapi.auth2.getAuthInstance().signIn().then((function(){e.onSuccess&&e.onSuccess("google",window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse())}),(function(n){e.onFail("google",n)}))},children:[(0,l.jsx)(d,{}),(0,l.jsx)("span",{children:e.label})]})},b=r(184),f=r.n(b),p=function(e){var n=function(n){return function(){e.inactive||n()}};return(0,l.jsxs)("div",{className:e.containerClass,children:[(0,l.jsx)("div",{className:f()({disabled:e.inactive,active:"login"===e.currentTab}),onClick:n(e.loginClick),children:e.loginLabel}),(0,l.jsx)("div",{className:f()({disabled:e.inactive,active:"register"===e.currentTab}),onClick:n(e.registerClick),children:e.registerLabel})]})},v=function(){return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 357 357",children:(0,l.jsx)("g",{children:(0,l.jsx)("g",{id:"close",children:(0,l.jsx)("polygon",{points:"357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5",fill:"#ffffff"})})})})},m=function(e){return(0,l.jsx)("div",{className:e.containerClass,onClick:e.click,children:(0,l.jsx)(v,{})})},h=function(e){return(0,l.jsx)("span",{className:e.containerClass,id:e.type+"Error",children:e.label})},C=function(e){return(0,l.jsx)("p",{className:e.containerClass,children:e.label})},w=function(e){return(0,l.jsx)("span",{className:e.containerClass,children:(0,l.jsx)("svg",{className:"RML-login-modal-spinner",width:e.size+"px",height:e.size+"px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})})},x=function(e){return(0,l.jsx)("button",{className:e.buttonClass,disabled:e.inactive,onClick:e.click,id:e.type+"Submit",children:e.label})};x.defaultProps={click:null};var j=x,L=function(e){var n={},r=function(e){e&&(n[e.id]=e)};(0,i.useEffect)((function(){if(e.visible)for(var r in n)n[r].value=""}),[e.visible]);var o=e.form,a=o&&o.loginBtn?(0,l.jsx)(j,{buttonClass:o.loginBtn.buttonClass?o.loginBtn.buttonClass:"RML-btn",type:"login",inactive:e.inactive,click:function(e){o.onLogin&&o.onLogin()},label:o.loginBtn.label?o.loginBtn.label:"Sign in"}):null,s=o&&o.registerBtn?(0,l.jsx)(j,{buttonClass:o.registerBtn.buttonClass?o.registerBtn.buttonClass:"RML-btn",type:"register",inactive:e.inactive,click:o.onRegister?o.onRegister:null,label:o.registerBtn.label?o.registerBtn.label:"Sign up"}):null,t=o&&o.recoverPasswordBtn?(0,l.jsx)(j,{buttonClass:o.recoverPasswordBtn.buttonClass?o.recoverPasswordBtn.buttonClass:"RML-btn",type:"recoverPassword",inactive:e.inactive,click:o.onRecoverPassword?o.onRecoverPassword:null,label:o.recoverPasswordBtn.label?o.recoverPasswordBtn.label:"Recover password"}):null,c=o&&o.recoverPasswordAnchor?(0,l.jsx)("span",{className:o.recoverPasswordAnchor.anchorClass?o.recoverPasswordAnchor.anchorClass:"RML-recover-password-anchor",onClick:e.recoverPasswordAnchorClick,children:o.recoverPasswordAnchor.label}):null,u=o.loginInputs?o.loginInputs.map((function(e,n){return(0,l.jsxs)("div",{className:e.containerClass?e.containerClass:"RML-form-group",children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),(0,l.jsx)("input",{type:e.type,className:e.inputClass?e.inputClass:"RML-form-control",id:e.id,name:e.name,ref:r,defaultValue:"",placeholder:e.placeholder},"formLoginInput-"+n)]},n)})):null,d=o.registerInputs?o.registerInputs.map((function(e,n){return(0,l.jsxs)("div",{className:e.containerClass?e.containerClass:"RML-form-group",children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),(0,l.jsx)("input",{type:e.type,className:e.inputClass?e.inputClass:"RML-form-control",id:e.id,name:e.name,ref:r,defaultValue:"",placeholder:e.placeholder},"formRegisterInput-"+n)]},n)})):null,g=o.recoverPasswordInputs?o.recoverPasswordInputs.map((function(e,n){return(0,l.jsxs)("div",{className:e.containerClass?e.containerClass:"RML-form-group",children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),(0,l.jsx)("input",{type:e.type,className:e.inputClass?e.inputClass:"RML-form-control",id:e.id,name:e.name,ref:r,defaultValue:"",placeholder:e.placeholder},"formRecoverPasswordInput-"+n)]},n)})):null,b=e.recoverPasswordSuccessLabel?(0,l.jsx)("span",{className:e.recoverPasswordSuccessLabel.labelClass?e.recoverPasswordSuccessLabel.labelClass:"RML-recover-password-success-label",id:"recoverPasswordSuccessLabel",children:e.recoverPasswordSuccessLabel.label}):null,f=null;switch(e.currentTab){case"register":f=(0,l.jsxs)("div",{className:o.registerContainerClass?o.registerContainerClass:"RML-login-modal-form",children:[d,o.bottomRegisterContainer,e.errorWrap,s,e.loader,(0,l.jsx)("div",{className:"clearfix"})]});break;case"login":f=(0,l.jsxs)("div",{className:o.loginContainerClass?o.loginContainerClass:"RML-login-modal-form",children:[u,o.bottomLoginContainer,e.errorWrap,c,a,e.loader,(0,l.jsx)("div",{className:"clearfix"})]});break;case"recoverPassword":f=(0,l.jsxs)("div",{className:o.recoverPasswordContainerClass?o.recoverPasswordContainerClass:"RML-login-modal-form",children:[g,o.bottomRecoverPasswordContainer,b,e.errorWrap,t,e.loader,(0,l.jsx)("div",{className:"clearfix"})]})}return f},y=function(e,n){return function(r){console.log("keyHandler");var o=!1,a=!1;"key"in(r=r||window.event)?(o="Escape"===r.key||"Esc"===r.key,a="Enter"===r.key||"enter"===r.key):(o=27===r.keyCode,a=13===r.keyCode),o&&e(),a&&n()}},k=function(e){var n=t((0,i.useState)(!1),2),r=n[0],o=n[1],s=t((0,i.useState)({currentTab:e.initialTab?e.initialTab:"login",newTab:e.newTab}),2),c=s[0],d=s[1];(0,i.useEffect)((function(){r||o(!0)}),[r]),(0,i.useEffect)((function(){if(r&&e.visible)return document.addEventListener("keydown",y(v,b)),function(){return document.removeEventListener("keydown",y)}}),[e.visible,r]),(0,i.useEffect)((function(){e.visible&&(e.providers&&e.providers.facebook&&void 0===window.FB&&e.visible&&!e.loading&&(e.startLoading(),x()),e.providers&&e.providers.google&&void 0===window.gapi&&e.visible&&!e.loading&&(e.startLoading(),j()),d(a(a({},c),{},{currentTab:e.initialTab||"login"})))}),[e.visible,e.initialTab]),(0,i.useEffect)((function(){e.visible&&(e.tabs.afterChange&&e.tabs.afterChange(),"login"===c.currentTab?e.tabs&&e.tabs.onLoginClickAfterTransition&&e.tabs.onLoginClickAfterTransition():"register"===c.currentTab&&e.tabs&&e.tabs.onRegisterClickAfterTransition&&e.tabs.onRegisterClickAfterTransition())}),[c.currentTab]);var b=(0,i.useCallback)((function(){console.log("onEnter"),"register"===c.currentTab&&e.form&&e.form.onRegister?e.form.onRegister():"login"===c.currentTab&&e.form&&e.form.onLogin&&e.form.onLogin()}),[]),v=(0,i.useCallback)((function(){console.log("onEscape"),k()}),[]),x=function(){var n,r,o,s,t;window.fbAsyncInit=function(){window.FB.init(a({},e.providers.facebook.config)),window.FB.AppEvents.logPageView()},r="script",o="facebook-jssdk",t=(n=document).getElementsByTagName(r)[0],n.getElementById(o)||((s=n.createElement(r)).id=o,s.src="https://connect.facebook.net/en_US/sdk.js",t.parentNode.insertBefore(s,t))},j=function(){!function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.onload=function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init(a({},e.providers.google.config)),e.finishLoading()}))},n.src="https://apis.google.com/js/platform.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}()},k=function(){e.onBeforeCloseModal&&e.onBeforeCloseModal(),e.onCloseModal(),c.currentTab=e.initialTab?e.initialTab:"login",e.onAfterCloseModal&&e.onAfterCloseModal()},S=e.providers,P=S.facebook,R=S.google,T=e.tabs?(0,l.jsx)(p,{containerClass:e.tabs.containerClass?e.tabs.containerClass:"RML-login-modal-mode",inactive:!!e.loading&&e.loading,loginClick:function(){e.tabs&&e.tabs.onLoginClickBeforeTransition&&e.tabs.onLoginClickBeforeTransition(),d(a(a({},c),{},{currentTab:"login"}))},registerClick:function(){e.tabs&&e.tabs.onRegisterClickBeforeTransition&&e.tabs.onRegisterClickBeforeTransition(),d(a(a({},c),{},{currentTab:"register"}))},currentTab:c.currentTab,loginLabel:e.tabs.loginLabel?e.tabs.loginLabel:"Sign in",registerLabel:e.tabs.registerLabel?e.tabs.registerLabel:"Sign up"}):null,M=e.closeBtn.element?(0,l.jsx)("div",{onClick:k,children:e.closeBtn.element}):(0,l.jsx)(m,{containerClass:e.closeBtn.containerClass?e.closeBtn.containerClass:"RML-login-modal-close",click:k}),E=null;e.providers&&e.providers.facebook&&"recoverPassword"!==c.currentTab&&(E=e.providers.facebook.btn?(0,l.jsx)(P.btn,{btnClass:P.btnClass?P.btnClass:"RML-facebook-login-button",onStartLoading:e.startLoading,onSuccess:P.onLoginSuccess?P.onLoginSuccess:null,onFail:P.onLoginFail?P.onLoginFail:null,inactive:!!e.loading&&e.loading,label:P.label?P.label:"Continue with Facebook",scope:P.config.scope}):(0,l.jsx)(u,{btnClass:P.btnClass?P.btnClass:"RML-facebook-login-button",onStartLoading:e.startLoading,onSuccess:P.onLoginSuccess?P.onLoginSuccess:null,onFail:P.onLoginFail?P.onLoginFail:null,inactive:!!e.loading&&e.loading,label:P.label?P.label:"Continue with Facebook",scope:P.config.scope}));var B=null;e.providers&&e.providers.google&&"recoverPassword"!==c.currentTab&&(B=e.providers.google.btn?(0,l.jsx)(R.btn,{btnClass:R.btnClass?R.btnClass:"RML-google-login-button",onStartLoading:e.startLoading,onSuccess:R.onLoginSuccess?R.onLoginSuccess:null,onFail:R.onLoginFail?R.onLoginFail:null,inactive:!!e.loading&&e.loading,label:R.label?R.label:"Continue with Google"}):(0,l.jsx)(g,{btnClass:R.btnClass?R.btnClass:"RML-google-login-button",onStartLoading:e.startLoading,onSuccess:R.onLoginSuccess?R.onLoginSuccess:null,onFail:R.onLoginFail?R.onLoginFail:null,inactive:!!e.loading&&e.loading,label:R.label?R.label:"Continue with Google"}));var N=null,O="";if(e.error)switch(c.currentTab){case"login":N=e.loginError.containerClass?e.loginError.containerClass:"RML-login-modal-error",O=e.loginError.label?e.loginError.label:"Unable to login. Please try again later";break;case"register":N=e.registerError.containerClass?e.registerError.containerClass:"RML-login-modal-error",O=e.registerError.label?e.registerError.label:"Unable to register. Please try again later";break;case"recoverPassword":N=e.recoverPasswordError.containerClass?e.recoverPasswordError.containerClass:"RML-login-modal-error",O=e.recoverPasswordError.label?e.recoverPasswordError.label:"Unable to recover password. Please try again later"}var A=e.error?(0,l.jsx)(h,{type:c.currentTab,containerClass:N,label:O}):null,F=e.separator&&"recoverPassword"!==c.currentTab?(0,l.jsx)(C,{containerClass:e.separator.containerClass?e.separator.containerClass:"RML-social-methods-separator",label:e.separator.label?e.separator.label:"Or"}):null,I=e.loading&&!e.loader.disabled?(0,l.jsx)(w,{containerClass:e.loader.containerClass?e.loader.containerClass:"RML-login-modal-indicator",onStartLoading:e.startLoading,size:24}):null,_=e.form&&!e.form.disabled?(0,l.jsx)(L,{currentTab:c.currentTab,form:e.form,inactive:e.loading,loader:I,errorWrap:A,visible:e.visible,recoverPasswordAnchorClick:function(){d(a(a({},c),{},{currentTab:"recoverPassword"}))},recoverPasswordSuccessLabel:e.form.recoverPasswordSuccessLabel}):null,W=e.form&&!e.form.disabled||e.additionalWrap.disabled||!e.loading&&!e.error?null:(0,l.jsxs)("div",{className:e.additionalWrap.containerClass?e.additionalWrap.containerClass:"RML-login-modal-additional-wrap",children:[A,I]}),z=e.aboveSocialsLoginContainer&&"login"===c.currentTab?e.aboveSocialsLoginContainer:null,U=e.aboveSocialsRegisterContainer&&"register"===c.currentTab?e.aboveSocialsRegisterContainer:null,V=e.aboveSocialsRecoverPasswordContainer&&"recoverPassword"===c.currentTab?e.aboveSocialsRecoverPasswordContainer:null;return(0,l.jsxs)("div",{id:e.mainWrapId?e.mainWrapId:"",className:f()(e.mainWrapClass,{"RML-login-modal-wrap":!e.mainWrapClass,hidden:!e.visible}),children:[(0,l.jsx)("div",{className:e.overlayClass?e.overlayClass:"RML-login-modal-overlay",onClick:k}),(0,l.jsx)("div",{className:f()({"RML-login-modal-box":e.visible,hidden:!e.visible}),children:(0,l.jsxs)("div",{className:e.visible?"RML-login-modal-box-content":"hidden",children:[M,T,(0,l.jsxs)("div",{className:"RML-social-modal-content-wrap",children:[z,U,V,E,B,F,_,W]})]})})]})};k.defaultProps={closeBtn:{},tabs:{},providers:{},loader:{},additionalWrap:{},loginError:{},registerError:{},recoverPasswordError:{}};var S=k}(),module.exports=o}();