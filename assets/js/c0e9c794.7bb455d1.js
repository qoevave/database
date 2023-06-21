"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[969],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>_});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=n.createContext({}),u=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(r.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),_=i,k=p["".concat(r,".").concat(_)]||p[_]||c[_]||s;return t?n.createElement(k,l(l({ref:a},d),{},{components:t})):n.createElement(k,l({ref:a},d))}));function _(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<s;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),i=t(6010);const s="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>_});var n=t(7462),i=t(7294),s=t(6010),l=t(2389),o=t(7392),r=t(7094),u=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var a;const{lazy:t,block:l,defaultValue:p,values:_,groupId:k,className:m}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=_??h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,o.l)(b,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,r.U)(),[w,A]=(0,i.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:B}=(0,u.o5)();if(null!=k){const e=v[k];null!=e&&e!==w&&b.some((a=>a.value===e))&&A(e)}const E=e=>{const a=e.currentTarget,t=D.indexOf(a),n=b[t].value;n!==w&&(B(a),A(n),null!=k&&y(k,String(n)))},U=e=>{var a;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]??D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]??D[D.length-1];break}}null==(a=t)||a.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},m)},b.map((e=>{let{value:a,label:t,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>D.push(e),onKeyDown:U,onClick:E},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function _(e){const a=(0,l.Z)();return i.createElement(p,(0,n.Z)({key:String(a)},e))}},2320:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294);const i="container_rKyf",s="text_e9fy",l="image-container_waLb",o=e=>n.createElement("div",{className:i},n.createElement("div",{className:s},n.createElement("p",null,"No audio"),n.createElement("p",null,"Mono audio"),n.createElement("p",null,"4OA audio")),n.createElement("div",{className:l},n.createElement("img",{src:e.img1,alt:"GIF1"}),n.createElement("img",{src:e.img2,alt:"GIF2"}),n.createElement("img",{src:e.img3,alt:"GIF3"})))},4304:(e,a,t)=>{t.r(a),t.d(a,{Highlight:()=>h,assets:()=>k,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>_,toc:()=>m});var n=t(7462),i=(t(7294),t(3905)),s=t(5488),l=t(5162),o=t(2320);const r=t.p+"assets/images/BuskingUnderpass05-dc1c103cd97f24f51b3dbd14ba3163c0.gif",u=t.p+"assets/images/BuskingUnderpass05-5683e38dc16b446e1e3cb3714e8f5652.gif",d=t.p+"assets/images/BuskingUnderpass05-17f7a263a870e300b943f519e8934d07.gif",c={sidebar_position:4,title:"BuskingUnderpass05",custom_edit_url:null},p=void 0,_={unversionedId:"Saliency/BuskingUnderpass05",id:"Saliency/BuskingUnderpass05",title:"BuskingUnderpass05",description:"Data Description",source:"@site/docs/Saliency/BuskingUnderpass05.mdx",sourceDirName:"Saliency",slug:"/Saliency/BuskingUnderpass05",permalink:"/database/docs/Saliency/BuskingUnderpass05",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"BuskingUnderpass05",custom_edit_url:null},sidebar:"docs",previous:{title:"BuskingCity01",permalink:"/database/docs/Saliency/BuskingCity01"},next:{title:"Cheerleading01",permalink:"/database/docs/Saliency/Cheerleading01"}},k={},m=[{value:"Data Description",id:"saliency-BuskingUnderpass05",level:2},{value:"Scene Saliency Data Downloads",id:"scene-saliency-data-downloads",level:2},{value:"Senario Specific Saliency Downloads",id:"senario-specific-saliency-downloads",level:2}],h=e=>{let{children:a,color:t}=e;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},a)},b={toc:m,Highlight:h};function f(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"saliency-BuskingUnderpass05"},"Data Description"),(0,i.kt)("p",null,"Saliency data is captured for the scene using the following audio scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("b",null,"No audio:")," No audio (or headphones) are provided to the subjects."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Mono audio:")," Mono audio is present to subject over headphone. Mono audio is derrived from the first channel of the ambisonics audio file."),(0,i.kt)("li",null,(0,i.kt)("b",null,"4OA audio:")," 4th-order Ambisonics is presented to subjects over headphones and head tracked (rotated) in real-time. ")),(0,i.kt)(o.Z,{img1:r,img2:u,img3:d,mdxType:"GIFsText"}),(0,i.kt)("h2",{id:"scene-saliency-data-downloads"},"Scene Saliency Data Downloads"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Ridgeline Plot: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/Yawridge_density_plot_BuskingUnderpass05.pdf"},"Yawridge_density_plot_BuskingUnderpass05.pdf")),(0,i.kt)("li",null,"Circular Bar Plot: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/Circular_BarPlot_BuskingUnderpass05.pdf"},"Circular_BarPlot_BuskingUnderpass05.pdf"))),(0,i.kt)("h2",{id:"senario-specific-saliency-downloads"},"Senario Specific Saliency Downloads"),(0,i.kt)(s.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"No Audio",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,i.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," without any audio playing."),(0,i.kt)("h3",null,"Download the Headrotation Data"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Full duration: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/1_No_Audio/1_No_Audio_BuskingUnderpass05_Full_Duration.zip"},"1_No_Audio_BuskingUnderpass05_Full_Duration.zip")),(0,i.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/1_No_Audio/1_No_Audio_BuskingUnderpass05_10_sec.zip"},"1_No_Audio_BuskingUnderpass05_10_sec.zip")),(0,i.kt)("li",null,"Heatmaps: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/1_No_Audio/1_No_Audio_BuskingUnderpass05_Heatmaps.zip"},"1_No_Audio_BuskingUnderpass05_Heatmaps.zip"))),(0,i.kt)("h3",null,"Scene Verbalization Data"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Scene Verbalization Document: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/1_No_Audio/1_No_Audio_BuskingUnderpass05.docx"},"1_No_Audio_BuskingUnderpass05.docx")))),(0,i.kt)(l.Z,{value:"Mono Audio",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,i.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with mono audio playing on the ",(0,i.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,i.kt)("h3",null,"Download the Headrotation Data"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Full duration: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/2_Mono_Audio/2_Mono_Audio_BuskingUnderpass05_Full_Duration.zip"},"2_Mono_Audio_BuskingUnderpass05_Full_Duration.zip")),(0,i.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/2_Mono_Audio/2_Mono_Audio_BuskingUnderpass05_10_sec.zip"},"2_Mono_Audio_BuskingUnderpass05_10_sec.zip")),(0,i.kt)("li",null,"Heatmaps: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/2_Mono_Audio/2_Mono_Audio_BuskingUnderpass05_Heatmaps.zip"},"2_Mono_Audio_BuskingUnderpass05_Heatmaps.zip"))),(0,i.kt)("h3",null,"Scene Verbalization Data"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Scene Verbalization Document: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/2_Mono_Audio/2_Mono_Audio_BuskingUnderpass05.docx"},"2_Mono_Audio_BuskingUnderpass05.docx")))),(0,i.kt)(l.Z,{value:"Fourth Order Ambisonics Audio (4OA Audio)",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scenario description"),": The video was viewed on the ",(0,i.kt)("a",{href:"https://www.valvesoftware.com/de/index"},"Valve Index")," with 4OA audio playing on the ",(0,i.kt)("a",{href:"https://www.beyerdynamic.de/dt-990-pro.html."},"DT 990 PRO")),(0,i.kt)("h3",null,"Download the Headrotation Data"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Full duration: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/3_4OA_Audio/3_4OA_Audio_BuskingUnderpass05_Full_Duration.zip"},"3_4OA_Audio_BuskingUnderpass05_Full_Duration.zip")),(0,i.kt)("li",null,"Data cut down to parts of 10 seconds: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/3_4OA_Audio/3_4OA_Audio_BuskingUnderpass05_10_sec.zip"},"3_4OA_Audio_BuskingUnderpass05_10_sec.zip")),(0,i.kt)("li",null,"Heatmaps: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/3_4OA_Audio/3_4OA_Audio_BuskingUnderpass05_Heatmaps.zip"},"3_4OA_Audio_BuskingUnderpass05_Heatmaps.zip"))),(0,i.kt)("h3",null,"Scene Verbalization Data"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Scene Verbalization Document: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency_Zips/BuskingUnderpass05/3_4OA_Audio/3_4OA_Audio_BuskingUnderpass05.docx"},"3_4OA_Audio_BuskingUnderpass05.docx"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,i.kt)("p",null,"4OA Audio: ",(0,i.kt)("code",null,"SceneName+Version")," > ",(0,i.kt)("code",null,"A (audio)")," > ",(0,i.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,i.kt)("code",null,"Bit-depth")," "),(0,i.kt)("p",null,"8K Video:  ",(0,i.kt)("code",null,"SceneName+Version")," > ",(0,i.kt)("code",null,"V (video)")," > ",(0,i.kt)("code",null,"Resolution")," > ",(0,i.kt)("code",null,"Frames-per-second")," > ",(0,i.kt)("code",null,"Duration")," "),(0,i.kt)("p",null,"YouTube:   ",(0,i.kt)("code",null,"SceneName+Version")," > ",(0,i.kt)("code",null,"AV (audiovideo)")," > ",(0,i.kt)("code",null,"Resolution")," > ",(0,i.kt)("code",null,"Frames-per-second")," > ",(0,i.kt)("code",null,"Duration")," > ",(0,i.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,i.kt)("code",null,"Bit-depth"))))}f.isMDXComponent=!0}}]);