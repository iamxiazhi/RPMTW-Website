(function(e){function t(t){for(var a,c,s=t[0],d=t[1],i=t[2],l=0,u=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-05e41e75":"4e5da0cd","chunk-1164a354":"0ad4bc63","chunk-2d0da7d0":"13ce16ba","chunk-2d0daa96":"ff54aeb7","chunk-2d225de6":"39a2568b","chunk-406923d0":"d3d1f9c3","chunk-4bf2bc4a":"106d9b0d","chunk-54827c2a":"3378e447","chunk-5d3d5c8a":"147c7ed3","chunk-5f8f143f":"48a6dc9d","chunk-629f7d39":"ea9c63b8","chunk-88daf696":"e3cc3877","chunk-8d136a46":"883048be","chunk-cca6d3b8":"de1eb583","chunk-d2692a16":"a643af49","chunk-dec42738":"dd5140e6","chunk-e1568e76":"8493eab8"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-05e41e75":1,"chunk-1164a354":1,"chunk-406923d0":1,"chunk-4bf2bc4a":1,"chunk-54827c2a":1,"chunk-5d3d5c8a":1,"chunk-5f8f143f":1,"chunk-629f7d39":1,"chunk-88daf696":1,"chunk-cca6d3b8":1,"chunk-d2692a16":1,"chunk-e1568e76":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-05e41e75":"5480ca5c","chunk-1164a354":"d22e2d79","chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-406923d0":"1433270c","chunk-4bf2bc4a":"b56e6ab2","chunk-54827c2a":"a2770398","chunk-5d3d5c8a":"428cd3c4","chunk-5f8f143f":"c511b695","chunk-629f7d39":"51fb7cc4","chunk-88daf696":"6d2ddf05","chunk-8d136a46":"31d6cfe0","chunk-cca6d3b8":"ae54d881","chunk-d2692a16":"3077142f","chunk-dec42738":"31d6cfe0","chunk-e1568e76":"dd6c58f0"}[e]+".css",o=d.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){i=u[s],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(e);var u=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var h=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0017":function(e,t,n){},"0dc7":function(e,t,n){"use strict";n("0017")},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","網頁的手機頁面??就差Wiki阿!!!!","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台: 作者授權平台、Modrinth、CurseForge 黑名單模組下載平台：9Minecraft"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},"1f16":function(e,t,n){},"2fb3":function(e,t,n){"use strict";n("1f16")},"3f26":function(e,t,n){},4544:function(e,t,n){},"4b5f":function(e,t,n){"use strict";n("96c1")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["h"])("div",{class:"flex flex-down"},[Object(a["h"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1);function o(e,t,n,o,r,s){const d=Object(a["y"])("Header"),i=Object(a["y"])("router-view"),l=Object(a["y"])("Footer"),u=Object(a["y"])("EnlargeImg");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(d),Object(a["h"])(i,{class:"wrapper"}),Object(a["h"])(l,{class:"footer"}),Object(a["h"])("div",{class:["goTop",{showGoTop:r.showGoTop}],onClick:t[1]||(t[1]=(...e)=>s.goTop&&s.goTop(...e))},[c],2),Object(a["h"])(u)],64)}const r=Object(a["I"])("data-v-01b3203d");Object(a["t"])("data-v-01b3203d");const s={id:"header",class:"flex flex-down"},d={key:0,class:"discord-top-link flex",style:{width:"100%"}},i=Object(a["h"])("div",null,null,-1),l=Object(a["h"])("div",{class:"flex",style:{width:"80%"}},[Object(a["h"])("p",null," 遇到問題了?有建議要提供?想一起聊天?讓我們一起壯大 Minecraft 社群吧!! "),Object(a["h"])("a",{class:"btn",href:"https://discord.com/invite/5xApZtgV2u",style:{"--thisColor":"rgb(173, 173, 173)"}},"加入 RPMTW 官方 Discord 伺服器")],-1),u={class:"flex else-discord"},h={class:"header-nav-left"},b=Object(a["h"])("a",{href:"#"},[Object(a["h"])("div",{class:"menuStyle"})],-1),m=Object(a["f"])('<div class="links flex" data-v-01b3203d><a href="https://discord.com/invite/5xApZtgV2u" data-v-01b3203d><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt="" data-v-01b3203d></a><a href="https://github.com/RPMTW" data-v-01b3203d><img src="https://github.com/fluidicon.png" alt="" data-v-01b3203d></a><a href="https://modrinth.com/mod/rpmtw-update-mod" data-v-01b3203d><img src="https://modrinth.com/favicon.ico" alt="" data-v-01b3203d></a><a href="https://www.curseforge.com/minecraft/modpacks/atr1" data-v-01b3203d><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt="" data-v-01b3203d></a><a href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842" data-v-01b3203d><img src="https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png" alt="" data-v-01b3203d></a></div>',1),p={class:"div-select flex flex-down"},g=Object(a["h"])("div",{class:"txt-logo user-select"},[Object(a["h"])("strong",{class:"main-title"},[Object(a["h"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["h"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),f={class:"header-nav-right"},O=Object(a["h"])("i",{class:"fas fa-sun"},null,-1);Object(a["r"])();const j=r((e,t,n,c,o,j)=>{const k=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])("header",s,[o.discordLinkShow?(Object(a["q"])(),Object(a["d"])("div",d,[i,l,Object(a["h"])("div",{class:"icon x",onClick:t[1]||(t[1]=(...e)=>j.noDiscordLink&&j.noDiscordLink(...e))})])):Object(a["e"])("",!0),Object(a["h"])("div",u,[Object(a["h"])("div",h,[Object(a["h"])("div",{class:"menuButton",onClick:t[5]||(t[5]=(...e)=>j.menuButtonHtmlToggle&&j.menuButtonHtmlToggle(...e))},[b,Object(a["h"])("div",{class:"menu",onMouseleave:t[4]||(t[4]=(...e)=>j.menuButtonHtmlToggle&&j.menuButtonHtmlToggle(...e))},[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.menuList,e=>(Object(a["q"])(),Object(a["d"])("div",{key:e,class:[{active:o.breadcrumb===e.breadcrumb},"activeBreadcrumb"]},[Object(a["h"])(k,{to:e.to,class:"go-to"},{default:r(()=>[Object(a["g"])(Object(a["A"])(e.name),1)]),_:2},1032,["to"])],2))),128)),m,Object(a["h"])("div",p,[Object(a["h"])("h1",{class:"nowLang notranslate langMenu",onClick:t[2]||(t[2]=(...e)=>j.showLangOptions&&j.showLangOptions(...e))},Object(a["A"])(o.lang),1),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.langs,(e,n)=>(Object(a["q"])(),Object(a["d"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[3]||(t[3]=(...e)=>j.setChoose&&j.setChoose(...e))},Object(a["A"])(e),9,["value"]))),128))])],32)]),Object(a["h"])("div",{class:"blurry",onClick:t[6]||(t[6]=(...e)=>j.menuButtonHtmlToggle&&j.menuButtonHtmlToggle(...e))})]),g,Object(a["h"])("div",f,[Object(a["h"])("div",{class:"header-nav-setMode",onClick:t[7]||(t[7]=(...e)=>j.headerSetMode_click&&j.headerSetMode_click(...e)),rod:""},[Object(a["h"])("span",{class:{"mode-bright":o.bright,"mode-dark":!o.bright}},[O],2)])])])])});var k=n("9225"),v=n("8b64");function w(e,t=""){return k["a"].i18nData[k["a"].getLang()][e]||k["a"].i18nData[k["a"].set.main][e]||t}let T=0;var y={name:"Header",data(){return{langs:k["a"].set.langs,lang:`${k["a"].set.langs[k["a"].getLang()]} (${k["a"].getLang()})`,menuList:v,breadcrumb:null,bright:!1,discordLinkShow:!0}},components:{},methods:{i18n:w,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${k["a"].set.langs[t]} (${t})`,k["a"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie=e?"mode=bright":"mode=dark"},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb},noDiscordLink(){localStorage.setItem("discordLink",0),this.discordLinkShow=!1,this.discordLinkShow&&$(":root").css("--html-margin-top","95px")||$(":root").css("--html-margin-top","45px")}},mounted(){let e=this;this.discordLinkShow=0!==parseInt(localStorage.getItem("discordLink")),$((function(){function t(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):T>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),T=e}e.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px"),$(window).on("scroll",()=>t()),t()})),this.setBreadcrumb();let t=("; "+document.cookie).split("; mode=");2===t.length&&"bright"===t.pop().split(";").shift()?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let n=$("html").attr("class");this.bright=n&&n.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb()}}};n("4b5f"),n("a810");y.render=j,y.__scopeId="data-v-01b3203d";var M=y;const P=Object(a["I"])("data-v-7d26f03e");Object(a["t"])("data-v-7d26f03e");const C={key:0,class:"Footer"},H={class:"flex flex-down"},x=Object(a["h"])("a",{href:"https://github.com/RPMTW"},"RPMTW Team",-1),A=Object(a["g"])(" and "),W=Object(a["h"])("a",{href:"https://github.com/a3510377"},"猴子#3807",-1);Object(a["r"])();const L=P((e,t,n,c,o,r)=>o.notFooter?(Object(a["q"])(),Object(a["d"])("div",C,[Object(a["h"])("footer",H,[Object(a["h"])("p",null,[Object(a["g"])(" Copyright © RPMTW "+Object(a["A"])(o.newYear)+" Powered by The ",1),x,A,W])])])):Object(a["e"])("",!0));var S={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!this.$route.meta.notFooter}}};n("58db");S.render=L,S.__scopeId="data-v-7d26f03e";var I=S;const _=Object(a["I"])("data-v-5b7a9e13");Object(a["t"])("data-v-5b7a9e13");const R={id:"Enlarge"},F={key:0,class:"showImg scaleDraw"},D={class:"img-description"};Object(a["r"])();const E=_((e,t,n,c,o,r)=>Object(a["G"])((Object(a["q"])(),Object(a["d"])("div",R,[o.showImg?(Object(a["q"])(),Object(a["d"])("div",F,[Object(a["h"])("img",{src:o.showImg,class:"not-enlarge",alt:""},null,8,["src"]),Object(a["h"])("p",D,Object(a["A"])(o.description),1)])):Object(a["e"])("",!0),Object(a["h"])("div",{class:"EnlargeImg-blurry",onClick:t[1]||(t[1]=e=>{o.showImg=!1,o.showData=!1})})],512)),[[a["D"],o.showImg]]));var B={name:"EnlargeImg",data(){return{showImg:null,showData:null,description:null}},methods:{},mounted(){let e=this;$((function(){$("html").on("click","img.showEl",(function(t){e.showImg=$(this).attr("src")||null,e.description=$(this).attr("alt"),$("html").addClass("enlarge"),$("#EnlargeImg.not-enlarge").css({width:$(this).css("width"),height:$(this).css("height")})})),$("html").on("click",".showData",(function(e){}))}))}};n("2fb3"),n("f36f");B.render=E,B.__scopeId="data-v-5b7a9e13";var q=B,Q=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:M,Footer:I,EnlargeImg:q},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("0dc7");Q.render=o;var N=Q,z=n("6c02"),U=n("b9ac"),G=n.n(U);const J={id:"AssistTranslation",class:"wiki"},V={class:"content"},Y=Object(a["h"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["h"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["h"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),Z={class:"section",id:"install-method"},K=Object(a["h"])("h1",null,"這模組要如何安裝?",-1),X=Object(a["g"])("<<點我查看教學>>"),ee=Object(a["h"])("section",{class:"section",id:"server-need-install"},[Object(a["h"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["h"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受漢化體驗。 ")],-1),te=Object(a["h"])("section",{class:"section",id:"RPMTW-version"},[Object(a["h"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["h"])("p",null,[Object(a["g"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["h"])("br"),Object(a["g"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),ne=Object(a["h"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["h"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["h"])("p",null,[Object(a["h"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["g"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),ae={class:"section",id:"discord-or-line"},ce=Object(a["h"])("h1",null,"有Discord或Line嗎? 我想詢問相關問題/建議",-1),oe=Object(a["g"])(" 如果需要聯繫我們 "),re=Object(a["g"])(" <<點我查看聯繫方式>> "),se=Object(a["g"])("。 "),de=Object(a["h"])("section",{class:"section",id:"translation-process"},[Object(a["h"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["h"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["h"])("br"),Object(a["h"])("img",{src:G.a,alt:"簡易的示意圖"})],-1);function ie(e,t,n,c,o,r){const s=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])("div",J,[Object(a["h"])("div",V,[Y,Object(a["h"])("section",Z,[K,Object(a["h"])(s,{to:"/install/version"},{default:Object(a["F"])(()=>[X]),_:1})]),ee,te,ne,Object(a["h"])("section",ae,[ce,Object(a["h"])("p",null,[oe,Object(a["h"])(s,{to:"/About"},{default:Object(a["F"])(()=>[re]),_:1}),se])]),de])])}var le={name:"QandA",data(){return{}}};le.render=ie;var ue=le;const he=[{path:"/",name:"Home",component:()=>n.e("chunk-406923d0").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-629f7d39").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-1164a354").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-5f8f143f").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-05e41e75").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-d2692a16").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-5d3d5c8a").then(n.bind(null,"c89e")),children:[{path:"",components:{data:ue}},{path:"QandA",components:{data:ue}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-dec42738").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-8d136a46").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-e1568e76").then(n.bind(null,"752c"))},{path:"/install/version",name:"Version",component:()=>n.e("chunk-88daf696").then(n.bind(null,"733e")),meta:{breadcrumb:"Version",notFooter:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery",notFooter:!0}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-cca6d3b8").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))},{path:"/Partner",name:"Partner",component:()=>n.e("chunk-54827c2a").then(n.bind(null,"2764"))}],be=Object(z["a"])({history:Object(z["b"])("/"),routes:he});be.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()});var me=be,pe=n("5502"),ge=Object(pe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(N).use(ge).use(me).mount("main")},"58db":function(e,t,n){"use strict";n("cc55")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/Partner","name":"合作夥伴","breadcrumb":"Partner"},{"to":"/About","name":"關於我們","breadcrumb":"About"}]')},9225:function(e,t,n){"use strict";var a=n("10ee"),c=n("6742"),o=n("5aad");t["a"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:c,en_us:o}}},"96c1":function(e,t,n){},a0f1:function(e,t,n){},a810:function(e,t,n){"use strict";n("3f26")},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},c1c3:function(e,t,n){},cc55:function(e,t,n){},f36f:function(e,t,n){"use strict";n("4544")}});
//# sourceMappingURL=app.7c5ecf73.js.map