"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[482],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(a),m=s,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294);function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),s=a(7294),r=a(2389),i=a(733),l=a(6010),u="tabItem_LplD";function o(e){var t,a,r,o=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,k=e.className,v=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==_&&!b.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),g=f.tabGroupChoices,w=f.setTabGroupChoices,y=(0,s.useState)(_),B=y[0],U=y[1],N=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=g[m];null!=x&&x!==B&&b.some((function(e){return e.value===x}))&&U(x)}var V=function(e){var t=e.currentTarget,a=N.indexOf(t),n=b[a].value;n!==B&&(E(t),U(n),null!=m&&w(m,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;a=N[n]||N[0];break;case"ArrowLeft":var s=N.indexOf(e.currentTarget)-1;a=N[s]||N[N.length-1]}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,a=e.label,r=e.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:V,onClick:V},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":B===t})}),null!=a?a:t)}))),o?(0,s.cloneElement)(v.filter((function(e){return e.props.value===B}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function d(e){var t=(0,r.Z)();return s.createElement(o,(0,n.Z)({key:String(t)},e))}},6794:function(e,t,a){a.r(t),a.d(t,{Highlight:function(){return k},assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),i=a(9877),l=a(8215),u=["components"],o={sidebar_position:3,title:"\ud83c\udfe1 BuskingUnderpass"},d=void 0,p={unversionedId:"Dataset/BuskingUnderpass",id:"Dataset/BuskingUnderpass",title:"\ud83c\udfe1 BuskingUnderpass",description:"<span",source:"@site/docs/Dataset/BuskingUnderpass.mdx",sourceDirName:"Dataset",slug:"/Dataset/BuskingUnderpass",permalink:"/database/docs/Dataset/BuskingUnderpass",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dataset/BuskingUnderpass.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83c\udfe1 BuskingUnderpass"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfe1 BuskingCity",permalink:"/database/docs/Dataset/BuskingCity"},next:{title:"\ud83c\udfe1 Cheerleading",permalink:"/database/docs/Dataset/Cheerleading"}},c={},m=[{value:"Overview",id:"about-BuskingUnderpass",level:2},{value:"Preview",id:"preview",level:3},{value:"Location",id:"location",level:3},{value:"Download Scene",id:"download-scene",level:2},{value:"Scene Analysis",id:"scene-analysis",level:2}],k=function(e){var t=e.children,a=e.color;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},v={toc:m,Highlight:k};function b(e){var t=e.components,o=(0,s.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-BuskingUnderpass"},"Overview"),(0,r.kt)("img",{src:a(1937).Z,alt:"alt text",title:"image Title"}),(0,r.kt)("h3",{id:"preview"},"Preview"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"YouTube...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"View all versions of the scene on YouTube (8K @ 60fps + 1st-order Ambisonics audio)"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/LHinazODG08"},"BuskingUnderpass01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/usfqDSAbzlg"},"BuskingUnderpass02")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/Lc2TCDSYaag"},"BuskingUnderpass03")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/LC9nD-_QyKM"},"BuskingUnderpass04")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/YxrpHqaH1E8"},"BuskingUnderpass05"))))),(0,r.kt)("h3",{id:"location"},"Location"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Show me where...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cramer-Klett Park, 90489 N\xfcrnberg ",(0,r.kt)("br",null),"\n\ud83d\udea9 GeoTag: 49.45504736875947, 11.088356031367148"))),(0,r.kt)("h2",{id:"download-scene"},"Download Scene"),(0,r.kt)("p",null,"Any variations of this scene can be found below. Comments are provided to describe notable differences. "),(0,r.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"BuskingUnderpass01",mdxType:"TabItem"},(0,r.kt)("p",null,"Scene version note: Pedestrian walking past right-to-left (short approach), looking at phone. No interaction with musician."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass01/BuskingUnderpass01_A_ambiX4_24bit.wav"},"BuskingUnderpass01_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass01/BuskingUnderPass01_V_7680x3840_60fps_59s.mkv"},"BuskingUnderPass01_V_7680x3840_60fps_59s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass01/BuskingUnderpass01_AV_7680x3840_60fps_59s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass01_AV_7680x3840_60fps_59s_25Mbps_ambiX1_24bit.mp4")))),(0,r.kt)(l.Z,{value:"BuskingUnderpass02",mdxType:"TabItem"},(0,r.kt)("p",null,"Scene version note: Slow melancholy music. No pedestrian."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass02/BuskingUnderpass02_A_ambiX4_24bit.wav"},"BuskingUnderpass02_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass02/BuskingUnderPass02_V_7680x3840_60fps_63s.mkv"},"BuskingUnderPass02_V_7680x3840_60fps_63s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass02/BuskingUnderpass02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass02_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4")))),(0,r.kt)(l.Z,{value:"BuskingUnderpass03",mdxType:"TabItem"},(0,r.kt)("p",null,"Scene version note: Pedestrian walking past right-to-left (short approach). No interaction with musician."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass03/BuskingUnderpass03_A_ambiX4_24bit.wav"},"BuskingUnderpass03_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass03/BuskingUnderPass03_V_7680x3840_60fps_63s.mkv"},"BuskingUnderPass03_V_7680x3840_60fps_63s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass03/BuskingUnderpass03_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass03_AV_7680x3840_60fps_63s_25Mbps_ambiX1_24bit.mp4")))),(0,r.kt)(l.Z,{value:"BuskingUnderpass04",mdxType:"TabItem"},(0,r.kt)("p",null,"Scene version note: Slow melancholy music. Pedestrian walking past left-to-right (longer approach) and gives money to musician."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass04/BuskingUnderpass04_A_ambiX4_24bit.wav"},"BuskingUnderpass04_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass04/BuskingUnderPass04_V_7680x3840_60fps_61s.mkv"},"BuskingUnderPass04_V_7680x3840_60fps_61s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass04/BuskingUnderpass04_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass04_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4")))),(0,r.kt)(l.Z,{value:"BuskingUnderpass05",mdxType:"TabItem"},(0,r.kt)("p",null,"Scene version note: Slow melancholy music. Pedestrian walking past right-to-left (short approach) and gives money to musician."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"4OA Audio ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass05/BuskingUnderpass05_A_ambiX4_24bit.wav"},"BuskingUnderpass05_A_ambiX4_24bit.wav")),(0,r.kt)("li",null,"8K Video: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass05/BuskingUnderPass05_V_7680x3840_60fps_61s.mkv"},"BuskingUnderPass05_V_7680x3840_60fps_61s.mkv")),(0,r.kt)("li",null,"YouTube: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/BuskingUnderpass05/BuskingUnderpass05_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4"},"BuskingUnderpass05_AV_7680x3840_60fps_61s_25Mbps_ambiX1_24bit.mp4"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,r.kt)("p",null,"4OA Audio: ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"A (audio)")," > ",(0,r.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,r.kt)("code",null,"Bit-depth")," "),(0,r.kt)("p",null,"8K Video:  ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"V (video)")," > ",(0,r.kt)("code",null,"Resolution")," > ",(0,r.kt)("code",null,"Frames-per-second")," > ",(0,r.kt)("code",null,"Duration")," "),(0,r.kt)("p",null,"YouTube:   ",(0,r.kt)("code",null,"SceneName+Version")," > ",(0,r.kt)("code",null,"AV (audiovideo)")," > ",(0,r.kt)("code",null,"Resolution")," > ",(0,r.kt)("code",null,"Frames-per-second")," > ",(0,r.kt)("code",null,"Duration")," > ",(0,r.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,r.kt)("code",null,"Bit-depth"))),(0,r.kt)("h2",{id:"scene-analysis"},"Scene Analysis"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Coming Soon...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udd2c Subjective ratings and saliency analysis. "))))}b.isMDXComponent=!0},1937:function(e,t,a){t.Z=a.p+"assets/images/BuskingUnderpass_annotated_v2-2fe0d5c5532ea4bde8d527d130f5ea58.png"}}]);