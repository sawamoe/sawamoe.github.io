(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},n={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-effdef7c":"8223e396"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-effdef7c":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-effdef7c":"517e2818"}[t]+".css",n=c.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===s||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete r[t],f.parentNode.removeChild(f),a(o)},f.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,a[1](d)}n[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a99":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("h1",[t._v("Me")]),a("p",[t._v("大阪府在住。"),a("br"),t._v(" 大学では心理学を学び、卒業後は一般事務をしておりました。"),a("br"),a("span",{staticClass:"keikou"},[t._v("2021年12月より")]),t._v("ゼロからプログラミングを学び始めた駆け出しです。"),a("br")]),a("div",{staticClass:"appeal"},[a("h2",[t._v("アピールしたい３つのこと")]),a("v-container",[a("v-row",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",color:e.color}},[a("v-img",{attrs:{src:e.img,height:"200px"}}),a("v-card-title",[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(e.subtitle)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" "+t._s(e.text)+" ")])],1)])],1)],1)})),1)],1)],1)])},r=[],n={data:function(){return{show:!1,items:[{id:1,color:"#e86863",img:a("690f"),title:"向上心",subtitle:"ゼロから始めて２ヶ月でここまで作り上げました！",text:"訓練校だけの学習だけでなく、Udemyを使った自宅学習を毎日１〜２時間ほどしています。今学んでいる言語を十分に使いこなせるようになったら、新しい言語やフレームワークも覚えていきたいです。"},{id:2,color:"#FDEE82",img:a("d43c"),title:"協調性",subtitle:"今までもこれからもチームワークを大切にしていきます！",text:"前職や学校での部活動などでは、グループの調整役でした。良い仕事や人生は人間関係からだと考えておりますので、良いご縁を頂いた後も大切にしていきたいです。"},{id:3,color:"#85caea",img:a("24c6"),title:"顧客目線",subtitle:"経験を活かしてお客さま目線で考えることができます！",text:"接客の経験が多いので、お客さまに寄り添った対応ができます。今後もクライアント様の意見を大切にして仕事をこなしたいです。"}]}}},o=n,i=(a("6acf"),a("2877")),c=a("6544"),l=a.n(c),u=a("7496"),d=a("8336"),f=a("b0af"),v=a("99d9"),p=a("62ad"),h=a("a523"),m=a("ce7e"),g=a("0789"),b=a("132d"),C=a("adda"),w=a("0fd9"),x=a("2fa4"),_=Object(i["a"])(o,s,r,!1,null,"c80f9aaa",null);e["default"]=_.exports;l()(_,{VApp:u["a"],VBtn:d["a"],VCard:f["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:p["a"],VContainer:h["a"],VDivider:m["a"],VExpandTransition:g["a"],VIcon:b["a"],VImg:C["a"],VRow:w["a"],VSpacer:x["a"]})},"0c08":function(t,e,a){"use strict";a("0cfa")},"0cfa":function(t,e,a){},"0f09":function(t,e,a){"use strict";a("a922")},1617:function(t,e,a){t.exports=a.p+"img/vuelogo.82b9c7a5.png"},2351:function(t,e,a){},"247b":function(t,e,a){"use strict";a("3e82")},"24c6":function(t,e,a){t.exports=a.p+"img/customer.7a6e2246.jpg"},"363f":function(t,e,a){"use strict";a("3926")},"36ce":function(t,e,a){},"38c2":function(t,e,a){t.exports=a.p+"img/corgi.63829375.gif"},3926:function(t,e,a){},"3ae86":function(t,e,a){t.exports=a.p+"img/jyunbi.c10996e9.png"},"3e82":function(t,e,a){},"3f2f":function(t,e,a){t.exports=a.p+"img/Excellogo.682a5c3e.png"},"44c1":function(t,e,a){"use strict";a("d69b")},4617:function(t,e,a){},46173:function(t,e,a){t.exports=a.p+"img/tellogo.14d13c84.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={components:{}},i=o,c=(a("9293"),a("2877")),l=Object(c["a"])(i,r,n,!1,null,"1295055c",null),u=l.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"bgImg"},[a("Header"),a("div",{staticClass:"container",attrs:{id:"top"}},[a("h1",[t._v("Moemi Sawada")]),a("div",{staticClass:"dog"},[a("Kanbanken")],1)]),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 189.46666666666664,181.6 378.9333333333333,163.2 555,150 C 731.0666666666667,136.8 893.7333333333333,128.8 1039,138 C 1184.2666666666667,147.2 1312.1333333333332,173.6 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),a("div",{staticClass:"container bgY",attrs:{id:"about"}},[a("About")],1),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 65.99230769230766,208.4871794871795 131.98461538461532,216.97435897435898 220,195 C 308.0153846153847,173.02564102564102 418.05384615384617,120.58974358974356 511,128 C 603.9461538461538,135.41025641025644 679.7999999999998,202.66666666666669 747,212 C 814.2000000000002,221.33333333333331 872.7461538461541,172.74358974358972 957,163 C 1041.2538461538459,153.25641025641028 1151.2153846153844,182.35897435897436 1236,195 C 1320.7846153846156,207.64102564102564 1380.392307692308,203.82051282051282 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 82.48803827751198,166.14354066985646 164.97607655502395,132.2870813397129 263,135 C 361.02392344497605,137.7129186602871 474.5837320574162,176.9952153110048 572,192 C 669.4162679425838,207.0047846889952 750.688995215311,197.73205741626793 842,187 C 933.311004784689,176.26794258373207 1034.6602870813397,164.07655502392345 1136,166 C 1237.3397129186603,167.92344497607655 1338.6698564593303,183.96172248803828 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),a("div",{staticClass:"container bgY",attrs:{id:"me"}},[a("Me")],1),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 124.16267942583733,181.07177033492823 248.32535885167465,162.14354066985646 333,157 C 417.67464114832535,151.85645933014354 462.8612440191388,160.49760765550238 550,177 C 637.1387559808612,193.50239234449762 766.2296650717703,217.866028708134 883,218 C 999.7703349282297,218.133971291866 1104.22009569378,194.0382775119617 1195,187 C 1285.77990430622,179.9617224880383 1362.88995215311,189.98086124401914 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 89.25358851674642,218.7846889952153 178.50717703349284,237.5693779904306 285,247 C 391.49282296650716,256.4306220095694 515.2248803827752,256.50717703349284 626,253 C 736.7751196172248,249.49282296650716 834.5933014354067,242.40191387559807 910,231 C 985.4066985645933,219.59808612440193 1038.401913875598,203.88516746411486 1123,198 C 1207.598086124402,192.11483253588514 1323.799043062201,196.05741626794259 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),a("div",{staticClass:"container bgY",attrs:{id:"think"}},[a("Think")],1),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 91.23444976076553,228.07655502392345 182.46889952153106,256.1531100478469 275,245 C 367.53110047846894,233.8468899521531 461.3588516746412,183.46411483253593 552,172 C 642.6411483253588,160.53588516746407 730.0956937799043,187.99043062200954 818,189 C 905.9043062200957,190.00956937799046 994.2583732057417,164.57416267942585 1098,162 C 1201.7416267942583,159.42583732057415 1320.870813397129,179.71291866028707 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 114.46889952153111,225.8468899521531 228.93779904306223,251.6937799043062 333,244 C 437.0622009569378,236.3062200956938 530.7177033492821,195.0717703349282 626,173 C 721.2822966507179,150.9282296650718 818.1913875598087,148.01913875598086 915,174 C 1011.8086124401913,199.98086124401914 1108.5167464114832,254.8516746411483 1196,264 C 1283.4832535885168,273.1483253588517 1361.7416267942585,236.57416267942585 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),a("div",{staticClass:"container bgY",attrs:{id:"skills"}},[a("Skills")],1),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 82.83253588516746,180.4976076555024 165.66507177033492,160.99521531100478 265,182 C 364.3349282296651,203.00478468899522 480.17224880382787,264.51674641148327 596,271 C 711.8277511961721,277.48325358851673 827.645933014354,228.9377990430622 917,210 C 1006.354066985646,191.0622009569378 1069.244019138756,201.73205741626793 1152,205 C 1234.755980861244,208.26794258373207 1337.377990430622,204.13397129186603 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})]),a("div",{staticClass:"container",attrs:{id:"portfolio"}},[a("Portfolio")],1),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 75.4736842105263,164.41148325358853 150.9473684210526,128.82296650717703 262,130 C 373.0526315789474,131.17703349282297 519.6842105263158,169.11961722488041 616,201 C 712.3157894736842,232.88038277511959 758.3157894736842,258.6985645933014 838,264 C 917.6842105263158,269.3014354066986 1031.0526315789475,254.08612440191388 1137,240 C 1242.9473684210525,225.91387559808612 1341.4736842105262,212.95693779904306 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff"}})]),a("div",{staticClass:"container bgY",attrs:{id:"contact"}},[a("Contact")],1),a("svg",{staticClass:"transition duration-300 ease-in-out delay-150",attrs:{width:"100%",height:"100%",id:"svg",viewBox:"50 0 1000 300",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"transition-all duration-300 ease-in-out delay-150 path-0",attrs:{d:"M 0,400 C 0,400 0,200 0,200 C 84.88995215311004,190.42105263157896 169.7799043062201,180.8421052631579 271,166 C 372.2200956937799,151.1578947368421 489.77033492822966,131.05263157894737 575,139 C 660.2296650717703,146.94736842105263 713.1387559808611,182.94736842105263 812,208 C 910.8612440191389,233.05263157894737 1055.6746411483255,247.15789473684214 1168,244 C 1280.3253588516745,240.84210526315786 1360.1626794258373,220.42105263157893 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#f1e8d5ff",transform:"rotate(-180 720 200)"}})])],1)},v=[],p=a("7fb6"),h=a("f820"),m=a("0a99"),g=a("6e2e"),b=a("ad83"),C=a("c9e5"),w=a("b8fa"),x={components:{Kanbanken:p["default"],About:h["default"],Me:m["default"],Think:g["default"],Skills:b["default"],Portfolio:C["default"],Contact:w["default"]},data:function(){return{show:!1}},created:{},methods:{scrollPoint:function(){this.scrollY=window.scrollY,this.show?window.scrollY>90&&(this.show=!this.show):this.show=window.scrollY>100}}},_=x,k=(a("247b"),a("6544")),y=a.n(k),V=a("7496"),P=Object(c["a"])(_,f,v,!1,null,"ff25803a",null),T=P.exports;y()(P,{VApp:V["a"]}),s["a"].use(d["a"]);var j=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/me",name:"Me",component:function(){return Promise.resolve().then(a.bind(null,"0a99"))}},{path:"/think",name:"Think",component:function(){return Promise.resolve().then(a.bind(null,"6e2e"))}},{path:"/skills",name:"Skills",component:function(){return Promise.resolve().then(a.bind(null,"ad83"))}},{path:"/portfolio",name:"Portfolio",component:function(){return Promise.resolve().then(a.bind(null,"c9e5"))}},{path:"/contact",name:"Contact",component:function(){return Promise.resolve().then(a.bind(null,"b8fa"))}},{path:"/donburi",name:"Donburi",component:function(){return a.e("chunk-effdef7c").then(a.bind(null,"e25c"))}},{path:"/kanbanken",name:"Kanbanken",component:function(){return Promise.resolve().then(a.bind(null,"7fb6"))}}],E=new d["a"]({mode:"history",base:"/",routes:j}),S=E,O=a("bc3a"),M=a.n(O),A=a("130e"),H=(a("619b"),a("f309"));s["a"].use(H["a"]);var I={primary:"#FF9F00",secondary:"#ffc107",accent:"#3f51b5",error:"#e91e63",warning:"#f44336",info:"#2196f3",success:"#4caf50"},B=new H["a"]({theme:{themes:{light:I,dark:I}}}),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:""}},[a("v-tabs",{attrs:{"background-color":"grey darken-2",centered:"","icons-and-text":"","show-arrows":""}},[a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{to:"/",exact:""}},[t._v(" TOP "),a("span",{staticClass:"material-icons"},[t._v("home")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{to:"/#about"}},[t._v(" About "),a("span",{staticClass:"material-icons"},[t._v("info")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#me",expression:"'#me'"}],attrs:{to:"/#me"}},[t._v(" Me "),a("span",{staticClass:"material-icons"},[t._v("face")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#think",expression:"'#think'"}],attrs:{to:"/#think"}},[t._v(" I think... "),a("span",{staticClass:"material-icons"},[t._v("textsms")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],attrs:{to:"/#skills"}},[t._v(" Skills "),a("span",{staticClass:"material-icons"},[t._v("work")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{to:"/#portfolio"}},[t._v(" Portfolio "),a("span",{staticClass:"material-icons"},[t._v("perm_media")])]),a("v-tab",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{to:"/#contact"}},[t._v(" Contact "),a("span",{staticClass:"material-icons"},[t._v("email")])])],1)],1)],1),a("router-view")],1)},$=[],D=a("40dc"),L=a("71a3"),Z=a("fe57"),Y={},F=Object(c["a"])(Y,N,$,!1,null,null,null),R=F.exports;y()(F,{VApp:V["a"],VAppBar:D["a"],VTab:L["a"],VTabs:Z["a"]});var J=a("f13c"),K=a.n(J);s["a"].config.productionTip=!1,s["a"].use(A["a"],M.a),s["a"].component("Header",R),s["a"].use(K.a,{duration:1e3,easing:"ease",offset:-200}),new s["a"]({router:S,vuetify:B,VueScrollTo:K.a,render:function(t){return t(u)}}).$mount("#app")},"690f":function(t,e,a){t.exports=a.p+"img/power.db946fc5.jpg"},"6acf":function(t,e,a){"use strict";a("4617")},"6e2e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("I Think...")]),a("p",[t._v("事務職をしていた際にSEの方と仕事をご一緒させていただき、"),a("br"),t._v(" お客様の要望をすぐにシステムに反映する姿に感銘を受け、IT業界に興味を抱きました。"),a("br"),t._v(" なかでも毎日触れるホームページやWEBアプリに携わりたいとフロントエンドエンジニアを志しました。"),a("br"),a("br"),t._v(" 訓練校と自宅学習で毎日楽しく学んでおり、やる気はいっぱいです！"),a("br"),t._v(" 至らぬところも多いですが、およそ"),a("span",{staticClass:"keikou"},[t._v("２ヶ月（2022年1月末 時点）の伸びしろ")]),t._v("をご覧いただけましたら幸いです！"),a("br"),t._v(" どうぞよろしくお願いいたします。 ")])])}],n=(a("44c1"),a("2877")),o={},i=Object(n["a"])(o,s,r,!1,null,"0fb4c010",null);e["default"]=i.exports},"7fb6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{staticClass:"dogArea"},[s("v-row",{staticClass:"greeting"},[s("v-col",{attrs:{cols:"6"}},[s("p",[t._v(t._s(t.nowTime)+"です！")]),s("p",[t._v(t._s(t.greeting))]),s("img",{staticClass:"fukidashiImg",attrs:{src:a("cfa0"),alt:"ふきだし"}})]),s("v-col",{attrs:{cols:"6"}},[s("img",{staticClass:"dogImg",attrs:{src:a("38c2"),alt:"看板犬"}})])],1)],1)],1)},r=[],n=(a("99af"),a("fb6a"),{data:function(){return{greeting:"",nowTime:"",nowHours:""}},created:function(){setInterval(this.nowDay,800)},watch:{nowHours:function(){0<=this.nowHours&&this.nowHours<=5?this.greeting="夜更かしですか？ゆっくり休んでくださいね":6<=this.nowHours&&this.nowHours<=9?this.greeting="おはようございます！今日も一日頑張りましょう":10<=this.nowHours&&this.nowHours<=14?this.greeting="こんにちは！お昼は何を食べますか？":15==this.nowHours?this.greeting="ちょっと休憩しませんか？おやつを食べてリフレッシュ！":16<=this.nowHours&&this.nowHours<=20?this.greeting="こんばんは！今日も一日お疲れ様でした":21<=this.nowHours&&this.nowHours<=23?this.greeting="おやすみなさい。一日の疲れを癒しましょう":this.greeting="お疲れ様です！"}},methods:{nowDay:function(){var t=new Date;this.nowTime="".concat(("0"+t.getHours()).slice(-2),":").concat(("0"+t.getMinutes()).slice(-2)),this.nowHours=t.getHours()}}}),o=n,i=(a("363f"),a("2877")),c=a("6544"),l=a.n(c),u=a("7496"),d=a("62ad"),f=a("a523"),v=a("0fd9"),p=Object(i["a"])(o,s,r,!1,null,"07f46733",null);e["default"]=p.exports;l()(p,{VApp:u["a"],VCol:d["a"],VContainer:f["a"],VRow:v["a"]})},9293:function(t,e,a){"use strict";a("2351")},"952f":function(t,e,a){t.exports=a.p+"img/gyudon1.cc1cf24c.png"},"9b98":function(t,e,a){"use strict";a("f3a0")},a85c:function(t,e,a){t.exports=a.p+"img/HTMLlogo.2e4ed85a.png"},a922:function(t,e,a){},ad83:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("h1",[t._v("Skills")]),a("v-container",[a("v-row",{attrs:{dense:""}},t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.text)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.src}})],1)],1)])],1)})),1),a("v-row",{attrs:{dense:""}},t._l(t.otherItems,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.text)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.src}})],1)],1)])],1)})),1)],1)],1)},r=[],n={data:function(){return{items:[{color:"#2b81bf",src:a("a85c"),title:"HTML",text:"基礎的なページ作成"},{color:"#2b81bf",src:a("f750"),title:"CSS",text:"ページのレイアウト、装飾等"},{color:"#2b81bf",src:a("f899"),title:"JavaScript",text:"条件分岐、繰り返し、関数等の基礎。HTMLへの動的な書き換え"},{color:"#2b81bf",src:a("1617"),title:"Vue.js",text:"Vue router、Vuex、Vuetifyを利用した単一ファイルコンポーネントでのページ作成"}],otherItems:[{color:"#2bbcab",src:a("3f2f"),title:"Excel",text:"集計、表・グラフ、関数計算、テーブル等。業務で使用経験あり"},{color:"#2bbcab",src:a("edde"),title:"Word",text:"図表・グラフ挿入等。業務で使用経験あり"},{color:"#2bbcab",src:a("dfa3"),title:"PowerPoint",text:"図表作成、アニメーション等を使用。大学にてプレゼンテーションの経験あり"},{color:"#2bbcab",src:a("46173"),title:"その他事務スキル",text:"電話・窓口対応、書類作成など"},{color:"#b7bc2b",src:a("c025"),title:"イラスト作成",text:"CLIP STUDIO PAINTでのイラスト作成。figmaでのイメージ図の作成"}]}}},o=n,i=(a("cacb"),a("2877")),c=a("6544"),l=a.n(c),u=a("7496"),d=a("8212"),f=a("b0af"),v=a("99d9"),p=a("62ad"),h=a("a523"),m=a("adda"),g=a("0fd9"),b=Object(i["a"])(o,s,r,!1,null,"0c8a8633",null);e["default"]=b.exports;l()(b,{VApp:u["a"],VAvatar:d["a"],VCard:f["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VCol:p["a"],VContainer:h["a"],VImg:m["a"],VRow:g["a"]})},b8fa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Contact")]),a("p",[t._v("御用の方はお気軽に下記のメールアドレスまでご連絡ください")]),a("p",[t._v("web.class.sawa@gmail.com")])])}],n=(a("0f09"),a("2877")),o={},i=Object(n["a"])(o,s,r,!1,null,"50fa192e",null);e["default"]=i.exports},c025:function(t,e,a){t.exports=a.p+"img/penlogo.4b817d47.png"},c9e5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("h1",[t._v("Portfolio")])]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"400"}},[s("v-img",{staticClass:"align-end ",attrs:{height:"200px",src:a("f7ca")}},[s("v-card-title",[t._v("ポートフォリオサイト")])],1),s("v-card-text",{staticClass:"text--primary"},[s("p",[t._v("このサイトです。"),s("br"),s("br"),t._v(" Vue.jsで作成しました。"),s("br"),t._v(" Vue Routerを用いてシングルページアプリケーションにしています。")])])],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"400"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:a("38c2")}},[s("v-card-title",[t._v("看板犬")])],1),s("v-card-text",{staticClass:"text--primary"},[s("p",[t._v("トップでお出迎えをしてくれている犬です。"),s("br"),s("br"),t._v(" 時間によって挨拶が変わります。"),s("br"),t._v(" CLIP STUDIOにてgifイラストを自作しました。")])]),s("v-card-actions",[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{color:"orange",text:"",outlined:"",to:"/"}},[t._v(" Check! ")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"400"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:"#"}},[s("v-card-title",[t._v("制作イラスト")])],1),s("v-card-text",{staticClass:"text--primary"},[s("p",[t._v("今までに作成したイラストです"),s("br"),s("br"),t._v(" 趣味で作成したイラストも含みます。")])]),s("v-card-actions",[s("v-btn",{attrs:{color:"orange",text:"",outlined:"",to:"#"}},[t._v(" Check! ")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"400"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:a("952f")}},[s("v-card-title",[t._v("どんぶり勘定計算機")])],1),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("入力した金額をどんぶり一杯分の値段に変換します。")]),s("div",[t._v("散財を防ぎましょう！")])]),s("v-card-actions",[s("v-btn",{attrs:{to:"/donburi",color:"orange",text:"",outlined:""}},[t._v(" Check! ")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"mx-auto amber lighten-5",attrs:{"max-width":"350",height:"400"}},[s("v-img",{staticClass:"align-end",attrs:{height:"200px",src:a("3ae86")}},[s("v-card-title",[t._v("海外配信時差チェック")])],1),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("海外ストリーマーの配信予定の時差を日本時間に変換します")]),s("div",[t._v("見逃しを防ぎましょう！")])]),s("v-card-actions",[s("v-btn",{attrs:{color:"orange",text:""}},[t._v(" 準備中 ")])],1)],1)],1)],1)],1)],1)},r=[],n=(a("9b98"),a("2877")),o=a("6544"),i=a.n(o),c=a("7496"),l=a("8336"),u=a("b0af"),d=a("99d9"),f=a("62ad"),v=a("a523"),p=a("adda"),h=a("0fd9"),m={},g=Object(n["a"])(m,s,r,!1,null,"1ca31572",null);e["default"]=g.exports;i()(g,{VApp:c["a"],VBtn:l["a"],VCard:u["a"],VCardActions:d["a"],VCardText:d["c"],VCardTitle:d["d"],VCol:f["a"],VContainer:v["a"],VImg:p["a"],VRow:h["a"]})},cacb:function(t,e,a){"use strict";a("36ce")},cfa0:function(t,e,a){t.exports=a.p+"img/fukidashi.1b57ee4d.png"},d43c:function(t,e,a){t.exports=a.p+"img/friendly.9b1af83b.jpg"},d69b:function(t,e,a){},dfa3:function(t,e,a){t.exports=a.p+"img/Powerpointlogo.b9532431.png"},edde:function(t,e,a){t.exports=a.p+"img/Wordlogo.d55b4ad4.png"},f3a0:function(t,e,a){},f750:function(t,e,a){t.exports=a.p+"img/CSSlogo.96b0bd9f.png"},f7ca:function(t,e,a){t.exports=a.p+"img/toppic.3a288e08.png"},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("About")]),a("p",[t._v("お越しいただきありがとうございます。"),a("br"),t._v(" こちらは澤田萌美（さわだもえみ）のポートフォリオサイトです。"),a("br"),t._v(" 勉強したスキルと制作物を掲載しています。"),a("br"),t._v(" どうぞごゆっくりご回覧ください。"),a("br")])])}],n=(a("0c08"),a("2877")),o={},i=Object(n["a"])(o,s,r,!1,null,"0c0f90b2",null);e["default"]=i.exports},f899:function(t,e,a){t.exports=a.p+"img/JavaScriptlogo.319356ec.png"}});
//# sourceMappingURL=app.8c627c04.js.map