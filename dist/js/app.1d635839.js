(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({fetch:"fetch"}[t]||t)+"."+{fetch:"45c171a1"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t),i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"081a":function(t,e,n){"use strict";var a=n("eb42"),r=n.n(a);r.a},"1a26":function(t,e,n){},"271a":function(t,e,n){t.exports=n.p+"img/logo-bg-1.4fc0a638.jpg"},"2ddc":function(t,e,n){"use strict";var a=n("d4b3"),r=n.n(a);r.a},"335a":function(t,e,n){},"3b99":function(t,e,n){t.exports=n.p+"img/logo-bg-1-lg.961efe4a.jpg"},"3d47":function(t,e,n){t.exports=n.p+"img/logo-bg-3-lg.51f7f523.jpg"},"4b93":function(t,e,n){t.exports=n.p+"img/logo-mm.e6448810.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"--active-color":t.activeState.colour},attrs:{id:"app"}},[t._l(t.preloadImages,function(t){return n("link",{key:t,attrs:{href:t,rel:"preload",as:"image",type:"image/jpg"}})}),n("header",[n("logo",{attrs:{large:t.lg,image:t.activeState.image,imageLg:t.activeState.imageLg}})],1),n("main",[n("div",{staticClass:"main-inner"},[n("div",{staticClass:"nav-wrapper"},[n("dots-nav",{attrs:{count:3},nativeOn:{mouseenter:function(e){return t.clearActiveInterval(e)},mouseleave:function(e){return t.setActiveInterval(e)}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}}),n("primary-nav")],1),n("app-content",{attrs:{title:t.activeState.title,description:t.activeState.description}}),n("footer-nav")],1)])],2)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.large?n("svg",{attrs:{viewBox:"0 0 355 730",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("g",{attrs:{id:"path-1"}},[n("polygon",{attrs:{id:"Fill-1",points:"219.442748 729.557252 354.442748 729.557252 354.442748 594.442748 219.442748 594.442748"}}),n("path",{attrs:{d:"M219.385361,337.055945 L219.385361,392.943245 C219.385361,414.790295 237.111033,432.499595 258.975262,432.499595 L314.909964,432.499595 C336.775544,432.499595 354.499865,414.790295 354.499865,392.943245 L354.499865,337.055945 C354.499865,315.210245 336.775544,297.499595 314.909964,297.499595 L258.975262,297.499595 C237.111033,297.499595 219.385361,315.210245 219.385361,337.055945",id:"Fill-2"}}),n("path",{attrs:{d:"M219.385361,67.999865 C219.385361,105.278765 249.632094,135.499865 286.942613,135.499865 C324.253132,135.499865 354.499865,105.278765 354.499865,67.999865 C354.499865,30.720965 324.253132,0.499865 286.942613,0.499865 C249.632094,0.499865 219.385361,30.720965 219.385361,67.999865",id:"Fill-4"}}),n("path",{attrs:{d:"M0.499864885,468.525965 L0.499864885,558.473765 C0.499864885,570.914015 10.5942695,580.999865 23.045071,580.999865 L113.069163,580.999865 C125.519964,580.999865 135.614369,570.914015 135.614369,558.473765 L135.614369,468.525965 C135.614369,456.085715 125.519964,445.999865 113.069163,445.999865 L23.045071,445.999865 C10.5942695,445.999865 0.499864885,456.085715 0.499864885,468.525965",id:"Fill-7"}}),n("path",{attrs:{d:"M0.5,202.0447 L0.5,231.95665 C0.5,260.9749 24.0450534,284.5 53.0892672,284.5 L83.0265878,284.5 C112.06945,284.5 135.614504,260.9749 135.614504,231.95665 L135.614504,202.0447 C135.614504,173.0251 112.06945,149.5 83.0265878,149.5 L53.0892672,149.5 C24.0450534,149.5 0.5,173.0251 0.5,202.0447",id:"Fill-10"}})]),n("linearGradient",{attrs:{x1:"0%",y1:"0%",x2:"100%",y2:"100%",id:"linearGradient-3"}},[n("stop",{attrs:{"stop-color":"#EECC6A",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DE7A7A",offset:"100%"}})],1)],1),n("g",{attrs:{id:"Landing-page",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Bitmap"}},[n("mask",{attrs:{id:"mask-2",fill:"#fff"}},[n("use",{attrs:{"xlink:href":"#path-1"}})]),n("rect",{attrs:{x:"0",y:"0",width:"355",height:"730",fill:"#fff",mask:"url(#mask-2)"}}),n("transition",{attrs:{name:"fade",type:"transition"}},[n("image",{key:t.imageLg,staticClass:"anim-image",attrs:{mask:"url(#mask-2)",x:"-145",y:"0",width:"500",height:"730","xlink:href":t.imageLg}})])],1),n("path",{attrs:{d:"M36.8733231,5 C35.24923,5 33.9326042,6.31662584 33.9326042,7.94071887 L33.9326042,9.61478399 C33.9326042,11.23853 35.24923,12.5555029 36.8733231,12.5555029 L38.5473882,12.5555029 C40.1714812,12.5555029 41.48776,11.23853 41.48776,9.61478399 L41.48776,7.94071887 C41.48776,6.31662584 40.1714812,5 38.5473882,5 L36.8733231,5 Z M18.571391,5 C17.875252,5 17.3109837,5.56461525 17.3109837,6.26075427 L17.3109837,11.2944016 C17.3109837,11.9908876 17.875252,12.5555029 18.571391,12.5555029 L23.6057323,12.5555029 C24.3018714,12.5555029 24.8661396,11.9908876 24.8661396,11.2944016 L24.8661396,6.26075427 C24.8661396,5.56461525 24.3018714,5 23.6057323,5 L18.571391,5 Z M125.591834,5.22660956 L125.591834,15.0457788 C124.348431,13.5240592 122.590732,12.7626788 120.318043,12.7626788 C118.089079,12.7626788 116.245317,13.5507804 114.787798,15.1262894 C113.330279,16.7017985 112.601172,18.6684086 112.601172,21.0264667 C112.601172,23.3845248 113.330279,25.3459295 114.787798,26.9106807 C116.245317,28.4754318 118.089079,29.2579809 120.318043,29.2579809 C122.78368,29.2579809 124.627095,28.3900628 125.848982,26.6535326 L125.848982,28.904359 L129,28.904359 L129,5.22660956 L125.591834,5.22660956 Z M117.42452,24.7240546 C116.502812,23.7596626 116.041612,22.5162597 116.041612,20.9941931 C116.041612,19.4939892 116.502812,18.2609972 117.42452,17.2969522 C118.346227,16.3322132 119.503914,15.8494967 120.897233,15.8494967 C122.183321,15.8494967 123.297976,16.2947341 124.241199,17.184168 C125.184422,18.0736018 125.655687,19.3544838 125.655687,21.0264667 C125.655687,22.7196184 125.189975,24.0008473 124.257163,24.8687654 C123.325044,25.7370305 122.204836,26.1711631 120.897233,26.1711631 C119.503914,26.1711631 118.346227,25.6891406 117.42452,24.7240546 Z M105.978134,28.904359 L109.354374,28.904359 L109.354374,5.22660956 L105.978134,5.22660956 L105.978134,28.904359 Z M89.6601637,15.158216 C88.0846547,16.7552409 87.2965531,18.7114401 87.2965531,21.0264667 C87.2965531,23.3630091 88.100618,25.3192083 89.7087477,26.8947174 C91.3158364,28.4702264 93.3417883,29.2579809 95.7855625,29.2579809 C98.1863051,29.2579809 100.287215,28.4112316 102.087599,26.7177329 L100.480163,24.4027062 C99.0656751,25.6461091 97.5328506,26.267637 95.8816893,26.267637 C94.509886,26.267637 93.3633041,25.9029101 92.4415966,25.1744975 C91.519542,24.4457378 90.9518035,23.4272093 90.73734,22.1196062 L102.505768,22.1196062 C102.6772,21.3693308 102.763263,20.6620869 102.763263,19.9975274 C102.763263,17.9184801 102.071635,16.1927078 100.689074,14.8205574 C99.3065129,13.4491011 97.5647772,12.7626788 95.4642141,12.7626788 C93.1703563,12.7626788 91.2356728,13.5615383 89.6601637,15.158216 Z M92.4256333,16.6695248 C93.2508668,15.9730388 94.2204643,15.6246222 95.3351196,15.6246222 C96.4716377,15.6246222 97.4256188,15.9730388 98.19741,16.6695248 C98.9688542,17.3663579 99.3655077,18.3040287 99.3866764,19.4832313 L90.8015402,19.4832313 C91.0590353,18.3040287 91.6003997,17.3663579 92.4256333,16.6695248 Z M73.0531185,15.2387266 C72.0453479,13.5882595 70.4483231,12.7626788 68.2620441,12.7626788 C66.3537347,12.7626788 64.8320151,13.3845538 63.6961911,14.6279566 L63.6961911,13.1166478 L60.544826,13.1166478 L60.544826,28.904359 L63.9210655,28.904359 L63.9210655,19.5151579 C63.9210655,18.4220184 64.2424138,17.5377899 64.8858045,16.8628197 C65.5288482,16.1875023 66.3648397,15.8494967 67.3937789,15.8494967 C68.4012025,15.8494967 69.2052673,16.1875023 69.8052795,16.8628197 C70.4052916,17.5377899 70.7058182,18.4220184 70.7058182,19.5151579 L70.7058182,28.904359 L74.0817107,28.904359 L74.0817107,19.3544838 C74.0817107,18.3470602 74.4034061,17.5110688 75.0461027,16.8465093 C75.6894934,16.1822969 76.5258319,15.8494967 77.5544242,15.8494967 C78.5621947,15.8494967 79.3603601,16.1822969 79.9499614,16.8465093 C80.5395627,17.5110688 80.8341898,18.4005026 80.8341898,19.5151579 L80.8341898,28.904359 L84.242703,28.904359 L84.242703,19.0331354 C84.242703,17.1466889 83.7225074,15.6298277 82.6828102,14.4832458 C81.6434601,13.3363168 80.2123149,12.7626788 78.3907627,12.7626788 C76.1180735,12.7626788 74.3392058,13.5882595 73.0531185,15.2387266 Z M42.2435879,21.0170969 C42.2435879,23.1037789 43.9350045,24.7948484 46.0213394,24.7948484 C48.1076742,24.7948484 49.7990908,23.1037789 49.7990908,21.0170969 C49.7990908,18.9311091 48.1076742,17.2396925 46.0213394,17.2396925 C43.9350045,17.2396925 42.2435879,18.9311091 42.2435879,21.0170969 Z M27.8353148,17.2396925 C26.6127336,17.2396925 25.6219675,18.2311527 25.6219675,19.4533869 L25.6219675,22.5815011 C25.6219675,23.8040822 26.6127336,24.7948484 27.8353148,24.7948484 L30.963429,24.7948484 C32.1856631,24.7948484 33.1771233,23.8040822 33.1771233,22.5815011 L33.1771233,19.4533869 C33.1771233,18.2311527 32.1856631,17.2396925 30.963429,17.2396925 L27.8353148,17.2396925 Z M9,24.7948484 L16.5555029,24.7948484 L16.5555029,17.2396925 L9,17.2396925 L9,24.7948484 Z",id:"Fill-1",fill:"url(#linearGradient-3)"}})])]):n("svg",{attrs:{viewBox:"0 0 285 346",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("path",{attrs:{d:"M176.000108,269.645188 C176.000108,252.168628 190.175782,238.000108 207.661167,238.000108 L252.393583,238.000108 C269.880049,238.000108 284.054643,252.168628 284.054643,269.645188 L284.054643,314.355028 C284.054643,331.832668 269.880049,346.000108 252.393583,346.000108 L207.661167,346.000108 C190.175782,346.000108 176.000108,331.832668 176.000108,314.355028 L176.000108,269.645188 Z M176,54 C176,24.17688 200.189088,7.10542736e-14 230.027267,7.10542736e-14 C259.865446,7.10542736e-14 284.054535,24.17688 284.054535,54 C284.054535,83.82312 259.865446,108 230.027267,108 C200.189088,108 176,83.82312 176,54 Z M0.972732699,161.063027 C0.972732699,137.847347 19.8023159,119.027267 43.0297187,119.027267 L66.9713619,119.027267 C90.1976841,119.027267 109.027267,137.847347 109.027267,161.063027 L109.027267,184.992587 C109.027267,208.207187 90.1976841,227.027267 66.9713619,227.027267 L43.0297187,227.027267 C19.8023159,227.027267 0.972732699,208.207187 0.972732699,184.992587 L0.972732699,161.063027 Z",id:"path-1"}}),n("linearGradient",{attrs:{x1:"0%",y1:"0%",x2:"100%",y2:"100%",id:"linearGradient-3"}},[n("stop",{attrs:{"stop-color":"#EECC6A",offset:"0%"}}),n("stop",{attrs:{"stop-color":"#DE7A7A",offset:"100%"}})],1)],1),n("g",{attrs:{id:"Landing-page",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Bitmap"}},[n("mask",{attrs:{id:"mask-2",fill:"white"}},[n("use",{attrs:{"xlink:href":"#path-1"}})]),n("rect",{attrs:{x:"0",y:"0",width:"285",height:"346",fill:"#fff",mask:"url(#mask-2)"}}),n("transition",{attrs:{name:"fade"}},[n("image",{key:t.image,staticClass:"anim-image",attrs:{mask:"url(#mask-2)",x:"-145",y:"0",width:"430",height:"346","xlink:href":t.image}})])],1),n("path",{attrs:{d:"M30.8341031,5 C29.5618969,5 28.5305399,6.03124374 28.5305399,7.30331035 L28.5305399,8.61451747 C28.5305399,9.88631227 29.5618969,10.9178278 30.8341031,10.9178278 L32.1454541,10.9178278 C33.4176603,10.9178278 34.4487453,9.88631227 34.4487453,8.61451747 L34.4487453,7.30331035 C34.4487453,6.03124374 33.4176603,5 32.1454541,5 L30.8341031,5 Z M16.4975896,5 C15.9522807,5 15.5102706,5.44223341 15.5102706,5.98748248 L15.5102706,9.93007353 C15.5102706,10.4755944 15.9522807,10.9178278 16.4975896,10.9178278 L20.441157,10.9178278 C20.9864659,10.9178278 21.428476,10.4755944 21.428476,9.93007353 L21.428476,5.98748248 C21.428476,5.44223341 20.9864659,5 20.441157,5 L16.4975896,5 Z M100.33027,5.17749135 L100.33027,12.8683299 C99.3562709,11.676447 97.9794068,11.0800979 96.1991336,11.0800979 C94.4531121,11.0800979 93.0088319,11.6973763 91.8671084,12.9313897 C90.7253848,14.165403 90.1542512,15.7057452 90.1542512,17.552688 C90.1542512,19.3996309 90.7253848,20.935896 91.8671084,22.1614832 C93.0088319,23.3870705 94.4531121,24 96.1991336,24 C98.1305492,24 99.5745576,23.3202054 100.531702,21.9600727 L100.531702,23.7230265 L103,23.7230265 L103,5.17749135 L100.33027,5.17749135 Z M93.9325406,20.4488141 C93.2105364,19.6934566 92.8492624,18.7195645 92.8492624,17.5274098 C92.8492624,16.352379 93.2105364,15.3866413 93.9325406,14.6315556 C94.6545448,13.8759263 95.5613994,13.4978398 96.6528328,13.4978398 C97.6602678,13.4978398 98.5334145,13.8465709 99.2722727,14.5432176 C100.011131,15.2398644 100.380288,16.2431118 100.380288,17.552688 C100.380288,18.8788447 100.01548,19.8823639 99.2847773,20.5621585 C98.5546179,21.2422248 97.6771219,21.582258 96.6528328,21.582258 C95.5613994,21.582258 94.6545448,21.2047152 93.9325406,20.4488141 Z M84.9662052,23.7230265 L87.6109262,23.7230265 L87.6109262,5.17749135 L84.9662052,5.17749135 L84.9662052,23.7230265 Z M72.1837949,12.9563961 C70.9496462,14.2072616 70.3323,15.7394495 70.3323,17.552688 C70.3323,19.3827787 70.9621508,20.9149667 72.2218524,22.14898 C73.4807385,23.3829933 75.0677342,24 76.9820239,24 C78.8626057,24 80.5083186,23.3367858 81.9186189,22.0103574 L80.659461,20.1971188 C79.5514455,21.1710108 78.350733,21.6578209 77.0573233,21.6578209 C75.982744,21.6578209 75.0845882,21.3721496 74.362584,20.8016223 C73.6403079,20.2308232 73.1955794,19.4330634 73.027583,18.4088867 L82.2461849,18.4088867 C82.3804733,17.8212354 82.4478893,17.2672885 82.4478893,16.7467741 C82.4478893,15.1183657 81.9061144,13.766659 80.823108,12.6919258 C79.7401017,11.6177363 78.3757421,11.0800979 76.7303011,11.0800979 C74.9334457,11.0800979 73.4179437,11.7058024 72.1837949,12.9563961 Z M74.3500794,14.1401247 C74.9965124,13.5946039 75.7560303,13.3217075 76.629177,13.3217075 C77.5194495,13.3217075 78.2667347,13.5946039 78.8713045,14.1401247 C79.4756025,14.6859174 79.7863144,15.4203456 79.8028965,16.343953 L73.0778732,16.343953 C73.2795777,15.4203456 73.7036464,14.6859174 74.3500794,14.1401247 Z M59.1749428,13.0194558 C58.3855226,11.7267317 57.1345198,11.0800979 55.4219345,11.0800979 C53.9270922,11.0800979 52.7350785,11.5671798 51.8453497,12.5410718 L51.8453497,11.3573431 L49.3767803,11.3573431 L49.3767803,23.7230265 L52.0215013,23.7230265 L52.0215013,16.3689594 C52.0215013,15.5127607 52.2732242,14.8201911 52.7772135,14.2915224 C53.2809311,13.7625819 53.9357911,13.4978398 54.7417935,13.4978398 C55.5309419,13.4978398 56.1607927,13.7625819 56.6308022,14.2915224 C57.1008118,14.8201911 57.3362243,15.5127607 57.3362243,16.3689594 L57.3362243,23.7230265 L59.9806734,23.7230265 L59.9806734,16.2431118 C59.9806734,15.45405 60.2326681,14.7992618 60.7361138,14.2787474 C61.2401032,13.7585048 61.895235,13.4978398 62.7009656,13.4978398 C63.4903859,13.4978398 64.1156154,13.7585048 64.5774698,14.2787474 C65.0393241,14.7992618 65.2701154,15.4959086 65.2701154,16.3689594 L65.2701154,23.7230265 L67.9401174,23.7230265 L67.9401174,15.9914166 C67.9401174,14.5138623 67.5326308,13.3257847 66.7182014,12.4277274 C65.9040437,11.5293983 64.78298,11.0800979 63.3560974,11.0800979 C61.5758243,11.0800979 60.1823779,11.7267317 59.1749428,13.0194558 Z M35.0408105,17.5453492 C35.0408105,19.1797373 36.3657535,20.5042631 38.0000492,20.5042631 C39.6343448,20.5042631 40.9592878,19.1797373 40.9592878,17.5453492 C40.9592878,15.9115047 39.6343448,14.5867071 38.0000492,14.5867071 C36.3657535,14.5867071 35.0408105,15.9115047 35.0408105,17.5453492 Z M23.7543299,14.5867071 C22.7966413,14.5867071 22.0205412,15.3632657 22.0205412,16.3205774 L22.0205412,18.7706646 C22.0205412,19.7282481 22.7966413,20.5042631 23.7543299,20.5042631 L26.204686,20.5042631 C27.1621028,20.5042631 27.9387466,19.7282481 27.9387466,18.7706646 L27.9387466,16.3205774 C27.9387466,15.3632657 27.1621028,14.5867071 26.204686,14.5867071 L23.7543299,14.5867071 Z M9,20.5042631 L14.9184772,20.5042631 L14.9184772,14.5867071 L9,14.5867071 L9,20.5042631 Z",id:"Fill-1",fill:"url(#linearGradient-3)"}})])])},s=[],c={name:"Logo",props:["large","image","imageLg"]},l=c,u=(n("ac45"),n("2877")),f=Object(u["a"])(l,o,s,!1,null,"0e4e7030",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"dots-nav"},t._l(t.count,function(e,a){return n("button",{key:e,class:{active:a===t.active},on:{click:function(e){t.$emit("change",a)}}})}))},m=[],C={name:"DotsNav",props:["active","count"],model:{prop:"active",event:"change"}},g=C,h=(n("644f"),Object(u["a"])(g,d,m,!1,null,"1998820a",null)),v=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"primary-nav"},[n("a",{attrs:{href:"https://github.com/MelbourneMintOS",target:"_blank"}},[t._v("Developer portal")])])}],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-switch"},[n("input",{attrs:{id:t.uniqueId,type:"checkbox"},domProps:{checked:t.value},on:{change:t.onChange}}),n("label",{attrs:{for:t.uniqueId}})])},w=[],k={name:"CustomSwitch",props:["value"],methods:{onChange:function(t){this.$emit("change",t.target.checked)}},created:function(){this.uniqueId="switch_".concat(this._uid)}},x=k,_=(n("081a"),Object(u["a"])(x,y,w,!1,null,"2f3f5b3b",null)),M=_.exports,j={name:"PrimaryNav",data:function(){return{crypto:!1}},components:{CustomSwitch:M}},Z=j,E=(n("b6be"),Object(u["a"])(Z,b,L,!1,null,"8288ecd0",null)),S=E.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"footer-nav"},[a("p",[t._v("\n    Proud partner of "),a("a",{attrs:{href:"https://www.melbournemint.com.au/",target:"_blank"}},[t._v("Melbourne Mint")]),a("br"),a("a",{attrs:{href:"#"}},[t._v("Terms")]),t._v(" / "),a("a",{attrs:{href:"https://www.melbournemint.com.au/Privacy"}},[t._v("Privacy")])]),a("a",{attrs:{href:"https://www.melbournemint.com.au/",target:"_blank"}},[a("img",{attrs:{src:n("4b93")}})])])}],I={name:"FooterNav"},P=I,$=(n("c5e0"),Object(u["a"])(P,A,O,!1,null,"41b04e79",null)),F=$.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-content"},[n("transition",{attrs:{name:"fade-up",mode:"out-in",appear:""}},[n("h1",{key:t.title},[t._v(t._s(t.title))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("transition",{attrs:{name:"fade-up",mode:"out-in"}},[n("p",{key:t.description},[t._v(t._s(t.description))])])],1),n("div",{staticClass:"col"},[n("subscribe-form")],1)])],1)},T=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{class:{subscribed:t.subscribed},attrs:{action:"https://marisakatedesigns.us8.list-manage.com/subscribe/post?u=96bfd45008fac9d154cdb7003&id=43858971c6",method:"post"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("p",[t._v("Token sale launching November 2018. Sign up to receive updates:")]),n("input",{attrs:{name:"EMAIL",type:"email",placeholder:"Email address",autocomplete:"email",required:""}}),n("transition",{attrs:{mode:"out-in"}},[t.submitting?n("div",{staticClass:"loading"}):n("button",{attrs:{type:"submit"}},[t.subscribed?n("span",[t._v("Thank You!")]):n("span",[t._v("Notify Me")])])])],1)},B=[],q=(n("96cf"),n("3040")),G={name:"SubscribeForm",data:function(){return{submitting:!1,subscribed:!1}},methods:{onSubmit:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.submitting=!0,t.prev=1,t.next=4,fetch(e.target.action,{method:"POST",mode:"no-cors",body:new FormData(e.target)});case 4:this.subscribed=!0,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),alert("Network error, please try again.");case 10:this.submitting=!1;case 11:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}},J=G,R=(n("2ddc"),Object(u["a"])(J,D,B,!1,null,"24f9a0a5",null)),W=R.exports,Y={name:"AppContent",props:["title","description"],components:{SubscribeForm:W}},z=Y,H=(n("e2a4"),Object(u["a"])(z,N,T,!1,null,"33eb5380",null)),K=H.exports,Q=[{title:"The future of currency has arrived",description:"Meld is a gold-backed digital currency that’s safe, stable and supported by an open network of partners, enabling anyone to reap the benefits of gold and take ownership of their wealth.",image:n("271a"),imageLg:n("3b99"),colour:"#DE7A7A"},{title:"Solidity\r\nmeets liquidity.",description:"Nothing’s more stable than gold – it can’t be made, printed or inflated. By digitising this precious metal and allowing anyone to pay for absolutely anything with it, Meld is set to become a truly global currency.",image:n("5f0b"),imageLg:n("586f"),colour:"#81C5CA"},{title:"Established, not the establishment",description:"As a private entity, rather than public, Melbourne Mint are creating a decentralised currency that’s supported by an expanding network of gold partners, making it fairer and more transparent for everyone involved.",image:n("6d41"),imageLg:n("3d47"),colour:"#DBB394"}],U={name:"App",data:function(){return{active:0,preloadImages:[],lg:!0}},computed:{activeState:function(){return Q[this.active]}},methods:{nextState:function(){Q[this.active+1]?this.active++:this.active=0},setActiveInterval:function(){this._activeInterval=setInterval(this.nextState.bind(this),1e4)},clearActiveInterval:function(){clearInterval(this._activeInterval)}},created:function(){this.setActiveInterval()},beforeMount:function(){var t=this;this.lg=window.innerWidth>=1e3,this.preloadImages=Q.map(function(e){return t.lg?e.imageLg:e.image})},beforeDestroy:function(){this.clearActiveInterval()},components:{Logo:p,DotsNav:v,PrimaryNav:S,FooterNav:F,AppContent:K}},V=U,X=(n("a0de"),Object(u["a"])(V,r,i,!1,null,"3b172549",null)),tt=X.exports;n("f5df"),n("db39");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(tt)}}).$mount("#app"),"undefined"===typeof window.fetch&&n.e("fetch").then(n.t.bind(null,"6d93",7))},"586f":function(t,e,n){t.exports=n.p+"img/logo-bg-2-lg.3c34003b.jpg"},"5f0b":function(t,e,n){t.exports=n.p+"img/logo-bg-2.00247ae3.jpg"},"644f":function(t,e,n){"use strict";var a=n("335a"),r=n.n(a);r.a},"6d41":function(t,e,n){t.exports=n.p+"img/logo-bg-3.574038bd.jpg"},"8b0b":function(t,e,n){},a0de:function(t,e,n){"use strict";var a=n("fa42"),r=n.n(a);r.a},ac45:function(t,e,n){"use strict";var a=n("8b0b"),r=n.n(a);r.a},b6be:function(t,e,n){"use strict";var a=n("1a26"),r=n.n(a);r.a},c5e0:function(t,e,n){"use strict";var a=n("f2a4"),r=n.n(a);r.a},d4b3:function(t,e,n){},db39:function(t,e,n){},e2a4:function(t,e,n){"use strict";var a=n("eeff"),r=n.n(a);r.a},eb42:function(t,e,n){},eeff:function(t,e,n){},f2a4:function(t,e,n){},fa42:function(t,e,n){}});
//# sourceMappingURL=app.1d635839.js.map