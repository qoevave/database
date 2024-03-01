"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[3658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),u=a(6775),i=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var k=a(2389);const v="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},6786:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>k,assets:()=>b,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var n=a(7462),r=a(7294),l=a(3905),o=a(4866),u=a(5162);const i={text1:"text1_rqXj",text2:"text2_YKGZ",text3:"text3_ZrxC",text4:"text4_TUzG",text5:"text5_KUGC",article:"article_j9bv",image:"image_eHfN"},s=e=>{let{background:t}=e;return r.createElement("article",{className:i.article},r.createElement("picture",{className:i.picture},r.createElement("source",{media:"(min-width: 0px)",srcSet:t}),r.createElement("img",{src:t,alt:"alt.text.background"})),r.createElement("p",{className:i.text1},"Movement"),r.createElement("p",{className:i.text2},"People"),r.createElement("p",{className:i.text3},"Speech"),r.createElement("p",{className:i.text4},"Visual reflection"),r.createElement("p",{className:i.text5},"Texture"))},c=a.p+"assets/images/lake-e9f4fa2b8e5f8b6413f9d88529ec04e5.png",d={sidebar_position:8,title:"Lake",custom_edit_url:null},p=void 0,m={unversionedId:"Scenes/Lake",id:"Scenes/Lake",title:"Lake",description:"Gro\xdfe Teich, 98693 Ilmenau",source:"@site/docs/Scenes/Lake.mdx",sourceDirName:"Scenes",slug:"/Scenes/Lake",permalink:"/database/docs/Scenes/Lake",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Lake",custom_edit_url:null},sidebar:"docs",previous:{title:"ForestWalk",permalink:"/database/docs/Scenes/ForestWalk"},next:{title:"ParkFountains",permalink:"/database/docs/Scenes/ParkFountains"}},b={},f=[{value:"Scene",id:"about-Lake",level:2}],k=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem"}},t)},v={toc:f,Highlight:k};function h(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{background:c,mdxType:"Picture"}),(0,l.kt)("admonition",{title:"Location...",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Gro\xdfe Teich, 98693 Ilmenau ",(0,l.kt)("br",null),"\n\ud83d\udea9 GeoTag: 50.6864265178591, 10.932196065555374")),(0,l.kt)("h2",{id:"about-Lake"},"Scene"),(0,l.kt)(o.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Lake01",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("b",null,"Scene version"),": Event of two people stealing backpack from a pedestrian."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Preview Lake01")," on ",(0,l.kt)("a",{href:"https://youtu.be/KAcB6GdZAq0"},"YouTube")," with FAO audio and 8K video. "),(0,l.kt)("p",null,(0,l.kt)("b",null,"Duration"),": 60 seconds"),(0,l.kt)("h3",null,"Download"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"4OA Audio ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Lake01/Lake01_A_ambiX4_24bit.wav"},"Lake01_A_ambiX4_24bit.wav")),(0,l.kt)("li",null,"8K Video: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Lake01/Lake01_V_7680x3840_60fps_60s.mkv"},"Lake01_V_7680x3840_60fps_60s.mkv")),(0,l.kt)("li",null,"YouTube: ",(0,l.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Lake01/Lake01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"},"Lake01_AV_7680x3840_60fps_60s_25Mbps_ambiX1_24bit.mp4"))),(0,l.kt)("h3",null,"Spatial / Temporal Indexing "),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Left: SI x TI matrix, Right: SI and TI data over time.")),(0,l.kt)("img",{src:a(6240).Z,alt:"alt text",title:"image Title",width:"900",height:"300"}))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u2139\ufe0f Naming Conventions"),(0,l.kt)("p",null,"4OA Audio: ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"A (audio)")," > ",(0,l.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,l.kt)("code",null,"Bit-depth")," "),(0,l.kt)("p",null,"8K Video:  ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"V (video)")," > ",(0,l.kt)("code",null,"Resolution")," > ",(0,l.kt)("code",null,"Frames-per-second")," > ",(0,l.kt)("code",null,"Duration")," "),(0,l.kt)("p",null,"YouTube:   ",(0,l.kt)("code",null,"SceneName+Version")," > ",(0,l.kt)("code",null,"AV (audiovideo)")," > ",(0,l.kt)("code",null,"Resolution")," > ",(0,l.kt)("code",null,"Frames-per-second")," > ",(0,l.kt)("code",null,"Duration")," > ",(0,l.kt)("code",null,"AmbisonicsFormat+Order")," > ",(0,l.kt)("code",null,"Bit-depth"))))}h.isMDXComponent=!0},6240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lake01_separate-d4e7596db551433e0095499ba60fbee3.png"}}]);