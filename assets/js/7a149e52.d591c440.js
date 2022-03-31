"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[403],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),i=n(733),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(h),P=N[0],_=N[1],O=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==P&&k.some((function(e){return e.value===E}))&&_(E)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==P&&(x(t),_(a),null!=m&&y(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},8912:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return v},assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={sidebar_position:9,title:"\ud83c\udfe1 ParkFountains"},c=void 0,d={unversionedId:"Dataset/ParkFountains",id:"Dataset/ParkFountains",title:"\ud83c\udfe1 ParkFountains",description:"<span",source:"@site/docs/Dataset/ParkFountains.mdx",sourceDirName:"Dataset",slug:"/Dataset/ParkFountains",permalink:"/database/docs/Dataset/ParkFountains",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dataset/ParkFountains.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\ud83c\udfe1 ParkFountains"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfe1 Lake",permalink:"/database/docs/Dataset/Lake"},next:{title:"\ud83c\udfe1 River",permalink:"/database/docs/Dataset/River"}},p={},m=[{value:"Overview",id:"about-ParkFountains",level:2},{value:"Preview",id:"preview",level:3},{value:"Location",id:"location",level:3},{value:"Download Scene",id:"download-scene",level:2},{value:"Scene Analysis",id:"scene-analysis",level:2}],v=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},f={toc:m,Highlight:v};function k(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-ParkFountains"},"Overview"),(0,o.kt)("img",{src:n(4099).Z,alt:"alt text",title:"image Title"}),(0,o.kt)("h3",{id:"preview"},"Preview"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"YouTube...")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"View the scene on YouTube (8K @ 60fps + 1st-order Ambisonics audio)"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/bCkWThN0Z5U"},"ParkFountains01"))))),(0,o.kt)("h3",{id:"location"},"Location"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Show me where...")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Am Stadtpark 67, Neptune Fountain, 90409 N\xfcrnberg ",(0,o.kt)("br",null),"\n\ud83d\udea9 GeoTag: 49.46432652548983, 11.091820352492537"))),(0,o.kt)("h2",{id:"download-scene"},"Download Scene"),(0,o.kt)("p",null,"Any variations of this scene can be found below. Comments are provided to describe notable differences."),(0,o.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ParkFountains01",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("b",null,"Scene version note"),": Event of two people stealing backpack from a pedestrian."),(0,o.kt)("ul",null,(0,o.kt)("li",null,"4OA Audio: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ParkFountains01/ParkFountains01_A_ambiX4_24bit.wav"},"ParkFountains01_A_ambiX4_24bit.wav")),(0,o.kt)("li",null,"8K Video: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ParkFountains01/ParkFountains01_V_7680x3840_60fps_60s.mkv"},"ParkFountains01_V_7680x3840_60fps_60s.mkv")),(0,o.kt)("li",null,"YouTube: ",(0,o.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/ParkFountains01/ParkFountains01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"ParkFountains01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u2139\ufe0f Naming conventions"),(0,o.kt)("p",null,"4OA Audio: ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"A (audio)")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth")),(0,o.kt)("p",null,"8K Video: ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"V (video)")," > ",(0,o.kt)("code",null,"resolution"),"  > ",(0,o.kt)("code",null,"frames-per-second")," > ",(0,o.kt)("code",null,"duration")," "),(0,o.kt)("p",null," YouTube: ",(0,o.kt)("code",null,"SceneName+Version")," > ",(0,o.kt)("code",null,"AV (audiovideo)")," > ",(0,o.kt)("code",null,"resolution")," > ",(0,o.kt)("code",null,"frames-per-second")," > ",(0,o.kt)("code",null,"duration")," > ",(0,o.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,o.kt)("code",null,"Bit-depth")," ")),(0,o.kt)("h2",{id:"scene-analysis"},"Scene Analysis"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Coming Soon...")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\ud83d\udd2c Subjective ratings and saliency analysis. "))))}k.isMDXComponent=!0},4099:function(e,t,n){t.Z=n.p+"assets/images/ParkFountains_annotated_globe-34da317e4c906f315b53d6302ac4304f.png"}}]);