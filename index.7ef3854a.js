!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.7ef3854a.js","9jv9o":"coming-soon.6dfb66e2.jpg","5UbS1":"index.533f284a.css","2hvCh":"index.2b93a216.js"}'));var o,s=a("7rQOT");o=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("9jv9o");var u=document.querySelector(".js-movie-card");function c(e){s.Loading.circle(),u.innerHTML="";var n=e.results,r=JSON.parse(localStorage.getItem("genres")).genres,i=n.map((function(e){var n=e.genre_ids.map((function(e){return r.find((function(t){return t.id===e}))})).map((function(e){return e.name})),i="",a=null===e.poster_path?"".concat(t(o)):"".concat("https://www.themoviedb.org/t/p/w500").concat(e.poster_path);return Object.keys(e).includes("release_date")&&(""!==e.release_date&&(i=e.release_date.split("").slice(0,4).join("")),""===e.release_date&&(i=" . . . .")),n=n.length>2?n.slice(0,2).join(", ")+", Other":n.length<1?"Info is not specified":n.join(", "),'<li id="'.concat(e.id,'" class="movie-card__list">\n                <article>\n                  <img class="movie-card__poster" src="').concat(a,'" loading="lazy" alt="').concat(e.title,'">\n                  <div class="js-genres">\n                  <h2 class="movie-card__title" data-id="').concat(e.id,'">').concat(e.title,'</h2>\n                       <p class="movie-card__geners">').concat(n," | ").concat(i,"</p>\n                    \n                    </div>\n              </article>\n            </li>")})).join("");u.insertAdjacentHTML("beforeend",i),s.Loading.remove(1e3)}s.Loading.init({svgSize:"120px",svgColor:"#c4c4c4",backgroundColor:"rgba(0, 0, 0, 0.3)"});var l=a("bpxeT"),d=a("2TvXO"),f=a("dIxxU"),p=a("aYvV9"),h=(l=a("bpxeT"),a("8MBJY")),v=a("a2hTj"),m=a("hKHmD"),g=a("8nrFW"),y=(d=a("2TvXO"),l=a("bpxeT"),h=a("8MBJY"),v=a("a2hTj"),a("1t1Wn")),k=(g=a("8nrFW"),d=a("2TvXO"),a("ds8z5")),b=(h=a("8MBJY"),v=a("a2hTj"),a("eYQtU")),w=(y=a("1t1Wn"),g=a("8nrFW"),{});Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e){return E(e)};var _=S(a("ge8co")),I=S(a("cZGw3")),x=S(a("fVNic")),T=S(a("gD1JV"));function S(e){return e&&e.__esModule?e:{default:e}}function E(e){var t="function"==typeof Map?new Map:void 0;return E=function(e){if(null===e||!I.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _.default(e,arguments,x.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),T.default(n,e)},E(e)}var O,R,C,A=a("2MbLg"),N=O={};function L(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}function D(e){if(R===setTimeout)return setTimeout(e,0);if((R===L||!R)&&setTimeout)return R=setTimeout,setTimeout(e,0);try{return R(e,0)}catch(t){try{return R.call(null,e,0)}catch(t){return R.call(this,e,0)}}}!function(){try{R="function"==typeof setTimeout?setTimeout:L}catch(e){R=L}try{C="function"==typeof clearTimeout?clearTimeout:P}catch(e){C=P}}();var M,U=[],j=!1,F=-1;function V(){j&&M&&(j=!1,M.length?U=M.concat(U):F=-1,U.length&&H())}function H(){if(!j){var e=D(V);j=!0;for(var t=U.length;t;){for(M=U,U=[];++F<t;)M&&M[F].run();F=-1,t=U.length}M=null,j=!1,function(e){if(C===clearTimeout)return clearTimeout(e);if((C===P||!C)&&clearTimeout)return C=clearTimeout,clearTimeout(e);try{C(e)}catch(t){try{return C.call(null,e)}catch(t){return C.call(this,e)}}}(e)}}function B(e,t){this.fun=e,this.array=t}function z(){}N.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];U.push(new B(e,t)),1!==U.length||j||D(H)},B.prototype.run=function(){this.fun.apply(null,this.array)},N.title="browser",N.browser=!0,N.env={},N.argv=[],N.version="",N.versions={},N.on=z,N.addListener=z,N.once=z,N.off=z,N.removeListener=z,N.removeAllListeners=z,N.emit=z,N.prependListener=z,N.prependOnceListener=z,N.listeners=function(e){return[]},N.binding=function(e){throw new Error("process.binding is not supported")},N.cwd=function(){return"/"},N.chdir=function(e){throw new Error("process.chdir is not supported")},N.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var W=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,d=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(f=64)),r.push(n[l],n[d],n[f],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var d=s<<6&192|u;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},K=function(e){return function(e){var t=W(e);return q.encodeByteArray(t,!0)}(e).replace(/\./g,"")},G=function(e){try{return q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var J=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},Y=function(){try{return J()||function(){if(void 0!==O&&void 0!==O.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&G(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},X=function(e){var t,n;return null===(n=null===(t=Y())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},$=function(){var e;return null===(e=Y())||void 0===e?void 0:e.config},Q=function(e){var t;return null===(t=Y())||void 0===t?void 0:t["_".concat(e)]},Z=function(){"use strict";function e(){var n=this;t(h)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(v)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function te(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ne=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e,i,a){var o;return t(h)(this,r),(o=n.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(t(k)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(k)(o),re.prototype.create),o}return r}(t(w)(Error)),re=function(){"use strict";function e(n,r,i){t(h)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(v)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ie(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ne(a,u,i);return c}}]),e}();function ie(e,t){return e.replace(ae,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ae=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function se(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],d=t[c];if(ue(l)&&ue(d)){if(!se(l,d))return!1}else if(l!==d)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{f||null==m.return||m.return()}finally{if(p)throw h}}return!0}function ue(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(y)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function le(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(y)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function de(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe=function(){"use strict";function e(n,r){var i=this;t(h)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(v)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=pe),void 0===r.error&&(r.error=pe),void 0===r.complete&&(r.complete=pe);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function pe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(e){return e&&e._delegate?e._delegate:e}var ve=function(){"use strict";function e(n,r,i){t(h)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(v)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),me="[DEFAULT]",ge=function(){"use strict";function e(n,r){t(h)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(v)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Z;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(y)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var d=this.getOrInitializeService({instanceIdentifier:l});c.resolve(d)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(g)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(g)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var d=t(y)(c.value,2),f=d[0],p=d[1],h=this.normalizeInstanceIdentifier(f);i===h&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===me?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return this.component?this.component.multipleInstances?e:me:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ke,be=function(){"use strict";function e(n){t(h)(this,e),this.name=n,this.providers=new Map}return t(v)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ge(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),we=(h=a("8MBJY"),v=a("a2hTj"),m=a("hKHmD"),g=a("8nrFW"),[]);(ke=ye||(ye={}))[ke.DEBUG=0]="DEBUG",ke[ke.VERBOSE=1]="VERBOSE",ke[ke.INFO=2]="INFO",ke[ke.WARN=3]="WARN",ke[ke.ERROR=4]="ERROR",ke[ke.SILENT=5]="SILENT";var _e,Ie={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},xe=ye.INFO,Te=(_e={},t(m)(_e,ye.DEBUG,"log"),t(m)(_e,ye.VERBOSE,"log"),t(m)(_e,ye.INFO,"info"),t(m)(_e,ye.WARN,"warn"),t(m)(_e,ye.ERROR,"error"),_e),Se=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=Te[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(g)(i)))}},Ee=function(){"use strict";function e(n){t(h)(this,e),this.name=n,this._logLevel=xe,this._logHandler=Se,this._userLogHandler=null,we.push(this)}return t(v)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ye))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ie[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.DEBUG].concat(t(g)(n))),this._logHandler.apply(this,[this,ye.DEBUG].concat(t(g)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.VERBOSE].concat(t(g)(n))),this._logHandler.apply(this,[this,ye.VERBOSE].concat(t(g)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.INFO].concat(t(g)(n))),this._logHandler.apply(this,[this,ye.INFO].concat(t(g)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.WARN].concat(t(g)(n))),this._logHandler.apply(this,[this,ye.WARN].concat(t(g)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.ERROR].concat(t(g)(n))),this._logHandler.apply(this,[this,ye.ERROR].concat(t(g)(n)))}}]),e}();l=a("bpxeT");var Oe,Re,Ce=a("dDDEV");g=a("8nrFW"),d=a("2TvXO"),g=a("8nrFW");var Ae=new WeakMap,Ne=new WeakMap,Le=new WeakMap,Pe=new WeakMap,De=new WeakMap;var Me={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Le.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ue(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Re||(Re=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Ve(this),n),Fe(Ae.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Fe(e.apply(Ve(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[Ve(this),n].concat(t(g)(i)));return Le.set(s,n.sort?n.sort():[n]),Fe(s)}}function je(e){return"function"==typeof e?Ue(e):(e instanceof IDBTransaction&&function(e){if(!Ne.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ne.set(e,t)}}(e),t=e,(Oe||(Oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Me):e);var t}function Fe(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Fe(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Ae.set(e,t)})).catch((function(){})),De.set(n,t),n;var t,n;if(Pe.has(e))return Pe.get(e);var r=je(e);return r!==e&&(Pe.set(e,r),De.set(r,e)),r}var Ve=function(e){return De.get(e)};function He(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Fe(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Fe(s.result),e.oldVersion,e.newVersion,Fe(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Be=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],We=new Map;function qe(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(We.get(n))return We.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=ze.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||Be.includes(r))){var o,s=(o=t(l)(t(d).mark((function e(n){var o,s,u,c,l,f,p=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=p.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=p[u];return l=this.transaction(n,a?"readwrite":"readonly"),f=l.store,i&&(f=f.index(s.shift())),e.next=7,Promise.all([(c=f)[r].apply(c,t(g)(s)),a&&l.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)});return We.set(n,s),s}}}Me=function(e){return t(Ce)({},e,{get:function(t,n,r){return qe(t,n)||e.get(t,n,r)},has:function(t,n){return!!qe(t,n)||e.has(t,n)}})}(Me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ke=function(){"use strict";function e(n){t(h)(this,e),this.container=n}return t(v)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var Ge,Je,Ye="@firebase/app",Xe="0.9.1",$e=new Ee("@firebase/app"),Qe="[DEFAULT]",Ze=(Ge={},t(m)(Ge,Ye,"fire-core"),t(m)(Ge,"@firebase/app-compat","fire-core-compat"),t(m)(Ge,"@firebase/analytics","fire-analytics"),t(m)(Ge,"@firebase/analytics-compat","fire-analytics-compat"),t(m)(Ge,"@firebase/app-check","fire-app-check"),t(m)(Ge,"@firebase/app-check-compat","fire-app-check-compat"),t(m)(Ge,"@firebase/auth","fire-auth"),t(m)(Ge,"@firebase/auth-compat","fire-auth-compat"),t(m)(Ge,"@firebase/database","fire-rtdb"),t(m)(Ge,"@firebase/database-compat","fire-rtdb-compat"),t(m)(Ge,"@firebase/functions","fire-fn"),t(m)(Ge,"@firebase/functions-compat","fire-fn-compat"),t(m)(Ge,"@firebase/installations","fire-iid"),t(m)(Ge,"@firebase/installations-compat","fire-iid-compat"),t(m)(Ge,"@firebase/messaging","fire-fcm"),t(m)(Ge,"@firebase/messaging-compat","fire-fcm-compat"),t(m)(Ge,"@firebase/performance","fire-perf"),t(m)(Ge,"@firebase/performance-compat","fire-perf-compat"),t(m)(Ge,"@firebase/remote-config","fire-rc"),t(m)(Ge,"@firebase/remote-config-compat","fire-rc-compat"),t(m)(Ge,"@firebase/storage","fire-gcs"),t(m)(Ge,"@firebase/storage-compat","fire-gcs-compat"),t(m)(Ge,"@firebase/firestore","fire-fst"),t(m)(Ge,"@firebase/firestore-compat","fire-fst-compat"),t(m)(Ge,"fire-js","fire-js"),t(m)(Ge,"firebase","fire-js-all"),Ge),et=new Map,tt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){$e.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function rt(e){var t=e.name;if(tt.has(t))return $e.debug("There were multiple attempts to register component ".concat(t,".")),!1;tt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=et.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){nt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function it(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var at=(Je={},t(m)(Je,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(m)(Je,"bad-app-name","Illegal App name: '{$appName}"),t(m)(Je,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(m)(Je,"app-deleted","Firebase App named '{$appName}' already deleted"),t(m)(Je,"no-options","Need to provide options, when not being deployed to hosting via source."),t(m)(Je,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(m)(Je,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(m)(Je,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(m)(Je,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(m)(Je,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(m)(Je,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Je),ot=new re("app","Firebase",at),st=function(){"use strict";function e(n,r,i){var a=this;t(h)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ve("app",(function(){return a}),"PUBLIC"))}return t(v)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}]),e}(),ut="9.16.0";function ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Qe,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw ot.create("bad-app-name",{appName:String(a)});if(n||(n=$()),!n)throw ot.create("no-options");var o=et.get(a);if(o){if(se(n,o.options)&&se(i,o.config))return o;throw ot.create("duplicate-app",{appName:a})}var s=new be(a),u=!0,c=!1,l=void 0;try{for(var d,f=tt.values()[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var p=d.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var h=new st(n,i,s);return et.set(a,h),h}function lt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=et.get(e);if(!t&&e===Qe)return ct();if(!t)throw ot.create("no-app",{appName:e});return t}function dt(e,t,n){var r,i=null!==(r=Ze[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void $e.warn(s.join(" "))}rt(new ve("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ft="firebase-heartbeat-store",pt=null;function ht(){return pt||(pt=He("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ft)}}).catch((function(e){throw ot.create("idb-open",{originalErrorMessage:e.message})}))),pt}function vt(e){return mt.apply(this,arguments)}function mt(){return(mt=t(l)(t(d).mark((function e(n){var r,i;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ht();case 3:return r=e.sent,e.abrupt("return",r.transaction(ft).objectStore(ft).get(kt(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof ne?$e.warn(e.t0.message):(i=ot.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),$e.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function gt(e,t){return yt.apply(this,arguments)}function yt(){return(yt=t(l)(t(d).mark((function e(n,r){var i,a,o,s;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ht();case 3:return i=e.sent,a=i.transaction(ft,"readwrite"),o=a.objectStore(ft),e.next=8,o.put(r,kt(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof ne?$e.warn(e.t0.message):(s=ot.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),$e.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function kt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt=function(){"use strict";function e(n){var r=this;t(h)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new xt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(v)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r,i,a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=wt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r,i,a,o,s;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=wt(),i=_t(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=K(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function wt(){return(new Date).toISOString().substring(0,10)}function _t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Tt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Tt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var It,xt=function(){"use strict";function e(n){t(h)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(v)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(l)(t(d).mark((function e(){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,vt(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",gt(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a;return t(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",gt(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(g)(a.heartbeats).concat(t(g)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function Tt(e){return K(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It="",rt(new ve("platform-logger",(function(e){return new Ke(e)}),"PRIVATE")),rt(new ve("heartbeat",(function(e){return new bt(e)}),"PRIVATE")),dt(Ye,Xe,It),dt(Ye,Xe,"esm2017"),dt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dt("firebase","9.16.0","app");k=a("ds8z5"),l=a("bpxeT"),h=a("8MBJY"),v=a("a2hTj"),m=a("hKHmD");var St={};Object.defineProperty(St,"__esModule",{value:!0}),St.default=function(e,t,n){return Rt(e,t,n)};var Et,Ot=(Et=a("2mz0K"))&&Et.__esModule?Et:{default:Et};function Rt(e,t,n){return(Rt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Ot.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Ct=a("fVNic");b=a("eYQtU"),y=a("1t1Wn"),g=a("8nrFW"),A=a("2MbLg"),d=a("2TvXO");function At(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Nt(){return t(m)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Lt=Nt,Pt=new re("auth","Firebase",Nt()),Dt=new Ee("@firebase/auth");function Mt(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Dt.logLevel<=ye.ERROR&&(a=Dt).error.apply(a,["Auth (".concat(ut,"): ").concat(e)].concat(t(g)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Vt.apply(void 0,[e].concat(t(g)(r)))}function jt(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Vt.apply(void 0,[e].concat(t(g)(r)))}function Ft(e,n,r){var i=Object.assign(Object.assign({},Lt()),t(m)({},n,r));return new re("auth","Firebase",i).create(n,{appName:e.name})}function Vt(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(g)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(g)(u)))}return(a=Pt).create.apply(a,[e].concat(t(g)(r)))}function Ht(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw Vt.apply(void 0,[n].concat(t(g)(i)))}function Bt(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Mt(t),new Error(t)}function zt(e,t){e||Bt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=new Map;function qt(e){zt(e instanceof Function,"Expected a class definition");var t=Wt.get(e);return t?(zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){var n=it(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(se(n.getOptions(),null!=t?t:{}))return r;Ut(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Jt(){return"http:"===Yt()||"https:"===Yt()}function Yt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Jt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $t=function(){"use strict";function e(n,r){t(h)(this,e),this.shortDelay=n,this.longDelay=r,zt(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(v)(e,[{key:"get",value:function(){return Xt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){zt(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt,en=function(){"use strict";function e(){t(h)(this,e)}return t(v)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),tn=(Zt={},t(m)(Zt,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(m)(Zt,"MISSING_CUSTOM_TOKEN","internal-error"),t(m)(Zt,"INVALID_IDENTIFIER","invalid-email"),t(m)(Zt,"MISSING_CONTINUE_URI","internal-error"),t(m)(Zt,"INVALID_PASSWORD","wrong-password"),t(m)(Zt,"MISSING_PASSWORD","internal-error"),t(m)(Zt,"EMAIL_EXISTS","email-already-in-use"),t(m)(Zt,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(m)(Zt,"INVALID_IDP_RESPONSE","invalid-credential"),t(m)(Zt,"INVALID_PENDING_TOKEN","invalid-credential"),t(m)(Zt,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(m)(Zt,"MISSING_REQ_TYPE","internal-error"),t(m)(Zt,"EMAIL_NOT_FOUND","user-not-found"),t(m)(Zt,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(m)(Zt,"EXPIRED_OOB_CODE","expired-action-code"),t(m)(Zt,"INVALID_OOB_CODE","invalid-action-code"),t(m)(Zt,"MISSING_OOB_CODE","internal-error"),t(m)(Zt,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(m)(Zt,"INVALID_ID_TOKEN","invalid-user-token"),t(m)(Zt,"TOKEN_EXPIRED","user-token-expired"),t(m)(Zt,"USER_NOT_FOUND","user-token-expired"),t(m)(Zt,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(m)(Zt,"INVALID_CODE","invalid-verification-code"),t(m)(Zt,"INVALID_SESSION_INFO","invalid-verification-id"),t(m)(Zt,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(m)(Zt,"MISSING_SESSION_INFO","missing-verification-id"),t(m)(Zt,"SESSION_EXPIRED","code-expired"),t(m)(Zt,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(m)(Zt,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(m)(Zt,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(m)(Zt,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(m)(Zt,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(m)(Zt,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(m)(Zt,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(m)(Zt,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(m)(Zt,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(m)(Zt,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(m)(Zt,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Zt),nn=new $t(3e4,6e4);function rn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function an(e,t,n,r){return on.apply(this,arguments)}function on(){return on=t(l)(t(d).mark((function e(n,r,i,a){var o,s=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},e.abrupt("return",sn(n,o,t(l)(t(d).mark((function e(){var o,s,u,c;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=ce(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",en.fetch()(dn(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),on.apply(this,arguments)}function sn(e,t,n){return un.apply(this,arguments)}function un(){return(un=t(l)(t(d).mark((function e(n,r,i){var a,o,s,u,c,l,f,p,h;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},tn),r),e.prev=2,o=new fn(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw pn(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(y)(c.split(" : "),2),f=l[0],p=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw pn(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw pn(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw pn(n,"user-disabled",u);case 29:if(h=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw Ft(n,h,p);case 34:Ut(n,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof ne)){e.next=41;break}throw e.t0;case 41:Ut(n,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function cn(e,t,n,r){return ln.apply(this,arguments)}function ln(){return ln=t(l)(t(d).mark((function e(n,r,i,a){var o,s,u=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,an(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Ut(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),ln.apply(this,arguments)}function dn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Qt(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var fn=function(){"use strict";function e(n){var r=this;t(h)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(jt(n.auth,"network-request-failed"))}),nn.get())}))}return t(v)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function pn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=jt(e,t,r);return i.customData._tokenResponse=n,i}function hn(e,t){return vn.apply(this,arguments)}function vn(){return(vn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mn(e,t){return gn.apply(this,arguments)}function gn(){return(gn=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return kn=t(l)(t(d).mark((function e(n){var r,i,a,o,s,u,c=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=he(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,Ht((o=wn(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:yn(bn(o.auth_time)),issuedAtTime:yn(bn(o.iat)),expirationTime:yn(bn(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),kn.apply(this,arguments)}function bn(e){return 1e3*Number(e)}function wn(e){var n=t(y)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return Mt("JWT malformed, contained fewer than 3 sections"),null;try{var o=G(i);return o?JSON.parse(o):(Mt("Failed to decode base64 JWT payload"),null)}catch(e){return Mt("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function _n(e,t){return In.apply(this,arguments)}function In(){return In=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){var i=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ne&&xn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),In.apply(this,arguments)}function xn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=function(){"use strict";function e(n){t(h)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(v)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(l)(t(d).mark((function e(){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),Sn=function(){"use strict";function e(n,r){t(h)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(v)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){return On.apply(this,arguments)}function On(){return(On=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n){var r,i,a,o,s,u,c,l,f,p,h;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,_n(n,mn(i,{idToken:a}));case 7:Ht(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?An(s.providerUserInfo):[],c=Cn(n.providerData,u),l=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),p=!!l&&f,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Sn(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(n,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Rn(){return(Rn=t(l)(t(d).mark((function e(n){var r;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=he(n),e.next=3,En(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Cn(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(g)(r).concat(t(g)(n))}function An(e){return e.map((function(e){var t=e.providerId,n=At(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Nn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){var i;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sn(n,{},t(l)(t(d).mark((function e(){var i,a,o,s,u,c;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ce({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=dn(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",en.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn=function(){"use strict";function e(){t(h)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(v)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Ht(e.idToken,"internal-error"),Ht(void 0!==e.idToken,"internal-error"),Ht(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Ht(n=wn(t),"internal-error"),Ht(void 0!==n.exp,"internal-error"),Ht(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(l)(t(d).mark((function i(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Ht(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(l)(t(d).mark((function i(){var a,o,s,u;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nn(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return Bt("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(Ht("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(Ht("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(Ht("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t){Ht("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Mn=function(){"use strict";function e(n){t(h)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=At(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(g)(o.providerData):[],this.metadata=new Sn(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(v)(e,[{key:"getIdToken",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_n(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(Ht(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return kn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Rn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Ht(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Ht(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(l)(t(d).mark((function i(){var a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,En(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,_n(e,hn(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,d=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,w=n.isAnonymous,_=n.providerData,I=n.stsTokenManager;Ht(k&&I,t,"internal-error");var x=Pn.fromJSON(this.name,I);Ht("string"==typeof k,t,"internal-error"),Dn(d,t.name),Dn(f,t.name),Ht("boolean"==typeof b,t,"internal-error"),Ht("boolean"==typeof w,t,"internal-error"),Dn(p,t.name),Dn(h,t.name),Dn(v,t.name),Dn(m,t.name),Dn(g,t.name),Dn(y,t.name);var T=new e({uid:k,auth:t,email:f,emailVerified:b,displayName:d,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(l)(t(d).mark((function a(){var o,s;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new Pn).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,En(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Un=function(){"use strict";function e(){t(h)(this,e),this.type="NONE",this.storage={}}return t(v)(e,[{key:"_isAvailable",value:function(){return t(l)(t(d).mark((function e(){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(l)(t(d).mark((function i(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.type="NONE";var jn=Un;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Vn=function(){"use strict";function e(n,r,i){t(h)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=Fn(this.userKey,o.apiKey,s),this.fullPersistenceKey=Fn("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(v)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?Mn._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(l)(t(d).mark((function a(){var o,s,u,c,f,p,h,v,m,g,y,k,b;return t(d).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(qt(jn),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(l)(t(d).mark((function e(n){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),s=o[0]||qt(jn),u=Fn(i,n.config.apiKey,n.name),c=null,f=!0,p=!1,h=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(f=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(u);case 16:if(!(y=a.sent)){a.next=22;break}return k=Mn._fromJSON(n,y),g!==s&&(c=k),s=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,h=a.t1;case 35:a.prev=35,a.prev=36,f||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(b=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&b.length){a.next=46;break}return a.abrupt("return",new e(s,n,i));case 46:if(s=b[0],!c){a.next=50;break}return a.next=50,s._set(u,c.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(l)(t(d).mark((function e(n){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(s,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gn(t))return"Blackberry";if(Jn(t))return"Webos";if(zn(t))return"Safari";if((t.includes("chrome/")||Wn(t))&&!t.includes("edge/"))return"Chrome";if(Kn(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Bn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/firefox\//i.test(e)}function zn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/crios\//i.test(e)}function qn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/iemobile/i.test(e)}function Kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/android/i.test(e)}function Gn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/blackberry/i.test(e)}function Jn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/webos/i.test(e)}function Yn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return Yn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function $n(){return((e=ee()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Qn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return Yn(e)||Kn(e)||Jn(e)||Gn(e)||/windows phone/i.test(e)||qn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Hn(ee());break;case"Worker":t="".concat(Hn(ee()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ut,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er=function(){"use strict";function e(n){t(h)(this,e),this.auth=n,this.queue=[]}return t(v)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a,o,s,u,c,l,f,p,h,v,m,g;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),f=!0,p=!1,h=void 0,t.prev=35,v=i[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){g=m.value;try{g()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),p=!0,h=t.t2;case 43:t.prev=43,t.prev=44,f||null==v.return||v.return();case 46:if(t.prev=46,!p){t.next=49;break}throw h;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),tr=function(){"use strict";function e(n,r,i){t(h)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rr(this),this.idTokenSubscription=new rr(this),this.beforeStateQueue=new er(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(v)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=qt(n));var r=this;return this._initializationPromise=this.queue(t(l)(t(d).mark((function i(){var a,o;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Vn.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a,o,s,u,c,l;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return Ht(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,En(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?he(e):null)&&Ht(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(l)(t(d).mark((function i(){return t(d).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&Ht(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(qt(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new re("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(l)(t(d).mark((function i(){var a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return Ht(i=e&&qt(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Vn.create(n,[qt(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a;return t(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(l)(t(d).mark((function e(){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ht(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Ht(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r,i,a;return t(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(m)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return he(e)}var rr=function(){"use strict";function e(n){var r,i,a=this;t(h)(this,e),this.auth=n,this.observer=null,this.addObserver=(i=new fe((function(e){return a.observer=e}),r)).subscribe.bind(i)}return t(v)(e,[{key:"next",get:function(){return Ht(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function ir(e,n,r){var i=nr(e);Ht(i._canInitEmulator,i,"emulator-config-failed"),Ht(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=ar(n),s=function(e){var n=ar(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:or(i.substr(o.length+1))}}var s=t(y)(i.split(":"),2);return{host:s[0],port:or(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ar(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function or(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var sr=function(){"use strict";function e(n,r){t(h)(this,e),this.providerId=n,this.signInMethod=r}return t(v)(e,[{key:"toJSON",value:function(){return Bt("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Bt("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Bt("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Bt("not implemented")}}]),e}();function ur(e,t){return cr.apply(this,arguments)}function cr(){return(cr=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lr(e,t){return dr.apply(this,arguments)}function dr(){return(dr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",cn(n,"POST","/v1/accounts:signInWithPassword",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fr(e,t){return pr.apply(this,arguments)}function pr(){return(pr=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:sendOobCode",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function hr(e,t){return vr.apply(this,arguments)}function vr(){return(vr=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fr(n,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mr(e,t){return gr.apply(this,arguments)}function gr(){return(gr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",cn(n,"POST","/v1/accounts:signInWithEmailLink",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yr(e,t){return kr.apply(this,arguments)}function kr(){return(kr=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",cn(n,"POST","/v1/accounts:signInWithEmailLink",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(h)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return t(v)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",lr(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",mr(e,{email:n._email,oobCode:n._password}));case 5:Ut(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(l)(t(d).mark((function i(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",ur(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",yr(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:Ut(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(sr);function wr(e,t){return _r.apply(this,arguments)}function _r(){return(_r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",cn(n,"POST","/v1/accounts:signInWithIdp",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ir=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){var e;return t(h)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(v)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return wr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,wr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ce(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=At(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(sr);function xr(e,t){return Tr.apply(this,arguments)}function Tr(){return(Tr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",an(n,"POST","/v1/accounts:sendVerificationCode",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Sr(){return(Sr=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",cn(n,"POST","/v1/accounts:signInWithPhoneNumber",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Er(){return(Er=t(l)(t(d).mark((function e(n,r){var i;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cn(n,"POST","/v1/accounts:signInWithPhoneNumber",rn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw pn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Or=t(m)({},"USER_NOT_FOUND","user-not-found");function Rr(){return(Rr=t(l)(t(d).mark((function e(n,r){var i;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",cn(n,"POST","/v1/accounts:signInWithPhoneNumber",rn(n,i),Or));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e){var i;return t(h)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(v)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Sr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Er.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Rr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(sr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar=function(){"use strict";function e(n){var r,i,a,o,s,u;t(h)(this,e);var c=le(de(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,d=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);Ht(l&&d&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=d,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(v)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=le(de(e)).link,n=t?le(de(t)).deep_link_id:null,r=le(de(e)).deep_link_id;return(r?le(de(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nr=function(){"use strict";function e(){t(h)(this,e),this.providerId=e.PROVIDER_ID}return t(v)(e,null,[{key:"credential",value:function(e,t){return br._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Ar.parseLink(t);return Ht(n,"argument-error"),br._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();Nr.PROVIDER_ID="password",Nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lr=function(){"use strict";function e(n){t(h)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(v)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Pr=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){var e;return t(h)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(v)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(g)(this.scopes)}}]),r}(Lr),Dr=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){return t(h)(this,r),n.call(this,"facebook.com")}return t(v)(r,null,[{key:"credential",value:function(e){return Ir._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Pr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com",Dr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mr=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){var e;return t(h)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(v)(r,null,[{key:"credential",value:function(e,t){return Ir._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Pr);Mr.GOOGLE_SIGN_IN_METHOD="google.com",Mr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ur=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){return t(h)(this,r),n.call(this,"github.com")}return t(v)(r,null,[{key:"credential",value:function(e){return Ir._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Pr);Ur.GITHUB_SIGN_IN_METHOD="github.com",Ur.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){return t(h)(this,r),n.call(this,"twitter.com")}return t(v)(r,null,[{key:"credential",value:function(e,t){return Ir._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Pr);function Fr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",cn(n,"POST","/v1/accounts:signUp",rn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jr.TWITTER_SIGN_IN_METHOD="twitter.com",jr.PROVIDER_ID="twitter.com";var Hr=function(){"use strict";function e(n){t(h)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(v)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(l)(t(d).mark((function o(){var s,u,c;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Mn._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=Br(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(l)(t(d).mark((function a(){var o;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Br(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function Br(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zr=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e,i,a,o){var s,u;return t(h)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(t(k)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return t(v)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ne);function Wr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw zr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e,t){return Kr.apply(this,arguments)}function Kr(){return Kr=t(l)(t(d).mark((function e(n,r){var i,a,o=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=_n,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Hr._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),Kr.apply(this,arguments)}function Gr(e,t){return Jr.apply(this,arguments)}function Jr(){return Jr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){var i,a,o,s,u,c,l=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,_n(n,Wr(a,o,r,n),i);case 6:return Ht((s=e.sent).idToken,a,"internal-error"),Ht(u=wn(s.idToken),a,"internal-error"),c=u.sub,Ht(n.uid===c,a,"user-mismatch"),e.abrupt("return",Hr._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Ut(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Jr.apply(this,arguments)}function Yr(e,t){return Xr.apply(this,arguments)}function Xr(){return Xr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r){var i,a,o,s,u=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Wr(n,a,r);case 4:return o=e.sent,e.next=7,Hr._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Xr.apply(this,arguments)}function $r(e,t){return Qr.apply(this,arguments)}function Qr(){return(Qr=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Yr(nr(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zr(e,t,n){var r;Ht((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Ht(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Ht(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Ht(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}function ei(e,t,n){return ti.apply(this,arguments)}function ti(){return(ti=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n,r,i){var a,o;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=he(n),o={requestType:"PASSWORD_RESET",email:r},i&&Zr(a,o,i),e.next=5,hr(a,o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ni(e,t,n){return ri.apply(this,arguments)}function ri(){return(ri=t(l)(t(d).mark((function e(n,r,i){var a,o,s;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=nr(n),e.next=3,Fr(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,Hr._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ii(e,t,n){return $r(he(e),Nr.credential(t,n))}function ai(e,t,n,r){return he(e).onIdTokenChanged(t,n,r)}function oi(e,t,n){return he(e).beforeAuthStateChanged(t,n)}function si(e,t,n,r){return he(e).onAuthStateChanged(t,n,r)}function ui(e){return he(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ci(e,t){return an(e,"POST","/v2/accounts/mfaEnrollment:start",rn(e,t))}new WeakMap;var li="__sak",di=function(){"use strict";function e(n,r){t(h)(this,e),this.storageRetriever=n,this.type=r}return t(v)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fi=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){var e,i;return t(h)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(zn(i=ee())||Yn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Qn(),e._shouldAllowMigration=!0,e}return t(v)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);$n()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(l)(t(d).mark((function o(){return t(d).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(St)(t(Ct)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(l)(t(d).mark((function a(){var o;return t(d).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(St)(t(Ct)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(l)(t(d).mark((function a(){return t(d).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(St)(t(Ct)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(di);fi.type="LOCAL";var pi=fi,hi=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(){return t(h)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(v)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(di);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.type="SESSION";var vi=hi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){return Promise.all(e.map((n=t(l)(t(d).mark((function e(n){var r;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gi=function(){"use strict";function e(n){t(h)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(v)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a,o,s,u,c,f,p;return t(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,o=a.eventId,s=a.eventType,u=a.data,null==(c=n.handlersMap[s])?void 0:c.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),f=Array.from(c).map(function(){var e=t(l)(t(d).mark((function e(n){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,u));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,mi(f);case 9:p=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi.receivers=[];var ki=function(){"use strict";function e(n){t(h)(this,e),this.target=n,this.handlers=new Set}return t(v)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(l)(t(d).mark((function a(){var o,s,u;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=yi("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(){return void 0!==bi().WorkerGlobalScope&&"function"==typeof bi().importScripts}function _i(){return Ii.apply(this,arguments)}function Ii(){return(Ii=t(l)(t(d).mark((function e(){var n;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xi="firebaseLocalStorageDb",Ti="firebaseLocalStorage",Si="fbase_key",Ei=function(){"use strict";function e(n){t(h)(this,e),this.request=n}return t(v)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Oi(e,t){return e.transaction([Ti],t?"readwrite":"readonly").objectStore(Ti)}function Ri(){var e=indexedDB.deleteDatabase(xi);return new Ei(e).toPromise()}function Ci(){var e=indexedDB.open(xi,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Ti,{keyPath:Si})}catch(e){r(e)}})),e.addEventListener("success",t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Ti)){t.next=12;break}return i.close(),t.next=5,Ri();case 5:return t.t0=n,t.next=8,Ci();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Ai(e,t,n){return Ni.apply(this,arguments)}function Ni(){return(Ni=t(l)(t(d).mark((function e(n,r,i){var a,o;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Oi(n,!0).put((a={},t(m)(a,Si,r),t(m)(a,"value",i),a)),e.abrupt("return",new Ei(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Li(e,t){return Pi.apply(this,arguments)}function Pi(){return(Pi=t(l)(t(d).mark((function e(n,r){var i,a;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Oi(n,!1).get(r),e.next=3,new Ei(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Di(e,t){var n=Oi(e,!0).delete(t);return new Ei(n).toPromise()}var Mi=function(){"use strict";function e(){t(h)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(v)(e,[{key:"_openDb",value:function(){var e=this;return t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ci();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",wi()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(l)(t(d).mark((function n(){return t(d).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=gi._getInstance(wi()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(l)(t(d).mark((function n(r,i){var a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(l)(t(d).mark((function e(n,r){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r,i,a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,_i();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new ki(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(l)(t(d).mark((function e(){var n;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ci();case 5:return n=e.sent,e.next=8,Ai(n,li,"1");case 8:return e.next=10,Di(n,li);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(l)(t(d).mark((function i(){return t(d).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(l)(t(d).mark((function i(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Ai(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Li(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(l)(t(d).mark((function r(){return t(d).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(l)(t(d).mark((function r(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Di(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r,i,a,o,s,u,c,l,f,p,h,v,m,g,y,k,b;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Oi(e,!1).getAll();return new Ei(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,p=f.fbase_key,h=f.value,a.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(h)&&(e.notifyListeners(p,h),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,e.localCache[b]&&!a.has(b)&&(e.notifyListeners(b,null),i.push(b));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,g=t.t1;case 35:t.prev=35,t.prev=36,v||null==y.return||y.return();case 38:if(t.prev=38,!m){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(l)(t(d).mark((function n(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Mi.type="LOCAL";var Ui=Mi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t){return an(e,"POST","/v2/accounts/mfaSignIn:start",rn(e,t))}function Fi(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=jt("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Vi(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vi("rcb"),new $t(3e4,6e4);var Hi="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e,t,n){return zi.apply(this,arguments)}function zi(){return(zi=t(l)(t(d).mark((function e(n,r,i){var a,o,s,u,c,l,f,p;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,Ht("string"==typeof o,n,"argument-error"),Ht(i.type===Hi,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return Ht("enroll"===u.type,n,"internal-error"),e.next=15,ci(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return Ht("signin"===u.type,n,"internal-error"),Ht(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,ji(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,xr(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wi=function(){"use strict";function e(n){t(h)(this,e),this.providerId=e.PROVIDER_ID,this.auth=nr(n)}return t(v)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Bi(this.auth,e,he(t))}}],[{key:"credential",value:function(e,t){return Cr._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Cr._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qi(e,t){return t?qt(t):(Ht(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi.PROVIDER_ID="phone",Wi.PHONE_SIGN_IN_METHOD="phone";var Ki=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e){var i;return t(h)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(v)(r,[{key:"_getIdTokenResponse",value:function(e){return wr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return wr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return wr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(sr);function Gi(e){return Yr(e.auth,new Ki(e),e.bypassAuthState)}function Ji(e){var t=e.auth,n=e.user;return Ht(n,t,"internal-error"),Gr(n,new Ki(e),e.bypassAuthState)}function Yi(e){return Xi.apply(this,arguments)}function Xi(){return(Xi=t(l)(t(d).mark((function e(n){var r,i;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,Ht(i=n.user,r,"internal-error"),e.abrupt("return",qr(i,new Ki(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $i=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(h)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(v)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(l)(t(d).mark((function e(r,i){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a,o,s,u,c,l;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gi;case"linkViaPopup":case"linkViaRedirect":return Yi;case"reauthViaPopup":case"reauthViaRedirect":return Ji;default:Ut(this.auth,"internal-error")}}},{key:"resolve",value:function(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Qi=new $t(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zi=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e,i,a,o,s){var u;return t(h)(this,r),(u=n.call(this,e,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(k)(u),u}return t(v)(r,[{key:"executeNotNull",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return Ht(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return zt(1===e.filter.length,"Popup operations only handle one event"),r=yi(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(jt(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(jt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(jt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Qi.get())};t()}}]),r}($i);Zi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ea=new Map,ta=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(h)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(v)(r,[{key:"execute",value:function(){var e=this,n=this;return t(l)(t(d).mark((function i(){var a,o;return t(d).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=ea.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,na(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(St)(t(Ct)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:ea.set(n.auth._key(),a);case 21:return n.bypassAuthState||ea.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(St)(t(Ct)(r.prototype),"onAuthEvent",n)};return t(l)(t(d).mark((function n(){var r;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(l)(t(d).mark((function e(){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}($i);function na(e,t){return ra.apply(this,arguments)}function ra(){return(ra=t(l)(t(d).mark((function e(n,r){var i,a,o;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=oa(r),a=aa(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ia(e,t){ea.set(e._key(),t)}function aa(e){return qt(e._redirectPersistence)}function oa(e){return Fn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e,t){return ua.apply(this,arguments)}function ua(){return ua=t(l)(t(d).mark((function e(n,r){var i,a,o,s,u,c=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=nr(n),o=qi(a,r),s=new ta(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),ua.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ca=function(){"use strict";function e(n){t(h)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(v)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return da(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!da(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(la(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(la(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function la(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function da(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function fa(e){return pa.apply(this,arguments)}function pa(){return pa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(l)(t(d).mark((function e(n){var r,i=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",an(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),pa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,va=/^https?/;function ma(){return(ma=t(l)(t(d).mark((function e(n){var r,i,a,o,s,u,c;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fa(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!ga(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Ut(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function ga(e){var t=Gt(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!va.test(r))return!1;if(ha.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya=new $t(3e4,6e4);function ka(){var e=bi().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(g)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var ba=null;function wa(e){return ba=ba||function(e){return new Promise((function(t,n){var r,i,a;function o(){ka(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ka(),n(jt(e,"network-request-failed"))},timeout:ya.get()})}if(null===(i=null===(r=bi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=bi().gapi)||void 0===a?void 0:a.load)){var s=Vi("iframefcb");return bi()[s]=function(){gapi.load?o():n(jt(e,"network-request-failed"))},Fi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw ba=null,e}))}(e),ba}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _a=new $t(5e3,15e3),Ia={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ta(e){var t=e.config;Ht(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Qt(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:ut},i=xa.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(ce(r).slice(1))}function Sa(e){return Ea.apply(this,arguments)}function Ea(){return Ea=t(l)(t(d).mark((function e(n){var r,i;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wa(n);case 2:return r=e.sent,Ht(i=bi().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Ta(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ia,dontclear:!0},(function(e){return new Promise((r=t(l)(t(d).mark((function r(i,a){var o,s,u;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){bi().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=jt(n,"network-request-failed"),s=bi().setTimeout((function(){a(o)}),_a.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Ea.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ra="_blank",Ca="http://localhost",Aa=function(){"use strict";function e(n){t(h)(this,e),this.window=n,this.associatedEvent=null}return t(v)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Na(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Oa),{width:i.toString(),height:a.toString(),top:o,left:s}),l=ee().toLowerCase();r&&(u=Wn(l)?Ra:r),Bn(l)&&(n=n||Ca,c.scrollbars="yes");var d=Object.entries(c).reduce((function(e,n){var r=t(y)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Xn(l)&&"_self"!==u)return La(n||"",u),new Aa(null);var f=window.open(n||"",u,d);Ht(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Aa(f)}function La(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pa="__/auth/handler",Da="emulator/auth/handler";function Ma(e,n,r,i,a,o){Ht(e.config.authDomain,e,"auth-domain-config-required"),Ht(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:ut,eventId:a};if(n instanceof Lr){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",oe(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var d,f=Object.entries(o||{})[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var p=t(y)(d.value,2),h=p[0],v=p[1];s[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof Pr){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var g,k,b=s,w=!0,_=!1,I=void 0;try{for(var x,T=Object.keys(b)[Symbol.iterator]();!(w=(x=T.next()).done);w=!0){var S=x.value;void 0===b[S]&&delete b[S]}}catch(e){_=!0,I=e}finally{try{w||null==T.return||T.return()}finally{if(_)throw I}}return"".concat((g=e,k=g.config,k.emulator?Qt(k,Da):"https://".concat(k.authDomain,"/").concat(Pa)),"?").concat(ce(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ua="webStorageSupport",ja=function(){"use strict";function e(){t(h)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vi,this._completeRedirectFn=sa,this._overrideRedirectResult=ia}return t(v)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(l)(t(d).mark((function o(){var s,u;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return zt(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Ma(e,n,r,Gt(),i),t.abrupt("return",Na(e,u,yi()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(l)(t(d).mark((function o(){return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=Ma(e,n,r,Gt(),i),bi().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(zt(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i,a;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Sa(e);case 2:return i=t.sent,a=new ca(e),i.register("authEvent",(function(t){return Ht(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ua,{type:Ua},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ut(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ma.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Qn()||zn()||Yn()}}]),e}(),Fa=ja,Va=function(e){"use strict";t(b)(r,e);var n=t(A)(r);function r(e){var i;return t(h)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(v)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return an(e,"POST","/v2/accounts/mfaEnrollment:finalize",rn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return an(e,"POST","/v2/accounts/mfaSignIn:finalize",rn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(n){t(h)(this,e),this.factorId=n}return t(v)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Bt("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(h)(this,e)}return t(v)(e,null,[{key:"assertion",value:function(e){return Va._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Ha="@firebase/auth",Ba="0.21.1",za=function(){"use strict";function e(n){t(h)(this,e),this.auth=n,this.internalListeners=new Map}return t(v)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(l)(t(d).mark((function r(){var i;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Ht(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wa,qa=Q("authIdTokenMaxAge")||300,Ka=null,Ga=function(e){return n=t(l)(t(d).mark((function n(r){var i,a,o;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>qa)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,Ka!==o){t.next=12;break}return t.abrupt("return");case 12:return Ka=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Ja(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt(),t=it(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Kt(e,{popupRedirectResolver:Fa,persistence:[Ui,pi,vi]}),r=Q("authTokenSyncURL");if(r){var i=Ga(r);oi(n,i,(function(){return i(n.currentUser)})),ai(n,(function(e){return i(e)}))}var a=X("auth");return a&&ir(n,"http://".concat(a)),n}Wa="Browser",rt(new ve("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){Ht(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Ht(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Wa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zn(Wa)},i=new tr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),rt(new ve("auth-internal",(function(e){var t=nr(e.getProvider("auth").getImmediate());return new za(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Ha,Ba,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wa)),dt(Ha,Ba,"esm2017");l=a("bpxeT"),d=a("2TvXO"),p=a("aYvV9");var Ya=Ja(ct({apiKey:"AIzaSyDFRxvG-cLncd4nzHUtwRVnlgrm2OeK7W8",authDomain:"filmoteka-test-90b99.firebaseapp.com",projectId:"filmoteka-test-90b99",storageBucket:"filmoteka-test-90b99.appspot.com",messagingSenderId:"222913084900",appId:"1:222913084900:web:1011c02877eb5816a41bf1",measurementId:"G-V4RKSJYRFE"})),Xa=document.querySelector(".auth-form"),$a=document.querySelector(".form-button-register"),Qa=document.querySelector(".form-button-sign-in"),Za=document.querySelector(".js-library-page"),eo=document.querySelector(".js-add-to-watched-btn"),to=document.querySelector(".js-add-to-queue-btn"),no=document.querySelector(".forgot-password");function ro(e){e?Za.classList.remove("visually-hidden"):Za.classList.add("visually-hidden")}function io(e){null===e?(eo.setAttribute("disabled",!0),to.setAttribute("disabled",!0)):(eo.removeAttribute("disabled"),to.removeAttribute("disabled"))}function ao(){return(ao=t(l)(t(d).mark((function e(n){var r,i,a;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=Xa.elements.email.value,i=Xa.elements.password.value,e.prev=3,e.next=6,ni(Ya,r,i);case 6:a=e.sent,a.user,r&&i&&((0,p.successfulRegistration)(),Xa.reset()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),so(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}function oo(){return(oo=t(l)(t(d).mark((function e(n){var r,i,a,o,s;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=Xa.elements.email.value,i=Xa.elements.password.value,"Sign in"!==Qa.textContent){e.next=18;break}return e.prev=4,e.next=7,ii(Ya,r,i);case 7:a=e.sent,o=a.user,r&&i&&((0,p.successfulSignIn)(),Qa.textContent="Sign out",si(Ya,ro),localStorage.setItem("user-uid",o.uid),s=JSON.stringify([r,i]),localStorage.setItem("current-user",s)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0),so(e.t0);case 16:e.next=35;break;case 18:if("Sign out"!==Qa.textContent){e.next=35;break}return e.prev=19,e.next=22,ui(Ya);case 22:e.sent,(0,p.successfulSignOut)(),Xa.reset(),localStorage.removeItem("current-user"),localStorage.removeItem("user-uid"),Qa.textContent="Sign in",Za.classList.add("visually-hidden"),e.next=35;break;case 31:e.prev=31,e.t1=e.catch(19),console.log(e.t1),so(e.t1);case 35:case"end":return e.stop()}}),e,null,[[4,12],[19,31]])})))).apply(this,arguments)}function so(e){var t=e.message;"Firebase: Error (auth/email-already-in-use)."==t?(0,p.userExistNotification)():"Firebase: Error (auth/wrong-password)."==t?(0,p.incorrectPasswordNotification)():"Firebase: Error (auth/invalid-email)."==t?(0,p.invalidEmailNotification)():"Firebase: Error (auth/missing-email)."==t?(0,p.missingEmailNotification)():"Firebase: Error (auth/internal-error)."==t?(0,p.missingPasswordNotification)():"Firebase: Password should be at least 6 characters (auth/weak-password)."==t?(0,p.weekPasswordNotification)():"Firebase: Error (auth/user-not-found)."==t?(0,p.userNotFoundNotification)():(0,p.errorNotification)()}function uo(){return(uo=t(l)(t(d).mark((function e(n){var r;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=Xa.elements.email.value,e.prev=2,e.next=5,ei(Ya,r);case 5:e.sent,(0,p.newPassword)(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),so(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}$a.addEventListener("click",(function(e){return ao.apply(this,arguments)})),Qa.addEventListener("click",(function(e){return oo.apply(this,arguments)})),no.addEventListener("click",(function(e){return uo.apply(this,arguments)})),f.default.defaults.baseURL="https://api.themoviedb.org/3";var co=document.querySelector(".js-movie-card"),lo="687f60735406ee0172c31461de2476ff",fo="/trending/movie/week",po=Ja(ct({apiKey:"AIzaSyDFRxvG-cLncd4nzHUtwRVnlgrm2OeK7W8",authDomain:"filmoteka-test-90b99.firebaseapp.com",projectId:"filmoteka-test-90b99",storageBucket:"filmoteka-test-90b99.appspot.com",messagingSenderId:"222913084900",appId:"1:222913084900:web:1011c02877eb5816a41bf1",measurementId:"G-V4RKSJYRFE"})),ho=document.querySelector(".auth-form"),vo=document.querySelector(".form-button-sign-in");function mo(){return go.apply(this,arguments)}function go(){return go=t(l)(t(d).mark((function e(){var n,r,i,a=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,e.next=4,f.default.get("".concat(fo,"?api_key=").concat(lo,"&page=").concat(n));case 4:return r=e.sent,i=r.data,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(1),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):e.t0.request?console.log(e.t0.request):console.log("Error",e.t0.message),console.log(e.t0.config);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),go.apply(this,arguments)}function yo(){return(yo=t(l)(t(d).mark((function e(){var n,r;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=JSON.parse(localStorage.getItem("current-user"))||[]).length){e.next=3;break}return e.abrupt("return");case 3:return ho.elements.email.value=n[0],ho.elements.password.value=n[1],vo.textContent="Sign out",e.prev=6,e.next=9,ii(po,n[0],n[1]);case 9:r=e.sent,ro(r.user),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),so(e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}localStorage.setItem("render-key","fetch-movies"),f.default.get("".concat("/genre/movie/list","?api_key=").concat(lo,"&language=en-US")).then((function(e){return localStorage.setItem("genres",JSON.stringify(e.data))})).catch((function(e){return console.error(e)})),function(){yo.apply(this,arguments)}(),mo().then((function(e){if(void 0===e)return(0,p.failRequest)(),co.insertAdjacentHTML("beforeend",'<h1 class="failRequest" >Why did you deliberately break the code?</h1>');c(e),Eo(1,e.total_pages)})).catch(console.error());l=a("bpxeT"),d=a("2TvXO"),f=a("dIxxU"),p=a("aYvV9");(s=a("7rQOT")).Loading.init({svgSize:"120px",svgColor:"#c4c4c4",backgroundColor:"rgba(0, 0, 0, 0.3)"});var ko=document.querySelector(".js-movie-card"),bo=document.querySelector(".js-search-input");function wo(e){return _o.apply(this,arguments)}function _o(){return _o=t(l)(t(d).mark((function e(n){var r,i,a,o=arguments;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,e.next=4,f.default.get("https://api.themoviedb.org/3/search/movie?api_key=d60997a7e23cda835c1c23368c69f903&query=".concat(n,"&page=").concat(r));case 4:return i=e.sent,a=i.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),Io(),(0,p.errorNotification)();case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),_o.apply(this,arguments)}function Io(){mo().then((function(e){c(e),Eo(1,e.total_pages)})).catch(console.error())}document.querySelector(".js-search-form").addEventListener("submit",(function(e){s.Loading.circle(),e.preventDefault(),ko.innerHTML="";var t=bo.value.trim();""==t?((0,p.emptyQueryNotification)(),Io()):wo(t,1).then((function(e){e?0===e.results.length?((0,p.noMatchesNotification)(),Io()):(localStorage.setItem("film-name",t),c(e),Eo(1,e.total_pages)):((0,p.noMatchesNotification)(),Io())}));localStorage.setItem("render-key","search-movies"),e.currentTarget.reset()}));var xo=document.querySelector(".js-pagination-box"),To=0,So=0;function Eo(e,t){var n="",r=e-1,i=e+2,a=e+1;To=e,e>1?n+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-left btn-rotate"></button></li>':1===e&&(n+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-rotate link-pag--hidden" ></button></li>'),e>1&&(n+='<li class="item-pag item-none"><button type="button" class="link-pag" >1</button></li>'),e>4&&(n+='<li class="item-pag item-none"><button type="button" class="link-pag btn-pointer-event" >...</button></li>'),e>3&&(n+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(e-2,"</button></li>")),e>2&&(n+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(r,"</button></li>")),n+='<li class="item-pag">\n        <button type="button" class="link-pag" >'.concat(e,"</button>\n      </li>"),t-1>e&&(n+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(a,"</button></li>")),t-2>e&&(n+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(i,"</button></li>")),t-3>e&&(n+='<li class="item-pag item-none"><button type="button" class="link-pag btn-pointer-event" >...</button></li>'),t>e&&(n+='<li class="item-pag item-none">\n        <button type="button" class="link-pag" >'.concat(t,"</button>\n      </li>")),t>e?n+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-right"></button></li>':t===e&&(n+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn link-pag--hidden"></button></li>'),xo.innerHTML=n,function(e,t){e<5?So=e:e===t?So=5:e<=5?(So=0,So=e):6===e&&(So=5);xo.children[So].firstElementChild.classList.add("current")}(e,t);var o=document.querySelector(".film-card-box").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:-o,behavior:"smooth"})}xo.addEventListener("click",(function(e){if(Boolean(e.target.closest(".btn-right")))return To+=1,"search-movies"===localStorage.getItem("render-key")&&wo(localStorage.getItem("film-name"),To).then((function(e){c(e),Eo(To,e.total_pages)})),void("fetch-movies"===localStorage.getItem("render-key")&&mo(To).then((function(e){c(e),Eo(To,e.total_pages)})));if(Boolean(e.target.closest(".btn-left")))return To-=1,"search-movies"===localStorage.getItem("render-key")&&wo(localStorage.getItem("film-name"),To).then((function(e){c(e),Eo(To,e.total_pages)})),void("fetch-movies"===localStorage.getItem("render-key")&&mo(To).then((function(e){c(e),Eo(To,e.total_pages)})));if("BUTTON"!==e.target.nodeName)return;if("..."===e.target.textContent)return;var t=Number(e.target.textContent);"search-movies"===localStorage.getItem("render-key")&&wo(localStorage.getItem("film-name"),t).then((function(e){c(e),Eo(t,e.total_pages)}));"fetch-movies"===localStorage.getItem("render-key")&&mo(t).then((function(e){c(e),Eo(t,e.total_pages)}))}));l=a("bpxeT"),d=a("2TvXO"),f=a("dIxxU"),s=a("7rQOT");var Oo=a("l5SaA"),Ro=a("4MHRn"),Co=a("1US9i");s.Loading.init({svgSize:"120px",svgColor:"#c4c4c4",backgroundColor:"rgba(0, 0, 0, 0.3)"});var Ao=document.querySelector(".modal-close-btn"),No=document.querySelector(".movie-card"),Lo=document.querySelector(".modal-card-box"),Po=document.querySelector(".modal-film-content"),Do=document.querySelector(".backdrop"),Mo=document.querySelector(".watched-btn"),Uo=document.querySelector(".queue-btn"),jo=document.querySelector("body"),Fo=(document.querySelector(".modal-film-card"),document.querySelector(".js-trailer-btn")),Vo=document.querySelector(".backdrop-trailer"),Ho=document.querySelector(".close-trailer-modal-btn"),Bo=document.querySelector(".modal-video_wrapper"),zo=document.querySelector(".gallery"),Wo=Ja(ct({apiKey:"AIzaSyDFRxvG-cLncd4nzHUtwRVnlgrm2OeK7W8",authDomain:"filmoteka-test-90b99.firebaseapp.com",projectId:"filmoteka-test-90b99",storageBucket:"filmoteka-test-90b99.appspot.com",messagingSenderId:"222913084900",appId:"1:222913084900:web:1011c02877eb5816a41bf1",measurementId:"G-V4RKSJYRFE"}));function qo(){return qo=t(l)(t(d).mark((function e(n){var r,i,a,o;return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),jo.style.overflow="hidden",document.addEventListener("click",$o),r=n.target.closest("li"),i=r.getAttribute("id"),e.next=8,Go(i);case 8:a=e.sent,s.Loading.circle(),o=a.data,localStorage.setItem("movie-from-open-modal",JSON.stringify(o)),Ko(o),Fo.classList.remove("is-hidden"),(0,Ro.getTrailerVideos)(i).then((function(e){e.length<=1?(Fo.classList.add("is-hidden"),document.querySelector(".single-trailer-wrapper").classList.add("is-hidden")):((0,Ro.createMainTrailerLink)(e),(0,Ro.createTrailerModalMarkup)(e))})),(0,Co.getMoviePosters)(i).then((function(e){0===e.length?zo.classList.add("is-hidden"):(0,Co.createMoviePostersGallery)(e)})),(0,Oo.isWatched)(),(0,Oo.isQueue)(),si(Wo,io),s.Loading.remove(500),Do.classList.remove("is-hidden"),document.addEventListener("keydown",Yo),Ao.addEventListener("click",Xo),Do.classList.contains("is-hidden")||(Mo.addEventListener("click",Oo.handleAddToWatched),Uo.addEventListener("click",Oo.handleAddToQueue)),Do.classList.contains("is-hidden")&&(Mo.removeEventListener("click",Oo.handleAddToWatched),Uo.removeEventListener("click",Oo.handleAddToQueue)),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,27]])}))),qo.apply(this,arguments)}function Ko(e){var t=e.genres.map((function(e){return e.name})),n=e.overview;n.length===Number(0)&&(n="Currently description in unavailiable due to lack of information from producers"),t=t.length===Number(0)?"Info is not specified":t.join(", ");var r="https://image.tmdb.org/t/p/w500".concat(e.poster_path);null===e.poster_path&&(r="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/500px-No_image_available_500_x_500.svg.png"),Lo.innerHTML='<img id="'.concat(e.id,'" src="').concat(r,'" alt="').concat(e.title,'" class="modal-img"/>'),Po.innerHTML='<h2 class="modal-title">'.concat(e.title,'</h2>\n        <table><tbody>\n      <tr>\n        <td class="characteristic td">Vote/Votes</td>\n        <td class="description"><span class="vote">').concat(Number(e.vote_average).toFixed(2),'</span>&nbsp;<span class="characteristic">/</span> &nbsp; ').concat(e.vote_count,'</td>\n      </tr>\n      <tr>\n        <td class="characteristic td">Popularity</td>\n        <td class="description">').concat(Number(e.popularity).toFixed(2),'</td>\n      </tr>\n      <tr>\n        <td class="characteristic td">Original title</td>\n        <td class="description description-title">').concat(e.title,'</td>\n      </tr>\n      <tr>\n        <td class="characteristic td">Genre</td>\n        <td class="description">').concat(t,'</td>\n      </tr>\n    </tbody>\n    </table>\n    <div class="single-trailer-wrapper"></div>\n      <h3 class="description-title">About</h3>\n    <p class="description-text">').concat(n,"</p>")}function Go(e){return Jo.apply(this,arguments)}function Jo(){return(Jo=t(l)(t(d).mark((function e(n){return t(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.default.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=cbdd4abbcb92dd438a6c3b40fc45e1be"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function Yo(e){"Escape"===e.key&&(Do.classList.add("is-hidden"),document.removeEventListener("click",Yo),jo.style.overflow="visible")}function Xo(){Do.classList.add("is-hidden"),Ao.removeEventListener("click",Xo),jo.style.overflow="visible"}function $o(e){"backdrop"===e.target.className&&(Do.classList.add("is-hidden"),document.removeEventListener("click",$o),jo.style.overflow="visible")}function Qo(e){"backdrop-trailer"===e.target.className&&(Vo.classList.add("is-hidden"),document.removeEventListener("click",$o),jo.style.overflow="visible")}function Zo(e){"Escape"===e.key&&(Vo.classList.add("is-hidden"),document.removeEventListener("click",Yo),jo.style.overflow="visible")}No.addEventListener("click",(function(e){return qo.apply(this,arguments)})),Fo.addEventListener("click",(function(e){e.preventDefault(),Vo.classList.remove("is-hidden"),document.addEventListener("click",Qo),document.addEventListener("keydown",Zo)})),Ho.addEventListener("click",(function(e){Vo.classList.add("is-hidden"),Ho.removeEventListener("click",Xo),jo.style.overflow="visible",Bo.innerHTML="";var t=document.querySelector(".modal-img").getAttribute("id");(0,Ro.getTrailerVideos)(t).then((function(e){e.length<=1?(Fo.classList.add("is-hidden"),document.querySelector(".single-trailer-wrapper").classList.add("is-hidden")):(0,Ro.createTrailerModalMarkup)(e)}))})),a("aZhHc"),a("dozxP"),a("4MHRn")}();
//# sourceMappingURL=index.7ef3854a.js.map
