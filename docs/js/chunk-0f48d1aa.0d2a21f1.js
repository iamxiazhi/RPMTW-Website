(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f48d1aa"],{"2bd1":function(e,t,s){},"964f":function(e,t,s){"use strict";s.r(t);var c=s("7a23");const r={id:"ProgressQuery"},n={class:"pageInfo"},a=Object(c["f"])("br",null,null,-1),i={class:"sets flex"},l=["placeholder","aria-label"],o={class:"flex filter"},d={class:"dropdown"},p={class:"dropHover"},u={class:"dropdownContent"},b=Object(c["f"])("div",{class:"output flex"},null,-1);function f(e,t,s,f,h,g){return Object(c["s"])(),Object(c["e"])("div",r,[Object(c["f"])("h1",null,Object(c["C"])(g.i18n("ProgressQuery.title")),1),Object(c["f"])("h3",n,[Object(c["h"])(Object(c["C"])(g.i18n("ProgressQuery.description.0")),1),a,Object(c["h"])(" "+Object(c["C"])(g.i18n("ProgressQuery.description.1")),1)]),Object(c["f"])("div",i,[Object(c["f"])("div",null,[Object(c["I"])(Object(c["f"])("input",{id:"search",type:"text",placeholder:g.i18n("ProgressQuery.please.enter.CurseForgeID"),"aria-label":g.i18n("ProgressQuery.please.enter.CurseForgeID"),onKeyup:t[0]||(t[0]=Object(c["J"])((...e)=>g.generateList&&g.generateList(...e),["enter"])),onChange:t[1]||(t[1]=(...e)=>g.generateList&&g.generateList(...e)),"onUpdate:modelValue":t[2]||(t[2]=e=>h.search=e)},null,40,l),[[c["E"],h.search]])]),Object(c["f"])("div",o,[Object(c["f"])("label",null,[Object(c["h"])(Object(c["C"])(g.i18n("ProgressQuery.Filter.condition"))+": ",1),Object(c["f"])("div",d,[Object(c["f"])("p",p,Object(c["C"])(g.i18n("public.Game.version")),1),Object(c["f"])("div",u,[Object(c["f"])("p",{onClick:t[3]||(t[3]=(...e)=>g.chosen&&g.chosen(...e)),"click-type":"1.12",class:"chosen"},"1.12"),Object(c["f"])("p",{onClick:t[4]||(t[4]=(...e)=>g.chosen&&g.chosen(...e)),"click-type":"1.16",class:"chosen"},"1.16"),Object(c["f"])("p",{onClick:t[5]||(t[5]=(...e)=>g.chosen&&g.chosen(...e)),"click-type":"1.17",class:"chosen"},"1.17")])])])])]),b])}var h=s("9225");function g(e,t=""){return h["a"].i18nData[h["a"].getLang()][e]||h["a"].i18nData[h["a"].set.main][e]||t}let v=()=>{for(let e of $(".circle-bar")){let t=$(e).find(".mask .percent");if(t.text().includes("NaN"))t.text("0%");else{let s=parseInt(t.text()),c=$(e).css("background-color");s<=50?$(e).find(".circle-bar-right").css("transform",`rotate(${10*s}deg)`):($(e).find(".circle-bar-right").css({transform:"rotate(0deg)","background-color":c}),$(e).find(".circle-bar-left").css("transform",`rotate(${3.6*(s-50)}deg)`))}}},j=e=>{let t=e.attr("class");return t&&t.split().includes("chosen")?e.attr("click-type"):null};var O={name:"ProgressQuery",data(){return{search:"",datas:[]}},methods:{i18n:g,chosen(e){$(e.target).toggleClass("chosen")},generateList(){let e=this.search,t=this.datas,s=[t[j($(".dropdownContent p[click-type='1.12']"))],t[j($(".dropdownContent p[click-type='1.16']"))],t[j($(".dropdownContent p[click-type='1.17']"))]];$(".output").html("");let c=0;if(e)for(let r of s)r&&Object.keys(r).map(t=>{++c>25||(t.includes(e)||r[t].ModID.includes(e))&&$(".output").append(`<div><div><h5>CurseForgeID: ${t}<br>模組ID: ${r[t].ModID}<h5></div><div class="circle-bar"><div class="circle-bar-left"></div><div class="circle-bar-right"></div><div class="mask"><span class="percent">${parseInt(r[t].Progress)}%</span></div></div></div>`)});else for(let r of s)r&&Object.keys(r).map(e=>{++c>10||$(".output").append(`<div><div><h5>CurseForgeID: ${e}<br>模組ID: ${r[e].ModID}<h5></div><div class="circle-bar"><div class="circle-bar-left"></div><div class="circle-bar-right"></div><div class="mask"><span class="percent">${parseInt(r[e].Progress)}%</span></div></div></div>`)});$(".output").html().length<0&&$(".output").html("無"),v()}},mounted(){["1.12","1.16","1.17"].map(e=>{$.getJSON(`https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/CrowdinIndex-${e}.json`,t=>{this.datas[e]=t})})}};s("c065");O.render=f;t["default"]=O},c065:function(e,t,s){"use strict";s("2bd1")}}]);
//# sourceMappingURL=chunk-0f48d1aa.0d2a21f1.js.map