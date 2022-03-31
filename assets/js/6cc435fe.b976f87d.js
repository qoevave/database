"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[147],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),i=n(7294),r=n(2389),o=n(733),l=n(6010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,_=g.setTabGroupChoices,w=(0,i.useState)(h),N=w[0],C=w[1],B=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==N&&f.some((function(e){return e.value===O}))&&C(O)}var E=function(e){var t=e.currentTarget,n=B.indexOf(t),a=f[n].value;a!==N&&(x(t),C(a),null!=m&&_(m,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;n=B[a]||B[0];break;case"ArrowLeft":var i=B.indexOf(e.currentTarget)-1;n=B[i]||B[B.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return B.push(e)},onKeyDown:T,onFocus:E,onClick:E},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},7962:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return v},assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(9877),l=n(8215),s=["components"],u={sidebar_position:2,title:"\ud83c\udfe1 BuskingCity"},c=void 0,d={unversionedId:"Dataset/BuskingCity",id:"Dataset/BuskingCity",title:"\ud83c\udfe1 BuskingCity",description:"<span",source:"@site/docs/Dataset/BuskingCity.mdx",sourceDirName:"Dataset",slug:"/Dataset/BuskingCity",permalink:"/database/docs/Dataset/BuskingCity",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dataset/BuskingCity.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83c\udfe1 BuskingCity"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfe1 Badminton",permalink:"/database/docs/Dataset/Badminton"},next:{title:"\ud83c\udfe1 BuskingUnderpass",permalink:"/database/docs/Dataset/BuskingUnderpass"}},p={},m=[{value:"Overview",id:"about-BuskingCity",level:2},{value:"Preview",id:"preview",level:3},{value:"Location",id:"location",level:3},{value:"Download Scene",id:"download-scene",level:2},{value:"Scene Analysis",id:"scene-analysis",level:2}],v=function(e){var t=e.children,n=e.color;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},k={toc:m,Highlight:v};function f(e){var t=e.components,u=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-BuskingCity"},"Overview"),(0,r.kt)("img",{src:n(6894).Z,alt:"alt text",title:"image Title"}),(0,r.kt)("h3",{id:"preview"},"Preview"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"YouTube...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"View all versions of the scene on YouTube (8K @ 60fps + 1st-order Ambisonics audio)"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/LHinazODG08"},"BuskingCity01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/LlfMHdZxGwU"},"BuskingCity02"))))),(0,r.kt)("h3",{id:"location"},"Location"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Show me where...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Kasemattentor, 90403 N\xfcrnberg ",(0,r.kt)("br",null),"\n\ud83d\udea9 GeoTag: 49.45327871682602, 11.086144678780915"))),(0,r.kt)("h2",{id:"download-scene"},"Download Scene"),(0,r.kt)("p",null,"Any variations of this scene can be found below. Comments are provided to describe notable differences. "),(0,r.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"BuskingCity01",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Scene version note"),": Slow music with pedestrain walking past."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity01/BuskingCity01_A_ambiX4_24bit.wav"},"BuskingCity01_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity01/BuskingCity01_V_7680x3840_60fps_51s.mkv"},"BuskingCity01_V_7680x3840_60fps_51s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity01/BuskingCity01_AV_7680x3840_60fps_51s_25Mbps_ambiX1_24bit.mp4"},"BuskingCity01_AV_7680x3840_60fps_51s_25Mbps_ambiX1_24bit.mp4")))),(0,r.kt)(l.Z,{value:"BuskingCity02",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Scene version note"),": More upbeat music than in BuskingCity01. No pedestrian."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity02/BuskingCity02_A_ambiX4_24bit.wav"},"BuskingCity02_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity02/BuskingCity02_V_7680x3840_60fps_63s.mkv"},"BuskingCity02_V_7680x3840_60fps_63s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingCity02/BuskingCity02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"BuskingCity02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2139\ufe0f Naming conventions"),(0,r.kt)("p",null,"4OA Audio: ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"A (audio)")," > ",(0,r.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,r.kt)("code",null,"Bit-depth")),(0,r.kt)("p",null,"8K Video: ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"V (video)")," > ",(0,r.kt)("code",null,"resolution"),"  > ",(0,r.kt)("code",null,"frames-per-second")," > ",(0,r.kt)("code",null,"duration")," "),(0,r.kt)("p",null," YouTube: ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"AV (audiovideo)")," > ",(0,r.kt)("code",null,"resolution")," > ",(0,r.kt)("code",null,"frames-per-second")," > ",(0,r.kt)("code",null,"duration")," > ",(0,r.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,r.kt)("code",null,"Bit-depth")," ")),(0,r.kt)("h2",{id:"scene-analysis"},"Scene Analysis"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Coming Soon...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udd2c Subjective ratings and saliency analysis. "))))}f.isMDXComponent=!0},6894:function(e,t,n){t.Z=n.p+"assets/images/BuskingCity_globe-3274e6856663fd54ea84a59dd4146209.png"}}]);