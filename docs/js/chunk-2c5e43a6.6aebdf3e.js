(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5e43a6"],{"13e4":function(t,e,c){},"400d":function(t,e,c){"use strict";c("13e4")},dd86:function(t,e,c){"use strict";c.r(e);var a=c("7a23");Object(a["v"])("data-v-7dfb0605");const s={id:"Contributor"},r=Object(a["f"])("div",{class:"loadIng"},[Object(a["f"])("a",null,"正在載入資料中，請稍後...")],-1),n={id:"react-root"},d=["src"],b={class:"card-body"},o={class:"hover"},j=["href"],l={class:"user-name"},O={class:"txt-rank"},i={class:"card-text"},u={class:"card-text"},f={class:"card-text"},p={class:"card-text"},h={class:"card-text"};function v(t,e,c,v,w,m){return Object(a["s"])(),Object(a["e"])("div",s,[r,Object(a["f"])("div",n,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(w.users,(t,e)=>(Object(a["s"])(),Object(a["e"])("div",{class:"user",key:e},[Object(a["f"])("img",{class:"user-icon",src:t.user.avatarUrl},null,8,d),Object(a["f"])("div",b,[Object(a["f"])("div",o,[Object(a["f"])("a",{target:"_blank",href:"https://crowdin.com/profile/"+t.user.username},[Object(a["f"])("h4",l,[Object(a["f"])("span",O,Object(a["C"])(e+1),1),Object(a["h"])(" "+Object(a["C"])(t.user.fullName),1)])],8,j)]),Object(a["f"])("p",i,"翻譯字數: "+Object(a["C"])(t.translated),1),Object(a["f"])("p",u,"核准翻譯次數: "+Object(a["C"])(t.approved),1),Object(a["f"])("p",f,"投票次數: "+Object(a["C"])(t.voted),1),Object(a["f"])("p",p,"加入專案時間: "+Object(a["C"])(t.user.joined),1),Object(a["f"])("p",h,"翻譯獲得稱讚數: "+Object(a["C"])(t.winning),1)])]))),128))])])}Object(a["t"])();var w={name:"Contributor",methods:{},data(){return{users:[]}},mounted(){$(".loadIng").show(),$.getJSON("https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json",t=>{$(".loadIng").hide(),this.users=t.data}).fail(t=>{console.warn(t),$(".loadIng").html("<h1>錯誤，請稍後在試</h1>")})}};c("400d");w.render=v,w.__scopeId="data-v-7dfb0605";e["default"]=w}}]);
//# sourceMappingURL=chunk-2c5e43a6.6aebdf3e.js.map