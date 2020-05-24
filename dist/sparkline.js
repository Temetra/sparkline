var sparkline=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e,n,r){return Math.round(100*(e-r*e/t+n))/100}function i(t){return t.value}function o(t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",t);for(let t in e)n.setAttribute(t,e[t]);return n}function u(t,e,n){if(function(t){Array.from(t.childNodes).forEach(e=>t.removeChild(e))}(t),e.length<=1)return;n=n||{},"number"==typeof e[0]&&(e=e.map(t=>({value:isNaN(t)?0:t})));const u=n.onmousemove,a=n.onmouseout,s=null!=n.interactive?n.interactive:!!u,l=n.spotRadius||2,c=2*l,d=n.cursorWidth||2,f=parseFloat(t.attributes["stroke-width"].value),p=n.fetch||i,h=e.map(t=>p(t)),b=parseFloat(t.attributes.width.value)-2*c,v=parseFloat(t.attributes.height.value),x=v-2*f-c,y=Math.max(n.minScale||0,...h)||0,m=h.length-1,g=b/m,k=[],w=r(y,x,f+l,h[0])||x;let A=`M${c} ${w}`;h.forEach((t,n)=>{const i=n*g+c,o=r(y,x,f+l,t)||x;k.push(Object.assign({},e[n],{index:n,x:i,y:o})),A+=` L ${i} ${o}`});const O=o("path",{class:"sparkline--line",d:A,fill:"none"});const j=o("path",{class:"sparkline--fill",d:`${A} V ${v} L ${c} ${v} Z`,stroke:"none"});if(t.appendChild(j),t.appendChild(O),!s)return;const $=o("line",{class:"sparkline--cursor",x1:-1e3,x2:-1e3,y1:0,y2:v,"stroke-width":d}),M=o("circle",{class:"sparkline--spot",cx:-1e3,cy:-1e3,r:l});t.appendChild($),t.appendChild(M);const S=o("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(S),S.addEventListener("mouseout",t=>{$.setAttribute("x1",-1e3),$.setAttribute("x2",-1e3),M.setAttribute("cx",-1e3),a&&a(t)}),S.addEventListener("mousemove",t=>{const e=t.offsetX;let n=k.find(t=>t.x>=e);n||(n=k[m]);let r,i,o=k[k.indexOf(n)-1];o?(i=o.x+(n.x-o.x)/2,r=e>=i?n:o):r=n;const a=r.x,s=r.y;M.setAttribute("cx",a),M.setAttribute("cy",s),$.setAttribute("x1",a),$.setAttribute("x2",a),u&&u(t,r)})}n.r(e),n.d(e,"sparkline",function(){return u}),e.default=u}]);
//# sourceMappingURL=sparkline.js.map