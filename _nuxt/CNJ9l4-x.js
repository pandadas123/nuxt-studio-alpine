import{u as m}from"./BS9uM6Q8.js";import{M as c,I as p,d as i,aa as l,r as u,N as n,l as d}from"./CW4l2274.js";import f from"./4kHa18gd.js";import y from"./CnWNLqbK.js";import"./CBQrINK0.js";import"./COSyuLvr.js";import"./BEbsCqwU.js";import"./BqvGovgx.js";import"./ChRBrxmJ.js";import"./DsQ8p2zf.js";import"./DskFKh1n.js";import"./Bhuk2BfS.js";import"./8KAC74FZ.js";import"./DWYesHSk.js";import"./B94QIjjS.js";async function g(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),e=u({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}}),V=d(h,[["__scopeId","data-v-65ee052e"]]);export{V as default};
