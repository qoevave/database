"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[749],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),b=o,_=p["".concat(u,".").concat(b)]||p[b]||c[b]||r;return a?n.createElement(_,i(i({ref:t},d),{},{components:a})):n.createElement(_,i({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),o=a(7294),r=a(6010),i=a(2466),l=a(6775),u=a(1980),s=a(7392),d=a(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function _(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,s]=_({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),m=(()=>{const e=u??c;return b({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),k(e)}),[s,k,r]),tabValues:r}}var m=a(2389);const h="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==l&&(c(t),u(n))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:p},i,{className:(0,r.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",h)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,m.Z)();return o.createElement(S,(0,n.Z)({key:String(t)},e))}},2320:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const o="container_rKyf",r="text_e9fy",i="image-container_waLb",l=e=>n.createElement("div",{className:o},n.createElement("div",{className:r},n.createElement("p",null,"No audio"),n.createElement("p",null,"Mono audio"),n.createElement("p",null,"4OA audio")),n.createElement("div",{className:i},n.createElement("img",{src:e.img1,alt:"GIF1"}),n.createElement("img",{src:e.img2,alt:"GIF2"}),n.createElement("img",{src:e.img3,alt:"GIF3"})))},9586:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>_,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>b,toc:()=>k});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162),l=a(2320);const u=a.p+"assets/images/Skateboarding05-d548bfc8e9121dd96867b5824ed2a027.gif",s=a.p+"assets/images/Skateboarding05-fb706ba9736ea83ccc8c41e356512e4d.gif",d=a.p+"assets/images/Skateboarding05-53e77710129e9b34f7b69d99b3054800.gif",c={sidebar_position:14,title:"Skateboarding05",custom_edit_url:null},p=void 0,b={unversionedId:"Saliency/Skateboarding05",id:"Saliency/Skateboarding05",title:"Skateboarding05",description:"Data Description",source:"@site/docs/Saliency/Skateboarding05.mdx",sourceDirName:"Saliency",slug:"/Saliency/Skateboarding05",permalink:"/database/docs/Saliency/Skateboarding05",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Skateboarding05",custom_edit_url:null},sidebar:"docs",previous:{title:"Skateboarding01",permalink:"/database/docs/Saliency/Skateboarding01"},next:{title:"Train01",permalink:"/database/docs/Saliency/Train01"}},_={},k=[{value:"Data Description",id:"saliency-Skateboarding05",level:2},{value:"Scene Saliency Data Downloads",id:"scene-saliency-data-downloads",level:2},{value:"Senario Specific Saliency Downloads",id:"senario-specific-saliency-downloads",level:2}],m=e=>{let{children:t,color:a}=e;return(0,o.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},h={toc:k,Highlight:m};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"saliency-Skateboarding05"},"Data Description"),(0,o.kt)("p",null,"Saliency data is captured for the scene using the following audio scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"No audio:")," No audio (or headphones) are provided to the subjects."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Mono audio:")," Mono audio is present to subject over headphone. Mono audio is derrived from the first channel of the ambisonics audio file."),(0,o.kt)("li",null,(0,o.kt)("b",null,"4OA audio:")," 4th-order Ambisonics is presented to subjects over headphones and head tracked (rotated) in real-time. ")),(0,o.kt)(l.Z,{img1:u,img2:s,img3:d,mdxType:"GIFsText"}),(0,o.kt)("h2",{id:"scene-saliency-data-downloads"},"Scene Saliency Data Downloads"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Ridgeline Plot: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/Yawridge_density_plot_Skateboarding05.pdf"},"Yawridge_density_plot_Skateboarding05.pdf")),(0,o.kt)("li",null,"Circular Bar Plot: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/Circular_BarPlot_Skateboarding05.pdf"},"Circular_BarPlot_Skateboarding05.pdf"))),(0,o.kt)("h2",{id:"senario-specific-saliency-downloads"},"Senario Specific Saliency Downloads"),(0,o.kt)(r.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"No Audio",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," without any audio playing."),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/1_No_Audio/1_No_Audio_Skateboarding05_Full_Duration.zip"},"1_No_Audio_Skateboarding05_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/1_No_Audio/1_No_Audio_Skateboarding05_10_sec.zip"},"1_No_Audio_Skateboarding05_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/1_No_Audio/1_No_Audio_Skateboarding05_Heatmaps.zip"},"1_No_Audio_Skateboarding05_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/1_No_Audio/1_No_Audio_Skateboarding05.docx"},"1_No_Audio_Skateboarding05.docx")))),(0,o.kt)(i.Z,{value:"Mono Audio",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with mono audio playing on the ",(0,o.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/2_Mono_Audio/2_Mono_Audio_Skateboarding05_Full_Duration.zip"},"2_Mono_Audio_Skateboarding05_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/2_Mono_Audio/2_Mono_Audio_Skateboarding05_10_sec.zip"},"2_Mono_Audio_Skateboarding05_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/2_Mono_Audio/2_Mono_Audio_Skateboarding05_Heatmaps.zip"},"2_Mono_Audio_Skateboarding05_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/2_Mono_Audio/2_Mono_Audio_Skateboarding05.docx"},"2_Mono_Audio_Skateboarding05.docx")))),(0,o.kt)(i.Z,{value:"Fourth Order Ambisonics Audio (4OA Audio)",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with 4OA audio playing on the ",(0,o.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/3_4OA_Audio/3_4OA_Audio_Skateboarding05_Full_Duration.zip"},"3_4OA_Audio_Skateboarding05_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/3_4OA_Audio/3_4OA_Audio_Skateboarding05_10_sec.zip"},"3_4OA_Audio_Skateboarding05_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/3_4OA_Audio/3_4OA_Audio_Skateboarding05_Heatmaps.zip"},"3_4OA_Audio_Skateboarding05_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Skateboarding05/3_4OA_Audio/3_4OA_Audio_Skateboarding05.docx"},"3_4OA_Audio_Skateboarding05.docx"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,o.kt)("p",null,"4OA Audio: ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"A (audio)")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth")," "),(0,o.kt)("p",null,"8K Video:  ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"V (video)")," > ",(0,o.kt)("code",null,"Resolution")," > ",(0,o.kt)("code",null,"Frames-per-second")," > ",(0,o.kt)("code",null,"Duration")," "),(0,o.kt)("p",null,"YouTube:   ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"AV (audiovideo)")," > ",(0,o.kt)("code",null,"Resolution")," > ",(0,o.kt)("code",null,"Frames-per-second")," > ",(0,o.kt)("code",null,"Duration")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth"))))}f.isMDXComponent=!0}}]);