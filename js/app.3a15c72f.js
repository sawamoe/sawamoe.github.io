(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-12d2eb05":"2417451a","chunk-2d0cfab8":"aa5edb45","chunk-4ab53148":"2c4b0b33"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-12d2eb05":1,"chunk-4ab53148":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-12d2eb05":"77fb3e61","chunk-2d0cfab8":"31d6cfe0","chunk-4ab53148":"ccae2aeb"}[t]+".css",r=c.p+s,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===r))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===s||d===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0915":function(t,e,a){"use strict";a("cef4")},"0a99":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{staticClass:"me"},[s("h1",[t._v("Me")]),s("p",[t._v("大阪府在住。"),s("br"),t._v(" 大学では心理学を学び、卒業後は一般事務をしておりました。"),s("br"),s("span",{staticClass:"keikou"},[t._v("2021年12月より")]),t._v("ゼロからプログラミングを学び始めた駆け出しです。"),s("br")]),s("img",{staticClass:"animate__animated animate__bounce animate__infinite",attrs:{id:"look",src:a("55cb"),alt:"ルック"}}),s("div",{staticClass:"appeal"},[s("h2",[t._v("アピールしたい３つのポイント")]),s("v-container",[s("v-row",{attrs:{dense:""}},t._l(t.items,(function(e){return s("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",color:e.color}},[s("v-img",{attrs:{src:e.img,height:"200px"}}),s("v-card-title",[t._v(" "+t._s(e.title)+" ")]),s("v-card-subtitle",[t._v(" "+t._s(e.subtitle)+" ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[s("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),s("v-expand-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[s("v-divider"),s("v-card-text",[t._v(" "+t._s(e.text)+" ")])],1)])],1)],1)})),1)],1)],1)])])},n=[],r={data:function(){return{show:!1,items:[{id:1,color:"#e86863",img:a("690f"),title:"向上心",subtitle:"ゼロから始めて２ヶ月でここまで作り上げました！",text:"訓練校だけの学習だけでなく、Udemyを使った自宅学習を毎日１〜２時間ほどしています。今学んでいる言語を十分に使いこなせるようになったら、新しい言語やフレームワークも覚えていきたいです。"},{id:2,color:"#FDEE82",img:a("d43c"),title:"協調性",subtitle:"今までもこれからもチームワークを大切にしていきます！",text:"前職や学校での部活動などでは、グループの調整役でした。良い仕事や人生は人間関係からだと考えておりますので、良いご縁を頂いた後も大切にしていきたいです。"},{id:3,color:"#85caea",img:a("24c6"),title:"顧客目線",subtitle:"経験を活かしてお客さま目線で考えることができます！",text:"接客の経験が多いので、お客さまに寄り添った対応ができます。今後もクライアント様の意見を大切にして仕事をこなしたいです。"}]}}},i=r,o=(a("33c1"),a("2877")),c=a("6544"),l=a.n(c),d=a("7496"),u=a("8336"),f=a("b0af"),v=a("99d9"),b=a("62ad"),p=a("a523"),m=a("ce7e"),h=a("0789"),g=a("132d"),w=a("adda"),C=a("0fd9"),j=a("2fa4"),_=Object(o["a"])(i,s,n,!1,null,"1a09ab6b",null);e["default"]=_.exports;l()(_,{VApp:d["a"],VBtn:u["a"],VCard:f["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:b["a"],VContainer:p["a"],VDivider:m["a"],VExpandTransition:h["a"],VIcon:g["a"],VImg:w["a"],VRow:C["a"],VSpacer:j["a"]})},"0e07":function(t,e,a){},1617:function(t,e,a){t.exports=a.p+"img/vuelogo.82b9c7a5.png"},2351:function(t,e,a){},"24b5":function(t,e,a){t.exports=a.p+"img/stream.1d511fed.png"},"24c6":function(t,e,a){t.exports=a.p+"img/customer.7a6e2246.jpg"},"24fb":function(t,e,a){},"2a25":function(t,e,a){"use strict";a("c2e6")},"33c1":function(t,e,a){"use strict";a("24fb")},"33e5":function(t,e,a){},"38c2":function(t,e,a){t.exports=a.p+"img/corgi.63829375.gif"},"3b25":function(t,e,a){"use strict";a("33e5")},"3f2f":function(t,e,a){t.exports=a.p+"img/Excellogo.682a5c3e.png"},4617:function(t,e,a){t.exports=a.p+"img/tellogo.14d13c84.png"},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"4b3c":function(t,e,a){t.exports=a.p+"img/mail.ce3ebf68.png"},"4fe8":function(t,e,a){"use strict";a("b4fc")},5152:function(t,e,a){"use strict";a("e0b7")},"518e":function(t,e,a){},"54d1":function(t,e,a){"use strict";a("518e")},"55cb":function(t,e,a){t.exports=a.p+"img/look.cdb028d9.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={components:{}},o=i,c=(a("9293"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,"1295055c",null),d=l.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"bgImg"},[s("Header"),s("div",{staticClass:"container",attrs:{id:"top"}},[s("h1",{attrs:{id:"title_back"}},[s("br"),t._v("Moemi Sawada"),s("br"),t._v("Portfolio Site")]),s("div",{staticClass:"dog"},[s("Kanbanken")],1)]),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 189.46666666666664,181.6 378.9333333333333,163.2 555,150 C 731.0666666666667,136.8 893.7333333333333,128.8 1039,138 C 1184.2666666666667,147.2 1312.1333333333332,173.6 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),s("div",{staticClass:"container bgY",attrs:{id:"about"}},[s("About")],1),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 65.99230769230766,208.4871794871795 131.98461538461532,216.97435897435898 220,195 C 308.0153846153847,173.02564102564102 418.05384615384617,120.58974358974356 511,128 C 603.9461538461538,135.41025641025644 679.7999999999998,202.66666666666669 747,212 C 814.2000000000002,221.33333333333331 872.7461538461541,172.74358974358972 957,163 C 1041.2538461538459,153.25641025641028 1151.2153846153844,182.35897435897436 1236,195 C 1320.7846153846156,207.64102564102564 1380.392307692308,203.82051282051282 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 82.48803827751198,166.14354066985646 164.97607655502395,132.2870813397129 263,135 C 361.02392344497605,137.7129186602871 474.5837320574162,176.9952153110048 572,192 C 669.4162679425838,207.0047846889952 750.688995215311,197.73205741626793 842,187 C 933.311004784689,176.26794258373207 1034.6602870813397,164.07655502392345 1136,166 C 1237.3397129186603,167.92344497607655 1338.6698564593303,183.96172248803828 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),s("div",{staticClass:"container bgY",attrs:{id:"me"}},[s("Me")],1),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 124.16267942583733,181.07177033492823 248.32535885167465,162.14354066985646 333,157 C 417.67464114832535,151.85645933014354 462.8612440191388,160.49760765550238 550,177 C 637.1387559808612,193.50239234449762 766.2296650717703,217.866028708134 883,218 C 999.7703349282297,218.133971291866 1104.22009569378,194.0382775119617 1195,187 C 1285.77990430622,179.9617224880383 1362.88995215311,189.98086124401914 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 89.25358851674642,218.7846889952153 178.50717703349284,237.5693779904306 285,247 C 391.49282296650716,256.4306220095694 515.2248803827752,256.50717703349284 626,253 C 736.7751196172248,249.49282296650716 834.5933014354067,242.40191387559807 910,231 C 985.4066985645933,219.59808612440193 1038.401913875598,203.88516746411486 1123,198 C 1207.598086124402,192.11483253588514 1323.799043062201,196.05741626794259 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),s("div",{staticClass:"container bgY",attrs:{id:"think"}},[s("Think")],1),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 91.23444976076553,228.07655502392345 182.46889952153106,256.1531100478469 275,245 C 367.53110047846894,233.8468899521531 461.3588516746412,183.46411483253593 552,172 C 642.6411483253588,160.53588516746407 730.0956937799043,187.99043062200954 818,189 C 905.9043062200957,190.00956937799046 994.2583732057417,164.57416267942585 1098,162 C 1201.7416267942583,159.42583732057415 1320.870813397129,179.71291866028707 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 114.46889952153111,225.8468899521531 228.93779904306223,251.6937799043062 333,244 C 437.0622009569378,236.3062200956938 530.7177033492821,195.0717703349282 626,173 C 721.2822966507179,150.9282296650718 818.1913875598087,148.01913875598086 915,174 C 1011.8086124401913,199.98086124401914 1108.5167464114832,254.8516746411483 1196,264 C 1283.4832535885168,273.1483253588517 1361.7416267942585,236.57416267942585 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),s("div",{staticClass:"container bgY",attrs:{id:"skills"}},[s("Skills")],1),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 82.83253588516746,180.4976076555024 165.66507177033492,160.99521531100478 265,182 C 364.3349282296651,203.00478468899522 480.17224880382787,264.51674641148327 596,271 C 711.8277511961721,277.48325358851673 827.645933014354,228.9377990430622 917,210 C 1006.354066985646,191.0622009569378 1069.244019138756,201.73205741626793 1152,205 C 1234.755980861244,208.26794258373207 1337.377990430622,204.13397129186603 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),s("div",{staticClass:"container",attrs:{id:"portfolio"}},[s("Portfolio")],1),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 75.4736842105263,164.41148325358853 150.9473684210526,128.82296650717703 262,130 C 373.0526315789474,131.17703349282297 519.6842105263158,169.11961722488041 616,201 C 712.3157894736842,232.88038277511959 758.3157894736842,258.6985645933014 838,264 C 917.6842105263158,269.3014354066986 1031.0526315789475,254.08612440191388 1137,240 C 1242.9473684210525,225.91387559808612 1341.4736842105262,212.95693779904306 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),s("div",{staticClass:"container bgY",attrs:{id:"contact"}},[s("img",{attrs:{id:"mail",src:a("4b3c"),alt:"メール"}}),s("Contact")],1),s("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 84.88995215311004,190.42105263157896 169.7799043062201,180.8421052631579 271,166 C 372.2200956937799,151.1578947368421 489.77033492822966,131.05263157894737 575,139 C 660.2296650717703,146.94736842105263 713.1387559808611,182.94736842105263 812,208 C 910.8612440191389,233.05263157894737 1055.6746411483255,247.15789473684214 1168,244 C 1280.3253588516745,240.84210526315786 1360.1626794258373,220.42105263157893 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),s("div",{attrs:{id:"snsLink"}},[s("a",{attrs:{href:"https://twitter.com/sawaweb"}},[s("img",{attrs:{src:a("7932"),alt:"Twitterのロゴ"}})]),s("a",{attrs:{href:"https://github.com/sawamoe"}},[s("img",{attrs:{src:a("5b8c"),alt:"gitHubのロゴ"}})])])],1)},v=[],b=a("7fb6"),p=a("f820"),m=a("0a99"),h=a("6e2e"),g=a("ad83"),w=a("c9e5"),C=a("b8fa"),j={components:{Kanbanken:b["default"],About:p["default"],Me:m["default"],Think:h["default"],Skills:g["default"],Portfolio:w["default"],Contact:C["default"]},data:function(){return{show:!1}}},_=j,x=(a("0915"),a("6544")),k=a.n(x),y=a("7496"),V=Object(c["a"])(_,f,v,!1,null,"0ae7262e",null),T=V.exports;k()(V,{VApp:y["a"]}),s["a"].use(u["a"]);var P=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/me",name:"Me",component:function(){return Promise.resolve().then(a.bind(null,"0a99"))}},{path:"/think",name:"Think",component:function(){return Promise.resolve().then(a.bind(null,"6e2e"))}},{path:"/skills",name:"Skills",component:function(){return Promise.resolve().then(a.bind(null,"ad83"))}},{path:"/portfolio",name:"Portfolio",component:function(){return Promise.resolve().then(a.bind(null,"c9e5"))}},{path:"/contact",name:"Contact",component:function(){return Promise.resolve().then(a.bind(null,"b8fa"))}},{path:"/donburi",name:"Donburi",component:function(){return a.e("chunk-4ab53148").then(a.bind(null,"e25c"))}},{path:"/kanbanken",name:"Kanbanken",component:function(){return Promise.resolve().then(a.bind(null,"7fb6"))}},{path:"/timedifference",name:"TimeDifference",component:function(){return a.e("chunk-12d2eb05").then(a.bind(null,"e5df"))}},{path:"/twitterInfo",name:"twitterInfo",component:function(){return a.e("chunk-2d0cfab8").then(a.bind(null,"6569"))}}],E=new u["a"]({mode:"history",base:"/",routes:P,scrollBehavior:function(t,e,a){return a?new Promise((function(t){setTimeout((function(){t(a)}),500)})):{x:0,y:0}}}),O=E,S=a("bc3a"),M=a.n(S),z=a("130e"),H=(a("619b"),a("f309"));s["a"].use(H["a"]);var A={primary:"#FF9F00",secondary:"#ffc107",accent:"#3f51b5",error:"#e91e63",warning:"#f44336",info:"#2196f3",success:"#4caf50"},I=new H["a"]({theme:{themes:{light:A,dark:A}}}),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:""}},[a("v-tabs",{attrs:{"background-color":"grey darken-2",centered:"","icons-and-text":"","show-arrows":""}},[a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{to:"/",exact:""}},[t._v(" TOP "),a("span",{staticClass:"material-icons"},[t._v("home")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{to:"/#about"}},[t._v(" About "),a("span",{staticClass:"material-icons"},[t._v("info")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#me",expression:"'#me'"}],attrs:{to:"/#me"}},[t._v(" Me "),a("span",{staticClass:"material-icons"},[t._v("face")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#think",expression:"'#think'"}],attrs:{to:"/#think"}},[t._v(" I think... "),a("span",{staticClass:"material-icons"},[t._v("textsms")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],attrs:{to:"/#skills"}},[t._v(" Skills "),a("span",{staticClass:"material-icons"},[t._v("work")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{to:"/#portfolio"}},[t._v(" Portfolio "),a("span",{staticClass:"material-icons"},[t._v("perm_media")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{to:"/#contact"}},[t._v(" Contact "),a("span",{staticClass:"material-icons"},[t._v("email")])])],1)],1)],1),a("router-view")],1)},N=[],D=a("40dc"),L=a("71a3"),$=a("fe57"),Z={},F=Object(c["a"])(Z,B,N,!1,null,null,null),U=F.exports;k()(F,{VApp:y["a"],VAppBar:D["a"],VTab:L["a"],VTabs:$["a"]});var R=a("f13c"),Y=a.n(R),q=a("77ed"),J=a.n(q),K=a("c1df"),W=a.n(K),G=a("7397");s["a"].config.productionTip=!1,s["a"].use(z["a"],M.a,J.a),s["a"].component("Header",U),s["a"].use(Y.a,{duration:1e3,easing:"ease",offset:-60}),new s["a"]({router:O,vuetify:I,VueScrollTo:Y.a,moment:W.a,Tweet:G["Tweet"],Moment:G["Moment"],Timeline:G["Timeline"],render:function(t){return t(d)}}).$mount("#app")},"5b8c":function(t,e,a){t.exports=a.p+"img/gitHubLogo.ef7a02b6.png"},"690f":function(t,e,a){t.exports=a.p+"img/power.db946fc5.jpg"},"6e2e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticClass:"animate__animated animate__heartBeat animate__infinite",attrs:{id:"kumohukidashi",src:a("a3c3"),alt:"ふきだし"}}),s("h1",[t._v("I Think...")]),s("p",[t._v("事務職をしていた際にSEの方と仕事をご一緒させていただき、"),s("br"),t._v(" お客様の要望をすぐにシステムに反映する姿に感銘を受け、IT業界に興味を抱きました。"),s("br"),t._v(" なかでも毎日触れるホームページやWEBアプリに携わりたいとフロントエンドエンジニアを志しました。"),s("br"),s("br"),t._v(" 訓練校と自宅学習で毎日楽しく学んでおり、やる気はいっぱいです！"),s("br"),t._v(" 至らぬところも多いですが、およそ"),s("span",{staticClass:"keikou"},[t._v("２ヶ月（2022年1月末 時点）の伸びしろ")]),t._v("をご覧いただけましたら幸いです！"),s("br"),t._v(" どうぞよろしくお願いいたします。 ")])])}],r=(a("5152"),a("2877")),i={},o=Object(r["a"])(i,s,n,!1,null,"21494c6e",null);e["default"]=o.exports},7932:function(t,e,a){t.exports=a.p+"img/twitterLogo.072692aa.png"},"7fb6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{staticClass:"dogArea"},[s("v-row",{staticClass:"greeting"},[s("v-col",{attrs:{cols:"6"}},[s("p",[t._v(t._s(t.nowTime)+"です！")]),s("p",[t._v(t._s(t.greeting))]),s("img",{staticClass:"fukidashiImg",attrs:{src:a("cfa0"),alt:"ふきだし"}})]),s("v-col",{attrs:{cols:"6"}},[s("img",{staticClass:"dogImg",attrs:{src:a("38c2"),alt:"看板犬"}})])],1)],1)],1)},n=[],r=(a("99af"),a("fb6a"),{data:function(){return{greeting:"",nowTime:"",nowHours:""}},created:function(){setInterval(this.nowDay,800)},watch:{nowHours:function(){0<=this.nowHours&&this.nowHours<=5?this.greeting="夜更かしですか？ゆっくり休んでくださいね":6<=this.nowHours&&this.nowHours<=9?this.greeting="おはようございます！今日も一日頑張りましょう":10<=this.nowHours&&this.nowHours<=14?this.greeting="こんにちは！お昼は何を食べますか？":15==this.nowHours?this.greeting="ちょっと休憩しませんか？おやつを食べてリフレッシュ！":16<=this.nowHours&&this.nowHours<=20?this.greeting="こんばんは！今日も一日お疲れ様でした":21<=this.nowHours&&this.nowHours<=23?this.greeting="おやすみなさい。一日の疲れを癒しましょう":this.greeting="お疲れ様です！"}},methods:{nowDay:function(){var t=new Date;this.nowTime="".concat(("0"+t.getHours()).slice(-2),":").concat(("0"+t.getMinutes()).slice(-2)),this.nowHours=t.getHours()}}}),i=r,o=(a("54d1"),a("2877")),c=a("6544"),l=a.n(c),d=a("7496"),u=a("62ad"),f=a("a523"),v=a("0fd9"),b=Object(o["a"])(i,s,n,!1,null,"7b3c808e",null);e["default"]=b.exports;l()(b,{VApp:d["a"],VCol:u["a"],VContainer:f["a"],VRow:v["a"]})},9293:function(t,e,a){"use strict";a("2351")},"952f":function(t,e,a){t.exports=a.p+"img/gyudon1.cc1cf24c.png"},a3c3:function(t,e,a){t.exports=a.p+"img/kumohukidashi.2df00129.png"},a7dd:function(t,e,a){"use strict";a("0e07")},a85c:function(t,e,a){t.exports=a.p+"img/HTMLlogo.2e4ed85a.png"},ad83:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("h1",[t._v("Skills")]),a("v-container",[a("v-row",{attrs:{dense:""}},t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-2",attrs:{size:"100",tile:""}},[a("v-img",{attrs:{src:e.src}})],1),a("div",[a("v-card-title",{domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.text)}})],1)],1)])],1)})),1),a("v-row",{attrs:{dense:""}},t._l(t.otherItems,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-2",attrs:{size:"100",tile:""}},[a("v-img",{attrs:{src:e.src}})],1),a("div",[a("v-card-title",{domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.text)}})],1)],1)])],1)})),1)],1)],1)},n=[],r={data:function(){return{items:[{color:"#2b81bf",src:a("a85c"),title:"HTML",text:"基礎的なページ作成"},{color:"#2b81bf",src:a("f750"),title:"CSS",text:"ページのレイアウト、装飾等"},{color:"#2b81bf",src:a("f899"),title:"JavaScript",text:"条件分岐、繰り返し、関数等の基礎。HTMLへの動的な書き換え"},{color:"#2b81bf",src:a("1617"),title:"Vue.js",text:"Vue router、Vuex、Vuetifyを利用した単一ファイルコンポーネントでのページ作成"}],otherItems:[{color:"#2bbcab",src:a("3f2f"),title:"Excel",text:"集計、表・グラフ、関数計算、テーブル等。業務で使用経験あり"},{color:"#2bbcab",src:a("edde"),title:"Word",text:"図表・グラフ挿入等。業務で使用経験あり"},{color:"#2bbcab",src:a("dfa3"),title:"PowerPoint",text:"図表作成、アニメーション等を使用。大学にてプレゼンテーションの経験あり"},{color:"#2bbcab",src:a("4617"),title:"その他事務スキル",text:"電話・窓口対応、書類作成など"},{color:"#b7bc2b",src:a("c025"),title:"イラスト作成",text:"CLIP STUDIO PAINTでのイラスト作成。figmaでのイメージ図の作成"}]}}},i=r,o=(a("2a25"),a("2877")),c=a("6544"),l=a.n(c),d=a("7496"),u=a("8212"),f=a("b0af"),v=a("99d9"),b=a("62ad"),p=a("a523"),m=a("adda"),h=a("0fd9"),g=Object(o["a"])(i,s,n,!1,null,"6819c030",null);e["default"]=g.exports;l()(g,{VApp:d["a"],VAvatar:u["a"],VCard:f["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VCol:b["a"],VContainer:p["a"],VImg:m["a"],VRow:h["a"]})},b4fc:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Contact")]),a("p",[t._v("御用の方はお気軽に下記のメールアドレスまでご連絡ください")]),a("p",[t._v("web.class.sawa@gmail.com")])])}],r=(a("a7dd"),a("2877")),i={},o=Object(r["a"])(i,s,n,!1,null,"05b80e2c",null);e["default"]=o.exports},c025:function(t,e,a){t.exports=a.p+"img/penlogo.4b817d47.png"},c2e6:function(t,e,a){},c9e5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("h1",[t._v("Portfolio")])]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"450"}},[s("v-img",{staticClass:"align-end ",attrs:{height:"200px",src:a("f7ca")}},[s("v-card-title",[t._v("ポートフォリオサイト")])],1),s("v-card-text",{staticClass:"text--primary"},[s("p",[t._v("このサイトです。"),s("br"),s("br"),t._v(" Vue.jsで作成しました。"),s("br"),t._v(" Vue Routerを用いてシングルページアプリケーションにしています。"),s("br"),s("br"),t._v(" 他のアプリもスマホを意識し、レスポンシブに対応しています。")])])],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"450"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:a("38c2")}},[s("v-card-title",[t._v("看板犬")])],1),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("制作期間：約１週間")]),s("br"),s("p",[t._v("トップでお出迎えをしてくれている犬です。"),s("br"),t._v(" 時間によって挨拶が変わります。"),s("br"),t._v(" CLIP STUDIOにてgifイラストを自作しました。")])]),s("v-card-actions",[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{color:"orange",text:"",outlined:"",to:"/"}},[t._v(" Check! ")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"450"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:a("952f")}},[s("v-card-title",[t._v("どんぶり勘定計算機")])],1),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("制作期間：約３週間")]),s("br"),s("div",[t._v("入力した金額をどんぶり一杯分の値段に変換します。")]),s("div",[t._v("散財を防ぎましょう！")])]),s("v-card-actions",[s("v-btn",{attrs:{to:"/donburi",color:"orange",text:"",outlined:""}},[t._v(" Check! ")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"450"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:a("24b5")}},[s("v-card-title",[t._v("海外配信時差チェック")])],1),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("制作期間：約４週間")]),s("br"),s("div",[t._v("APIを取得し、海外ストリーマーの配信予定時刻の時差を日本時間に変換します")]),s("div",[t._v("見逃しを防ぎましょう！")])]),s("v-card-actions",[s("v-btn",{attrs:{to:"/TimeDifference",color:"orange",text:""}},[t._v(" Check! ")])],1)],1)],1)],1)],1)],1)},n=[],r=(a("3b25"),a("2877")),i=a("6544"),o=a.n(i),c=a("7496"),l=a("8336"),d=a("b0af"),u=a("99d9"),f=a("62ad"),v=a("a523"),b=a("adda"),p=a("0fd9"),m={},h=Object(r["a"])(m,s,n,!1,null,"76c1e27b",null);e["default"]=h.exports;o()(h,{VApp:c["a"],VBtn:l["a"],VCard:d["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:f["a"],VContainer:v["a"],VImg:b["a"],VRow:p["a"]})},cef4:function(t,e,a){},cfa0:function(t,e,a){t.exports=a.p+"img/fukidashi.1b57ee4d.png"},d43c:function(t,e,a){t.exports=a.p+"img/friendly.9b1af83b.jpg"},dfa3:function(t,e,a){t.exports=a.p+"img/Powerpointlogo.b9532431.png"},e0b7:function(t,e,a){},edde:function(t,e,a){t.exports=a.p+"img/Wordlogo.d55b4ad4.png"},f750:function(t,e,a){t.exports=a.p+"img/CSSlogo.96b0bd9f.png"},f7ca:function(t,e,a){t.exports=a.p+"img/toppic.3a288e08.png"},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("About")]),a("p",[t._v("お越しいただきありがとうございます。"),a("br"),t._v(" こちらは澤田萌美（さわだもえみ）のポートフォリオサイトです。"),a("br"),t._v(" 勉強したスキルと制作物を掲載しています。"),a("br"),t._v(" どうぞごゆっくりご回覧ください。"),a("br")])])}],r=(a("4fe8"),a("2877")),i={},o=Object(r["a"])(i,s,n,!1,null,"511f4b1f",null);e["default"]=o.exports},f899:function(t,e,a){t.exports=a.p+"img/JavaScriptlogo.319356ec.png"}});
//# sourceMappingURL=app.3a15c72f.js.map