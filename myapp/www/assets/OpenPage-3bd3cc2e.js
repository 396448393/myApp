/* empty css               */import{_ as f,o as g,c as h,a as e,w as t,b as o,F as B,f as v,E as y,g as x,h as d,t as C,i as E,d as T,j as D,k as V,l as P}from"./index-66abcb30.js";const I={data(){return{input:"",tableData:[{address:"https://www.baidu.com/"},{address:"https://www.baidu.com/"},{address:"https://www.baidu.com/"},{address:"https://www.baidu.com/"}]}},mounted(){},methods:{goBack(){this.$router.go(-1)},clickBut(){alert(this.input),cordova.InAppBrowser.open(this.input,"_blank","location=yes")},handleDelete(a,n){alert(n)},clickLink(a){alert(a),cordova.InAppBrowser.open(a,"_blank","location=yes")}}},L=o("span",{class:"text-large font-600 mr-3"}," 打开网页 ",-1),N={class:"input_class"},A={class:"input_class"};function F(a,n,H,O,c,s){const p=v,u=E,r=T,_=D,m=y,k=V,i=P,w=x;return g(),h(B,null,[e(p,{onBack:s.goBack,title:"返回"},{content:t(()=>[L]),_:1},8,["onBack"]),o("div",N,[e(m,{gutter:10},{default:t(()=>[e(r,{span:20},{default:t(()=>[o("div",null,[e(u,{modelValue:c.input,"onUpdate:modelValue":n[0]||(n[0]=l=>c.input=l),placeholder:"请输入网址"},null,8,["modelValue"])])]),_:1}),e(r,{span:2},{default:t(()=>[o("div",null,[e(_,{type:"primary",onClick:n[1]||(n[1]=l=>s.clickBut())},{default:t(()=>[d("跳转")]),_:1})])]),_:1})]),_:1})]),o("div",A,[e(w,{data:c.tableData,style:{width:"100%"}},{default:t(()=>[e(i,{prop:"address",label:"链接"},{default:t(l=>[e(k,{type:"primary",onClick:b=>s.clickLink(l.row.address)},{default:t(()=>[d(C(l.row.address),1)]),_:2},1032,["onClick"])]),_:1}),e(i,{label:"操作"},{default:t(l=>[e(_,{size:"small",type:"danger",onClick:b=>s.handleDelete(l.$index,l.row)},{default:t(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])],64)}const j=f(I,[["render",F]]);export{j as default};
