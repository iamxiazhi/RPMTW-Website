(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80d0fe64"],{"024e":function(e,t,c){e.exports=c.p+"img/SpeedLoading.f564c255.png"},"20cc":function(e,t,c){e.exports=c.p+"img/getAFK.fc7f7d89.png"},"5c1f":function(e,t,c){e.exports=c.p+"img/Announcement.bf8cdacb.png"},"752c":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),s=c("a1f4"),o=c.n(s),r=c("8470"),i=c.n(r),a=c("024e"),l=c.n(a),b=c("ca31"),h=c.n(b),d=c("5c1f"),u=c.n(d),f=c("20cc"),p=c.n(f);const O=Object(n["I"])("data-v-99f25e46");Object(n["t"])("data-v-99f25e46");const j={id:"ModInfo",class:"flex-center"},m=Object(n["h"])("div",{class:"youtubeIframe"},[Object(n["h"])("iframe",{width:"1280",height:"720",src:"https://www.youtube.com/embed/OIE26f1P8dU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),g={class:"buttons"},v={href:"https://discord.com/invite/5xApZtgV2u",class:"button-div"},w={class:"flex-center"},x={class:"sectionTitle"},I={class:"more flex-center"},T=Object(n["h"])("section",{class:"flex-center"},[Object(n["h"])("h1",{class:"sectionTitle mar-0"},"功能介紹"),Object(n["h"])("h1",null,"自動更新並載入翻譯包"),Object(n["h"])("img",{src:o.a,alt:""}),Object(n["h"])("h1",null,"遊戲內翻譯"),Object(n["h"])("img",{src:i.a,alt:""}),Object(n["h"])("h1",null,"光速載入翻譯包"),Object(n["h"])("img",{src:l.a,alt:""}),Object(n["h"])("h1",null,"圖形化設定界面"),Object(n["h"])("img",{src:h.a,alt:""}),Object(n["h"])("h1",null,"公告系統"),Object(n["h"])("img",{src:u.a,alt:""}),Object(n["h"])("h1",null,"掛機偵測系統"),Object(n["h"])("img",{src:p.a,alt:""}),Object(n["h"])("h1",null,[Object(n["h"])("strong",{style:{color:"orange"}},"之後會陸續支援更多功能喔，敬啟期待!")])],-1);Object(n["r"])();const y=O((e,t,c,s,o,r)=>{const i=Object(n["y"])("router-link"),a=Object(n["y"])("Progress");return Object(n["q"])(),Object(n["d"])("div",j,[m,Object(n["h"])("div",g,[Object(n["h"])(i,{to:"/Translation-assistance",class:"button-div"},{default:O(()=>[Object(n["g"])(Object(n["A"])(r.i18n("RPMTWUpdateMod.buttons.Participate")),1)]),_:1}),Object(n["h"])("a",v,Object(n["A"])(r.i18n("public.goto.discord")),1)]),Object(n["h"])("div",null,[Object(n["h"])("section",w,[Object(n["h"])("h1",x,Object(n["A"])(r.i18n("RPMTWUpdateMod.main.title")),1),Object(n["h"])(a,{version:"progress",Title:r.i18n("RPMTWUpdateMod.schedule.Full.version")},null,8,["Title"]),Object(n["G"])(Object(n["h"])("div",I,[Object(n["h"])(a,{version:"1.12"}),Object(n["h"])(a,{version:"1.16"}),Object(n["h"])(a,{version:"1.17"})],512),[[n["D"],o.moreShow]]),Object(n["h"])("div",{onClick:t[1]||(t[1]=e=>o.moreShow=!o.moreShow),class:["moreButton arrow",{drop:o.moreShow}],style:{"--color":"var(--styleMode-color)"},"aria-label":"查看更多"},null,2)]),T])])});var M=c("9225");const P=Object(n["I"])("data-v-73c85f20");Object(n["t"])("data-v-73c85f20");const S={class:"ProgressEx"},A={class:"child"};Object(n["r"])();const U=P((e,t,c,s,o,r)=>(Object(n["q"])(),Object(n["d"])("div",S,[Object(n["h"])("div",A,[Object(n["h"])("h1",{ref:"version-txt-"+c.version,class:"version-txt"},null,512),Object(n["h"])("div",{ref:"process-"+c.version,class:"process-animate"},[Object(n["h"])("h1",{ref:"txt-"+c.version},"正在載入資料中，請稍後...",512)],512)])])));var k={name:"Progress",props:{version:String,Title:{type:String,default:void 0}},mounted(){let e=this.version,t=this.Title,c=$(this.$refs["txt-"+e]),n=$(this.$refs["process-"+e]);$(this.$refs["version-txt-"+e]).html(t||e),$((function(){let t=()=>{$.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/progress.json",t=>{$(c).html(t[e]),$(n).animate({right:100-parseInt(t[e])+"%"},{speed:1e4,step:e=>$(n).css("right",e)})}).fail(e=>{$(c).html("<h1>錯誤，請稍後在試</h1>")})};t(),setInterval(t,18e6)}))}};c("e683");k.render=U,k.__scopeId="data-v-73c85f20";var R=k;function W(e,t=""){return M["a"].i18nData[M["a"].getLang()][e]||M["a"].i18nData[M["a"].set.main][e]||t}var _={name:"ModInfo",data(){return{moreShow:!1}},methods:{i18n:W},components:{Progress:R}};c("b8b7");_.render=y,_.__scopeId="data-v-99f25e46";t["default"]=_},8470:function(e,t,c){e.exports=c.p+"img/inGameIcon.0c68f39f.png"},a1f4:function(e,t,c){e.exports=c.p+"img/modInfoAutoUpData.3044248c.png"},b1b8:function(e,t,c){},b8b7:function(e,t,c){"use strict";c("ffb0")},ca31:function(e,t,c){e.exports=c.p+"img/gameUI.0805f523.png"},e683:function(e,t,c){"use strict";c("b1b8")},ffb0:function(e,t,c){}}]);
//# sourceMappingURL=chunk-80d0fe64.d1cf42b8.js.map