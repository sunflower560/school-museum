import{d as D,o as l,c as d,a as t,w as s,b as n,E as B,u as k,i as T,r as g,e as a,f as p,T as b,g as C,h as P,t as i,j as o,k as S,F as $,l as w,m as E}from"./index-rFLQHLQQ.js";import{S as y,a as v}from"./swiper-slide-UVtrQOtw.js";const j={class:"history-card"},I=["src"],V=D({__name:"HistoryCard",props:{history:{}},setup(M){return(c,r)=>{const u=B;return l(),d("div",j,[t(u,{shadow:"hover"},{default:s(()=>[n("img",{src:c.history.img,alt:"картинки нет"},null,8,I)]),_:1})])}}}),N={class:"main-page"},H={class:"main-page__container"},L={class:"main-page__introduction"},q=n("br",null,null,-1),z=n("br",null,null,-1),F=n("br",null,null,-1),R=n("br",null,null,-1),A=n("br",null,null,-1),G={class:"main-page__container-programmer"},Q=D({__name:"MainPage",setup(M){const c=k(),r=T("mq",{smMinus:!1}),u=g([]),_=g([]);for(let e=1;e<14;e++)u.value.push({id:e,img:`src/assets/img/historyImgVertical/img${e}.jpg`});for(let e=1;e<11;e++)_.value.push({id:e,img:`src/assets/img/historyImgHorizontal/img${e}.jpg`});return(e,J)=>{const f=E,h=S;return l(),d("div",N,[a(c)?(l(),p(C,{key:0,to:".main-layout__header-dynamic-section"},[t(b,{name:"fade-left",mode:"out-in",appear:""},{default:s(()=>[o(" Main page ")]),_:1})])):P("",!0),n("div",H,[n("h1",null,i(e.$t("main.mainPage")),1),n("div",L,[n("p",null,i(e.$t("main.introduction")),1),n("h2",null,i(e.$t("main.informationTitle")),1),o(),q,n("ul",null,[n("li",null,i(e.$t("main.informationDescription.one")),1),n("li",null,i(e.$t("main.informationDescription.two")),1),n("li",null,i(e.$t("main.informationDescription.three")),1),n("li",null,i(e.$t("main.informationDescription.four")),1),n("li",null,i(e.$t("main.informationDescription.fife")),1),n("li",null,i(e.$t("main.informationDescription.six")),1),n("li",null,i(e.$t("main.informationDescription.seven")),1),n("li",null,i(e.$t("main.informationDescription.eight")),1)]),n("p",null,[o(i(e.$t("main.historyTell"))+" ",1),z,o(" "+i(e.$t("main.events")),1)]),t(h,{gutter:20},{default:s(()=>[t(f,{span:24},{default:s(()=>[t(a(y),{slidesPerView:a(r).smMinus?1.2:4,spaceBetween:a(r).smMinus?5:20,loop:!0},{default:s(()=>[(l(!0),d($,null,w(u.value,m=>(l(),p(a(v),{key:`news-${m.id}`},{default:s(()=>[t(V,{history:m},null,8,["history"])]),_:2},1024))),128))]),_:1},8,["slidesPerView","spaceBetween"])]),_:1})]),_:1}),t(h,{gutter:20},{default:s(()=>[t(f,{span:24},{default:s(()=>[t(a(y),{slidesPerView:a(r).smMinus?1.2:4,spaceBetween:a(r).smMinus?5:20,loop:!0},{default:s(()=>[(l(!0),d($,null,w(_.value,m=>(l(),p(a(v),{key:`news-${m.id}`},{default:s(()=>[t(V,{history:m},null,8,["history"])]),_:2},1024))),128))]),_:1},8,["slidesPerView","spaceBetween"])]),_:1})]),_:1}),n("h2",null,i(e.$t("main.importantInformation")),1),n("p",null,[o(i(e.$t("main.material"))+" ",1),F,o(" "+i(e.$t("main.manyInformation"))+" ",1),R,o(),A,o(" "+i(e.$t("main.followThisSite")),1)])]),n("div",G,[n("span",null,i(e.$t("common.developer"))+":",1),o(" "+i(e.$t("common.daniil")),1)])])])}}});export{Q as default};
