"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=d(a),p=o,_=m["".concat(u,".").concat(p)]||m[p]||c[p]||i;return a?n.createElement(_,l(l({ref:t},s),{},{components:a})):n.createElement(_,l({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),o=a(7294),i=a(6010),l=a(2389),r=a(7392),u=a(7094),d=a(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:p,groupId:_,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,r.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[A,g]=(0,o.useState)(k),D=[],{blockElementScrollPositionUntilNextRender:B}=(0,d.o5)();if(null!=_){const e=y[_];null!=e&&e!==A&&b.some((t=>t.value===e))&&g(e)}const E=e=>{const t=e.currentTarget,a=D.indexOf(t),n=b[a].value;n!==A&&(B(t),g(n),null!=_&&w(_,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;a=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=D[t]??D[D.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>D.push(e),onKeyDown:S,onClick:E},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":A===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function p(e){const t=(0,l.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}},2320:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const o="container_rKyf",i="text_e9fy",l="image-container_waLb",r=e=>n.createElement("div",{className:o},n.createElement("div",{className:i},n.createElement("p",null,"No audio"),n.createElement("p",null,"Mono audio"),n.createElement("p",null,"4OA audio")),n.createElement("div",{className:l},n.createElement("img",{src:e.img1,alt:"GIF1"}),n.createElement("img",{src:e.img2,alt:"GIF2"}),n.createElement("img",{src:e.img3,alt:"GIF3"})))},2264:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>f,assets:()=>_,contentTitle:()=>m,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=a(7462),o=(a(7294),a(3905)),i=a(5488),l=a(5162),r=a(2320);const u=a.p+"assets/images/Badminton05-694e5c571fcbe938567e23a1ecd1a76c.gif",d=a.p+"assets/images/Badminton05-9d0e2a8e732c4c1dd427b6e95d8b5725.gif",s=a.p+"assets/images/Badminton05-09b9f19a0f21c62a418552d5bf01673a.gif",c={sidebar_position:2,title:"Badminton05",custom_edit_url:null},m=void 0,p={unversionedId:"Saliency/Badminton05",id:"Saliency/Badminton05",title:"Badminton05",description:"Data Description",source:"@site/docs/Saliency/Badminton05.mdx",sourceDirName:"Saliency",slug:"/Saliency/Badminton05",permalink:"/database/docs/Saliency/Badminton05",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Badminton05",custom_edit_url:null},sidebar:"docs",previous:{title:"General information about the Saliency-data-set",permalink:"/database/docs/Saliency/GeneralInformation"},next:{title:"BuskingCity01",permalink:"/database/docs/Saliency/BuskingCity01"}},_={},h=[{value:"Data Description",id:"saliency-Badminton05",level:2},{value:"Scene Saliency Data Downloads",id:"scene-saliency-data-downloads",level:2},{value:"Senario Specific Saliency Downloads",id:"senario-specific-saliency-downloads",level:2}],f=e=>{let{children:t,color:a}=e;return(0,o.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},b={toc:h,Highlight:f};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"saliency-Badminton05"},"Data Description"),(0,o.kt)("p",null,"Saliency data is captured for the scene using the following audio scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"No audio:")," No audio (or headphones) are provided to the subjects."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Mono audio:")," Mono audio is present to subject over headphone. Mono audio is derrived from the first channel of the ambisonics audio file."),(0,o.kt)("li",null,(0,o.kt)("b",null,"4OA audio:")," 4th-order Ambisonics is presented to subjects over headphones and head tracked (rotated) in real-time. ")),(0,o.kt)(r.Z,{img1:u,img2:d,img3:s,mdxType:"GIFsText"}),(0,o.kt)("h2",{id:"scene-saliency-data-downloads"},"Scene Saliency Data Downloads"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Ridgeline Plot: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/Yawridge_density_plot_Badminton05.pdf"},"Yawridge_density_plot_Badminton05.pdf")),(0,o.kt)("li",null,"Circular Bar Plot: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/Circular_BarPlot_Badminton05.pdf"},"Circular_BarPlot_Badminton05.pdf"))),(0,o.kt)("h2",{id:"senario-specific-saliency-downloads"},"Senario Specific Saliency Downloads"),(0,o.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"No Audio",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," without any audio playing."),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/1_No_Audio/1_No_Audio_Badminton05_Full_Duration.zip"},"1_No_Audio_Badminton05_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/1_No_Audio/1_No_Audio_Badminton05_10_sec.zip"},"1_No_Audio_Badminton05_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/1_No_Audio/1_No_Audio_Badminton05_Heatmaps.zip"},"1_No_Audio_Badminton05_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/1_No_Audio/1_No_Audio_Badminton05.docx"},"1_No_Audio_Badminton05.docx")))),(0,o.kt)(l.Z,{value:"Mono Audio",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with mono audio playing on the ",(0,o.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/2_Mono_Audio/2_Mono_Audio_Badminton05_Full_Duration.zip"},"2_Mono_Audio_Badminton05_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/2_Mono_Audio/2_Mono_Audio_Badminton05_10_sec.zip"},"2_Mono_Audio_Badminton05_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/2_Mono_Audio/2_Mono_Audio_Badminton05_Heatmaps.zip"},"2_Mono_Audio_Badminton05_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/2_Mono_Audio/2_Mono_Audio_Badminton05.docx"},"2_Mono_Audio_Badminton05.docx")))),(0,o.kt)(l.Z,{value:"Fourth Order Ambisonics Audio (4OA Audio)",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,o.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with 4OA audio playing on the ",(0,o.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,o.kt)("h3",null,"Download the Headrotation Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Full duration: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/3_4OA_Audio/3_4OA_Audio_Badminton05_Full_Duration.zip"},"3_4OA_Audio_Badminton05_Full_Duration.zip")),(0,o.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/3_4OA_Audio/3_4OA_Audio_Badminton05_10_sec.zip"},"3_4OA_Audio_Badminton05_10_sec.zip")),(0,o.kt)("li",null,"Heatmaps: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/3_4OA_Audio/3_4OA_Audio_Badminton05_Heatmaps.zip"},"3_4OA_Audio_Badminton05_Heatmaps.zip"))),(0,o.kt)("h3",null,"Scene Verbalization Data"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Scene Verbalization Document: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/Badminton05/3_4OA_Audio/3_4OA_Audio_Badminton05.docx"},"3_4OA_Audio_Badminton05.docx"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,o.kt)("p",null,"4OA Audio: ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"A (audio)")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth")," "),(0,o.kt)("p",null,"8K Video:  ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"V (video)")," > ",(0,o.kt)("code",null,"Resolution")," > ",(0,o.kt)("code",null,"Frames-per-second")," > ",(0,o.kt)("code",null,"Duration")," "),(0,o.kt)("p",null,"YouTube:   ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"AV (audiovideo)")," > ",(0,o.kt)("code",null,"Resolution")," > ",(0,o.kt)("code",null,"Frames-per-second")," > ",(0,o.kt)("code",null,"Duration")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth"))))}v.isMDXComponent=!0}}]);