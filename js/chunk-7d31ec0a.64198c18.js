(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d31ec0a"],{ac07:function(i,e,t){},e5df:function(i,e,t){"use strict";t.r(e);var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"container"},[i._m(0),t("div",{staticClass:"tab"},[t("ul",i._l(i.luxiemDatas,(function(e){return t("li",{key:e.name,style:e.tabColor},[t("button",{on:{click:function(t){return i.upcomingJson(e.channelId,e.eventType)}}},[t("div",{staticClass:"tabText"},[t("span",{staticClass:"material-icons"},[i._v(i._s(e.icon))]),t("p",[i._v(i._s(e.name))])])])])})),0)]),t("div",{staticClass:"liveStreaming"},[t("table",[i._m(1),i._l(i.videos,(function(e){return t("tr",{key:e.id},[i.videoUpcoming?t("td",{staticClass:"lineThumbnails"},[t("p",[i._v(" "+i._s(e.title))]),t("img",{staticClass:"thumbnails",attrs:{src:e.Thumbnails,alt:""}})]):i._e(),t("td",{staticClass:"lineTime"},[t("p",[i._v(i._s(e.videoPublishTimeDay))]),t("p",[i._v(i._s(e.videoPublishTimeHM))])]),t("td",{staticClass:"lineTime"},[t("p",[i._v(i._s(e.videoJapanTimeDay))]),t("p",[i._v(i._s(e.videoJapanTimeHM))])])])})),t("tr",{staticClass:"firstView"},[t("td",{attrs:{colspan:"3"}},[t("p",[i._v(i._s(i.firstView()))])])])],2)]),i._m(2),t("h3",[i._v(" このアプリについてもっと詳しく知る")]),i._m(3),i._m(4),t("div",{staticClass:"backBtn",staticStyle:{cursor:"pointer"},on:{click:function(e){return i.$router.push("/")}}},[i._v("▶︎Back")])])},n=[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"items"},[t("h1",{staticClass:"title"},[i._v("Youtube配信時差変換アプリ(luxiem ver)")]),t("div",{staticClass:"titleTriangle"}),t("h2",[i._v("海外ストリーマーの配信予告、時差があってわかりにくい！")]),t("div",{staticClass:"verticalLineContainer"},[t("div",{staticClass:"verticalLine"}),t("div",{staticClass:"verticalLineText"},[t("p",[i._v("そんな不満から生まれたアプリです。")]),t("br"),t("p",[i._v("このアプリでは、海外Vtuberグループである「luxiem」のライブ配信の情報を"),t("br"),i._v("YoutubeAPIで取得し、日本時間に変換します。")]),t("p",[i._v("タブをクリックし、気になる配信者の配信予定を見てみましょう！")])])])])},function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("tr",[t("th",{staticClass:"lineThumbnails"},[t("p",[i._v("タイトル")])]),t("th",{staticClass:"lineTime"},[t("p",[i._v("世界標準時")])]),t("th",{staticClass:"lineTime"},[t("p",[i._v("日本時間")])])])},function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("ul",{staticClass:"circles"},[t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li"),t("li")])},function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"scroll"}},[t("span")])},function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"moreApp"},[t("div",{staticClass:"verticalLineContainer"},[t("p",{staticClass:"topics"},[i._v("特徴")]),t("div",{staticClass:"verticalLine"}),t("div",{staticClass:"verticalLineText"},[t("p",[i._v("このアプリでは「Youtube API」を使用しています。")]),t("p",[i._v("axiosを用いてデータを取得しました。")])])]),t("div",{staticClass:"verticalLineContainer"},[t("p",{staticClass:"topics"},[i._v("実装予定の機能")]),t("div",{staticClass:"verticalLine"}),t("div",{staticClass:"verticalLineText"},[t("p",[i._v("・選択中のタブをわかりやすくする")]),t("p",[i._v("・配信予定のないストリーマーを選択した際は専用メッセージを返す")]),t("p",[i._v("・サイトの英語対応")]),t("p",[i._v("・日本以外の時間も選択できるようにする")]),t("p",[i._v("・ライブ配信中の動画は目立つように表示 ")])])]),t("div",{staticClass:"verticalLineContainer"},[t("p",{staticClass:"topics"},[i._v("仕様書")]),t("div",{staticClass:"verticalLine"}),t("div",{staticClass:"verticalLineText"},[t("p",[i._v("Notionにて簡単な仕様書を作成しました。")]),t("a",{attrs:{href:"https://misty-dibble-6e8.notion.site/Luxiem-4f992567fb5443efb4912f37948ff339"}},[i._v("URL")])])])])}],s=(t("c740"),t("99af"),t("fb6a"),t("bc3a")),o=t.n(s),c={data:function(){return{videos:[],videoUpcoming:null,videoUpcomingItems:null,videoUpcomingVideoId:null,videoUpcomingTitle:null,videoUpcomingThumbnails:null,liveStreamingDeta:null,videoPublishTime:null,videoPublishTimeShow:null,videoJapanTime:null,videoJapanTimeShow:null,apiKey:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_apiKey_sawa,luxiemDatas:[{name:"Mysta",icon:"search",isActive:!1,channelId:"UCIM92Ok_spNKLVB5TsgwseQ",eventType:"upcoming",tabColor:"background-color : #C3552B"},{name:"Ike",icon:"border_color",isActive:!1,channelId:"UC4yNIKGvy-YUrwYupVdLDXA",eventType:"upcoming",tabColor:"background-color : #348EC7"},{name:"Vox",icon:"local_drink",isActive:!1,channelId:"UCckdfYDGrjojJM28n5SHYrA",eventType:"upcoming",tabColor:"background-color : #960018"},{name:"Luka",icon:"pets",isActive:!1,channelId:"UC7Gb7Uawe20QyFibhLl1lzA",eventType:"upcoming",tabColor:"background-color : #D4AF37"},{name:"Shu",icon:"school",isActive:!1,channelId:"UCG0rzBZV_QMP4MtWg6IjhEA",eventType:"upcoming",tabColor:"background-color : #A660A7"}]}},methods:{firstView:function(){if(""==this.videos)return"メンバーのタブをクリック！（※配信予定がない場合、クリックしても表示されません）"},upcomingJson:function(i,e){var t=this;-1==this.videos.findIndex((function(e){return e.Id===i}))&&(console.log(this.videos),o.a.get("https://www.googleapis.com/youtube/v3/search?channelId=".concat(i,"&key=").concat(this.apiKey,"&part=snippet&eventType=").concat(e,"&type=video")).then((function(e){t.videoUpcoming=e.data;for(var a=0;a<t.videoUpcoming.items.length;a++)t.videoUpcomingItems=t.videoUpcoming.items[a],t.videoUpcomingVideoId=t.videoUpcomingItems.id.videoId,t.videoUpcomingTitle=t.videoUpcomingItems.snippet.title,t.videoUpcomingThumbnails=t.videoUpcomingItems.snippet.thumbnails.high.url,o.a.get("https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&key=".concat(t.apiKey,"&id=").concat(t.videoUpcomingVideoId)).then((function(e){t.liveStreamingDeta=e.data,t.videoPublishTime=new Date(t.liveStreamingDeta.items[0].liveStreamingDetails.scheduledStartTime),t.videoPublishTimeShow="".concat(t.videoPublishTime.getUTCMonth(),"/").concat(t.videoPublishTime.getUTCDate()," ").concat(("0"+t.videoPublishTime.getUTCHours()).slice(-2),":").concat(("0"+t.videoPublishTime.getUTCMinutes()).slice(-2)),t.videoJapanTime=new Date(t.videoPublishTime),t.videoJapanTimeShow="".concat(t.videoJapanTime.getMonth(),"/").concat(t.videoJapanTime.getDate()," ").concat(("0"+t.videoJapanTime.getHours()).slice(-2),":").concat(("0"+t.videoJapanTime.getMinutes()).slice(-2)),t.videos.push({Id:i,title:t.videoUpcomingItems.snippet.title,Thumbnails:t.videoUpcomingItems.snippet.thumbnails.high.url,videoPublishTimeDay:"".concat(t.videoPublishTime.getUTCMonth(),"/").concat(t.videoPublishTime.getUTCDate()),videoPublishTimeHM:"".concat(("0"+t.videoPublishTime.getUTCHours()).slice(-2),":").concat(("0"+t.videoPublishTime.getUTCMinutes()).slice(-2)),videoJapanTimeDay:"".concat(t.videoJapanTime.getMonth(),"/").concat(t.videoJapanTime.getDate()),videoJapanTimeHM:"".concat(("0"+t.videoJapanTime.getHours()).slice(-2),":").concat(("0"+t.videoJapanTime.getMinutes()).slice(-2))})}))})))}}},l=c,v=(t("fab5"),t("2877")),d=Object(v["a"])(l,a,n,!1,null,"76ba0da6",null);e["default"]=d.exports},fab5:function(i,e,t){"use strict";t("ac07")}}]);
//# sourceMappingURL=chunk-7d31ec0a.64198c18.js.map