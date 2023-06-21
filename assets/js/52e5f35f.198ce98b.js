"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>_});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),_=o,k=p["".concat(s,".").concat(_)]||p[_]||c[_]||n;return a?l.createElement(k,r(r({ref:t},d),{},{components:a})):l.createElement(k,r({ref:t},d))}));function _(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<n;u++)r[u]=a[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),o=a(6010);const n="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(n,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7462),o=a(7294),n=a(6010),r=a(2389),i=a(7392),s=a(7094),u=a(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:a,block:r,defaultValue:p,values:_,groupId:k,className:m}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=_??h.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,i.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:F}=(0,s.U)(),[w,A]=(0,o.useState)(b),g=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&A(e)}const E=e=>{const t=e.currentTarget,a=g.indexOf(t),l=f[a].value;l!==w&&(D(t),A(l),null!=k&&F(k,String(l)))},W=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;a=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;a=g[t]??g[g.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,n.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},m)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>g.push(e),onKeyDown:W,onClick:E},r,{className:(0,n.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function _(e){const t=(0,r.Z)();return o.createElement(p,(0,l.Z)({key:String(t)},e))}},2320:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294);const o="container_rKyf",n="text_e9fy",r="image-container_waLb",i=e=>l.createElement("div",{className:o},l.createElement("div",{className:n},l.createElement("p",null,"No audio"),l.createElement("p",null,"Mono audio"),l.createElement("p",null,"4OA audio")),l.createElement("div",{className:r},l.createElement("img",{src:e.img1,alt:"GIF1"}),l.createElement("img",{src:e.img2,alt:"GIF2"}),l.createElement("img",{src:e.img3,alt:"GIF3"})))},3698:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>h,assets:()=>k,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>_,toc:()=>m});var l=a(7462),o=(a(7294),a(3905)),n=a(5488),r=a(5162),i=a(2320);const s=a.p+"assets/images/ForestWalk02-2069483758960ce6812f43dd804f502a.gif",u=a.p+"assets/images/ForestWalk02-f704fb902509a37c46bfc8d753ab3f0e.gif",d=a.p+"assets/images/ForestWalk02-5c799740f8c5332026e61165d2706950.gif",c={sidebar_position:8,title:"ForestWalk02",custom_edit_url:null},p=void 0,_={unversionedId:"Saliency/ForestWalk02",id:"Saliency/ForestWalk02",title:"ForestWalk02",description:"Data Description",source:"@site/docs/Saliency/ForestWalk02.mdx",sourceDirName:"Saliency",slug:"/Saliency/ForestWalk02",permalink:"/database/docs/Saliency/ForestWalk02",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"ForestWalk02",custom_edit_url:null},sidebar:"docs",previous:{title:"ConferenceParticipant02",permalink:"/database/docs/Saliency/ConferenceParticipant02"},next:{title:"ForestWalk03",permalink:"/database/docs/Saliency/ForestWalk03"}},k={},m=[{value:"Data Description",id:"saliency-ForestWalk02",level:2},{value:"Scene Saliency Data Downloads",id:"scene-saliency-data-downloads",level:2},{value:"Senario Specific Saliency Downloads",id:"senario-specific-saliency-downloads",level:2}],h=e=>{let{children:t,color:a}=e;return(0,o.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},f={toc:m,Highlight:h};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"saliency-ForestWalk02"},"Data Description"),(0,o.kt)("p",null,"Saliency data is captured for the scene using the following audio scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"No audio:")," No audio (or headphones) are provided to the subjects."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Mono audio:")," Mono audio is present to subject over headphone. Mono audio is derrived from the first channel of the ambisonics audio file."),(0,o.kt)("li",null,(0,o.kt)("b",null,"4OA audio:")," 4th-order Ambisonics is presented to subjects over headphones and head tracked (rotated) in real-time. ")),(0,o.kt)(i.Z,{img1:s,img2:u,img3:d,mdxType:"GIFsText"}),(0,o.kt)("h2",{id:"scene-saliency-data-downloads"},"Scene Saliency Data Downloads"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Ridgeline Plot: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/Yawridge_density_plot_ForestWalk02.pdf"},"Yawridge_density_plot_ForestWalk02.pdf")),(0,o.kt)("li",null,"Circular Bar Plot: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/Circular_BarPlot_ForestWalk02.pdf"},"Circular_BarPlot_ForestWalk02.pdf"))),(0,o.kt)("h2",{id:"senario-specific-saliency-downloads"},"Senario Specific Saliency Downloads"),(0,o.kt)(n.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"No Audio",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," without any audio playing."),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/1_No_Audio/1_No_Audio_ForestWalk02_Full_Duration.zip"},"1_No_Audio_ForestWalk02_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/1_No_Audio/1_No_Audio_ForestWalk02_10_sec.zip"},"1_No_Audio_ForestWalk02_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/1_No_Audio/1_No_Audio_ForestWalk02_Heatmaps.zip"},"1_No_Audio_ForestWalk02_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/1_No_Audio/1_No_Audio_ForestWalk02.docx"},"1_No_Audio_ForestWalk02.docx")))),(0,o.kt)(r.Z,{value:"Mono Audio",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with mono audio playing on the ",(0,o.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/2_Mono_Audio/2_Mono_Audio_ForestWalk02_Full_Duration.zip"},"2_Mono_Audio_ForestWalk02_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/2_Mono_Audio/2_Mono_Audio_ForestWalk02_10_sec.zip"},"2_Mono_Audio_ForestWalk02_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/2_Mono_Audio/2_Mono_Audio_ForestWalk02_Heatmaps.zip"},"2_Mono_Audio_ForestWalk02_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/2_Mono_Audio/2_Mono_Audio_ForestWalk02.docx"},"2_Mono_Audio_ForestWalk02.docx")))),(0,o.kt)(r.Z,{value:"Fourth Order Ambisonics Audio (4OA Audio)",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with 4OA audio playing on the ",(0,o.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/3_4OA_Audio/3_4OA_Audio_ForestWalk02_Full_Duration.zip"},"3_4OA_Audio_ForestWalk02_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/3_4OA_Audio/3_4OA_Audio_ForestWalk02_10_sec.zip"},"3_4OA_Audio_ForestWalk02_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/3_4OA_Audio/3_4OA_Audio_ForestWalk02_Heatmaps.zip"},"3_4OA_Audio_ForestWalk02_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/ForestWalk02/3_4OA_Audio/3_4OA_Audio_ForestWalk02.docx"},"3_4OA_Audio_ForestWalk02.docx"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,o.kt)("p",null,"4OA Audio: ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"A (audio)")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth")," "),(0,o.kt)("p",null,"8K Video:  ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"V (video)")," > ",(0,o.kt)("code",null,"Resolution")," > ",(0,o.kt)("code",null,"Frames-per-second")," > ",(0,o.kt)("code",null,"Duration")," "),(0,o.kt)("p",null,"YouTube:   ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"AV (audiovideo)")," > ",(0,o.kt)("code",null,"Resolution")," > ",(0,o.kt)("code",null,"Frames-per-second")," > ",(0,o.kt)("code",null,"Duration")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth"))))}v.isMDXComponent=!0}}]);