/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t){t.classList.remove("popup_is-animated"),t.classList.add("popup_is-opened"),document.addEventListener("keydown",n),function(t){t.addEventListener("click",r)}(t)}function e(t){t.classList.add("popup_is-animated"),t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n),t.removeEventListener("click",r)}function n(t){var n=document.querySelector(".popup_is-opened");"Escape"===t.key&&e(n)}function r(t){var n=document.querySelector(".popup_is-opened");(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e(n)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new T(r||[]);return a(i,"_invoke",{value:C(t,n,c)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function g(){}function b(){}function L(){}var S={};f(S,u,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(P([])));E&&E!==n&&r.call(E,u)&&(S=E);var x=L.prototype=g.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function n(i,a,c,u){var l=p(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,n,r){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=A(c,r);if(u){if(u===_)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=p(e,n,r);if("normal"===l.type){if(o=r.done?m:y,l.arg===_)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function A(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),_;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,_;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,_):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,_)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=L,a(x,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:b,configurable:!0}),b.displayName=f(L,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,l,(function(){return this})),e.AsyncIterator=q,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new q(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),_}},e}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var u="1c33c7b1-0a31-4a81-aab4-8e1a70c57e3d",l="wff-cohort-25",s="application/json";function f(t){return"".concat("https://nomoreparties.co/v1","/").concat(l).concat(t)}function d(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}function p(t){return fetch(f(t),{headers:{authorization:u}}).then((function(t){return d(t)}))}function h(){var t;return t=i().mark((function t(){var e,n,r,o,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([p("/users/me"),p("/cards")]);case 2:return e=t.sent,u=2,n=function(t){if(Array.isArray(t))return t}(i=e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(i,u)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(i,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=n[0],o=n[1],c={user:r,cards:o},t.abrupt("return",c);case 8:case"end":return t.stop()}var i,u}),t)})),h=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))},h.apply(this,arguments)}function y(t,e){return fetch(f("/cards/likes/".concat(t)),{method:e,headers:{authorization:u}}).then((function(t){return d(t)}))}var v=document.querySelector("#card-template").content,m=document.querySelector(".popup_type_delete-image"),_=document.forms["delete-image"];function g(t,e,n,r,o){var i=v.querySelector(".places__item").cloneNode(!0),a=i.querySelector(".card__image"),c=i.querySelector(".card__title"),u=i.querySelector(".card__like-counter"),l=i.querySelector(".card__delete-button"),s=i.querySelector(".card__like-button");return a.setAttribute("src",t.link),a.setAttribute("alt",t.name),c.textContent=t.name,u.textContent=t.likes.length,o._id===t.owner._id?e(i,t._id):l.remove(),L(t,o)&&s.classList.add("card__like-button_is-active"),n(s,o,t,u),r(a,t.name,t.link),i}function b(e,n){e.querySelector(".card__delete-button").addEventListener("click",(function(){t(m),_.card=e,_.cardId=n}))}function L(t,e){return t.likes.some((function(t){return t._id===e._id}))}function S(t,e,n,r){t.addEventListener("click",(function(){L(n,e)?y(n._id,"DELETE").then((function(e){n=e,r.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})).catch((function(t){console.log(t)})):y(n._id,"PUT").then((function(e){n=e,r.textContent=e.likes.length,t.classList.add("card__like-button_is-active")})).catch((function(t){console.log(t)}))}))}function w(t,e,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function E(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);n.forEach((function(n){w(t,n,e)})),x(r,e)}function x(t,e){t.classList.add(e.inactiveButtonClass),t.disabled=!0}var k=document.querySelector(".content").querySelector(".places__list"),q=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),A=document.querySelector(".popup_type_edit"),O=document.querySelector(".popup_type_new-card"),j=document.forms["new-place"],T=j.elements["place-name"],P=j.elements.link,N=document.forms["edit-profile"],I=N.elements.name,G=N.elements.description,D=document.querySelector(".profile__title"),z=document.querySelector(".profile__description"),B=document.querySelector(".popup_type_image"),F=document.querySelector(".popup__image"),J=document.querySelector(".popup__caption"),M=document.querySelector(".profile__image-container"),H=document.querySelector(".popup_type_avatar"),U=document.forms["edit-avatar"],V=U.elements["avatar-link"],Y=document.querySelector(".profile__image"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function K(e,n,r){e.addEventListener("click",(function(){F.setAttribute("src",r),F.setAttribute("alt",n),J.textContent=n,t(B)}))}function Q(t,e,n){t&&e&&(D.textContent=t,z.textContent=e),n&&Y.setAttribute("src",n)}function R(t,e,n){var r=t.querySelector(".popup__button"),o=r.textContent;return r.textContent=e?"Сохранение...":n,o}C.addEventListener("click",(function(){return t(O)})),q.addEventListener("click",(function(){E(N,$),I.value=D.textContent,G.value=z.textContent,t(A)})),N.addEventListener("submit",(function(t){t.preventDefault();var n,r=R(A,!0,null);(n={name:I.value,about:G.value},fetch(f("/users/me"),{method:"PATCH",headers:{authorization:u,"Content-Type":s},body:JSON.stringify({name:n.name,about:n.about})}).then((function(t){return d(t)}))).then((function(t){Q(t.name,t.about)})).catch((function(t){console.log(t)})).finally((function(){R(A,!1,r),e(A)}))})),M.addEventListener("click",(function(){t(H)})),U.addEventListener("submit",(function(t){t.preventDefault();var n,r=R(H,!0,null);(n=V.value,fetch(f("/users/me/avatar"),{method:"PATCH",headers:{authorization:u,"Content-Type":s},body:JSON.stringify({avatar:n})}).then((function(t){return d(t)}))).then((function(t){Q(null,null,t.avatar)})).catch((function(t){console.log(t)})).finally((function(){R(H,!1,r),e(H),U.reset()}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault})),function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,n){e.validity.patternMismatch?e.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы"):e.setCustomValidity(""),e.validity.valid?w(t,e,n):function(t,e,n,r){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(t,e,e.validationMessage,n)}(t,o,e),function(t,e,n){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?function(t,e){t.classList.remove(e.inactiveButtonClass),t.disabled=!1}(e,n):x(e,n)}(n,r,e)}))}))}(e,t)}))}($),_.addEventListener("submit",(function(t){t.cardId=_.cardId,t.card=_.card,function(t){var n;t.preventDefault(),(n=t.cardId,fetch(f("/cards/".concat(n)),{method:"DELETE",headers:{authorization:u}}).then((function(t){return d(t)}))).then((function(){return t.card.remove()})).catch((function(t){console.log(t)})).finally((function(){e(m)}))}(t)})),function(){return h.apply(this,arguments)}().then((function(t){var n,r;n=t.cards,r=t.user,n.forEach((function(t){k.append(g(t,b,S,K,r))})),Q(t.user.name,t.user.about,t.user.avatar),function(t){j.addEventListener("submit",(function(n){n.preventDefault();var r,o,i=R(O,!0,null);(r=T.value,o=P.value,fetch(f("/cards"),{method:"POST",headers:{authorization:u,"Content-Type":s},body:JSON.stringify({name:r,link:o})}).then((function(t){return d(t)}))).then((function(e){k.prepend(g(e,b,S,K,t))})).catch((function(t){console.log(t)})).finally((function(){R(O,!1,i),j.reset(),E(j,$),e(O)}))}))}(t.user)})).catch((function(t){console.log(t)}))})();