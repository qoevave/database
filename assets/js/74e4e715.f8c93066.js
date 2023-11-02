"use strict";(self.webpackChunkdatabase=self.webpackChunkdatabase||[]).push([[710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6775),s=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??d;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=a(2389);const v="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},i,{className:(0,o.Z)("tabs__item",y,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(S,(0,n.Z)({key:String(t)},e))}},3001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const o={},i="Saliency Database",l={unversionedId:"Saliency/index",id:"Saliency/index",title:"Saliency Database",description:"Overview",source:"@site/docs/Saliency/index.mdx",sourceDirName:"Saliency",slug:"/Saliency/",permalink:"/database/docs/Saliency/",draft:!1,editUrl:"https://github.com/qoevave/database/tree/gh-pages/docs/Saliency/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Train",permalink:"/database/docs/Scenes/Train"},next:{title:"Badminton05",permalink:"/database/docs/Saliency/Badminton05"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Data Description",id:"saliency-general",level:2},{value:"Publication",id:"publication",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"saliency-database"},"Saliency Database"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The QoEVAVE Saliency Database is based on subjects ",(0,r.kt)("strong",{parentName:"p"},"head-tracking")," of free-form exploration of 14 360 degree videos presented over a head-mounted-display with three audio scenarios; ",(0,r.kt)("em",{parentName:"p"},"no audio, mono audio, and 4th-order head-tracked Ambisonics audio"),". In addition to the head tracking data for the three audio scenarios, ",(0,r.kt)("strong",{parentName:"p"},"scene descriptions")," and ",(0,r.kt)("strong",{parentName:"p"},"cybersickness scores")," are collected through a post-viewing verbalization task and simulator sickness questionnaire. "),(0,r.kt)("h2",{id:"saliency-general"},"Data Description"),(0,r.kt)("p",null,"The download of the saliency data is spil up into two parts.\nOn this page the general information about the Subjects (age, gender, prior experience with HMDs) and the\nratings of the Simulator Sickness Questionnaire can be downloaded:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Subject Information and Simulator Sickness Questionnaire File: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/General/SubjectData.csv"},"Subject_and_SSQ_Data.csv"))),(0,r.kt)("p",null,"On the specific sub-pages for each video, more information like  the ",(0,r.kt)("strong",{parentName:"p"},"Head-Rotation Data")," or the ",(0,r.kt)("strong",{parentName:"p"},"Scene Verbalisation Data")," can be downloaded."),(0,r.kt)("p",null,"If you want to download the data of all the scenes together at once, please you the following links:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Headrotation data for full video-duration: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/HeadrotationFull.zip"},"HeadrotationFullDuration.zip")),(0,r.kt)("li",null,"Headrotation data for videos cut down in 10 second parts: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/Headrotation10secCuts.zip"},"Headrotation10secCuts.zip")),(0,r.kt)("li",null,"Heatmaps of the 10 second parts: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/HeatMaps.zip"},"HeatMaps.zip")),(0,r.kt)("li",null,"All Ridgelineplots: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/RidgelinePlots.zip"},"RidgelinePlots.zip")),(0,r.kt)("li",null,"Sceneverbalisation: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/SceneVerbalisation.zip"},"SceneVerbalisation.zip")),(0,r.kt)("li",null,"All Circular Barplots: ",(0,r.kt)("a",{href:"https://avtshare01.rz.tu-ilmenau.de/QoEvaVE_Database/Saliency/SaliencyData/CircularBarPlots.zip"},"CircularBarPlots.zip"))),(0,r.kt)("h2",{id:"publication"},"Publication"),(0,r.kt)("p",null,"When using the QoEVAVE Saliency Database, please cite the following works. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Singla, A., Robotham, T., Menz, W., Raake, A., Habets, E. A. P. June, 2023.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Saliency of Omnidirectional Videos with Different Audio Presentations: Analyses and Dataset")),". In Proc, 15th International Conference on Quality of Multimedia Experience (QoMEX). Ghent, Belgium.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@inproceedings{singla2023,\ntitle = {Saliency of Omnidirectional Videos with Different Audio Presentations: Analyses and Dataset},\nauthor = {Singla, Ashutosh and Robotham, Thomas and Menz, William and Raake, Alexander and Habets, Emanu\xebl A. P.},\nyear = {2023},\nbooktitle = {15th International Conference on Quality of Multimedia Experience},\naddress={Ghent, Belgium},\npages={1--6},\ndoi={t.b.d}\n}\n")))}d.isMDXComponent=!0}}]);