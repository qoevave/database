"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[31],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),c=n(7094),s=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==_&&!v.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,c.U)(),[C,x]=(0,r.useState)(_),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=g[f];null!=e&&e!==C&&v.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==C&&(T(t),x(a),null!=f&&y(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>E.push(e),onKeyDown:O,onClick:w},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2549:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>k,assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var a=n(7462),r=n(7294),l=n(3905),o=n(5488),i=n(5162);const c={text1:"text1_p2UR",text2:"text2_Lexd",text3:"text3_dwkj",text4:"text4_yUvq",article:"article_UqZA",image:"image_mAnE"},s=e=>{let{background:t}=e;return r.createElement("article",{className:c.article},r.createElement("picture",{className:c.picture},r.createElement("source",{media:"(min-width: 0px)",srcSet:t}),r.createElement("img",{src:t,alt:"alt.text.background"})),r.createElement("p",{className:c.text1},"Speech"),r.createElement("p",{className:c.text2},"People"),r.createElement("p",{className:c.text3},"180\xb0 activity"),r.createElement("p",{className:c.text4},"Textures"))},u=n.p+"assets/images/conferenceParticipant-6e21db04f66cf665eeaf7203d5b44e9f.png",p={sidebar_position:6,title:"ConferenceParticpant",custom_edit_url:null},d=void 0,m={unversionedId:"Scenes/ConferenceParticipant",id:"Scenes/ConferenceParticipant",title:"ConferenceParticpant",description:"Am Wolfsmantel 33, 91058 Erlangen @ Fraunhofer Institute for Integrated Circuits IIS",source:"@site/docs/Scenes/ConferenceParticipant.mdx",sourceDirName:"Scenes",slug:"/Scenes/ConferenceParticipant",permalink:"/database/docs/Scenes/ConferenceParticipant",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"ConferenceParticpant",custom_edit_url:null},sidebar:"docs",previous:{title:"ConferenceCenter",permalink:"/database/docs/Scenes/ConferenceCenter"},next:{title:"ForestWalk",permalink:"/database/docs/Scenes/ForestWalk"}},f={},b=[{value:"Scene",id:"about-ConferenceParticipant",level:2}],k=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},v={toc:b,Highlight:k};function h(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{background:u,mdxType:"Picture"}),(0,l.kt)("admonition",{title:"Location...",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Am Wolfsmantel 33, 91058 Erlangen @ Fraunhofer Institute for Integrated Circuits IIS ",(0,l.kt)("br",null),"\n\ud83d\udea9 GeoTag: 49.546535298811065, 11.01762849795726")),(0,l.kt)("h2",{id:"about-ConferenceParticipant"},"Scene"),(0,l.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ConferenceParticipant02",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("b",null,"Scene version"),": Blinds down."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Preview ConferenceParticipant02")," on ",(0,l.kt)("a",{href:"https://youtu.be/3uNruN6TAfg"},"YouTube")," with FAO audio and 8K video. "),(0,l.kt)("p",null,(0,l.kt)("b",null,"Duration"),": 60 seconds"),(0,l.kt)("h3",null,"Download"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"4OA Audio ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference02/Conference02_A_ambiX4_24bit.wav"},"Conference02_A_ambiX4_24bit.wav")),(0,l.kt)("li",null,"8K Video: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference02/Conference02_V_7680x3840_60fps_80s.mkv"},"Conference02_V_7680x3840_60fps_80s.mkv")),(0,l.kt)("li",null,"YouTube: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference02/Conference02_AV_7680x3840_60fps_80s_25Mbps_ambiX1_24bit.mp4"},"Conference02_AV_7680x3840_60fps_80s_25Mbps_ambiX1_24bit.mp4"))),(0,l.kt)("h3",null,"Spatial / Temporal Indexing "),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Left: SI x TI matrix, Right: SI and TI data over time.")),(0,l.kt)("img",{src:n(4733).Z,alt:"alt text",title:"image Title",width:"900",height:"300"})),(0,l.kt)(i.Z,{value:"ConferenceParticipant03",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("b",null,"Scene version"),": Blinds up."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Preview ConferenceParticipant03")," on ",(0,l.kt)("a",{href:"https://youtu.be/AP9MCs8Xl6Q"},"YouTube")," with FAO audio and 8K video. "),(0,l.kt)("p",null,(0,l.kt)("b",null,"Duration"),": 60 seconds"),(0,l.kt)("h3",null,"Download"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"4OA Audio ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference03/Conference03_A_ambiX4_24bit.wav"},"Conference03_A_ambiX4_24bit.wav")),(0,l.kt)("li",null,"8K Video: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference03/Conference03_V_7680x3840_60fps_83s.mkv"},"Conference03_V_7680x3840_60fps_83s.mkv")),(0,l.kt)("li",null,"YouTube: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Conference03/Conference03_AV_7680x3840_60fps_83s_25Mbps_ambiX1_24bit.mp4"},"Conference03_AV_7680x3840_60fps_83s_25Mbps_ambiX1_24bit.mp4"))),(0,l.kt)("h3",null,"Spatial / Temporal Indexing "),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Left: SI x TI matrix, Right: SI and TI data over time.")),(0,l.kt)("img",{src:n(6380).Z,alt:"alt text",title:"image Title",width:"900",height:"300"}))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,l.kt)("p",null,"4OA Audio: ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"A (audio)")," > ",(0,l.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,l.kt)("code",null,"Bit-depth")," "),(0,l.kt)("p",null,"8K Video:  ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"V (video)")," > ",(0,l.kt)("code",null,"Resolution")," > ",(0,l.kt)("code",null,"Frames-per-second")," > ",(0,l.kt)("code",null,"Duration")," "),(0,l.kt)("p",null,"YouTube:   ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"AV (audiovideo)")," > ",(0,l.kt)("code",null,"Resolution")," > ",(0,l.kt)("code",null,"Frames-per-second")," > ",(0,l.kt)("code",null,"Duration")," > ",(0,l.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,l.kt)("code",null,"Bit-depth"))))}h.isMDXComponent=!0},4733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Conference02_separate-b140896a30b92f8f9b1b1a14329b9480.png"},6380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Conference03_separate-a73d94c8edcdd651fca6d8313255be73.png"}}]);