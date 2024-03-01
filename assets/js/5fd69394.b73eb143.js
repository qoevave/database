"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[7257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>_});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),_=r,m=p["".concat(u,".").concat(_)]||p[_]||d[_]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),l=a(6775),u=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function _(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!_({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,s]=m({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),h=(()=>{const e=u??d;return _({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!_({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,i]),tabValues:i}}var h=a(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(d(t),u(n))},_=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:_,onClick:p},o,{className:(0,i.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function g(e){const t=(0,h.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},2320:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const r="container_rKyf",i="text_e9fy",o="image-container_waLb",l=e=>n.createElement("div",{className:r},n.createElement("div",{className:i},n.createElement("p",null,"No audio"),n.createElement("p",null,"Mono audio"),n.createElement("p",null,"4OA audio")),n.createElement("div",{className:o},n.createElement("img",{src:e.img1,alt:"GIF1"}),n.createElement("img",{src:e.img2,alt:"GIF2"}),n.createElement("img",{src:e.img3,alt:"GIF3"})))},4074:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>h,assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>_,toc:()=>f});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162),l=a(2320);const u=a.p+"assets/images/Train01-9a1d91a5e8363f77074026eeeb6d9481.gif",s=a.p+"assets/images/Train01-b0e9575410eea1164590792b4f646569.gif",c=a.p+"assets/images/Train01-3c6f10b0fffbde2f5b8f700c0d2563aa.gif",d={sidebar_position:15,title:"Train01",custom_edit_url:null},p=void 0,_={unversionedId:"Saliency/Train01",id:"Saliency/Train01",title:"Train01",description:"Data Description",source:"@site/docs/Saliency/Train01.mdx",sourceDirName:"Saliency",slug:"/Saliency/Train01",permalink:"/database/docs/Saliency/Train01",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Train01",custom_edit_url:null},sidebar:"docs",previous:{title:"Skateboarding05",permalink:"/database/docs/Saliency/Skateboarding05"},next:{title:"Help",permalink:"/database/docs/help"}},m={},f=[{value:"Data Description",id:"saliency-Train01",level:2},{value:"Scene Saliency Data Downloads",id:"scene-saliency-data-downloads",level:2},{value:"Senario Specific Saliency Downloads",id:"senario-specific-saliency-downloads",level:2}],h=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},b={toc:f,Highlight:h};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"saliency-Train01"},"Data Description"),(0,r.kt)("p",null,"Saliency data is captured for the scene using the following audio scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"No audio:")," No audio (or headphones) are provided to the subjects."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Mono audio:")," Mono audio is present to subject over headphone. Mono audio is derrived from the first channel of the ambisonics audio file."),(0,r.kt)("li",null,(0,r.kt)("b",null,"4OA audio:")," 4th-order Ambisonics is presented to subjects over headphones and head tracked (rotated) in real-time. ")),(0,r.kt)(l.Z,{img1:u,img2:s,img3:c,mdxType:"GIFsText"}),(0,r.kt)("h2",{id:"scene-saliency-data-downloads"},"Scene Saliency Data Downloads"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Ridgeline Plot: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/Yawridge_density_plot_Train01.pdf"},"Yawridge_density_plot_Train01.pdf")),(0,r.kt)("li",null,"Circular Bar Plot: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/Circular_BarPlot_Train01.pdf"},"Circular_BarPlot_Train01.pdf"))),(0,r.kt)("h2",{id:"senario-specific-saliency-downloads"},"Senario Specific Saliency Downloads"),(0,r.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"No Audio",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,r.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," without any audio playing."),(0,r.kt)("h3",null,"Download the Headrotation Data"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Full duration: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/1_No_Audio/1_No_Audio_Train01_Full_Duration.zip"},"1_No_Audio_Train01_Full_Duration.zip")),(0,r.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/1_No_Audio/1_No_Audio_Train01_10_sec.zip"},"1_No_Audio_Train01_10_sec.zip")),(0,r.kt)("li",null,"Heatmaps: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/1_No_Audio/1_No_Audio_Train01_Heatmaps.zip"},"1_No_Audio_Train01_Heatmaps.zip"))),(0,r.kt)("h3",null,"Scene Verbalization Data"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Scene Verbalization Document: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/1_No_Audio/1_No_Audio_Train01.docx"},"1_No_Audio_Train01.docx")))),(0,r.kt)(o.Z,{value:"Mono Audio",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,r.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with mono audio playing on the ",(0,r.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,r.kt)("h3",null,"Download the Headrotation Data"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Full duration: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/2_Mono_Audio/2_Mono_Audio_Train01_Full_Duration.zip"},"2_Mono_Audio_Train01_Full_Duration.zip")),(0,r.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/2_Mono_Audio/2_Mono_Audio_Train01_10_sec.zip"},"2_Mono_Audio_Train01_10_sec.zip")),(0,r.kt)("li",null,"Heatmaps: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/2_Mono_Audio/2_Mono_Audio_Train01_Heatmaps.zip"},"2_Mono_Audio_Train01_Heatmaps.zip"))),(0,r.kt)("h3",null,"Scene Verbalization Data"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Scene Verbalization Document: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/2_Mono_Audio/2_Mono_Audio_Train01.docx"},"2_Mono_Audio_Train01.docx")))),(0,r.kt)(o.Z,{value:"Fourth Order Ambisonics Audio (4OA Audio)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,r.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with 4OA audio playing on the ",(0,r.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,r.kt)("h3",null,"Download the Headrotation Data"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Full duration: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/3_4OA_Audio/3_4OA_Audio_Train01_Full_Duration.zip"},"3_4OA_Audio_Train01_Full_Duration.zip")),(0,r.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/3_4OA_Audio/3_4OA_Audio_Train01_10_sec.zip"},"3_4OA_Audio_Train01_10_sec.zip")),(0,r.kt)("li",null,"Heatmaps: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/3_4OA_Audio/3_4OA_Audio_Train01_Heatmaps.zip"},"3_4OA_Audio_Train01_Heatmaps.zip"))),(0,r.kt)("h3",null,"Scene Verbalization Data"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Scene Verbalization Document: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Train01/3_4OA_Audio/3_4OA_Audio_Train01.docx"},"3_4OA_Audio_Train01.docx"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,r.kt)("p",null,"4OA Audio: ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"A (audio)")," > ",(0,r.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,r.kt)("code",null,"Bit-depth")," "),(0,r.kt)("p",null,"8K Video:  ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"V (video)")," > ",(0,r.kt)("code",null,"Resolution")," > ",(0,r.kt)("code",null,"Frames-per-second")," > ",(0,r.kt)("code",null,"Duration")," "),(0,r.kt)("p",null,"YouTube:   ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"AV (audiovideo)")," > ",(0,r.kt)("code",null,"Resolution")," > ",(0,r.kt)("code",null,"Frames-per-second")," > ",(0,r.kt)("code",null,"Duration")," > ",(0,r.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,r.kt)("code",null,"Bit-depth"))))}v.isMDXComponent=!0}}]);