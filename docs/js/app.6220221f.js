(function(t){function a(a){for(var c,s,o=a[0],i=a[1],d=a[2],u=0,b=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&b.push(n[s][0]),n[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);l&&l(a);while(b.length)b.shift()();return r.push.apply(r,d||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],c=!0,o=1;o<e.length;o++){var i=e[o];0!==n[i]&&(c=!1)}c&&(r.splice(a--,1),t=s(s.s=e[0]))}return t}var c={},n={app:0},r=[];function s(a){if(c[a])return c[a].exports;var e=c[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=c,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var c in t)s.d(e,c,function(a){return t[a]}.bind(null,c));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/rpmtw-pages-vue-cli/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var d=0;d<o.length;d++)a(o[d]);var l=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0421":function(t,a,e){},1010:function(t,a,e){},"2b7c":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e623"),e("e379"),e("5dc8"),e("37e1");var c=e("7a23"),n={id:"nav"},r=Object(c["f"])("Home"),s=Object(c["f"])(" | "),o=Object(c["f"])("About");function i(t,a,e,i,d,l){var u=Object(c["v"])("router-link"),b=Object(c["v"])("Header"),v=Object(c["v"])("router-view"),p=Object(c["v"])("Footer");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",n,[Object(c["g"])(u,{to:"/"},{default:Object(c["z"])((function(){return[r]})),_:1}),s,Object(c["g"])(u,{to:"/about"},{default:Object(c["z"])((function(){return[o]})),_:1})]),Object(c["g"])(b),Object(c["g"])(v),Object(c["g"])(p)],64)}var d={class:"Header"},l={class:"inside-header"},u={class:"header-nav"},b={class:"header-nav-left"},v=Object(c["g"])("div",{class:"header-nav-menu"},null,-1),p=Object(c["g"])("a",{href:"#"},[Object(c["g"])("div",{class:"menuStyle"})],-1),g=Object(c["f"])("首頁"),f=Object(c["f"])("協助翻譯"),m=Object(c["f"])("維基百科"),h=Object(c["f"])("實用工具"),j=Object(c["f"])("翻譯貢獻者排名"),O=Object(c["f"])("關於我們"),w=Object(c["e"])('<div class="links"><div class="list-links"><a href="https://discord.com/invite/5xApZtgV2u"><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt=""></a><a href="https://github.com/RPMTW"><img src="https://github.com/fluidicon.png" alt=""></a><a href="https://modrinth.com/mod/rpmtw-update-mod"><img src="https://modrinth.com/favicon.ico" alt=""></a><a href="https://www.curseforge.com/minecraft/modpacks/atr1"><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt=""></a></div></div>',1),y=Object(c["g"])("div",{class:"blurry"},null,-1),M=Object(c["g"])("div",{class:"header-nav-title user-select"},[Object(c["g"])("strong",{class:"main-title"},[Object(c["g"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(c["g"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),T={class:"header-nav-right"},k=Object(c["e"])('<span class="mode-dark"><i class="fas fa-sun"></i></span><span class="mode-bright"><i class="fas fa-sun"></i></span><div class="mode-rod"></div>',3);function _(t,a,e,n,r,s){var o=Object(c["v"])("router-link");return Object(c["p"])(),Object(c["d"])("header",d,[Object(c["g"])("div",l,[Object(c["g"])("div",u,[Object(c["g"])("div",b,[v,Object(c["g"])("div",{class:"menuButton",onClick:a[2]||(a[2]=function(){return s.menuButtonHtmlToggle&&s.menuButtonHtmlToggle.apply(s,arguments)})},[p,Object(c["g"])("div",{class:"menu",onMouseleave:a[1]||(a[1]=function(){return s.menuButtonHtmlToggle&&s.menuButtonHtmlToggle.apply(s,arguments)})},[Object(c["g"])("div",null,[Object(c["g"])(o,{to:"/"},{default:Object(c["z"])((function(){return[g]})),_:1})]),Object(c["g"])("div",null,[Object(c["g"])(o,{to:"/Translation-assistance"},{default:Object(c["z"])((function(){return[f]})),_:1})]),Object(c["g"])("div",null,[Object(c["g"])(o,{to:"/"},{default:Object(c["z"])((function(){return[m]})),_:1})]),Object(c["g"])("div",null,[Object(c["g"])(o,{to:"/"},{default:Object(c["z"])((function(){return[h]})),_:1})]),Object(c["g"])("div",null,[Object(c["g"])(o,{to:"/Contributor"},{default:Object(c["z"])((function(){return[j]})),_:1})]),Object(c["g"])("div",null,[Object(c["g"])(o,{to:"/About"},{default:Object(c["z"])((function(){return[O]})),_:1})]),w],32),y])]),M,Object(c["g"])("div",T,[Object(c["g"])("div",{class:"header-nav-setMode",onClick:a[3]||(a[3]=function(){return s.headerSetMode_click&&s.headerSetMode_click.apply(s,arguments)}),rod:""},[k])])])])])}e("ac1f"),e("1276"),e("caad6"),e("2532");var x={name:"Header",props:{},methods:{headerSetMode_click:function(){var t=$("html").toggleClass("bright").attr("class").split(" ");t.includes("bright")?document.cookie="mode=bright":document.cookie="mode=dark"},menuButtonHtmlToggle:function(){$("html").toggleClass("is-menu")}}};e("a312");x.render=_;var P=x,A=Object(c["A"])("data-v-1d9b14a6");Object(c["s"])("data-v-1d9b14a6");var C={id:"Footer"},H=Object(c["g"])("footer",null,[Object(c["g"])("p",null," Copyright © RPMTW 2021-2021 Powered by The RPMTW Team ")],-1);Object(c["q"])();var R=A((function(t,a,e,n,r,s){return Object(c["p"])(),Object(c["d"])("div",C,[H])})),W={name:"Footer"};e("a3e5");W.render=R,W.__scopeId="data-v-1d9b14a6";var z=W,I={name:"Main",components:{Header:P,Footer:z}};I.render=i;var S=I,F=e("6c02"),B={class:"Home"},J=Object(c["e"])('<section class="home-main-backImg"><img class="home-main-img" src="https://images-ext-2.discordapp.net/external/HOlgQY8DosN62EuGMbQ6W2Zo1UoJRAgs8BAPcKb_dMo/https/media.discordapp.net/attachments/793138981750571008/816269692095561748/pack.png" alt=""><h1 class="user-select v-rpm-text"></h1></section><section class="all-publicity"><div class="item-none"><div class="publicity item-none"><div class="publicity-icon"><img style="width:400px;height:200px;" src="https://cdn.discordapp.com/banners/815819580840607807/bf8aec260c17d5483a18e27d8e99a52b.jpg?size=512" alt=""></div><div class="publicity-info"><h1 class="publicity-title">自動中文化更新模組</h1><strong class="content">體驗前所未見的模組翻譯，讓你的模組通通變中文吧！</strong><a class="button-div" aria-label="立即下載" href="https://www.rpmtw.ga/version">立即下載</a><a class="button-div more" aria-label="閱讀更多" href="https://www.rpmtw.ga/RPMTWUpdateMod">閱讀更多</a></div></div></div><div class="item-none"><div class="publicity"><div class="publicity-icon"><img style="width:400px;height:200px;" src="https://media.discordapp.net/attachments/793138981750571008/854976912228089906/unknown.png" alt=""></div><div class="publicity-info"><h1 class="publicity-title">ATR 1 - All The RPMTW<br>模組包</h1><strong class="content">1.17 全新模組包，結合各種元素，盡情在織物上探險吧！</strong><a class="button-div" data-popover="立即下載" href="https://www.rpmtw.ga/version">立即下載</a><a class="button-div more" data-popover="閱讀更多" href="https://www.rpmtw.ga/RPMTWUpdateMod">閱讀更多</a></div></div></div></section><p></p>',3),U={class:"translation-C-rank"},D=Object(c["g"])("h1",null,"翻譯貢獻者前12名 - 感謝你們的貢獻",-1),N={src:"https://rpmtw.github.io/Contributor-Website/Top/12",ref:"iframe",frameborder:"0"},Q=Object(c["f"])("查看更多翻譯貢獻者");function Z(t,a,e,n,r,s){var o=Object(c["v"])("router-link");return Object(c["p"])(),Object(c["d"])("div",B,[J,Object(c["g"])("section",U,[D,Object(c["g"])("iframe",N,null,512),Object(c["g"])(o,{class:"button-div",to:"/Contributor"},{default:Object(c["z"])((function(){return[Q]})),_:1})])])}var q=e("b85c"),E=(e("d81d"),{name:"Home",components:{},mounted:function(){$((function(){var t,a=Object(q["a"])($(".item-none"));try{for(a.s();!(t=a.n()).done;){var e=t.value;new IntersectionObserver((function(t){return t.map((function(t){return t.isIntersecting?t.target.classList.add("active"):t.target.classList.remove("active")}))})).observe(e)}}catch(c){a.e(c)}finally{a.f()}}))}});e("6753");E.render=Z;var G=E,L=e("b6be"),V=e.n(L),K={class:"about"},Y=Object(c["g"])("h1",null,"關於 RPMTW 團隊",-1),X=Object(c["g"])("p",null,[Object(c["g"])("strong",null,"點擊圖片即可導向到網站")],-1),tt=Object(c["g"])("div",{class:"icons"},[Object(c["g"])("div",{class:"icon"},[Object(c["g"])("a",{href:"https://discord.com/invite/5xApZtgV2u"},[Object(c["g"])("img",{src:"https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico",alt:""})]),Object(c["g"])("strong",null,"Discord 社群")]),Object(c["g"])("div",{class:"icon"},[Object(c["g"])("a",{href:"https://crowdin.com/project/resourcepack-mod-zhtw"},[Object(c["g"])("img",{src:"https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",alt:""})]),Object(c["g"])("strong",null,"Crowdin專案")]),Object(c["g"])("div",{class:"icon"},[Object(c["g"])("a",{href:"https://github.com/RPMTW"},[Object(c["g"])("img",{src:V.a,alt:""})]),Object(c["g"])("strong",null,"GitHub儲存庫")])],-1),at=Object(c["g"])("iframe",{class:"discord",src:"https://discord.com/widget?id=815819580840607807&theme=dark",frameborder:"0"},null,-1);function et(t,a,e,n,r,s){return Object(c["p"])(),Object(c["d"])("div",K,[Y,X,tt,at])}var ct={name:"About",components:{}};e("c4d4");ct.render=et;var nt=ct,rt={id:"Contributor"},st=Object(c["g"])("div",{class:"loadIng"},[Object(c["g"])("a",null,"正在載入資料中，請稍後...")],-1),ot=Object(c["g"])("div",{id:"react-root"},null,-1);function it(t,a,e,n,r,s){return Object(c["p"])(),Object(c["d"])("div",rt,[st,ot])}e("99af");var dt={name:"Contributor",data:function(){return{}},methods:{},mounted:function(){$((function(){$(".loadIng").show(),$.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json",(function(t){for(var a in $(".loadIng").hide(),t.data){var e=t.data[a],c='<div class="user">\n                        <img class="user-icon" src="'.concat(e.user.avatarUrl,'">\n                        <div class="card-body">\n                            <div class="hover">\n                                <a href="https://crowdin.com/profile/').concat(e.user.username,'"><h4 class="user-name">\n                                <span class="txt-rank">').concat(parseInt(a)+1,". \n                                </span> ").concat(e.user.fullName,'</h4></a>\n                            </div>\n                            <p class="card-text">翻譯字數: ').concat(e.translated,'</p>\n                            <p class="card-text">核准翻譯次數: ').concat(e.approved,'</p>\n                            <p class="card-text">投票次數: ').concat(e.voted,'</p>\n                            <p class="card-text">加入專案時間: ').concat(e.user.joined,'</p>\n                            <p class="card-text">翻譯獲得稱讚數: ').concat(e.winning,"</p>\n                        </div>\n                    </div > ");$("#react-root").append(c)}})).fail((function(t){console.warn(t),$(".loadIng").html("<h1>錯誤，請稍後在試</h1>")}))}))}};e("aee8");dt.render=it;var lt=dt,ut=Object(c["A"])("data-v-7c791aa7");Object(c["s"])("data-v-7c791aa7");var bt={id:"Assistance"},vt=Object(c["e"])('<div class="title-center" data-v-7c791aa7><h1 data-v-7c791aa7><strong data-v-7c791aa7>《RPMTW 翻譯準則》</strong></h1><h2 style="font-weight:900;" data-v-7c791aa7>進行翻譯前請記得查看以下的《翻譯準則》，感謝配合。</h2><p data-v-7c791aa7> 翻譯準則的目的是為了讓 Minecraft 繁體中文模組翻譯統一，給玩家更好的體驗<br data-v-7c791aa7> 本文將對於 RPMTW 翻譯包訂定翻譯準則，希望譯者們能夠<strong data-v-7c791aa7>盡量遵守此規範</strong><br data-v-7c791aa7> 查看完畢後可以點最下方的按鈕，即可前往下一頁查看翻譯教學<br data-v-7c791aa7> 感激不盡!!! </p></div><div class="content" data-v-7c791aa7><ul data-v-7c791aa7><h1 data-v-7c791aa7>一般規範</h1><li data-v-7c791aa7>請盡量以原文意思為準，如非必要請避免超譯。</li><li data-v-7c791aa7>翻譯時如果不知道原文想要表達的意思，可以嘗試進入遊戲測試看看在遊戲中表達什麼意思，或者查詢網路相關資訊，再進行翻譯。</li><li data-v-7c791aa7>請盡量符合 <strong data-v-7c791aa7>《Minecraft繁體中文(台灣)標準化譯名》</strong>，如果依舊無法轉換為慣用詞，請改變敘述方式或者與其他譯者討論。</li><li data-v-7c791aa7>如果沒有翻譯過的字串，請不要將原文複製下來再貼上，除非有特別意義(例如: <strong data-v-7c791aa7>Just Enough Items</strong>。</li></ul><ul data-v-7c791aa7><h1 data-v-7c791aa7>專有名詞</h1><li data-v-7c791aa7>如果想表達的是人名、專有名詞、學術用語等，請使用該名稱的通用譯名。</li><li data-v-7c791aa7>若網路上仍找不到通用譯名，請略過翻譯，或者也可使用音譯(建議可以跟大家討論看看)。</li></ul><ul data-v-7c791aa7><h1 data-v-7c791aa7>需保留字/串</h1><li data-v-7c791aa7> 在原文中如果有看到<strong data-v-7c791aa7> %s、%d、%msg% </strong>，這類型用 <strong data-v-7c791aa7>%</strong> 包覆起來的文字通常都是變數(會自動替換成模組作者設定的數字或文字等)，請不要翻譯該字/串，例:<br data-v-7c791aa7><span type="tab" data-v-7c791aa7>原文:</span><strong data-v-7c791aa7><span class="notranslate" data-v-7c791aa7> my name is %name%</span></strong><br data-v-7c791aa7><span type="tab" data-v-7c791aa7>譯文:</span><strong data-v-7c791aa7><span class="notranslate" data-v-7c791aa7> 我的名字是 %name%</span></strong><br data-v-7c791aa7> 請翻譯成類似這樣，然後 <strong data-v-7c791aa7>%</strong> 也不要改成全形符號。 </li><li data-v-7c791aa7>某些模組會使用 <strong data-v-7c791aa7>&amp;&amp;</strong> 或者 <strong data-v-7c791aa7>§</strong> 代表顏色或格式等，請不要翻譯(詳情請查看:  <a href="https://minecraft.fandom.com/wiki/Formatting_codes" style="border-bottom:rgba(85,109,223,1) 1.5px solid;" data-v-7c791aa7>Minecraft顏色與格式化代碼</a>。 </li><li data-v-7c791aa7>有的模組手冊中會使用 <strong data-v-7c791aa7>&lt;br&gt;</strong> 或者 <strong data-v-7c791aa7>&lt;color:#FFF2F2&gt;</strong> 這類型也請不要翻譯，通常是用來表示換行或顏色等等。</li></ul><ul data-v-7c791aa7><h1 data-v-7c791aa7>備註</h1><li data-v-7c791aa7>如引用他人的翻譯需經過他人同意，並且要附上原始翻譯作者(放在Crowdin翻譯平台的討論區)，再進行提交。</li></ul></div><h3 class="title-center" data-v-7c791aa7> 如發現此翻譯準則有任何錯誤的地方或者不知道該如何翻譯<br data-v-7c791aa7> 歡迎到我們的 <a href="" data-v-7c791aa7></a>Discord 翻譯討論頻道討論。 </h3><div class="title-center" data-v-7c791aa7><a class="button-div finish aria" aria-label="翻譯去~~" href="https://www.rpmtw.ga/Translation-assistance/Translation-Tutorials" data-v-7c791aa7>我已經查看完畢，可以進行翻譯了!!</a></div>',4);Object(c["q"])();var pt=ut((function(t,a,e,n,r,s){return Object(c["p"])(),Object(c["d"])("div",bt,[vt])})),gt={name:"Assistance",methods:{}};e("d7c6");gt.render=pt,gt.__scopeId="data-v-7c791aa7";var ft=gt,mt=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:nt},{path:"/Contributor",name:"Contributor",component:lt},{path:"/Translation-assistance",name:"/Assistance",component:ft}],ht=Object(F["a"])({history:Object(F["b"])("/rpmtw-pages-vue-cli/"),routes:mt}),jt=ht,Ot=e("1157"),wt=e.n(Ot);window.$=window.jQuery=wt.a,Object(c["c"])(S).use(jt).mount("#app")},"63ff":function(t,a,e){},6753:function(t,a,e){"use strict";e("63ff")},"9c24":function(t,a,e){},a312:function(t,a,e){"use strict";e("a8db")},a3e5:function(t,a,e){"use strict";e("2b7c")},a8db:function(t,a,e){},aee8:function(t,a,e){"use strict";e("1010")},b6be:function(t,a,e){t.exports=e.p+"img/github-icon.ef7a02b6.png"},c4d4:function(t,a,e){"use strict";e("0421")},d7c6:function(t,a,e){"use strict";e("9c24")}});
//# sourceMappingURL=app.6220221f.js.map