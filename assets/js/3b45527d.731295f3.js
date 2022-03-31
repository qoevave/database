"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[992],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(7294),i=a(2389),o=a(733),l=a(6010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,o.UB)(),g=_.tabGroupChoices,S=_.setTabGroupChoices,w=(0,r.useState)(h),y=w[0],N=w[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var V=g[m];null!=V&&V!==y&&k.some((function(e){return e.value===V}))&&N(V)}var T=function(e){var t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==y&&(E(t),N(n),null!=m&&S(m,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},3256:function(e,t,a){a.r(t),a.d(t,{Highlight:function(){return b},assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(9877),l=a(8215),s=["components"],u={sidebar_position:11,title:"\ud83c\udfe1 Skateboarding"},d=void 0,c={unversionedId:"Dataset/Skateboarding",id:"Dataset/Skateboarding",title:"\ud83c\udfe1 Skateboarding",description:"<span",source:"@site/docs/Dataset/Skateboarding.mdx",sourceDirName:"Dataset",slug:"/Dataset/Skateboarding",permalink:"/database/docs/Dataset/Skateboarding",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dataset/Skateboarding.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"\ud83c\udfe1 Skateboarding"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfe1 River",permalink:"/database/docs/Dataset/River"},next:{title:"\ud83c\udfe1 Train",permalink:"/database/docs/Dataset/Train"}},p={},m=[{value:"Overview",id:"about-Skateboarding",level:2},{value:"Preview",id:"preview",level:3},{value:"Location",id:"location",level:3},{value:"Download Scene",id:"download-scene",level:2},{value:"Scene Analysis",id:"scene-analysis",level:2}],b=function(e){var t=e.children,a=e.color;return(0,i.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},v={toc:m,Highlight:b};function k(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},v,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-Skateboarding"},"Overview"),(0,i.kt)("img",{src:a(2611).Z,alt:"alt text",title:"image Title"}),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"YouTube...")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"View all versions of the scene on YouTube (8K @ 60fps + 1st-order Ambisonics audio)"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/A9S6hMZra2k"},"Skateboarding01")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/KFdToB17wFQ"},"Skateboarding03")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/MZ-8pMfIj4w"},"Skateboarding04")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/tx1WTywWZVY"},"Skateboarding05"))))),(0,i.kt)("h3",{id:"location"},"Location"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Show me where...")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ke\xdflerpl. 12, 90489 N\xfcrnberg @ Technische Hochschule N\xfcrnberg Georg-Simon-Ohm ",(0,i.kt)("br",null),"\n\ud83d\udea9 GeoTag: 49.45254733966611, 11.093259620870267"))),(0,i.kt)("h2",{id:"download-scene"},"Download Scene"),(0,i.kt)("p",null,"Any variations of this scene can be found below. Comments are provided to describe notable differences."),(0,i.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Skateboarding01",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scene version note"),": Blinds down."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"4OA Audio: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding01/Skateboarding01_A_ambiX4_24bit.wav"},"Skateboarding01_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"8K Video: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding01/Skateboarding01_V_7680x3840_60fps_60s.mkv"},"Skateboarding01_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"YouTube: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding01/Skateboarding01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")))),(0,i.kt)(l.Z,{value:"Skateboarding03",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scene version note"),": Blinds up."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"4OA Audio: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding03/Skateboarding03_A_ambiX4_24bit.wav"},"Skateboarding03_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"8K Video: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding03/Skateboarding03_V_7680x3840_60fps_60s.mkv"},"Skateboarding03_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"YouTube: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding03/Skateboarding03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding03_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")))),(0,i.kt)(l.Z,{value:"Skateboarding04",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scene version note"),": Blinds up."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"4OA Audio: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding04/Skateboarding04_A_ambiX4_24bit.wav"},"Skateboarding04_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"8K Video: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding04/Skateboarding04_V_7680x3840_60fps_60s.mkv"},"Skateboarding04_V_7680x3840_60fps_60s.mkv")),(0,i.kt)("li",null,"YouTube: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding04/Skateboarding04_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding04_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4")))),(0,i.kt)(l.Z,{value:"Skateboarding05",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("b",null,"Scene version note"),": Blinds up."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"4OA Audio: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding05/Skateboarding05_A_ambiX4_24bit.wav"},"Skateboarding05_A_ambiX4_24bit.wav")),(0,i.kt)("li",null,"8K Video: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding05/Skateboarding05_V_7680x3840_60fps_63s.mkv"},"Skateboarding05_V_7680x3840_60fps_63s.mkv")),(0,i.kt)("li",null,"YouTube: ",(0,i.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Skateboarding05/Skateboarding05_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"Skateboarding05_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u2139\ufe0f Naming conventions"),(0,i.kt)("p",null,"4OA Audio: ",(0,i.kt)("code",null,"SceneName+Version")," > ",(0,i.kt)("code",null,"A (audio)")," > ",(0,i.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,i.kt)("code",null,"Bit-depth")),(0,i.kt)("p",null,"8K Video: ",(0,i.kt)("code",null,"SceneName+Version")," > ",(0,i.kt)("code",null,"V (video)")," > ",(0,i.kt)("code",null,"resolution"),"  > ",(0,i.kt)("code",null,"frames-per-second")," > ",(0,i.kt)("code",null,"duration")," "),(0,i.kt)("p",null," YouTube: ",(0,i.kt)("code",null,"SceneName+Version")," > ",(0,i.kt)("code",null,"AV (audiovideo)")," > ",(0,i.kt)("code",null,"resolution")," > ",(0,i.kt)("code",null,"frames-per-second")," > ",(0,i.kt)("code",null,"duration")," > ",(0,i.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,i.kt)("code",null,"Bit-depth")," ")),(0,i.kt)("h2",{id:"scene-analysis"},"Scene Analysis"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Coming Soon...")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udd2c Subjective ratings and saliency analysis. "))))}k.isMDXComponent=!0},2611:function(e,t,a){t.Z=a.p+"assets/images/Skateboarding_annotated_v2-20124cdb1aad0ae046a1eade99d294b3.png"}}]);