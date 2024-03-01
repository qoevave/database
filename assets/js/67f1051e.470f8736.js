"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[3227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),u=r(6775),i=r(1980),s=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=r(2389);const h="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",k,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(_,(0,n.Z)({key:String(t)},e))}},9431:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>v,assets:()=>b,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var n=r(7462),a=r(7294),l=r(3905),o=r(4866),u=r(5162);const i={text1:"text1_TUGV",text4:"text4_icCn",article:"article_T948",image:"image_wJ8w"},s=e=>{let{background:t}=e;return a.createElement("article",{className:i.article},a.createElement("picture",{className:i.picture},a.createElement("source",{media:"(min-width: 0px)",srcSet:t}),a.createElement("img",{src:t,alt:"alt.text.background"})),a.createElement("p",{className:i.text1},"Texture"),a.createElement("p",{className:i.text4},"Water"))},c=r.p+"assets/images/river-29982880e2a08edf537ec11761c60460.png",d={sidebar_position:10,title:"River",custom_edit_url:null},p=void 0,m={unversionedId:"Scenes/River",id:"Scenes/River",title:"River",description:"Flaschenhofstra\xdfe 39, Goldbach, 90402 N\xfcrnberg",source:"@site/docs/Scenes/River.mdx",sourceDirName:"Scenes",slug:"/Scenes/River",permalink:"/database/docs/Scenes/River",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"River",custom_edit_url:null},sidebar:"docs",previous:{title:"ParkFountains",permalink:"/database/docs/Scenes/ParkFountains"},next:{title:"Skateboarding",permalink:"/database/docs/Scenes/Skateboarding"}},b={},f=[{value:"Scene",id:"about-River",level:2}],v=e=>{let{children:t,color:r}=e;return(0,l.kt)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},h={toc:f,Highlight:v};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{background:c,mdxType:"Picture"}),(0,l.kt)("admonition",{title:"Location...",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Flaschenhofstra\xdfe 39, Goldbach, 90402 N\xfcrnberg ",(0,l.kt)("br",null),"\n\ud83d\udea9 GeoTag: 49.44957744257297, 11.092326711985452")),(0,l.kt)("h2",{id:"about-River"},"Scene"),(0,l.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"River01",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("b",null,"Scene version"),": Medium paced river flowing in natural envrionment."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Preview River01")," on ",(0,l.kt)("a",{href:"https://youtu.be/xOfjclDPdEg"},"YouTube")," with FAO audio and 8K video. "),(0,l.kt)("p",null,(0,l.kt)("b",null,"Duration"),": 60 seconds"),(0,l.kt)("h3",null,"Download"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"4OA Audio ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/River01/River01_A_ambiX4_24bit.wav"},"River01_A_ambiX4_24bit.wav")),(0,l.kt)("li",null,"8K Video: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/River01/River01_V_7680x3840_60fps_60s.mkv"},"River01_V_7680x3840_60fps_60s.mkv")),(0,l.kt)("li",null,"YouTube: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/River01/River01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"River01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"))),(0,l.kt)("h3",null,"Spatial / Temporal Indexing "),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Left: SI x TI matrix, Right: SI and TI data over time.")),(0,l.kt)("img",{src:r(4940).Z,alt:"alt text",title:"image Title",width:"900",height:"300"}))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,l.kt)("p",null,"4OA Audio: ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"A (audio)")," > ",(0,l.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,l.kt)("code",null,"Bit-depth")," "),(0,l.kt)("p",null,"8K Video:  ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"V (video)")," > ",(0,l.kt)("code",null,"Resolution")," > ",(0,l.kt)("code",null,"Frames-per-second")," > ",(0,l.kt)("code",null,"Duration")," "),(0,l.kt)("p",null,"YouTube:   ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"AV (audiovideo)")," > ",(0,l.kt)("code",null,"Resolution")," > ",(0,l.kt)("code",null,"Frames-per-second")," > ",(0,l.kt)("code",null,"Duration")," > ",(0,l.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,l.kt)("code",null,"Bit-depth"))))}k.isMDXComponent=!0},4940:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/River01_separate-476bf5e77ef5a4915f9c0cd41f970ea4.png"}}]);