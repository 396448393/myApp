/* empty css             *//* empty css                 *//* empty css               */import{_ as f,o as g,c as h,a as e,w as t,b as o,F as v,f as B,E as y,g as x,h as d,t as C,i as E,d as D,j as T,k as V,l as L}from"./index-9108a9c5.js";const P={data(){return{input:"",tableData:[{address:"https://www.baidu.com/"},{address:"https://www.baidu.com/"},{address:"https://www.baidu.com/"},{address:"https://www.baidu.com/"}]}},mounted(){},methods:{goBack(){this.$router.go(-1)},clickBut(){cordova.InAppBrowser.open(this.input,"_blank","location=yes")},handleDelete(s,n){},clickLink(s){cordova.InAppBrowser.open(s,"_blank","location=yes")}}},I=o("span",{class:"text-large font-600 mr-3"}," 打开网页 ",-1),N={class:"input_class"},A={class:"input_class"};function F(s,n,H,O,c,a){const p=B,u=E,_=D,r=T,m=y,k=V,i=L,w=x;return g(),h(v,null,[e(p,{onBack:a.goBack,title:"返回"},{content:t(()=>[I]),_:1},8,["onBack"]),o("div",N,[e(m,{gutter:10},{default:t(()=>[e(_,{span:20},{default:t(()=>[o("div",null,[e(u,{modelValue:c.input,"onUpdate:modelValue":n[0]||(n[0]=l=>c.input=l),placeholder:"请输入网址"},null,8,["modelValue"])])]),_:1}),e(_,{span:2},{default:t(()=>[o("div",null,[e(r,{type:"primary",onClick:n[1]||(n[1]=l=>a.clickBut())},{default:t(()=>[d("跳转")]),_:1})])]),_:1})]),_:1})]),o("div",A,[e(w,{data:c.tableData,style:{width:"100%"}},{default:t(()=>[e(i,{prop:"address",label:"链接"},{default:t(l=>[e(k,{type:"primary",onClick:b=>a.clickLink(l.row.address)},{default:t(()=>[d(C(l.row.address),1)]),_:2},1032,["onClick"])]),_:1}),e(i,{label:"操作"},{default:t(l=>[e(r,{size:"small",type:"danger",onClick:b=>a.handleDelete(l.$index,l.row)},{default:t(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])],64)}const S=f(P,[["render",F]]);export{S as default};
