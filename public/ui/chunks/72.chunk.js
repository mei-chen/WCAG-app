(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1853:function(t,e,n){"use strict";n.r(e);n(19),n(12),n(14),n(7),n(13),n(9),n(10),n(11),n(16),n(15),n(20),n(17);var r=n(0),a=n.n(r),l=n(398),o=n(47),i=n(5),u=n(70);n(1615);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,c=!1;try{if(l=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==e);u=!0);}catch(t){c=!0,a=t}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t){var e=t.closeModal,n=t.addLinkHandler,f=t.existingLink,s=c(Object(r.useState)(f),2),m=s[0],b=s[1],d=c(Object(l.a)(),1)[0],y=function(){n(m),e()};return a.a.createElement(u.a,{className:"Modal LinkModal","data-element":i.a.CONTENT_EDIT_LINK_MODAL,onMouseDown:e},a.a.createElement("div",{className:"container",onMouseDown:function(t){return t.stopPropagation()}},a.a.createElement("form",{onSubmit:y},a.a.createElement("div",null,d("link.enterurl")),a.a.createElement("div",{className:"linkInput"},a.a.createElement("input",{className:"urlInput",value:m,autoFocus:!0,onChange:function(t){return b(t.target.value)}}),a.a.createElement(o.a,{dataElement:"linkSubmitButton",label:d("action.link"),onClick:y})))))},m=n(3),b=n(6),d=n(2);function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,c=!1;try{if(l=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==e);u=!0);}catch(t){c=!0,a=t}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=function(){var t=y(Object(b.e)((function(t){return[m.a.isElementOpen(t,i.a.CONTENT_EDIT_LINK_MODAL),m.a.getContentBoxEditor(t)]})),2),e=t[0],n=t[1],l=Object(b.d)(),o="";n&&(o=n.hyperlink);var u=Object(r.useCallback)((function(){l(d.a.closeElement(i.a.CONTENT_EDIT_LINK_MODAL)),n&&n.blur()}),[n]),c=Object(r.useCallback)((function(t){n&&(n.insertHyperlink(t),n.blur())}),[n]);return e?a.a.createElement(s,{closeModal:u,addLinkHandler:c,existingLink:o}):null};e.default=v}}]);
//# sourceMappingURL=72.chunk.js.map