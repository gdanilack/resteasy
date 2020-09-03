/*! For license information please see 71.badacbd6.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[71,149],{227:function(e,t,a){},305:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===s)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},306:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},307:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(4),a(336);var r=a(0),n=a.n(r),s=n.a.createContext({});s.Consumer,s.Provider;function l(e,t){var a=Object(r.useContext)(s);return e||a[t]||t}},336:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,r=a.propTypes,s=a.defaultProps,l=a.allowFallback,o=void 0!==l&&l,c=a.displayName,i=void 0===c?e.name||e.displayName:c,u=function(t,a){return e(t,a)};return Object.assign(n.default.forwardRef||!o?n.default.forwardRef(u):function(e){return u(e,null)},{displayName:i,propTypes:r,defaultProps:s})};var r,n=(r=a(0))&&r.__esModule?r:{default:r}},356:function(e,t,a){"use strict";var r=a(4),n=a(306),s=a(305),l=a.n(s),o=a(0),c=a.n(o),i=a(307),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,m=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(i.a)(a,"col"),p=[],v=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var s=n.span;t=void 0===s||s,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+d+l:""+d+l+"-"+t),null!=r&&v.push("order"+l+"-"+r),null!=a&&v.push("offset"+l+"-"+a)})),p.length||p.push(d),c.a.createElement(m,Object(r.a)({},f,{ref:t,className:l.a.apply(void 0,[s].concat(p,v))}))}));m.displayName="Col",t.a=m},409:function(e,t,a){"use strict";var r=a(4),n=a(306),s=a(305),l=a.n(s),o=a(0),c=a.n(o),i=a(307),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,d=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(i.a)(a,"row"),v=p+"-cols",y=[];return u.forEach((function(e){var t,a=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&y.push(""+v+r+"-"+t)})),c.a.createElement(f,Object(r.a)({ref:t},d,{className:l.a.apply(void 0,[s,p,o&&"no-gutters"].concat(y))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},416:function(e,t,a){"use strict";var r=a(4),n=a(306),s=a(305),l=a.n(s),o=a(0),c=a.n(o),i=a(307),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.fluid,o=e.as,u=void 0===o?"div":o,m=e.className,f=Object(n.a)(e,["bsPrefix","fluid","as","className"]),d=Object(i.a)(a,"container"),p="string"===typeof s?"-"+s:"-fluid";return c.a.createElement(u,Object(r.a)({ref:t},f,{className:l()(m,s?""+d+p:d)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},86:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var r=a(0),n=a.n(r),s=(a(227),a(416)),l=a(409),o=a(356);function c(){return n.a.createElement("div",null,n.a.createElement(s.a,{fluid:!0},n.a.createElement(l.a,{className:"register-row"},n.a.createElement(o.a,{md:"12"},n.a.createElement("div",{className:"register-header-text"},"Register For What You Need"))),n.a.createElement(l.a,{className:"d-flex justify-content-center registry-options-row"},n.a.createElement(o.a,{className:"registry-card",md:"3"},n.a.createElement(l.a,null,n.a.createElement(o.a,{md:"12",className:"d-flex justify-content-center"},n.a.createElement("div",null,n.a.createElement("h3",null,"Create A Registry")))),n.a.createElement(l.a,{className:"registry-descriptions"},n.a.createElement(o.a,null,n.a.createElement("div",null,"Harness the power of your community and direct support to the things that matter to you and to them.")))),n.a.createElement(o.a,{className:"registry-card",md:"3"},n.a.createElement(l.a,null,n.a.createElement(o.a,{md:"12",className:"d-flex justify-content-center"},n.a.createElement("div",null,n.a.createElement("h3",null,"Find A Registry")))),n.a.createElement(l.a,{className:"registry-descriptions"},n.a.createElement(o.a,null,n.a.createElement("div",null,"Is someone you care about in mourning? Contributing to their registry guarantees that your support goes toward something that truly makes a difference.")))),n.a.createElement(o.a,{className:"registry-card",md:"3"},n.a.createElement(l.a,null,n.a.createElement(o.a,{md:"12",className:"d-flex justify-content-center"},n.a.createElement("div",null,n.a.createElement("h3",null,"Browse Creative Commemoration")))),n.a.createElement(l.a,{className:"registry-descriptions"},n.a.createElement(o.a,null,n.a.createElement("div",null,"Take a look at some unique ways to commemorate your loved one.",n.a.createElement("br",null),n.a.createElement("i",null,"Turn their ashes into diamonds or send their body to space to rest with the stars."))))))))}}}]);
//# sourceMappingURL=71.badacbd6.chunk.js.map