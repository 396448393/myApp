/* empty css               */import{_ as i,o as p,c as u,a as t,w as s,E as f,b as e,d as y,e as m}from"./index-b0159a21.js";const c="/assets/logo-f09987ae.png";const g={data(){return{cards:[],cardStyle:{padding:"0px",height:"100px",background:"#ecf5ff"}}},mounted(){},methods:{clickOpenAddressCard(){this.$router.push("/openPage")},clickOterCard(){alert("其他")}}},k={class:"index_back"},C=e("div",{class:"grid-content ep-bg-purple-dark"},"我的功能表",-1),b=e("img",{src:c,class:"image"},null,-1),v=e("div",{class:"card-title"},[e("span",null,"打开网址")],-1),x=e("img",{src:c,class:"image"},null,-1),h=e("div",{class:"card-title"},[e("span",null,"其他")],-1),E=e("img",{src:c,class:"image"},null,-1),O=e("div",{class:"card-title"},[e("span",null,"其他2")],-1);function w(A,l,S,B,n,a){const d=y,r=f,o=m;return p(),u("div",k,[t(r,null,{default:s(()=>[t(d,{span:24},{default:s(()=>[C]),_:1})]),_:1}),t(r,{gutter:20},{default:s(()=>[t(d,{span:8},{default:s(()=>[t(o,{"body-style":n.cardStyle,onClick:l[0]||(l[0]=_=>a.clickOpenAddressCard())},{default:s(()=>[b,v]),_:1},8,["body-style"])]),_:1}),t(d,{span:8},{default:s(()=>[t(o,{"body-style":n.cardStyle,onClick:l[1]||(l[1]=_=>a.clickOterCard())},{default:s(()=>[x,h]),_:1},8,["body-style"])]),_:1}),t(d,{span:8},{default:s(()=>[t(o,{"body-style":n.cardStyle,onClick:l[2]||(l[2]=_=>a.clickOterCard())},{default:s(()=>[E,O]),_:1},8,["body-style"])]),_:1})]),_:1})])}const V=i(g,[["render",w]]);export{V as default};
